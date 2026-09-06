interface LogoMarkProps {
  className?: string
}

export function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <img
      src="images/logo.png"
      className={`w-64 h-20 rounded-lg object-contain  transition-shadow  ${className}`}
      alt="Idle Creations"
    />
  )
}
