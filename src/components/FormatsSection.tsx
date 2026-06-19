'use client'

import { trackEvent } from '@/lib/analytics'

const FORMAT_ICONS: Record<string, string> = {
  'On-site': '🏢',
  'Внешняя площадка': '🌳',
  'Weekend AI Lab': '🚀',
  'Family Day': '👨‍👩‍👧‍👦',
}

export function FormatsSection() {
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

  return (
    <section className="py-20 bg-zinc-900/20" aria-label="Форматы проведения">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Форматы проведения</span>
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Выберите формат, который подходит вашей компании
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format) => (
            <div
              key={format.title}
              className="bento-card cursor-pointer"
              onClick={() => trackEvent('format_card_click', { format: format.title })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('format_card_click', { format: format.title }) }}
              role="button"
              tabIndex={0}
              aria-label={`Формат: ${format.title}`}
            >
              <div className="text-3xl mb-4">{FORMAT_ICONS[format.title]}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{format.title}</h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{format.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {format.benefits.map((b) => (
                  <span key={b} className="text-xs text-cyan-300 bg-cyan-400/10 px-2 py-0.5 rounded-full">{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
