import Link from 'next/link'
import { LANDING_PAGES } from '@/data/landingPages'

export function RelatedPages({ slugs }: { slugs: string[] }) {
  const pages = LANDING_PAGES.filter((p) => slugs.includes(p.slug))

  if (pages.length === 0) return null

  return (
    <section className="py-16 bg-zinc-900/30" aria-label="Связанные страницы">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Читайте также
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {page.h1}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
