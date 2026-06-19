'use client'

import { motion } from 'framer-motion'
import { OUTCOMES } from '@/data/landingPages'

export function OutcomesGrid() {
  return (
    <section className="py-16 sm:py-20" aria-label="Результаты лагеря">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.h2
          className="section-header gradient-text-cyber"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Что ребёнок создаёт
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          За 10 учебных дней каждый участник проходит путь от знакомства с AI до собственного проекта
        </motion.p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 scrollbar-none">
          {OUTCOMES.map((item, i) => (
            <motion.div
              key={item.title}
              className="card flex-shrink-0 w-56 sm:w-auto snap-start border-glow-hover"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <motion.div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent flex items-center justify-center mb-2 sm:mb-3"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <span className="text-xs sm:text-sm font-bold text-white">{i + 1}</span>
              </motion.div>
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
