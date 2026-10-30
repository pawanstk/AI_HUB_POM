export const API_BASE_URL = 'https://api.aihub.com/v1'

export const navLinks = [
  { label: 'Models', href: '#models' },
  { label: 'Live Arena', href: '#arena' },
  { label: 'Agent Pipelines', href: '#agents' },
  { label: 'Architecture', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

export const statusPills = {
  latency: '14ms',
  tags: [
    {
      label: 'ZERO MARKUP PASSTHROUGH',
      className: 'bg-mint-light text-mint border border-mint/20',
    },
    {
      label: 'OPENAI-COMPATIBLE DROP-IN',
      className: 'bg-cobalt-light text-cobalt border border-cobalt/20',
    },
  ],
}

export interface InferenceProfile {
  id: string
  dot: string
  latency: string
}

export const inferenceProfiles: InferenceProfile[] = [
  { id: 'claude-3-5-sonnet', dot: 'bg-cobalt', latency: '142ms' },
  { id: 'gpt-4o', dot: 'bg-slate-400', latency: '118ms' },
  { id: 'deepseek-r1', dot: 'bg-mint', latency: '184ms' },
]

export interface ArenaRow {
  code: string
  name: string
  codeClassName: string
  badge: string
  badgeClassName: string
  tokPerSec: string
  tokClassName: string
  price: string
  barClassName: string
  barWidth: string
  ttft: string
  quality: string
}

export const arenaRows: ArenaRow[] = [
  {
    code: 'CL',
    name: 'Claude 3.5 Sonnet',
    codeClassName: 'bg-amber-500/20 text-amber-300',
    badge: 'HIGHEST ACCURACY 93.7%',
    badgeClassName: 'bg-mint-light/10 text-mint border border-mint/30',
    tokPerSec: '82 tok/s',
    tokClassName: 'text-cobalt',
    price: '$0.015 / 1k',
    barClassName: 'bg-cobalt',
    barWidth: 'w-[88%]',
    ttft: 'TTFT: 240ms',
    quality: 'QUALITY BENCHMARK: 9.6 / 10',
  },
  {
    code: 'GP',
    name: 'GPT-4o',
    codeClassName: 'bg-emerald-500/20 text-emerald-300',
    badge: 'FASTEST TTFT',
    badgeClassName: 'bg-cobalt/20 text-blue-300 border border-cobalt/30',
    tokPerSec: '108 tok/s',
    tokClassName: 'text-mint',
    price: '$0.010 / 1k',
    barClassName: 'bg-mint',
    barWidth: 'w-[96%]',
    ttft: 'TTFT: 170ms',
    quality: 'QUALITY BENCHMARK: 9.2 / 10',
  },
  {
    code: 'DS',
    name: 'DeepSeek R1',
    codeClassName: 'bg-blue-500/20 text-blue-300',
    badge: 'LOWEST COST (92% CHEAPER)',
    badgeClassName: 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30',
    tokPerSec: '64 tok/s',
    tokClassName: 'text-yellow-400',
    price: '$0.002 / 1k',
    barClassName: 'bg-yellow-400',
    barWidth: 'w-[70%]',
    ttft: 'TTFT: 380ms (THINKING BUFFER)',
    quality: 'QUALITY BENCHMARK: 9.4 / 10',
  },
]

export interface Feature {
  icon: string
  iconClassName: string
  tag: string
  tagClassName: string
  title: string
  description: string
  metricLabel: string
  metricValue: string
  metricClassName: string
}

export const features: Feature[] = [
  {
    icon: 'hub',
    iconClassName: 'bg-cobalt-light text-cobalt',
    tag: '1 KEY',
    tagClassName: 'bg-slate-100 text-carbon',
    title: 'Unified Authentication',
    description:
      'Pass calls across OpenAI, Anthropic, Google, and open models using a singular encrypted bearer token.',
    metricLabel: 'PROVIDER COVERAGE',
    metricValue: '100+ MODELS',
    metricClassName: 'text-carbon',
  },
  {
    icon: 'alt_route',
    iconClassName: 'bg-mint-light text-mint',
    tag: '<40MS',
    tagClassName: 'bg-mint-light text-mint',
    title: 'Sub-50ms Smart Failover',
    description:
      'Automatic retry pipelines redirect around upstream rate limits (429) or degraded server clusters instantaneously.',
    metricLabel: 'SUCCESS RATE',
    metricValue: '99.998%',
    metricClassName: 'text-mint',
  },
  {
    icon: 'shield',
    iconClassName: 'bg-slate-100 text-carbon',
    tag: 'RAM ONLY',
    tagClassName: 'bg-slate-100 text-slate-muted',
    title: 'Zero Data Retention',
    description:
      'User prompts never touch persistent volumes. Ephemeral RAM streaming with SOC2 Type II compliance guarantees.',
    metricLabel: 'LOG RETENTION',
    metricValue: '0 SECONDS',
    metricClassName: 'text-carbon',
  },
  {
    icon: 'receipt_long',
    iconClassName: 'bg-blue-50 text-cobalt',
    tag: 'PASSTHROUGH',
    tagClassName: 'bg-cobalt-light text-cobalt',
    title: 'Cost Budget Caps',
    description:
      'Enforce strict per-team token quotas and instant killswitches to prevent runaway recurring LLM loop expenses.',
    metricLabel: 'FEE MARKUP',
    metricValue: '0.00%',
    metricClassName: 'text-mint',
  },
]

export type ModelCategory = 'reasoning' | 'vision' | 'code' | 'fast'

export const modelCategories: { id: ModelCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'ALL (104)' },
  { id: 'reasoning', label: 'REASONING' },
  { id: 'vision', label: 'VISION' },
  { id: 'code', label: 'CODE' },
  { id: 'fast', label: 'FAST LPUs' },
]

export interface Capability {
  label: string
  className: string
}

export interface Model {
  id: string
  curlModel: string
  code: string
  codeClassName: string
  name: string
  vendor: string
  badge: { label: string; className: string; icon?: string }
  description: string
  capabilities: Capability[]
  price: string
  categories: ModelCategory[]
}

const pillNeutral = 'bg-slate-100 text-carbon'
const pillAccent = 'bg-cobalt-light text-cobalt'
const pillMuted = 'bg-slate-100 text-slate-muted'
const pillMint = 'bg-mint-light text-mint font-semibold'

export const models: Model[] = [
  {
    id: 'claude',
    curlModel: 'claude-3-5-sonnet',
    code: 'CL',
    codeClassName: 'bg-orange-50 border-orange-200 text-orange-600',
    name: 'Claude 3.5 Sonnet',
    vendor: 'ANTHROPIC · v20241022',
    badge: {
      label: '93.7% ACC',
      className: 'bg-mint-light text-mint',
      icon: 'verified',
    },
    description:
      'Industry-benchmark code synthesis and multi-modal technical diagram interpretation.',
    capabilities: [
      { label: '200K CONTEXT', className: pillNeutral },
      { label: 'TOOL CALLING', className: pillAccent },
      { label: 'VISION', className: pillMuted },
    ],
    price: '$3.00 / $15.00',
    categories: ['reasoning', 'vision', 'code'],
  },
  {
    id: 'gpt-4o',
    curlModel: 'gpt-4o',
    code: 'GP',
    codeClassName: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    name: 'GPT-4o',
    vendor: 'OPENAI · v2024-08-06',
    badge: {
      label: '92.4% ACC',
      className: 'bg-mint-light text-mint',
      icon: 'verified',
    },
    description:
      'High-throughput omni-model with ultra-low latency real-time voice and vision capabilities.',
    capabilities: [
      { label: '128K CONTEXT', className: pillNeutral },
      { label: 'FAST TTFT', className: pillAccent },
      { label: 'STRUCTURED JSON', className: pillMuted },
    ],
    price: '$2.50 / $10.00',
    categories: ['vision', 'fast'],
  },
  {
    id: 'deepseek',
    curlModel: 'deepseek-reasoner',
    code: 'DS',
    codeClassName: 'bg-blue-50 border-blue-200 text-blue-600',
    name: 'DeepSeek R1',
    vendor: 'DEEPSEEK · REASONER',
    badge: {
      label: 'VALUE KING',
      className: 'bg-blue-50 text-cobalt',
      icon: 'bolt',
    },
    description:
      'Open-weights reinforcement reasoning engine providing OpenAI o1-tier performance at 10x savings.',
    capabilities: [
      { label: '64K CONTEXT', className: pillNeutral },
      { label: 'MATH & PROOFS', className: 'bg-amber-100 text-amber-800' },
      { label: '92% DISCOUNT', className: pillMint },
    ],
    price: '$0.55 / $2.19',
    categories: ['reasoning', 'code'],
  },
  {
    id: 'gemini',
    curlModel: 'gemini-1.5-pro',
    code: 'GM',
    codeClassName: 'bg-purple-50 border-purple-200 text-purple-600',
    name: 'Gemini 1.5 Pro',
    vendor: 'GOOGLE DEEPMIND',
    badge: { label: '2M TOKENS', className: 'bg-purple-50 text-purple-700' },
    description:
      'Unrivaled multi-million token context window for digesting full software repositories and audio files.',
    capabilities: [
      { label: '2,000K CONTEXT', className: pillNeutral },
      { label: 'VIDEO NATIVE', className: pillAccent },
      { label: 'AUDIO', className: pillMuted },
    ],
    price: '$1.25 / $5.00',
    categories: ['vision'],
  },
  {
    id: 'llama',
    curlModel: 'llama-3.3-70b',
    code: 'LM',
    codeClassName: 'bg-cyan-50 border-cyan-200 text-cyan-600',
    name: 'Llama 3.3 70B',
    vendor: 'META / ACCELERATED',
    badge: { label: '120 TOK/S', className: 'bg-mint-light text-mint' },
    description:
      'Open intelligence hosted on ultra-low latency LPUs for sub-second responses in client-facing chatbots.',
    capabilities: [
      { label: '128K CONTEXT', className: pillNeutral },
      { label: 'LPU ACCEL', className: pillNeutral },
      { label: 'SUPER CHEAP', className: pillMint },
    ],
    price: '$0.35 / $0.40',
    categories: ['fast'],
  },
  {
    id: 'mistral',
    curlModel: 'mistral-large',
    code: 'MS',
    codeClassName: 'bg-red-50 border-red-200 text-red-600',
    name: 'Mistral Large',
    vendor: 'MISTRAL AI · EU HOSTED',
    badge: { label: 'GDPR READY', className: 'bg-slate-100 text-carbon' },
    description:
      'Multilingual flagship model sovereignly hosted in European datacenters with strict privacy compliance.',
    capabilities: [
      { label: '128K CONTEXT', className: pillNeutral },
      { label: 'EU RESIDENCY', className: pillAccent },
      { label: 'CODE FIXING', className: pillMuted },
    ],
    price: '$2.00 / $6.00',
    categories: ['code'],
  },
]

export interface PipelineStage {
  stage: string
  stageClassName: string
  icon: string
  iconClassName: string
  title: string
  description: string
  chip: string
  chipClassName: string
  borderClassName: string
  highlighted?: boolean
}

export const pipelineStages: PipelineStage[] = [
  {
    stage: 'STAGE 01',
    stageClassName: 'text-cobalt',
    icon: 'input',
    iconClassName: 'text-slate-400',
    title: 'GitHub Webhook',
    description: 'Pulls pull-request diff & touched AST boundaries.',
    chip: 'EVENT: pull_request.opened',
    chipClassName: 'bg-slate-800 text-slate-300',
    borderClassName: 'border-slate-700',
  },
  {
    stage: 'STAGE 02 · REASONING',
    stageClassName: 'text-mint',
    icon: 'psychology',
    iconClassName: 'text-mint',
    title: 'Claude 3.5 Sonnet',
    description: 'Detects OWASP vulnerabilities & drafting fix patches.',
    chip: 'SANDBOX DOCKER TEST',
    chipClassName: 'bg-cobalt/20 text-blue-300',
    borderClassName: 'border-cobalt/60',
    highlighted: true,
  },
  {
    stage: 'STAGE 03 · VERIFICATION',
    stageClassName: 'text-amber-400',
    icon: 'verified_user',
    iconClassName: 'text-amber-400',
    title: 'DeepSeek R1 Dual Check',
    description: 'Verifies edge cases without hallucinations.',
    chip: 'CONSENSUS SCORE > 98%',
    chipClassName: 'bg-slate-800 text-slate-300',
    borderClassName: 'border-slate-700',
  },
  {
    stage: 'STAGE 04 · EXECUTE',
    stageClassName: 'text-mint',
    icon: 'task_alt',
    iconClassName: 'text-mint',
    title: 'Automated PR Comment',
    description: 'Submits inline patch recommendation & passes CI.',
    chip: 'STATUS: SUCCESS (1.8s)',
    chipClassName: 'bg-mint-light/20 text-mint',
    borderClassName: 'border-mint/60',
  },
]

export const agentTemplates = [
  'Financial Filing Crawler',
  'Zendesk SLA Triage',
  'DB Migration Validator',
]

export interface QuickstartToken {
  text: string
  className?: string
}

const c = 'text-slate-500' // comment
const k = 'text-blue-400' // keyword
const p = 'text-emerald-400' // parameter
const s = 'text-yellow-300' // string

export const quickstartLines: QuickstartToken[][] = [
  [{ text: '# 1. Official OpenAI SDK (no special proprietary library required)', className: c }],
  [
    { text: 'from', className: k },
    { text: ' openai ' },
    { text: 'import', className: k },
    { text: ' OpenAI' },
  ],
  [],
  [{ text: '# 2. Re-point endpoint to AI Hub universal edge cluster', className: c }],
  [{ text: 'client = OpenAI(' }],
  [
    { text: '    ' },
    { text: 'base_url', className: p },
    { text: '=' },
    { text: `"${API_BASE_URL}"`, className: s },
    { text: ',' },
  ],
  [
    { text: '    ' },
    { text: 'api_key', className: p },
    { text: '=' },
    { text: '"aih_live_sec_token_9942a"', className: s },
    { text: '  ' },
    { text: '# Handles Claude, GPT, DeepSeek automatically', className: c },
  ],
  [{ text: ')' }],
  [],
  [{ text: '# 3. Call any frontier foundation model seamlessly', className: c }],
  [{ text: 'response = client.chat.completions.create(' }],
  [
    { text: '    ' },
    { text: 'model', className: p },
    { text: '=' },
    { text: '"claude-3-5-sonnet"', className: s },
    { text: ',              ' },
    { text: '# Or "gpt-4o", "deepseek-r1"', className: c },
  ],
  [
    { text: '    ' },
    { text: 'messages', className: p },
    { text: '=[{' },
    { text: '"role"', className: s },
    { text: ': ' },
    { text: '"user"', className: s },
    { text: ', ' },
    { text: '"content"', className: s },
    { text: ': ' },
    { text: '"Analyze query execution plan."', className: s },
    { text: '}],' },
  ],
  [{ text: '    ' }, { text: 'temperature', className: p }, { text: '=0.2' }],
  [{ text: ')' }],
  [],
  [{ text: 'print', className: k }, { text: '(response.choices[0].message.content)' }],
]

export interface PricingTier {
  id: string
  eyebrow: string
  name: string
  /** Monthly price; `null` renders the custom label instead. */
  monthlyPrice: number | null
  priceSuffix?: string
  description: string
  features: { label: string; strong?: boolean }[]
  cta: { label: string; href: string }
  featured?: boolean
  ribbon?: string
}

export const ANNUAL_DISCOUNT = 0.2

export const pricingTiers: PricingTier[] = [
  {
    id: 'developer',
    eyebrow: 'TIER 01 // INDIE BUILDER',
    name: 'DEVELOPER PAYG',
    monthlyPrice: 0,
    priceSuffix: '/ PLATFORM BASE',
    description:
      'Full pass-through token pricing. Perfect for prototyping, solo hacking, and small client apps.',
    features: [
      { label: '100% exact upstream provider token costs' },
      { label: 'Single universal API key' },
      { label: 'Standard global edge routing' },
      { label: 'Community Discord & GitHub support' },
    ],
    cta: { label: 'Get Started Free ($10 Credit)', href: '#playground' },
  },
  {
    id: 'team',
    eyebrow: 'TIER 02 // PRODUCTION',
    name: 'TEAM CLUSTER',
    monthlyPrice: 29,
    priceSuffix: '/ MONTH',
    description:
      'Built for production startups requiring auto-routing failover guarantees, team RBAC, and dedicated concurrency.',
    features: [
      { label: 'Everything in Developer PAYG' },
      { label: 'Automatic Sub-50ms Smart Failovers', strong: true },
      { label: 'Multi-key RBAC & per-service token budgets' },
      { label: 'Real-time granular cost & latency tracing' },
      { label: '99.9% Uptime edge SLA agreement' },
    ],
    cta: { label: 'Deploy Team Gateway', href: '#playground' },
    featured: true,
    ribbon: 'ENGINEERING TEAMS',
  },
  {
    id: 'enterprise',
    eyebrow: 'TIER 03 // BESPOKE',
    name: 'ENTERPRISE CORE',
    monthlyPrice: null,
    description:
      'Sovereign VPC peering, custom open-weight weights fine-tuning, and dedicated solutions engineering.',
    features: [
      { label: 'Dedicated isolated edge VPC gateway' },
      { label: 'Zero data logging + HIPAA BAA signed' },
      { label: 'Customer-managed encryption keys (CMEK)' },
      { label: '24/7/365 Dedicated Slack engineering channel' },
    ],
    cta: { label: 'Contact Systems Architects', href: '#contact' },
  },
]

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'MODELS & ARENA',
    links: [
      { label: 'Claude 3.5 Sonnet', href: '#models' },
      { label: 'GPT-4o Omnimodal', href: '#models' },
      { label: 'DeepSeek Reasoner', href: '#models' },
      { label: 'Live Speed Arena', href: '#arena' },
    ],
  },
  {
    title: 'AGENTS & TOOLS',
    links: [
      { label: 'Workflow Canvas', href: '#agents' },
      { label: 'Code Security Agent', href: '#agents' },
      { label: 'Financial Analysis Agent', href: '#agents' },
      { label: 'LangChain Integration', href: '#agents' },
    ],
  },
  {
    title: 'DEVELOPER',
    links: [
      { label: 'Universal SDK Docs', href: '#docs' },
      { label: 'Python / Node.js Clients', href: '#docs' },
      { label: 'Smart Routing Rules', href: '#features' },
      { label: 'Cost Quota Controls', href: '#pricing' },
    ],
  },
  {
    title: 'ENTERPRISE',
    links: [
      { label: 'Dedicated VPC Routing', href: '#pricing' },
      { label: 'SOC2 & HIPAA Attestation', href: '#pricing' },
      { label: 'Zero Retention Guarantee', href: '#pricing' },
      { label: 'Contact Architecture Team', href: '#contact' },
    ],
  },
]

export const curlFor = (model: string) =>
  `curl ${API_BASE_URL}/chat/completions -H 'Authorization: Bearer $AIHUB_KEY' -d '{"model":"${model}"}'`
