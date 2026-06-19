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
    <section id="faq" className="py-16 sm:py-20" aria-label="Часто задаваемые вопросы">
      <hr className="section-divider" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <h2 className="section-header">
          Часто задаваемые вопросы
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-xl sm:mx-auto">
          Ответы на самые популярные вопросы о лагере
        </p>
        <div className="space-y-2 sm:space-y-3">
          {items.map((item, i) => (
            <div key={i} className="card overflow-hidden p-0">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-base text-white font-medium cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="flex-1 pr-2">{item.question}</span>
                <span
                  className={`text-accent-light transition-transform duration-300 flex-shrink-0 ${
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
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-zinc-400 text-xs sm:text-sm leading-relaxed">
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
