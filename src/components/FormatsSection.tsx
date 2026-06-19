'use client'

import { trackEvent } from '@/lib/analytics'

const formats = [
  {
    title: 'On-site',
    description: 'Лагерь на базе компании — ваш офис становится образовательной площадкой',
    benefits: ['Минимум логистики', 'Привычная среда', 'Корпоративный брендинг'],
  },
  {
    title: 'Внешняя площадка',
    description: 'Готовый формат под ключ на выбранной площадке без организационной нагрузки',
    benefits: ['Новая обстановка', 'Полный сервис', 'Отдых и обучение'],
  },
  {
    title: 'Weekend AI Lab',
    description: 'Короткий формат выходного дня для быстрого знакомства с AI',
    benefits: ['2 дня', 'Мини-проект', 'Демонстрация'],
  },
  {
    title: 'Family Day',
    description: 'Семейное мероприятие с AI-мастер-классами и мини-проектами',
    benefits: ['Вся семья', 'Мастер-классы', 'Нетворкинг'],
  },
]

export function FormatsSection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Форматы проведения">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <h2 className="section-header">
          Форматы проведения
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto">
          Выберите формат, который подходит вашей компании
        </p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scrollbar-none">
          {formats.map((format) => (
            <div
              key={format.title}
              className="card flex-shrink-0 w-64 sm:w-auto snap-start cursor-pointer transition-all duration-200 hover:border-zinc-600"
              onClick={() => trackEvent('format_card_click', { format: format.title })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('format_card_click', { format: format.title }) }}
              role="button"
              tabIndex={0}
              aria-label={`Формат: ${format.title}`}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{format.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4 leading-relaxed">{format.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {format.benefits.map((b) => (
                  <span key={b} className="text-[10px] sm:text-xs text-accent-light bg-accent/10 px-1.5 sm:px-2 py-0.5 rounded-full">{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
