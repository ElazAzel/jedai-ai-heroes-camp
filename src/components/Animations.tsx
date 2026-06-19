'use client'

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type AnimatedSectionProps = HTMLMotionProps<'section'> & {
  children: ReactNode
  className?: string
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}

type AnimatedDivProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  className?: string
}

export function AnimatedDiv({ children, className, ...props }: AnimatedDivProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export function StaggerCard({
  children,
  index = 0,
  className = '',
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function FadeUp({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function GlowCard({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'a'
}) {
  const Component = as === 'a' ? motion.a : motion.div
  return (
    <Component
      className={className}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </Component>
  )
}

export function FloatingElement({
  children,
  className = '',
  duration = 3,
  y = 6,
}: {
  children: ReactNode
  className?: string
  duration?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export function PulseGlow({
  children,
  className = '',
  color = 'rgba(14,165,233,0.3)',
}: {
  children: ReactNode
  className?: string
  color?: string
}) {
  return (
    <motion.div
      className={className}
      animate={{ boxShadow: [`0 0 0px ${color}`, `0 0 20px ${color}`, `0 0 0px ${color}`] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function GlitchText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  function handleMouseEnter() {
    const el = ref.current
    if (!el) return
    let iterations = 0
    const maxIterations = 3
    const interval = setInterval(() => {
      el.textContent = text
        .split('')
        .map((char, i) => {
          if (i < iterations) return char
          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')
      iterations += 1 / 3
      if (iterations >= maxIterations) {
        clearInterval(interval)
        el.textContent = text
      }
    }, 40)
  }

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </span>
  )
}
