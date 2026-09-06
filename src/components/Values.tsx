import { Reveal } from './ui/motion'

const VALUES = [
  {
    number: '01',
    title: 'Discover',
    text: 'We identify emerging performers, musicians, actors and creative individuals and provide opportunities to showcase their abilities.',
  },
  {
    number: '02',
    title: 'Create',
    text: 'We develop and produce music videos, short videos, songs, performances and other creative entertainment projects.',
  },
  {
    number: '03',
    title: 'Perform',
    text: 'We organise and participate in live performances, stage programmes and entertainment events that connect artists with audiences.',
  },
  {
    number: '04',
    title: 'Promote',
    text: 'We help showcase artists, music, performances and creative projects to a wider audience.',
  },
]

export function Values() {
  return (
    <section className="relative bg-brand-charcoal py-24 text-white lg:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-brand-orange/5" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              What We're About
            </p>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tightest sm:text-6xl">
              A creative
              <br />
              engine
              <br />
              <span className="text-brand-orange">in motion.</span>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-white/60">
                Four principles move everything we do — from the first rehearsal to
                the final cut.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {VALUES.map((value, i) => (
                <Reveal key={value.number} delay={i * 0.1}>
                  <div className="group grid cursor-pointer gap-4 py-10 transition-colors sm:grid-cols-12">
                    <span className="text-brand-orange transition-transform duration-300 group-hover:-translate-x-1 sm:col-span-2 font-display text-3xl font-bold sm:text-sm sm:font-semibold sm:tracking-[0.3em] sm:uppercase sm:pt-[0.6rem]">
                      {value.number}
                    </span>
                    <h3 className="font-display text-4xl font-bold tracking-tightest transition-colors duration-300 group-hover:text-brand-orange sm:text-5xl sm:col-span-3">
                      {value.title}
                    </h3>
                    <p className="max-w-md text-base leading-relaxed text-white/60 sm:col-span-7 sm:mt-1">
                      {value.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}