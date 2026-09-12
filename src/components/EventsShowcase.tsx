import { useCallback, useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { Reveal, SectionHeading } from './ui/motion'
import { Lightbox, type LightboxImage } from './ui/Lightbox'

interface ShowcaseItem extends LightboxImage {
  ratio: string
  note?: string
  featured?: boolean
}

const ITEMS: ShowcaseItem[] = [
  {
    image: '/images/events/sydney-damian-night.jpg',
    title: 'Sydney Damian Night',
    category: 'Live Event',
    note: 'A full night of music, performance and energy in Sydney.',
    ratio: 'aspect-[1920/1005]',
    featured: true,
  },
  {
    image: '/images/events/dj-arpana.jpg',
    title: 'DJ Arpana',
    category: 'Live DJ Set',
    ratio: 'aspect-[1447/2048]',
  },
  {
    image: '/images/events/dohori-night.jpg',
    title: 'Dohori Night',
    category: 'Live Performance',
    ratio: 'aspect-[1663/2048]',
  },
  {
    image: '/images/events/ethos-band.jpg',
    title: 'Ethos Band',
    category: 'Live Music',
    ratio: 'aspect-[1131/1600]',
  },
  {
    image: '/images/films/film-poster.jpg',
    title: 'Feature Film',
    category: 'Film Poster',
    ratio: 'aspect-[1080/1350]',
  },
  {
    image: '/images/films/laibari-lai.jpg',
    title: 'Laibari Lai',
    category: 'Music Video',
    ratio: 'aspect-[904/1280]',
  },
  {
    image: '/images/films/pipal.jpg',
    title: 'Pipal',
    category: 'Music Video',
    ratio: 'aspect-[1244/1600]',
  },
  {
    image: '/images/films/somaya.jpg',
    title: 'Somaya',
    category: 'Music Video',
    ratio: 'aspect-[1131/1600]',
  },
]

function Tile({
  item,
  onOpen,
  featured = false,
}: {
  item: ShowcaseItem
  onOpen: () => void
  featured?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open enlarged view of ${item.title} — ${item.category}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden bg-brand-charcoal text-left ${
        featured ? 'aspect-[1920/1005]' : item.ratio
      }`}
    >
      <img
        src={item.image}
        alt={`${item.title} — ${item.category}`}
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-90" />

      <span
        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <ZoomIn className="h-4 w-4" />
      </span>

      <div className={`absolute inset-x-0 bottom-0 ${featured ? 'p-6 sm:p-10' : 'p-5 sm:p-6'}`}>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
          {item.category}
        </p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h3
            className={`font-display font-bold tracking-tightest text-white transition-transform duration-500 group-hover:-translate-x-1 ${
              featured ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            {item.title}
          </h3>
        </div>
        {featured && item.note && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {item.note}
          </p>
        )}
      </div>
    </button>
  )
}

export function EventsShowcase() {
  const [index, setIndex] = useState<number | null>(null)
  const change = useCallback((next: number | null) => setIndex(next), [])

  const featured = ITEMS[0]
  const gallery = ITEMS.filter((item) => !item.featured)
  const lightboxImages: LightboxImage[] = ITEMS.map(({ image, title, category }) => ({
    image,
    title,
    category,
  }))

  return (
    <section id="events" className="relative overflow-hidden bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Events & Films"
              title={
                <>
                  From the stage
                  <br />
                  <span className="text-brand-orange">to the screen.</span>
                </>
              }
            />
          </div>
          <div className="lg:col-span-4 lg:items-end">
            <Reveal delay={0.1} className="lg:flex lg:h-full lg:items-end">
              <p className="max-w-md text-base leading-relaxed text-brand-gray">
                Live performances, stage programmes, music videos and films — a
                curated look at the moments we've brought to life.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <Tile item={featured} featured onOpen={() => change(0)} />
          </Reveal>

          <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {gallery.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
                <Tile item={item} onOpen={() => change(i + 1)} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox images={lightboxImages} index={index} onIndexChange={change} />
    </section>
  )
}