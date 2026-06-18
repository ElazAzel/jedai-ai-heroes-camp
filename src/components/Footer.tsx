import Link from 'next/link'
import { FOOTER_POPULAR_PAGES } from '@/data/landingPages'

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/5 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">
              JEDAI AI Heroes Camp
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Корпоративный AI-лагерь для детей сотрудников. 10 учебных дней, AI-проекты и Demo Day.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Популярные страницы
            </h4>
            <ul className="space-y-2">
              {FOOTER_POPULAR_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              О программе
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-camp-program" className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors">
                  Программа
                </Link>
              </li>
              <li>
                <Link href="/ai-camp-for-employees-children" className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors">
                  Для компаний
                </Link>
              </li>
              <li>
                <Link href="/ai-camp-for-parents" className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors">
                  Для родителей
                </Link>
              </li>
              <li>
                <Link href="/safe-ai-for-kids" className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors">
                  Безопасность
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Контакты
            </h4>
            <Link
              href="/ai-camp-commercial-offer"
              className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-electric via-violet to-cyan text-white text-sm font-semibold hover:opacity-90 transition-all glow"
            >
              Получить предложение
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} JEDAI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
