import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-end py-4 px-5">
      <div className='flex justify-end'>
        <Link href="/" className="font-medium text-black dark:text-white">
          Home
        </Link>
      </div>
    </header>
  )
}
