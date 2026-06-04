# Davinci Teaser Design Context

## Source Of Truth

Use `docs/moodboard/` as the design tone and mood source before any design work. From the project root, run `./scripts/check-moodboard.sh` before changing any design-related file.

Required preflight for future design changes:

```sh
./scripts/check-moodboard.sh
```

If any moodboard file changed since the last design pass, inspect the changed files before editing UI.

## Current Moodboard Snapshot

- `davinci-symbol.png` — 2026-05-29 20:28:08
- `mood2.png` — 2026-06-01 20:41:17
- `mood1.png` — 2026-06-01 20:41:52
- `keyword.md` — 2026-06-01 20:43:59
- `LIGHT MODE.png` — 2026-06-01 21:10:10
- `DARK MODE.png` — 2026-06-01 21:10:33

Current hashes:

- `DARK MODE.png` — `a0a54833809bc217b9cf51d4d4edf3f6a2b86a0a81855934eacba5f8a9a4032c`
- `LIGHT MODE.png` — `fb7f5f7a1a10aa44bc4ebb15b09e6f97a4b19e2a25d7fa4ff9ed2dbd1d4ba6cd`
- `davinci-symbol.png` — `eda0ff4e0737dbf605bdad851c369e04daec47b6dad0fb11e1d5a4a503b7085b`
- `keyword.md` — `d368f6462e265294a739aa9be49d7e30775d6081ec3fa84a14231199bb6aca54`
- `mood1.png` — `4b7348246fbc366ccfff5b79b7aafdbddfa9e006acf541dc81a372c518bc800d`
- `mood2.png` — `d4336a0719fd1de6ed85517c6a54e38fec0ebee57f632652f61b7c15c852bd46`

## Direction

- Neo-renaissance aesthetic
- Intellectual luxury
- Premium futurism
- Manuscript and technical sketch language
- Sacred geometry, orbital diagrams, golden ratio
- Beauty plus utility
- Curiosity-driven invention
- Human-centered engineering

## Language And Typography

- Default locale is English (`lang="en"`). UI copy stays English unless the user explicitly asks otherwise.
- The product name `Davinci` stays in English in every locale.
- Typography follows a role hierarchy: display serif for brand, major ideas, hero copy, action buttons, and metric numbers; Gothic for body/general UI copy; mono for labels, commands, metric labels, and console text.
- Latin display remains a Renaissance serif stack (`Iowan Old Style`, `Palatino Linotype`, `Georgia`) for the fixed `Davinci` wordmark and English display headings.
- Korean display uses the same Latin display stack first, then `Gowun Batang` and `Noto Serif KR` for Hangul fallback.
- Body and general UI copy use the Gothic stack with `Pretendard` loaded from CDN; Korean fallbacks are `Apple SD Gothic Neo` and `Malgun Gothic`.
- Label and eyebrow text keeps the same mono uppercase treatment in every locale; do not sentence-case English labels just because the page is in Korean mode.
- Copy should stay focused: one main idea per section, short headings, and one-sentence supporting text. Lead with "AI Runtime Orchestration Platform" and explain how multiple AI runtimes become one verified software production pipeline.

## Official Website Planning Update

- Positioning: `AI Runtime Orchestration Platform`
- Core message: multiple AI runtimes become one software production line.
- Runtime lanes: Claude Code, Codex CLI, Gemini CLI, MCP/local tools.
- Required narrative: Human Intent -> Runtime-aware Routing -> Skill/Agent Selection -> Evidence Handoff -> Verification Gate -> Deploy/Monitor.
- Required operations proof: Git Worktree, PR Review, Jira, Slack, deploy, and monitor workflows.
- Safe public proof: `60+ workflow skills`, `33+ expert agents`, `20+ hook guardrails`, `3-Tier verification`, `Native Studio`.
- Avoid stale claims: old skill/agent counts, teaser-only positioning, pricing copy, or generic AI coding assistant language.

## Palette

Dark mode:

- Da Vinci Gold `#C8A161`
- Smoky Black `#0F0F10`
- Raisin Black `#1E1E22`
- Dark Charcoal `#2D2B2F`
- Davinci Blue `#294064`
- Davinci Green `#6B8F7E`
- Davinci Orange `#D08A64`
- Davinci Purple `#A69CBD`
- Davinci Sky `#7F95AA`

Light mode:

- Floral White `#FAF7F1`
- Bone `#E8E2D6`
- Eerie Black `#1A1A1A`
