import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Marquee } from './components/ui/Marquee'
import { About } from './components/About'
// import { Values } from './components/Values'
import { Services } from './components/Services'
import { Talent } from './components/Talent'
import { Productions } from './components/Productions'
import { EventsShowcase } from './components/EventsShowcase'
import { Stats } from './components/Stats'
import { YouTube } from './components/YouTube'
// import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <Marquee items={['Discover', 'Create', 'Perform', 'Inspire']} />
        <About />
        {/* <Values /> */}
        <Services />
        <Productions />
        <EventsShowcase />
        <Stats />
        <YouTube />
        {/* <CTA /> */}
        <Talent />
        <Contact />
      </main>
      <Footer />
    </>
  )
}