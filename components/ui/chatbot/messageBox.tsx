'use client'

import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { MessageBoxProps, Part } from '@/constants/types'

function MessageBox({ messages, isAIMessageLoading }: MessageBoxProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight
    }
  }, [messages])
  return (
    <div className="h-[60vh]">
      <div
        className="h-full overflow-y-auto rounded-lg bg-gray-900 p-4"
        ref={scrollContainerRef}
      >
        <div className="min-h-16 space-y-4 py-2 pr-2">
          {messages.map((message: any) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-full ${message.role === 'user' ? 'md:max-w-[50%]' : 'md:max-w-[80%]'}`}
              >
                <div
                  className={`w-full rounded-lg p-3 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {!isAIMessageLoading && (
                    <p className="font-bold text-gray-200">
                      {message.role === 'user' ? 'Guest' : 'Sushil AI'}:
                    </p>
                  )}
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
          {isAIMessageLoading && (
            <div className="flex w-14 items-center justify-start space-x-2 rounded-lg bg-gray-700 p-3 pt-4 text-white shadow-sm">
              <div className="flex space-x-1">
                <div className="animation-delay-200 h-2.5 w-2.5 animate-bounce rounded-full bg-gray-500"></div>
                <div className="animation-delay-300 h-2.5 w-2.5 animate-bounce rounded-full bg-gray-500"></div>
                <div className="animation-delay-400 h-2.5 w-2.5 animate-bounce rounded-full bg-gray-500"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(MessageBox)
