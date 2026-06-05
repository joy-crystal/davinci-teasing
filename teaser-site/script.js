const progressBar = document.querySelector(".scroll-progress span");
const nav = document.querySelector(".site-nav");
const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
const parallaxScenes = Array.from(document.querySelectorAll("[data-parallax-scene]"));
const depthItems = Array.from(document.querySelectorAll("[data-depth]"));
const sections = Array.from(document.querySelectorAll("[data-section]"));
const chapterLinks = Array.from(document.querySelectorAll("[data-chapter-link]"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
const metaDescription = document.querySelector('meta[name="description"]');
const languageStorageKey = "davinci-official-site-lang";

const copy = {
  en: {
    metaTitle: "Davinci - AI Runtime Orchestration Platform",
    metaDescription: "Davinci orchestrates Claude Code, Codex CLI, Gemini CLI, and MCP/local tools into one verified software production pipeline.",
    "nav.product": "Product",
    "nav.pipeline": "Pipeline",
    "nav.agents": "Harness",
    "nav.templates": "Studio",
    "nav.proof": "Proof",
    "nav.docs": "Summary",
    "chapter.start": "Start",
    "chapter.gap": "Trust",
    "chapter.motion": "Pipeline",
    "chapter.system": "Routing",
    "chapter.agents": "Harness",
    "chapter.templates": "Studio",
    "chapter.design": "Design",
    "chapter.guardrails": "Verify",
    "chapter.operations": "Ops",
    "chapter.comparison": "Compare",
    "chapter.proof": "Proof",
    "chapter.cta": "Summary",
    "instrument.route": "Production route",
    "instrument.flow": "Intent → Evidence → Gate",
    "instrument.item1": "Runtime-aware routing",
    "instrument.item2": "Skill / Agent selection",
    "instrument.item3": "Evidence handoff",
    "instrument.item4": "Verification gate",
    "hero.eyebrow": "AI Runtime Orchestration Platform",
    "hero.line": "Orchestrating the strengths of multiple AI runtimes into one production line.",
    "hero.desc": "Davinci turns human intent into a software production line that understands its runtime — routing the work, selecting the right agent, leaving evidence, verifying every handoff, and carrying it through to team operations.",
    "hero.cta.primary": "See the Pipeline",
    "hero.cta.secondary": "View Studio",
    "motion.label": "03 / Unified AI Runtime Pipeline",
    "motion.eyebrow": "Routed by role, not rivalry",
    "motion.title": "Different runtimes, one production line.",
    "motion.body": "Claude Code, Codex CLI, Gemini CLI, and MCP/local tools move by role, context, and proof.",
    "motion.lane.claude.role": "Reasoning lane",
    "motion.lane.claude.body": "Deep reasoning, planning, and complex implementation.",
    "motion.lane.codex.role": "Execution lane",
    "motion.lane.codex.body": "Local code edits, runs, and CI/CD automation.",
    "motion.lane.gemini.role": "Context lane",
    "motion.lane.gemini.body": "Broad context, research, and extension workflows.",
    "motion.lane.mcp.role": "Tool lane",
    "motion.lane.mcp.body": "Docs, browser, symbol search, deploy, and verification tools.",
    "gap.label": "02 / Trust Gap",
    "gap.eyebrow": "Code generation is not production",
    "gap.title": "AI is faster. Production still needs proof.",
    "gap.map.idea": "intent",
    "gap.map.code": "output",
    "gap.map.ship": "production",
    "gap.statement.1.title": "Runtime sprawl",
    "gap.statement.1.body": "Claude, Codex, Gemini, and local tools each solve a different slice.",
    "gap.statement.2.title": "Evidence loss",
    "gap.statement.2.body": "Long work breaks when context, decisions, and checks are not handed forward.",
    "gap.statement.3.title": "Operational gap",
    "gap.statement.3.body": "Real teams still need worktree isolation, PR review, Jira, Slack, deploy, and monitor.",
    "gap.cta": "View Verification",
    "system.label": "05 / Multi-Routing",
    "system.eyebrow": "Runtime-aware routing",
    "system.title": "Requests become routes through skills, agents, runtimes, tools, and gates.",
    "system.layer.app": "Intent maps to the runtime with the right capability.",
    "system.layer.server": "Workflow skills and agent persona shape execution.",
    "system.layer.engine": "Outputs carry context, decisions, and checks forward.",
    "system.layer.plugin": "3-Tier verification decides what can move next.",
    "metric.skills": "Workflow skills",
    "metric.agents": "Expert agents",
    "metric.templates": "Hook guardrails",
    "metric.hooks": "Verification tiers",
    "agents.label": "04 / Harness Thesis",
    "agents.eyebrow": "Execution structure around the model",
    "agents.title": "Good models need a harness to become production software.",
    "agents.body": "PM Agent, Reflexion, Handoff Chain, hooks, skills, and agent persona work in the same pipeline.",
    "agents.node.arch": "PM Agent",
    "agents.node.frontend": "Skills",
    "agents.node.backend": "MCP Tools",
    "agents.node.security": "Hooks",
    "agents.node.research": "Evidence",
    "agents.node.creative": "Verification",
    "agents.core": "33+ Agents",
    "templates.label": "07 / Native Desktop Studio",
    "templates.eyebrow": "Terminal power, visible surface",
    "templates.title": "Sessions, evidence, design intent, and operations stay inspectable.",
    "templates.chat": "Multi-tab AI runtime sessions.",
    "templates.mcp": "Role, skill, and handoff structure.",
    "templates.voice": "Execution history and decisions.",
    "templates.workflows": "MCP/local tool evidence in context.",
    "templates.email": "Runtime usage and session cost.",
    "templates.payments": "Create Studio and implementation panels.",
    "templates.dashboards": "Reviewer handoff with test evidence.",
    "templates.design": "Production routines after code.",
    "design.label": "08 / Design-to-Code",
    "design.eyebrow": "Create Studio as pipeline input",
    "design.title": "Design intent stays in the pipeline.",
    "design.body": "Idea, UX, code, and visual QA move as one work unit.",
    "design.step.1.title": "Design Intent",
    "design.step.1.body": "Intent preserved.",
    "design.step.2.title": "Create Studio",
    "design.step.2.body": "Creative input.",
    "design.step.3.title": "UX Validation",
    "design.step.3.body": "UX checked.",
    "design.step.4.title": "Visual QA",
    "design.step.4.body": "Visual proof.",
    "guardrails.label": "06 / Verification-First Production",
    "guardrails.eyebrow": "Speed needs gates",
    "guardrails.title": "Davinci treats trust as workflow infrastructure.",
    "guardrails.item.1": "3-Tier Verification",
    "guardrails.item.2": "20+ Hook Guardrails",
    "guardrails.item.3": "Evidence Handoff",
    "guardrails.item.4": "Reflexion Loop",
    "operations.label": "09 / Workflow Operations",
    "operations.eyebrow": "AI output becomes team workflow",
    "operations.title": "Generated code becomes team workflow.",
    "operations.body": "Git, PR, Jira, Slack, deploy, and monitor stay connected.",
    "operations.git": "Isolated work state.",
    "operations.pr": "Review-ready handoff.",
    "operations.jira": "Issue-linked work.",
    "operations.slack": "Team-visible signals.",
    "comparison.label": "10 / Comparison",
    "comparison.eyebrow": "Category, not tool count",
    "comparison.title": "The difference is orchestration.",
    "comparison.body": "Davinci connects existing runtimes into one verified pipeline.",
    "proof.label": "11 / Proof / Inventory",
    "proof.eyebrow": "Already inside the product",
    "proof.title": "Proof lives in the harness.",
    "proof.body": "Skills, agents, hooks, and verification are already part of the product.",
    "proof.skills": "Intent to workflow.",
    "proof.agents": "Role-based execution.",
    "proof.hooks": "Action boundaries.",
    "proof.loc": "Runtime code.",
    "proof.tiers": "Gate before handoff.",
    "proof.studio": "Inspectable state.",
    "proof.cta": "View Summary",
    "final.eyebrow": "Human intent. AI execution. System-level verification.",
    "final.title": "One verified production pipeline.",
    "final.body": "Davinci turns AI execution into routed, evidenced, team-ready software work.",
    "final.cta.pipeline": "See the Pipeline",
    "final.cta.proof": "View Proof",
    "footer.line": "AI Runtime Orchestration Platform for verified software production.",
    "footer.pipeline": "Pipeline",
    "footer.harness": "Harness",
    "footer.operations": "Operations",
    "footer.proof": "Proof"
  },
  ko: {
    metaTitle: "Davinci - AI Runtime Orchestration Platform",
    metaDescription: "Davinci는 Claude Code, Codex CLI, Gemini CLI, MCP, agent, hook을 하나의 production pipeline으로 연결해 AI software workflow를 연속적으로 운영합니다.",
    "nav.product": "Product",
    "nav.pipeline": "Pipeline",
    "nav.agents": "Harness",
    "nav.templates": "Studio",
    "nav.proof": "Proof",
    "nav.docs": "Summary",
    "chapter.start": "Start",
    "chapter.gap": "Trust",
    "chapter.motion": "Pipeline",
    "chapter.system": "Routing",
    "chapter.agents": "Harness",
    "chapter.templates": "Studio",
    "chapter.design": "Design",
    "chapter.guardrails": "Verify",
    "chapter.operations": "Ops",
    "chapter.comparison": "Compare",
    "chapter.proof": "Proof",
    "chapter.cta": "Summary",
    "instrument.route": "생산 경로",
    "instrument.flow": "의도 → 증거 → 게이트",
    "instrument.item1": "실행 환경 기반 라우팅",
    "instrument.item2": "Skill / Agent 선택",
    "instrument.item3": "증거 인계",
    "instrument.item4": "검증 게이트",
    "hero.eyebrow": "AI Runtime Orchestration Platform",
    "hero.line": "여러 AI의 장점을 하나의 생산 라인으로.",
    "hero.desc": "Davinci는 사람의 의도를 실행 환경을 이해하는 소프트웨어 생산 라인으로 바꿉니다. 작업을 라우팅하고, 적절한 agent를 선택하고, 증거를 남기고, 인계를 검증한 뒤 팀 운영까지 이어갑니다.",
    "hero.cta.primary": "See the Pipeline",
    "hero.cta.secondary": "View Studio",
    "motion.label": "03 / Unified AI Runtime Pipeline",
    "motion.eyebrow": "Routed by role, not rivalry",
    "motion.title": "서로 다른 Runtime을 하나의 Production Line으로.",
    "motion.body": "Claude Code, Codex CLI, Gemini CLI, MCP/Local Tools가 역할, 맥락, Evidence 기준으로 이어집니다.",
    "motion.lane.claude.role": "추론 레인",
    "motion.lane.claude.body": "깊은 추론·계획·복잡한 구현.",
    "motion.lane.codex.role": "실행 레인",
    "motion.lane.codex.body": "로컬 코드 수정·실행·CI/CD 자동화.",
    "motion.lane.gemini.role": "Context 레인",
    "motion.lane.gemini.body": "넓은 Context·리서치·확장 워크플로우.",
    "motion.lane.mcp.role": "도구 레인",
    "motion.lane.mcp.body": "문서·브라우저·심볼 검색·배포·검증 도구.",
    "gap.label": "02 / Trust Gap",
    "gap.eyebrow": "Code generation is not production",
    "gap.title": "AI는 빨라졌지만, Production은 여전히 Proof가 필요합니다.",
    "gap.map.idea": "intent",
    "gap.map.code": "output",
    "gap.map.ship": "production",
    "gap.statement.1.title": "Runtime sprawl",
    "gap.statement.1.body": "Claude, Codex, Gemini, Local Tools는 서로 다른 영역을 해결합니다.",
    "gap.statement.2.title": "Evidence loss",
    "gap.statement.2.body": "Context, Decision, Check가 이어지지 않으면 긴 작업은 끊깁니다.",
    "gap.statement.3.title": "Operational gap",
    "gap.statement.3.body": "팀에는 Worktree, PR Review, Jira, Slack, Deploy, Monitor가 필요합니다.",
    "gap.cta": "View Verification",
    "system.label": "05 / Multi-Routing",
    "system.eyebrow": "Runtime-aware routing",
    "system.title": "요청은 Skill, Agent, Runtime, Tool, Gate를 지나는 Route가 됩니다.",
    "system.layer.app": "Intent를 적절한 Runtime Capability에 연결합니다.",
    "system.layer.server": "Workflow Skill과 Agent Persona가 실행 구조를 만듭니다.",
    "system.layer.engine": "Output은 Context, Decision, Check를 함께 넘깁니다.",
    "system.layer.plugin": "3-Tier Verification이 다음 이동 가능 여부를 판단합니다.",
    "metric.skills": "Workflow skills",
    "metric.agents": "Expert agents",
    "metric.templates": "Hook guardrails",
    "metric.hooks": "Verification tiers",
    "agents.label": "04 / Harness Thesis",
    "agents.eyebrow": "Execution structure around the model",
    "agents.title": "좋은 모델도 Production Software가 되려면 Harness가 필요합니다.",
    "agents.body": "PM Agent, Reflexion, Handoff Chain, Hooks, Skills, Agent Persona가 같은 Pipeline에서 작동합니다.",
    "agents.node.arch": "PM Agent",
    "agents.node.frontend": "Skills",
    "agents.node.backend": "MCP Tools",
    "agents.node.security": "Hooks",
    "agents.node.research": "Evidence",
    "agents.node.creative": "Verification",
    "agents.core": "33+ Agents",
    "templates.label": "07 / Native Desktop Studio",
    "templates.eyebrow": "Terminal power, visible surface",
    "templates.title": "Session, Evidence, Design Intent, Operations를 추적 가능하게 보여줍니다.",
    "templates.chat": "여러 AI Runtime 세션을 탭으로.",
    "templates.mcp": "역할·Skill·Handoff 구조.",
    "templates.voice": "실행 이력과 의사결정.",
    "templates.workflows": "MCP/Local Tool Evidence를 맥락과 함께.",
    "templates.email": "Runtime 사용량과 세션 비용.",
    "templates.payments": "Create Studio와 구현 패널.",
    "templates.dashboards": "Test Evidence와 함께 리뷰어 Handoff.",
    "templates.design": "코드 이후의 Production 루틴.",
    "design.label": "08 / Design-to-Code",
    "design.eyebrow": "Create Studio as pipeline input",
    "design.title": "Design Intent가 Pipeline에 남습니다.",
    "design.body": "Idea, UX, Code, Visual QA가 하나의 Work Unit으로 이동합니다.",
    "design.step.1.title": "Design Intent",
    "design.step.1.body": "의도가 보존됩니다.",
    "design.step.2.title": "Create Studio",
    "design.step.2.body": "창작 입력.",
    "design.step.3.title": "UX Validation",
    "design.step.3.body": "UX 검증.",
    "design.step.4.title": "Visual QA",
    "design.step.4.body": "시각적 증거.",
    "guardrails.label": "06 / Verification-First Production",
    "guardrails.eyebrow": "Speed needs gates",
    "guardrails.title": "Davinci는 Trust를 Workflow Infrastructure로 다룹니다.",
    "guardrails.item.1": "3-Tier Verification",
    "guardrails.item.2": "20+ Hook Guardrails",
    "guardrails.item.3": "Evidence Handoff",
    "guardrails.item.4": "Reflexion Loop",
    "operations.label": "09 / Workflow Operations",
    "operations.eyebrow": "AI output becomes team workflow",
    "operations.title": "Generated Code는 Team Workflow가 됩니다.",
    "operations.body": "Git, PR, Jira, Slack, Deploy, Monitor가 연결됩니다.",
    "operations.git": "격리된 작업 상태.",
    "operations.pr": "리뷰 준비된 Handoff.",
    "operations.jira": "Issue에 연결된 작업.",
    "operations.slack": "팀이 보는 신호.",
    "comparison.label": "10 / Comparison",
    "comparison.eyebrow": "Category, not tool count",
    "comparison.title": "차이는 Orchestration입니다.",
    "comparison.body": "Davinci는 기존 Runtime을 하나의 Verified Pipeline으로 연결합니다.",
    "proof.label": "11 / Proof / Inventory",
    "proof.eyebrow": "Already inside the product",
    "proof.title": "Proof는 Harness 안에 있습니다.",
    "proof.body": "Skills, Agents, Hooks, Verification이 이미 Product 안에 있습니다.",
    "proof.skills": "Intent에서 Workflow로.",
    "proof.agents": "역할 기반 실행.",
    "proof.hooks": "Action 경계.",
    "proof.loc": "Runtime 코드.",
    "proof.tiers": "Handoff 전 Gate.",
    "proof.studio": "추적 가능한 상태.",
    "proof.cta": "View Summary",
    "final.eyebrow": "Human intent. AI execution. System-level verification.",
    "final.title": "하나의 검증된 Production Pipeline.",
    "final.body": "Davinci는 AI Execution을 Routed, Evidenced, Team-ready Software Work로 바꿉니다.",
    "final.cta.pipeline": "See the Pipeline",
    "final.cta.proof": "View Proof",
    "footer.line": "Verified Software Production을 위한 AI Runtime Orchestration Platform.",
    "footer.pipeline": "Pipeline",
    "footer.harness": "Harness",
    "footer.operations": "Operations",
    "footer.proof": "Proof"
  }
};

function applyLanguage(lang) {
  const normalizedLang = lang === "en" ? "en" : "ko";
  const activeCopy = copy[normalizedLang];

  document.documentElement.lang = normalizedLang;
  document.title = activeCopy.metaTitle;
  metaDescription?.setAttribute("content", activeCopy.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && activeCopy[key]) {
      element.textContent = activeCopy[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === normalizedLang;
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(languageStorageKey, normalizedLang);
  } catch {
    // The static file can be opened without a storage-capable origin.
  }
}

function prepareTypingTitles() {
  const titles = Array.from(document.querySelectorAll("main section:not(.hero) h2[data-i18n]")).filter((title) =>
    title.dataset.i18n?.endsWith(".title")
  );

  titles.forEach((title) => {
    const text = title.textContent?.trim() || "";
    title.removeAttribute("data-typing-title");
    title.removeAttribute("aria-label");

    if (!text || reduceMotion) {
      title.textContent = text;
      return;
    }

    title.textContent = "";
    title.dataset.typingTitle = "";
    title.setAttribute("aria-label", text);

    let glyphIndex = 0;
    text.match(/\S+|\s+/g)?.forEach((token) => {
      if (/^\s+$/.test(token)) {
        const space = document.createElement("span");
        space.className = "typing-space";
        space.setAttribute("aria-hidden", "true");
        space.textContent = token;
        title.append(space);
        return;
      }

      const word = document.createElement("span");
      word.className = "typing-word";
      word.setAttribute("aria-hidden", "true");

      Array.from(token).forEach((glyph) => {
        const span = document.createElement("span");
        span.className = "typing-char";
        span.style.setProperty("--typing-index", glyphIndex);
        span.style.setProperty("--typing-delay", `${140 + glyphIndex * 18}ms`);
        span.textContent = glyph;
        word.append(span);
        glyphIndex += 1;
      });

      title.append(word);
    });

    title.style.setProperty("--typing-count", glyphIndex);
  });
}

function scheduleTypingTitles() {
  const version = (typingTitleVersion += 1);

  if (reduceMotion) {
    prepareTypingTitles();
    document.documentElement.classList.add("typing-ready");
    return;
  }

  document.documentElement.classList.remove("typing-ready");
  const run = () => {
    if (version !== typingTitleVersion) return;
    prepareTypingTitles();
    requestAnimationFrame(() => {
      if (version === typingTitleVersion) {
        document.documentElement.classList.add("typing-ready");
      }
    });
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(run).catch(run);
  } else {
    run();
  }
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value) {
  const progress = clamp(value);
  return 1 - Math.pow(1 - progress, 3);
}

function getMotionVector(profile, order, groupIndex, itemIndex) {
  const direction = order % 2 === 0 ? -1 : 1;
  const spread = 14 + Math.min(itemIndex, 4) * 3;
  const depth = 0.72 + (order % 5) * 0.12;

  switch (profile) {
    case "left":
      return { x: -22 - itemIndex * 2, y: 22, depth };
    case "right":
      return { x: 22 + itemIndex * 2, y: 22, depth };
    case "fan":
      return { x: direction * spread, y: 24 + groupIndex * 2, depth: depth + 0.08 };
    case "rail":
      return { x: -18 + itemIndex * 6, y: 24, depth: depth + 0.04 };
    case "orbit": {
      const angle = (order + 1) * 0.78;
      return { x: Math.cos(angle) * 24, y: 22 + Math.sin(angle) * 8, depth: depth + 0.14 };
    }
    case "deep":
      return { x: direction * 12, y: 30, depth: depth + 0.18 };
    default:
      return { x: direction * 10, y: 24 + groupIndex * 2, depth };
  }
}

function prepareStaggeredContent() {
  const configs = [
    {
      section: ".hero",
      groups: [
        { selector: ".hero-copy .eyebrow", delay: 80, motion: "left" },
        { selector: ".hero-copy h1", delay: 160, motion: "left" },
        { selector: ".hero-line", delay: 300, motion: "left" },
        { selector: ".hero-actions .button", delay: 500, step: 110, motion: "rail" },
        { selector: ".hero-proof span", delay: 760, step: 70, motion: "fan" },
        { selector: ".command-ribbon span", delay: 960, step: 55, motion: "rail" }
      ]
    },
    {
      section: ".parallax-story",
      groups: [
        { selector: ".motion-copy .eyebrow", delay: 120, motion: "left" },
        { selector: ".motion-copy h2", delay: 260, motion: "left" },
        { selector: ".motion-copy p:not(.eyebrow)", delay: 900, motion: "left" },
        { selector: ".motion-card", delay: 1080, step: 130, motion: "orbit" }
      ]
    },
    {
      section: ".problem",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".sticky-copy .eyebrow", delay: 220, motion: "left" },
        { selector: ".sticky-copy h2", delay: 360, motion: "left" },
        { selector: ".fracture-map", delay: 900, motion: "rail" },
        { selector: ".source-row span", delay: 1080, step: 70, motion: "fan" },
        { selector: ".inline-cta", delay: 1280, motion: "rail" },
        { selector: ".statement-stack .statement", delay: 1320, step: 160, motion: "right" }
      ]
    },
    {
      section: "#system",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".section-heading .eyebrow", delay: 220, motion: "left" },
        { selector: ".section-heading h2", delay: 360, motion: "left" },
        { selector: ".layer-stage .layer", delay: 1100, step: 130, motion: "orbit" },
        { selector: ".metric-band > div", delay: 1540, step: 90, motion: "fan" }
      ]
    },
    {
      section: "#agents",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".constellation-copy .eyebrow", delay: 220, motion: "left" },
        { selector: ".constellation-copy h2", delay: 360, motion: "left" },
        { selector: ".constellation-copy p:not(.eyebrow)", delay: 880, motion: "left" },
        { selector: ".agent-map", delay: 1060, motion: "deep" },
        { selector: ".agent-node, .agent-core", delay: 1240, step: 70, motion: "orbit" }
      ]
    },
    {
      section: "#templates",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".section-heading .eyebrow", delay: 220, motion: "left" },
        { selector: ".section-heading h2", delay: 360, motion: "left" },
        { selector: ".template-grid article", delay: 1080, step: 90, motion: "fan" }
      ]
    },
    {
      section: "#design-code",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".section-heading .eyebrow", delay: 220, motion: "left" },
        { selector: ".section-heading h2", delay: 360, motion: "left" },
        { selector: ".section-heading p:not(.eyebrow)", delay: 820, motion: "left" },
        { selector: ".design-flow article", delay: 1060, step: 100, motion: "rail" }
      ]
    },
    {
      section: "#guardrails",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".guardrail-shell .eyebrow", delay: 220, motion: "left" },
        { selector: ".guardrail-shell h2", delay: 360, motion: "left" },
        { selector: ".guardrail-list li", delay: 1080, step: 120, motion: "right" }
      ]
    },
    {
      section: "#operations",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".section-heading .eyebrow", delay: 220, motion: "left" },
        { selector: ".section-heading h2", delay: 360, motion: "left" },
        { selector: ".section-heading p:not(.eyebrow)", delay: 820, motion: "left" },
        { selector: ".ops-rail span", delay: 1020, step: 70, motion: "rail" },
        { selector: ".ops-proof-grid article", delay: 1460, step: 110, motion: "fan" }
      ]
    },
    {
      section: "#comparison",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".section-heading .eyebrow", delay: 220, motion: "left" },
        { selector: ".section-heading h2", delay: 360, motion: "left" },
        { selector: ".section-heading p:not(.eyebrow)", delay: 820, motion: "left" },
        { selector: ".comparison-matrix article", delay: 1040, step: 100, motion: "rail" }
      ]
    },
    {
      section: "#proof",
      groups: [
        { selector: ".section-label", delay: 80, motion: "left" },
        { selector: ".section-heading .eyebrow", delay: 220, motion: "left" },
        { selector: ".section-heading h2", delay: 360, motion: "left" },
        { selector: ".section-heading p:not(.eyebrow)", delay: 820, motion: "left" },
        { selector: ".proof-grid article", delay: 1040, step: 90, motion: "fan" },
        { selector: ".inline-cta", delay: 1640, motion: "rail" }
      ]
    },
    {
      section: "#final-cta",
      groups: [
        { selector: ".final-copy .eyebrow", delay: 120, motion: "deep" },
        { selector: ".final-copy h2", delay: 280, motion: "deep" },
        { selector: ".final-copy > p:not(.eyebrow)", delay: 780, motion: "deep" },
        { selector: ".final-actions .button", delay: 1040, step: 120, motion: "rail" }
      ]
    }
  ];

  document.querySelectorAll("[data-motion-section]").forEach((section) => {
    section.removeAttribute("data-motion-section");
  });

  document.querySelectorAll("[data-stagger-item]").forEach((item) => {
    item.removeAttribute("data-stagger-item");
    item.removeAttribute("data-scroll-motion");
    item.removeAttribute("data-motion-order");
    item.removeAttribute("data-motion-count");
    item.removeAttribute("data-motion-depth");
    item.removeAttribute("data-motion-x");
    item.removeAttribute("data-motion-y");
    item.classList.remove("is-stagger-visible");
    item.style.removeProperty("--stagger-delay");
    item.style.removeProperty("--stagger-distance");
    item.style.removeProperty("--motion-opacity");
    item.style.removeProperty("--motion-blur");
    item.style.removeProperty("--motion-x");
    item.style.removeProperty("--motion-y");
    item.style.removeProperty("--motion-scale");
  });

  configs.forEach(({ section: sectionSelector, groups }) => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    section.dataset.staggerSection = "";
    section.dataset.motionSection = "";

    const orderedItems = [];
    groups.forEach((group, groupIndex) => {
      section.querySelectorAll(group.selector).forEach((item, itemIndex) => {
        orderedItems.push({ item, group, groupIndex, itemIndex });
      });
    });

    orderedItems.forEach(({ item, group, groupIndex, itemIndex }, motionOrder) => {
      const { delay, step = 120, distance = "18px", motion = "rise" } = group;
      const vector = getMotionVector(motion, motionOrder, groupIndex, itemIndex);

      item.dataset.staggerItem = "";
      item.dataset.scrollMotion = "";
      item.dataset.motionOrder = String(motionOrder);
      item.dataset.motionCount = String(orderedItems.length);
      item.dataset.motionDepth = vector.depth.toFixed(2);
      item.dataset.motionX = vector.x.toFixed(2);
      item.dataset.motionY = vector.y.toFixed(2);
      item.style.setProperty("--stagger-delay", `${delay + itemIndex * step}ms`);
      item.style.setProperty("--stagger-distance", distance);
      item.style.setProperty("--motion-opacity", "0");
      item.style.setProperty("--motion-blur", "2.4px");
      item.style.setProperty("--motion-x", `${vector.x.toFixed(2)}px`);
      item.style.setProperty("--motion-y", `${vector.y.toFixed(2)}px`);
      item.style.setProperty("--motion-scale", "0.982");
    });
  });

  scrollMotionGroups = Array.from(document.querySelectorAll("[data-motion-section]")).map((section) => ({
    section,
    items: Array.from(section.querySelectorAll("[data-scroll-motion]"))
  }));
}

function updateScrollMotion() {
  if (reduceMotion || !scrollMotionGroups.length) return;

  const viewport = window.innerHeight || 1;
  const compactMotion = window.innerWidth < 700;

  scrollMotionGroups.forEach(({ section, items }) => {
    const rect = section.getBoundingClientRect();
    if (rect.bottom < -viewport * 0.18 || rect.top > viewport * 1.18) return;

    const motionSpan = viewport * (compactMotion ? 0.64 : 0.74) + rect.height * (compactMotion ? 0.58 : 0.72);
    const sectionProgress = clamp((viewport * (compactMotion ? 0.68 : 0.78) - rect.top) / motionSpan);

    items.forEach((item) => {
      const order = Number(item.dataset.motionOrder || 0);
      const count = Math.max(1, Number(item.dataset.motionCount || items.length || 1));
      const baseX = Number(item.dataset.motionX || 0);
      const baseY = Number(item.dataset.motionY || 0);
      const depth = Number(item.dataset.motionDepth || 1);
      const step = count > 1 ? Math.min(compactMotion ? 0.04 : 0.055, (compactMotion ? 0.46 : 0.58) / (count - 1)) : 0;
      const start = order * step;
      const end = Math.min(0.96, start + (compactMotion ? 0.3 : 0.36));
      const reveal = easeOutCubic((sectionProgress - start) / (end - start));
      const parallaxPhase = sectionProgress - 0.5;
      const driftX = baseX * 0.22 * parallaxPhase * reveal;
      const driftY = -parallaxPhase * depth * (compactMotion ? 26 : 42) * reveal;
      const x = baseX * (1 - reveal) + driftX;
      const y = baseY * (1 - reveal) + driftY;
      const scale = 0.992 + reveal * 0.008;

      item.style.setProperty("--motion-opacity", reveal.toFixed(3));
      item.style.setProperty("--motion-blur", "0px");
      item.style.setProperty("--motion-x", `${x.toFixed(2)}px`);
      item.style.setProperty("--motion-y", `${y.toFixed(2)}px`);
      item.style.setProperty("--motion-scale", scale.toFixed(3));
    });
  });
}

function revealStaggerItems(section, immediate = false) {
  const items = Array.from(section.querySelectorAll("[data-stagger-item]"));
  if (!items.length) return;

  staggerTimers.get(section)?.forEach((timer) => clearTimeout(timer));

  const timers = [];
  items.forEach((item) => {
    const rawDelay = Number.parseFloat(item.style.getPropertyValue("--stagger-delay")) || 0;
    const delay = immediate || reduceMotion ? 0 : Math.min(rawDelay * 0.18, 220);

    if (delay <= 0) {
      item.classList.add("is-stagger-visible");
      return;
    }

    timers.push(
      setTimeout(() => {
        item.classList.add("is-stagger-visible");
      }, delay)
    );
  });

  staggerTimers.set(section, timers);
}

function setActiveChapter(chapter) {
  if (!chapter || !chapterLinks.length) return;

  chapterLinks.forEach((link) => {
    const isActive = link.dataset.chapterLink === chapter;
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateActiveChapter() {
  if (!sections.length || !chapterLinks.length) return;

  const viewportAnchor = window.innerHeight * 0.42;
  let fallbackSection = sections[0];
  let fallbackDistance = Number.POSITIVE_INFINITY;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
      setActiveChapter(section.dataset.chapter);
      return;
    }

    const distance = Math.min(Math.abs(rect.top - viewportAnchor), Math.abs(rect.bottom - viewportAnchor));
    if (distance < fallbackDistance) {
      fallbackDistance = distance;
      fallbackSection = section;
    }
  }

  setActiveChapter(fallbackSection?.dataset.chapter);
}

function revealHashTarget() {
  if (!window.location.hash) return;

  const target = document.getElementById(window.location.hash.slice(1));
  const section = target?.closest("[data-section]");
  if (!section) return;

  section.classList.add("is-visible");
  setActiveChapter(section.dataset.chapter);
}

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem(languageStorageKey) || "en";
} catch {
  savedLanguage = "en";
}
const REVEAL_STEP_MS = 55;
const typeSelector =
  ".section-label, .eyebrow, h1, h2, .hero-line, .section-heading > p:not(.eyebrow), .motion-copy > p:not(.eyebrow), .constellation-copy > p:not(.eyebrow), .final-copy > p:not(.eyebrow)";
const blockSelector =
  ".hero-desc, .hero-actions, .hero-proof, .runtime-instrument, .fracture-map, .source-row, .inline-cta, .statement, .layer, .metric-band > div, .agent-map, .template-grid article, .design-flow article, .guardrail-list li, .ops-rail, .ops-proof-grid article, .comparison-matrix article, .proof-grid article, .motion-card, .final-actions";

function typeOutElement(element, baseOrder) {
  const text = element.textContent;
  if (!text || !text.trim()) return;

  element.dataset.typed = "";
  element.setAttribute("aria-label", text.trim());
  element.style.setProperty("--type-base", `${baseOrder * REVEAL_STEP_MS}ms`);
  element.textContent = "";

  let charIndex = 0;
  Array.from(text).forEach((glyph) => {
    if (/\s/.test(glyph)) {
      // Real whitespace text node keeps a normal break opportunity, so the line
      // wraps and balances like ordinary text. Inline char spans below do not
      // add break opportunities, so English words never split mid-word.
      element.append(document.createTextNode(glyph));
      return;
    }
    const charSpan = document.createElement("span");
    charSpan.className = "type-char";
    charSpan.setAttribute("aria-hidden", "true");
    charSpan.style.setProperty("--char", String(charIndex));
    charSpan.textContent = glyph;
    element.append(charSpan);
    charIndex += 1;
  });
}

// Assign each section a staggered entrance: prominent text types in softly,
// supporting components fade-rise in sequence. Re-run after a language switch
// because applyLanguage() rewrites the typed text nodes.
function setupSectionChoreography() {
  if (reduceMotion) return;

  sections.forEach((section) => {
    const units = Array.from(section.querySelectorAll(`${typeSelector}, ${blockSelector}`));
    units.forEach((element, order) => {
      if (element.matches(typeSelector)) {
        typeOutElement(element, order);
      } else {
        element.dataset.reveal = "";
        element.style.setProperty("--reveal-order", String(order));
      }
    });
  });
}

applyLanguage(savedLanguage);
setupSectionChoreography();

// Provider-agnostic analytics dispatch. Pushes the measurement events from the
// plan (§11) to window.dataLayer (and gtag if present); a no-op until a provider
// is wired, so it never throws. Event type is inferred from the name suffix:
//   *_view  -> fires once when the element scrolls into view
//   *_hover -> fires on pointer enter
//   else    -> fires on click (covers *_click / *_open / *_expand / *_toggle)
function trackEvent(name) {
  if (!name) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ts: Date.now() });
    if (typeof window.gtag === "function") window.gtag("event", name);
  } catch {
    // No analytics provider available; ignore.
  }
}

function setupEventTracking() {
  document.querySelectorAll("[data-event]").forEach((element) => {
    const name = element.dataset.event;
    if (!name || element.dataset.eventBound === "1") return;
    element.dataset.eventBound = "1";

    if (name.endsWith("_view")) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              trackEvent(name);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(element);
    } else if (name.endsWith("_hover")) {
      element.addEventListener("pointerenter", () => trackEvent(name), { passive: true });
    } else {
      element.addEventListener("click", () => trackEvent(name), { passive: true });
    }
  });
}

setupEventTracking();

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
    setupSectionChoreography();
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Toggle (not just add) so each section's entrance animation replays
      // every time it is arrived at — scrolling down or back up.
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  { threshold: 0.16 }
);

sections.forEach((section) => sectionObserver.observe(section));
revealHashTarget();
window.addEventListener("hashchange", revealHashTarget);

const chapterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const chapter = entry.target.dataset.chapter;
      if (!chapter) return;
      setActiveChapter(chapter);
    });
  },
  { rootMargin: "-38% 0px -48% 0px", threshold: 0.01 }
);

sections.forEach((section) => chapterObserver.observe(section));
updateActiveChapter();

if (!reduceMotion) {
  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true }
  );
}

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;

  progressBar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
  nav?.classList.toggle("is-scrolled", scrollTop > 24);
  updateActiveChapter();

  if (!reduceMotion) {
    const viewport = window.innerHeight;

    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const speed = Number(item.dataset.speed || 0);
      const centerOffset = rect.top + rect.height / 2 - viewport / 2;
      const travel = centerOffset * speed;
      item.style.transform = `translate3d(0, ${travel.toFixed(2)}px, 0)`;
    });

    parallaxScenes.forEach((scene) => {
      const maxTravel = Math.max(1, scene.offsetHeight - viewport);
      const sceneTop = scene.offsetTop;
      const rawProgress = (scrollTop - sceneTop) / maxTravel;
      const sceneProgress = Math.min(1, Math.max(0, rawProgress));
      scene.style.setProperty("--scene-progress", sceneProgress.toFixed(4));
      scene.classList.toggle("is-pinned", rawProgress >= 0 && rawProgress <= 1);
      scene.classList.toggle("is-after", rawProgress > 1);
    });

    depthItems.forEach((item) => {
      const scene = item.closest("[data-parallax-scene]");
      const sceneProgress = Number(scene?.style.getPropertyValue("--scene-progress") || 0);
      const compact = window.innerWidth < 700;
      const xDepthFactor = compact ? 0.16 : window.innerWidth < 980 ? 0.66 : 1;
      const yDepthFactor = compact ? 0.18 : window.innerWidth < 980 ? 0.66 : 1;
      const scaleDepthFactor = compact ? 0.3 : window.innerWidth < 980 ? 0.66 : 1;
      // Motion cards converge: start spread out and gather into the base row as the scene scrolls.
      const motionPhase = item.classList.contains("motion-card") ? 1 - sceneProgress : sceneProgress;
      const x = Number(item.dataset.x || 0) * motionPhase * xDepthFactor;
      const y = Number(item.dataset.y || 0) * motionPhase * yDepthFactor;
      const scale = 1 + Number(item.dataset.scale || 0) * motionPhase * scaleDepthFactor;
      const lift = Math.sin(sceneProgress * Math.PI) * Number(item.dataset.float || 0);
      item.style.transform = `translate3d(${x.toFixed(2)}vw, ${(y + lift).toFixed(2)}vh, 0) scale(${scale.toFixed(3)})`;
    });
  }

  requestAnimationFrame(updateScrollEffects);
}

requestAnimationFrame(updateScrollEffects);

// Section-unit wheel paging for desktop mouse/trackpad (PPT slide style).
// One wheel notch always advances to the next section, no exceptions.
const finePointer = window.matchMedia("(pointer: fine)");
const pagerEnabled = () => !reduceMotion && window.innerWidth >= 700 && finePointer.matches;

function buildSnapPoints() {
  const viewport = window.innerHeight || 1;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - viewport);
  const points = sections.map((section) => Math.round(clamp(section.offsetTop, 0, maxScroll)));
  return [...new Set(points)].sort((a, b) => a - b);
}

function nearestSnapIndex(points, position) {
  let bestIndex = 0;
  let bestDistance = Infinity;
  points.forEach((point, index) => {
    const distance = Math.abs(point - position);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });
  return bestIndex;
}

let isPaging = false;

function pageTo(targetY, onDone) {
  const startY = window.scrollY || document.documentElement.scrollTop;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) {
    onDone?.();
    return;
  }

  const duration = Math.min(480, 200 + Math.abs(distance) * 0.32);
  const startTime = performance.now();
  isPaging = true;

  let finished = false;
  const finalize = () => {
    if (finished) return;
    finished = true;
    // behavior:instant overrides the page's CSS scroll-behavior:smooth so the
    // tween below isn't re-animated by the browser and lands exactly on target.
    window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
    isPaging = false;
    onDone?.();
  };

  const stepFrame = (now) => {
    if (finished) return;
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo({ top: Math.round(startY + distance * eased), left: 0, behavior: "instant" });
    if (progress < 1) {
      requestAnimationFrame(stepFrame);
    } else {
      finalize();
    }
  };

  requestAnimationFrame(stepFrame);
  // Safety net: if rAF throttles (e.g. background tab), still land exactly and unlock.
  setTimeout(finalize, duration + 80);
}

let wheelCooldown = false;

function handleWheel(event) {
  if (!pagerEnabled()) return;
  event.preventDefault();
  if (isPaging || wheelCooldown) return;

  const direction = event.deltaY > 0 ? 1 : event.deltaY < 0 ? -1 : 0;
  if (!direction) return;

  const points = buildSnapPoints();
  if (points.length < 2) return;

  const currentY = window.scrollY || document.documentElement.scrollTop;
  const currentIndex = nearestSnapIndex(points, currentY);
  const nextIndex = Math.round(clamp(currentIndex + direction, 0, points.length - 1));
  if (nextIndex === currentIndex) return;

  wheelCooldown = true;
  pageTo(points[nextIndex], () => {
    setTimeout(() => {
      wheelCooldown = false;
    }, 40);
  });
}

function handlePagerKeys(event) {
  if (!pagerEnabled() || isPaging) return;
  const target = event.target;
  if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable]")) return;

  const downKeys = ["PageDown", "ArrowDown", " ", "Spacebar"];
  const upKeys = ["PageUp", "ArrowUp"];
  let direction = 0;
  if (downKeys.includes(event.key)) direction = 1;
  else if (upKeys.includes(event.key)) direction = -1;
  else return;

  event.preventDefault();
  const points = buildSnapPoints();
  if (points.length < 2) return;
  const currentY = window.scrollY || document.documentElement.scrollTop;
  const nextIndex = Math.round(clamp(nearestSnapIndex(points, currentY) + direction, 0, points.length - 1));
  pageTo(points[nextIndex]);
}

window.addEventListener("wheel", handleWheel, { passive: false });
window.addEventListener("keydown", handlePagerKeys);
