const links = {
  email: "mailto:hiryanhang@gmail.com",
  linkedin: "tel:15958155750",
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
        "I am building practical AI product capabilities through real projects, including AI scenario judgment, Agent workflow design, and model evaluation and optimization.",
        "Rather than simply calling a model, I care more about how to land an AI product that is verifiable, controllable, and iterative, then keep improving it through testing and feedback.",
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
      eyebrow: "WHAT I CAN DO FOR YOU",
      titleLines: ["AI product", "capability model"],
      description:
        "I break down business scenarios from a product manager's perspective, judge AI feasibility, turn solutions into product workflows, and close the loop through evaluation and iteration.",
    },
    services: [
      {
        title: "AI Technical Understanding & Scenario Judgment",
        items: [
          "Understand the capability boundaries and limitations of mainstream large models, and judge which business scenarios are suitable for AI.",
          "Combine user research and competitive analysis to identify where AI can replace or enhance real business workflows, then turn the judgment into executable product solutions.",
        ],
      },
      {
        title: "AI Product Planning & Delivery",
        items: [
          "Translate scenario judgment into concrete AI workflow design, choosing the right solution based on task complexity.",
          "Break down requirements, write PRDs, build prototypes, and use Vibe Coding tools to quickly validate ideas and iterate product form.",
        ],
      },
      {
        title: "Model Evaluation & Bad Case Optimization",
        items: [
          "Design quantitative evaluation systems for AI output and use LLM-as-Judge to improve output reliability.",
          "Analyze Bad Cases, trace root causes, locate the problem, and iterate with targeted improvements.",
        ],
      },
    ],
    about: {
      title: "About me",
    },
    stats: [
      { value: "02", label: "Featured AI Projects" },
      { value: "05+", label: "Version Iterations" },
      { value: "30+", label: "Evaluation Samples" },
    ],
    aboutContacts: [
      { label: "Call Today", value: "15958155750" },
      { label: "Email", value: "hiryanhang@gmail.com" },
    ],
    projectsIntro: {
      eyebrow: "Featured projects",
      title: "AI product projects",
      description:
        "Starting from problems and pain points I encountered myself, and alongside my AI learning journey, I independently vibe coded and completed the following projects:",
    },
    projects: [
      {
        id: "revive",
        name: "Revive",
        category: "RAG + Memory Workflow",
        status: "Live",
        description:
          "A historical-saved-content reuse tool for knowledge workers, helping past collections become usable again when writing proposals, reviewing work, or preparing reports, while gradually adapting to task preferences.",
        keywords: ["RAG", "Task Preference Memory", "Evidence Citation", "Structured Generation", "Knowledge Reuse"],
        primaryAction: "View Case",
        secondaryAction: "View Demo",
        demoUrl: "#",
        githubUrl: "https://github.com/hiryan519/revive.git",
        caseStudy: [
          { title: "Problem", body: "Many knowledge workers save articles, cases, methods, and experience-based content for years, but when writing proposals, doing retrospectives, or preparing reports, they still need to search, reread, filter, and summarize everything manually. The problem is not only that content is hard to find; saved materials rarely turn into directly usable work output at the moment a real task appears." },
          { title: "Target Users", body: "Product managers, operators, marketers, consultants, and content workers who keep long-term collections and need to turn external information into proposals, reviews, reports, planning materials, or communication drafts." },
          { title: "Existing Alternatives", body: "Users usually rely on platform bookmarks, read-it-later tools, knowledge bases, or manual research combined with general AI. These tools can store or generate content, but they require high upfront organization effort, provide unclear evidence for results, and rarely adapt to a user's own output habits over time." },
          { title: "Product Solution", body: "Revive is not a general second brain or a heavy knowledge-management system. It focuses on reusing saved content when a task happens. Users import a batch of content, then start from a concrete task. The system generates structured output that can be copied, edited, and traced back to supporting evidence." },
          { title: "AI Workflow", body: "The system is built on a RAG workflow: imported content is parsed, chunked, and indexed. When users submit a task, the system retrieves relevant passages from the current content set and generates structured results. Key conclusions are connected to citation evidence that shows original text snippets, not only source titles." },
          { title: "Memory System", body: "On top of RAG, Revive adds task preference memory to remember how users apply knowledge to complete work. It captures preferred output structures, citation habits, writing style, and negative preferences, then uses them as soft constraints during generation so results gradually fit real work habits." },
        ],
      },
      {
        id: "agent-project",
        name: "REFINE",
        category: "AI Trend Agent",
        status: "MVP completed",
        description:
          "An AI trend-generation Agent for the AI industry, designed to filter high-value content from noisy information streams and turn it into structured outputs that can be reviewed over time.",
        keywords: ["Multi-Agent", "LLM-as-Judge", "Information Filtering", "Evaluation System", "Prompt Iteration"],
        primaryAction: "View Case",
        secondaryAction: "View Demo",
        demoUrl: "#",
        githubUrl: "https://github.com/hiryan519/refine.git",
        caseStudy: [
          { title: "Problem", body: "AI product managers need to continuously track model, product, technology, and business updates, but daily information sources mix promotional content, SEO articles, and repetitive summaries. The signal-to-noise ratio is low, and traditional reading often leads to information being consumed and forgotten instead of becoming reusable product judgment." },
          { title: "Target Users", body: "AI product managers, operators, and knowledge workers who need to follow AI industry updates every day and turn external information into competitor observations, product judgment, and topic inputs." },
          { title: "Existing Alternatives", body: "Newsletters, social platforms, X, tech media, and Perplexity can help users access information, but they still rely heavily on manual filtering and lack stable quality judgment, structured accumulation, and continuous tracking around personal focus areas." },
          { title: "Product Solution", body: "Refine is not simply an AI tool that automatically writes trending topics. It is an information-filtering and trusted-accumulation system for AI PM workflows. The product aggregates technology media RSS content, then uses Agents to judge, distill, and integrate the information into a low-noise, reviewable AI industry daily brief." },
          { title: "AI Workflow", body: "The workflow is designed as a four-step Agent chain: search, judge, distill, and write. Search handles content recall, judge handles quality scoring, distill creates structured summaries, and write integrates the daily brief. With modular decomposition, recall gaps, misjudgment, summary distortion, and writing quality issues can be diagnosed separately." },
          { title: "Project Highlights", body: "By aggregating RSS sources, Refine improves recall quality. Around the judging Agent, it builds a small-sample cold-start evaluation system, defines a three-dimensional scoring rubric, and calibrates LLM-as-Judge with a human golden set, reaching a 90% human-AI agreement rate." },
        ],
      },
    ],
    faqIntro: {
      titleLines: ["Frequently asked", "questions"],
      description:
        "A quick overview of how I think about AI product work, what this portfolio demonstrates, and where interviewers can start.",
    },
    faq: [
      { question: "Why are you transitioning into AI product management?", answer: "AI is transforming the traditional internet industry. In the past, product validation cycles were long; today, product managers can use large-model capabilities to quickly vibe code interactive versions and validate product value in real scenarios. I want to move into AI because it not only improves the efficiency of validating product ideas, but also places higher demands on scenario judgment, technical understanding, evaluation awareness, and system design. These are the directions I want to develop in over the long term." },
      { question: "What capabilities does this portfolio highlight?", answer: "These two projects mainly demonstrate my ability to narrow scenarios, design AI product workflows, handle model boundaries, and think in terms of evaluation. Refine helped me understand the issues Agents face in information filtering, quality judgment, writing integration, and LLM-as-Judge evaluation. Revive led me to design a complete loop from content import to structured output around RAG, trustworthy citations, task reuse, and preference memory. Compared with simply writing PRDs, I care more about placing AI capabilities into real workflows and validating value through runnable products." },
      { question: "Are these projects only calling large-model capabilities?", answer: "Calling a large model is only the underlying capability. The real product challenge is how to place the model inside a controllable, trustworthy, and verifiable workflow. Refine is not focused on \"letting a model write daily reports,\" but on using a judging Agent and evaluation system to filter low-quality information while handling decision conflicts across multiple Agent modules. Revive is also not simply about \"uploading materials for AI to summarize.\" It uses RAG citations to keep evidence trustworthy, then applies task preference memory so outputs continue to fit the user's habits while avoiding memory contaminating content evidence." },
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
        { label: "Email", value: "hiryanhang@gmail.com", href: links.email },
        { label: "Phone", value: "15958155750", href: links.linkedin },
        { label: "Resume", value: "Download", href: links.resume, isDownload: true },
      ],
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  zh: {
    profile: {
      name: "Hiryan Hang",
      displayName: "黄逸晨",
      role: "AI 产品经理",
      headlineLeft: "产品",
      headlineRight: "经理",
      intro:
        "从真实业务痛点出发，挖掘潜在AI能力需求\n判断需求是否值得做、是否能落地、落地效果如何验证",
      heroTags: ["RAG与记忆系统", "Multi-Agent", "LLM测评体系", "Vibe Coding实践"],
      about: [
        "我是一名从传统互联网产品转向AI产品方向的产品经理。",
        "我正在通过真实项目建立AI产品能力，包括 AI场景判断、Agent工作流设计、模型效果评估调优等。",
        "相比单纯调用模型，我更关注如何设落地一个可验证、可控制、可迭代的AI产品，并通过测试和反馈持续优化。",
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
      available: "求职中",
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
      eyebrow: "WHAT I CAN DO FOR YOU",
      titleLines: ["AI产品", "能力模型"],
      description:
        "从产品经理视角拆解业务场景，完成AI可行性判断、产品方案落地、效果测评迭代，形成完整闭环。",
    },
    services: [
      {
        title: "AI技术理解及场景判断能力",
        items: [
          "理解主流大模型的能力边界与局限，判断哪些业务场景适合引入AI；",
          "结合用户调研与竞品分析，识别真实业务流程中可被AI能力替代或增强的环节，输出可执行的产品方案。",
        ],
      },
      {
        title: "AI产品落地与规划能力",
        items: [
          "将场景判断转化为具体的AI工作流设计，根据任务复杂度选择最优方案；",
          "完成需求拆解、PRD撰写与原型搭建，并通过Vibe Coding工具快速验证想法、迭代产品形态。",
        ],
      },
      {
        title: "模型效果测评及Bad case调优能力",
        items: [
          "设计AI输出的量化评估体系，结合LLM-as-Judge保障输出准确度；",
          "对Bad Case进行归因分析，定位问题针对性迭代。",
        ],
      },
    ],
    about: {
      title: "关于我",
    },
    stats: [
      { value: "02", label: "AI 项目作品" },
      { value: "05+", label: "版本迭代" },
      { value: "30+", label: "测评数据集" },
    ],
    aboutContacts: [
      { label: "电话", value: "15958155750" },
      { label: "邮箱", value: "hiryanhang@gmail.com" },
    ],
    projectsIntro: {
      eyebrow: "Featured projects",
      title: "AI 产品项目",
      description:
        "我从自身实际遇到的问题和痛点出发，结合AI知识学习进程，独立vibe coding并完成了如下项目：",
    },
    projects: [
      {
        id: "revive",
        name: "REVIVE",
        category: "RAG + Memory 工作流",
        status: "已上线",
        description:
          "一个面向知识工作者的历史收藏复用工具，让过去收藏的内容在写方案、做复盘、准备汇报时真正被调用起来，并逐步贴合用户的任务偏好。",
        keywords: ["RAG", "任务偏好记忆", "引用依据", "结构化生成", "知识复用"],
        primaryAction: "查看案例",
        secondaryAction: "查看 Demo",
        demoUrl: "#",
        githubUrl: "https://github.com/hiryan519/revive.git",
        caseStudy: [
          { title: "问题背景", body: "很多知识工作者长期收藏文章、案例、方法论和经验内容，但真正写方案、做复盘、准备汇报时，仍然需要重新翻找、阅读、筛选和总结。问题不只是“找不到内容”，而是历史收藏很难在具体任务发生时转化为可直接使用的工作结果。" },
          { title: "目标用户", body: "有长期收藏习惯，并需要把外部信息转化为方案、复盘、汇报、策划或沟通材料的产品经理、运营人员、市场人员、咨询顾问和内容工作者。" },
          { title: "现有替代方案", body: "用户通常依赖平台收藏夹搜索、稍后读工具、知识库或“手动找资料 + 通用 AI”完成任务。这些方式可以保存或生成内容，但前置整理成本高，结果依据不透明，也难以持续贴合用户自己的输出习惯。" },
          { title: "产品方案", body: "Revive 不做泛化的第二大脑，也不做重型知识管理系统，而是聚焦“任务发生时复用历史收藏”。用户先导入一批内容，在具体任务中基于内容集发起请求，系统输出可复制、可修改、可追溯依据的结构化结果。" },
          { title: "AI 工作流", body: "系统以 RAG 为基础链路：导入内容后进行解析、切分和索引；用户发起任务时，系统基于当前内容集检索相关片段，并生成结构化结果。关键结论需要绑定引用依据，引用展示原文片段，而不只是来源标题。" },
          { title: "记忆系统", body: "在 RAG 链路上增加任务偏好记忆系统，记住用户如何使用知识完成任务。系统会沉淀用户的输出结构、引用方式、表达风格和负向偏好，并在生成时作为软约束参与结果组织，让结果逐步贴合用户的真实工作习惯。" },
        ],
      },
      {
        id: "agent-project",
        name: "REFINE",
        category: "AI热点生成",
        status: "已完成 MVP",
        description:
          "一个面向 AI 行业的热点生成 Agent，用于从高噪声信息流中筛选高价值内容，并沉淀为可持续回顾的结构化输出。",
        keywords: ["Multi-Agent", "LLM-as-Judge", "信息筛选", "评测体系", "Prompt 迭代"],
        primaryAction: "查看案例",
        secondaryAction: "查看Demo",
        demoUrl: "#",
        githubUrl: "https://github.com/hiryan519/refine.git",
        caseStudy: [
          { title: "问题背景", body: "AI 产品经理需要持续跟踪模型、产品、技术和商业动态，但日常信息源中软文、SEO 内容和重复转述混杂，信号噪声比低。传统阅读方式容易“看完即忘”，难以沉淀为可复用的产品判断。" },
          { title: "目标用户", body: "需要每日跟踪 AI 行业动态，并将外部信息转化为竞品观察、产品判断和选题输入的 AI 产品经理、运营人员与知识工作者。" },
          { title: "现有替代方案", body: "公众号、即刻、X、科技媒体和 Perplexity 能帮助用户获取信息，但仍依赖人工筛选，缺少稳定的质量判断、结构化沉淀和面向个人关注方向的持续追踪。" },
          { title: "产品方案", body: "Refine 不是简单的“AI 自动写热点”，而是面向 AI PM 工作流的信息筛选与可信沉淀系统。产品聚合科技媒体 RSS 内容，通过 Agent 判断、提炼和整合，生成低噪声、可回顾的 AI 行业日报。" },
          { title: "AI 工作流", body: "设计搜索、判断、提炼、写作四步 Agent 链路。搜索负责内容召回，判断负责质量评级，提炼负责结构化摘要，写作负责日报整合。模块拆分后，可分别定位召回不足、误判、摘要失真和表达质量问题。" },
          { title: "项目亮点", body: "通过 RSS 信源聚合，解决召回质量差的问题，并围绕判断 Agent 搭建小样本冷启动评测体系，定义三维评分标准，并采用人工黄金集校准 LLM-as-Judge，人机一致率达到 90%。" },
        ],
      },
    ],
    faqIntro: {
      titleLines: ["常见", "问题"],
      description:
        "快速说明我如何理解 AI 产品工作、这个作品集展示了什么，以及面试官可以从哪里开始看。",
    },
    faq: [
      { question: "为什么要转行AI产品经理？", answer: "AI正在革新传统互联网行业，之前的产品验证链路较长，而如今产品经理可以借助大模型能力，快速Vibe Coding落地可交互版本，用真实场景验证产品价值。我希望进入 AI 方向，是因为它不仅提升了产品 idea 的验证效率，并且AI 产品更考验场景判断、技术理解、评测意识和系统设计能力，这正是我希望长期发展的方向。" },
      { question: "这个作品集重点展示什么能力？", answer: "这两个项目主要体现了我的场景收敛、AI 产品链路设计、模型边界处理和评测意识。Refine 让我理解 Agent 在信息筛选、质量判断、写作整合和 LLM-as-Judge 评测中的问题；Revive 则让我围绕 RAG、引用可信、任务复用和偏好记忆，设计一个从内容导入到结构化输出的完整闭环。相比单纯写 PRD，我更关注如何把 AI 能力放进真实工作流，并通过可运行产品验证价值。" },
      { question: "项目只是单纯调用大模型能力吗？", answer: "调用大模型只是底层能力，真正的产品难点在于如何把模型放进可控、可信、可验证的工作流里。Refine 的重点不是“让模型写日报”，而是通过判断 Agent 和评测体系筛掉低质信息，并处理多模块 Agent 的决策冲突。Revive 的重点也不是“上传资料让 AI 总结”，而是通过 RAG 引用机制保证依据可信，再用任务偏好记忆让结果持续贴合用户的输出习惯，同时避免记忆污染内容证据。" },
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
        { label: "Email", value: "hiryanhang@gmail.com", href: links.email },
        { label: "电话", value: "15958155750", href: links.linkedin },
        { label: "简历", value: "下载", href: links.resume, isDownload: true },
      ],
    },
    footer: {
      rights: "保留所有权利。",
    },
  },
} as const;

export type Content = (typeof i18n)[Locale];
export type Project = Content["projects"][number];
