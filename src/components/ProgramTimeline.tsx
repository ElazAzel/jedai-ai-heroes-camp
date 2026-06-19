'use client'

import { motion } from 'framer-motion'
import { PROGRAM_DAYS } from '@/data/landingPages'
import { trackEvent } from '@/lib/analytics'

export function ProgramTimeline() {
  return (
    <section id="program" className="py-16 sm:py-20" aria-label="Программа по дням">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.h2
          className="section-header gradient-text-cyber"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Путь ребёнка за 10 дней
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Каждый день — новый этап знакомства с AI и создания проекта
        </motion.p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 scrollbar-none">
          {PROGRAM_DAYS.map((day, i) => (
            <motion.div
              key={day.day}
              className="card flex-shrink-0 w-56 sm:w-auto snap-start cursor-pointer border-glow-hover"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackEvent('program_day_open', { day: day.day })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('program_day_open', { day: day.day }) }}
              role="button"
              tabIndex={0}
              aria-label={`День ${day.day}: ${day.title}`}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-semibold text-accent-light bg-accent/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                  День {day.day}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2 leading-snug">
                {day.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                {day.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
