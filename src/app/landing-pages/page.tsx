import type { Metadata } from 'next'
import Link from 'next/link'
import { LANDING_PAGES, SITE_URL } from '@/data/landingPages'

export const metadata: Metadata = {
  title: 'Все страницы JEDAI AI Heroes Camp',
  description: 'Полный список SEO-страниц JEDAI AI Heroes Camp: все целевые аудитории, поисковые интенты и форматы.',
  alternates: {
    canonical: `${SITE_URL}/landing-pages`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LandingPagesIndex() {
  const segments = [...new Set(LANDING_PAGES.map((p) => p.experimentVariant))]

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Все страницы JEDAI AI Heroes Camp
          </h1>
          <p className="text-zinc-400">
            Полный список SEO-оптимизированных страниц. Каждая страница предназначена для своей аудитории и поискового интента.
          </p>
        </div>

        <div className="space-y-8">
          {segments.map((segment) => {
            const pages = LANDING_PAGES.filter((p) => p.experimentVariant === segment)
            return (
              <div key={segment}>
                <h2 className="text-lg font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                  {segment}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Страница</th>
                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Аудитория</th>
                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Интент</th>
                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">CTA</th>
                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pages.map((page) => (
                        <tr key={page.slug} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 px-4">
                            <Link
                              href={`/${page.slug}`}
                              className="text-white hover:text-cyan-300 transition-colors"
                            >
                              /{page.slug}
                            </Link>
                          </td>
                          <td className="py-3 px-4 text-zinc-300">{page.audience}</td>
                          <td className="py-3 px-4 text-zinc-300">{page.intent}</td>
                          <td className="py-3 px-4 text-zinc-300">{page.ctaPrimary}</td>
                          <td className="py-3 px-4">
                            <span className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded-full">
                              Индексируется
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-zinc-500 text-sm">
            Всего страниц: {LANDING_PAGES.length} | Последнее обновление: {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
    </div>
  )
}
