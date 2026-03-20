export const siteConfig = {

  // ── PRODUCT IDENTITY ─────────────────────────────────────
  name: "Nexus",
  tagline: "The Intelligence Layer for Modern Business",
  description: "Nexus unifies your data, automates your workflows, and delivers AI-powered insights that move your business forward — in real time.",
  badge: "Powered by next-generation AI · Series B · $48M raised",

  // ── CONTACT ──────────────────────────────────────────────
  email: "hello@nexus.ai",
  notifyEmail: process.env.NOTIFY_EMAIL!,
  fromEmail: process.env.FROM_EMAIL!,

  // ── THEME ────────────────────────────────────────────────
  // Options: "space" | "midnight" | "carbon" | "obsidian" | "minimal" | "arctic" | "ivory" | "rosegold"
  defaultTheme: "space",

  // ── STATS ────────────────────────────────────────────────
  stats: [
    { value: 48000, suffix: "+", label: "Active Companies", prefix: "" },
    { value: 99.9, suffix: "%", label: "Uptime SLA", prefix: "" },
    { value: 2.4, suffix: "B", label: "Events Processed Daily", prefix: "" },
    { value: 180, suffix: "+", label: "Countries Served", prefix: "" },
  ],

  // ── FEATURES ─────────────────────────────────────────────
  features: [
    {
      icon: "Brain",
      title: "AI-Powered Intelligence",
      description: "Our neural engine analyzes millions of data points in real-time, surfacing insights your team would take weeks to uncover manually.",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    },
    {
      icon: "Zap",
      title: "Instant Automation",
      description: "Build powerful automation workflows without writing code. Connect your tools, define triggers, and let Nexus handle the repetitive work.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "SOC 2 Type II certified, GDPR compliant, and built with zero-trust architecture. Your data is always protected and private.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
    {
      icon: "BarChart3",
      title: "Real-Time Analytics",
      description: "Watch your business metrics update live. From sales funnels to operational efficiency — every number you need, when you need it.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      icon: "Globe",
      title: "Global Infrastructure",
      description: "Deployed across 28 regions worldwide with 99.9% uptime SLA. Your platform stays fast and reliable no matter where your team is.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      icon: "Workflow",
      title: "Seamless Integrations",
      description: "Connect with 500+ tools your team already uses. Salesforce, Slack, HubSpot, Stripe, and hundreds more — all unified in one platform.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
  ],

  // ── HOW IT WORKS ─────────────────────────────────────────
  steps: [
    {
      number: "01",
      icon: "Database",
      title: "Connect Your Data",
      description: "Integrate all your data sources in minutes. Databases, APIs, SaaS tools, spreadsheets — Nexus connects to everything and unifies it into a single source of truth.",
      detail: "500+ native integrations · Real-time sync · Zero data loss",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      number: "02",
      icon: "Cpu",
      title: "AI Processes Everything",
      description: "Our AI engine automatically cleans, categorizes, and enriches your data. It learns your business patterns and begins identifying opportunities and anomalies immediately.",
      detail: "GPT-4 powered · Custom models · Continuous learning",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    },
    {
      number: "03",
      icon: "LineChart",
      title: "Insights Surface Instantly",
      description: "Dashboards, reports, and alerts update in real time. Your team gets the exact information they need, when they need it, without ever digging through data manually.",
      detail: "Live dashboards · Smart alerts · Natural language queries",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      number: "04",
      icon: "Rocket",
      title: "Take Action Automatically",
      description: "Nexus doesn't just show you what's happening — it acts on it. Set up automation workflows that trigger the right response the moment an insight is detected.",
      detail: "No-code workflows · Multi-step automation · Human-in-the-loop",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
  ],

  // ── INTEGRATIONS ─────────────────────────────────────────
  integrations: [
    { name: "Salesforce", color: "#00A1E0", letter: "SF" },
    { name: "Slack", color: "#4A154B", letter: "SL" },
    { name: "HubSpot", color: "#FF7A59", letter: "HS" },
    { name: "Stripe", color: "#635BFF", letter: "ST" },
    { name: "Notion", color: "#000000", letter: "NO" },
    { name: "Jira", color: "#0052CC", letter: "JI" },
    { name: "GitHub", color: "#181717", letter: "GH" },
    { name: "Figma", color: "#F24E1E", letter: "FG" },
    { name: "PostgreSQL", color: "#336791", letter: "PG" },
    { name: "Shopify", color: "#96BF48", letter: "SH" },
    { name: "Twilio", color: "#F22F46", letter: "TW" },
    { name: "Zendesk", color: "#03363D", letter: "ZD" },
    { name: "Intercom", color: "#1F8DED", letter: "IC" },
    { name: "Mixpanel", color: "#7856FF", letter: "MX" },
    { name: "Snowflake", color: "#29B5E8", letter: "SF" },
    { name: "BigQuery", color: "#4285F4", letter: "BQ" },
    { name: "MongoDB", color: "#47A248", letter: "MG" },
    { name: "Klaviyo", color: "#000000", letter: "KL" },
  ],

  // ── PRICING ──────────────────────────────────────────────
  pricing: [
    {
      name: "Starter",
      monthlyPrice: 49,
      yearlyPrice: 39,
      description: "For small teams getting started with data intelligence.",
      highlight: false,
      badge: null,
      features: [
        "Up to 5 team members",
        "10 data source connections",
        "5GB data processed/month",
        "Standard dashboards",
        "50+ integrations",
        "Email support",
        "99.5% uptime SLA",
      ],
      notIncluded: ["Custom AI models", "SSO / SAML", "Dedicated success manager", "SLA guarantee"],
    },
    {
      name: "Growth",
      monthlyPrice: 149,
      yearlyPrice: 119,
      description: "For growing companies that need more power and scale.",
      highlight: true,
      badge: "Most Popular",
      features: [
        "Up to 25 team members",
        "Unlimited data connections",
        "100GB data processed/month",
        "Custom dashboards & reports",
        "500+ integrations",
        "Priority support (4hr SLA)",
        "99.9% uptime SLA",
        "AI-powered insights",
        "Automation workflows",
        "API access",
      ],
      notIncluded: ["Custom AI models", "Dedicated success manager"],
    },
    {
      name: "Enterprise",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "For enterprises that need custom solutions and white-glove service.",
      highlight: false,
      badge: "Custom Pricing",
      features: [
        "Unlimited team members",
        "Unlimited everything",
        "Custom AI model training",
        "SSO / SAML / MFA",
        "Dedicated success manager",
        "Custom SLA (up to 99.99%)",
        "On-premise deployment option",
        "Custom integrations",
        "Advanced security controls",
        "SLA-backed support",
      ],
      notIncluded: [],
    },
  ],

  // ── TESTIMONIALS ─────────────────────────────────────────
  testimonials: [
    {
      quote: "Nexus didn't just improve our analytics — it fundamentally changed how we make decisions. We went from weekly data reviews to real-time intelligence that our entire team acts on daily. Revenue is up 34% since implementation.",
      name: "Alexandra Chen",
      title: "Chief Operating Officer",
      company: "Meridian Health",
      metric: "$340M ARR",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      logo: "MH",
    },
    {
      quote: "We evaluated every enterprise intelligence platform on the market. Nexus was the only one that could actually deliver on the promise of unified AI-powered insights without a 12-month implementation. We were live in 3 weeks.",
      name: "Marcus Williams",
      title: "VP of Engineering",
      company: "Cascade Ventures",
      metric: "Series C · $180M raised",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      logo: "CV",
    },
    {
      quote: "The ROI was immediate. Within 30 days of deploying Nexus, our operations team identified $2.1M in process inefficiencies that we immediately eliminated. It paid for three years of subscription in the first month.",
      name: "Sarah Okafor",
      title: "CEO & Co-Founder",
      company: "Velocity Commerce",
      metric: "4.2x ROI in 90 days",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      logo: "VC",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────────
  faqs: [
    {
      question: "How long does it take to get started with Nexus?",
      answer: "Most teams are fully operational within 24–72 hours. Our onboarding team guides you through connecting your first data sources, and our AI begins generating insights immediately. We also offer white-glove implementation for Enterprise customers.",
    },
    {
      question: "Does Nexus work with our existing tech stack?",
      answer: "Yes. Nexus connects to 500+ tools including Salesforce, HubSpot, Stripe, PostgreSQL, Snowflake, BigQuery, Slack, and hundreds more. If we don't have a native integration, our open API allows you to connect anything.",
    },
    {
      question: "How does Nexus handle our data security and privacy?",
      answer: "Security is foundational to everything we build. Nexus is SOC 2 Type II certified, GDPR and CCPA compliant, and uses zero-trust architecture. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never train our models on your data.",
    },
    {
      question: "What makes Nexus different from traditional BI tools like Tableau or Looker?",
      answer: "Traditional BI tools require someone to ask the right questions. Nexus proactively surfaces insights, anomalies, and opportunities you didn't know to look for — before they become problems or missed opportunities.",
    },
    {
      question: "Can we try Nexus before committing?",
      answer: "Absolutely. Every plan starts with a 14-day free trial — no credit card required. You get full access to all features in your selected tier. Our team will help you connect your first data source and ensure you see real value before your trial ends.",
    },
    {
      question: "What does the Enterprise plan include that others don't?",
      answer: "Enterprise includes custom AI model training on your specific business data, SSO/SAML, dedicated infrastructure, on-premise deployment options, a dedicated customer success manager, custom SLAs up to 99.99% uptime, and white-glove onboarding.",
    },
  ],

  // ── DEMO FORM ────────────────────────────────────────────
  demo: {
    title: "See Nexus in action.",
    subtitle: "Book a personalized 30-minute demo with one of our intelligence specialists. We'll show you exactly how Nexus would work with your data and your team.",
    valueProps: [
      {
        icon: "BarChart3",
        title: "Live data demo",
        sub: "We connect to a sample of your actual data — no fake screenshots",
      },
      {
        icon: "Building2",
        title: "Tailored to your industry",
        sub: "SaaS, e-commerce, or enterprise — we know your challenges",
      },
      {
        icon: "Users",
        title: "Meet your success team",
        sub: "The people who will onboard you and be with you every step",
      },
    ],
  },

  // ── SEO ──────────────────────────────────────────────────
  seo: {
    title: "Nexus — The Intelligence Layer for Modern Business",
    description: "Nexus unifies your data, automates your workflows, and delivers AI-powered insights that move your business forward.",
    keywords: "business intelligence, AI analytics, data platform, workflow automation",
  },

  // ── SOCIAL ───────────────────────────────────────────────
  social: {
    twitter: "https://twitter.com/nexusai",
    linkedin: "https://linkedin.com/company/nexusai",
    github: "https://github.com/nexusai",
    youtube: "https://youtube.com/nexusai",
  },
}