import Link from 'next/link'
import { LANDING_PAGES } from '@/data/landingPages'

export function GeolistSection() {
  const cityPages = LANDING_PAGES.filter(p =>
    p.slug.includes('almaty') ||
    p.slug.includes('astana') ||
    p.slug.includes('shymkent') ||
    p.slug.includes('atyrau') ||
    p.slug.includes('karaganda') ||
    p.slug.includes('aktau')
  )

  const otherPages = LANDING_PAGES.filter(p =>
    !cityPages.includes(p)
  )

  return (
    <div className="space-y-10 sm:space-y-14">
      <div>
        <h2 className="section-header">Города</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {cityPages.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="card group transition-all duration-200 hover:border-zinc-600">
              <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent-light transition-colors mb-1">{p.h1}</h3>
              <p className="text-xs text-zinc-500 line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className="section-header">Все страницы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {otherPages.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="card group transition-all duration-200 hover:border-zinc-600">
              <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent-light transition-colors mb-1">{p.h1}</h3>
              <p className="text-xs text-zinc-500 line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
