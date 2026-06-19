'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FOOTER_POPULAR_PAGES } from '@/data/landingPages'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-zinc-500 hover:text-white transition-colors relative group inline-block"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-accent to-accent-light group-hover:w-full transition-all duration-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-base sm:text-lg font-bold gradient-text-cyber mb-4 inline-block">
              JEDAI
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Корпоративный AI-лагерь для детей сотрудников. 10 учебных дней, AI-проекты и Demo Day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-zinc-200 mb-4">
              Популярные страницы
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_POPULAR_PAGES.map((page) => (
                <li key={page.href}>
                  <FooterLink href={page.href}>{page.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-zinc-200 mb-4">
              О программе
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Программа', href: '/ai-camp-program' },
                { label: 'Для компаний', href: '/for-companies' },
                { label: 'Для родителей', href: '/for-parents' },
                { label: 'Безопасность', href: '/safe-ai-for-kids' },
                { label: 'Все города', href: '/cities' },
              ].map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-zinc-200 mb-4">
              Контакты
            </h4>
            <Link
              href="/ai-camp-commercial-offer"
              className="btn btn-primary btn-glow inline-flex"
            >
              Получить предложение
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-zinc-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} JEDAI. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
