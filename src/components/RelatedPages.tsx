'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LANDING_PAGES } from '@/data/landingPages'

export function RelatedPages({ slugs }: { slugs: string[] }) {
  const pages = LANDING_PAGES.filter((p) => slugs.includes(p.slug))

  if (pages.length === 0) return null

  return (
    <section className="py-16 sm:py-20" aria-label="Связанные страницы">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.h2
          className="section-header gradient-text-cyber"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Читайте также
        </motion.h2>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-4xl sm:mx-auto scrollbar-none">
          {pages.map((page, i) => (
            <motion.div
              key={page.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
            >
              <Link
                href={`/${page.slug}`}
                className="card flex-shrink-0 w-64 sm:w-auto snap-start group border-glow-hover block"
              >
                <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-light transition-colors mb-1 sm:mb-2">
                  {page.h1}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400 line-clamp-2">
                  {page.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
