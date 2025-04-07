import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { streamText } from 'ai'
import { NextResponse } from 'next/server'

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const model = google('gemini-1.5-flash')

    const { messages } = data

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const result = await streamText({ model, messages })

    console.log(
      'result',
      JSON.stringify(result.toDataStreamResponse(), null, 2),
    )

    return result.toDataStreamResponse()
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to generate response',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
