export type MessageBoxProps = MessageBox[]

interface MessageBox {
  messages: Message[]
}

interface Message {
  id: string
  createdAt: string
  role: string
  content: string
  parts: Part[]
}

interface Part {
  type: string
  text: string
}
