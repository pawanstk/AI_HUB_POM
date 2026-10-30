import type { ReactNode } from 'react'
import { API_BASE_URL } from '../data/content'
import { Icon } from './ui'

const inlineCode = 'font-label-code text-xs bg-slate-100 px-1 py-0.5 rounded'

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: 'How does AI Hub maintain zero proxy latency?',
    answer:
      'Our gateway runs compiled native Rust routines distributed over 300+ edge locations worldwide. Average edge overhead sits at 14 milliseconds—completely unnoticeable compared to the multi-second inference cycles of LLM completions.',
  },
  {
    question: 'What happens when upstream providers (e.g., Anthropic or OpenAI) go down?',
    answer:
      'You configure deterministic failover hierarchies. For instance, if Claude 3.5 Sonnet throws a 529 overload status, the request seamlessly routes to DeepSeek R1 or GPT-4o in less than 50 milliseconds without terminating the end-user websocket.',
  },
  {
    question: 'Is my prompt or response data retained or used to train models?',
    answer:
      'Never. AI Hub operates strictly on non-persistent ephemeral memory buffers. Zero prompt caching, zero disk persistence, and legally binding zero-training assurances are enforced across all tier contracts.',
  },
  {
    question: 'How easy is it to migrate an existing codebase?',
    answer: (
      <>
        It requires modifying exactly one parameter in your existing client constructor: replacing
        the <code className={inlineCode}>base_url</code> with{' '}
        <code className={inlineCode}>{API_BASE_URL}</code>. Every request parameter and JSON
        response structure conforms to the OpenAI spec.
      </>
    ),
  },
]

export default function Faq() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        <div>
          <span className="font-label-caps text-label-caps text-cobalt uppercase font-semibold">
            05 / VERIFICATION
          </span>
          <h2 className="font-display text-headline-lg sm:text-display text-carbon uppercase tracking-tight">
            FREQUENTLY ANSWERED INQUIRIES
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-slate-border rounded-2xl p-6 cursor-pointer transition-all"
            >
              <summary className="flex justify-between items-center gap-4 font-headline font-semibold text-carbon list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <Icon
                  name="expand_more"
                  className="text-slate-400 group-open:rotate-180 transition-transform"
                />
              </summary>
              <p className="mt-3 font-body text-body text-slate-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
