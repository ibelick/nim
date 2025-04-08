import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { streamText } from 'ai'

import { chatHistory } from '@/data/gemini/chatConfig'

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

    const fullMessages = [
      ...JSON.parse(JSON.stringify(chatHistory)),
      ...messages,
    ]

    const result = await streamText({ model, messages: fullMessages })

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
