export function AudienceCards({ audience }: { audience: string }) {
  const items = audience.split('/').map((s) => s.trim())

  return (
    <section className="py-12" aria-label="Для кого эта страница">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="gradient-text">Для кого эта страница</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="badge text-sm px-5 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
