'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { constant } from '@/lib/constants'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href={constant.website_url} className="font-medium text-black dark:text-white">
          {constant.author.name}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {constant.author.profession}
        </TextEffect>
      </div>
    </header>
  )
}
