# Davinci Teaser Planning Alignment

> Purpose: record how the updated teaser implementation maps to the new official website planning documents and moodboard references.
> Scope: `teaser-site/index.html`, `teaser-site/script.js`, `teaser-site/styles.css`, `teaser-site/DESIGN_CONTEXT.md`.

## Sources Reviewed

| Source | Relevant Requirement | Implementation Response |
|--------|----------------------|--------------------------|
| `davinci-official-website/00-readme.md` | Position Davinci as `AI Runtime Orchestration Platform`; include Unified AI Runtime Pipeline, Agent Harness, Verification Gate, Native Studio, Design-to-Code, Workflow Operations. | Navigation and sections now use Pipeline, Routing, Workflow, Agent Harness, Native Studio, Verification-First Production, and Workflow Operations. |
| `davinci-official-website/01-one-page-brief.md` | Explain runtime orchestration, evidence handoff, verification, and team operations continuity. | Hero, routing layers, workflow cards, guardrails, and operations lane now repeat runtime, evidence, verification, Git Worktree, PR Review, Jira, Slack, deploy, and monitor. |
| `davinci-official-website/02-final-plan.md` | Hero category, translated hero lock, proof numbers, CTA hierarchy, full operations lane, stale claim removal. | Hero uses `AI Runtime Orchestration Platform`, translated production-line headline, `See the Pipeline`, `Download Davinci`, proof chips, and safe proof numbers. |
| `davinci-official-website/03-homepage-copy.md` | Use copy deck themes: Unified AI Runtime Pipeline, Agent Harness, Runtime-Aware Routing, Verification-First, Native Studio, Design-to-Code, Workflow Operations. | Section copy is rewritten around those themes instead of the previous generic AI development engine message. |
| `davinci-official-website/04-content-spec.md` | Include content proof, CTA/event names, and avoid stale numbers or unsupported claims. | CTAs include `data-event` hooks, proof chips use safe public counts, and stale counts are removed from `teaser-site`. |
| `davinci-official-website/05-wireframe-spec.md` | First viewport must show category, brand, CTA, pipeline preview; operations must be a workflow lane rather than logo badges. | Hero keeps brand/category/CTA/pipeline preview together; finale adds an operations lane from AI Output to Deploy / Monitor. |
| `docs/moodboard/keyword.md`, `mood1.png`, `mood2.png`, palette images | Neo-renaissance, gold-black premium futurism, manuscript/technical sketch, sacred geometry, orbital diagrams, beauty plus utility. | Existing dark gold/black visual system, orbit geometry, serif display, mono technical labels, and restrained premium cards are preserved. |

## Implementation Map

| Planning Theme | Site Surface | Files |
|----------------|--------------|-------|
| Category | Hero eyebrow and metadata | `index.html`, `script.js` |
| Production-line hero message | Hero line, translated from the official Korean lock copy because UI copy defaults to English | `index.html`, `script.js` |
| Hero proof | `60+ workflow skills`, `33+ expert agents`, `20+ hook guardrails`, `3-Tier verification`, `Native Studio` chips | `index.html`, `styles.css` |
| CTA hierarchy | `See the Pipeline` and `Download Davinci` | `index.html`, `script.js` |
| Unified AI Runtime Pipeline | Motion section and runtime copy | `index.html`, `script.js` |
| Runtime-aware Routing | Routing layer cards: runtime, skill/agent, evidence, verification | `index.html`, `script.js` |
| Agent Harness | Constellation map: PM Agent, skills, MCP tools, hooks, Reflexion, Handoff Chain, Evidence, Verification | `index.html`, `script.js` |
| Verification-first Production | Guardrails section with 3-Tier Verification, hook guardrails, evidence handoff, Reflexion loop | `index.html`, `script.js` |
| Native Studio / Design-to-Code | Native Studio section includes sessions, agent tree, timeline, tool output, cost, Design / Code, PR Review, Deploy / Monitor | `index.html`, `script.js` |
| Workflow Operations | Operations lane: AI Output -> Git Worktree -> PR Review -> Jira Issue -> Slack Notification -> Deploy / Monitor | `index.html`, `styles.css` |
| Source-of-truth context | Updated default language, positioning, proof numbers, and avoid list | `DESIGN_CONTEXT.md` |

## Intentional Decisions

- UI copy remains English by default per project instruction. The official Korean hero lock is implemented as the English equivalent: "Orchestrating the strengths of multiple AI runtimes into one production line."
- The page does not claim Git Worktree orchestration is fully shipped; it presents Git Worktree, PR Review, Jira, Slack, Deploy / Monitor as a connected operations surface.
- No obsolete proof counts or old pricing copy remain in UI files.
- Minimum UI text remains at 12px or above.

## Verification Commands

```sh
./scripts/check-moodboard.sh
node --check teaser-site/script.js
rg -n "\\b(fighter|character|bot)\\b|font-size:\\s*(10|11)px|text-\\[1[01]px\\]" teaser-site/index.html teaser-site/script.js teaser-site/styles.css
rg -n "obsolete-count-pattern|legacy-teaser-copy-pattern" teaser-site/index.html teaser-site/script.js teaser-site/styles.css
```

Browser screenshot QA was attempted through the Browser plugin, but no browser backend was exposed in this session. Static validation was completed instead.
