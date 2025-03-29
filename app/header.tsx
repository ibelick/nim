'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between ">
      <div className='flex items-center gap-2'>
        <Link href="/" className="font-medium text-black dark:text-white">
          Julien Nim
        </Link> -
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Design Engineer
        </TextEffect>
      </div>
      <div className='flex items-center gap-4 justify-between'>
      <Link href="/solutions" className="text-black dark:text-white">
          Solutions
        </Link>
        <Link href="/about" className="text-black dark:text-white">
          About
        </Link>
        <Link href="/blog" className="text-black dark:text-white">
          Blog
        </Link>

      </div>
    </header>
  )
}
