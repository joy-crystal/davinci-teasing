const progressBar = document.querySelector(".scroll-progress span");
const nav = document.querySelector(".site-nav");
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
    "nav.pipeline": "Pipeline",
    "nav.agents": "Harness",
    "nav.verification": "Verification",
    "nav.templates": "Studio",
    "nav.operations": "Operations",
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
    "final.eyebrow": "Human intent. AI execution. System-level verification.",
    "final.title": "One verified production pipeline.",
    "final.body": "Davinci turns AI execution into routed, evidenced, team-ready software work.",
    "final.cta.download": "Download App",
    "final.cta.framework": "Install Framework",
    "final.cta.comingSoon": "Coming soon",
    "footer.line": "AI Runtime Orchestration Platform for verified software production.",
    "footer.pipeline": "Pipeline",
    "footer.harness": "Harness",
    "footer.operations": "Operations",
    "footer.proof": "Proof"
  },
  ko: {
    metaTitle: "Davinci - AI Runtime Orchestration Platform",
    metaDescription: "Davinci는 Claude Code, Codex CLI, Gemini CLI, MCP, agent, hook을 하나의 production pipeline으로 연결해 AI software workflow를 연속적으로 운영합니다.",
    "nav.pipeline": "Pipeline",
    "nav.agents": "Harness",
    "nav.verification": "Verification",
    "nav.templates": "Studio",
    "nav.operations": "Operations",
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
    "final.eyebrow": "Human intent. AI execution. System-level verification.",
    "final.title": "하나의 검증된 Production Pipeline.",
    "final.body": "Davinci는 AI Execution을 Routed, Evidenced, Team-ready Software Work로 바꿉니다.",
    "final.cta.download": "Download App",
    "final.cta.framework": "Install Framework",
    "final.cta.comingSoon": "준비중입니다",
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

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

let activeChapterName = null;
let chapterLabelTimer;

// Mobile dot rail: briefly reveal the active section's label, then fade it out
// ~1s later (CSS handles the fade via .show-label). No-op on desktop.
function flashChapterLabel() {
  const rail = document.querySelector(".chapter-rail");
  if (!rail) return;
  rail.classList.add("show-label");
  clearTimeout(chapterLabelTimer);
  chapterLabelTimer = setTimeout(() => rail.classList.remove("show-label"), 1000);
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

  if (chapter !== activeChapterName) {
    activeChapterName = chapter;
    flashChapterLabel();
  }
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
  ".hero-desc, .hero-actions, .hero-proof, .runtime-instrument, .fracture-map, .source-row, .statement, .layer, .metric-band > div, .agent-map, .template-grid article, .design-flow article, .guardrail-list li, .ops-rail, .ops-proof-grid article, .comparison-matrix article, .proof-grid article, .motion-card, .final-actions";

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

// Desktop app is not shipped yet: clicking the download CTA reveals a "coming
// soon" tooltip instead of navigating, so we never wire a placeholder link.
function setupComingSoon() {
  document.querySelectorAll("[data-coming-soon]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.classList.add("show-tooltip");
      window.clearTimeout(el.comingSoonTimer);
      el.comingSoonTimer = window.setTimeout(() => el.classList.remove("show-tooltip"), 2200);
    });
  });
}
setupComingSoon();

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

  requestAnimationFrame(updateScrollEffects);
}

requestAnimationFrame(updateScrollEffects);

// Section-unit wheel paging for desktop mouse/trackpad (PPT slide style).
// Treat wheel input like a slide-deck command: one intentional wheel gesture
// pages once, while same-stream momentum tails are ignored.
const finePointer = window.matchMedia("(pointer: fine)");
const pagerEnabled = () => !reduceMotion && window.innerWidth >= 700 && finePointer.matches;
const wheelDeltaMode = {
  pixel: 0,
  line: 1,
  page: 2,
};

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

function normalizedWheelDeltaY(event) {
  if (event.deltaMode === wheelDeltaMode.line) return event.deltaY * 40;
  if (event.deltaMode === wheelDeltaMode.page) return event.deltaY * (window.innerHeight || 1);
  return event.deltaY;
}

const wheelStreamIdleMs = 180;
const wheelIntentThreshold = 32;
const wheelMomentumTailMs = 180;
const wheelMomentumDeltaTolerance = 2;
let lastWheelAt = 0;
let lastWheelDirection = 0;
let lastWheelAbsDelta = 0;
let lastAcceptedWheelAt = -Infinity;
let wheelIntentDelta = 0;
let wheelIntentDirection = 0;
let wheelStreamHasPaged = false;

function resetWheelStream(direction = 0) {
  wheelIntentDelta = 0;
  wheelIntentDirection = direction;
  wheelStreamHasPaged = false;
}

function isMomentumTail(direction, absDelta, elapsed, now) {
  if (!wheelStreamHasPaged) return false;
  if (elapsed > wheelStreamIdleMs) return false;
  if (direction !== lastWheelDirection) return false;
  if (now - lastAcceptedWheelAt < wheelMomentumTailMs) return true;
  return absDelta <= lastWheelAbsDelta + wheelMomentumDeltaTolerance;
}

function pageByWheelDirection(direction) {
  const points = buildSnapPoints();
  if (points.length < 2) return false;

  const currentY = window.scrollY || document.documentElement.scrollTop;
  const currentIndex = nearestSnapIndex(points, currentY);
  const nextIndex = Math.round(clamp(currentIndex + direction, 0, points.length - 1));
  if (nextIndex === currentIndex) return false;

  pageTo(points[nextIndex]);
  return true;
}

function handleWheel(event) {
  if (!pagerEnabled()) return;
  event.preventDefault();

  const now = performance.now();
  const deltaY = normalizedWheelDeltaY(event);
  const direction = deltaY > 0 ? 1 : deltaY < 0 ? -1 : 0;
  if (!direction) return;

  const elapsed = now - lastWheelAt;
  const absDelta = Math.abs(deltaY);
  const startsNewStream = elapsed > wheelStreamIdleMs || direction !== lastWheelDirection;
  const momentumTail = isMomentumTail(direction, absDelta, elapsed, now);

  lastWheelAt = now;
  lastWheelDirection = direction;
  lastWheelAbsDelta = absDelta;

  if (isPaging) return;

  if (startsNewStream) resetWheelStream(direction);
  if (momentumTail) return;
  if (wheelStreamHasPaged) resetWheelStream(direction);

  if (wheelIntentDirection && wheelIntentDirection !== direction) resetWheelStream(direction);
  wheelIntentDirection = direction;
  wheelIntentDelta += deltaY;
  if (Math.abs(wheelIntentDelta) < wheelIntentThreshold) return;

  if (pageByWheelDirection(direction)) {
    wheelStreamHasPaged = true;
    lastAcceptedWheelAt = now;
    wheelIntentDelta = 0;
  }
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
