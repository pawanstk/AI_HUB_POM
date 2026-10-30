import { API_BASE_URL, navLinks } from '../data/content'
import { Icon } from './ui'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="h-28 w-full max-w-[1280px] mx-auto px-6 flex items-center justify-center">
        <div className="pointer-events-auto w-full bg-white/95 backdrop-blur-md border border-slate-border shadow-sm rounded-full py-2.5 px-6 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-carbon flex items-center justify-center text-white font-bold font-label-caps">
              <span className="text-cobalt">#</span>
            </div>
            <span className="font-headline font-subheading-lg text-carbon tracking-tight uppercase font-bold hidden sm:inline-block">
              AI HUB{' '}
              <span className="text-cobalt text-xs font-label-caps ml-1 px-1.5 py-0.5 rounded bg-cobalt-light font-semibold">
                MODULAR V3
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-body text-slate-muted hover:text-carbon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#docs"
              className="font-label-code text-label-code bg-slate-100 hover:bg-slate-200 text-carbon rounded-full px-3.5 py-2 transition-colors hidden md:inline-flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              {API_BASE_URL.replace('https://', '')}
            </a>
            <a
              href="#playground"
              className="font-body text-body bg-cobalt text-white hover:bg-blue-700 rounded-full px-5 py-2 font-medium transition-colors shadow-sm text-center flex items-center gap-1.5"
            >
              <span>Instant API Key</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
