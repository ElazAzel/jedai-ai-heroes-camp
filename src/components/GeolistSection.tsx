'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LANDING_PAGES } from '@/data/landingPages'

export function GeolistSection() {
  const cityPages = LANDING_PAGES.filter(p =>
    p.slug.includes('almaty') ||
    p.slug.includes('astana') ||
    p.slug.includes('shymkent') ||
    p.slug.includes('atyrau') ||
    p.slug.includes('karaganda') ||
    p.slug.includes('aktau')
  )

  const otherPages = LANDING_PAGES.filter(p =>
    !cityPages.includes(p)
  )

  return (
    <div className="space-y-10 sm:space-y-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-header gradient-text-cyber">Города</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {cityPages.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <Link href={`/${p.slug}`} className="card group block border-glow-hover">
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent-light transition-colors mb-1">{p.h1}</h3>
                <p className="text-xs text-zinc-500 line-clamp-2">{p.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="section-header gradient-text-cyber">Все страницы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {otherPages.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
            >
              <Link href={`/${p.slug}`} className="card group block border-glow-hover">
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent-light transition-colors mb-1">{p.h1}</h3>
                <p className="text-xs text-zinc-500 line-clamp-2">{p.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
