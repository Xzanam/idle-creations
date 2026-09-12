import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { LogoMark } from './ui/Logo'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Productions', href: '#productions' },
  { label: 'Talent', href: '#talent' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (!el) return
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    close()
    window.setTimeout(() => scrollTo(href), reduce ? 0 : 380)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? 'border-b border-brand-charcoal/10 bg-white/85 backdrop-blur-md'
          : ''
        }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${scrolled ? 'py-3' : 'py-5'
          }`}
      >
        <a
          href="#home"
          onClick={close}
          className={`group flex items-center gap-3 transition-opacity hover:opacity-80 ${scrolled ? 'text-brand-charcoal' : 'text-white'}`}
          aria-label="Idle Creations — home"
        >
          <LogoMark className="h-10 w-10" />
          {/* <span className="font-display text-lg font-bold tracking-tight"> */}
          {/* Idle<span className="text-brand-orange transition-colors group-hover:text-brand-charcoal">.</span>Creations */}
          {/* </span> */}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`group relative text-sm font-medium transition-colors ${scrolled ? 'text-brand-charcoal/80 hover:text-brand-charcoal' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 bg-brand-orange transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#talent"
            className="hidden items-center gap-2 bg-brand-orange px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-charcoal lg:inline-flex"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Submit Your Talent
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${scrolled ? 'border-brand-charcoal/15 text-brand-charcoal hover:border-brand-charcoal' : 'border-white/30 text-white hover:border-white'}`}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25 } }
            }
            className="overflow-hidden border-b border-brand-charcoal/10 bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    className="flex items-center justify-between border-b border-brand-charcoal/8 py-3.5 font-display text-2xl font-bold tracking-tight text-brand-charcoal transition-colors hover:text-brand-orange"
                  >
                    {item.label}
                    <ArrowRight className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
              <li className="pt-5">
                <a
                  href="#talent"
                  onClick={(e) => handleMobileNavClick(e, '#talent')}
                  className="flex items-center justify-center gap-2 bg-brand-orange px-5 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white"
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Submit Your Talent
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
