'use client'

import { trackEvent } from '@/lib/analytics'

export function FormatsSection() {
  const formats = [
    {
      title: 'On-site',
      description: 'Лагерь на базе компании — ваш офис становится образовательной площадкой',
      icon: '🏢',
    },
    {
      title: 'Внешняя площадка',
      description: 'Готовый формат под ключ на выбранной площадке без организационной нагрузки',
      icon: '🌳',
    },
    {
      title: 'Weekend AI Lab',
      description: 'Короткий формат выходного дня для быстрого знакомства с AI',
      icon: '🚀',
    },
    {
      title: 'Family Day',
      description: 'Семейное мероприятие с AI-мастер-классами и мини-проектами',
      icon: '👨‍👩‍👧‍👦',
    },
  ]

  return (
    <section className="py-16 bg-zinc-900/30" aria-label="Форматы проведения">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Форматы проведения
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Выберите формат, который подходит вашей компании
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format) => (
            <div
              key={format.title}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => trackEvent('format_card_click', { format: format.title })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('format_card_click', { format: format.title }) }}
              role="button"
              tabIndex={0}
              aria-label={`Формат: ${format.title}`}
            >
              <div className="text-3xl mb-4">{format.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{format.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
