// vexoro's ventures. Read by the home page, /ventures, structured data and llms.txt.
export type Venture = {
  id: string;
  name: string;
  status: string;
  summary: string;
  href?: string;
  cta?: string;
};

export const VENTURES: Venture[] = [
  {
    id: "digital",
    name: "vexoro Digital",
    status: "Live",
    summary: "Websites, design and digital solutions for businesses, startups and creators.",
    href: "/ai",
    cta: "See what we build",
  },
  {
    id: "roadlens",
    name: "RoadLens",
    status: "Launching in Bengaluru",
    summary: "India's road-data network, built on ride-hailing dashcams.",
    href: "/ventures/roadlens",
    cta: "Meet RoadLens",
  },
  {
    id: "next",
    name: "What's next",
    status: "Coming soon",
    summary: "New problems, same approach: build lean, prove it, then scale.",
    href: "/contact",
    cta: "Bring us a problem",
  },
];

export const APPROACH = [
  { name: "Find", detail: "We start from a real problem that people or companies already pay to work around." },
  { name: "Build lean", detail: "A focused first product, with the smallest team and budget that can prove the idea." },
  { name: "Prove", detail: "Each stage has a gate: real users, real buyers and real numbers before more money goes in." },
  { name: "Scale", detail: "Ventures that pass their gates get their own team and run on their own, backed by vexoro." },
];

export const FOUNDER = {
  name: "Kishore Srimuralikrishnan",
  role: "Founder & CEO",
};

// Add the co-founder here once their name and title are confirmed.
export const TEAM = [FOUNDER];
