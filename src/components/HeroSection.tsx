'use client'

import { trackEvent } from '@/lib/analytics'
import type { HeroVariant } from '@/types'

function TrackedButton({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}) {
  const baseClass = variant === 'primary'
    ? 'bg-gradient-to-r from-electric via-violet to-cyan text-white hover:opacity-90 glow'
    : 'glass text-white hover:bg-white/10 border border-white/20'

  return (
    <a
      href={href || '#'}
      onClick={(e) => {
        if (!href) e.preventDefault()
        trackEvent('cta_click', { cta_text: typeof children === 'string' ? children : 'cta' })
        onClick?.()
      }}
      className={`inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer ${baseClass} ${className}`}
    >
      {children}
    </a>
  )
}

function HeroCorporatePremium({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <span className="badge text-[10px] sm:text-xs">Корпоративный формат</span>
            <span className="badge text-[10px] sm:text-xs" style={{ background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.25)' }}>10 учебных дней</span>
            <span className="badge text-[10px] sm:text-xs" style={{ background: 'rgba(245,158,11,0.15)', color: '#fcd34d', borderColor: 'rgba(245,158,11,0.25)' }}>Дети 10–16 лет</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
            <span className="gradient-text-premium">{page.h1}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            {page.heroAngle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { label: '12–30 детей', desc: 'в группе' },
              { label: '10 дней', desc: 'интенсивной программы' },
              { label: '4+ формата', desc: 'on-site, weekend, family day' },
              { label: '1 Demo Day', desc: 'презентация проектов' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center">
                <div className="stat-value text-xs sm:text-base md:text-lg">{stat.label}</div>
                <div className="text-[10px] sm:text-xs text-zinc-500 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroParentTrust({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-4 sm:mb-6">
            <span className="badge text-[10px] sm:text-xs" style={{ background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.25)' }}>Безопасно</span>
            <span className="badge text-[10px] sm:text-xs" style={{ background: 'rgba(245,158,11,0.15)', color: '#fcd34d', borderColor: 'rgba(245,158,11,0.25)' }}>10–16 лет</span>
            <span className="badge text-[10px] sm:text-xs">Сертификат</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
            <span className="gradient-text">{page.h1}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-xl mx-auto">
            {page.heroAngle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto">
            {['10–16 лет', '10 учебных дней', 'AI-проект', 'Demo Day'].map((item) => (
              <div key={item} className="glass rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-zinc-300 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroKidsCreator({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="badge text-[10px] sm:text-xs">Создай свой AI-проект</span>
              <span className="badge text-[10px] sm:text-xs" style={{ background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.25)' }}>10 дней</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
              <span className="gradient-text">{page.h1}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8">
              {page.heroAngle}
            </p>
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
          </div>
          <div className="hidden md:block">
            <div className="glass-premium rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {['AI-изображения', 'AI-видео', 'Чат-бот', 'Команда', 'Pitch', 'Demo Day'].map((badge) => (
                  <div
                    key={badge}
                    className="gradient-border rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center text-zinc-300"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroProgramDeepDive({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[75vh] flex items-center bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <span className="badge inline-flex mb-4 sm:mb-6 text-[10px] sm:text-xs">Программа на 10 учебных дней</span>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
            <span className="gradient-text">{page.h1}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8">
            {page.heroAngle}
          </p>
          <TrackedButton href="#program">{page.ctaPrimary}</TrackedButton>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-2 sm:gap-3 max-w-4xl mx-auto">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="glass rounded-xl p-2 sm:p-3 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => trackEvent('program_day_open', { day: i + 1 })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('program_day_open', { day: i + 1 }) }}
              role="button"
              tabIndex={0}
              aria-label={`День ${i + 1}`}
            >
              <div className="text-[10px] sm:text-xs text-zinc-500">День</div>
              <div className="text-xs sm:text-base md:text-lg font-bold gradient-text">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroConversionOffer({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[75vh] flex items-center bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
              <span className="gradient-text-premium">{page.h1}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8">
              {page.heroAngle}
            </p>
            <div className="space-y-2 sm:space-y-3">
              {['Подходит для любой компании', 'Гибкие форматы', '10 учебных дней', 'Demo Day'].map((item) => (
                <div key={item} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan to-violet inline-block flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="form">
            <div className="glass-premium rounded-2xl p-5 sm:p-6 text-center">
              <p className="text-white font-semibold mb-2">Заполните форму ниже</p>
              <p className="text-zinc-400 text-sm mb-4">{page.ctaPrimary}</p>
              <a
                href="#form-section"
                onClick={() => trackEvent('cta_click', { cta_text: page.ctaPrimary })}
                className="inline-block w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-electric via-violet to-cyan text-white hover:opacity-90 transition-all duration-300 glow cursor-pointer text-center"
              >
                {page.ctaPrimary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroSection({
  page,
  variant,
}: {
  page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string }
  variant: HeroVariant
}) {
  switch (variant) {
    case 'parent-trust':
      return <HeroParentTrust page={page} />
    case 'kids-creator':
      return <HeroKidsCreator page={page} />
    case 'program-deep-dive':
      return <HeroProgramDeepDive page={page} />
    case 'conversion-offer':
      return <HeroConversionOffer page={page} />
    default:
      return <HeroCorporatePremium page={page} />
  }
}