import { SAFETY_TOPICS } from '@/data/landingPages'

export function SafetySection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Безопасность и этика">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <h2 className="section-header">
          Безопасность и этика AI
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-2xl sm:mx-auto">
          В JEDAI мы уделяем особое внимание безопасному использованию технологий
        </p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scrollbar-none">
          {SAFETY_TOPICS.map((topic) => (
            <div key={topic.title} className="card flex-shrink-0 w-56 sm:w-auto snap-start">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mb-2 sm:mb-3" />
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{topic.title}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
