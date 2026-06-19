export function DemoDaySection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Demo Day">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="card text-center p-5 sm:p-8 md:p-12">
          <span className="badge mb-2 sm:mb-4">Кульминация лагеря</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Demo Day
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-4 sm:mb-8 leading-relaxed">
            В финале лагеря дети презентуют свои AI-проекты перед родителями,
            наставниками и представителями компании. Это эмоциональное событие,
            которое объединяет семьи и корпоративное сообщество.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl mx-auto">
            {['Презентация проектов', 'Ответы на вопросы', 'Вручение сертификатов'].map((item) => (
              <div key={item} className="card px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
