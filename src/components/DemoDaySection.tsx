export function DemoDaySection() {
  return (
    <section className="py-16" aria-label="Demo Day">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Demo Day
            </h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-6">
              В финале лагеря дети презентуют свои AI-проекты перед родителями,
              наставниками и представителями компании. Это эмоциональное событие,
              которое объединяет семьи и корпоративное сообщество.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                'Презентация проектов',
                'Ответы на вопросы',
                'Вручение сертификатов',
              ].map((item) => (
                <div key={item} className="glass rounded-xl px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
