'use client'

import { motion } from 'framer-motion'

export function AudienceCards({ audience }: { audience: string }) {
  const items = audience.split('/').map((s) => s.trim())

  return (
    <section className="py-12" aria-label="Для кого эта страница">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Для кого эта страница
        </motion.h2>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap sm:justify-center sm:overflow-visible scrollbar-none">
          {items.map((item, i) => (
            <motion.div
              key={item}
              className="card flex-shrink-0 snap-start text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 border-glow-hover"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{ scale: 1.04, y: -2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
