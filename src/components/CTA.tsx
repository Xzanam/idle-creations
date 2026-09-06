import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui/motion'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-orange">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(33,31,32,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(33,31,32,0.12)_1px,transparent_1px)] bg-[size:80px_80px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-32">
        <div>
          <Reveal>
            <h2 className="max-w-3xl font-display text-6xl font-bold leading-[0.95] tracking-tightest text-brand-charcoal sm:text-7xl lg:text-8xl">
              Your talent deserves
              <br />
              <span className="text-white">to be seen.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-charcoal/80">
              Have a talent, creative idea or passion for entertainment? Let's
              bring it to life.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-brand-charcoal px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand-charcoal"
            >
              Submit Your Talent
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-brand-charcoal/40 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
            >
              Get In Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}