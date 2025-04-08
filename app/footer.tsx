
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-zinc-100 pb-12 pt-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Home
          </Link>
          <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Blog
          </Link>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
