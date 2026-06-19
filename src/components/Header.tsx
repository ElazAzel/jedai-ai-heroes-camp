'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HEADER_LINKS } from '@/data/landingPages'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <Link
          href="/"
          className="text-base sm:text-lg font-bold text-white tracking-tight"
        >
          <span className="gradient-text">JEDAI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-zinc-400 p-2 cursor-pointer hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
          aria-expanded={mobileOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-4 py-3 space-y-1">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
