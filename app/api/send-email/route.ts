import { NextResponse } from 'next/server'

import nodemailer, { Transporter } from 'nodemailer'

const transporter: Transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      )
    }

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_ID,
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        padding: 15px !important;
      }

      .email-content {
        padding: 15px !important;
      }

      h2 {
        font-size: 20px !important;
      }

      p {
        font-size: 14px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
  <div class="email-container" style="max-width: 600px; margin: auto; padding: 20px; background-color: #ffffff; border-radius: 8px; font-family: Arial, sans-serif; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
    <div class="email-content" style="padding: 20px;">
      <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 8px; margin-top: 0;">
        📬 New Contact Form Submission
      </h2>

      <p><strong>Name:</strong> <span style="color: #555;">${name}</span></p>
      <p><strong>Email:</strong> <span style="color: #555;">${email}</span></p>

      <p style="margin-top: 20px;"><strong>Message:</strong></p>
      <div style="padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 6px; color: #333;">
        ${message}
      </div>

      <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
        This message was sent from the contact form on your website.
      </p>
    </div>
  </div>
</body>
</html>`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
