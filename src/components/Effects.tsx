'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-electric to-cyan"
      style={{ scaleY, scaleX: scaleY }}
    />
  )
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    function onLeave() { setVisible(false) }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [visible])

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] rounded-full"
      style={{
        width: 300,
        height: 300,
        x: pos.x - 150,
        y: pos.y - 150,
        background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  )
}

export function BlobBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15), transparent 70%)' }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)' }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)' }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 5, -3, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  )
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

export function MagneticButton({
  children,
  className = '',
  as: Component = 'a',
  href,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  as?: 'a' | 'button'
  href?: string
  onClick?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 15 })
  const springY = useSpring(y, { stiffness: 300, damping: 15 })

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const maxDist = 150
    const strength = Math.min(1, (maxDist - dist) / maxDist)
    x.set(dx * 0.15 * strength)
    y.set(dy * 0.15 * strength)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  const Tag = Component as any

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        style={{ transform: `translate(${springX.get()}px, ${springY.get()}px)` }}
      >
        {children}
      </Tag>
    </div>
  )
}

export function CountUp({
  end,
  suffix = '',
  duration = 2,
  className = '',
}: {
  end: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now()
          const startVal = 0

          function tick() {
            const elapsed = Date.now() - startTime
            const progress = Math.min(1, elapsed / (duration * 1000))
            const eased = 1 - (1 - progress) * (1 - progress)
            setCount(Math.floor(startVal + (end - startVal) * eased))

            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

export function FloatingShape3D({
  type = 'cube',
  size = 60,
  color = 'rgba(14,165,233,0.08)',
  x = 0,
  y = 0,
  className = '',
}: {
  type?: 'cube' | 'sphere' | 'pyramid'
  size?: number
  color?: string
  x?: number
  y?: number
  className?: string
}) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotX = useSpring(rotateX, { stiffness: 50, damping: 20 })
  const springRotY = useSpring(rotateY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    let frame: number
    let t = Math.random() * 100
    function animate() {
      t += 0.005
      rotateX.set(Math.sin(t) * 15)
      rotateY.set(Math.cos(t * 0.7) * 20)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [rotateX, rotateY])

  const baseStyle = {
    width: size,
    height: size,
    left: `${x}%`,
    top: `${y}%`,
    position: 'absolute' as const,
    pointerEvents: 'none' as const,
    perspective: 800,
  }

  const shapeStyle = {
    width: '100%',
    height: '100%',
    borderRadius: type === 'sphere' ? '50%' : type === 'pyramid' ? '0' : '20%',
    background: `linear-gradient(135deg, ${color}, transparent)`,
    border: `1px solid ${color}`,
    transformStyle: 'preserve-3d' as const,
    rotateX: springRotX,
    rotateY: springRotY,
  }

  return (
    <div style={baseStyle} className={className}>
      <motion.div style={shapeStyle as any} />
    </div>
  )
}

export function Sparkles({
  count = 20,
  className = '',
}: {
  count?: number
  className?: string
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            background: i % 2 === 0 ? '#38bdf8' : '#a78bfa',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: i % 3 === 0 ? '0 0 4px #38bdf8, 0 0 8px #38bdf8' : '0 0 4px #a78bfa',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function GlowReveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const clipPath = useTransform(scrollYProgress, [0, 0.3, 0.6], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)'])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.3, 1])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ clipPath, opacity }}>{children}</motion.div>
    </div>
  )
}

export function AnimatedGrid({
  className = '',
}: {
  className?: string
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden perspective-[800px] ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 2, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export function OrbitingCircles({
  className = '',
}: {
  className?: string
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            border: '1px solid rgba(14,165,233,0.06)',
            width: 200 + i * 120,
            height: 200 + i * 120,
            left: '50%',
            top: '50%',
            marginLeft: -(100 + i * 60),
            marginTop: -(100 + i * 60),
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="w-2 h-2 rounded-full absolute"
            style={{
              background: i === 0 ? '#0ea5e9' : i === 1 ? '#8b5cf6' : '#06b6d4',
              top: -4,
              left: '50%',
              marginLeft: -4,
              boxShadow: `0 0 10px ${i === 0 ? '#0ea5e9' : i === 1 ? '#8b5cf6' : '#06b6d4'}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export function RippleButton({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)
    onClick?.()
  }

  return (
    <button className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.5 }}
          animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </button>
  )
}

export function FloatingLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(14,165,233,${0.03 + i * 0.01}), transparent)`,
            top: `${10 + i * 10}%`,
            left: '5%',
            right: '5%',
          }}
          animate={{
            x: [-(i + 1) * 20, (i + 1) * 20, -(i + 1) * 20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  )
}
