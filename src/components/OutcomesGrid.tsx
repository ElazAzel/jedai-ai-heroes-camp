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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="bento-card"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-violet/30 flex items-center justify-center mb-3">
        <span className="text-sm font-bold text-white">{index + 1}</span>
      </div>
      <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
      <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
    </div>
  )
}

export function OutcomesGrid() {
  return (
    <section className="py-20" aria-label="Результаты лагеря">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Что ребёнок создаёт</span>
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          За 10 учебных дней каждый участник проходит путь от знакомства с AI до собственного проекта
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {OUTCOMES.map((item, i) => (
            <OutcomeCard key={item.title} title={item.title} description={item.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
