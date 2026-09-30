import type { IconName } from "@/lib/icons";

/* ==========================================================================
   PORTFOLIO CONTENT — edit this single file to update the whole website.
   No component contains hardcoded content.
   ========================================================================== */

// ───────────────────────── Things YOU must replace ─────────────────────────

// Your LinkedIn profile. Used in navbar, hero, contact and footer.
export const LINKEDIN_URL = "https://www.linkedin.com/in/rohit-s-188b0b16a";

// Optional. Leave as "" to hide every GitHub link on the site.
export const GITHUB_URL = "";

// Put your resume PDF at /public/Rohit_Singh_Resume.pdf (used by "Download Resume").
export const RESUME_PATH = "/Rohit_Singh_Resume.pdf";

// Replace /public/profile.jpg with your photo (recommended 800x800, square).
export const PROFILE_IMAGE_PATH = "/profile.jpg";

// Your deployed URL. Better: set NEXT_PUBLIC_SITE_URL in Vercel env vars.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rohit-singh-qa.vercel.app").replace(/\/$/, "");

// ───────────────────────────────── Types ─────────────────────────────────

export interface Stat { value: number; prefix?: string; suffix: string; label: string }
export interface NavLink { label: string; href: string }
export interface IconCard { icon: IconName; title: string; description: string }
export interface Achievement { metric: string; label: string; icon: IconName }
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  focus: string;
  domains: string[];
  snapshotLabel: string;
  current?: boolean;
  bullets: string[];
}
export interface Project {
  slug: string;
  title: string;
  company: string;
  category: string;
  summary: string;
  tags: string[];
  metrics: string[];
  problem: string;
  role: string;
  approach: string;
  impact: string;
  featured?: boolean;
}
export interface Skill { name: string; icon: IconName }
export interface SkillCategory { id: string; title: string; icon: IconName; skills: Skill[] }

// ───────────────────────────────── Profile ─────────────────────────────────

export const profile = {
  name: "Rohit Singh",
  initials: "RS",
  title: "Senior QA Engineer & Founding QA Leader | AI-Augmented Quality Specialist",
  rotatingTitles: ["Senior QA Engineer", "Founding QA Leader", "AI-Augmented Quality Specialist"],
  location: "Mumbai, India",
  email: "rsingh.ak95@gmail.com",
  phone: "+91 96536 38599",
  phoneHref: "+919653638599",
  certification: "ISTQB Certified Tester – Foundation Level (CTFL)",
  careerStart: "March 2017",
  availability: "Available for opportunities",
  targeting: ["Senior QA Engineer", "QA Lead / Head of QA", "AI Quality Specialist", "Founding QA"],
  summary:
    "QA Leader with 9+ years building quality ecosystems from the ground up across SaaS, mobile, audio, logistics, and video platforms. Expert in AI-augmented testing using Claude, ChatGPT and Gemini for automated test generation, edge-case discovery, regression orchestration, and LLM/model accuracy validation. Hands-on with MCP (Model Context Protocol) for agent-driven QA workflows. Proven track record leading teams, mentoring engineers, and delivering critical large-scale projects on time, equally strong as an individual contributor.",
  heroIntro:
    "QA Leader with 9+ years building quality ecosystems from the ground up across SaaS, mobile, audio, logistics and video platforms. Expert in AI-augmented testing with Claude, ChatGPT and Gemini, and hands-on with MCP for agent-driven QA workflows.",
  siteDescription:
    "Portfolio of Rohit Singh, Senior QA Engineer and Founding QA Leader with 9+ years of experience in AI-augmented testing, MCP agent-driven QA and LLM validation. Based in Mumbai, India.",
};

export const stats: Stat[] = [
  { value: 9, suffix: "+", label: "Years in QA" },
  { value: 8, suffix: "", label: "Organisations" },
  { value: 60, suffix: "%+", label: "Faster test authoring" },
  { value: 40, suffix: "%", label: "Faster regression cycles" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroBadges = ["ISTQB Certified", "9+ Years"];

// ───────────────────────────── Current role: Beamer ─────────────────────────────

export const beamer = {
  company: "Beamer",
  role: "Founding QA Engineer (Lead & Individual Contributor)",
  meta: "SaaS + AI Platform",
  period: "May 2025 – Present",
  intro:
    "Rohit built the entire QA function at Beamer from scratch, establishing processes, tooling and an AI-first testing culture for a global SaaS product.",
  responsibilities: [
    {
      icon: "ShieldCheck",
      title: "QA Function Ownership",
      description:
        "Built the QA department from zero; defined test strategy, release guidelines and quality gates; owns the global SaaS release cycle.",
    },
    {
      icon: "Sparkles",
      title: "AI-Powered Test Automation",
      description:
        "Uses Claude, ChatGPT and Gemini to auto-generate test cases, edge cases and Postman collections from PRDs, and Playwright/Selenium/Appium scripts, making test authoring 60%+ faster.",
    },
    {
      icon: "Workflow",
      title: "Intelligent Regression Management",
      description:
        "Architected an AI-curated, risk-prioritised regression suite (based on code diffs and defect patterns), cutting regression cycles by about 40%.",
    },
    {
      icon: "Bot",
      title: "Agent-Driven QA with MCP",
      description:
        "Pioneered MCP (Model Context Protocol) server integration so AI agents can autonomously run tests, query Jira, file bugs and generate reports.",
    },
    {
      icon: "Brain",
      title: "LLM & AI Feature Validation",
      description:
        "Led QA for Smartflow AI and AI Themes, covering hallucination detection, prompt regression, response consistency, context retention and model-drift testing.",
    },
    {
      icon: "Chrome",
      title: "Chrome Extension (CRX) Testing",
      description:
        "Full end-to-end testing and release management of the Chrome Extension, ensuring stability across Chrome versions.",
    },
    {
      icon: "Users",
      title: "Quality Leadership",
      description:
        "Acts as both hands-on individual contributor and QA lead, collaborating with product, engineering and support.",
    },
  ] satisfies IconCard[],
  achievements: [
    { metric: "60%", label: "Reduction in production bugs", icon: "Bug" },
    { metric: "0", label: "Critical regressions in the last 3 releases", icon: "ShieldCheck" },
    { metric: "200+", label: "Edge cases and Postman suites generated from PRDs", icon: "FlaskConical" },
    { metric: "60–65%", label: "Less test-authoring effort", icon: "Timer" },
    { metric: "~40%", label: "Faster regression cycles", icon: "Gauge" },
  ] satisfies Achievement[],
  tech: ["Claude", "ChatGPT", "Gemini", "MCP", "Playwright", "Selenium", "Appium", "Postman", "Jira", "Chrome DevTools"],
};

// ───────────────────────────────── Experience ─────────────────────────────────

export const domainFilters = ["All", "SaaS & AI", "Mobile", "Logistics", "Video", "AdTech", "Audio"] as const;

export const experience: ExperienceItem[] = [
  {
    id: "beamer",
    company: "Beamer",
    role: "Founding QA Engineer (Lead & IC)",
    period: "May 2025 – Present",
    duration: "~1.4 years",
    focus: "SaaS + AI Platform",
    domains: ["SaaS & AI"],
    snapshotLabel: "2025 – Now",
    current: true,
    bullets: [
      "Built QA dept from scratch; reduced production bugs by 60%; zero critical regressions in last 3 releases",
      "Led QA for Smartflow AI & AI Themes: LLM validation (hallucination detection, prompt regression, response consistency)",
      "Used Claude + ChatGPT to auto-generate 200+ edge cases and Postman suites from PRDs; cut test authoring ~60–65%",
      "Pioneered agent-driven QA via MCP servers: AI agents run tests, query Jira, file bugs, generate reports",
      "Architected AI-curated, risk-prioritised regression suite (~40% faster cycles); owned global SaaS release cycle",
      "Full E2E Chrome Extension (CRX) testing and release management",
    ],
  },
  {
    id: "pocket-fm",
    company: "Pocket FM",
    role: "QA Engineer 2",
    period: "Aug 2023 – Feb 2025",
    duration: "~1.5 years",
    focus: "Web, Android & iOS",
    domains: ["Audio", "Mobile"],
    snapshotLabel: "2023 – 2025",
    bullets: [
      "Led task allocation, test-case reviews, sprint planning, PRD calls and release cycles",
      "Defined mandatory release guidelines: automation runs, monkey testing for crashes, regression verification",
      "Ran bi-weekly bug bashes; monitored Crashlytics, customer-support issues and alerts to catch problems early",
      "Maintained Postman API automation and evolved test strategies to avoid repetitive testing",
      "Led a 3-engineer QA team on the complete Android/iOS app revamp with zero P0 bugs at launch",
    ],
  },
  {
    id: "zepto",
    company: "Zepto",
    role: "QA Engineer",
    period: "Last Mile team",
    duration: "~10 months",
    focus: "Rider App & Rider Management Dashboard",
    domains: ["Logistics", "Mobile"],
    snapshotLabel: "~10 months",
    bullets: [
      "QA for web and mobile apps in the Last Mile team",
      "Owned QA for a Rider Management System built from scratch, including platform migration",
      "Built 400+ API test cases; applied LLM risk-scoring to cut post-release incidents",
    ],
  },
  {
    id: "invideo",
    company: "InVideo",
    role: "Senior QA",
    period: "Video Editing App Revamp",
    duration: "~6 months",
    focus: "Android & iOS",
    domains: ["Video", "Mobile"],
    snapshotLabel: "~6 months",
    bullets: [
      "Owned QA for the complete revamp of the FILMR app, relaunched as InVideo",
      "Covered voice-over, effects, filters and core editing features",
      "Validated AI-driven video rendering and AI-assisted synthetic data for 50+ video templates",
    ],
  },
  {
    id: "media-net",
    company: "Media.net",
    role: "Senior Test Engineer",
    period: "Android Launchers",
    duration: "~1.5 years",
    focus: "Android products",
    domains: ["AdTech", "Mobile"],
    snapshotLabel: "~1.5 years",
    bullets: [
      "Owned all QA activities for multiple Android launcher products built from scratch",
      "Validated the user-facing features that make each launcher useful",
    ],
  },
  {
    id: "clevertap",
    company: "CleverTap",
    role: "QA Engineer",
    period: "Feb 2020 – Nov 2020",
    duration: "~10 months",
    focus: "Retention Platform & SDK",
    domains: ["AdTech", "SaaS & AI", "Mobile"],
    snapshotLabel: "2020",
    bullets: [
      "Handled all QA roles for the retention platform and the SDK",
      "Tested SDK integration (event tracking, push notifications) in large partner apps such as Hotstar and Dream11 on iOS and Android",
    ],
  },
  {
    id: "neosoft",
    company: "Neosoft Technologies",
    role: "Test Engineer",
    period: "Sept 2018 – Jan 2020",
    duration: "~1.3 years",
    focus: "Two clients: Shaadi.com & Sony Pictures",
    domains: ["Mobile", "Web"],
    snapshotLabel: "2018 – 2020",
    bullets: [
      "Worked with two clients: Shaadi.com and Sony Pictures",
      "Shaadi.com: tested the mobile apps and the web application, handling releases, feature testing and backend testing",
      "Shaadi.com: tested the in-house A/B experimentation dashboard (feature tracking and performance) and the Node upgrade, verifying all backend API services it impacted",
      "Sony Pictures: tested OTT apps",
      "Received the Star Employee Award",
    ],
  },
  {
    id: "ossp",
    company: "OSSPL (Ornate Software Solution)",
    role: "Software Tester",
    period: "Mar 2017 – Sept 2018",
    duration: "~1.7 years",
    focus: "\"Make in India\" project",
    domains: ["Web"],
    snapshotLabel: "2017 – 2018",
    bullets: ["Tested static web applications for GIGW (Guidelines for Indian Government Websites) compliance"],
  },
];

// ───────────────────────────── AI-powered capabilities ─────────────────────────────

export const capabilities: IconCard[] = [
  {
    icon: "FlaskConical",
    title: "Edge Case Mining",
    description: "Claude, ChatGPT and Gemini turn PRDs into 200+ edge cases and ready-to-run Postman suites.",
  },
  {
    icon: "Workflow",
    title: "AI Regression Management",
    description: "Risk-prioritised regression suites built from code diffs and defect patterns, about 40% faster.",
  },
  {
    icon: "Bot",
    title: "MCP Integration",
    description: "Agent-driven QA through MCP: agents run tests, query Jira, file bugs and generate reports.",
  },
  {
    icon: "Brain",
    title: "LLM Accuracy & Model Testing",
    description: "Hallucination detection, prompt regression, response consistency and model-drift validation.",
  },
  {
    icon: "Database",
    title: "Synthetic Data Generation",
    description: "AI-assisted synthetic data for realistic coverage, used across 50+ video templates at InVideo.",
  },
  {
    icon: "Gauge",
    title: "AI Tool Benchmarking",
    description: "Scorecards that compare AI tools on test quality, accuracy and speed before adopting them.",
  },
];

// ───────────────────────────────── Projects ─────────────────────────────────

export const projectCategories = ["All", "AI & LLM", "Mobile", "Web & Platform", "Logistics"] as const;

export const projects: Project[] = [
  {
    slug: "beamer-ai-qa-framework",
    title: "Beamer AI-Powered QA Framework",
    company: "Beamer",
    category: "AI & LLM",
    summary: "LLM-driven test generation, MCP agents and AI regression: 60% faster authoring, 40% faster regression.",
    tags: ["Claude", "ChatGPT", "Gemini", "MCP", "Postman", "Playwright"],
    metrics: ["60%+ faster authoring", "~40% faster regression", "60% fewer prod bugs"],
    problem:
      "Beamer had no QA function, and a fast-moving global SaaS product needed repeatable quality without slowing releases.",
    role: "Founding QA Engineer: built the framework, tooling and process as lead and individual contributor.",
    approach:
      "Generated test cases, edge cases and Postman collections from PRDs with Claude, ChatGPT and Gemini. Built an AI-curated regression suite ranked by code diffs and defect patterns. Connected AI agents through MCP servers to run tests, query Jira, file bugs and produce reports.",
    impact:
      "Test authoring became 60%+ faster, regression cycles about 40% faster, production bugs fell 60%, and the last 3 releases shipped with zero critical regressions.",
    featured: true,
  },
  {
    slug: "beamer-smartflow-ai-themes",
    title: "Beamer Smartflow AI & AI Themes",
    company: "Beamer",
    category: "AI & LLM",
    summary: "LLM validation: hallucination detection, prompt regression and drift testing.",
    tags: ["LLM Testing", "Prompt Regression", "Model Drift", "Prompt Engineering"],
    metrics: ["Hallucination detection", "Prompt regression", "Drift testing"],
    problem:
      "AI features return non-deterministic output, so classic pass/fail assertions cannot prove they are accurate and safe to ship.",
    role: "Led QA for both AI features, from test design to release sign-off.",
    approach:
      "Defined checks for hallucination detection, prompt regression, response consistency, context retention and model drift, and re-ran them whenever prompts or models changed.",
    impact:
      "AI features were released with a repeatable validation process instead of ad-hoc manual review.",
  },
  {
    slug: "beamer-chrome-extension",
    title: "Beamer Chrome Extension (CRX)",
    company: "Beamer",
    category: "Web & Platform",
    summary: "End-to-end testing and release management across Chrome versions.",
    tags: ["Chrome Extension", "Chrome DevTools", "Release Management", "E2E"],
    metrics: ["Cross-version stability", "E2E ownership"],
    problem:
      "A browser extension must keep working as Chrome changes, and a broken release reaches users immediately.",
    role: "Owned E2E testing and release management for the extension.",
    approach:
      "Tested the extension end to end, checked behaviour across Chrome versions with Chrome DevTools, and gated every release on the results.",
    impact: "Stable extension releases across Chrome versions.",
  },
  {
    slug: "pocket-fm-app-revamp",
    title: "Pocket FM E2E App Revamp",
    company: "Pocket FM",
    category: "Mobile",
    summary: "3-engineer QA team, zero P0 at launch, JMeter load test with 50K concurrent users, +35% coverage.",
    tags: ["Android", "iOS", "JMeter", "Postman", "Crashlytics"],
    metrics: ["Zero P0 at launch", "50K concurrent users", "+35% coverage"],
    problem:
      "A complete Android and iOS revamp of a large audio platform had to launch without critical defects and hold up under heavy load.",
    role: "QA Engineer 2: led a 3-engineer QA team, task allocation, test-case reviews, sprint planning and release cycles.",
    approach:
      "Set mandatory release guidelines (automation runs, monkey testing, regression verification), ran bi-weekly bug bashes, load tested with JMeter at 50K concurrent users, and used AI-generated edge cases to widen coverage.",
    impact: "Launched with zero P0 bugs and 35% more test coverage from AI-generated edge cases.",
    featured: true,
  },
  {
    slug: "zepto-rider-logistics-migration",
    title: "Zepto Rider Logistics Engine Migration",
    company: "Zepto",
    category: "Logistics",
    summary: "100K+ daily rides, 400+ API test cases, 45% fewer post-release incidents.",
    tags: ["API Testing", "Postman", "LLM Risk Scoring", "Android"],
    metrics: ["100K+ daily rides", "400+ API tests", "45% fewer incidents"],
    problem:
      "The Rider Management System was built from scratch and migrated to a new platform while serving 100K+ rides every day.",
    role: "QA Engineer in the Last Mile team, owning QA for the Rider App and Rider Management Dashboard.",
    approach:
      "Built 400+ API test cases and applied LLM risk-scoring to focus testing on the riskiest changes.",
    impact: "45% fewer post-release incidents through the migration.",
    featured: true,
  },
  {
    slug: "invideo-filmr-revamp",
    title: "InVideo (FILMR) Revamp & AI Rendering",
    company: "InVideo",
    category: "Mobile",
    summary: "AI video rendering pipeline validation and synthetic data for 50+ templates.",
    tags: ["Android", "iOS", "AI Rendering", "Synthetic Data"],
    metrics: ["50+ templates", "AI rendering validated"],
    problem:
      "The FILMR editing app was fully revamped and relaunched as InVideo, with AI-driven rendering to verify.",
    role: "Senior QA: owned QA for the complete revamp on Android and iOS.",
    approach:
      "Covered voice-over, effects, filters and core editing, validated the AI-driven rendering pipeline, and used AI-assisted synthetic data across 50+ video templates.",
    impact: "A validated relaunch with broad template coverage.",
  },
  {
    slug: "clevertap-sdk-integrations",
    title: "CleverTap Enterprise SDK Integrations",
    company: "CleverTap",
    category: "Web & Platform",
    summary: "Custom test harnesses and Hotstar and Dream11 integrations.",
    tags: ["SDK", "iOS", "Android", "Push Notifications", "Event Tracking"],
    metrics: ["Hotstar", "Dream11", "iOS + Android"],
    problem:
      "Enterprise partner apps depend on the SDK for event tracking and push notifications, so integration bugs hit millions of users.",
    role: "QA Engineer handling all QA for the retention platform and the SDK.",
    approach:
      "Built custom test harnesses and tested SDK integration, including event tracking and push notifications, in large partner apps such as Hotstar and Dream11.",
    impact: "Verified SDK behaviour in high-traffic partner apps on both platforms.",
  },
  {
    slug: "media-net-android-launchers",
    title: "Media.net Android Launchers",
    company: "Media.net",
    category: "Mobile",
    summary: "End-to-end QA of launcher products built from scratch.",
    tags: ["Android", "Launcher", "Manual Testing", "Automation"],
    metrics: ["Multiple launchers", "QA from scratch"],
    problem: "New Android launcher products needed quality ownership from the first build.",
    role: "Senior Test Engineer owning all QA activities.",
    approach: "Validated the user-facing features that make each launcher useful, from launch through release.",
    impact: "Multiple launcher products shipped with end-to-end QA ownership.",
  },
  {
    slug: "neosoft-shaadi-sony",
    title: "Neosoft: Shaadi.com & Sony Pictures",
    company: "Neosoft Technologies",
    category: "Mobile",
    summary: "Shaadi.com mobile, web and backend testing with release ownership, the A/B experimentation dashboard and Node upgrade, plus Sony Pictures OTT apps.",
    tags: ["Mobile Apps", "Web", "OTT", "Backend Testing", "A/B Testing", "Node"],
    metrics: ["2 clients", "Release handling", "Star Employee Award"],
    problem:
      "Two clients needed reliable releases across mobile, web and backend: a matrimony platform with an in-house A/B experimentation dashboard and a Node upgrade, and OTT apps for a major studio.",
    role: "Test Engineer across both accounts. On Shaadi.com: mobile apps, web application, release handling, feature testing and backend testing. On Sony Pictures: OTT apps.",
    approach:
      "Handled releases and feature testing for the Shaadi.com apps and web application, tested the A/B dashboard's feature tracking and performance, and verified every backend API service affected by the Node upgrade. Tested the OTT apps for Sony Pictures.",
    impact: "Safe releases and a smooth Node upgrade for Shaadi.com, solid OTT app coverage for Sony Pictures, and the Star Employee Award.",
  },
  {
    slug: "ossp-make-in-india-gigw",
    title: "OSSPL: Make in India GIGW Compliance Testing",
    company: "OSSPL",
    category: "Web & Platform",
    summary: "GIGW compliance testing of static government web applications.",
    tags: ["GIGW", "Accessibility", "Web", "Compliance"],
    metrics: ["GIGW compliance"],
    problem:
      "Government websites must meet GIGW (Guidelines for Indian Government Websites) standards before going live.",
    role: "Software Tester on the Make in India project.",
    approach: "Tested static web applications against GIGW compliance requirements.",
    impact: "Compliant government web applications.",
  },
];

// ───────────────────────────────── Skills ─────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & LLM",
    icon: "Brain",
    skills: [
      { name: "Claude", icon: "Sparkles" },
      { name: "ChatGPT", icon: "Sparkles" },
      { name: "Gemini", icon: "Sparkles" },
      { name: "MCP (Model Context Protocol)", icon: "Bot" },
      { name: "Prompt Engineering", icon: "Terminal" },
    ],
  },
  {
    id: "automation",
    title: "Automation & API",
    icon: "Code2",
    skills: [
      { name: "Playwright", icon: "Code2" },
      { name: "Selenium", icon: "Code2" },
      { name: "Appium", icon: "Smartphone" },
      { name: "Postman / Newman", icon: "Send" },
      { name: "SQL", icon: "Database" },
      { name: "JMeter", icon: "Gauge" },
    ],
  },
  {
    id: "mobile-web",
    title: "Mobile & Web",
    icon: "Smartphone",
    skills: [
      { name: "Android", icon: "Smartphone" },
      { name: "iOS", icon: "Smartphone" },
      { name: "BrowserStack", icon: "Globe" },
      { name: "Charles Proxy", icon: "Network" },
      { name: "Firebase", icon: "Flame" },
      { name: "Crashlytics", icon: "Bug" },
      { name: "A/B Experiments", icon: "Shuffle" },
    ],
  },
  {
    id: "process",
    title: "Project & Process",
    icon: "ClipboardCheck",
    skills: [
      { name: "Jira", icon: "ClipboardCheck" },
      { name: "Agile / Kanban", icon: "Layers" },
      { name: "Release Management", icon: "Rocket" },
      { name: "Test Strategy", icon: "Target" },
      { name: "Bug Bashes", icon: "Bug" },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    icon: "Users",
    skills: [
      { name: "Team Lead", icon: "Users" },
      { name: "Mentoring", icon: "HeartHandshake" },
      { name: "0-to-1 QA Infrastructure Setup", icon: "Boxes" },
    ],
  },
];

export const exploring = [
  "Hallucination detection",
  "Prompt regression",
  "Model drift",
  "Synthetic data generation",
  "AI tool benchmarking scorecards",
];

// ───────────────────────────────── About ─────────────────────────────────

export const about = {
  story: [
    "I started in March 2017 as a manual tester on Make in India projects, checking government websites against GIGW compliance rules. That first job taught me to read a product the way a user does, and to write down exactly what I saw.",
    "Over the next years I moved through Neosoft, CleverTap, Media.net, InVideo, Zepto and Pocket FM. I learned automation, API testing and mobile at scale, led a 3-engineer team through a full app revamp with zero P0 bugs, and grew from a tester into someone who sets the quality bar for a release.",
    "Today I am the founding QA engineer at Beamer, where I built the QA function from zero and made AI a normal part of testing: Claude, ChatGPT and Gemini for test generation, MCP agents for QA workflows, and structured validation for LLM features. I am equally happy leading a team or writing the test myself.",
  ],
  education: [
    { icon: "GraduationCap", title: "B.Sc. Information Technology", detail: "Mumbai University" },
    { icon: "BadgeCheck", title: "ISTQB Certified Tester – Foundation Level (CTFL)", detail: "ISTQB" },
    { icon: "BadgeCheck", title: "Professional Software Test Engineer", detail: "Squad Info Tech" },
  ] satisfies { icon: IconName; title: string; detail: string }[],
  awards: [{ title: "Star Employee Award", detail: "Neosoft Technologies" }],
  lookingFor: ["Senior QA Engineer", "QA Lead / Head of QA", "AI Quality Specialist", "Founding QA roles"],
  values: [
    { icon: "Rocket", title: "Quality from day zero", description: "Quality is designed in with the first requirement, not tested in at the end." },
    { icon: "Code2", title: "Automation first", description: "Anything repeated twice becomes a script, so people spend time on judgement." },
    { icon: "Sparkles", title: "AI-augmented", description: "AI drafts and explores; I review, verify and decide." },
    { icon: "HeartHandshake", title: "Mentorship", description: "A strong QA team is built by teaching, reviewing and sharing context." },
    { icon: "LineChart", title: "Data-driven decisions", description: "Defect patterns, crash data and release metrics decide where testing goes." },
  ] satisfies IconCard[],
};

// ───────────────────────────────── Pages / SEO ─────────────────────────────────

export const seo = {
  home: { title: "Rohit Singh | Senior QA Engineer & Founding QA Leader", description: profile.siteDescription },
  experience: {
    title: "Experience",
    description: "Eight organisations, 9+ years: Beamer, Pocket FM, Zepto, InVideo, Media.net, CleverTap, Neosoft and OSSPL.",
  },
  projects: {
    title: "Projects",
    description: "AI-powered QA frameworks, LLM validation, app revamps and SDK integrations delivered by Rohit Singh.",
  },
  skills: {
    title: "Tools & Technologies",
    description: "AI and LLM tools, MCP, Playwright, Selenium, Appium, Postman, JMeter and QA leadership skills.",
  },
  about: {
    title: "About Me",
    description: "The journey of Rohit Singh from manual tester in 2017 to founding QA leader in the AI era.",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Rohit Singh for Senior QA, QA Lead, AI Quality and Founding QA opportunities.",
  },
};

export const cta = {
  title: "Let's build quality into your product.",
  description: "Hiring for QA leadership or AI quality? Send a note and I will reply quickly.",
};