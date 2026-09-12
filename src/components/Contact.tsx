import { useState, type FormEvent } from 'react'
import { Notebook, MapPin, Send, Check, Loader2, Phone } from 'lucide-react'
import { Reveal, SectionHeading } from './ui/motion'

const ENQUIRY_TYPES = ['General Enquiry', 'Artist / Talent', 'Production', 'Project / Collaboration']

const WEB3FORMS_ACCESS_KEY = '0278969c-ff5f-49e9-b50d-379e97533861'

const CONTACT_POINTS = [
  {
    icon: MapPin,
    title: 'Studio',
    hint: '2/31 Sunline Drive, Truganina, VIC 3029',
    href: 'https://maps.google.com/?q=2/31+Sunline+Drive,+Truganina,+VIC+3029',
  },
  {
    icon: Phone,
    title: 'Phone',
    hint: '0413235005',
  },
  {
    icon: Notebook,
    title: 'ABN',
    hint: '51 636 233 951',
  },
]

const inputClass =
  'w-full border-b border-brand-charcoal/25 bg-transparent py-3 font-sans text-base text-brand-charcoal placeholder:text-brand-gray/60 transition-colors focus:border-brand-orange focus:outline-none'

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${data.name} — ${data['enquiry-type']}`,
          from_name: data.name,
          ...data,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white p-8 sm:p-10">
      {status === 'sent' ? (
        <div className="flex min-h-[24rem] flex-col items-center justify-center gap-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center bg-brand-orange text-white">
            <Check className="h-7 w-7" aria-hidden="true" />
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight text-brand-charcoal">
            Enquiry sent.
          </h3>
          <p className="max-w-sm text-brand-gray">
            Thanks for reaching out to Idle Creations. We'll be in touch soon.
          </p>
        </div>
      ) : (
        <>
          {status === 'error' && (
            <div className="mb-6 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong sending your enquiry. Please try again.
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid gap-9 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Phone <span className="text-brand-gray/50">(optional)</span>
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+61" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="enquiry-type" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Enquiry Type
              </label>
              <select id="enquiry-type" name="enquiry-type" className={`${inputClass} cursor-pointer`} defaultValue="General Enquiry">
                {ENQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="message" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Message
              </label>
              <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about yourself, your project or your idea…" />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-2 bg-brand-orange px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-charcoal disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    Sending…
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-brand-light py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let's Create
                  <br />
                  <span className="text-brand-orange">Something.</span>
                </>
              }
            />

            <div className="mt-10 border-t border-brand-charcoal/10">
              {CONTACT_POINTS.map((point, i) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <point.icon className="h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-brand-charcoal">{point.title}</p>
                      <p className="text-sm text-brand-gray">{point.hint}</p>
                    </div>
                  </div>
                )
                return (
                  <Reveal key={point.title} delay={i * 0.08}>
                    {point.href ? (
                      <a
                        href={point.href}
                        className="group flex items-center justify-between gap-4 border-b border-brand-charcoal/10 py-5 transition-colors hover:border-brand-orange"
                      >
                        {content}
                        <span
                          className="h-8 w-8 shrink-0 rounded-full border border-brand-charcoal/20 text-brand-charcoal transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24" className="mx-auto mt-1.5 h-4 w-4 scale-x-[-1] fill-current" focusable="false">
                            <path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
                          </svg>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 border-b border-brand-charcoal/10 py-5">
                        {content}
                      </div>
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}