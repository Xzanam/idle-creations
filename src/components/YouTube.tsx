import { Play, Youtube } from 'lucide-react'
import { Reveal } from './ui/motion'
import { Button } from './ui/Button'

const CHANNEL_URL = 'https://www.youtube.com/@IdleCreation'

export function YouTube() {
  return (
    <section id="youtube" className="relative overflow-hidden bg-brand-charcoal py-24 text-white lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
                <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
                YouTube
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tightest sm:text-6xl">
                More of the story,
                <br />
                <span className="text-brand-orange">on YouTube.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/60">
                Live sets, music videos, films and behind-the-scenes moments from
                Idle Creations. Subscribe to never miss what we make next.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col items-start gap-5">
                <Button
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlineLight"
                  icon={Youtube}
                >
                  Watch on YouTube
                </Button>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  @IdleCreation
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Idle Creations on YouTube (opens in a new tab)"
              className="group relative block overflow-hidden"
            >
              <div className="aspect-[1920/1005] overflow-hidden">
                <img
                  src="/images/events/TOHORFILM.jpg"
                  alt="A live Idle Creations event, viewable in full on their YouTube channel"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-brand-charcoal/10" />

              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-orange text-brand-charcoal transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
              </span>

              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 border border-white/25 bg-brand-charcoal/60 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:bottom-6 sm:left-6">
                <Youtube className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                Explore @IdleCreation
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}