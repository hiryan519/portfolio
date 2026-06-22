export const profile = {
  name: "Hiryan Hang",
  role: "AI Product Manager",
  headlineTop: "AI PRODUCT",
  headlineBottom: "MANAGER",
  intro:
    "I focus on turning ambiguous AI opportunities into real scenarios, product workflows, runnable prototypes, and case studies that can be reviewed.",
  location: "Transitioning into AI Product Management",
  heroTags: ["RAG", "Agent", "Prompt", "Vibe Coding"],
  about: [
    "I am a product manager transitioning from traditional internet products into AI product management.",
    "I am building hands-on experience through real projects around RAG, Agent workflows, Prompt design, AI product evaluation, and Vibe Coding.",
    "Rather than simply calling a model, I care about designing AI product loops that are testable, controllable, and iterative: starting from real scenarios, designing the right AI workflow, building runnable prototypes, and improving through feedback.",
  ],
  links: {
    email: "mailto:hiryanhang@gmail.com",
    linkedin: "tel:15958155750",
    github: "#",
    resume: "#",
  },
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Thinking", href: "#thinking" },
  { label: "Contact", href: "#contact" },
];

export const services = [
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
];

export const stats = [
  { value: "02", label: "Featured AI Projects" },
  { value: "05", label: "Core Capability Areas" },
  { value: "10+", label: "Case Review Dimensions" },
];

export const projects = [
  {
    id: "revive",
    name: "Revive",
    category: "RAG Product",
    status: "Prototype deployed",
    description:
      "A RAG-based AI product that helps users quickly retrieve, distill, and reuse knowledge from their saved content in task-specific scenarios.",
    keywords: ["RAG", "Knowledge Retrieval", "AI Summarization", "Source Citation", "Task-triggered Reuse"],
    highlights: ["Problem", "Solution", "AI Capability", "Validation", "Key Learnings"],
    primaryAction: "View Case",
    secondaryAction: "View Demo",
    demoUrl: "#",
    caseStudy: [
      {
        title: "Problem",
        body: "Users save many articles, posts, videos, and references, but when they need to write, research, or prepare an argument, it is difficult to reactivate those saved materials. Saved content becomes a passive archive rather than a task-ready knowledge asset.",
      },
      {
        title: "Target Users",
        body: "Knowledge workers who frequently organize information, create output, and make product or research judgments, especially product managers, researchers, creators, and learning-driven users.",
      },
      {
        title: "Existing Alternatives",
        body: "Bookmarks, Notion databases, read-it-later tools, and manual search can store content, but they usually lack task context, cross-source synthesis, and traceable citations.",
      },
      {
        title: "Product Solution",
        body: "The product triggers retrieval around a specific task. Users describe their current goal, and the system recalls relevant saved content, distills reusable insights, and preserves source citations to help users form the next output faster.",
      },
      {
        title: "AI Workflow",
        body: "The core capability is powered by RAG: content chunking, vector retrieval, semantic recall, summary generation, and source citation. Prompts constrain output structure and prevent generic summaries.",
      },
      {
        title: "MVP Scope",
        body: "The MVP supports importing a small set of saved content, entering a task, recalling relevant materials, producing structured summaries, and showing sources. Complex knowledge-base management and collaboration are intentionally excluded.",
      },
      {
        title: "Validation Method",
        body: "The prototype is evaluated through retrieval relevance, summary usefulness, citation accuracy, and whether users can complete task drafts faster.",
      },
      {
        title: "Failure & Edge Cases",
        body: "When saved content quality is low, task descriptions are too broad, or source metadata is incomplete, outputs can become vague. Input guidance and confidence signals need further iteration.",
      },
      {
        title: "Key Learnings",
        body: "The key value of Revive is not just search, but making historical content actionable again inside a concrete task. A RAG product should connect recall, synthesis, citation, and user goals in one product loop.",
      },
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
    highlights: ["Problem", "Solution", "Agent Design", "Failure Cases", "Key Learnings"],
    primaryAction: "View Case",
    secondaryAction: "Coming Soon",
    demoUrl: "#",
    caseStudy: [
      {
        title: "Problem",
        body: "Many Agent demos appear capable of completing tasks automatically, but in real workflows they often struggle with unstable planning, tool failures, unclear boundaries, and poor recovery.",
      },
      {
        title: "Target Users",
        body: "Product managers, operators, and knowledge workers who want AI to assist with repetitive information processing, checking, organization, and execution tasks.",
      },
      {
        title: "Existing Alternatives",
        body: "Traditional automation scripts are stable but inflexible, while general chatbots are flexible but hard to control. Agent products need to define boundaries between flexibility and reliability.",
      },
      {
        title: "Product Solution",
        body: "The product starts from a single high-frequency task and divides it into planning, execution, checking, and recovery stages, allowing users to observe what the Agent is doing and intervene at key moments.",
      },
      {
        title: "AI Workflow",
        body: "The Agent plans task steps, uses Tool Calling for execution, relies on rules and prompts to constrain boundaries, and includes retry, fallback, and human confirmation mechanisms.",
      },
      {
        title: "MVP Scope",
        body: "The MVP validates a controllable workflow: task input, plan generation, tool calling, result checking, failure messaging, and human takeover. It does not aim to build a fully autonomous general Agent.",
      },
      {
        title: "Validation Method",
        body: "The project is evaluated through task completion rate, tool-call success rate, recovery quality, user trust, and the frequency of human intervention.",
      },
      {
        title: "Failure & Edge Cases",
        body: "When goals are vague, tools return errors, or the Agent expands the task scope by itself, the system can become unreliable. Boundary control and transparent feedback are core product challenges.",
      },
      {
        title: "Key Learnings",
        body: "The goal of an Agent product is not to make AI look more autonomous, but to make complex tasks observable, pausable, and recoverable. Good Agent experiences require product design before model spectacle.",
      },
    ],
  },
];

export const faq = [
  {
    question: "Why are you moving into AI product management?",
    answer:
      "Because AI products are not only about connecting models. They require redesigning information flows, decision flows, and human-AI collaboration. This direction needs product judgment, prototyping ability, and continuous validation.",
  },
  {
    question: "What capabilities does this portfolio highlight?",
    answer:
      "It highlights RAG, Agent workflows, Prompt design, AI output evaluation, Tool Calling, and fast prototyping with Codex, Claude Code, and Cursor.",
  },
  {
    question: "How do the projects go beyond simple model calls?",
    answer:
      "Each project explains the problem, target users, existing alternatives, AI workflow, MVP scope, validation method, failure boundaries, and key learnings.",
  },
  {
    question: "What should interviewers look at first?",
    answer:
      "Start with the project section, then review the capability section and About section. The projects show how I apply AI capabilities to real task scenarios.",
  },
];

export const articles = [
  {
    date: "2026.06",
    title: "The value of RAG products is not just search, but task-based knowledge reuse",
    description:
      "A reflection on how Revive turns retrieval into an actionable product loop.",
  },
  {
    date: "2026.06",
    title: "In Agent product design, boundary control matters more than automation",
    description:
      "A product breakdown of Agent workflows through planning, tool calling, and failure recovery.",
  },
];

export const contactLinks = [
  { label: "Email", value: "hiryanhang@gmail.com", href: profile.links.email },
  { label: "Phone", value: "15958155750", href: profile.links.linkedin },
  { label: "Resume", value: "Download", href: profile.links.resume },
];
