export const profile = {
  name: "Muhammad Shaheer",
  handle: "shaheeranser",
  host: "shaheer@portfolio",
  role: "Full-Stack Software Engineer",
  focus: "Cloud & DevOps · Systems",
  location: "Lahore, Pakistan",
  timezone: "UTC+05:00",
  email: "shaheer.anser@gmail.com",
  phone: "+92 328 5440010",
  phoneHref: "+923285440010",
  github: "https://github.com/shaheeranser",
  linkedin: "https://linkedin.com/in/shaheeranser",
  resume: "/resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/126239320?v=4&s=320",
  company: "Inspirit360",
  availability: "Available for full-time & contract — remote",
  tagline:
    "I build production web apps and the infrastructure that keeps them running — from first commit to a deployed, observed system.",
};

export const navSections = [
  { id: "experience", num: "01", label: "experience" },
  { id: "projects", num: "02", label: "projects" },
  { id: "stack", num: "03", label: "stack" },
  { id: "connect", num: "04", label: "connect" },
] as const;

export const fastfetch = [
  { k: "os", v: "linux — self-hosted" },
  { k: "uptime", v: "shipping since 2022" },
  { k: "shell", v: "zsh · tmux" },
  { k: "editor", v: "vscode · nvim" },
  { k: "de", v: "this portfolio, riced" },
  { k: "monitor", v: "ci → staging → prod" },
  { k: "stack", v: "ts · py · go · docker · k8s" },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  date: string;
  level: "active" | "log";
  bullets: string[];
};

export const roles: Role[] = [
  {
    company: "Inspirit360",
    title: "Software Engineer & Technical Consultant",
    location: "Finland · Remote",
    date: "Jan 2026 — present",
    level: "active",
    bullets: [
      "Founding engineer and sole technical owner of a production invoicing portal serving European SME back-office operations.",
      "Built the platform end to end on Next.js, FastAPI and PostgreSQL — from an empty repository to a live production service.",
      "Own the data models, API surface and deployment workflow; advise leadership on technical service expansion.",
    ],
  },
  {
    company: "Alpha Network",
    title: "Machine Learning Intern",
    location: "Remote",
    date: "Aug 2025",
    level: "log",
    bullets: [
      "Built an AI customer-support chatbot, fine-tuning DistilBERT for intent classification and FlanT5 for response generation behind a Flask API.",
      "Synthetically expanded the training corpus to lift intent coverage against sparse support logs.",
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  wire: string;
  stack: string[];
  description: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "watcher",
    kind: "daemon",
    wire: "log → local-llm",
    stack: ["Go", "Docker", "Ollama"],
    description:
      "Self-hosted daemon that tails your logs and explains crashes with a small local LLM — no cloud calls, no pasting stack traces into a chatbot.",
    href: "https://github.com/shaheeranser/watcher",
    featured: true,
  },
  {
    name: "Exam Proctoring Platform",
    kind: "app",
    wire: "moodle → lti1.3",
    stack: ["React", "TypeScript", "Express", "MongoDB", "Docker", "MinIO"],
    description:
      "LTI 1.3 exam platform that runs inside Moodle, proctoring in-browser with TensorFlow.js and MediaPipe; violation snapshots land in self-hosted MinIO.",
    href: "https://github.com/shaheeranser/exam-proctor",
    featured: true,
  },
  {
    name: "CI/CD & Kubernetes Pipeline",
    kind: "pipeline",
    wire: "commit → aks",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "Azure ACR/AKS"],
    description:
      "Three-service FastAPI stack shipped by one pipeline: Postgres-backed CI, images to ACR, AKS deploys, and ephemeral per-PR staging with smoke tests.",
    href: "https://github.com/shaheeranser/github-actions-demo",
    featured: true,
  },
  {
    name: "relaybox",
    kind: "network",
    wire: "event → webhook",
    stack: ["Python", "HMAC-SHA256", "Docker"],
    description:
      "Self-hosted outbound webhook delivery: fan-out, exponential-backoff retries, HMAC-SHA256 request signing, and a durable audit trail of every attempt.",
    href: "https://github.com/shaheeranser/relaybox",
    featured: true,
  },
  {
    name: "jattmail",
    kind: "network",
    wire: "smtp → tls",
    stack: ["Python", "SMTP", "TLS"],
    description:
      "SMTP server written from scratch — TLS session handling and a minimal test client, built to understand the protocol below the library.",
    href: "https://github.com/shaheeranser/jattmail",
    featured: true,
  },
  {
    name: "reamify",
    kind: "library",
    wire: "pdf → xlsx",
    stack: ["TypeScript", "Node.js", "Streaming"],
    description:
      "MIT library that turns PDF tables into XLSX workbooks with streaming writers, so memory stays bounded on large documents.",
    href: "https://github.com/shaheeranser/reamify",
    featured: true,
  },
];

export const alsoShipped: Project[] = [
  {
    name: "Invoicing portal · Inspirit360",
    kind: "product",
    wire: "private",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    description:
      "Production invoicing portal for European SME back-office teams, built end to end as founding engineer.",
  },
  {
    name: "personal-mail-server",
    kind: "infra",
    wire: "postfix → dovecot",
    stack: ["Shell", "Docker", "Postfix", "Dovecot"],
    description:
      "Self-hosted mail stack for a personal domain — Docker-MailServer, Postfix and Dovecot.",
    href: "https://github.com/shaheeranser/personal-mail-server",
  },
  {
    name: "errex",
    kind: "cli",
    wire: "stderr → fix",
    stack: ["Python", "LLM", "Terminal"],
    description:
      "Terminal UI that pipes error logs to an LLM and returns plain-language fixes without leaving the shell. Go rewrite in progress.",
    href: "https://github.com/shaheeranser/errex",
  },
  {
    name: "hijri-api",
    kind: "data",
    wire: "json → static",
    stack: ["TypeScript", "JSON"],
    description:
      "Open, verified and auditable Hijri calendar data for Pakistan, served as static JSON.",
    href: "https://github.com/shaheeranser/hijri-api",
  },
  {
    name: "Lookvisa",
    kind: "product",
    wire: "private",
    stack: ["React", "Express", "MongoDB"],
    description:
      "Commercial platform connecting investors with investment seekers; designed the core API architecture and data models.",
  },
];

export type Contribution = {
  status: string;
  state: "merged" | "open" | "closed";
  title: string;
  repo: string;
  href: string;
};

export const contributions: Contribution[] = [
  {
    status: "merged",
    state: "merged",
    title: "Rotation-aware table-cell hit-testing for slides",
    repo: "genspark-ai/genoffice · 7.6k★",
    href: "https://github.com/genspark-ai/genoffice/pull/171",
  },
  {
    status: "open pr",
    state: "open",
    title: "perf(tables): cut chart detection off quadratic paths",
    repo: "firecrawl/pdf-inspector",
    href: "https://github.com/firecrawl/pdf-inspector/pull/613",
  },
  {
    status: "open issue",
    state: "open",
    title: "High extraction time and memory usage in @firecrawl/pdf-inspector",
    repo: "firecrawl/pdf-inspector · #585",
    href: "https://github.com/firecrawl/pdf-inspector/issues/585",
  },
  {
    status: "open pr",
    state: "open",
    title: "Add shaheeranser to Cloud Native Security Pakistan members",
    repo: "Cloud-Native-Security-Pakistan",
    href: "https://github.com/Cloud-Native-Security-Pakistan/becoming-a-member/pull/25",
  },
];

export const skills: Array<{ label: string; items: string[] }> = [
  { label: "languages", items: ["TypeScript", "Python", "Go", "C++", "SQL", "Bash"] },
  { label: "frontend", items: ["React", "Next.js", "Vite", "HTML5", "CSS3"] },
  { label: "backend", items: ["FastAPI", "Node.js", "Express", "Flask"] },
  { label: "data", items: ["PostgreSQL", "MongoDB", "MySQL", "MinIO"] },
  {
    label: "cloud & devops",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Linux", "Caddy", "Git"],
  },
  {
    label: "ml & observability",
    items: ["TensorFlow", "TensorFlow.js", "MediaPipe", "NumPy", "pandas", "scikit-learn"],
  },
];

export const education = [
  {
    degree: "BSc Computer Systems",
    school: "Riphah International University",
    date: "2024 — 2026",
    detail:
      "CGPA 3.71/4.0 · exchange semester at Multimedia University (MMU), Cyberjaya, Malaysia (Apr–Jul 2026).",
  },
  {
    degree: "Associate Degree, Computer Science",
    school: "Riphah International University",
    date: "2022 — 2024",
    detail: "CGPA 3.98/4.0.",
  },
];

export const certifications = [
  { name: "OCI AI Infrastructure Associate", issuer: "Oracle University", date: "2025" },
  { name: "Google AI Essentials", issuer: "Coursera", date: "Aug 2025" },
  {
    name: "AI for Brain-Controlled Applications",
    issuer: "NRG",
    date: "Jul 2025",
  },
];

export const contactLinks = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "phone", value: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
  { label: "github", value: "github.com/shaheeranser", href: profile.github, external: true },
  {
    label: "linkedin",
    value: "linkedin.com/in/shaheeranser",
    href: profile.linkedin,
    external: true,
  },
];
