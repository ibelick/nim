import React from 'react'
import { Message } from 'ai'
import ReactMarkdown from 'react-markdown'

import { Part } from '@/constants/types'

function MessageBox({ messages }: { messages: Message[] }) {
  return (
    <div className="h-[50vh]">
      <div className="h-full overflow-y-auto rounded-lg bg-gray-900 p-4">
        <div className="h-full space-y-4 py-2 pr-2">
          {messages.map((message: any) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`${message.role === 'user' ? 'max-w-[50%]' : 'max-w-[80%]'}`}
              >
                <div
                  className={`w-full rounded-lg p-3 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  <p className="font-bold text-gray-200">
                    {message.role === 'user' ? 'Guest' : 'SushilAI'}:
                  </p>
                  {message.parts.map((part: Part, index: number) => {
                    switch (part.type) {
                      case 'text':
                        return (
                          <ReactMarkdown key={index}>{part.text}</ReactMarkdown>
                        )
                      default:
                        return null
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(MessageBox)
