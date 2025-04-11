type ContactFormInput = {
  name: string
  email: string
  message: string
}

export function validateContactForm(data: ContactFormInput) {
  const errors: Partial<ContactFormInput> = {}

  if (!data.name?.trim()) errors.name = 'Name is required'
  if (!data.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = 'Invalid email format'
  }
  if (!data.message?.trim()) errors.message = 'Message is required'

  return errors
}
