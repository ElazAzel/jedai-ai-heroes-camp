'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    function check() { setMobile(window.innerWidth < 768) }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return mobile
}

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
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
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
  }, [visible, isMobile])

  if (isMobile) return null

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
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  if (isMobile) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15), transparent 70%)' }}
        animate={prefersReducedMotion ? {} : {
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)' }}
        animate={prefersReducedMotion ? {} : {
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)' }}
        animate={prefersReducedMotion ? {} : {
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
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={isMobile ? {} : { y }}>{children}</motion.div>
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
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function onMove(e: React.MouseEvent) {
    if (isMobile) return
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
      <Tag href={href} onClick={onClick} className={className}>
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

          function tick() {
            const elapsed = Date.now() - startTime
            const progress = Math.min(1, elapsed / (duration * 1000))
            const eased = 1 - (1 - progress) * (1 - progress)
            setCount(Math.floor(eased * end))
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
  const isMobile = useIsMobile()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotX = useSpring(rotateX, { stiffness: 50, damping: 20 })
  const springRotY = useSpring(rotateY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (isMobile) return
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
  }, [rotateX, rotateY, isMobile])

  const s = isMobile ? size * 0.5 : size

  return (
    <div style={{
      width: s, height: s, left: `${x}%`, top: `${y}%`,
      position: 'absolute', pointerEvents: 'none', perspective: 800,
    }} className={className}>
      <motion.div style={{
        width: '100%', height: '100%',
        borderRadius: type === 'sphere' ? '50%' : type === 'pyramid' ? '0' : '20%',
        background: `linear-gradient(135deg, ${color}, transparent)`,
        border: `1px solid ${color}`,
        transformStyle: 'preserve-3d',
        rotateX: springRotX,
        rotateY: springRotY,
      } as any} />
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
  const isMobile = useIsMobile()
  const c = isMobile ? Math.min(count, 8) : count

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: c }).map((_, i) => (
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

export function AnimatedGrid({ className = '' }: { className?: string }) {
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
        animate={{ rotateX: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export function OrbitingCircles({ className = '' }: { className?: string }) {
  const isMobile = useIsMobile()
  if (isMobile) return null

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
            left: '50%', top: '50%',
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
              top: -4, left: '50%', marginLeft: -4,
              boxShadow: `0 0 10px ${i === 0 ? '#0ea5e9' : i === 1 ? '#8b5cf6' : '#06b6d4'}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export function RippleButton({ children, className = '', onClick }: {
  children: React.ReactNode; className?: string; onClick?: () => void
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
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{ left: r.x, top: r.y }}
          initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.5 }}
          animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </button>
  )
}

export function FloatingLines() {
  const isMobile = useIsMobile()
  const count = isMobile ? 3 : 8

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(14,165,233,${0.03 + i * 0.01}), transparent)`,
            top: `${10 + i * (isMobile ? 25 : 10)}%`,
            left: '5%', right: '5%',
          }}
          animate={{
            x: [-(i + 1) * 20, (i + 1) * 20, -(i + 1) * 20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 1.5,
            repeat: Infinity, ease: 'easeInOut', delay: i * 0.4,
          }}
        />
      ))}
    </div>
  )
}

export function MatrixRain({ className = '' }: { className?: string }) {
  const isMobile = useIsMobile()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isMobile) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const c = ctx
    const canv = canvas

    canv.width = window.innerWidth
    canv.height = window.innerHeight

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF'
    const fontSize = 12
    const columns = canv.width / fontSize
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * -100)

    let frame: number
    function draw() {
      c.fillStyle = 'rgba(9,9,11,0.08)'
      c.fillRect(0, 0, canv.width, canv.height)
      c.fillStyle = 'rgba(14,165,233,0.08)'
      c.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        c.fillStyle = Math.random() > 0.98 ? 'rgba(56,189,248,0.4)' : 'rgba(14,165,233,0.08)'
        c.fillText(char, i * fontSize, drops[i] * fontSize)
        drops[i]++
        if (drops[i] * fontSize > canv.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)

    function resize() {
      canv.width = window.innerWidth
      canv.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />
}

export function ParticleNetwork({ count = 40, className = '' }: { count?: number; className?: string }) {
  const isMobile = useIsMobile()
  const c = isMobile ? 15 : count

  const [particles] = useState(() =>
    Array.from({ length: c }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 1 + Math.random() * 2,
    }))
  )

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const c = ctx
    const canv = canvas

    let frame: number
    let w = window.innerWidth
    let h = window.innerHeight
    canv.width = w
    canv.height = h

    function draw() {
      c.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 100) p.vx *= -1
        if (p.y < 0 || p.y > 100) p.vy *= -1

        const px = (p.x / 100) * w
        const py = (p.y / 100) * h

        c.beginPath()
        c.arc(px, py, p.size, 0, Math.PI * 2)
        c.fillStyle = 'rgba(14,165,233,0.3)'
        c.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = ((particles[i].x - particles[j].x) / 100) * w
          const dy = ((particles[i].y - particles[j].y) / 100) * h
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            c.beginPath()
            c.moveTo((particles[i].x / 100) * w, (particles[i].y / 100) * h)
            c.lineTo((particles[j].x / 100) * w, (particles[j].y / 100) * h)
            c.strokeStyle = `rgba(14,165,233,${0.08 * (1 - dist / 150)})`
            c.stroke()
          }
        }
      }

      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frame)
  }, [particles])

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />
}

export function TypeWriter({
  text,
  speed = 50,
  className = '',
  as: Tag = 'span',
}: {
  text: string
  speed?: number
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}) {
  const [displayed, setDisplayed] = useState('')
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0
          const interval = setInterval(() => {
            i++
            setDisplayed(text.slice(0, i))
            if (i >= text.length) clearInterval(interval)
          }, speed)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [text, speed])

  const Component = Tag as any

  return (
    <Component ref={ref} className={className}>
      {displayed}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-accent-light ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
      />
    </Component>
  )
}

export function MarqueeScroll({
  items,
  className = '',
  speed = 1,
}: {
  items: { label: string }[]
  className?: string
  speed?: number
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 sm:gap-16"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20 / speed, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 text-sm sm:text-base font-semibold text-zinc-600 whitespace-nowrap"
          >
            {item.label}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function GradientMesh({ className = '' }: { className?: string }) {
  const isMobile = useIsMobile()
  if (isMobile) return null

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="mesh-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>
        <g filter="url(#mesh-blur)">
          <motion.circle cx="200" cy="200" r="150" fill="#0ea5e9"
            animate={{ cx: [200, 300, 150, 200], cy: [200, 150, 250, 200] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle cx="600" cy="300" r="120" fill="#8b5cf6"
            animate={{ cx: [600, 500, 650, 600], cy: [300, 350, 250, 300] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.circle cx="400" cy="600" r="180" fill="#06b6d4"
            animate={{ cx: [400, 450, 350, 400], cy: [600, 550, 650, 600] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.circle cx="100" cy="700" r="100" fill="#0369a1"
            animate={{ cx: [100, 150, 50, 100], cy: [700, 650, 750, 700] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </g>
      </svg>
    </div>
  )
}

export function AudioBars({ count = 20, className = '' }: { count?: number; className?: string }) {
  const isMobile = useIsMobile()
  const c = isMobile ? 10 : count

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden flex items-end justify-center gap-[2px] ${className}`}
      style={{ paddingBottom: '10%' }}
    >
      {Array.from({ length: c }).map((_, i) => {
        const height = 10 + Math.random() * 60
        const delay = Math.random() * 2
        return (
          <motion.div
            key={i}
            className="w-[3px] rounded-t-sm"
            style={{
              background: `linear-gradient(to top, rgba(14,165,233,0.05), rgba(139,92,246,0.1))`,
              height: `${height}%`,
            }}
            animate={{
              height: [`${height}%`, `${height * (0.3 + Math.random() * 0.5)}%`, `${height}%`],
            }}
            transition={{
              duration: 0.8 + Math.random() * 1.2,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </div>
  )
}

export function HexGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full opacity-[0.015]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" width="30" height="52" patternUnits="userSpaceOnUse">
            <path d="M15 0 L30 8.66 L30 26 L15 34.64 L0 26 L0 8.66 Z" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  )
}

export function ConfettiBurst({ active = false, className = '' }: { active?: boolean; className?: string }) {
  const [particles] = useState(() =>
    Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      angle: Math.random() * 360,
      speed: 2 + Math.random() * 4,
      size: 4 + Math.random() * 6,
      color: ['#0ea5e9', '#8b5cf6', '#06b6d4', '#fde047', '#f472b6'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360,
    }))
  )

  if (!active) return null

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: p.size,
            height: p.size * 0.6,
            borderRadius: 2,
            background: p.color,
            left: `${p.x}%`,
          }}
          animate={{
            y: [0, 100 + Math.random() * 200],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [0, p.rotation + 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            ease: 'easeOut',
            delay: Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  )
}

export function ShimmerCard({ children, className = '' }: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`card relative overflow-hidden group ${className}`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(14,165,233,0.06) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function Card3DStack({ children, className = '' }: {
  children: React.ReactNode; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(springY, [0, 1], [4, -4])
  const rotateY = useTransform(springX, [0, 1], [-4, 4])
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
    const el = ref.current
    if (!el) return
    const element = el
    function onMove(e: MouseEvent) {
      const rect = element.getBoundingClientRect()
      x.set((e.clientX - rect.left) / rect.width)
      y.set((e.clientY - rect.top) / rect.height)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [x, y, isMobile])

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
