'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="relative z-50">
      {/* Desktop Nav */}
      <div
        className={cn(
          'hidden items-center font-medium md:flex',
          isHome ? 'gap-12 text-2xl' : 'gap-10 text-base',
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
                isActive && 'font-semibold text-black dark:text-white',
              )}
            >
              {label}
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="p-2 md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
        ) : (
          <Menu className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
        )}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="ring-opacity-5 absolute right-0 mt-2 w-48 rounded-md bg-white ring-1 shadow-lg ring-black md:hidden dark:bg-zinc-900">
          <div className="flex flex-col space-y-2 px-4 py-2">
            {links.map(({ href, label, key }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-sm font-medium transition-colors',
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
