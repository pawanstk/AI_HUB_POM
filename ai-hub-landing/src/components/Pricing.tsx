import { useState } from 'react'
import { ANNUAL_DISCOUNT, pricingTiers, type PricingTier } from '../data/content'
import { Icon, SectionHeader } from './ui'

type Billing = 'monthly' | 'annual'

function priceFor(tier: PricingTier, billing: Billing) {
  if (tier.monthlyPrice === null) return 'CUSTOM'
  const price =
    billing === 'annual' ? Math.round(tier.monthlyPrice * (1 - ANNUAL_DISCOUNT)) : tier.monthlyPrice
  return `$${price}`
}

function TierCard({ tier, billing }: { tier: PricingTier; billing: Billing }) {
  const dark = tier.featured

  return (
    <div
      className={`rounded-3xl p-8 flex flex-col justify-between relative ${
        dark
          ? 'bg-carbon text-white shadow-xl border-2 border-cobalt'
          : 'bg-white border border-slate-border shadow-sm hover:border-slate-400 transition-colors'
      }`}
    >
      {tier.ribbon && (
        <div className="absolute -top-3.5 right-6 bg-cobalt text-white px-3 py-1 rounded-full font-label-caps text-[11px] font-bold uppercase tracking-wider shadow">
          {tier.ribbon}
        </div>
      )}
      <div className="flex flex-col gap-4">
        <span
          className={`font-label-caps text-label-caps uppercase ${
            dark ? 'text-cobalt font-bold' : 'text-slate-muted'
          }`}
        >
          {tier.eyebrow}
        </span>
        <h3
          className={`font-headline font-headline-sm uppercase ${dark ? 'text-white' : 'text-carbon'}`}
        >
          {tier.name}
        </h3>
        <div className="flex items-baseline gap-1 my-1">
          <span
            className={`font-display text-headline sm:text-headline-lg ${
              dark ? 'text-white' : 'text-carbon'
            }`}
          >
            {priceFor(tier, billing)}
          </span>
          {tier.priceSuffix && (
            <span
              className={`font-label-code text-label-code ${dark ? 'text-slate-400' : 'text-slate-muted'}`}
            >
              {tier.priceSuffix}
            </span>
          )}
        </div>
        <p
          className={`font-body-sm text-body-sm ${dark ? 'text-slate-300' : 'text-slate-muted'}`}
        >
          {tier.description}
        </p>
        <ul
          className={`mt-4 flex flex-col gap-2.5 font-body-sm text-body-sm ${
            dark ? 'text-slate-200' : 'text-carbon'
          }`}
        >
          {tier.features.map((f) => (
            <li key={f.label} className="flex items-center gap-2">
              <Icon name="check_circle" className="text-mint text-[18px]" />
              <span className={f.strong ? 'text-white font-medium' : undefined}>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`mt-8 pt-4 border-t ${dark ? 'border-carbon-muted' : 'border-slate-100'}`}>
        <a
          href={tier.cta.href}
          className={`block w-full text-center font-body text-body rounded-xl py-3.5 transition-colors ${
            dark
              ? 'bg-cobalt hover:bg-blue-700 text-white font-semibold shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-carbon font-medium'
          }`}
        >
          {tier.cta.label}
        </a>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  const toggleClass = (active: boolean) =>
    `px-5 py-2 rounded-full font-label-caps text-label-caps transition-colors ${
      active ? 'bg-carbon text-white shadow-sm' : 'text-slate-muted hover:text-carbon'
    }`

  return (
    <section className="w-full" id="pricing">
      <div className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="04 / TRANSPARENT FISCAL CONTROLS"
          title="SIMPLE PASSTHROUGH PRICING"
        >
          <div
            className="flex items-center gap-3 bg-white border border-slate-border p-1.5 rounded-full shadow-sm self-start"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              aria-pressed={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
              className={toggleClass(billing === 'monthly')}
            >
              MONTHLY
            </button>
            <button
              type="button"
              aria-pressed={billing === 'annual'}
              onClick={() => setBilling('annual')}
              className={`${toggleClass(billing === 'annual')} flex items-center gap-1.5`}
            >
              <span>ANNUAL BILLING</span>
              <span className="bg-mint-light text-mint px-2 py-0.5 rounded-full text-[10px] font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} billing={billing} />
          ))}
        </div>

        <div className="bg-white border border-slate-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cobalt-light text-cobalt flex items-center justify-center shrink-0">
              <Icon name="calculate" className="text-[24px]" />
            </div>
            <div>
              <h4 className="font-headline font-semibold text-carbon text-base">
                Interactive Passthrough Cost Calculator
              </h4>
              <p className="font-body-sm text-body-sm text-slate-muted">
                Calculate projected savings migrating from fragmented multi-vendor contracts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-label-code text-label-code text-slate-muted">
              TYPICAL SAVINGS:{' '}
              <strong className="text-mint font-semibold">24% - 68% / MO</strong>
            </span>
            <button
              type="button"
              className="bg-carbon hover:bg-carbon-muted text-white px-4 py-2 rounded-lg font-label-caps text-label-caps transition-colors"
            >
              CALCULATE YOUR WORKLOAD
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
