import { OUTCOMES } from '@/data/landingPages'

export function OutcomesGrid() {
  return (
    <section className="py-16" aria-label="Результаты лагеря">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Что ребёнок создаёт
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          За 10 учебных дней каждый участник проходит путь от знакомства с AI до собственного проекта
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {OUTCOMES.map((item) => (
            <div
              key={item.title}
              className="glass rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
