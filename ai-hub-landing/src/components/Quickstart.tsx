import { quickstartLines } from '../data/content'
import { useCopy } from '../hooks'
import { Icon, SectionHeader } from './ui'

const snippetText = quickstartLines.map((line) => line.map((t) => t.text).join('')).join('\n')

export default function Quickstart() {
  const { copied, copy } = useCopy()

  return (
    <section className="w-full" id="docs">
      <div className="bg-white border border-slate-border rounded-3xl p-8 sm:p-10 flex flex-col gap-6 shadow-sm">
        <SectionHeader eyebrow="03 / ZERO-LOGIN DOCS" title="DROP-IN OPENAI REPLACEMENT">
          <p className="font-body text-body text-slate-muted max-w-sm">
            Keep your existing SDKs. Simply swap your{' '}
            <code className="font-label-code text-label-code bg-slate-100 text-carbon px-1.5 py-0.5 rounded">
              base_url
            </code>{' '}
            and pass whichever model identifier you want.
          </p>
        </SectionHeader>

        <div className="bg-carbon rounded-2xl p-6 text-white font-label-code text-xs sm:text-sm overflow-x-auto shadow-inner border border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-carbon-muted text-slate-400 font-label-caps text-xs gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              <span className="ml-2 text-slate-300">python_universal_client.py</span>
            </div>
            <span className="text-mint font-semibold whitespace-nowrap">
              ● 100% BACKWARD COMPATIBLE
            </span>
          </div>
          <pre className="pt-4 leading-relaxed font-label-code text-slate-200">
            <code>
              {quickstartLines.map((line, i) => (
                <span key={i}>
                  {line.map((token, j) => (
                    <span key={j} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                  {i < quickstartLines.length - 1 && '\n'}
                </span>
              ))}
            </code>
          </pre>
          <div className="mt-4 pt-4 border-t border-carbon-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-slate-400 text-xs font-label-caps">
              COMPATIBLE WITH: LANGCHAIN, LLAMAINDEX, DSPY, AUTO-GEN, LITELM
            </span>
            <button
              type="button"
              onClick={() => copy(snippetText)}
              className="bg-cobalt hover:bg-blue-700 text-white font-label-code text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Icon name={copied ? 'check' : 'content_copy'} className="text-[14px]" />
              {copied ? 'COPIED' : 'COPY PYTHON SNIPPET'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
