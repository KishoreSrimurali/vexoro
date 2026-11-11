// Detailed public business structure (/structure). Facts come from the Project Z deck and the public copy.
// Ownership, money rules and investor terms are deliberately left out.

export type Unit = { name: string; items: string[] };

export type VentureDetail = {
  id: "digital" | "project-z" | "next";
  name: string;
  status: string;
  role: string;
  market: string[];
  units: Unit[];
  customers: string[];
  revenue: string[];
  partners?: string[];
  roles?: { name: string; detail: string; stage: string }[];
  href?: string;
};

export const GROUP = {
  name: "vexoro",
  role: "The group. Finds real problems, starts focused ventures, and backs each one with the vexoro team.",
  base: ["Bengaluru, India", "Oman", "Working worldwide"],
  shared: [
    { name: "Strategy and finance", detail: "Led by the founder and CEO across every venture." },
    { name: "Brand, design and web", detail: "Built in-house by vexoro Digital for each venture." },
    { name: "Partnerships and sales", detail: "Customer, partner and investor relationships, led by the founder." },
  ],
  principles: [
    "Each venture runs as its own business, with its own customers and team",
    "Every venture starts lean and has to prove itself before it scales",
    "Privacy and consent are built in from day one",
    "One shared team, so a new venture starts with brand, design and finance in place",
  ],
};

export const VENTURE_DETAILS: VentureDetail[] = [
  {
    id: "project-z",
    name: "Project Z",
    status: "Beta in Bengaluru",
    role: "An AI that makes your phone calls, in any Indian language. You ask. It calls. You get the result.",
    market: ["India", "Bengaluru first", "Top 10 metros, then tier 2 cities"],
    units: [
      { name: "Consumer app", items: ["Android and iOS app, then WhatsApp and web", "Task planner and follow-up questions", "Live ping when a call needs a detail", "Saved profile, family and contacts"] },
      { name: "Call platform", items: ["Real-time call orchestration", "Keypad IVR navigation and hold detection", "Indian-language speech and code-mix detection", "Declared numbers through a licensed telephony partner"] },
      { name: "Business plans", items: ["Appointment reminders", "No-show recovery", "Payment reminders and callbacks", "Free verified-caller dashboard"] },
      { name: "Trust and compliance", items: ["AI disclosure on every call", "Never-share guardrails: OTPs, cards, Aadhaar", "DPDP consent ledger", "TRAI A2P and DLT registration"] },
    ],
    customers: ["Busy urban professionals", "Families managing elderly parents", "Clinics and salons", "Small businesses"],
    revenue: ["Pay per call", "Basic, Unlimited and Family subscriptions", "Business plans", "Referral fees from businesses (upside)"],
    partners: ["Licensed telephony providers", "Indian-language speech providers", "Clinics as design partners", "Local businesses"],
    roles: [
      { name: "Head of engineering", detail: "Founding hire. Voice AI and real-time systems; owns the stack.", stage: "Pilot" },
      { name: "Voice AI engineer", detail: "Speech pipeline, latency and language detection.", stage: "Pilot" },
      { name: "Full-stack and mobile engineers", detail: "App, task flows and the live-ping experience.", stage: "Pilot" },
      { name: "QA and evaluation engineer", detail: "Evaluation set, call quality and regressions.", stage: "Launch" },
      { name: "Growth lead", detail: "Referrals, content and family-plan marketing.", stage: "Launch" },
      { name: "B2B sales lead", detail: "Clinics and small-business accounts.", stage: "Launch" },
    ],
    href: "/ventures/project-z",
  },
  {
    id: "digital",
    name: "vexoro Digital",
    status: "Live",
    role: "Websites, design and digital solutions for businesses, startups and creators. Also builds the brand and tech for every vexoro venture.",
    market: ["Oman", "Worldwide (remote)"],
    units: [
      { name: "AI solutions", items: ["AI assistants for websites and WhatsApp", "Workflow automation", "Document processing", "Knowledge assistants and custom AI"] },
      { name: "Brand and web", items: ["Brand websites", "Landing pages", "Online stores", "Web apps"] },
      { name: "Search and care", items: ["SEO setup on every site", "Technical SEO audits", "Hosting and care plans"] },
    ],
    customers: ["Businesses", "Startups", "Creators", "vexoro's own ventures"],
    revenue: ["Website packages from 15 OMR", "Quoted AI projects", "Add-ons", "Monthly care plans"],
    href: "/ai",
  },
  {
    id: "next",
    name: "What's next",
    status: "Coming soon",
    role: "New problems, same approach: build lean, prove it, then scale.",
    market: ["Open"],
    units: [
      { name: "Venture pipeline", items: ["Find a real problem people already pay to work around", "Build a lean first product", "Prove it with real users and buyers", "Scale it as its own business"] },
    ],
    customers: ["Decided per venture"],
    revenue: ["Decided per venture"],
    href: "/contact",
  },
];

/** How a Project Z call works, left to right. */
export const PROJECT_Z_FLOW = [
  { name: "You ask", detail: "Type or say what you need, in any language" },
  { name: "It briefs", detail: "1–3 quick questions plus your saved details" },
  { name: "It calls", detail: "Dials, navigates the IVR, waits on hold, talks" },
  { name: "You get it done", detail: "Result, transcript and recording sent to you" },
];
export const PROJECT_Z_RETURN = "You pay per call or subscribe → businesses get clear, polite callers in their language, and can upgrade to business plans";
