import { Reveal, SectionHeading } from './ui/motion'

const PROJECTS = [
  {
    image: '/images/films/film-poster.jpg',
    title: 'तोर बिना नै रहवु',
    category: 'Short Film',
    text: 'A bold short film by IDLE CREATION & ENTERTAINMENT',
    trailer: '',
    link: 'https://www.youtube.com/watch?v=TNtKom13NV0',
  },
 
  {
    image: '/images/sunya.jpg',
    title: 'Sunya',
    category: 'Music & Song',
    text: 'A song and visual project by Dreamscape and Idle Creations',
    trailer: '',
    link: 'https://www.youtube.com/watch?v=Qrp77hz5vKY',
  },
  {
    image: '/images/films/nakkali.jpg',
    title: 'Nakkali Maicchyang',
    category: 'Music & Song',
    text: 'A song and dance number by Idle Creations',
    trailer: '',
    link: 'https://www.youtube.com/watch?v=aGEfdNDG0Jo',
  },
  {
    image: '/images/films/damphu.jpg',
    title: 'Damphuko Taal Ramro',
    category: 'Music & Song',
    text: 'A music video in collaboration with Deep Studio and Idle Creations',
    trailer: '',
    link: 'https://www.youtube.com/watch?v=Qrp77hz5vKY',
  },

]

export function Productions() {
  return (
    <section id="productions" className="bg-brand-charcoal py-24 text-white lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              dark
              eyebrow="Productions"
              title="Our Creative Productions"
            />
          </div>
          <div className="lg:col-span-4 lg:items-end">
            <Reveal delay={0.1} className="lg:flex lg:h-full lg:items-end">
              <p className="max-w-md text-base leading-relaxed text-white/60">
                Our productions bring together artists, performers, musicians and
                creative professionals to create entertaining and meaningful
                experiences.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <div className={`group relative block overflow-hidden bg-brand-charcoal ${
                  i % 2 === 1 ? 'lg:mt-24' : ''
                }`}>
                <a
                  href="#contact"
                  aria-label={`${project.title} — ${project.category}. Enquire about this production.`}
                  className="absolute inset-0 z-0"
                >
                  <span className="sr-only">Enquire about this production</span>
                </a>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
                    {project.category}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-bold tracking-tightest transition-transform duration-500 group-hover:-translate-x-1 sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {project.text}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${project.title} on YouTube (opens in a new tab)`}
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" focusable="false">
                        <path d="M5 3l14 9-14 9z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}