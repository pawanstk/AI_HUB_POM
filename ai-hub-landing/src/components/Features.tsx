import { features } from '../data/content'
import { Icon, SectionHeader } from './ui'

export default function Features() {
  return (
    <section className="w-full" id="features">
      <div className="flex flex-col gap-6">
        <SectionHeader eyebrow="01 / ARCHITECTURE HIGHLIGHTS" title="MODULAR EDGE ARCHITECTURE">
          <p className="font-body text-body text-slate-muted max-w-md">
            Engineered for resilient systems where milliseconds define conversions and downtime is
            non-negotiable.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-slate-border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-cobalt transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.iconClassName}`}
                  >
                    <Icon name={feature.icon} className="text-[20px]" />
                  </span>
                  <span
                    className={`font-label-caps text-label-caps px-2 py-0.5 rounded ${feature.tagClassName}`}
                  >
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-headline font-subheading-lg text-carbon uppercase tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">{feature.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-label-code text-label-code">
                <span className="text-slate-subtle">{feature.metricLabel}</span>
                <span className={`font-semibold ${feature.metricClassName}`}>
                  {feature.metricValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
