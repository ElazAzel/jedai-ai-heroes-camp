'use client'

import { useState, useEffect, useRef } from 'react'
import { OUTCOMES } from '@/data/landingPages'

function OutcomeCard({ title, description, index }: { title: string; description: string; index: number }) {
  const [revealed, setRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="card"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s`,
      }}
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent flex items-center justify-center mb-2 sm:mb-3">
        <span className="text-xs sm:text-sm font-bold text-white">{index + 1}</span>
      </div>
      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{title}</h3>
      <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">{description}</p>
    </div>
  )
}

export function OutcomesGrid() {
  return (
    <section className="py-16 sm:py-20" aria-label="Результаты лагеря">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <h2 className="section-header">
          Что ребёнок создаёт
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto">
          За 10 учебных дней каждый участник проходит путь от знакомства с AI до собственного проекта
        </p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 scrollbar-none">
          {OUTCOMES.map((item, i) => (
            <OutcomeCard key={item.title} title={item.title} description={item.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
