import type { ComponentType, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'outlineLight' | 'ghost'
  icon?: ComponentType<{ className?: string }>
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export function Button({
  children,
  href = '#',
  variant = 'primary',
  icon: Icon = ArrowRight,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300'

  const variants: Record<typeof variant, string> = {
    primary:
      'bg-brand-orange px-7 py-4 text-white hover:bg-brand-charcoal',
    outline:
      'border border-brand-charcoal px-7 py-4 text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    outlineLight:
      'border border-white/40 px-7 py-4 text-white hover:bg-white hover:text-brand-charcoal',
    ghost: 'text-brand-orange hover:text-brand-charcoal',
  }

  if (type === 'submit') {
    return (
      <button type="submit" className={`${base} ${variants[variant]} ${className}`}>
        {children}
        {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
      </button>
    )
  }

  return (
    <a href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </a>
  )
}
