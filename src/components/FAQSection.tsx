'use client'

import { useState, useCallback } from 'react'
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
    <section id="faq" className="py-20 bg-zinc-900/20" aria-label="Часто задаваемые вопросы">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Часто задаваемые вопросы</span>
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">
          Ответы на самые популярные вопросы о лагере
        </p>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bento-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base text-white font-medium hover:bg-white/5 transition-colors cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.question}</span>
                <span
                  className={`text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`faq-answer ${openIndex === i ? 'open' : ''}`}
                role="region"
                aria-hidden={openIndex !== i}
              >
                <div className="px-6 pb-4 text-zinc-400 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
