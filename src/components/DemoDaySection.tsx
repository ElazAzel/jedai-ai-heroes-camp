export function DemoDaySection() {
  return (
    <section className="py-20" aria-label="Demo Day">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-premium rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <span className="badge mb-4">Кульминация лагеря</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Demo Day</span>
            </h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              В финале лагеря дети презентуют свои AI-проекты перед родителями,
              наставниками и представителями компании. Это эмоциональное событие,
              которое объединяет семьи и корпоративное сообщество.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
              {[
                'Презентация проектов',
                'Ответы на вопросы',
                'Вручение сертификатов',
              ].map((item) => (
                <div key={item} className="glass rounded-xl px-5 py-3 text-sm text-zinc-200">
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
