'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate async API call
    await new Promise((res) => setTimeout(res, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="flex w-full flex-col items-center px-4 py-12 text-white">
      <p className="mb-12 text-center text-gray-400">
        I'd love to hear from you! Fill out the form below and I'll be in touch
        soon.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium text-gray-300">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-400">Thank you!</h2>
          <p className="mt-2 text-gray-400">
            Your message has been successfully sent.
          </p>
        </div>
      )}
    </div>
  )
}
