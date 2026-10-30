import type { ReactNode } from 'react'

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: string
  dark?: boolean
  children?: ReactNode
}

export function SectionHeader({ eyebrow, title, dark, children }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <span className="font-label-caps text-label-caps text-cobalt uppercase font-semibold">
          {eyebrow}
        </span>
        <h2
          className={`font-display text-headline-lg sm:text-display uppercase tracking-tight ${
            dark ? 'text-white' : 'text-carbon'
          }`}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}
