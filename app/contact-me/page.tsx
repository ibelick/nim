'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<FormData>

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string>('')

  const validate = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' }) // clear error on input
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('Message sent successfully!')
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus(data.error || 'Failed to send message.')
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again later.')
    }

    setLoading(false)
  }

  return (
    <section className="w-full bg-gray-900 px-4 py-12 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Get in Touch
        </h2>
        <p className="mb-10 text-center text-gray-400">
          I'd love to hear from you! Fill out the form and I’ll get back to you
          shortly.
        </p>

        {status && (
          <div
            className={`mb-6 rounded-lg px-4 py-3 text-center text-xl font-medium ${
              submitted ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}
          >
            {status}
          </div>
        )}

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full rounded-md border bg-gray-800 p-3 text-white placeholder-gray-400 focus:ring-2 focus:outline-none ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-700 focus:ring-blue-500'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-md border bg-gray-800 p-3 text-white placeholder-gray-400 focus:ring-2 focus:outline-none ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-700 focus:ring-blue-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className={`w-full rounded-md border bg-gray-800 p-3 text-white placeholder-gray-400 focus:ring-2 focus:outline-none ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-700 focus:ring-blue-500'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-block w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 focus:outline-none disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold text-green-400">
              Thank you!
            </h3>
            <p className="mt-2 text-gray-400">
              Your message has been successfully sent. I'll be in touch soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
