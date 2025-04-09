'use client'

import Link from 'next/link'
import { Github, X, Instagram, Linkedin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SOCIAL_LINKS } from '@/data/data'

const Footer = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) return null

  return (
    <footer className="mt-16 w-full border-t border-zinc-200 py-6 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <Link
              href="/terms-and-policies"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Terms & policies
            </Link>
            <span>&middot;</span>
            <Link
              href="/sitemap"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Sitemap
            </Link>
          </div>
          <div className="text-sm text-zinc-500 md:text-center md:text-left dark:text-zinc-400">
            <p>
              © 2020—{new Date().getFullYear()}{' '}
              <Link
                href="https://github.com/sushilsubedi"
                target="_blank"
                className="underline"
              >
                Sushil Subedi
              </Link>
              . All Rights Reserved.
            </p>
            <p>
              With regards from a beautiful country,{' '}
              <Link
                href="https://en.wikipedia.org/wiki/Nepal"
                target="_blank"
                className="underline"
              >
                Nepal
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-5 text-zinc-400 dark:text-zinc-500">
          <Link
            href={SOCIAL_LINKS.TWITTER}
            target="_blank"
            className="mt-1 text-base font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <X size={24} />
          </Link>
          <Link
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            className="text-base font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Github size={20} />
          </Link>
          <Link
            href={SOCIAL_LINKS.INSTAGRAM}
            target="_blank"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
