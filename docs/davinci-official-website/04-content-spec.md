# Davinci 공식 웹사이트 Content Specification

> 작성일: 2026-06-02
> 용도: 최종 기획서를 실제 웹사이트 content block으로 옮기기 위한 제작 기준
> Source of truth: `DAVINCI-OFFICIAL-WEBSITE-FINAL-PLAN-2026-06-02.md`
> 제외 범위: 실제 사이트 구현, visual mockup 제작, 배포

---

## 1. Content Principle

모든 section은 아래 한 문장으로 수렴해야 한다.

```text
Davinci는 다양한 AI runtime의 장점을 하나의 검증 가능한 software production pipeline으로 통합 운영한다.
```

작성 원칙:

- “AI가 똑똑하다”보다 “AI runtime을 운영할 구조가 있다”를 강조한다.
- 사용자를 낮추지 않고, workflow fragmentation을 문제로 정의한다.
- Claude, Codex, Gemini, MCP는 경쟁자가 아니라 runtime lane으로 다룬다.
- 모든 기능 설명은 `routing -> evidence -> verification -> continuity` 중 하나로 연결한다.
- Git Worktree, PR Review, Jira, Slack은 integration badge가 아니라 team operations continuity로 설명한다.
- 외부 공개 copy에는 오래된 숫자, 가격, 검증되지 않은 우월 claim을 쓰지 않는다.

---

## 2. Section Content Blocks

| Section | Primary Copy | Proof / Visual | CTA / Event |
|---------|--------------|----------------|-------------|
| Hero | 여러 AI의 장점을 하나의 생산 라인으로. | runtime lane이 하나의 pipeline으로 수렴 | `See the Pipeline` / `hero_cta_click` |
| Trust Gap | AI는 빨라졌지만 production은 검증을 요구합니다. | adoption vs trust gap chart | `Read the Evidence` / `trust_gap_source_open` |
| Unified Pipeline | Davinci는 AI들을 하나의 pipeline으로 운영합니다. | Claude/Codex/Gemini/MCP lane | `Explore Runtime Lanes` / `runtime_lane_hover` |
| Harness Thesis | 좋은 모델만으로는 좋은 software pipeline이 되지 않습니다. | Agent Harness component map | `Open Harness Scorecard` / `harness_scorecard_open` |
| Multi-Routing | 요청은 workflow로, workflow는 agent와 runtime으로 라우팅됩니다. | intent -> skill -> agent -> runtime diagram | `View Routing Flow` / `routing_flow_expand` |
| Verification | 속도 이후의 문제는 검증입니다. | Evidence Handoff + Verification Gate | `Inspect Verification` / `evidence_handoff_expand` |
| Native Studio | CLI의 힘을 native studio에서 보이게 만듭니다. | session, agent tree, timeline, cost, tool output | `Download Desktop` / `desktop_download_click` |
| Design-to-Code | Design intent까지 pipeline 안으로 들어옵니다. | create/design/code linked workflow | `See Create Studio` / `create_studio_view` |
| Workflow Operations | 작업은 코드가 아니라 팀의 workflow로 이어집니다. | Git Worktree, PR Review, Jira, Slack, Deploy/Monitor lane | `See Workflow Operations` / `workflow_operations_view` |
| Comparison | 비교는 도구 수가 아니라 운영 구조에서 갈립니다. | assistant vs orchestration matrix | `Compare the Model` / `comparison_axis_toggle` |
| Proof | 이미 제품 안에 들어간 운영 구조입니다. | skills, agents, hooks, harness LOC | `Read Framework` / `framework_install_click` |
| CTA | 코드 생성은 시작일 뿐입니다. | final pipeline summary | `Install Framework`, `Download App` |

---

## 3. Above-The-Fold Copy Lock

Eyebrow:

```text
AI Runtime Orchestration Platform
```

H1:

```text
여러 AI의 장점을
하나의 생산 라인으로.
```

Body:

```text
Davinci는 Claude Code, Codex CLI, Gemini CLI, MCP/local tools를 하나의 runtime-aware workflow로 연결합니다. 설계, 구현, 검증, 배포까지 이어지는 AI-native software production pipeline입니다.
```

Proof chips:

- `60+ workflow skills`
- `33+ expert agents`
- `20+ hook guardrails`
- `12K+ core harness LOC`
- `multi-runtime pipeline`

Primary CTA:

```text
See the Pipeline
```

Secondary CTA:

```text
Download Davinci
```

---

## 4. Runtime Pipeline Content

Runtime lane은 tool logo 나열이 아니라 역할 기반 구조로 보여준다.

| Lane | 표현 | 역할 |
|------|------|------|
| Claude lane | reasoning/planning lane | deep reasoning, planning, complex implementation |
| Codex lane | local execution lane | local code edit, run, CI/CD automation |
| Gemini lane | broad context lane | broad context, research, extension automation |
| MCP/local lane | tool/context lane | docs, browser, symbol search, deploy, verification |

Pipeline labels:

```text
Intent
Routing
Skill
Agent
Runtime
Evidence
Verification
Production
```

Microcopy:

```text
Runtime을 고르는 화면이 아니라, runtime이 역할에 맞게 연결되는 흐름을 보여준다.
```

---

## 5. Proof Content

Proof는 “숫자 자랑”보다 “실제로 운영 구조가 있다”는 증명으로 배치한다.

| Proof | Copy intent |
|-------|-------------|
| `60+ workflow skills` | intent를 workflow로 바꾸는 구조 |
| `33+ expert agents` | 역할별 agent persona가 존재 |
| `20+ hook guardrails` | 실행 전후 안전장치가 존재 |
| `3-Tier verification` | 결과물을 다음 단계로 넘기기 전 검증 |
| `PM Agent` | self-check와 orchestration layer |
| `Reflexion / Handoff Chain` | 반복 개선과 단계 간 증거 전달 |
| `Git Worktree` | session isolation과 branch/history 운영 |
| `PR Review` | PR description, test plan, reviewer handoff |
| `Jira` | issue/status/workflow event 연결 |
| `Slack` | workflow notification, error notification, team visibility |
| `Deploy / Monitor` | verification 이후 production routine |

Proof section headline:

```text
이미 제품 안에 들어간 운영 구조입니다.
```

---

## 6. Objection Handling Copy

| Objection | Response copy |
|-----------|---------------|
| 기존 AI tool과 뭐가 다른가요? | Davinci는 tool을 대체하기보다 runtime의 장점을 pipeline 안에서 운영합니다. |
| 단순 wrapper 아닌가요? | 핵심은 routing, skill, agent, MCP, hook, evidence, verification이 이어지는 harness입니다. |
| 완전 자동 개발인가요? | Davinci는 human intent를 유지하면서 AI execution과 system-level verification을 연결합니다. |
| 왜 GUI가 필요한가요? | terminal runtime의 힘을 유지하면서 state, evidence, cost, timeline을 추적 가능하게 만들기 위해서입니다. |
| 업무 도구와도 연결되나요? | Davinci의 사용성 강점은 AI output을 Git Worktree, PR Review, Jira, Slack, Deploy/Monitor 흐름으로 이어주는 데 있습니다. |

---

## 7. Content QA Checklist

공개 전 아래를 확인한다.

- Hero에 `AI Runtime Orchestration Platform`이 보인다.
- H1에 `여러 AI의 장점을 하나의 생산 라인으로.`가 들어간다.
- Claude/Codex/Gemini/MCP는 모두 runtime lane으로 표현된다.
- `Runtime-aware Routing`, `Evidence Handoff`, `Verification Gate`가 본문에 들어간다.
- Native GUI와 Design-to-Code가 pipeline extension으로 설명된다.
- Git Worktree, PR Review, Jira, Slack이 platform completeness proof로 설명된다.
- comparison은 비하가 아니라 category 차이로 설명된다.
- stale 숫자, outdated pricing, 검증 없는 우월 claim이 없다.
- mobile에서도 pipeline 흐름이 순서대로 읽힌다.

---

## 8. Final Content Verdict

```text
이 content spec은 최종 기획서의 메시지를 실제 웹사이트 section copy, proof, visual, CTA, event 기준으로 옮길 수 있는 제작 기준이다.
```
