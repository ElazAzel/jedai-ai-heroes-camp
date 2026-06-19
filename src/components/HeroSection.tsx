'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import type { HeroVariant } from '@/types'

function useMouseTilt(ref: React.RefObject<HTMLDivElement | null>) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(springY, [0, 1], [5, -5])
  const rotateY = useTransform(springX, [0, 1], [-5, 5])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const element = el
    function onMouseMove(e: MouseEvent) {
      const rect = element.getBoundingClientRect()
      x.set((e.clientX - rect.left) / rect.width)
      y.set((e.clientY - rect.top) / rect.height)
    }
    element.addEventListener('mousemove', onMouseMove)
    return () => element.removeEventListener('mousemove', onMouseMove)
  }, [ref, x, y])

  return { rotateX, rotateY }
}

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
    ? 'btn btn-primary btn-glow'
    : 'btn btn-secondary'

  return (
    <motion.a
      href={href || '#'}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={(e) => {
        if (!href) e.preventDefault()
        trackEvent('cta_click', { cta_text: typeof children === 'string' ? children : 'cta' })
        onClick?.()
      }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.a>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? 'rgba(14,165,233,0.6)' : i % 3 === 1 ? 'rgba(139,92,246,0.5)' : 'rgba(6,182,212,0.4)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
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

function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
      {[
        { label: 'AI', top: '15%', left: '5%', color: 'rgba(14,165,233,0.12)', textColor: '#38bdf8', delay: 0 },
        { label: 'ML', top: '25%', right: '8%', color: 'rgba(139,92,246,0.12)', textColor: '#a78bfa', delay: 0.5 },
        { label: 'GPT', top: '60%', left: '3%', color: 'rgba(6,182,212,0.12)', textColor: '#22d3ee', delay: 1 },
        { label: 'BOT', bottom: '20%', right: '5%', color: 'rgba(250,204,21,0.1)', textColor: '#fde047', delay: 1.5 },
      ].map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border border-white/5"
          style={{
            top: 'top' in badge ? badge.top : undefined,
            bottom: 'bottom' in badge ? badge.bottom : undefined,
            left: 'left' in badge ? badge.left : undefined,
            right: 'right' in badge ? badge.right : undefined,
            background: badge.color,
            color: badge.textColor,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 1 + badge.delay, duration: 0.6 },
            scale: { delay: 1 + badge.delay, duration: 0.6 },
            y: { duration: 3, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' },
          }}
        >
          {badge.label}
        </motion.div>
      ))}
    </div>
  )
}

function HeroCorporatePremium({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const { rotateX, rotateY } = useMouseTilt(ref)

  return (
    <section className="hero-section min-h-[80vh] sm:min-h-[75vh] flex items-center bg-grid-dense">
      <Particles />
      <FloatingBadges />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric/10 rounded-full blur-[100px]" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <motion.div
          className="max-w-3xl"
          style={{ perspective: 1000, rotateX, rotateY }}
        >
          <motion.div
            className="flex flex-wrap gap-2 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="badge badge-glow">Корпоративный формат</span>
            <span className="badge badge-glow" style={{ background: 'rgba(14,165,233,0.12)', color: '#7dd3fc', borderColor: 'rgba(14,165,233,0.25)', animationDelay: '0.5s' }}>10 учебных дней</span>
            <span className="badge" style={{ background: 'rgba(250,204,21,0.12)', color: '#fde047', borderColor: 'rgba(250,204,21,0.25)' }}>Дети 10–16 лет</span>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {page.h1}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {page.heroAngle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {[
              { label: '12–30 детей', desc: 'в группе' },
              { label: '10 дней', desc: 'интенсивной программы' },
              { label: '4+ формата', desc: 'on-site, weekend, family day' },
              { label: '1 Demo Day', desc: 'презентация проектов' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="card text-center p-3 sm:p-4 card-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="stat-value gradient-text-cyber">{stat.label}</div>
                <div className="text-xs sm:text-sm text-zinc-500 mt-0.5">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroParentTrust({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string; ctaSecondary?: string } }) {
  return (
    <section className="hero-section min-h-[75vh] sm:min-h-[70vh] flex items-center bg-dots">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan/10 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="badge badge-glow" style={{ background: 'rgba(14,165,233,0.12)', color: '#7dd3fc', borderColor: 'rgba(14,165,233,0.25)' }}>Безопасно</span>
            <span className="badge" style={{ background: 'rgba(250,204,21,0.12)', color: '#fde047', borderColor: 'rgba(250,204,21,0.25)' }}>10–16 лет</span>
            <span className="badge">Сертификат</span>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {page.h1}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {page.heroAngle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            {page.ctaSecondary && (
              <TrackedButton href="#program" variant="secondary">{page.ctaSecondary}</TrackedButton>
            )}
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {['10–16 лет', '10 учебных дней', 'AI-проект', 'Demo Day'].map((item, i) => (
              <motion.div
                key={item}
                className="card text-center p-3 sm:p-4 text-sm sm:text-base text-zinc-300"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroKidsCreator({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="hero-section min-h-[80vh] sm:min-h-[75vh] flex items-center bg-grid-dense">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-violet/10 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-wrap gap-2 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="badge badge-glow">Создай свой AI-проект</span>
              <span className="badge" style={{ background: 'rgba(14,165,233,0.12)', color: '#7dd3fc', borderColor: 'rgba(14,165,233,0.25)' }}>10 дней</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {page.h1}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-lg text-zinc-400 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {page.heroAngle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <TrackedButton href="#form-section">{page.ctaPrimary}</TrackedButton>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="card card-glow"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="grid grid-cols-2 gap-3">
                {['AI-изображения', 'AI-видео', 'Чат-бот', 'Команда', 'Pitch', 'Demo Day'].map((item, i) => (
                  <motion.div
                    key={item}
                    className="border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-center text-zinc-300"
                    whileHover={{ scale: 1.06, borderColor: 'rgba(14,165,233,0.4)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroProgramDeepDive({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="hero-section min-h-[70vh] sm:min-h-[65vh] flex items-center bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="badge inline-flex mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Программа на 10 учебных дней
          </motion.span>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {page.h1}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {page.heroAngle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <TrackedButton href="#program">{page.ctaPrimary}</TrackedButton>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-2 sm:gap-3 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={i}
              className="card text-center p-2 sm:p-3 cursor-pointer"
              whileHover={{ scale: 1.08, y: -4, borderColor: 'rgba(14,165,233,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => trackEvent('program_day_open', { day: i + 1 })}
              onKeyDown={(e) => { if (e.key === 'Enter') trackEvent('program_day_open', { day: i + 1 }) }}
              role="button"
              tabIndex={0}
              aria-label={`День ${i + 1}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.06 }}
            >
              <div className="text-[10px] sm:text-xs text-zinc-500">День</div>
              <div className="text-xs sm:text-base md:text-lg font-bold gradient-text-cyber">{i + 1}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function HeroConversionOffer({ page }: { page: { h1: string; heroAngle: string; ctaPrimary: string } }) {
  return (
    <section className="hero-section min-h-[70vh] sm:min-h-[65vh] flex items-center bg-grid-dense">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {page.h1}
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {page.heroAngle}
            </motion.p>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {['Подходит для любой компании', 'Гибкие форматы', '10 учебных дней', 'Demo Day'].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 text-sm sm:text-base text-zinc-300"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0 animate-glow-pulse" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="card text-center p-5 sm:p-6 card-glow"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="text-white font-medium mb-2">Заполните форму ниже</p>
            <p className="text-zinc-400 text-sm mb-4">{page.ctaPrimary}</p>
            <motion.a
              href="#form-section"
              onClick={() => trackEvent('cta_click', { cta_text: page.ctaPrimary })}
              className="btn btn-primary w-full block text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {page.ctaPrimary}
            </motion.a>
          </motion.div>
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
