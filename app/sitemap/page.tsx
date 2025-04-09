export default function SitemapPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-zinc-900 md:text-5xl dark:text-white">
          Sitemap
        </h1>
        <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400">
          Your guide to my website—find my projects, blog posts, and story with
          ease. Perfect for visitors or collaborators curious about what I do.
        </p>
      </header>

      {/* Sitemap List */}
      <section className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
        <ul className="space-y-6 text-zinc-600 dark:text-zinc-400">
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/"
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Home
            </a>
            <p className="mt-1 text-sm sm:mt-0 sm:ml-4">
              The page where you get a quick overview of who I am and ask Sushil
              AI for more information.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/about-me"
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              About
            </a>
            <p className="mt-1 text-sm sm:mt-0 sm:ml-4">
              Learn more about my background, skills, and passions.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/projects"
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Projects
            </a>
            <p className="mt-1 text-sm sm:mt-0 sm:ml-4">
              Check out my portfolio of work, from coding projects to creative
              endeavors.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/blog"
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Blog
            </a>
            <p className="mt-1 text-sm sm:mt-0 sm:ml-4">
              Read my thoughts, tutorials, and updates on tech and beyond.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/contact-me"
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Contact
            </a>
            <p className="mt-1 text-sm sm:mt-0 sm:ml-4">
              Get in touch with me for collaborations, questions, or just to say
              hi.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/terms-and-policies"
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Terms & Policies
            </a>
            <p className="mt-1 text-sm sm:mt-0 sm:ml-4">
              Review the legal stuff governing the use of this site.
            </p>
          </li>
        </ul>
      </section>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Need help navigating?{' '}
          <a
            href="/contact-me"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Contact me
          </a>
          .
        </p>
      </div>
    </main>
  )
}
