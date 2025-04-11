'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'

const links = [
  { href: '/projects', label: 'Projects', key: '5' },
  { href: '/about-me', label: 'About', key: '2' },
  { href: '/blog', label: 'Blog', key: '3' },
  { href: '/contact-me', label: 'Contact', key: '4' },
]

const Navigation = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav
      className={cn(
        'relative z-50 flex w-full',
        isHome ? 'justify-center' : 'justify-end',
      )}
    >
      <div
        className={cn(
          'hidden items-center font-medium md:flex',
          isHome ? 'gap-12 text-2xl' : 'gap-10 text-xl md:justify-center',
        )}
      >
        {links.map(({ href, label, key }) => {
          const isActive = pathname === href
          return (
            <Link
              key={key}
              href={href}
              className={cn(
                'transition-colors duration-200',
                'hover:text-zinc-800 dark:hover:text-zinc-200',
                'text-zinc-400 dark:text-zinc-500',
                isActive &&
                  'leading-1 font-semibold text-black dark:text-white',
              )}
            >
              {label}
            </Link>
          )
        })}
      </div>
      <button
        className="flex w-full cursor-pointer items-center justify-end p-2 md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
        ) : (
          <Menu className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-8 right-0 mt-2 w-[calc(100vw-2em)] rounded-xl border border-zinc-100 bg-white p-4 ring-1 shadow-lg shadow-zinc-200/50 ring-zinc-100 md:hidden md:w-56 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900/50 dark:ring-zinc-800"
        >
          <div className="flex flex-col space-y-4">
            {links.map(({ href, label, key }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-base font-medium transition-colors',
                    'text-zinc-600 dark:text-zinc-300',
                    'hover:text-black dark:hover:text-white',
                    isActive && 'font-semibold text-black dark:text-white',
                  )}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
