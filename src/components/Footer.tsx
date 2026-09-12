import { Youtube, Facebook, MapPin, Mail } from 'lucide-react'
import { LogoMark } from './ui/Logo'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Talent', href: '#talent' },
  { label: 'Productions', href: '#productions' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  // { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@IdleCreation' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/idlecreation/' },
  // { icon: Music2, label: 'Music', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Idle Creations — back to top">
              <LogoMark className="h-10 w-10" />
              <span className="font-display text-xl font-bold tracking-tight">
                Idle<span className="text-brand-orange">.</span>Creations
              </span>
            </a>
            <p className="mt-6 max-w-sm font-display text-lg font-semibold tracking-tight text-white/80">
              Discover. Create. Perform. Inspire.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              An entertainment and creative production company founded in 2019 —
              discovering talent, producing original content and creating
              opportunities for artists, performers and creative professionals.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Explore
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Connect
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=2/31+Sunline+Drive,+Truganina,+VIC+3029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                  <span>2/31 Sunline Drive, Truganina, VIC 3029</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@idlecreations.com.au"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                  <span>hello@idlecreations.com.au</span>
                </a>
              </li>
            </ul>
            <a
              href="#talent"
              className="mt-8 inline-flex items-center gap-2 bg-brand-orange px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand-charcoal"
            >
              Submit Your Talent
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
          <p className="text-xs text-white/40">
            © {2019} Idle Creations. All rights reserved.
          </p>
          <p className="font-display text-[11px] uppercase tracking-[0.25em] text-white/40">
            Talent · Music · Video · Performance
          </p>
        </div>
      </div>
    </footer>
  )
}