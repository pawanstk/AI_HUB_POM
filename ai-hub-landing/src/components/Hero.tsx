import { useState } from 'react'
import {
  API_BASE_URL,
  arenaRows,
  inferenceProfiles,
  statusPills,
  type ArenaRow,
} from '../data/content'
import { useCopy } from '../hooks'
import { Icon } from './ui'

function ProfilePills() {
  const [active, setActive] = useState(inferenceProfiles[0].id)

  return (
    <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-caps text-label-caps text-slate-subtle uppercase">
        QUICK INFERENCE PROFILES:
      </span>
      <div className="flex flex-wrap gap-2">
        {inferenceProfiles.map((profile) => {
          const selected = profile.id === active
          return (
            <button
              key={profile.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(profile.id)}
              className={`px-3.5 py-1.5 rounded-lg font-label-code text-label-code flex items-center gap-1.5 transition-colors ${
                selected
                  ? 'bg-carbon text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-carbon'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${profile.dot}`} />
              <span>{profile.id}</span>
              <span className={selected ? 'text-slate-subtle' : 'text-slate-muted'}>
                · {profile.latency}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ArenaCard({ row }: { row: ArenaRow }) {
  return (
    <div className="bg-carbon-muted/40 rounded-xl p-3.5 border border-slate-700/40">
      <div className="flex items-center justify-between mb-2 gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`w-6 h-6 rounded font-label-caps text-xs flex items-center justify-center font-bold ${row.codeClassName}`}
          >
            {row.code}
          </span>
          <span className="font-headline text-sm font-semibold text-white">{row.name}</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] font-label-caps ${row.badgeClassName}`}
          >
            {row.badge}
          </span>
        </div>
        <div className="font-label-code text-xs text-slate-300 whitespace-nowrap">
          <span className={`font-semibold ${row.tokClassName}`}>{row.tokPerSec}</span> ·{' '}
          <span>{row.price}</span>
        </div>
      </div>
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-1.5">
        <div className={`${row.barClassName} ${row.barWidth} h-full rounded-full`} />
      </div>
      <div className="flex justify-between font-label-caps text-[10px] text-slate-400">
        <span>{row.ttft}</span>
        <span>{row.quality}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { copied, copy } = useCopy()

  return (
    <section className="w-full pt-4" id="top">
      {/* Live edge status strip */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="bg-carbon text-white px-3 py-1 rounded-full font-label-caps text-label-caps uppercase flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-mint animate-ping" />
          <span>EDGE GATEWAY: ACTIVE</span>
        </span>
        <span className="bg-white border border-slate-border text-slate-muted px-3 py-1 rounded-full font-label-caps text-label-caps">
          GLOBAL LATENCY: <strong className="text-carbon">{statusPills.latency}</strong>
        </span>
        {statusPills.tags.map((tag) => (
          <span
            key={tag.label}
            className={`px-3 py-1 rounded-full font-label-caps text-label-caps ${tag.className}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: value prop + conversion triggers */}
        <div className="lg:col-span-6 bg-white border border-slate-border rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-cobalt-light/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-5">
            <span className="font-label-caps text-label-caps text-cobalt tracking-wider uppercase font-semibold">
              KINETIC MODULAR ROUTING ENGINE
            </span>
            <h1 className="font-display text-display sm:text-[84px] text-carbon uppercase tracking-tight leading-[0.92]">
              ORCHESTRATE EVERY AI MODEL.
              <br />
              <span className="text-cobalt">PAY AS YOU INFER.</span>
            </h1>
            <p className="font-subheading text-subheading text-slate-muted max-w-xl">
              One universal endpoint replaces 14 vendor contracts. Switch reasoning engines on the
              fly, automate zero-downtime failovers, and stream tokens at zero proxy markups.
            </p>
            <ProfilePills />
          </div>

          <div className="relative z-10 pt-8 mt-6 border-t border-slate-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#playground"
                className="bg-cobalt hover:bg-blue-700 text-white font-body text-body rounded-xl px-6 py-3.5 font-semibold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Start Free — $10 Test Credit</span>
                <Icon name="terminal" className="text-[18px]" />
              </a>
              <a
                href="#docs"
                className="bg-slate-100 hover:bg-slate-200 text-carbon font-body text-body rounded-xl px-5 py-3.5 font-medium transition-colors text-center"
              >
                Read 1-Line Docs
              </a>
            </div>
            <span className="font-label-caps text-label-caps text-slate-subtle text-right hidden sm:block">
              NO CREDIT CARD
              <br />
              SETUP IN 60 SEC
            </span>
          </div>
        </div>

        {/* Right: live model arena */}
        <div
          className="lg:col-span-6 bg-carbon text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-slate-800"
          id="arena"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-carbon-muted gap-2">
              <div className="flex items-center gap-2">
                <Icon name="speed" className="text-cobalt text-[20px]" />
                <span className="font-label-caps text-label-caps text-white uppercase tracking-wider font-semibold">
                  BENCHMARK LAB // LIVE RUNTIME ARENA
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-carbon-muted px-2.5 py-1 rounded-md font-label-code text-label-code text-slate-subtle whitespace-nowrap">
                <span>SIMULATED LOAD: 1,000 TOKENS</span>
              </div>
            </div>

            <div className="bg-carbon-muted/70 rounded-xl p-3.5 my-4 border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-subtle font-label-caps text-label-caps mb-1.5 gap-2">
                <span>PROMPT BENCHMARK SUITE:</span>
                <span className="text-mint font-label-code text-label-code text-right">
                  CODE GEN + COMPLEX REASONING
                </span>
              </div>
              <p className="font-label-code text-label-code text-slate-200">
                "Synthesize an asynchronous token-bucket rate limiter with Redis cluster failover in
                Rust."
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {arenaRows.map((row) => (
                <ArenaCard key={row.code} row={row} />
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-carbon-muted flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-label-code text-label-code text-slate-300">
              <Icon name="verified" className="text-mint text-[18px]" />
              <span>Active Routing: Smart Auto-Fallback Enabled</span>
            </div>
            <button
              type="button"
              onClick={() => copy(`curl -X POST ${API_BASE_URL}/chat/completions`)}
              className="bg-white/10 hover:bg-white/20 text-white font-label-caps text-label-caps px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Icon name={copied ? 'check' : 'content_copy'} className="text-[14px]" />
              {copied ? 'COPIED' : 'TEST IN PLAYGROUND'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
