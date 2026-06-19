'use client'

import { motion } from 'framer-motion'

export function GeoSummaryBlock({ summary }: { summary: string }) {
  return (
    <section className="py-12" aria-label="Резюме">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs sm:text-sm font-semibold text-accent-light uppercase tracking-wider mb-2 sm:mb-3">
              О чём эта страница
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {summary}
            </p>
          </motion.div>
          <motion.div
            className="card card-glow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3 sm:mb-4">
              Факты
            </h3>
            <dl className="space-y-2 sm:space-y-3">
              {[
                { label: 'Формат', value: 'Корпоративный AI-лагерь' },
                { label: 'Длительность', value: '10 учебных дней' },
                { label: 'Возраст', value: '10–16 лет' },
                { label: 'Итог', value: 'Demo Day + сертификат' },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex justify-between gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.3 }}
                >
                  <dt className="text-zinc-400 text-xs sm:text-sm">{label}</dt>
                  <dd className="text-white font-medium text-xs sm:text-sm text-right">{value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
