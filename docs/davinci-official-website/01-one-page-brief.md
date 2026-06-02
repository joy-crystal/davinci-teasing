# Davinci 공식 웹사이트 One-Page Brief

> 작성일: 2026-06-02
> 용도: 최종 기획서의 의사결정자/제작자 공유용 1-page summary
> Source of truth: `DAVINCI-OFFICIAL-WEBSITE-FINAL-PLAN-2026-06-02.md`
> 제외 범위: 실제 사이트 구현, 디자인 시안 제작, 배포

---

## 1. Website Goal

Davinci 공식 웹사이트의 목표는 Davinci를 단순 AI coding assistant가 아니라 **AI Runtime Orchestration Platform**으로 각인시키는 것이다.

최종 메시지:

```text
여러 AI의 장점을 하나의 생산 라인으로.
Davinci는 소프트웨어를 끝까지 생산합니다.
```

핵심 해석:

```text
Davinci는 Claude Code, Codex CLI, Gemini CLI, MCP/local tools 같은 다양한 AI runtime의 장점을
role, context, evidence, verification 기준으로 연결해
idea -> plan -> work -> verify -> deploy -> monitor까지 이어지는
단단하고 연속적인 software production pipeline으로 운영한다.
이 흐름은 Git Worktree, branch history, PR Review, Jira issue, Slack notification까지 이어지는 team operations layer를 포함한다.
```

---

## 2. Audience Promise

| 대상 | 사이트가 남겨야 할 인상 |
|------|--------------------------|
| Developer | “AI output을 그냥 받는 도구가 아니라 production workflow로 이어진다.” |
| Tech Lead / CTO | “팀의 AI 사용을 runtime, evidence, verification 기준으로 통제할 수 있다.” |
| Engineering Manager | “AI 작업이 Git history, PR Review, Jira, Slack 업무 흐름에 남는다.” |
| Agent Builder | “Davinci는 Agent Harness, hooks, skill, MCP, routing을 실제 제품 구조로 갖췄다.” |
| Product / Design Builder | “기획과 design intent가 code 이전 단계부터 같은 pipeline에 보존된다.” |

---

## 3. Narrative Flow

| 순서 | Section | 한 줄 역할 |
|------|---------|------------|
| 1 | Hero | `AI Runtime Orchestration Platform` category 즉시 각인 |
| 2 | Trust Gap | AI adoption과 output trust 사이의 간극 제시 |
| 3 | Unified AI Runtime Pipeline | 여러 AI runtime을 하나의 pipeline으로 통합 |
| 4 | Agent Harness | 단순 wrapper가 아니라 workflow system임을 증명 |
| 5 | Runtime-aware Routing | intent가 skill/agent/runtime으로 연결되는 구조 설명 |
| 6 | Verification-first Production | evidence handoff와 verification gate로 production 신뢰 확보 |
| 7 | Native Studio | CLI의 힘을 사람이 추적 가능한 GUI로 운영 |
| 8 | Design-to-Code | design intent까지 같은 production pipeline에 포함 |
| 9 | Workflow Operations | Git Worktree, PR Review, Jira, Slack으로 이어지는 업무 통합 설명 |
| 10 | Proof / Comparison | Hermes/OMC/mattpocock 등과 비교하되 비하 없이 category 차이 설명 |
| 11 | CTA | framework 설치, desktop app, pipeline 확인으로 전환 |

---

## 4. Must-Say Claims

- Davinci는 여러 AI runtime의 장점을 하나의 production pipeline으로 연결한다.
- Davinci는 `Runtime-aware Routing`, `Evidence Handoff`, `Verification Gate`를 통해 context와 proof를 이어준다.
- Davinci의 핵심은 model 선택이 아니라 workflow, skill, agent, MCP, hooks, verification을 묶는 Agent Harness다.
- Native GUI와 Create Studio는 부가 기능이 아니라, terminal runtime과 design intent를 같은 운영 구조에 올리는 interface다.
- Davinci의 사용성 강점은 AI output을 Git Worktree, PR Review, Jira, Slack, Deploy/Monitor까지 이어지는 업무 흐름에 남기는 것이다.

---

## 5. Must-Avoid Claims

- 특정 AI runtime을 하위 도구처럼 말하지 않는다.
- 사용자를 낮춰 보이게 만드는 표현을 쓰지 않는다.
- “완전 자동 개발”, “모든 tool 대체”처럼 검증 불가능한 claim을 쓰지 않는다.
- 오래된 skill/agent 숫자, pricing, teaser copy를 외부 proof처럼 쓰지 않는다.
- 단순 CLI wrapper처럼 보이는 설명을 hero나 category에 두지 않는다.

---

## 6. Visual Direction

첫 화면은 추상적인 AI 분위기가 아니라 실제 운영 구조를 보여줘야 한다.

```text
Human Intent -> Runtime-aware Routing -> Skill/Agent Selection -> Evidence Handoff -> Verification Gate -> Deploy/Monitor
-> Git Worktree / PR Review / Jira / Slack
```

시각 기준:

- runtime lane은 Claude/Codex/Gemini/MCP를 경쟁 구도가 아니라 역할 구도로 보여준다.
- color는 graphite/porcelain 기반에 signal blue, signal green, amber를 기능적으로 쓴다.
- decorative orb, stock-like AI face, 의미 없는 gradient hero는 쓰지 않는다.
- mobile에서는 runtime lane을 vertical stacked route로 읽히게 한다.
- motion은 route, evidence, verification 상태를 설명할 때만 사용한다.

---

## 7. Launch Readiness

최종 사이트 제작 전 아래 상태를 만족해야 한다.

| 항목 | 기준 |
|------|------|
| Hero | `여러 AI의 장점을 하나의 생산 라인으로.` 사용 |
| Category | `AI Runtime Orchestration Platform` 사용 |
| Pipeline | Claude/Codex/Gemini/MCP/MCP local tools를 runtime lane으로 표현 |
| Proof | PM Agent, skill, agent persona, hooks, Reflexion, Handoff Chain 포함 |
| Trust | Evidence Handoff와 Verification Gate를 반복적으로 증명 |
| Operations | Git Worktree, PR Review, Jira, Slack, Deploy/Monitor 업무 통합 포함 |
| Design | Native GUI, Create Studio, Design-to-Code 포함 |
| Guardrail | 비하/과장/stale claim 제거 |
| Measurement | hero CTA, runtime section, evidence expand, download/install event 정의 |

---

## 8. Final Decision

```text
Davinci 공식 웹사이트는 “AI를 더 많이 쓰게 하는 사이트”가 아니라,
복잡하고 강력한 AI runtime들을 하나의 검증 가능한 software production pipeline으로 통합 운영하는 platform을 보여주는 사이트로 기획한다.
```
