import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-end px-5 py-4">
      <div className="flex justify-end">
        <Link
          href="/about-me"
          className="font-medium text-black dark:text-white"
        >
          About Me
        </Link>
      </div>
    </header>
  )
}
