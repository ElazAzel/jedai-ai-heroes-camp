export function AudienceCards({ audience }: { audience: string }) {
  const items = audience.split('/').map((s) => s.trim())

  return (
    <section className="py-12" aria-label="Для кого эта страница">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header">
          Для кого эта страница
        </h2>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap sm:justify-center sm:overflow-visible scrollbar-none">
          {items.map((item) => (
            <div
              key={item}
              className="card flex-shrink-0 snap-start text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
