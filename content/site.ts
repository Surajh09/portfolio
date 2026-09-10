/*
  All page copy lives here, transcribed verbatim from the original static site
  (legacy/index.html). Components render this data; edit text here, not in TSX.
*/

export const meta = {
  title: "Suraj Hemnani — Backend / Platform Engineer",
  description:
    "Suraj Hemnani builds and operates backend systems, accounting integrations, asynchronous processing pipelines and AWS infrastructure for a SaaS platform used by UK accounting workflows.",
  ogDescription:
    "Building and operating backend systems, integrations, asynchronous processing pipelines, and cloud infrastructure.",
  siteName: "Suraj Hemnani",
  author: "Suraj Hemnani",
  jobTitle: "Backend / Platform Engineer",
  address: { locality: "Nagpur", region: "Maharashtra", country: "IN" },
  themeColor: "#f4f4f2",
};

export const sectionLabels = {
  currently: "Currently",
  experience: "Experience",
  glance: "At a glance",
  systems: "Systems I've worked on",
  projects: "Projects",
  skills: "Technical skills",
  education: "Education",
  speaking: "Community & speaking",
  about: "About",
  contact: "Contact",
} as const;

export const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#systems", label: "Systems" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  role: "Backend / Platform Engineer",
  name: "Suraj Hemnani",
  statement:
    "Building and operating backend systems, integrations, asynchronous processing pipelines, and cloud infrastructure.",
  support:
    "Backend / Platform Engineer with 2+ years of experience building and operating SaaS systems for UK accounting workflows.",
  focus: ["Python", "AWS", "Distributed Processing", "Integrations"],
};

export const currently = {
  lead: "Building and operating backend systems for a SaaS platform used by UK accounting workflows.",
  tags: [
    "Python Backend",
    "Accounting Integrations",
    "Async Processing",
    "AWS Infrastructure",
    "CI/CD",
    "Production Reliability",
  ],
};

/* ---- Figures ---- */
export type StatFigure = { kind: "value"; value: string; unit: string };
export type DeltaFigure = {
  kind: "delta";
  before: string;
  after: string;
  unit: string;
  ariaLabel?: string;
};
export type FigureData = StatFigure | DeltaFigure;

/* ---- Experience ---- */
export type CaseBlock =
  | { type: "p"; text: string }
  | { type: "note"; text: string }
  | { type: "sysmap" }
  | { type: "figure"; figure: FigureData };

export type CaseStudy = { title: string; tech: string; blocks: CaseBlock[] };

export const experience = {
  role: {
    company: "EazyCapture",
    title: "Associate Software Developer",
    dates: "May 2025 – Present",
  },
  cases: [
    {
      title: "Accounting integrations",
      tech: "Xero · QuickBooks Online · FreeAgent · Sage · Nango",
      blocks: [
        {
          type: "p",
          text: "Own the integrations with Xero, QuickBooks Online, FreeAgent and Sage, built on a provider-agnostic layer using Nango. The layer covers synchronization of provider data, transformation into the platform's model, storage, tax handling and publishing back to the provider.",
        },
      ],
    },
    {
      title: "Asynchronous bulk publishing",
      tech: "Grouping · checkpoints · rate limiting · retries",
      blocks: [
        {
          type: "p",
          text: "Designed and implemented asynchronous bulk publishing of client documents to accounting providers.",
        },
        { type: "figure", figure: { kind: "value", value: "50", unit: "documents / minute" } },
        {
          type: "p",
          text: "The pipeline groups documents, checkpoints progress, applies provider-specific rate limits, retries failures, runs multi-step workflows, tracks each publish and streams realtime progress updates to the user.",
        },
      ],
    },
    {
      title: "Performance",
      tech: "Profiling · C7 instances · workers · Redis · database",
      blocks: [
        {
          type: "figure",
          figure: {
            kind: "delta",
            before: "~10–15 s",
            after: "<1 s",
            unit: "API response time",
            ariaLabel:
              "API response time reduced from roughly 10 to 15 seconds to under 1 second",
          },
        },
        {
          type: "p",
          text: "Reached sub-second API performance by profiling and identifying compute and infrastructure bottlenecks, then migrating to C7 instances, scaling up the workers and redesigning the Redis and database deployment.",
        },
      ],
    },
    {
      title: "AWS infrastructure",
      tech: "VPC · Beanstalk / EC2 · Aurora · SQS · Lambda · S3",
      blocks: [
        {
          type: "p",
          text: "Designed and implemented the AWS stack for client-facing production environments.",
        },
        { type: "sysmap" },
      ],
    },
    {
      title: "CI/CD and operations",
      tech: "GitHub Actions · Docker · Secrets Manager",
      blocks: [
        {
          type: "p",
          text: "Own the GitHub Actions pipeline from QA to UAT deployments, the Docker builds, AWS Secrets Manager configuration and release rollbacks.",
        },
        {
          type: "figure",
          figure: {
            kind: "delta",
            before: "900 MB",
            after: "600 MB",
            unit: "container image size",
            ariaLabel: "Container image reduced from 900 megabytes to 600 megabytes",
          },
        },
      ],
    },
    {
      title: "Domain engineering",
      tech: "Query domain · DDD",
      blocks: [
        {
          type: "p",
          text: "Designed the Query domain model for accountant-to-client queries mapped to bookkeeping documents, and built its backend implementation.",
        },
      ],
    },
    {
      title: "Incident handling",
      tech: "Integrations · publishing · infrastructure",
      blocks: [
        {
          type: "p",
          text: "Responsible for production incidents on customers' live accounting data. Resolved the majority of escalations myself across the integration, publishing and infrastructure layers.",
        },
      ],
    },
    {
      title: "Django → FastAPI",
      tech: "Solution design · architecture review · DigitalOcean / IaC",
      blocks: [
        {
          type: "p",
          text: "Lead the design of solutions and features for the ongoing Django to FastAPI transition, reviewing implementations for architectural soundness.",
        },
        { type: "note", text: "Currently taking over ownership of the DigitalOcean / IaC platform." },
      ],
    },
  ] satisfies CaseStudy[],
  earlier: {
    company: "Software Developer Intern",
    title:
      "Django backend, React frontend, Linode and Azure Repos operations for an accounting-oriented application",
    dates: "Mar 2024 – Apr 2025",
  },
};

export const sysmap = {
  ariaLabel: "AWS infrastructure system map",
  edge: ["CloudFront", "WAF"],
  vpc: {
    label: "VPC",
    primary: "Elastic Beanstalk / EC2",
    rows: [
      ["RDS Proxy", "Aurora", "ElastiCache"],
      ["SQS", "Lambda"],
    ],
  },
  foundation: ["S3", "IAM", "CloudWatch"],
  caption:
    "Services used in the production stack. Grouping shows role, not the exact network topology.",
};

/* ---- At a glance ---- */
export const glance: FigureData[] = [
  { kind: "value", value: "50", unit: "documents / minute" },
  { kind: "delta", before: "~10–15 s", after: "<1 s", unit: "API performance" },
  { kind: "delta", before: "900 MB", after: "600 MB", unit: "container image" },
  { kind: "value", value: "4", unit: "accounting integrations" },
];

/* ---- Systems ---- */
export const systems = [
  {
    title: "Accounting integrations",
    tech: "Xero · QuickBooks Online · FreeAgent · Sage",
    text: "Provider-agnostic integration layer covering synchronization, transformation, storage, tax handling and publishing.",
    featured: true,
  },
  {
    title: "Async document processing",
    tech: "Background workflows · grouping · checkpoints · retries · rate limiting · realtime progress",
    text: "Long-running publish pipelines that survive provider limits and partial failure, and report progress while they run.",
  },
  {
    title: "Cloud infrastructure",
    tech: "AWS · EC2 · Elastic Beanstalk · Aurora · Redis · SQS · Lambda · S3 · CloudFront/WAF",
    text: "Production environments designed, deployed and operated end to end, including deployments, secrets and rollbacks.",
  },
  {
    title: "Backend architecture",
    tech: "Python · Django · FastAPI · REST APIs · PostgreSQL · DDD",
    text: "Domain models and service code for accounting workflows, across a framework transition.",
  },
];

/* ---- Projects ---- */
export const projects = {
  forge: {
    kind: "Featured",
    title: "Forge",
    desc: "Centralized context bank for organizations, enabling feature-based context ownership and controlled context access across teams and agents.",
    body: "Forge explores how organizational context can be centralized, structured and owned by feature, instead of being fragmented across teams, tools and individual conversations. Ownership follows feature boundaries; access is controlled rather than assumed.",
    tech: "Designed the underlying data model, lifecycle, authorization model and agent interface.",
    terms: ["Context", "Ownership", "Feature boundaries", "Access", "Organizational knowledge"],
  },
  nexus: {
    kind: "Experimental",
    title: "Nexus",
    desc: "An experimental operational middleware system focused on worker orchestration, heartbeat and health tracking, operational context, and deployment correlation.",
    body: "Started from a recurring problem in startup environments: debugging and RCA are fragmented across QA reproduction, application logs, deployment timing and infrastructure signals. Nexus brings those signals into one operational context.",
    tech: "AI-assisted RCA is an eventual direction, not a completed feature.",
  },
  lab: {
    title: "Personal Infrastructure Lab",
    body: "Self-hosted infrastructure on Raspberry Pi and RHEL with automated deployments/backups, networking, firewalling, SSL, access controls, Suricata IDS and eBPF monitoring.",
    tech: "Raspberry Pi · RHEL · Suricata · eBPF",
  },
};

export const forgeDiagram = {
  ariaLabel:
    "Forge concept: features own context; teams and agents access it through controlled boundaries",
  features: { label: "Features", items: ["Feature A", "Feature B", "Feature C"] },
  ownsLink: "owns",
  core: { label: "Context bank", box: "Structured context", sub: "lifecycle · authorization" },
  accessLink: "access",
  consumers: { label: "Consumers", items: ["Teams", "Agents"] },
};

/* ---- Skills ---- */
export const skills = [
  { label: "Languages", items: "Python · SQL · JavaScript" },
  {
    label: "Backend",
    items: "Django · FastAPI · REST APIs · Celery · Async Processing · DDD · Distributed Processing",
  },
  { label: "Data", items: "PostgreSQL · Aurora · MySQL · Redis" },
  {
    label: "Cloud & DevOps",
    items:
      "AWS · EC2 · Elastic Beanstalk · VPC · Aurora · RDS Proxy · ElastiCache · Lambda · SQS · S3 · CloudFront · WAF · IAM · Secrets Manager · CloudWatch · Docker · GitHub Actions · CI/CD · Nginx · DigitalOcean",
  },
  {
    label: "Integrations",
    items:
      "Xero · QuickBooks Online · FreeAgent · Sage · Nango · OAuth · Webhooks · Rate-limit-aware workflows",
  },
];

/* ---- Education / speaking ---- */
export const education = {
  degree: "B.Tech Computer Science and Engineering",
  school: "Jhulelal Institute of Technology",
  dates: "2021 – 2025",
  achievements: [
    "1st Runner-Up, JSW Science Conclave",
    "Technical Co-Incharge, Encypherist",
    "Webmaster, ACM Student Chapter",
  ],
};

export const speaking = {
  role: "Technical Speaker — JIT ACM Student Chapter",
  talks: [
    { title: "Linux 101", text: "Delivered a session on Linux fundamentals and command-line usage." },
    {
      title: "Docker Masterclass",
      text: "Delivered a session covering Docker, Linux basics, containerization, and their use in backend and DevOps workflows.",
    },
  ],
};

/* ---- About / contact / footer ---- */
export const about = {
  paragraphs: [
    "I'm a backend and platform engineer working on a SaaS product for UK accounting workflows. I maintain the integrations with four accounting providers, the pipeline that publishes real client documents to them asynchronously, and the AWS infrastructure the whole thing runs on.",
    "Most of my work sits where application code meets infrastructure: rate-limited third-party APIs, long-running background workflows, database and cache deployments, deployment pipelines and the incidents that come out of all of that. I prefer owning a problem end to end, from the domain model to the instance it runs on.",
    "Outside work I build systems that scratch the same itch: Forge, on how organizations own and share context, and Nexus, on making operational debugging less fragmented.",
  ],
};

export const contact = {
  heading: "Let's build something useful.",
};

export const footer = {
  line: "Suraj Hemnani · Nagpur, Maharashtra",
  note: "Built with Next.js and Tailwind CSS.",
};
