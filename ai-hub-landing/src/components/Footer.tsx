import { footerColumns } from '../data/content'

export default function Footer() {
  return (
    <footer className="w-full bg-carbon text-white mt-12 border-t border-slate-800" id="contact">
      <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cobalt flex items-center justify-center text-white font-bold font-label-caps">
              #
            </div>
            <div>
              <span className="font-display text-2xl uppercase tracking-tight font-bold">
                AI HUB GATEWAY
              </span>
              <span className="block font-label-caps text-[10px] text-slate-400 uppercase">
                KINETIC MODULAR ROUTING PLATFORM
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-label-code text-label-code text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-mint" />
              ALL CLUSTERS NOMINAL
            </span>
            <span>·</span>
            <span>EDGE: 14MS</span>
            <span>·</span>
            <span className="bg-carbon-muted px-2.5 py-1 rounded text-white">v3.4-PROD</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps text-slate-400 uppercase">
                {col.title}
              </span>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-label-code text-slate-400">
          <span>© 2025 AI HUB PLATFORM INC. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            {['PRIVACY FRAMEWORK', 'TERMS OF SERVICE', 'STATUS CONSOLE'].map((label) => (
              <a key={label} href="#" className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
