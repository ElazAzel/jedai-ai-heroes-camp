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
    ? 'btn btn-primary'
    : 'btn btn-secondary'

  return (
    <a
      href={href || '#'}
      onClick={(e) => {
        if (!href) e.preventDefault()
        trackEvent('cta_click', { cta_text: typeof children === 'string' ? children : 'cta' })
        onClick?.()
      }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </a>
  )
}

function HeroCorporatePremium({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  return (
    <section className="hero-section min-h-[80vh] sm:min-h-[75vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            <span className="badge">Корпоративный формат</span>
            <span className="badge" style={{ background: 'rgba(14,165,233,0.12)', color: '#7dd3fc', borderColor: 'rgba(14,165,233,0.25)' }}>10 учебных дней</span>
            <span className="badge" style={{ background: 'rgba(250,204,21,0.12)', color: '#fde047', borderColor: 'rgba(250,204,21,0.25)' }}>Дети 10–16 лет</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
            {page.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            {page.heroAngle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: '12–30 детей', desc: 'в группе' },
              { label: '10 дней', desc: 'интенсивной программы' },
              { label: '4+ формата', desc: 'on-site, weekend, family day' },
              { label: '1 Demo Day', desc: 'презентация проектов' },
            ].map((stat) => (
              <div key={stat.label} className="card text-center p-3 sm:p-4">
                <div className="stat-value">{stat.label}</div>
                <div className="text-xs sm:text-sm text-zinc-500 mt-0.5">{stat.desc}</div>
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
    <section className="hero-section min-h-[75vh] sm:min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
            <span className="badge" style={{ background: 'rgba(14,165,233,0.12)', color: '#7dd3fc', borderColor: 'rgba(14,165,233,0.25)' }}>Безопасно</span>
            <span className="badge" style={{ background: 'rgba(250,204,21,0.12)', color: '#fde047', borderColor: 'rgba(250,204,21,0.25)' }}>10–16 лет</span>
            <span className="badge">Сертификат</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
            {page.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-xl mx-auto">
            {page.heroAngle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14">
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {['10–16 лет', '10 учебных дней', 'AI-проект', 'Demo Day'].map((item) => (
              <div key={item} className="card text-center p-3 sm:p-4 text-sm sm:text-base text-zinc-300">
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
    <section className="hero-section min-h-[80vh] sm:min-h-[75vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="badge">Создай свой AI-проект</span>
              <span className="badge" style={{ background: 'rgba(14,165,233,0.12)', color: '#7dd3fc', borderColor: 'rgba(14,165,233,0.25)' }}>10 дней</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
              {page.h1}
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-zinc-400 mb-6 sm:mb-8">
              {page.heroAngle}
            </p>
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
          </div>
          <div className="hidden md:block">
            <div className="card">
              <div className="grid grid-cols-2 gap-3">
                {['AI-изображения', 'AI-видео', 'Чат-бот', 'Команда', 'Pitch', 'Demo Day'].map((item) => (
                  <div key={item} className="border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-center text-zinc-300">
                    {item}
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
    <section className="hero-section min-h-[70vh] sm:min-h-[65vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <span className="badge inline-flex mb-4 sm:mb-6">Программа на 10 учебных дней</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
            {page.h1}
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
              className="card text-center p-2 sm:p-3 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => trackEvent('program_day_open', { day: i + 1 })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('program_day_open', { day: i + 1 }) }}
              role="button"
              tabIndex={0}
              aria-label={`День ${i + 1}`}
            >
              <div className="text-[10px] sm:text-xs text-zinc-500">День</div>
              <div className="text-xs sm:text-base md:text-lg font-bold text-accent-light">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroConversionOffer({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="hero-section min-h-[70vh] sm:min-h-[65vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
              {page.h1}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8">
              {page.heroAngle}
            </p>
            <div className="space-y-3">
              {['Подходит для любой компании', 'Гибкие форматы', '10 учебных дней', 'Demo Day'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm sm:text-base text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card text-center p-5 sm:p-6">
            <p className="text-white font-medium mb-2">Заполните форму ниже</p>
            <p className="text-zinc-400 text-sm mb-4">{page.ctaPrimary}</p>
            <a
              href="#form-section"
              onClick={() => trackEvent('cta_click', { cta_text: page.ctaPrimary })}
              className="btn btn-primary w-full block text-center"
            >
              {page.ctaPrimary}
            </a>
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
