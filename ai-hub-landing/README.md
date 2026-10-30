# AI Hub — Landing Page

React + TypeScript + Tailwind CSS v4 (Vite) port of the Stitch screen
**"AI Hub — Variant 3: Kinetic Benchmark Lab"** (project `3397721610040500493`).

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run lint
```

## Structure

```
src/
  index.css            Tailwind v4 @theme — colors, fonts, type scale from the Stitch design
  data/content.ts      All copy, models, pricing tiers, pipeline stages, footer links
  hooks.ts             useCopy (clipboard + "COPIED" feedback)
  components/
    Header, Hero, Features, ModelRegistry, AgentCanvas,
    Quickstart, Pricing, Faq, CtaBanner, Footer, ui (Icon, SectionHeader)
```

Fonts (Barlow Condensed, Inter, JetBrains Mono, Material Symbols) load from Google Fonts in `index.html`.

## Interactive behavior

- Hero: inference-profile pills are selectable; "Test in playground" copies the curl command.
- Model registry: category filter, per-card "Copy curl".
- Pricing: Monthly / Annual toggle (annual applies the 20% discount shown in the design).
- Quickstart: copies the full Python snippet. FAQ uses native `<details>`.
