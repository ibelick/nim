'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src="/profile-picture.jpg"
            alt="Ipshita Chatterjee"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Ipshita Chatterjee
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Design Engineer - JP Morgan Chase
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
