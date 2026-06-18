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
      className={`inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-base transition-all cursor-pointer ${baseClass} ${className}`}
    >
      {children}
    </a>
  )
}

function HeroCorporatePremium({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-grid overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="glass inline-block px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            JEDAI AI Heroes Camp
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {page.h1}
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
            {page.heroAngle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedButton href="#form">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroParentTrust({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass inline-block px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            Безопасный AI-лагерь для вашего ребёнка
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {page.h1}
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            {page.heroAngle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedButton href="#form">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['10–16 лет', '10 учебных дней', 'AI-проект', 'Demo Day'].map((item) => (
              <div key={item} className="glass rounded-xl px-4 py-3 text-sm text-zinc-300 text-center">
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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-electric/20 via-violet/10 to-cyan/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass inline-block px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
              Создай свой AI-проект
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {page.h1}
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              {page.heroAngle}
            </p>
            <TrackedButton href="#form">{page.ctaPrimary}</TrackedButton>
          </div>
          <div className="hidden md:block">
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-3">
                {['AI-изображения', 'AI-видео', 'Чат-бот', 'Команда', 'Pitch', 'Demo Day'].map((badge) => (
                  <div
                    key={badge}
                    className="gradient-border rounded-xl px-4 py-3 text-sm text-center text-zinc-200"
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
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-violet to-cyan" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-12">
          <div className="glass inline-block px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            Программа на 10 учебных дней
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            {page.h1}
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            {page.heroAngle}
          </p>
          <TrackedButton href="#program">{page.ctaPrimary}</TrackedButton>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="glass rounded-xl p-3 text-center hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => trackEvent('program_day_open', { day: i + 1 })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('program_day_open', { day: i + 1 }) }}
              role="button"
              tabIndex={0}
              aria-label={`День ${i + 1}`}
            >
              <div className="text-xs text-zinc-500">День</div>
              <div className="text-lg font-bold text-white">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroConversionOffer({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {page.h1}
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              {page.heroAngle}
            </p>
            <div className="space-y-3">
              {['Подходит для любой компании', 'Гибкие форматы', '10 учебных дней', 'Demo Day'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-zinc-300">
                  <span className="text-cyan-400">▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="form">
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-white font-semibold mb-2">Заполните форму ниже</p>
              <p className="text-zinc-400 text-sm mb-4">{page.ctaPrimary}</p>
              <a
                href="#form-section"
                onClick={() => trackEvent('cta_click', { cta_text: page.ctaPrimary })}
                className="inline-block w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-electric via-violet to-cyan text-white hover:opacity-90 transition-all glow cursor-pointer text-center"
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
