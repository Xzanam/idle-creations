import { Music, Infinity as InfinityIcon, Repeat } from 'lucide-react'
import { Reveal } from './ui/motion'

const STATS = [
  {
    icon: Repeat,
    value: '2019',
    label: 'Founded',
    note: 'Established with a vision for creative opportunity.',
  },
  {
    icon: Music,
    value: '6+',
    label: 'Creative Disciplines',
    note: 'From video production to live performance.',
  },
  {
    icon: InfinityIcon,
    value: '∞',
    label: 'Creative Possibilities',
    note: 'Ideas with no ceiling.',
  },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-light py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-full w-px bg-brand-charcoal/10" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-y-12 px-5 sm:grid-cols-3 sm:px-8">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="relative flex flex-col gap-3 sm:px-8 lg:px-12">
              <div className="flex items-center gap-3 text-brand-orange" aria-hidden="true">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="font-display text-6xl font-bold tracking-tightest text-brand-charcoal lg:text-7xl">
                {stat.value}
              </div>
              <div className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal">
                {stat.label}
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-brand-gray">{stat.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}