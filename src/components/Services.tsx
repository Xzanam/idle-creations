import { useState } from 'react'
import {
  ArrowUpRight,
  Camera,
  Music,
  Theater,
  Mic2,
  Sparkles,
  Megaphone,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal, SectionHeading } from './ui/motion'

const SERVICES = [
  {
    number: '01',
    title: 'Video Production',
    icon: Camera,
    text: 'Music videos, short videos, promotional videos and creative visual projects.',
  },
  {
    number: '02',
    title: 'Music & Songs',
    icon: Music,
    text: 'Supporting musicians and emerging artists from the first idea to the finished song.',
  },
  {
    number: '03',
    title: 'Acting & Performance',
    icon: Theater,
    text: 'Opportunities for actors and performers through videos, productions and stage performances.',
  },
  {
    number: '04',
    title: 'Live Performances',
    icon: Mic2,
    text: 'Live shows, stage programmes and entertainment events connecting performers with audiences.',
  },
  {
    number: '05',
    title: 'Talent Discovery',
    icon: Sparkles,
    text: 'Discovering singers, actors, dancers, musicians, creators and emerging entertainers.',
  },
  {
    number: '06',
    title: 'Artist & Project Promotion',
    icon: Megaphone,
    text: 'Helping artists, performances, music and entertainment projects reach a wider audience.',
  },
]

function ServiceItem({ service }: { service: (typeof SERVICES)[number] }) {
  const [hovered, setHovered] = useState(false)
  const reduce = useReducedMotion()
  const Icon = service.icon

  return (
    <div
      className="group flex cursor-default flex-col gap-4 py-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-brand-orange">
          {service.number}
        </span>
        <div className="flex items-center gap-3">
          <p className="hidden text-base leading-relaxed text-white/60 md:block md:max-w-xs lg:max-w-sm">
            {service.text}
          </p>
          <Icon
            className={`h-6 w-6 text-white/90 transition-colors duration-300 ${
              hovered ? 'text-brand-orange' : ''
            }`}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-display text-3xl font-bold leading-none tracking-tightest text-white transition-colors duration-300 group-hover:text-brand-orange sm:text-4xl md:text-5xl">
          {service.title}
        </h3>
        <ArrowUpRight
          className={`h-6 w-6 shrink-0 text-brand-orange transition-all duration-300 ${
            hovered ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-0'
          }${reduce ? ' opacity-100' : ''}`}
          aria-hidden="true"
        />
      </div>

      <motion.div
        initial={false}
        animate={{ scaleX: hovered && !reduce ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
        className="h-0.5 w-full"
      >
        <div className="h-full w-full bg-white/80" />
      </motion.div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-brand-charcoal py-24 text-white lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading dark eyebrow="Services" title="What We Do" />
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-white/60 lg:pb-2">
              Six disciplines. One creative engine. From the first spark of an idea
              to the roar of the crowd.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={(i % 3) * 0.1}>
              <ServiceItem service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}