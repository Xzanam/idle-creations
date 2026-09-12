interface LogoMarkProps {
  className?: string
}

export function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <img
      src="images/idle.png"
      className={`w-64 h-20 object-contain  transition-shadow  ${className}`}
      alt="Idle Creations"
    />
  )
}
