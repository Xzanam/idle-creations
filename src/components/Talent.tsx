import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from './ui/motion'

const CATEGORIES = [
  'Singers',
  'Actors',
  'Dancers',
  'Musicians',
  'Video Creators',
  'Performers',
  'Creative Artists',
  'Emerging Entertainers',
]

const TALENT_WORDS = ['Talent', 'Starts', 'With', 'an', 'Opportunity']

export function Talent() {
  return (
    <section id="talent" className="relative overflow-hidden bg-white py-24 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(33,31,32,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(33,31,32,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Talent"
              title={
                <>
                  Talent starts
                  <br />
                  <span className="text-brand-orange">with an opportunity.</span>
                </>
              }
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-gray">
                At Idle Creations, we believe talent can come from anywhere — a
                stage, a street, a studio, a screen. We find it, we develop it, and
                we give it somewhere to go.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat} delay={i * 0.05}>
              <span
                className={
                  i % 4 === 0
                    ? 'inline-block bg-brand-orange px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white sm:px-8 sm:py-4'
                    : 'inline-block border border-brand-charcoal/20 px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-charcoal transition-colors hover:border-brand-charcoal sm:px-8 sm:py-4'
                }
              >
                {cat}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 sm:mt-28">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand-gray">
              Think you have what it takes?
            </p>
          </Reveal>
          <div className="mt-2 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="font-display text-6xl font-bold leading-[0.95] tracking-tightest text-brand-charcoal sm:text-8xl">
              {TALENT_WORDS.map((word) => (
                <span key={word} className="inline-block whitespace-nowrap">
                  {word}{' '}
                </span>
              ))}
              <span className="text-brand-orange">Take the stage.</span>
            </h3>
            <Reveal delay={0.05}>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-3 self-start bg-brand-orange px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-charcoal lg:self-auto"
              >
                Submit Your Talent
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}