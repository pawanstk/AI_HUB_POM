---
name: lazyweb-design
description: |
  Single entry point for Lazyweb design work. Reads what the user is asking for and routes it to the right
  workflow — deep design research, improving an existing design, cross-domain brainstorming, or fast
  screenshot references — then produces a Thai+English report (report.md + report.html + downloaded
  reference images) under .lazyweb/. Use this skill whenever the user wants design inspiration, UI/UX
  references, competitor or best-practice analysis, feedback on a screen they already have, or fresh/unconventional
  design ideas — even if they never say "Lazyweb". Typical phrasings: "show me examples of pricing pages",
  "best practices for onboarding", "what do top apps do for X", "review/improve this design",
  "critique my screen", "brainstorm ideas", "surprise me", "ขอตัวอย่าง UI", "ช่วยรีวิวดีไซน์นี้",
  "วิจัย pattern ของ checkout", "ขอไอเดียแปลกๆ". Do NOT use for building/coding the UI itself, or for
  connecting/removing external inspiration sources (Mobbin, Savee, etc.).
allowed-tools:
  - Bash
  - Read
  - Write
  - Glob
  - Grep
  - WebSearch
  - AskUserQuestion
  - Agent
---

# Lazyweb Design (router)

One front door for four Lazyweb workflows. Your job is to pick the right one quickly, load only that
workflow's instructions, and run it. The four workflows overlap in vocabulary ("examples", "ideas",
"feedback"), so routing on the user's *goal and what they already have* works better than matching keywords.

## Step 1 — Pick the mode

| Mode | The user's situation | Typical signals | Read |
|---|---|---|---|
| **quick-references** | Wants to *see* examples, no analysis | "show me", "examples of", "inspiration", "screenshots of", "ขอตัวอย่าง", "ขอ reference" | `references/quick-references.md` |
| **research** | Hasn't built it yet; wants to understand the space and what works | "best practices", "what do top apps do", "competitive analysis", "how should I design", "วิจัย", "เปรียบเทียบคู่แข่ง" | `references/research.md` |
| **improve** | Already has a design (screenshot, URL, running dev server) and wants it better | "improve", "critique", "review my design", "what's wrong with", "make this better", "รีวิวดีไซน์", "ปรับให้ดีขึ้น" | `references/improve.md` |
| **brainstorm** | Wants unconventional ideas, differentiation from competitors | "brainstorm", "think outside the box", "surprise me", "fresh ideas", "ขอไอเดียแปลกๆ" | `references/brainstorm.md` |

Tie-breakers, in order:

1. **They attached or point to an existing design** → `improve` (even if they also say "ideas").
2. **They say "inspiration" or "references" with no request for analysis** → `quick-references`. It is the
   cheapest mode and easy to escalate from; running a full research report for a casual "show me" wastes
   their time.
3. **They want to decide *what* to build or *why* patterns work** → `research`.
4. **Explicitly wants novelty / "not what everyone else does"** → `brainstorm`.
5. Still ambiguous? Ask one `AskUserQuestion` with the 2 most plausible modes — don't guess between
   expensive options (research vs. brainstorm).

Tell the user in one line which mode you chose and why ("ใช้โหมด research เพราะ…"), then continue — they can
redirect you.

## Step 2 — Run the chosen workflow

Read **only** the matching file in `references/` and follow it end to end (MCP check, searches, downloads,
report, summary). Do not load the other three; they would just add noise.

Notes that apply to every mode, because the reference files were written as standalone skills:

- **Cross-links.** Where a reference says "run `/lazyweb-design-research`", "`/lazyweb-quick-references`",
  "`/lazyweb-design-improve`" or "`/lazyweb-design-brainstorm`", read it as "switch to that mode of this
  skill" — offer it as a next step and, if the user accepts, load that mode's reference file.
- **Inspiration sources.** If a reference mentions `/lazyweb-add-inspo-source` or
  `/lazyweb-remove-inspo-source`, those are separate skills; just relay the suggestion to the user.
- **Output location.** Keep each reference's `.lazyweb/<mode>/<topic>-<date>/` folder convention so outputs
  from different modes don't collide.
- **Files, not a plan.** Each workflow writes real files even in plan mode. Honor that.

## Step 3 — Language: Thai + English reports

The user works in Thai but design vocabulary is mostly English, so write reports the way a Thai designer
would talk:

- Explanations, findings, rationale, and recommendations in **Thai**.
- Keep in **English**: UI/UX terms (onboarding, paywall, empty state, CTA, modal…), app/company names,
  file names and paths, and all MCP search queries. Lazyweb's search index is English; Thai queries return
  poor results.
- Headings may be bilingual ("Key Patterns — แพทเทิร์นหลัก").
- Chat summary at the end: Thai, short, with the report path, and the next-step suggestion.

## If the Lazyweb MCP isn't available

Each reference starts with a connectivity check (`lazyweb_health`). If the MCP tools aren't listed in this
session, the server was probably added after the session started: tell the user to reload the session. If it
really isn't installed, say so plainly and offer web-research-only output rather than failing silently.
