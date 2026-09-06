import { motion, useReducedMotion } from 'motion/react'

export function LogoGeometry() {
  const reduce = useReducedMotion()
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-24 -top-24 h-80 w-80 rotate-45 bg-brand-orange/10"
        animate={
          reduce
            ? {}
            : { rotate: [45, 52, 45], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -left-24 h-96 w-96 rotate-45 bg-brand-charcoal/60"
        animate={
          reduce
            ? {}
            : { rotate: [-45, -38, -45], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}