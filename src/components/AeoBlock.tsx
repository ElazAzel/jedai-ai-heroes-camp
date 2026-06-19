export function AeoAnswerBlock({ answer }: { answer: string }) {
  return (
    <section className="py-12" aria-label="Краткий ответ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card border-l-4 border-l-accent">
          <h2 className="text-xs sm:text-sm font-semibold text-accent-light uppercase tracking-wider mb-2 sm:mb-3">
            Краткий ответ
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </section>
  )
}
