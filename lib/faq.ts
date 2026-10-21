// FAQ shown on the home page and published to Google as FAQPage data.
export type Faq = { id: string; question: string; answer: string };

export const FAQS: Faq[] = [
  {
    id: "v1",
    question: "What is vexoro?",
    answer: "vexoro is a venture group. We find real problems and build focused products to solve them. Each venture runs on its own, backed by the vexoro team: vexoro Digital is live and RoadLens is raising now.",
  },
  {
    id: "v2",
    question: "What is RoadLens?",
    answer: "RoadLens turns India's ride-hailing cars into a live road-data network. Drivers get a dashcam on a small refundable deposit and earn from useful footage; carmakers, insurers, mapping companies and cities buy privacy-safe road data.",
  },
  {
    id: "v3",
    question: "How can I invest in or partner with a vexoro venture?",
    answer: "Email hello@vexoro.dev. RoadLens is raising a pre-seed round, and we share the investor deck on request. Fleet owners, data buyers and partners are welcome too.",
  },
  {
    id: "ai1",
    question: "What AI solutions can you build for my company?",
    answer: "AI assistants for your website and WhatsApp, workflow automation, document processing, private knowledge assistants and custom AI features inside your existing systems. We start by finding where AI saves you the most time.",
  },
  {
    id: "ai2",
    question: "How much does an AI solution cost?",
    answer: "AI projects are quoted per project after a free consultation, based on the scope and the tools involved. You get a fixed quote before any work starts.",
  },
  {
    id: "ai3",
    question: "Can AI work with WhatsApp and the tools we already use?",
    answer: "Yes. We connect AI to WhatsApp, your website, email, spreadsheets and business systems wherever they allow access, so your team keeps working the way it does today.",
  },
  {
    id: "q1",
    question: "How much does a website cost?",
    answer: "It depends on the number of pages, the features and how much content we write for you. Send us a short brief and we'll reply with a fixed quote within two business days.",
  },
  {
    id: "q2",
    question: "Is SEO included?",
    answer: "Yes. Every site ships with page titles and descriptions, social preview images, schema.org data, a sitemap, robots.txt, compressed images, redirects from your old URLs and Google Search Console set up.",
  },
  {
    id: "q3",
    question: "Do I own the website?",
    answer: "Yes. Once the final invoice is paid, the design, code, content and domain are yours. We hand over the code repository, hosting access and a short guide.",
  },
  {
    id: "q4",
    question: "Can my team edit the site after launch?",
    answer: "Yes. We set up a content editor so you can change text and images, publish posts and add products without touching code.",
  },
  {
    id: "q5",
    question: "Do you work with brands in other countries?",
    answer: "Yes. We work remotely, share progress in writing and book calls at times that suit your time zone.",
  },
  {
    id: "q6",
    question: "How long does a website take?",
    answer: "A landing page takes 1–2 weeks, a brand website 3–6 weeks and an online store 6–10 weeks. Timelines assume content and feedback arrive on schedule.",
  },
  {
    id: "q7",
    question: "What happens at launch?",
    answer: "We point your domain, redirect old URLs, set up analytics and Google Search Console, and walk your team through editing the site.",
  },
];
