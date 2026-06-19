'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProgramTimeline } from '@/components/ProgramTimeline'
import { OutcomesGrid } from '@/components/OutcomesGrid'
import { SafetySection } from '@/components/SafetySection'
import { FormatsSection } from '@/components/FormatsSection'
import { DemoDaySection } from '@/components/DemoDaySection'
import { LeadForm } from '@/components/LeadForm'
import { AeoAnswerBlock } from '@/components/AeoBlock'
import { GeoSummaryBlock } from '@/components/GeoSummary'

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? 'rgba(14,165,233,0.5)' : i % 3 === 1 ? 'rgba(139,92,246,0.4)' : 'rgba(6,182,212,0.3)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="relative min-h-[85vh] sm:min-h-[85vh] flex items-center bg-grid overflow-hidden">
        <Particles />
        <div className="absolute inset-0">
          <motion.div
            className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="hidden sm:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
          <motion.div
            className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="badge inline-flex mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              JEDAI AI Heroes Camp
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
              Корпоративный AI-лагерь
              <span className="gradient-text-cyber"> для детей сотрудников</span>
            </h1>
            <motion.p
              className="text-sm sm:text-base md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Забота о семьях сотрудников + образование будущего.
              Дети 10–16 лет создают AI-проекты за 10 учебных дней.
              HR benefit, CSR-активность и сильный employer brand.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <motion.a
                href="#form"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-electric via-violet to-cyan text-white transition-all btn-glow"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                Получить предложение для компании
              </motion.a>
              <Link
                href="/ai-camp-program"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base bg-zinc-800/50 border border-zinc-700 text-white hover:bg-zinc-700/50 transition-all"
              >
                Посмотреть программу
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AeoAnswerBlock
        answer="JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников. За 10 учебных дней дети 10–16 лет изучают AI-инструменты, создают изображения, видео, чат-ботов и командный проект. Финал — Demo Day с презентацией перед родителями и компанией. Лагерь может проходить на базе компании или на внешней площадке."
      />

      <section className="py-16" aria-label="Для кого">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Для кого JEDAI AI Heroes Camp
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Подходит для разных аудиторий и решает разные задачи
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { title: 'HR и L&D', desc: 'Современный benefit для сотрудников с детьми', href: '/hr-benefit-ai-camp' },
              { title: 'CSR и ESG', desc: 'Готовый образовательный социальный проект', href: '/csr-ai-camp-for-kids' },
              { title: 'Руководители', desc: 'Инструмент employer brand и заботы', href: '/corporate-ai-camp' },
              { title: 'Родители', desc: 'Безопасный AI-лагерь для вашего ребёнка', href: '/ai-camp-for-parents' },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="card card-glow block group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GeoSummaryBlock
        summary="JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников. Программа длится 10 учебных дней, дети создают AI-проекты и защищают их на Demo Day. Лагерь может быть проведён на базе компании или на внешней площадке. Формат подходит для HR-/CSR-стратегии компаний, заботящихся о семьях сотрудников."
      />

      <ProgramTimeline />
      <OutcomesGrid />

      <section className="py-16 bg-zinc-900/30" aria-label="Почему это выгодно">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Почему это выгодно компании
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Забота о семьях', desc: 'Демонстрирует сотрудникам, что компания инвестирует в развитие их детей' },
              { title: 'HR-бренд', desc: 'Укрепляет имидж современного работодателя и повышает лояльность' },
              { title: 'CSR-отчётность', desc: 'Готовый образовательный формат для социальных программ и ESG' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="card card-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SafetySection />
      <FormatsSection />
      <DemoDaySection />

      <section className="py-16" aria-label="Популярные страницы">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-8 gradient-text-cyber"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Выберите свою страницу
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: 'AI-лагерь для детей сотрудников', href: '/ai-camp-for-employees-children' },
              { label: 'Корпоративный AI-лагерь', href: '/corporate-ai-camp' },
              { label: 'HR benefit', href: '/hr-benefit-ai-camp' },
              { label: 'CSR-проект', href: '/csr-ai-camp-for-kids' },
              { label: 'Детский AI-лагерь Алматы', href: '/deti-ai-almaty' },
              { label: 'AI-продлёнка Алматы', href: '/ai-prodlenka-almaty' },
              { label: 'Летний AI-лагерь Алматы', href: '/summer-ai-camp-almaty' },
              { label: 'AI-лагерь в Алматы', href: '/ai-camp-almaty' },
              { label: 'Программа лагеря', href: '/ai-camp-program' },
              { label: 'Коммерческое предложение', href: '/ai-camp-commercial-offer' },
              { label: 'Все страницы', href: '/landing-pages' },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="card block text-sm text-zinc-200 hover:text-cyan-300 transition-all duration-300 border-glow-hover"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-16 bg-zinc-900/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-4 gradient-text-cyber"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Получить предложение
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Оставьте заявку, и мы предложим оптимальный формат JEDAI AI Heroes Camp для вашей компании
          </motion.p>
          <LeadForm
            sourcePage="main"
            audienceSegment="audience_company"
            experimentVariant="audience_company"
          />
        </div>
      </section>
    </div>
  )
}
