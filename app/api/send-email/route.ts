import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import { validateContactForm } from '@/lib/validate'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const validationErrors = validateContactForm({ name, email, message })

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 },
      )
    }

    await sendContactEmail({ name, email, message })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Try again later.' },
      { status: 500 },
    )
  }
}
