# Davinci 공식 웹사이트 Wireframe Specification

> 작성일: 2026-06-02
> 용도: 최종 기획서를 화면 구조로 옮기기 위한 low-fidelity wireframe 기준
> Source of truth: `DAVINCI-OFFICIAL-WEBSITE-FINAL-PLAN-2026-06-02.md`
> 제외 범위: 실제 구현, visual mockup, asset production, 배포

---

## 1. Wireframe Principle

Davinci 공식 웹사이트의 화면 구조는 “AI tool을 많이 보여주는 나열형 landing”이 아니라, 여러 AI runtime이 하나의 production pipeline으로 이어지는 흐름을 보여줘야 한다.

구조 원칙:

- 첫 화면에서 category, headline, CTA, pipeline preview가 동시에 보인다.
- 모든 section은 앞 section의 문제를 다음 section의 구조로 해결하는 흐름을 가진다.
- runtime lane, routing, evidence, verification은 추상 설명이 아니라 화면 구성 요소로 드러난다.
- card는 반복 항목에만 쓰고, page section 자체를 card처럼 감싸지 않는다.
- mobile에서는 pipeline을 세로 흐름으로 읽히게 한다.

---

## 2. Global Page Skeleton

```text
Header
Hero + Pipeline Preview
Trust Gap
Unified AI Runtime Pipeline
Agent Harness Thesis
Runtime-aware Routing
Verification-first Production
Native Desktop Studio
Design-to-Code / Create Studio
Workflow Operations
Comparison
Proof / Inventory
Final CTA
Footer
```

Header:

- Left: Davinci wordmark
- Center: Product, Pipeline, Harness, Studio, Proof, Docs
- Right: Download, GitHub/Docs
- Mobile: compact menu, primary CTA는 한 개만 노출

---

## 3. Hero Wireframe

Desktop:

```text
[Nav]

[Eyebrow: AI Runtime Orchestration Platform]
[H1: 여러 AI의 장점을 / 하나의 생산 라인으로.]
[Body copy]
[Primary CTA: See the Pipeline] [Secondary CTA: Download Davinci]
[Proof chips]

[Full-width pipeline preview]
Human Intent -> Routing -> Skill -> Agent -> Runtime -> Evidence -> Verification
```

Mobile:

```text
[Nav compact]
[Eyebrow]
[H1 2-3 lines max]
[Body]
[Primary CTA]
[Secondary CTA]
[Vertical pipeline preview]
```

필수 조건:

- Hero text는 visual card 안에 넣지 않는다.
- pipeline preview는 장식이 아니라 section 3의 예고로 보여야 한다.
- 첫 viewport 하단에 Trust Gap section의 시작이 살짝 보여야 한다.

---

## 4. Trust Gap Wireframe

Desktop:

```text
[Section heading]
[Short problem copy]

[Two-column proof]
Left: AI adoption signal
Right: trust / verification gap

[Source note row]
Stack Overflow / research studies / market signal
```

Mobile:

- proof block은 stacked 1-column으로 배치
- source note는 접지 않고 작은 text로 유지

목적:

- “AI가 부족하다”가 아니라 “검증 가능한 운영 구조가 필요하다”로 문제를 전환한다.

---

## 5. Unified Runtime Pipeline Wireframe

Desktop:

```text
[Headline]
[Body]

[Pipeline lane grid]
Claude lane | Codex lane | Gemini lane | MCP/local lane
      \          |          |          /
       -> Runtime-aware Routing ->
       -> Evidence Handoff ->
       -> Verification Gate ->
       -> Production Output
```

Mobile:

```text
[Intent]
  ↓
[Routing]
  ↓
[Claude / Codex / Gemini / MCP lanes as stacked modules]
  ↓
[Evidence]
  ↓
[Verification]
```

필수 조건:

- 각 runtime은 “도구 로고”가 아니라 역할 label과 capability로 표현한다.
- runtime lane 간 우열 표현을 만들지 않는다.

---

## 6. Harness And Routing Wireframe

Agent Harness section:

```text
[Headline: 좋은 모델만으로는 좋은 software pipeline이 되지 않습니다.]
[Harness map]
PM Agent / Skills / Agent Persona / Hooks / MCP / Memory / Verification
[Scorecard teaser]
```

Runtime-aware Routing section:

```text
[Intent card]
  -> [Skill selection]
  -> [Agent role]
  -> [Runtime capability]
  -> [Tool / MCP]
  -> [Verification tier]
```

필수 조건:

- harness map은 복잡해 보여도 흐름은 단순해야 한다.
- 각 node는 click/hover 가능한 정보 단위로 설계 가능해야 한다.

---

## 7. Verification Wireframe

Desktop:

```text
[Headline: 속도 이후의 문제는 검증입니다.]
[Three-step verification]
1. Evidence capture
2. Guardrail / hook check
3. Verification gate

[Before/After]
Isolated output -> Evidence-backed handoff
```

Mobile:

- three-step block은 timeline으로 전환
- before/after는 2-row comparison으로 구성

핵심:

- verification은 “추가 절차”가 아니라 production pipeline의 중심 gate로 보여야 한다.

---

## 8. Studio And Design Wireframe

Native Desktop Studio:

```text
[Product surface preview]
Session tabs | Agent tree | Timeline | Cost | Tool output | Design/code panels
```

Design-to-Code:

```text
[Design intent]
  -> [Create Studio]
  -> [UX validation]
  -> [Code workflow]
  -> [Visual QA / verification]
```

필수 조건:

- GUI는 CLI를 숨기는 장식이 아니라 runtime state를 추적하는 운영 interface로 보여야 한다.
- Design-to-Code는 별도 feature island가 아니라 pipeline extension으로 배치한다.

---

## 9. Workflow Operations Wireframe

Desktop:

```text
[Headline: 작업은 코드가 아니라 팀의 workflow로 이어집니다.]
[Short body]

[Operations flow rail]
AI Output -> Git Worktree -> Branch / History -> PR Review -> Jira Issue -> Slack Notification -> Deploy / Monitor

[Two-column proof]
Left: Git Worktree / PR Review
Right: Jira / Slack / Deploy Monitor
```

Mobile:

```text
[AI Output]
  ↓
[Git Worktree + Branch History]
  ↓
[PR Review + Test Plan]
  ↓
[Jira Issue + Slack Notification]
  ↓
[Deploy / Monitor]
```

필수 조건:

- Git/Jira/Slack은 logo 나열로만 처리하지 않는다.
- Git Worktree는 session isolation과 history clarity로 설명한다.
- PR Review는 완전 자동 승인 claim이 아니라 review-ready handoff로 설명한다.
- Jira/Slack은 team visibility와 workflow continuity를 보여주는 운영 lane으로 배치한다.

---

## 10. Comparison And Proof Wireframe

Comparison:

```text
[Axis matrix]
Single assistant vs multi-runtime orchestration
Code generation vs production pipeline
Manual supervision vs structured verification
Editor surface vs native production studio
Isolated output vs evidence handoff
```

Proof:

```text
[Metric row]
60+ workflow skills
33+ expert agents
20+ hook guardrails
12K+ core harness LOC

[Proof explanation]
각 숫자가 어떤 운영 구조를 증명하는지 짧게 설명
```

필수 조건:

- comparison은 타 tool 비하가 아니라 category 차이로 보여준다.
- metric은 자랑보다 신뢰 증거로 사용한다.

---

## 11. CTA And Footer Wireframe

Final CTA:

```text
[Headline: 코드 생성은 시작일 뿐입니다.]
[Body: 여러 AI runtime의 장점을 하나의 검증 가능한 production pipeline 안에서 운영하세요.]
[CTA group]
Install Framework | Download App | Read Docs | Request Demo
```

Footer:

- Product
- Framework
- Docs
- Research / Proof
- GitHub
- Contact / Early Access

필수 조건:

- CTA는 aggressive pop-up이나 sticky takeover를 쓰지 않는다.
- 마지막 인상은 “많은 AI tool 모음”이 아니라 “검증 가능한 production pipeline”이어야 한다.

---

## 12. Responsive Rules

| Breakpoint | 기준 |
|------------|------|
| Mobile | pipeline은 vertical, CTA는 1열, proof metric은 2열 이하 |
| Tablet | pipeline lane은 2열, comparison matrix는 horizontal scroll 허용 |
| Desktop | pipeline preview는 full-width, text blocks는 960-1120px 중심 폭 |
| Wide desktop | hero가 너무 비지 않게 pipeline preview를 넓히고 다음 section hint 유지 |

Accessibility:

- keyboard focus가 runtime lane과 CTA에서 명확해야 한다.
- motion 없이도 routing/evidence/verification 상태가 이해되어야 한다.
- normal text contrast는 WCAG 2.1 AA 기준을 따른다.

---

## 13. Wireframe Acceptance

```text
이 wireframe spec은 Davinci 공식 웹사이트가 multi-runtime pipeline, harness, verification, native studio, design-to-code, workflow operations를 빠짐없이 화면 구조로 전달하도록 하는 제작 전 기준이다.
```
