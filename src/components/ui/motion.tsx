import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

const baseVariants = (reduce: boolean): Variants => ({
  hidden: reduce ? {} : { opacity: 0, y: 36 },
  visible: (custom: { delay?: number; y?: number } = {}) =>
    reduce
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: custom.delay ?? 0,
          },
        },
})

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 36 }: RevealProps) {
  const reduce = useReducedMotion() ?? false
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={baseVariants(reduce)}
      custom={{ delay, y }}
    >
      {children}
    </motion.div>
  )
}

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const reduce = useReducedMotion() ?? false
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: reduce ? {} : { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        visible: {
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
    >
      {children}
    </motion.span>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  className?: string
  align?: 'left' | 'right'
  dark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  className = '',
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === 'right' ? 'items-end text-right' : 'items-start'
  return (
    <div className={`flex flex-col gap-5 ${alignCls} ${className}`}>
      <Reveal>
        <span className="inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
          <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`text-balance font-display text-4xl font-bold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl ${
            dark ? 'text-white' : 'text-brand-charcoal'
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}