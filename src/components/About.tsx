import { Star, Film, Compass, Mic2 } from 'lucide-react'
import { Reveal, SectionHeading } from './ui/motion'

const INVOLVEMENT = [
  { icon: Star, label: 'Live Performances' },
  { icon: Mic2, label: 'Acting' },
  { icon: Compass, label: 'Music' },
  { icon: Film, label: 'Video Production' },
  { icon: Star, label: 'Stage Programmes' },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About Idle Creations"
              title={
                <>
                  Creativity has no limits.
                  <br />
                  <span className="text-brand-orange">Talent deserves a platform.</span>
                </>
              }
            />

            <Reveal delay={0.15}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-brand-gray">
                Idle Creations Pty Ltd was established in 2019 with a clear vision —
                to create opportunities for talented people and bring creative ideas
                to life. From a single stage to the screen, we work alongside
                singers, actors, dancers, musicians, performers and creative
                professionals.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-gray">
                Today we're involved in live performances, acting, music, video
                production and stage programmes — moving ideas from discovery to a
                stage, a screen, or somewhere entirely new.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {INVOLVEMENT.map((item, i) => (
                <Reveal key={item.label} delay={0.1 + i * 0.08}>
                  <div className="group flex flex-col items-start gap-2 border-b border-brand-charcoal/10 pb-4 transition-colors hover:border-brand-orange">
                    <item.icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    <span className="text-sm font-semibold text-brand-charcoal">{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 bg-brand-orange" aria-hidden="true" />
              <img
                src="/images/about.jpg"
                alt="Idle Creations on set during a creative production"
                className="relative aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-4 sm:-right-8 sm:bottom-12 sm:w-72">
                <div className="bg-brand-charcoal px-8 py-7 text-white">
                  <div className="font-display text-5xl font-bold leading-none text-brand-orange">
                    2019
                  </div>
                  <div className="mt-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Present
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}