import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { LogoMark } from './ui/Logo'
import { LogoGeometry } from './ui/LogoGeometry'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-brand-charcoal text-white"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-45"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/70" />
      </div>

      <LogoGeometry />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 lg:pb-24 lg:pt-44">
        <div className="grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange"
            >
              <span className="h-px w-10 bg-brand-orange" aria-hidden="true" />
              Entertainment &amp; Creative Production — Est. 2019
            </motion.span>

            <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tightest sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
              <span className="inline-block overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  Discover.
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                >
                  Create.
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.41 }}
                >
                  Perform.
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-2">
                <motion.span
                  className="inline-block text-brand-orange"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.54 }}
                >
                  Inspire.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl"
            >
              Where talent meets opportunity and creativity comes to life.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2 bg-brand-orange px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand-charcoal"
              >
                Explore Idle Creations
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href="#talent"
                className="group inline-flex items-center gap-2 border border-white/40 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-brand-charcoal"
              >
                Submit Your Talent
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
            className="mt-10 max-w-xl lg:col-span-3"
          >
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
              className="border-l-2 border-brand-orange pl-5 text-sm leading-relaxed text-white/70"
            >
              Idle Creations is an entertainment and creative production company
              discovering talent, producing original content and creating
              opportunities for artists, performers and creative professionals.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-white/60 sm:px-8">
          <span className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.25em]">
            <LogoMark className="h-5 w-5" />
            Est. 2019
          </span>
          <span className="hidden font-display text-[11px] uppercase tracking-[0.25em] sm:inline">
            Discover · Create · Perform · Inspire
          </span>
          <a
            href="#about"
            className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-brand-orange"
          >
            Scroll
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}