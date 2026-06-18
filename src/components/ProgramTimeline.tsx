'use client'

import { PROGRAM_DAYS } from '@/data/landingPages'
import { trackEvent } from '@/lib/analytics'

export function ProgramTimeline() {
  return (
    <section id="program" className="py-16 bg-zinc-900/30" aria-label="Программа по дням">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Путь ребёнка за 10 дней
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Каждый день — новый этап знакомства с AI и создания проекта
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROGRAM_DAYS.map((day) => (
            <div
              key={day.day}
              className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => trackEvent('program_day_open', { day: day.day })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('program_day_open', { day: day.day }) }}
              role="button"
              tabIndex={0}
              aria-label={`День ${day.day}: ${day.title}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                  День {day.day}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
                {day.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {day.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
