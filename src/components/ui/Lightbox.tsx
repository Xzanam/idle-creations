import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

export interface LightboxImage {
  image: string
  title: string
  category: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number | null
  onIndexChange: (index: number | null) => void
}

export function Lightbox({ images, index, onIndexChange }: LightboxProps) {
  const reduce = useReducedMotion() ?? false
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const current = index !== null ? images[index] : null

  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onIndexChange(null)
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % images.length)
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onIndexChange])

  return (
    <AnimatePresence>
      {index !== null && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — ${current.category}. Enlarged view.`}
          className="fixed inset-0 z-[90] flex flex-col bg-brand-charcoal/95 p-4 backdrop-blur-sm sm:p-8"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => onIndexChange(null)}
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => onIndexChange(null)}
              aria-label="Close enlarged image"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
              aria-label="Previous image"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-brand-orange hover:bg-brand-orange"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              key={index}
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-full min-w-0 flex-1"
            >
              <img
                src={current.image}
                alt={`${current.title} — ${current.category}`}
                className="mx-auto max-h-[74vh] w-auto max-w-full object-contain"
              />
              <figcaption className="mx-auto mt-4 max-w-2xl text-center">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
                  {current.category}
                </span>
                <p className="mt-1 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {current.title}
                </p>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={() => onIndexChange((index + 1) % images.length)}
              aria-label="Next image"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-brand-orange hover:bg-brand-orange"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}