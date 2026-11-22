// schema.org JSON-LD for each page. Facts come from lib/site.ts, lib/pricing.ts and lib/faq.ts.
import { FAQS } from "@/lib/faq";
import { ADD_ONS, PACKAGES } from "@/lib/pricing";
import { SITE, abs } from "@/lib/site";
import { FOUNDER } from "@/lib/ventures";

const ORG_ID = abs("/#organization");
const SITE_ID = abs("/#website");
const SERVICE_ID = abs("/#service");
const FOUNDER_ID = abs("/#founder");
const BOLIO_AI_ID = abs("/ventures/bolio-ai#organization");

const founder = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: FOUNDER.name,
  jobTitle: FOUNDER.role,
  worksFor: { "@id": ORG_ID },
};

const bolioAi = {
  "@type": "Organization",
  "@id": BOLIO_AI_ID,
  name: "Bolio ai",
  alternateName: ["Bolio", "Bolio AI", "BolioAI", "Bolio ai by vexoro"],
  slogan: "You ask. It calls.",
  url: abs("/ventures/bolio-ai"),
  logo: { "@type": "ImageObject", url: abs(SITE.logo), width: 1174, height: 886 },
  image: abs(SITE.ogImage),
  email: SITE.email,
  description: "An AI that makes phone calls for people in India, in any Indian language. It finds the number, calls, waits on hold, speaks the other person's language and sends you the result.",
  parentOrganization: { "@id": ORG_ID },
  founder: { "@id": FOUNDER_ID },
  areaServed: { "@type": "Country", name: "India" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  location: { "@type": "Place", name: "Bengaluru, Karnataka, India", address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" } },
  knowsAbout: ["Voice AI", "AI phone calls", "Indian-language speech", "Conversational AI", "Appointment booking"],
};

const SERVICES = [
  "AI assistants and chatbots",
  "AI workflow automation",
  "AI document processing",
  "Private AI knowledge assistants",
  "Custom AI integrations",
  "AI strategy consulting",
  "Brand website design and development",
  "Landing page design and development",
  "Online store development",
  "Web app development",
  "Technical SEO audit",
  "Website care plan",
];

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  url: abs("/"),
  logo: { "@type": "ImageObject", url: abs(SITE.logo), width: 1174, height: 886 },
  image: abs(SITE.ogImage),
  email: SITE.email,
  description: SITE.description,
  founder: { "@id": FOUNDER_ID },
  subOrganization: [{ "@id": SERVICE_ID }, { "@id": BOLIO_AI_ID }],
  location: [
    { "@type": "Place", name: "Bengaluru, Karnataka, India", address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" } },
    { "@type": "Place", name: "Oman", address: { "@type": "PostalAddress", addressCountry: "OM" } },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    areaServed: ["OM", "IN", "Worldwide"],
    availableLanguage: ["English"],
  },
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: abs("/"),
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

const packageOffer = (p: (typeof PACKAGES)[number]) => ({
  "@type": "Offer",
  name: `${p.name} website package`,
  description: `${p.for} Includes: ${p.features.join(", ").replace("*", "")}.`,
  url: abs(`/pricing#${p.id}`),
  priceCurrency: SITE.currency,
  ...(p.plus
    ? { priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: SITE.currency } }
    : { price: p.price }),
  availability: "https://schema.org/InStock",
  seller: { "@id": ORG_ID },
  itemOffered: { "@type": "Service", name: `${p.name} website`, serviceType: "Web design and development" },
});

const addOnOffer = (a: (typeof ADD_ONS)[number]) => ({
  "@type": "Offer",
  name: a.name,
  priceCurrency: SITE.currency,
  priceSpecification: {
    "@type": a.unit ? "UnitPriceSpecification" : "PriceSpecification",
    priceCurrency: SITE.currency,
    ...(a.plus ? { minPrice: a.amount } : { price: a.amount }),
    ...(a.unit ? { unitCode: a.unit, referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: a.unit } } : {}),
  },
  seller: { "@id": ORG_ID },
  itemOffered: { "@type": "Service", name: a.name },
});

const professionalService = {
  "@type": "ProfessionalService",
  "@id": SERVICE_ID,
  name: "vexoro Digital",
  url: abs("/ai"),
  image: abs(SITE.ogImage),
  logo: abs(SITE.logo),
  email: SITE.email,
  description: SITE.description,
  areaServed: [{ "@type": "Country", name: "Oman" }, "Worldwide"],
  priceRange: "15–75+ OMR",
  currenciesAccepted: SITE.currency,
  knowsAbout: ["Artificial intelligence", "AI assistants", "Business process automation", "Large language models", "Web design", "Web development", "Search engine optimisation", "E-commerce", "Landing pages", "Next.js"],
  parentOrganization: { "@id": ORG_ID },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI, branding and web services",
    url: abs("/pricing"),
    itemListElement: [
      ...SERVICES.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    ],
  },
};

const webPage = (path: string, name: string, description: string, extra: Record<string, unknown> = {}) => ({
  "@type": "WebPage",
  "@id": abs(`${path}#webpage`),
  url: abs(path),
  name,
  description,
  isPartOf: { "@id": SITE_ID },
  about: { "@id": ORG_ID },
  primaryImageOfPage: abs(SITE.ogImage),
  inLanguage: "en",
  ...extra,
});

const breadcrumb = (items: Array<[string, string]>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

export const homeStructuredData = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    founder,
    bolioAi,
    website,
    professionalService,
    webPage("/", title, description),
  ],
});

export const pricingStructuredData = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    webPage("/pricing", title, description, { breadcrumb: { "@id": abs("/pricing#breadcrumb") } }),
    { ...breadcrumb([["Home", "/"], ["Pricing", "/pricing"]]), "@id": abs("/pricing#breadcrumb") },
    {
      "@type": "OfferCatalog",
      "@id": abs("/pricing#packages"),
      name: "Website packages (OMR)",
      url: abs("/pricing"),
      itemListElement: PACKAGES.map(packageOffer),
    },
    {
      "@type": "OfferCatalog",
      "@id": abs("/pricing#add-ons"),
      name: "Add-on services (OMR)",
      url: abs("/pricing#add-ons"),
      itemListElement: ADD_ONS.map(addOnOffer),
    },
  ],
});

type Plan = { id: string; name: string; price: string; unit: string; features: string[] };
const BOLIO_APP_ID = abs("/ventures/bolio-ai#app");

/** The Bolio ai app itself, with its planned plans in INR. */
const bolioApp = (plans: Plan[]) => ({
  "@type": "SoftwareApplication",
  "@id": BOLIO_APP_ID,
  name: "Bolio ai",
  alternateName: ["Bolio", "Bolio AI", "BolioAI"],
  url: abs("/ventures/bolio-ai"),
  description: "Bolio ai is an AI that makes phone calls for you, in any Indian language. Tell it what you need; it finds the number, calls, navigates the IVR, waits on hold, speaks the other person's language and sends you the result.",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "AI phone call assistant",
  operatingSystem: "Android, iOS, Web",
  inLanguage: ["en-IN", "hi-IN", "kn-IN", "ta-IN", "te-IN"],
  countriesSupported: "IN",
  availableOnDevice: "Smartphone",
  releaseNotes: "Closed beta in Bengaluru. Not yet generally available.",
  featureList: [
    "Makes phone calls on your behalf",
    "Speaks Hindi, Kannada, Tamil, Telugu, English and other Indian languages",
    "Navigates IVR menus and waits on hold",
    "Books doctor appointments, chases refunds and calls home services",
    "Sends you a summary, transcript and recording",
    "Always says it is an AI; never shares OTPs, card details, Aadhaar or PAN",
  ],
  keywords: "Bolio ai, Bolio, AI phone calls, AI calling assistant, voice AI India, Indian language AI",
  image: abs(SITE.ogImage),
  publisher: { "@id": BOLIO_AI_ID },
  provider: { "@id": BOLIO_AI_ID },
  creator: { "@id": ORG_ID },
  offers: plans
    .filter((p) => /^₹[\d,]+$/.test(p.price))
    .map((p) => ({
      "@type": "Offer",
      name: `Bolio ai ${p.name}`,
      description: p.features.join(". "),
      price: p.price.replace(/[₹,]/g, ""),
      priceCurrency: "INR",
      url: abs(`/ventures/bolio-ai#${p.id}-name`),
      availability: "https://schema.org/PreOrder",
      seller: { "@id": BOLIO_AI_ID },
    })),
});

export const bolioAiStructuredData = (title: string, description: string, plans: Plan[] = []) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    founder,
    bolioAi,
    bolioApp(plans),
    webPage("/ventures/bolio-ai", title, description, { about: [{ "@id": BOLIO_AI_ID }, { "@id": BOLIO_APP_ID }], mainEntity: { "@id": BOLIO_APP_ID }, inLanguage: "en-IN", keywords: "Bolio ai, Bolio, Bolio AI, AI phone calls India", breadcrumb: { "@id": abs("/ventures/bolio-ai#breadcrumb") } }),
    { ...breadcrumb([["Home", "/"], ["Ventures", "/ventures"], ["Bolio ai", "/ventures/bolio-ai"]]), "@id": abs("/ventures/bolio-ai#breadcrumb") },
  ],
});

type QA = { question: string; answer: string };
const faqPage = (path: string, items: QA[]) => ({
  "@type": "FAQPage",
  "@id": abs(`${path}#faqpage`),
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
});

/** /investors: who we are, what we're raising for, and how to reach us. */
export const investorsStructuredData = (title: string, description: string, faqs: QA[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    founder,
    bolioAi,
    webPage("/investors", title, description, {
      about: [{ "@id": ORG_ID }, { "@id": BOLIO_AI_ID }],
      audience: { "@type": "Audience", audienceType: "Investors, angel investors, venture capital funds" },
      breadcrumb: { "@id": abs("/investors#breadcrumb") },
    }),
    { ...breadcrumb([["Home", "/"], ["Investors", "/investors"]]), "@id": abs("/investors#breadcrumb") },
    faqPage("/investors", faqs),
  ],
});

/** WebPage + breadcrumb for a section page; /faq also carries the FAQPage markup. */
export const subpageStructuredData = (path: string, name: string, title: string, description: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    webPage(path, title, description, { breadcrumb: { "@id": abs(`${path}#breadcrumb`) } }),
    { ...breadcrumb([["Home", "/"], [name, path]]), "@id": abs(`${path}#breadcrumb`) },
    ...(path === "/faq"
      ? [{
          "@type": "FAQPage",
          "@id": abs("/faq#faqpage"),
          mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }]
      : []),
  ],
});
