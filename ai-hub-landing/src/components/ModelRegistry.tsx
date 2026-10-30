import { useState } from 'react'
import { curlFor, modelCategories, models, type Model, type ModelCategory } from '../data/content'
import { useCopy } from '../hooks'
import { Icon, SectionHeader } from './ui'

function ModelCard({ model }: { model: Model }) {
  const { copied, copy } = useCopy()

  return (
    <div className="bg-white border border-slate-border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl border flex items-center justify-center font-display text-xl font-bold ${model.codeClassName}`}
            >
              {model.code}
            </div>
            <div>
              <h3 className="font-headline font-subheading-lg text-carbon">{model.name}</h3>
              <span className="font-label-caps text-label-caps text-slate-muted">
                {model.vendor}
              </span>
            </div>
          </div>
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-md font-label-code text-xs font-semibold whitespace-nowrap ${model.badge.className}`}
          >
            {model.badge.icon && <Icon name={model.badge.icon} className="text-[14px]" />}
            {model.badge.label}
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-slate-muted">{model.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {model.capabilities.map((cap) => (
            <span
              key={cap.label}
              className={`px-2 py-0.5 rounded font-label-caps text-[10px] ${cap.className}`}
            >
              {cap.label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="font-label-caps text-[10px] text-slate-subtle block">
            INPUT / OUTPUT
          </span>
          <span className="font-label-code text-sm font-semibold text-carbon">{model.price}</span>
        </div>
        <button
          type="button"
          onClick={() => copy(curlFor(model.curlModel))}
          className="bg-slate-100 hover:bg-cobalt hover:text-white text-carbon px-3 py-1.5 rounded-lg font-label-code text-label-code transition-colors"
        >
          {copied ? 'COPIED' : 'COPY CURL'}
        </button>
      </div>
    </div>
  )
}

export default function ModelRegistry() {
  const [category, setCategory] = useState<ModelCategory | 'all'>('all')
  const visible =
    category === 'all' ? models : models.filter((m) => m.categories.includes(category))

  return (
    <section className="w-full" id="models">
      <div className="flex flex-col gap-6">
        <SectionHeader eyebrow="02 / CATALOG & SPECS" title="FOUNDATION MODEL REGISTRY">
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-border rounded-full"
            role="group"
            aria-label="Filter models by category"
          >
            {modelCategories.map((cat) => {
              const selected = cat.id === category
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full font-label-caps text-label-caps transition-colors ${
                    selected ? 'bg-carbon text-white' : 'text-slate-muted hover:text-carbon'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  )
}
