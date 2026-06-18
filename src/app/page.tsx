import Link from 'next/link'
import { ProgramTimeline } from '@/components/ProgramTimeline'
import { OutcomesGrid } from '@/components/OutcomesGrid'
import { SafetySection } from '@/components/SafetySection'
import { FormatsSection } from '@/components/FormatsSection'
import { DemoDaySection } from '@/components/DemoDaySection'
import { LeadForm } from '@/components/LeadForm'
import { AeoAnswerBlock } from '@/components/AeoBlock'
import { GeoSummaryBlock } from '@/components/GeoSummary'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="relative min-h-[85vh] flex items-center bg-grid overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="glass inline-block px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
              JEDAI AI Heroes Camp
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Корпоративный AI-лагерь
              <span className="gradient-text"> для детей сотрудников</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
              Забота о семьях сотрудников + образование будущего.
              Дети 10–16 лет создают AI-проекты за 10 учебных дней.
              HR benefit, CSR-активность и сильный employer brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#form"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-electric via-violet to-cyan text-white hover:opacity-90 transition-all glow"
              >
                Получить предложение для компании
              </a>
              <Link
                href="/ai-camp-program"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base glass text-white hover:bg-white/10 transition-all border border-white/20"
              >
                Посмотреть программу
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AeoAnswerBlock
        answer="JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников. За 10 учебных дней дети 10–16 лет изучают AI-инструменты, создают изображения, видео, чат-ботов и командный проект. Финал — Demo Day с презентацией перед родителями и компанией. Лагерь может проходить на базе компании или на внешней площадке."
      />

      <section className="py-16" aria-label="Для кого">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Для кого JEDAI AI Heroes Camp
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Подходит для разных аудиторий и решает разные задачи
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'HR и L&D', desc: 'Современный benefit для сотрудников с детьми', href: '/hr-benefit-ai-camp' },
              { title: 'CSR и ESG', desc: 'Готовый образовательный социальный проект', href: '/csr-ai-camp-for-kids' },
              { title: 'Руководители', desc: 'Инструмент employer brand и заботы', href: '/corporate-ai-camp' },
              { title: 'Родители', desc: 'Безопасный AI-лагерь для вашего ребёнка', href: '/ai-camp-for-parents' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Почему это выгодно компании
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Забота о семьях', desc: 'Демонстрирует сотрудникам, что компания инвестирует в развитие их детей' },
              { title: 'HR-бренд', desc: 'Укрепляет имидж современного работодателя и повышает лояльность' },
              { title: 'CSR-отчётность', desc: 'Готовый образовательный формат для социальных программ и ESG' },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SafetySection />
      <FormatsSection />
      <DemoDaySection />

      <section className="py-16" aria-label="Популярные страницы">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Выберите свою страницу
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass rounded-xl px-5 py-4 text-sm text-zinc-200 hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-16 bg-zinc-900/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Получить предложение
          </h2>
          <p className="text-zinc-400 text-center mb-8">
            Оставьте заявку, и мы предложим оптимальный формат JEDAI AI Heroes Camp для вашей компании
          </p>
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
