// Detailed public business structure (/structure). Facts come from the RoadLens deck and the public copy.
// Ownership, money rules and investor terms are deliberately left out.

export type Unit = { name: string; items: string[] };

export type VentureDetail = {
  id: "digital" | "roadlens" | "next";
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
    { name: "Partnerships and sales", detail: "Buyer, partner and investor relationships, led by the founder." },
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
    id: "roadlens",
    name: "RoadLens",
    status: "Launching in Bengaluru",
    role: "India's road-data network, built on ride-hailing dashcams. Every ride maps India.",
    market: ["India", "Bengaluru first", "Chennai and Hyderabad next"],
    units: [
      { name: "Driver network", items: ["Driver sign-up and waitlist", "Dashcam fitting on a refundable deposit", "Driver app: earnings, uploads, SOS", "Driver support"] },
      { name: "Data platform", items: ["Footage upload over Wi-Fi", "Face and number-plate blurring", "Hazard tagging and quality scoring", "GPS and route coverage"] },
      { name: "Data products and sales", items: ["Dataset licences", "Event clips", "Hazard feeds", "Per-km map licences"] },
      { name: "Trust and compliance", items: ["Driver opt-in consent (DPDP Act)", "Passenger notice", "Blurring before any data is used", "Legal review before launch"] },
    ],
    customers: ["Insurers", "Mapping and navigation companies", "City authorities", "Carmakers and ADAS teams"],
    revenue: ["Data licences", "Event clips", "Monthly hazard feeds", "Optional driver app plans"],
    partners: ["Ride-hailing drivers", "Fleet owners", "Driver unions", "Airport and railway taxi hubs"],
    roles: [
      { name: "Driver operations lead", detail: "Onboarding, camera fitting and fleet partnerships in Bengaluru.", stage: "Pilot" },
      { name: "App and data engineer", detail: "Driver app, uploads, blurring and tagging pipeline.", stage: "Validate" },
      { name: "B2B data sales lead", detail: "Insurers, carmakers and city contracts.", stage: "Scale" },
    ],
    href: "/ventures/roadlens",
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

/** How value moves through RoadLens, left to right. */
export const ROADLENS_FLOW = [
  { name: "Drivers", detail: "Drive as usual with a RoadLens dashcam" },
  { name: "Footage", detail: "Recorded with GPS, uploaded over Wi-Fi" },
  { name: "RoadLens platform", detail: "Blurs faces and plates, tags hazards" },
  { name: "Buyers", detail: "Insurers, mapping, cities, carmakers" },
];
export const ROADLENS_RETURN = "Buyers pay for data → drivers earn per km, with bonuses for new roads, night or rain driving and verified hazards";
