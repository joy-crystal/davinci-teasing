# Davinci 공식 웹사이트 최종 기획서

> 작성일: 2026-06-02
> 문서 성격: 외부 공유 가능한 공식 웹사이트 최종 기획서
> 범위: positioning, market insight, narrative, section plan, final copy, core feature coverage, claim guardrail
> 제외 범위: 실제 사이트 구현, 디자인 시안 제작, 배포

---

## 1. Executive Summary

Davinci 공식 웹사이트는 단순한 AI coding tool 소개 페이지가 아니다. 이 사이트의 목적은 Davinci를 **AI Runtime Orchestration Platform**으로 각인시키는 것이다.

핵심 메시지:

```text
여러 AI의 장점을 하나의 생산 라인으로.
Davinci는 소프트웨어를 끝까지 생산합니다.
```

Davinci가 해결하는 문제는 “AI가 코드를 못 쓴다”가 아니다. Claude Code, Codex CLI, Gemini CLI, MCP/local tools처럼 강력한 AI runtime이 늘어날수록 context, tool, permission, memory, handoff, verification이 흩어지는 문제다.

Davinci는 이 분절을 `role`, `context`, `evidence`, `verification` 기준으로 통합해 `idea -> plan -> work -> verify -> deploy -> monitor`가 이어지는 하나의 software production pipeline으로 만든다.

---

## 2. Final Positioning

### 2.1 Category

```text
AI Runtime Orchestration Platform
```

보조 category:

```text
AI-native Software Production Platform
```

### 2.2 One-liner

```text
Davinci는 여러 AI runtime의 장점을 하나의 검증 가능한 software production pipeline으로 연결하는 AI-native platform입니다.
```

### 2.3 Hero Lock

```text
여러 AI의 장점을 하나의 생산 라인으로.
Davinci는 소프트웨어를 끝까지 생산합니다.
```

### 2.4 Support Copy

```text
Human intent. AI execution. System-level verification.
```

### 2.5 제품 해석

Davinci는 특정 AI 위에 얹은 wrapper가 아니다. Davinci는 여러 AI runtime이 가진 서로 다른 장점을 workflow, skill, agent, MCP, local tool, verification gate로 연결하는 운영 구조다.

---

## 3. Market Insight

### 3.1 시장 변화

AI coding 시장은 “어떤 모델이 가장 똑똑한가”에서 “여러 AI runtime을 어떻게 연결하고 검증할 것인가”로 이동하고 있다.

| 시장 신호 | 관찰 | 웹사이트 반영 |
|-----------|------|---------------|
| Runtime 분화 | Claude Code, Codex CLI, Gemini CLI가 각각 CLI, IDE, MCP, skills, hooks, extensions, SDK로 확장 중 | Hero 다음에 `Unified AI Runtime Pipeline` section 배치 |
| Trust Gap | AI tool 사용은 늘었지만 output accuracy 신뢰는 낮음 | `Trust Gap` section으로 generation보다 verification 강조 |
| Supervisory burden | AI coding은 code writing을 줄이는 대신 direction, evaluation, correction 업무를 늘림 | “사용자 탓”이 아니라 “운영 구조 부재”로 문제 정의 |
| Lifecycle fragmentation | coding은 빨라져도 review, testing, security, deployment가 병목이 됨 | `Verification-first Production` section에서 full lifecycle 강조 |
| MCP 확산 | 여러 runtime이 MCP를 tool/context 연결 계층으로 채택 | MCP/local tools를 runtime lane에 포함 |

### 3.2 Source Traceability

| Claim | Source cluster | 공개 가능성 |
|-------|----------------|-------------|
| AI runtime은 분화되고 있다 | Claude Code docs, OpenAI Codex docs, Gemini CLI docs | High |
| MCP는 cross-runtime connection layer로 중요해지고 있다 | OpenAI Docs MCP, Claude/Gemini extension docs | High |
| AI output trust gap은 여전히 존재한다 | Stack Overflow 2025 AI Survey | High |
| AI coding은 supervisory work를 늘린다 | Longitudinal AI coding assistant study | Medium-High |
| agent misalignment는 correction burden을 만든다 | Coding-agent misalignment study | Medium-High |
| Davinci는 여러 runtime을 하나의 pipeline으로 묶는다 | Davinci PRD, repo inventory, website brief | Medium-High |

---

## 4. Audience

| Audience | Pain | Davinci가 남겨야 할 인상 |
|----------|------|--------------------------|
| Senior Developers | AI output은 빠르지만 검증과 수정이 부담 | “이건 coding assistant가 아니라 production workflow다.” |
| Tech Leads / CTOs | 팀 단위 AI 사용이 산발적이고 품질 통제가 어려움 | “여러 AI를 팀의 운영 구조 안에 넣을 수 있다.” |
| AI Agent Builders | agent orchestration, memory, hooks, MCP, verification에 관심 | “Davinci는 Agent Harness를 실제 제품으로 구현했다.” |
| Product / Design Builders | design intent가 code로 이어지지 않음 | “Design-to-Code까지 같은 pipeline에 들어간다.” |

---

## 5. Narrative Spine

### Step 1. Runtime이 늘어난다

AI coding agent는 빠르게 강력해지고 있다. Claude Code, Codex CLI, Gemini CLI, MCP/local tools는 각자 다른 강점을 가진다.

### Step 2. Workflow가 분절된다

각 runtime은 context, permission, memory, hook, MCP, session state를 다르게 다룬다. 사용자가 이 차이를 매번 기억하고 조율하면 workflow가 쉽게 끊어진다.

### Step 3. Davinci가 운영 구조로 바꾼다

Davinci는 intent를 skill로, skill을 agent로, runtime capability를 AI engine으로, output을 evidence handoff와 verification gate로 연결한다.

### Step 4. 생산 라인이 된다

여러 AI runtime의 강점이 `idea -> plan -> work -> verify -> deploy -> monitor`로 이어지는 단일 production pipeline 안에서 작동한다.

---

## 6. Homepage Architecture

| 순서 | Section | 목적 | 핵심 메시지 |
|------|---------|------|-------------|
| 1 | Hero | category 즉시 각인 | 여러 AI의 장점을 하나의 생산 라인으로 |
| 2 | Trust Gap | 왜 검증 구조가 필요한지 설명 | AI는 널리 쓰이지만 output은 검증을 요구한다 |
| 3 | Unified AI Runtime Pipeline | 다중 AI 통합 concept 설명 | AI들을 하나의 pipeline으로 운영합니다 |
| 4 | Harness Thesis | model만으로 부족하다는 thesis | 좋은 모델만으로는 좋은 pipeline이 되지 않는다 |
| 5 | Multi-Routing da:framework | routing 구조 설명 | 요청은 workflow로, workflow는 agent와 runtime으로 |
| 6 | Verification-first Production | production trust 설명 | 속도 이후의 문제는 검증입니다 |
| 7 | Native Desktop Studio | GUI 가치 설명 | CLI의 힘을 native studio에서 보이게 만든다 |
| 8 | Design-to-Code / Create Studio | design lifecycle 포함 | Design intent까지 pipeline 안으로 |
| 9 | Workflow Operations | 업무 통합성과 platform completeness 설명 | AI output은 Git, PR, Jira, Slack까지 이어진다 |
| 10 | Comparison | category 차별점 설명 | 비교는 도구 수가 아니라 운영 구조에서 |
| 11 | Proof / Inventory | 실제 존재감 증명 | skills, agents, hooks, harness LOC |
| 12 | CTA | 행동 유도 | 코드 생성은 시작일 뿐입니다 |

---

## 7. Section Detail

### Section 1. Hero

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
- `$0 platform fee`

CTA:

- Primary: `Framework 설치`
- Primary: `Desktop app 다운로드`
- Secondary: `Pipeline 보기`
- Secondary: `Harness Scorecard`

Visual:

```text
Human Intent -> Runtime-aware Routing -> Skill/Agent Selection -> Evidence Handoff -> Verification Gate -> Deploy/Monitor
```

### Section 2. Trust Gap

Headline:

```text
AI는 빨라졌지만, production은 여전히 검증을 요구합니다.
```

Body:

```text
AI coding agent는 코드 작성을 빠르게 만들지만, output accuracy, rule adherence, action boundary, deployment stability는 여전히 검증을 요구합니다. Davinci는 이 trust gap을 workflow와 guardrail의 문제로 다룹니다.
```

Proof:

- Stack Overflow 2025 AI Survey
- coding-agent misalignment study
- longitudinal AI coding assistant study

### Section 3. Unified AI Runtime Pipeline

Headline:

```text
Davinci는 AI들을 하나의 pipeline으로 운영합니다.
```

Body:

```text
Claude, Codex, Gemini, MCP/local tools는 각각 다른 강점을 갖습니다. Davinci는 runtime을 경쟁시키지 않고, 역할에 맞게 라우팅해 하나의 production line 안에서 이어지게 만듭니다.
```

Runtime lanes:

| Lane | 역할 |
|------|------|
| Claude lane | deep reasoning, planning, complex implementation |
| Codex lane | local code edit, run, CI/CD automation |
| Gemini lane | broad context, research, extension automation |
| MCP/local lane | docs, browser, symbol search, deployment, verification tools |

Pipeline copy:

```text
Human Intent -> Runtime-aware Routing -> Evidence Handoff -> Verification Gate -> Production Output
```

### Section 4. Harness Thesis

Headline:

```text
좋은 모델만으로는 좋은 software pipeline이 되지 않습니다.
```

Body:

```text
AI가 production-ready software를 만들려면 모델을 감싸는 실행 구조가 필요합니다. Davinci는 orchestration, tools, memory, context, prompt construction, output parsing, state, error handling, guardrails, verification, subagent orchestration을 제품 runtime으로 묶습니다.
```

Proof:

- Agent Harness 11 components
- 5S + 4A + 2B+ scorecard
- PM Agent / Reflexion / Handoff Chain

### Section 5. Multi-Routing da:framework

Headline:

```text
요청은 workflow로, workflow는 agent와 runtime으로 라우팅됩니다.
```

Body:

```text
Davinci는 자연어 intent를 `/da:*` skill로 연결하고, 작업 복잡도를 pipeline으로 나누며, 필요한 evidence 수준에 따라 verification tier를 선택합니다.
```

Routing axes:

- Intent -> Skill
- Skill -> Agent
- Agent -> Runtime capability
- Runtime -> MCP/local tools
- Output -> Verification tier

### Section 6. Verification-first Production

Headline:

```text
속도 이후의 문제는 검증입니다.
```

Body:

```text
Davinci는 생성된 결과를 바로 끝으로 보지 않습니다. PM Agent, 3-Tier verification, hook guardrails, Reflexion loop, handoff chain으로 다음 단계에 넘길 수 있는 evidence를 만듭니다.
```

Proof:

- 3-Tier verification
- 20+ hook guardrails
- PM Agent confidence/self-check
- Reflexion learning loop

### Section 7. Native Desktop Studio

Headline:

```text
CLI의 힘을 native studio에서 보이게 만듭니다.
```

Body:

```text
Davinci는 terminal agent의 힘을 숨기지 않고, session, agent tree, timeline, cost, tool output, design canvas를 하나의 native interface에서 보이게 만듭니다.
```

Visual must show:

- multi-tab AI sessions
- agent tree
- timeline
- cost dashboard
- tool output
- design/code panels

### Section 8. Design-to-Code / Create Studio

Headline:

```text
Design intent까지 pipeline 안으로 들어옵니다.
```

Body:

```text
Davinci는 code generation에만 머물지 않습니다. UX/design intent를 구조화하고, create/design workflow를 software production pipeline에 연결합니다.
```

Proof:

- Create Studio
- Design-to-Code workflow
- visual QA / UX validation flow

### Section 9. Workflow Operations

Headline:

```text
작업은 코드가 아니라 팀의 workflow로 이어집니다.
```

Body:

```text
Davinci는 AI 실행 결과를 isolated output으로 남기지 않습니다. Git Worktree 기반 session isolation, branch/history 관리, PR Review handoff, Jira issue flow, Slack workflow notification, deploy/monitor routine까지 software team의 실제 운영 흐름 안에 연결합니다.
```

Proof:

- `da:git` Git workflow automation
- Git Worktree session isolation과 branch/history 운영 narrative
- PR description, test plan, reviewer handoff
- Jira CRUD / issue bridge / GUI refresh
- Slack workflow notification, error notification, remote command surface
- `da:deploy`, `da:monitor` production operations skills

Safe copy:

```text
Davinci의 강점은 AI가 코드를 만드는 순간에 멈추지 않는다는 점입니다. 작업의 history, review, issue, notification, deployment 상태가 같은 운영 surface 안에서 이어집니다.
```

Visual must show:

```text
AI Output -> Git Worktree -> Branch / History -> PR Review -> Jira Issue -> Slack Notification -> Deploy / Monitor
```

### Section 10. Comparison

Headline:

```text
비교는 도구 수가 아니라 운영 구조에서 갈립니다.
```

Body:

```text
Davinci는 Cursor, Windsurf, Claude Code, Codex, Gemini를 깎아내리지 않습니다. 각 tool/runtime의 강점을 인정하되, Davinci의 차별점을 multi-routing, evidence handoff, verification-first production, native studio로 설명합니다.
```

Comparison axes:

- Single assistant vs multi-runtime orchestration
- Code generation vs production pipeline
- Manual supervision vs structured verification
- Editor/plugin surface vs native production studio
- Isolated output vs evidence handoff

### Section 11. Proof / Inventory

Headline:

```text
이미 제품 안에 들어간 운영 구조입니다.
```

Use safe public numbers:

- `60+ workflow skills`
- `33+ expert agents`
- `20+ hook guardrails`
- `12K+ core harness LOC`
- `3-Tier verification`
- `Native desktop studio`

Do not use stale numbers:

- `39 skills`
- `29 agents`
- outdated pricing copy

### Section 12. CTA

Headline:

```text
코드 생성은 시작일 뿐입니다.
```

Body:

```text
Davinci로 여러 AI runtime의 장점을 하나의 검증 가능한 production pipeline 안에서 운영하세요.
```

CTA set:

- `Framework 설치`
- `Desktop app 다운로드`
- `Docs 보기`
- `Demo 요청`

---

## 8. Core Feature Coverage

| Davinci 핵심 자산 | 웹사이트 반영 위치 |
|-------------------|--------------------|
| `da:framework` | Multi-Routing da:framework |
| CLI multi-routing | Runtime-aware Routing |
| Claude/Codex/Gemini/MCP | Unified AI Runtime Pipeline |
| PM Agent | Verification-first Production |
| 60+ workflow skills | Proof / Inventory |
| 33+ expert agents | Multi-Routing / Proof |
| 20+ hook guardrails | Verification-first Production |
| 3-Tier verification | Trust Gap / Verification-first |
| Reflexion / Handoff Chain | Evidence Handoff |
| Native GUI | Native Desktop Studio |
| Design-to-Code / Create Studio | Design lifecycle section |
| Git Worktree / branch history | Workflow Operations |
| PR Review / test plan handoff | Workflow Operations / Verification-first |
| Jira issue bridge | Workflow Operations |
| Slack workflow notification | Workflow Operations / Native Desktop Studio |
| Deploy / Monitor skills | Workflow Operations / CTA |
| Hermes/OMC/mattpocock comparisons | Comparison section |
| conference/teaser narrative | Harness Thesis / Trust Gap |

---

## 9. Copy Bank

### Hero candidates

1. `여러 AI의 장점을 하나의 생산 라인으로.`
2. `Davinci는 소프트웨어를 끝까지 생산합니다.`
3. `모델을 고르는 시대에서, AI들을 운영하는 시대로.`

### Section headlines

- `AI가 많아질수록, 중요한 것은 모델 선택이 아니라 운영 구조입니다.`
- `Davinci는 AI들을 하나의 pipeline으로 운영합니다.`
- `좋은 모델만으로는 좋은 software pipeline이 되지 않습니다.`
- `요청은 workflow로, workflow는 agent와 runtime으로 라우팅됩니다.`
- `속도 이후의 문제는 검증입니다.`
- `AI output은 Git, PR, Jira, Slack으로 이어지는 팀 workflow 안에 남습니다.`
- `코드 생성 이후의 history, review, issue, notification까지 하나의 운영 surface로.`
- `Design intent까지 pipeline 안으로 들어옵니다.`

### Closing lines

```text
Davinci는 AI를 더 많이 쓰는 도구가 아니라,
여러 AI의 장점이 끊기지 않고 이어지게 만드는 운영 구조입니다.
```

```text
Human intent. AI execution. System-level verification.
```

---

## 10. Claim Guardrails

### 사용 가능

- Davinci는 여러 AI runtime의 장점을 하나의 production pipeline으로 연결한다.
- Davinci는 runtime-aware routing, evidence handoff, verification gate를 제공한다.
- Davinci는 Agent Harness, PM Agent, hooks, Reflexion, Handoff Chain을 갖춘다.
- Davinci는 AI coding output을 production workflow 안에서 검증 가능한 상태로 이어준다.

### 사용 금지

- Davinci가 모든 AI tool보다 우월하다는 표현
- 사용자를 낮춰 보이게 만드는 표현
- 특정 runtime을 하위 도구처럼 다루는 표현
- 검증 없는 완전 자동 개발을 암시하는 표현
- stale 숫자나 outdated pricing을 외부 proof로 쓰는 표현

---

## 11. Measurement Plan

| Event | 목적 |
|-------|------|
| `hero_cta_click` | 핵심 메시지 후 CTA 반응 확인 |
| `runtime_pipeline_section_view` | multi-runtime concept 전달력 확인 |
| `runtime_lane_hover` | Claude/Codex/Gemini/MCP lane 관심도 확인 |
| `evidence_handoff_expand` | verification narrative 관심도 확인 |
| `harness_scorecard_open` | 기술 proof 관심도 확인 |
| `workflow_operations_view` | Git/PR/Jira/Slack 업무 통합 section 전달력 확인 |
| `git_worktree_expand` | worktree/history 운영 narrative 관심도 확인 |
| `pr_review_flow_open` | PR review handoff 관심도 확인 |
| `jira_slack_bridge_open` | Jira/Slack 업무 통합 관심도 확인 |
| `desktop_download_click` | app conversion 확인 |
| `framework_install_click` | developer conversion 확인 |

---

## 12. Final Acceptance Criteria

웹사이트 기획서는 아래 기준을 만족해야 완료다.

- Hero에서 `AI Runtime Orchestration Platform` category가 5초 안에 이해된다.
- `여러 AI의 장점을 하나의 생산 라인으로` 메시지가 첫 화면에서 보인다.
- Trust Gap 다음에 `Unified AI Runtime Pipeline`이 온다.
- Claude/Codex/Gemini/MCP는 경쟁자가 아니라 runtime lane으로 표현된다.
- Davinci core 기능이 최소 한 번씩 website narrative 안에 배치된다.
- verification, guardrail, evidence handoff가 proof로 반복된다.
- Git Worktree, PR Review, Jira, Slack 업무 통합이 사용성 강점으로 설명된다.
- legacy PRD의 오래된 수치와 가격 표현은 최종 외부 copy에 쓰지 않는다.
- 실제 사이트 구현 없이 planning artifact로만 완료된다.

최종 판정:

```text
이 문서는 Davinci 공식 웹사이트의 최종 기획서로 사용 가능하다.
```

---

## 13. Visual Direction System

이 웹사이트는 “멋진 AI landing page”가 아니라, 복잡한 AI runtime을 신뢰 가능한 production pipeline으로 다루는 운영 제품처럼 보여야 한다. 시각 언어는 과장된 미래감보다 정밀함, 연속성, 검증 가능성에 맞춘다.

### Visual thesis

```text
많은 AI를 보여주는 사이트가 아니라,
여러 AI가 하나의 pipeline 안에서 질서 있게 움직이는 장면을 보여준다.
```

### 첫 화면 원칙

| 요소 | 기획 기준 |
|------|-----------|
| Hero visual | Claude, Codex, Gemini, MCP, hooks, agents가 하나의 pipeline rail로 수렴하는 제품형 visual |
| 첫 viewport | brand/category/headline/CTA와 다음 section의 시작이 동시에 보이게 구성 |
| 금지 | 추상 gradient orb, 의미 없는 code rain, stock-like AI face, dark blur background |
| 핵심 signal | runtime lane, routing decision, evidence handoff, verification gate가 눈에 보여야 함 |

### 색상 방향

| Token | 용도 | 권장 감각 |
|-------|------|-----------|
| Graphite / Ink | headline, nav, proof text | 제품 신뢰감 |
| Porcelain / Mist | page background | 기술 문서와 제품 UI 사이의 여백 |
| Signal Blue | primary CTA, active runtime route | 실행/라우팅 |
| Signal Green | verification pass, evidence handoff | 검증/완료 |
| Amber | risk, fallback, correction loop | 주의/보정 |

팔레트는 한 가지 hue로 밀지 않는다. Davinci는 “하나의 색감이 예쁜 브랜드”보다 “여러 runtime을 정확히 구분하고 연결하는 운영 체계”로 보여야 한다.

### Typography

| 용도 | 권장 |
|------|------|
| Korean body | Pretendard 또는 system Korean sans |
| Technical label | Geist Mono 또는 IBM Plex Mono 계열 |
| Hero headline | 두 줄 이하, 굵기 중심, letter spacing 0 |
| Section heading | 24-36px 범위, landing hero급 과장 금지 |
| Proof text | 표, metric, command, route name은 mono label로 구분 |

### Layout language

- Section은 full-width band 또는 unframed layout으로 구성한다.
- 반복 항목만 card로 사용하고, card 안에 card를 넣지 않는다.
- `Unified AI Runtime Pipeline`은 decorative container가 아니라 실제 정보 구조처럼 보여야 한다.
- Runtime lane은 좌우로 흩어놓지 말고, intent에서 output까지 흐르는 방향성을 갖춘다.
- CTA는 `See the Pipeline`, `Download Davinci`, `Read the Framework` 세 단계로 분리한다.

### Motion 기준

| Motion | 목적 |
|--------|------|
| Route highlight | 요청이 적절한 runtime lane으로 이동하는 흐름 전달 |
| Evidence handoff | 결과물이 다음 단계로 넘어갈 때 evidence가 함께 이동함을 전달 |
| Verification pulse | 검증 완료가 감정적 장식이 아니라 gate 통과로 보이게 함 |
| Reduced motion | prefers-reduced-motion에서 모든 motion은 static proof 상태로 대체 |

---

## 14. Information Architecture And Navigation

웹사이트는 “소개 페이지”가 아니라, 방문자가 Davinci를 어떤 category로 이해해야 하는지 빠르게 고정하는 구조여야 한다.

### Primary navigation

| Nav | 연결 section | 의도 |
|-----|--------------|------|
| Product | Hero / Trust Gap | Davinci가 무엇인지 즉시 이해 |
| Pipeline | Unified AI Runtime Pipeline | multi-runtime orchestration의 핵심 증명 |
| Harness | Agent Harness / PM Agent / hooks | 단단함과 연속성 증명 |
| Studio | Native GUI / Create Studio | 사용 경험과 design-to-code 확장 |
| Proof | Comparison / Metrics / Evidence | 외부 설득용 근거 |
| Docs | Framework / MCP / Skills | developer 신뢰 확보 |

### CTA hierarchy

| CTA | 위치 | 역할 |
|-----|------|------|
| `See the Pipeline` | Hero primary | 방문자가 concept를 먼저 이해하게 함 |
| `Download Davinci` | Hero secondary / bottom CTA | product conversion |
| `Read the Framework` | 기술 proof 이후 | developer validation |
| `Join Early Access` | 하단 | conference/launch 이후 lead capture |

### Mobile navigation

- Mobile 첫 화면에서는 nav를 줄이고 category, headline, CTA, pipeline preview를 우선한다.
- Runtime lane은 horizontal scroll보다 vertical stacked route로 바꾼다.
- 숫자 metric은 2열 이하로 제한하고, 설명은 접히지 않게 한다.
- CTA는 sticky bottom을 쓰지 않는다. 제품 신뢰감보다 aggressive growth 느낌이 강해질 수 있다.

---

## 15. Workflow Operations And Team Integrations

Davinci의 공식 사이트는 AI runtime orchestration만 말하면 부족하다. 실제 사용자가 체감하는 강점은 AI 결과가 개발자 혼자 확인하는 output으로 끝나지 않고, Git history, PR review, Jira issue, Slack notification, deploy/monitor routine까지 이어지는 업무 흐름에 있다.

### Platform completeness thesis

```text
Davinci는 AI coding을 팀이 운영 가능한 workflow로 바꿉니다.
```

설명:

```text
좋은 AI output도 branch, history, review, issue, notification, deployment 흐름으로 이어지지 않으면 팀의 production workflow에 남지 않습니다. Davinci는 AI execution과 team operations 사이를 끊지 않는 platform layer를 강조해야 합니다.
```

### Operations capability map

| Capability | 사이트에서 보여줄 가치 | 공개 copy 기준 |
|------------|------------------------|----------------|
| Git Worktree | session isolation, parallel work, rollback clarity | `작업 단위가 독립된 Git Worktree와 branch 흐름 안에 남습니다.` |
| Git history | AI 작업의 변경 이력과 handoff 추적 | `AI output은 history 없는 결과물이 아니라 추적 가능한 변경 흐름으로 이어집니다.` |
| PR Review | test plan, reviewer handoff, 자동 review-ready package | `생성 이후의 PR description, test plan, review handoff까지 pipeline에 포함됩니다.` |
| Jira | issue, status, workflow event 연결 | `작업은 Jira issue와 상태 변화까지 이어지는 업무 단위로 관리됩니다.` |
| Slack | workflow notification, error notification, team visibility | `팀은 Slack에서 workflow 진행과 오류 신호를 놓치지 않습니다.` |
| Deploy / Monitor | 배포와 운영 상태까지 이어지는 production routine | `verify 이후 deploy와 monitor까지 같은 production line에서 이어집니다.` |

### Public proof stance

- Slack은 channel server, workflow notification, error notification, command surface를 근거로 설명한다.
- Jira는 natural language CRUD, credential bridge, event bridge, GUI refresh, Slack notification 흐름으로 설명한다.
- Git/PR은 `da:git` workflow automation, branch strategy, PR creation, test plan handoff를 근거로 설명한다.
- Git Worktree orchestration은 documented operations layer와 product direction으로 표현하고, 확정되지 않은 자동화는 shipped claim으로 쓰지 않는다.

### Website section treatment

이 section은 기술 proof와 usability proof를 동시에 담당한다.

```text
AI가 코드를 만드는 장면보다 더 중요한 것은 그 코드가 팀의 업무 흐름에 안전하게 남는 방식입니다. Davinci는 Git Worktree, PR Review, Jira, Slack, Deploy/Monitor를 AI production pipeline의 운영 surface로 연결합니다.
```

### Must avoid

- “모든 PR을 완벽히 자동 승인한다” 같은 과장 claim
- Git Worktree orchestration이 fully shipped라고 단정하는 표현
- Jira/Slack을 단순 integration badge처럼 나열하는 방식
- 사용자가 직접 업무 도구를 못 다룬다는 식의 표현

---

## 16. SEO Metadata And Open Graph

SEO는 “AI coding tool” 키워드만 노리지 않는다. Davinci가 차지해야 할 category는 `AI Runtime Orchestration`, `Agent Harness`, `AI Workflow Pipeline`, `Design-to-Code Platform`이다.

### Primary metadata

| Field | Copy |
|-------|------|
| Title | `Davinci - AI Runtime Orchestration Platform` |
| Description | `Davinci는 Claude Code, Codex CLI, Gemini CLI, MCP, agent, hook을 하나의 production pipeline으로 연결해 AI software workflow를 연속적으로 운영합니다.` |
| OG title | `여러 AI의 장점을 하나의 생산 라인으로` |
| OG description | `AI runtime을 수동으로 오가게 두지 않고, intent, routing, execution, evidence, verification을 하나의 pipeline으로 묶는 Davinci 공식 사이트.` |
| Twitter card | `summary_large_image` |

### Keyword cluster

- `AI Runtime Orchestration Platform`
- `AI agent harness`
- `multi-runtime AI workflow`
- `Claude Code Codex Gemini CLI pipeline`
- `MCP orchestration`
- `AI software production pipeline`
- `design-to-code AI platform`
- `verification-first AI coding`
- `AI workflow automation`
- `AI PR review`
- `Git Worktree AI agent`
- `Jira Slack AI workflow`

### Structured content hooks

| 페이지 구간 | 검색 의도 |
|-------------|-----------|
| Hero | Davinci가 어떤 category인지 |
| Runtime Pipeline | 여러 AI tool을 어떻게 통합하는지 |
| Harness Proof | 왜 단순 wrapper가 아닌지 |
| Design-to-Code | 기획/디자인/코드가 어떻게 이어지는지 |
| Workflow Operations | Git/PR/Jira/Slack 업무 통합이 어디까지 이어지는지 |
| FAQ | 경쟁 tool 대체 여부, 자동화 수준, 검증 방식 |

---

## 17. FAQ And Objection Handling

FAQ는 defensive Q&A가 아니라, Davinci의 category를 더 선명하게 만드는 장치다. 사용자가 이미 알고 있는 Claude Code, Codex CLI, Gemini CLI를 낮추지 않고, Davinci가 그 위에서 어떤 운영 구조를 제공하는지 설명해야 한다.

### FAQ copy

| 질문 | 답변 방향 |
|------|-----------|
| Davinci는 Claude Code나 Codex를 대체하나요? | 대체가 아니라 orchestration이다. 각 runtime의 장점을 pipeline 안에서 역할화한다. |
| 단순 CLI wrapper인가요? | 아니다. 핵심은 routing, skill, agent persona, hook, evidence handoff, verification gate가 이어지는 harness다. |
| 완전 자동 개발을 말하나요? | 아니다. Davinci는 human intent를 유지하면서 AI execution을 구조화하고 검증하는 platform이다. |
| 왜 여러 AI를 하나로 묶어야 하나요? | AI runtime이 늘수록 사용자가 context, evidence, correction을 직접 들고 다니는 비용이 커진다. |
| Native GUI는 왜 필요한가요? | terminal runtime의 힘을 유지하면서 routing state, workflow, evidence, design output을 사람이 추적 가능한 형태로 보여주기 위해 필요하다. |
| Design-to-Code는 부가 기능인가요? | 아니다. Davinci의 pipeline은 idea와 design intent를 code execution 이전 단계부터 보존한다. |
| 왜 verification-first가 중요한가요? | AI coding 속도만 빨라지면 review, correction, deployment risk가 병목이 된다. Davinci는 evidence와 gate를 pipeline 안에 둔다. |
| Git, Jira, Slack 같은 업무 도구와도 연결되나요? | Davinci의 platform completeness는 AI output을 Git history, PR Review, Jira issue, Slack notification, Deploy/Monitor 흐름으로 이어주는 데 있다. |

### FAQ tone

- “우리가 더 똑똑하다”가 아니라 “AI runtime이 많아진 시대에 필요한 운영 구조”로 설명한다.
- 특정 runtime을 낮추지 않는다.
- 사용자를 탓하지 않는다.
- 자동화 약속보다 continuity, evidence, verification을 강조한다.

---

## 18. Launch Readiness Checklist

최종 웹사이트 제작 전 아래 항목을 통과해야 한다. 이 checklist는 디자인/개발 실행 전 handoff 기준이다.

### Content readiness

| 항목 | 기준 |
|------|------|
| Final hero | `여러 AI의 장점을 하나의 생산 라인으로.` 사용 |
| Category | `AI Runtime Orchestration Platform` 사용 |
| Runtime story | Claude/Codex/Gemini/MCP를 runtime lane으로 표현 |
| Harness proof | PM Agent, skill, agent persona, hook, Reflexion, Handoff Chain 포함 |
| Verification proof | Evidence Handoff와 Verification Gate를 최소 2회 이상 설명 |
| Workflow operations proof | Git Worktree, PR Review, Jira, Slack, Deploy/Monitor를 platform completeness로 설명 |
| Design story | Native GUI, Create Studio, Design-to-Code를 pipeline 확장으로 설명 |
| Comparison | Hermes/OMC/mattpocock은 비교 맥락으로만 사용하고 비하하지 않음 |

### Design readiness

| 항목 | 기준 |
|------|------|
| First viewport | category/headline/CTA/pipeline preview가 동시에 보임 |
| Mobile | runtime lane이 세로 흐름으로 읽힘 |
| Accessibility | contrast, keyboard focus, reduced motion 기준 포함 |
| Visual noise | decorative orb/stock AI visual/의미 없는 gradient 제거 |
| Product signal | 실제 pipeline, route, evidence, gate가 visual 중심 |

### Evidence readiness

| 항목 | 기준 |
|------|------|
| Source trace | 시장조사 report와 claim guardrail 연결 |
| Stale copy | 오래된 skill/agent 숫자, pricing, 티징 문구 제거 |
| Scope guard | 실제 사이트 구현 전에는 planning artifact만 수정 |
| Measurement | section view, CTA, runtime lane, evidence expand event 정의 |
| Reverification | verification script가 PASS 상태 유지 |

최종 launch handoff 문장:

```text
Davinci 공식 웹사이트는 여러 AI runtime의 장점을 하나의 production pipeline으로 통합 운영하는 category를 선점해야 한다. 모든 section은 이 메시지를 반복하되, 과장 대신 routing, evidence, verification, design continuity로 증명한다.
```
