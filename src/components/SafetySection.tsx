import { SAFETY_TOPICS } from '@/data/landingPages'

export function SafetySection() {
  return (
    <section className="py-16" aria-label="Безопасность и этика">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Безопасность и этика AI
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          В JEDAI мы уделяем особое внимание безопасному использованию технологий
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SAFETY_TOPICS.map((topic) => (
            <div key={topic.title} className="glass rounded-xl p-5">
              <h3 className="text-sm font-semibold text-cyan-300 mb-2">{topic.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
