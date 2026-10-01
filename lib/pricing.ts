// Packages and add-ons, in Omani rial. Source: the vexoro brochure.
export type Package = {
  id: string;
  name: string;
  price: number;
  plus?: boolean; // "75+": starting price
  popular?: boolean;
  for: string;
  features: string[];
  note?: string;
};

export const PACKAGES: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: 15,
    for: "For individuals and small businesses.",
    features: ["1 custom webpage", "Responsive (mobile & desktop)", "Business information", "Contact details", "WhatsApp button", "Social media links", "1 revision"],
  },
  {
    id: "business",
    name: "Business",
    price: 30,
    popular: true,
    for: "Everything you need for a professional website.",
    features: ["Up to 4 pages", "Custom design", "Contact form", "WhatsApp integration", "Google Maps", "Social media integration", "Basic SEO setup", "Simple animations", "2 revisions"],
  },
  {
    id: "professional",
    name: "Professional",
    price: 50,
    for: "For growing businesses that want more.",
    features: ["Up to 7 pages", "Premium custom design", "Advanced animations", "Contact forms", "WhatsApp integration", "Google Maps", "SEO setup", "Performance optimisation", "Custom features", "3 revisions", "Priority support"],
  },
  {
    id: "elite",
    name: "Elite",
    price: 75,
    plus: true,
    for: "For businesses that want something different.",
    features: ["Custom number of pages", "Fully custom UI/UX", "Advanced animations", "Custom functionality", "Advanced forms", "SEO optimisation", "Performance optimisation", "Third-party integrations", "Priority support", "Unlimited revisions*"],
    note: "*Price depends on project requirements.",
  },
];

export type AddOn = { name: string; price: string; amount: number; plus?: boolean; unit?: string };

export const ADD_ONS: AddOn[] = [
  { name: "Additional page", price: "5 OMR", amount: 5 },
  { name: "Premium animations", price: "10 OMR+", amount: 10, plus: true },
  { name: "Advanced contact / booking system", price: "10 OMR+", amount: 10, plus: true },
  { name: "Custom functionality", price: "10 OMR+", amount: 10, plus: true },
  { name: "SEO optimisation", price: "10 OMR+", amount: 10, plus: true },
  { name: "Website maintenance", price: "5 OMR / month", amount: 5, unit: "MON" },
  { name: "Domain & hosting setup", price: "From 5 OMR", amount: 5, plus: true },
];
