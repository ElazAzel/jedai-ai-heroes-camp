import Link from 'next/link'
import { FOOTER_POPULAR_PAGES } from '@/data/landingPages'

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <Link href="/" className="text-base sm:text-lg font-bold gradient-text mb-4 inline-block">
              JEDAI
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Корпоративный AI-лагерь для детей сотрудников. 10 учебных дней, AI-проекты и Demo Day.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-200 mb-4">
              Популярные страницы
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_POPULAR_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-200 mb-4">
              О программе
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ai-camp-program" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Программа
                </Link>
              </li>
              <li>
                <Link href="/for-companies" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Для компаний
                </Link>
              </li>
              <li>
                <Link href="/for-parents" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Для родителей
                </Link>
              </li>
              <li>
                <Link href="/safe-ai-for-kids" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Безопасность
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Все города
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-200 mb-4">
              Контакты
            </h4>
            <Link
              href="/ai-camp-commercial-offer"
              className="btn btn-primary inline-flex"
            >
              Получить предложение
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-zinc-800 text-center">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} JEDAI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
