const links = {
  email: "mailto:hiryan@example.com",
  linkedin: "#",
  github: "#",
  resume: "#",
};

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const i18n = {
  en: {
    profile: {
      name: "Hiryan Hang",
      displayName: "Yichen Huang",
      role: "AI Product Manager",
      headlineLeft: "Product",
      headlineRight: "Manager",
      intro:
        "I focus on turning ambiguous AI opportunities into real scenarios, product workflows, runnable prototypes, and case studies that can be reviewed.",
      heroTags: ["RAG", "Agent", "Prompt", "Vibe Coding"],
      about: [
        "I am a product manager transitioning from traditional internet products into AI product management.",
        "I am building hands-on experience through real projects around RAG, Agent workflows, Prompt design, AI product evaluation, and Vibe Coding.",
        "Rather than simply calling a model, I care about designing AI product loops that are testable, controllable, and iterative: starting from real scenarios, designing the right AI workflow, building runnable prototypes, and improving through feedback.",
      ],
      links,
    },
    nav: {
      items: [
        { label: "Home", href: "#top" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Thinking", href: "#thinking" },
        { label: "Contact", href: "#contact" },
      ],
      resume: "Resume",
      available: "Available for work",
      backHome: "Back to home",
      openMenu: "Open navigation menu",
    },
    language: {
      toggle: "中文",
      label: "Switch language",
    },
    hero: {
      cardCaption: "AI Workflow / Product Loop",
    },
    servicesIntro: {
      eyebrow: "What I can do for you",
      titleLines: ["AI product", "capabilities"],
      description:
        "I break down AI scenarios from a product manager's perspective, connecting capability design, prototype execution, validation, and review in one loop.",
    },
    services: [
      {
        title: "AI Product Definition",
        items: ["Problem definition and scenario breakdown", "Target users and task context", "PRD / prototype / MVP scope", "Validation metrics and iteration path"],
      },
      {
        title: "RAG Product Design",
        items: ["Knowledge retrieval workflow", "Chunking and recall strategy", "AI summarization and source citation", "Task-triggered knowledge reuse"],
      },
      {
        title: "Agent Workflow",
        items: ["Task planning", "Tool Calling", "Boundary control", "Failure recovery"],
      },
      {
        title: "Vibe Coding",
        items: ["Codex / Claude Code / Cursor", "Fast prototype building", "Demo deployment", "Improving ideas through real feedback"],
      },
    ],
    about: {
      title: "About me",
    },
    stats: [
      { value: "02", label: "Featured AI Projects" },
      { value: "05", label: "Core Capability Areas" },
      { value: "10+", label: "Case Review Dimensions" },
    ],
    projectsIntro: {
      eyebrow: "Featured projects",
      title: "AI product projects",
      description:
        "These projects show how I understand RAG, Agents, Prompt design, AI product evaluation, and product loops through real practice.",
    },
    projects: [
      {
        id: "revive",
        name: "Revive",
        category: "RAG Product",
        status: "Prototype deployed",
        description:
          "A RAG-based AI product that helps users quickly retrieve, distill, and reuse knowledge from their saved content in task-specific scenarios.",
        keywords: ["RAG", "Knowledge Retrieval", "AI Summarization", "Source Citation", "Task-triggered Reuse"],
        primaryAction: "View Case",
        secondaryAction: "View Demo",
        demoUrl: "#",
        caseStudy: [
          { title: "Problem", body: "Users save many articles, posts, videos, and references, but when they need to write, research, or prepare an argument, it is difficult to reactivate those saved materials. Saved content becomes a passive archive rather than a task-ready knowledge asset." },
          { title: "Target Users", body: "Knowledge workers who frequently organize information, create output, and make product or research judgments, especially product managers, researchers, creators, and learning-driven users." },
          { title: "Existing Alternatives", body: "Bookmarks, Notion databases, read-it-later tools, and manual search can store content, but they usually lack task context, cross-source synthesis, and traceable citations." },
          { title: "Product Solution", body: "The product triggers retrieval around a specific task. Users describe their current goal, and the system recalls relevant saved content, distills reusable insights, and preserves source citations to help users form the next output faster." },
          { title: "AI Workflow", body: "The core capability is powered by RAG: content chunking, vector retrieval, semantic recall, summary generation, and source citation. Prompts constrain output structure and prevent generic summaries." },
          { title: "MVP Scope", body: "The MVP supports importing a small set of saved content, entering a task, recalling relevant materials, producing structured summaries, and showing sources. Complex knowledge-base management and collaboration are intentionally excluded." },
        ],
      },
      {
        id: "agent-project",
        name: "Agent Project",
        category: "Agent Workflow",
        status: "In progress",
        description:
          "An AI product project exploring how Agents can handle task planning, tool use, boundary control, and failure recovery in real workflows.",
        keywords: ["Agent", "Tool Calling", "Planning", "Boundary Control", "Failure Recovery"],
        primaryAction: "View Case",
        secondaryAction: "Coming Soon",
        demoUrl: "#",
        caseStudy: [
          { title: "Problem", body: "Many Agent demos appear capable of completing tasks automatically, but in real workflows they often struggle with unstable planning, tool failures, unclear boundaries, and poor recovery." },
          { title: "Target Users", body: "Product managers, operators, and knowledge workers who want AI to assist with repetitive information processing, checking, organization, and execution tasks." },
          { title: "Existing Alternatives", body: "Traditional automation scripts are stable but inflexible, while general chatbots are flexible but hard to control. Agent products need to define boundaries between flexibility and reliability." },
          { title: "Product Solution", body: "The product starts from a single high-frequency task and divides it into planning, execution, checking, and recovery stages, allowing users to observe what the Agent is doing and intervene at key moments." },
          { title: "AI Workflow", body: "The Agent plans task steps, uses Tool Calling for execution, relies on rules and prompts to constrain boundaries, and includes retry, fallback, and human confirmation mechanisms." },
          { title: "MVP Scope", body: "The MVP validates a controllable workflow: task input, plan generation, tool calling, result checking, failure messaging, and human takeover. It does not aim to build a fully autonomous general Agent." },
        ],
      },
    ],
    faqIntro: {
      titleLines: ["Frequently asked", "questions"],
      description:
        "A quick overview of how I think about AI product work, what this portfolio demonstrates, and where interviewers can start.",
    },
    faq: [
      { question: "Why are you moving into AI product management?", answer: "Because AI products are not only about connecting models. They require redesigning information flows, decision flows, and human-AI collaboration. This direction needs product judgment, prototyping ability, and continuous validation." },
      { question: "What capabilities does this portfolio highlight?", answer: "It highlights RAG, Agent workflows, Prompt design, AI output evaluation, Tool Calling, and fast prototyping with Codex, Claude Code, and Cursor." },
      { question: "How do the projects go beyond simple model calls?", answer: "Each project explains the problem, target users, existing alternatives, AI workflow, MVP scope, validation method, failure boundaries, and key learnings." },
      { question: "What should interviewers look at first?", answer: "Start with the project section, then review the capability section and About section. The projects show how I apply AI capabilities to real task scenarios." },
    ],
    articlesIntro: {
      title: "Product thinking",
      description:
        "A reserved area for future essays on AI product reviews, methods, and reflections.",
    },
    articles: [
      { date: "2026.06", title: "The value of RAG products is not just search, but task-based knowledge reuse", description: "A reflection on how Revive turns retrieval into an actionable product loop." },
      { date: "2026.06", title: "In Agent product design, boundary control matters more than automation", description: "A product breakdown of Agent workflows through planning, tool calling, and failure recovery." },
    ],
    contact: {
      eyebrow: "Let's work together",
      title: "Contact",
      description:
        "If you want to learn more about my AI product projects, prototype thinking, or case reviews, feel free to reach out.",
      action: "Send email",
      links: [
        { label: "Email", value: "hiryan@example.com", href: links.email },
        { label: "LinkedIn", value: "Placeholder", href: links.linkedin },
        { label: "GitHub", value: "Placeholder", href: links.github },
        { label: "Resume", value: "Placeholder", href: links.resume },
      ],
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  zh: {
    profile: {
      name: "Hiryan Hang",
      displayName: "Yichen Huang",
      role: "AI 产品经理",
      headlineLeft: "产品",
      headlineRight: "经理",
      intro:
        "我关注如何把模糊的 AI 机会转化为真实场景、产品流程、可运行原型和可复盘案例。",
      heroTags: ["RAG 产品", "Agent 工作流", "Prompt", "Vibe Coding"],
      about: [
        "我是一名从传统互联网产品转向 AI 产品方向的产品经理。",
        "我正在通过真实项目建立 AI 产品能力，包括 RAG、Agent 工作流、Prompt 设计、AI 产品评估和 Vibe Coding。",
        "相比单纯调用模型，我更关注如何设计一个可验证、可控制、可迭代的 AI 产品闭环：从真实场景出发，设计合理的 AI 工作流，构建可运行原型，并通过测试和反馈持续优化。",
      ],
      links,
    },
    nav: {
      items: [
        { label: "首页", href: "#top" },
        { label: "关于", href: "#about" },
        { label: "项目", href: "#projects" },
        { label: "思考", href: "#thinking" },
        { label: "联系", href: "#contact" },
      ],
      resume: "简历",
      available: "可合作中",
      backHome: "回到首页",
      openMenu: "打开导航菜单",
    },
    language: {
      toggle: "EN",
      label: "切换语言",
    },
    hero: {
      cardCaption: "AI 工作流 / 产品闭环",
    },
    servicesIntro: {
      eyebrow: "What I can do for you",
      titleLines: ["AI 产品", "能力结构"],
      description:
        "我从产品经理视角拆解 AI 场景，把能力设计、原型执行、验证反馈和项目复盘连接成一个闭环。",
    },
    services: [
      {
        title: "AI 产品定义",
        items: ["问题定义与场景拆解", "目标用户与任务背景", "PRD / 原型 / MVP 范围", "验证指标与迭代路径"],
      },
      {
        title: "RAG 产品设计",
        items: ["知识检索工作流", "内容切分与召回策略", "AI 总结与来源引用", "任务触发式知识复用"],
      },
      {
        title: "Agent 工作流",
        items: ["任务规划", "Tool Calling", "边界控制", "失败恢复"],
      },
      {
        title: "Vibe Coding",
        items: ["Codex / Claude Code / Cursor", "快速构建原型", "Demo 部署", "通过真实反馈改进想法"],
      },
    ],
    about: {
      title: "关于我",
    },
    stats: [
      { value: "02", label: "AI 项目作品" },
      { value: "05", label: "核心能力方向" },
      { value: "10+", label: "案例复盘维度" },
    ],
    projectsIntro: {
      eyebrow: "Featured projects",
      title: "AI 产品项目",
      description:
        "这些项目展示我对 RAG、Agent、Prompt 设计、AI 产品评估和产品闭环的真实理解。",
    },
    projects: [
      {
        id: "revive",
        name: "Revive",
        category: "RAG 产品",
        status: "原型已部署",
        description:
          "一款基于 RAG 的 AI 产品，帮助用户在具体任务场景下，从历史收藏内容中快速检索、提炼并复用知识。",
        keywords: ["RAG", "知识检索", "AI 总结", "来源引用", "任务触发式复用"],
        primaryAction: "查看案例",
        secondaryAction: "查看 Demo",
        demoUrl: "#",
        caseStudy: [
          { title: "问题背景", body: "用户会保存大量文章、帖子、视频和资料，但真正需要写作、研究或准备观点时，很难重新激活这些历史内容。收藏内容往往变成被动归档，而不是面向任务的知识资产。" },
          { title: "目标用户", body: "高频整理信息、产出内容和做判断的知识工作者，尤其是产品经理、研究者、创作者和学习驱动型用户。" },
          { title: "现有替代方案", body: "书签、Notion 数据库、稍后读工具和手动搜索可以保存内容，但通常缺少任务语境、跨来源综合和可追溯引用。" },
          { title: "产品方案", body: "产品围绕具体任务触发检索。用户描述当前目标，系统召回相关收藏内容，提炼可复用洞察，并保留来源引用，帮助用户更快形成下一步输出。" },
          { title: "AI 工作流", body: "核心能力由 RAG 驱动：内容切分、向量检索、语义召回、摘要生成和来源引用。Prompt 约束输出结构，避免生成泛泛而谈的总结。" },
          { title: "MVP 范围", body: "MVP 支持导入少量收藏内容、输入任务、召回相关材料、生成结构化摘要并展示来源。复杂知识库管理和协作能力暂时不做。" },
        ],
      },
      {
        id: "agent-project",
        name: "Agent 项目",
        category: "Agent 工作流",
        status: "进行中",
        description:
          "一个用于探索 Agent 在真实工作流中如何进行任务规划、工具调用、边界控制和失败恢复的 AI 产品项目。",
        keywords: ["Agent", "Tool Calling", "任务规划", "边界控制", "失败恢复"],
        primaryAction: "查看案例",
        secondaryAction: "即将更新",
        demoUrl: "#",
        caseStudy: [
          { title: "问题背景", body: "很多 Agent Demo 看起来可以自动完成任务，但进入真实工作流后，常常会遇到计划不稳定、工具失败、边界不清和恢复能力不足的问题。" },
          { title: "目标用户", body: "希望 AI 协助处理重复信息加工、检查、整理和执行任务的产品经理、运营人员和知识工作者。" },
          { title: "现有替代方案", body: "传统自动化脚本稳定但不灵活，通用聊天机器人灵活但难控制。Agent 产品需要在灵活性和可靠性之间定义清晰边界。" },
          { title: "产品方案", body: "产品从一个高频单点任务切入，将流程拆成规划、执行、检查和恢复阶段，让用户能观察 Agent 的行为，并在关键节点介入。" },
          { title: "AI 工作流", body: "Agent 负责生成任务步骤，通过 Tool Calling 执行，用规则和 Prompt 约束边界，并加入重试、回退和人工确认机制。" },
          { title: "MVP 范围", body: "MVP 验证一个可控流程：任务输入、计划生成、工具调用、结果检查、失败提示和人工接管。不追求一次性做成完全自主的通用 Agent。" },
        ],
      },
    ],
    faqIntro: {
      titleLines: ["常见", "问题"],
      description:
        "快速说明我如何理解 AI 产品工作、这个作品集展示了什么，以及面试官可以从哪里开始看。",
    },
    faq: [
      { question: "为什么转向 AI 产品经理？", answer: "因为 AI 产品不只是接入模型，而是要重新设计信息流、决策流和人机协作方式。这个方向需要产品判断、原型能力和持续验证。" },
      { question: "这个作品集重点展示什么能力？", answer: "重点展示 RAG、Agent 工作流、Prompt 设计、AI 输出评估、Tool Calling，以及使用 Codex、Claude Code、Cursor 快速构建原型的能力。" },
      { question: "这些项目如何超越简单模型调用？", answer: "每个项目都会说明问题背景、目标用户、现有替代方案、AI 工作流、MVP 范围、验证方式、失败边界和关键复盘。" },
      { question: "面试官应该先看哪里？", answer: "建议先看项目作品，再看能力结构和关于我。项目部分展示了我如何把 AI 能力落到真实任务场景中。" },
    ],
    articlesIntro: {
      title: "产品思考",
      description:
        "这里会预留给未来关于 AI 产品复盘、方法论和实践反思的文章。",
    },
    articles: [
      { date: "2026.06", title: "RAG 产品的价值不只是搜索，而是任务触发的知识复用", description: "一篇关于 Revive 如何把检索变成可行动产品闭环的反思。" },
      { date: "2026.06", title: "Agent 产品设计中，边界控制比自动化更重要", description: "从规划、工具调用和失败恢复角度拆解 Agent 工作流。" },
    ],
    contact: {
      eyebrow: "Let's work together",
      title: "联系我",
      description:
        "如果你想进一步了解我的 AI 产品项目、原型实践或案例复盘，欢迎联系我。",
      action: "发送邮件",
      links: [
        { label: "Email", value: "hiryan@example.com", href: links.email },
        { label: "LinkedIn", value: "占位链接", href: links.linkedin },
        { label: "GitHub", value: "占位链接", href: links.github },
        { label: "简历", value: "占位链接", href: links.resume },
      ],
    },
    footer: {
      rights: "保留所有权利。",
    },
  },
} as const;

export type Content = (typeof i18n)[Locale];
export type Project = Content["projects"][number];
