'use client'

import { motion } from 'framer-motion'
import { SAFETY_TOPICS } from '@/data/landingPages'

export function SafetySection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Безопасность и этика">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.h2
          className="section-header gradient-text-cyber"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Безопасность и этика AI
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          В JEDAI мы уделяем особое внимание безопасному использованию технологий
        </motion.p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scrollbar-none">
          {SAFETY_TOPICS.map((topic, i) => (
            <motion.div
              key={topic.title}
              className="card flex-shrink-0 w-56 sm:w-auto snap-start border-glow-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mb-2 sm:mb-3"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{topic.title}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
