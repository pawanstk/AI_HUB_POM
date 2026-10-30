import { agentTemplates, pipelineStages } from '../data/content'
import { Icon } from './ui'

export default function AgentCanvas() {
  return (
    <section className="w-full" id="agents">
      <div className="bg-carbon text-white rounded-3xl p-8 sm:p-12 flex flex-col gap-8 shadow-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="bg-cobalt text-white px-2.5 py-0.5 rounded font-label-caps text-label-caps uppercase font-bold">
                STATEFUL CANVAS
              </span>
              <span className="font-label-caps text-label-caps text-slate-subtle uppercase">
                CHAIN-OF-TOOL PIPELINES
              </span>
            </div>
            <h2 className="font-display text-headline-lg sm:text-display text-white uppercase tracking-tight">
              AUTONOMOUS AGENT WORKFLOW CANVAS
            </h2>
          </div>
          <p className="font-body text-body text-slate-subtle max-w-md">
            Construct multi-model fallback flows with direct webhooks, sandbox code execution, and
            programmatic human escalation.
          </p>
        </div>

        <div className="bg-carbon-muted/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
          <div className="flex items-center justify-between font-label-caps text-label-caps text-slate-subtle pb-2 border-b border-slate-700/60 gap-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint" />
              ACTIVE PIPELINE: #FLOW-PULL-REQUEST-SECURITY-BOT
            </span>
            <span className="text-cobalt hidden sm:inline">100% VISUAL TRACING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {pipelineStages.map((stage) => (
              <div
                key={stage.stage}
                className={`bg-carbon border rounded-xl p-4 flex flex-col gap-2 relative ${stage.borderClassName} ${
                  stage.highlighted ? 'shadow-lg' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-label-code text-xs font-semibold ${stage.stageClassName}`}>
                    {stage.stage}
                  </span>
                  <Icon name={stage.icon} className={`text-[18px] ${stage.iconClassName}`} />
                </div>
                <h4 className="font-headline font-semibold text-sm text-white">{stage.title}</h4>
                <p className="font-body-sm text-xs text-slate-400">{stage.description}</p>
                <div
                  className={`mt-2 text-[10px] font-label-caps px-2 py-1 rounded self-start ${stage.chipClassName}`}
                >
                  {stage.chip}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-700/60 font-label-code text-label-code text-slate-300">
            <div className="flex items-center gap-x-2 flex-wrap">
              <span className="text-slate-subtle">AVAILABLE AGENT TEMPLATES:</span>
              {agentTemplates.map((name, i) => (
                <span key={name} className="flex items-center gap-2">
                  <a
                    href="#docs"
                    className="text-white hover:text-cobalt cursor-pointer underline"
                  >
                    {name}
                  </a>
                  {i < agentTemplates.length - 1 && <span>·</span>}
                </span>
              ))}
            </div>
            <a
              href="#docs"
              className="bg-cobalt hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-label-caps text-label-caps transition-colors flex items-center gap-1.5"
            >
              <span>DEPLOY TEMPLATE TO PRODUCTION</span>
              <Icon name="arrow_outward" className="text-[14px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
