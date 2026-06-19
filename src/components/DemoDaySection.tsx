'use client'

import { motion } from 'framer-motion'

export function DemoDaySection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Demo Day">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.div
          className="card card-glow text-center p-5 sm:p-8 md:p-12"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.span
            className="badge mb-2 sm:mb-4 inline-flex"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Кульминация лагеря
          </motion.span>
          <motion.h2
            className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 gradient-text-cyber"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Demo Day
          </motion.h2>
          <motion.p
            className="text-xs sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-4 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            В финале лагеря дети презентуют свои AI-проекты перед родителями,
            наставниками и представителями компании. Это эмоциональное событие,
            которое объединяет семьи и корпоративное сообщество.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl mx-auto">
            {['Презентация проектов', 'Ответы на вопросы', 'Вручение сертификатов'].map((item, i) => (
              <motion.div
                key={item}
                className="card px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-zinc-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
