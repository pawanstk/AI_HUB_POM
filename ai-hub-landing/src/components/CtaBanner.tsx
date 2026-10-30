import { Icon } from './ui'

const assurances = ['NO CREDIT CARD REQUIRED', 'INSTANT PROVISIONING', 'PASSTHROUGH PRICING']

export default function CtaBanner() {
  return (
    <section className="w-full pt-4 pb-8" id="playground">
      <div className="bg-carbon text-white rounded-3xl p-8 sm:p-12 flex flex-col items-center text-center gap-6 shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cobalt/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-mint/20 rounded-full blur-3xl pointer-events-none" />
        <span className="relative bg-mint-light/20 text-mint border border-mint/30 px-3 py-1 rounded-full font-label-caps text-label-caps uppercase font-bold">
          ZERO CONFIG · INSTANT ONBOARDING
        </span>
        <h2 className="relative font-display text-display sm:text-[88px] text-white uppercase tracking-tight max-w-3xl leading-[0.92]">
          START INFERRING ACROSS 100+ MODELS TODAY.
        </h2>
        <p className="relative font-subheading text-subheading text-slate-300 max-w-xl">
          Join 14,000+ developers replacing vendor locks with dynamic edge routing. Claim your free
          $10 developer testing credits in 60 seconds.
        </p>
        <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#playground"
            className="bg-cobalt hover:bg-blue-700 text-white font-body text-body rounded-xl px-8 py-4 font-semibold transition-all shadow-lg flex items-center gap-2"
          >
            <span>Create Account Free</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
          <a
            href="#docs"
            className="bg-white/10 hover:bg-white/20 text-white font-body text-body rounded-xl px-8 py-4 font-medium transition-colors"
          >
            Explore API Reference
          </a>
        </div>
        <div className="relative pt-4 flex flex-wrap items-center justify-center gap-6 font-label-code text-label-code text-slate-400">
          {assurances.map((text) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon name="check" className="text-mint text-[16px]" /> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
