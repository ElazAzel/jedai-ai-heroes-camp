'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <motion.nav
      aria-label="Breadcrumb"
      className="mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-600">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-zinc-700">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-accent-light transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  )
}
