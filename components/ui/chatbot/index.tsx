'use client'

import { useChat } from '@ai-sdk/react'

import Form from './Form'
import MessageBox from './messageBox'

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, status } = useChat({
    api: '/api/gemini',
  })

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div>
      <MessageBox messages={messages} />
      <Form
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        status={status}
      />
    </div>
  )
}
