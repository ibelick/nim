// TODO: change the type
export default function MessageBox({ messages }: any) {
  return (
    <div className="max-h-[70vh] min-h-[50vh] space-y-4 overflow-y-auto rounded-lg bg-gray-900 p-4">
      {messages.map((message: any) => (
        <div
          key={message.id}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[50%] rounded-lg p-3 shadow-sm ${
              message.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-white'
            }`}
          >
            {message.parts.map((part, index) => {
              switch (part.type) {
                case 'text':
                  return (
                    <span key={index} className="ms-2 block w-auto w-full">
                      {part.text}
                    </span>
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
