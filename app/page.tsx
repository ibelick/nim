import ChatBot from '@/components/ui/chatbot'
import Navigation from '@/components/ui/Navigation'

export default function Home() {
  return (
    <div className="flex flex-col md:justify-center">
      <header className="flex justify-end md:justify-center">
        <Navigation />
      </header>
      <main className="mt-4">
        <section className="mx-auto my-8 text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-5xl md:text-7xl">
            Greeting, Folks 👋
          </h1>
          <p className="mb-3 text-base text-zinc-700 md:text-xl dark:text-zinc-500">
            I build beautiful and accessible products that make technology feel
            effortless and inclusive.
          </p>
        </section>
        <ChatBot />
      </main>
    </div>
  )
}
