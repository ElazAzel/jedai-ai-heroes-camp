export function AeoAnswerBlock({ answer }: { answer: string }) {
  return (
    <section className="py-12 bg-zinc-900/50" aria-label="Краткий ответ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-cyan-400">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            Кратко
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </section>
  )
}
