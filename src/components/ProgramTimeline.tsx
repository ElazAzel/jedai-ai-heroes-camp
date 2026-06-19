'use client'

import { PROGRAM_DAYS } from '@/data/landingPages'
import { trackEvent } from '@/lib/analytics'

export function ProgramTimeline() {
  return (
    <section id="program" className="py-16 sm:py-20" aria-label="Программа по дням">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <h2 className="section-header">
          Путь ребёнка за 10 дней
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto">
          Каждый день — новый этап знакомства с AI и создания проекта
        </p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 scrollbar-none">
          {PROGRAM_DAYS.map((day) => (
            <div
              key={day.day}
              className="card flex-shrink-0 w-56 sm:w-auto snap-start cursor-pointer transition-all duration-200 hover:border-zinc-600"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
