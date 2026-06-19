'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '@/lib/analytics'
import type { FAQItem } from '@/types'

export function FAQSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback(
    (index: number) => {
      const isOpen = openIndex === index
      setOpenIndex(isOpen ? null : index)
      if (!isOpen) {
        trackEvent('faq_open', { question: items[index].question })
      }
    },
    [openIndex, items]
  )

  return (
    <section id="faq" className="py-16 sm:py-20" aria-label="Часто задаваемые вопросы">
      <hr className="section-divider" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.h2
          className="section-header gradient-text-cyber"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Часто задаваемые вопросы
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-xl sm:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ответы на самые популярные вопросы о лагере
        </motion.p>
        <div className="space-y-2 sm:space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="card overflow-hidden p-0 border-glow-hover"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-base text-white font-medium cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="flex-1 pr-2">{item.question}</span>
                <motion.span
                  className="text-accent-light flex-shrink-0"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    role="region"
                  >
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
