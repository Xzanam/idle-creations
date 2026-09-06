import type { ReactNode } from 'react'

interface MarqueeProps {
  items: ReactNode[]
  dark?: boolean
}

export function Marquee({ items, dark = true }: MarqueeProps) {
  const separator = (
    <span className="h-2 w-2 shrink-0 rotate-45 bg-brand-orange" aria-hidden="true" />
  )

  const renderRow = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center" aria-hidden={keyPrefix === 'b'}>
      {items.map((item, i) => (
        <span
          key={`${keyPrefix}-${i}`}
          className={`flex shrink-0 items-center gap-8 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.3em] ${
            dark ? 'text-white/60' : 'text-brand-gray'
          }`}
        >
          <span>{item}</span>
          {separator}
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`relative flex w-full overflow-hidden border-y ${
        dark ? 'border-white/10 bg-brand-charcoal' : 'border-brand-charcoal/10 bg-brand-light'
      }`}
    >
      <div
        className="marquee-track flex will-change-transform"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {renderRow('a')}
        {renderRow('b')}
      </div>
      <style>{`
        .marquee-track {
          animation: marquee 36s linear infinite;
        }
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}