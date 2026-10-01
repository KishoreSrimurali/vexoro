// schema.org JSON-LD for each page. Facts come from lib/site.ts, lib/pricing.ts and lib/faq.ts.
import { FAQS } from "@/lib/faq";
import { ADD_ONS, PACKAGES } from "@/lib/pricing";
import { SITE, abs } from "@/lib/site";

const ORG_ID = abs("/#organization");
const SITE_ID = abs("/#website");
const SERVICE_ID = abs("/#service");

const SERVICES = [
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
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    areaServed: ["OM", "Worldwide"],
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
  name: SITE.name,
  url: abs("/"),
  image: abs(SITE.ogImage),
  logo: abs(SITE.logo),
  email: SITE.email,
  description: SITE.description,
  areaServed: [{ "@type": "Country", name: "Oman" }, "Worldwide"],
  priceRange: "15–75+ OMR",
  currenciesAccepted: SITE.currency,
  knowsAbout: ["Web design", "Web development", "Search engine optimisation", "E-commerce", "Landing pages", "Next.js"],
  parentOrganization: { "@id": ORG_ID },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website services",
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
    website,
    professionalService,
    webPage("/", title, description),
    {
      "@type": "FAQPage",
      "@id": abs("/#faq"),
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
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
