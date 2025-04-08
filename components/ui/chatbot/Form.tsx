'use client'

import React, { memo } from 'react'

import { FormProps } from '@/constants/types'

const Form: React.FC<FormProps> = ({
  input,
  handleInputChange,
  handleSubmit,
  handleKeyDown,
  status,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center space-x-2 rounded-full bg-gray-800 p-2 shadow-lg">
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about Sushil..."
          rows={1}
          className="flex-1 resize-none bg-transparent p-2 text-sm text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className={`rounded-full p-2 transition-all duration-200 ${
            status === 'submitted'
              ? 'cursor-not-allowed bg-gray-600'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={status === 'submitted'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default memo(Form)
