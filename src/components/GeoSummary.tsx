export function GeoSummaryBlock({ summary }: { summary: string }) {
  return (
    <section className="py-12" aria-label="Резюме">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">
              О чём эта страница
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              {summary}
            </p>
          </div>
          <div className="bento-card rounded-xl p-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Факты
            </h3>
            <dl className="space-y-3">
              <div className="flex justify-between">
                <dt className="text-zinc-400">Формат</dt>
                <dd className="text-white font-medium">Корпоративный AI-лагерь</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">Длительность</dt>
                <dd className="text-white font-medium">10 учебных дней</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">Возраст</dt>
                <dd className="text-white font-medium">10–16 лет</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">Итог</dt>
                <dd className="text-white font-medium">Demo Day + сертификат</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
