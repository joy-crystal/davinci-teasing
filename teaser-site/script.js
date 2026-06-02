const progressBar = document.querySelector(".scroll-progress span");
const nav = document.querySelector(".site-nav");
const workflowShell = document.querySelector(".workflow-shell");
const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
const parallaxScenes = Array.from(document.querySelectorAll("[data-parallax-scene]"));
const depthItems = Array.from(document.querySelectorAll("[data-depth]"));
const sections = Array.from(document.querySelectorAll("[data-section]"));
const workflowSteps = Array.from(document.querySelectorAll(".workflow-step"));
const chapterLinks = Array.from(document.querySelectorAll("[data-chapter-link]"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
const metaDescription = document.querySelector('meta[name="description"]');
const languageStorageKey = "davinci-official-site-lang";

const copy = {
  en: {
    metaTitle: "Davinci - AI Runtime Orchestration Platform",
    metaDescription: "Davinci orchestrates Claude Code, Codex CLI, Gemini CLI, and MCP/local tools into one verified software production pipeline.",
    "nav.workflow": "Workflow",
    "nav.agents": "Harness",
    "nav.templates": "Studio",
    "chapter.start": "Start",
    "chapter.motion": "Pipeline",
    "chapter.system": "Routing",
    "chapter.workflow": "Workflow",
    "chapter.agents": "Harness",
    "chapter.templates": "Studio",
    "console.pipeline": "pipeline",
    "console.active": "verified",
    "console.idea": "intent captured",
    "console.plan": "route mapped",
    "console.work": "evidence live",
    "hero.eyebrow": "AI Runtime Orchestration Platform",
    "hero.line": "Orchestrating the strengths of multiple AI runtimes into one production line.",
    "hero.cta.primary": "See the Pipeline",
    "hero.cta.secondary": "Download Davinci",
    "motion.eyebrow": "Unified AI Runtime Pipeline",
    "motion.title": "Different runtimes, one production line.",
    "motion.body": "Claude Code, Codex CLI, Gemini CLI, and MCP/local tools move by role, context, and proof.",
    "motion.card.prompt.title": "Intent",
    "motion.card.prompt.body": "Capture the work request.",
    "motion.card.plan.title": "Routing",
    "motion.card.plan.body": "Select skill, agent, and runtime.",
    "motion.card.work.title": "Handoff",
    "motion.card.work.body": "Carry evidence forward.",
    "motion.card.verify.title": "Gate",
    "motion.card.verify.body": "Verify before the next action.",
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
    "system.label": "03 / Routing System",
    "system.eyebrow": "Agent Harness, not a wrapper",
    "system.title": "Requests become routes through skills, agents, runtimes, tools, and gates.",
    "system.layer.app": "Intent maps to the runtime with the right capability.",
    "system.layer.server": "Workflow skills and agent persona shape execution.",
    "system.layer.engine": "Outputs carry context, decisions, and checks forward.",
    "system.layer.plugin": "3-Tier verification decides what can move next.",
    "metric.skills": "Workflow skills",
    "metric.agents": "Expert agents",
    "metric.templates": "Hook guardrails",
    "metric.hooks": "Verification tiers",
    "workflow.label": "04 / Production Workflow",
    "workflow.eyebrow": "From idea to monitored release",
    "workflow.title": "Every command leaves the next step ready.",
    "workflow.step.1.title": "Intent",
    "workflow.step.1.body": "Clarify the product goal, constraints, and evidence needs.",
    "workflow.step.2.title": "Plan",
    "workflow.step.2.body": "Split scope into an executable route with verification criteria.",
    "workflow.step.3.title": "Execute",
    "workflow.step.3.body": "Run the selected skill, agent, runtime, MCP, and local tools.",
    "workflow.step.4.title": "Verify",
    "workflow.step.4.body": "Create evidence before the output moves to handoff.",
    "workflow.step.5.title": "Operate",
    "workflow.step.5.body": "Connect worktree, PR, Jira, Slack, deploy, and monitor flow.",
    "agents.label": "05 / Agent Harness",
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
    "templates.label": "06 / Native Studio",
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
    "guardrails.label": "07 / Verification-First Production",
    "guardrails.eyebrow": "Speed needs gates",
    "guardrails.title": "Davinci treats trust as workflow infrastructure.",
    "guardrails.item.1": "3-Tier Verification",
    "guardrails.item.2": "20+ Hook Guardrails",
    "guardrails.item.3": "Evidence Handoff",
    "guardrails.item.4": "Reflexion Loop",
    "final.eyebrow": "Workflow Operations",
    "final.title": "AI output becomes team workflow.",
    "final.body": "Git Worktree, PR Review, Jira, Slack, deploy, and monitor all stay connected to the same production surface.",
    "final.cta.primary": "See Workflow Operations",
    "final.cta.secondary": "Download Davinci"
  },
  ko: {
    metaTitle: "Davinci - AI Runtime Orchestration Platform",
    metaDescription: "Davinci는 Claude Code, Codex CLI, Gemini CLI, MCP/local tools를 하나의 검증 가능한 software production pipeline으로 연결합니다.",
    "nav.workflow": "Workflow",
    "nav.agents": "Harness",
    "nav.templates": "Studio",
    "chapter.start": "Start",
    "chapter.motion": "Pipeline",
    "chapter.system": "Routing",
    "chapter.workflow": "Workflow",
    "chapter.agents": "Harness",
    "chapter.templates": "Studio",
    "console.pipeline": "pipeline",
    "console.active": "verified",
    "console.idea": "intent captured",
    "console.plan": "route mapped",
    "console.work": "evidence live",
    "hero.eyebrow": "AI Runtime Orchestration Platform",
    "hero.line": "여러 AI runtime의 강점을 하나의 production line으로 연결합니다.",
    "hero.cta.primary": "See the Pipeline",
    "hero.cta.secondary": "Download Davinci",
    "motion.eyebrow": "Unified AI Runtime Pipeline",
    "motion.title": "서로 다른 runtime을 하나의 production line으로.",
    "motion.body": "Claude Code, Codex CLI, Gemini CLI, MCP/local tools가 역할, 맥락, evidence 기준으로 이어집니다.",
    "motion.card.prompt.title": "Intent",
    "motion.card.prompt.body": "작업 요청을 포착합니다.",
    "motion.card.plan.title": "Routing",
    "motion.card.plan.body": "skill, agent, runtime을 선택합니다.",
    "motion.card.work.title": "Handoff",
    "motion.card.work.body": "evidence를 다음 단계로 넘깁니다.",
    "motion.card.verify.title": "Gate",
    "motion.card.verify.body": "다음 action 전 검증합니다.",
    "gap.label": "02 / Trust Gap",
    "gap.eyebrow": "Code generation is not production",
    "gap.title": "AI는 빨라졌지만, production은 여전히 proof가 필요합니다.",
    "gap.map.idea": "intent",
    "gap.map.code": "output",
    "gap.map.ship": "production",
    "gap.statement.1.title": "Runtime sprawl",
    "gap.statement.1.body": "Claude, Codex, Gemini, local tools는 서로 다른 영역을 해결합니다.",
    "gap.statement.2.title": "Evidence loss",
    "gap.statement.2.body": "context, decision, check가 이어지지 않으면 긴 작업은 끊깁니다.",
    "gap.statement.3.title": "Operational gap",
    "gap.statement.3.body": "팀에는 worktree, PR review, Jira, Slack, deploy, monitor가 필요합니다.",
    "system.label": "03 / Routing System",
    "system.eyebrow": "Agent Harness, not a wrapper",
    "system.title": "요청은 skill, agent, runtime, tool, gate를 지나는 route가 됩니다.",
    "system.layer.app": "intent를 적절한 runtime capability에 연결합니다.",
    "system.layer.server": "workflow skill과 agent persona가 실행 구조를 만듭니다.",
    "system.layer.engine": "output은 context, decision, check를 함께 넘깁니다.",
    "system.layer.plugin": "3-Tier verification이 다음 이동 가능 여부를 판단합니다.",
    "metric.skills": "Workflow skills",
    "metric.agents": "Expert agents",
    "metric.templates": "Hook guardrails",
    "metric.hooks": "Verification tiers",
    "workflow.label": "04 / Production Workflow",
    "workflow.eyebrow": "From idea to monitored release",
    "workflow.title": "각 command는 다음 단계를 준비합니다.",
    "workflow.step.1.title": "Intent",
    "workflow.step.1.body": "제품 목표, 제약, evidence 기준을 정리합니다.",
    "workflow.step.2.title": "Plan",
    "workflow.step.2.body": "실행 route와 verification criteria로 범위를 나눕니다.",
    "workflow.step.3.title": "Execute",
    "workflow.step.3.body": "선택된 skill, agent, runtime, MCP/local tool을 실행합니다.",
    "workflow.step.4.title": "Verify",
    "workflow.step.4.body": "handoff 전에 evidence를 만듭니다.",
    "workflow.step.5.title": "Operate",
    "workflow.step.5.body": "worktree, PR, Jira, Slack, deploy, monitor로 이어집니다.",
    "agents.label": "05 / Agent Harness",
    "agents.eyebrow": "Execution structure around the model",
    "agents.title": "좋은 모델도 production software가 되려면 harness가 필요합니다.",
    "agents.body": "PM Agent, Reflexion, Handoff Chain, hooks, skills, agent persona가 같은 pipeline에서 작동합니다.",
    "agents.node.arch": "PM Agent",
    "agents.node.frontend": "Skills",
    "agents.node.backend": "MCP Tools",
    "agents.node.security": "Hooks",
    "agents.node.research": "Evidence",
    "agents.node.creative": "Verification",
    "agents.core": "33+ Agents",
    "templates.label": "06 / Native Studio",
    "templates.eyebrow": "Terminal power, visible surface",
    "templates.title": "session, evidence, design intent, operations를 추적 가능하게 보여줍니다.",
    "templates.chat": "Multi-tab AI runtime sessions.",
    "templates.mcp": "Role, skill, handoff structure.",
    "templates.voice": "Execution history and decisions.",
    "templates.workflows": "MCP/local tool evidence in context.",
    "templates.email": "Runtime usage and session cost.",
    "templates.payments": "Create Studio and implementation panels.",
    "templates.dashboards": "Reviewer handoff with test evidence.",
    "templates.design": "Production routines after code.",
    "guardrails.label": "07 / Verification-First Production",
    "guardrails.eyebrow": "Speed needs gates",
    "guardrails.title": "Davinci는 trust를 workflow infrastructure로 다룹니다.",
    "guardrails.item.1": "3-Tier Verification",
    "guardrails.item.2": "20+ Hook Guardrails",
    "guardrails.item.3": "Evidence Handoff",
    "guardrails.item.4": "Reflexion Loop",
    "final.eyebrow": "Workflow Operations",
    "final.title": "AI output은 team workflow가 됩니다.",
    "final.body": "Git Worktree, PR Review, Jira, Slack, deploy, monitor가 같은 production surface에 연결됩니다.",
    "final.cta.primary": "See Workflow Operations",
    "final.cta.secondary": "Download Davinci"
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

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem(languageStorageKey) || "en";
} catch {
  savedLanguage = "en";
}
applyLanguage(savedLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

sections.forEach((section) => sectionObserver.observe(section));

const chapterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const chapter = entry.target.dataset.chapter;
      if (!chapter) return;
      chapterLinks.forEach((link) => {
        link.toggleAttribute("aria-current", link.dataset.chapterLink === chapter);
      });
    });
  },
  { rootMargin: "-38% 0px -48% 0px", threshold: 0.01 }
);

sections.forEach((section) => chapterObserver.observe(section));

const workflowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      workflowSteps.forEach((step) => step.classList.remove("active"));
      entry.target.classList.add("active");
      const index = workflowSteps.indexOf(entry.target);
      const progress = ((index + 1) / workflowSteps.length) * 100;
      workflowShell?.style.setProperty("--workflow-progress", `${progress}%`);
    });
  },
  {
    threshold: 0.42
  }
);

workflowSteps.forEach((step) => workflowObserver.observe(step));

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
      const x = Number(item.dataset.x || 0) * sceneProgress * xDepthFactor;
      const y = Number(item.dataset.y || 0) * sceneProgress * yDepthFactor;
      const scale = 1 + Number(item.dataset.scale || 0) * sceneProgress * scaleDepthFactor;
      const lift = Math.sin(sceneProgress * Math.PI) * Number(item.dataset.float || 0);
      item.style.transform = `translate3d(${x.toFixed(2)}vw, ${(y + lift).toFixed(2)}vh, 0) scale(${scale.toFixed(3)})`;
    });
  }

  requestAnimationFrame(updateScrollEffects);
}

requestAnimationFrame(updateScrollEffects);
