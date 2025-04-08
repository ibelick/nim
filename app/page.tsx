import ChatBot from '@/components/ui/chatbot'

export default function Home() {
  return (
    <main>
      <section className="mx-auto mb-8 text-center">
        <h1 className="mb-8 text-4xl font-bold">Hi, I'm Sushil 👋</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          I'm a software engineer and designer focused on building beautiful,
          accessible products.
        </p>
      </section>
      <ChatBot />
    </main>
  )
}
