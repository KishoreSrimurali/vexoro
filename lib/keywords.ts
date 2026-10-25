// Search phrases for each page's keywords meta tag. Kept to terms that match what the page is about:
// unrelated or stuffed terms are a spam signal for Bing, and Google ignores the tag either way.

const OMAN = ["Oman", "Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Seeb", "Barka", "Ibri", "Duqm", "GCC", "Middle East"];
const INDIA = ["India", "Chennai", "Bengaluru", "Bangalore", "Hyderabad", "Mumbai", "Delhi", "Pune", "Tamil Nadu"];

/** Every pairing of a phrase with a place, e.g. "web design Muscat". */
const near = (phrases: string[], places: string[]) => phrases.flatMap((p) => places.map((place) => `${p} ${place}`));

const unique = (...lists: string[][]) => [...new Set(lists.flat())];

export const KEYWORDS = {
  home: unique(
    [
      "venture group", "venture studio", "venture builder", "startup studio", "startup builder", "company builder",
      "product studio", "build ventures", "products that solve real problems", "problem-first startups",
      "lean startup", "bootstrapped startups", "new ventures", "tech ventures", "tech startup",
      "RoadLens", "vexoro Digital", "road data India", "dashcam network", "AI solutions", "AI company",
      "branding and web development", "web design studio", "digital studio", "founder-led company",
    ],
    near(["venture studio", "startup studio", "AI company", "tech company", "digital agency"], ["Oman", "Muscat", "India", "Chennai"]),
    ["شركة ذكاء اصطناعي عمان", "تصميم مواقع عمان", "شركة ناشئة عمان", "استوديو مشاريع"],
  ),

  ventures: unique(
    [
      "vexoro ventures", "venture studio", "venture builder", "venture group", "startup studio", "company builder",
      "startup portfolio", "new ventures", "pre-seed startups", "invest in startups", "angel investment",
      "startup investment opportunity", "early-stage startups", "lean startups", "stage-gated startup",
      "build lean prove scale", "problem-first products", "startup ideas", "co-found a startup",
      "partner with a startup studio", "RoadLens", "vexoro Digital",
    ],
    near(["startup studio", "venture studio", "venture builder", "startups", "startup investment"], ["Oman", "Muscat", "India", "Chennai", "GCC"]),
  ),

  roadlens: unique(
    [
      "RoadLens", "RoadLens India", "RoadLens by vexoro", "RoadLens dashcam", "RoadLens app",
      "dashcam network", "dashcam data", "dashcam data network", "crowdsourced road data", "road data",
      "road data platform", "road imagery", "street-level imagery", "street view data", "road condition data",
      "ride-hailing dashcam", "cab dashcam", "taxi dashcam", "dashcam for cab drivers", "dashcam for taxi drivers",
      "dashcam for Ola drivers", "dashcam for Uber drivers", "dashcam for Rapido drivers", "free dashcam for drivers",
      "earn money driving", "earn money with dashcam", "extra income for cab drivers", "side income for Uber drivers",
      "earn money driving Ola Uber Rapido", "driver earnings app", "paid to drive",
      "ADAS training data", "ADAS data India", "autonomous driving dataset", "self-driving car data India",
      "Indian driving dataset", "Indian traffic dataset", "computer vision dataset India", "road dataset",
      "driving video dataset", "edge case driving data", "near-miss video data", "accident video data",
      "road safety", "road safety India", "road accidents India", "road deaths India", "MoRTH road accidents",
      "pothole detection", "pothole mapping", "pothole data", "waterlogging data", "road hazard detection",
      "hazard feed", "smart city data", "road infrastructure monitoring", "traffic data India",
      "insurance telematics", "insurance claims evidence", "motor insurance data India", "risk scoring roads",
      "usage-based insurance India", "accident evidence dashcam",
      "mapping data", "HD map data", "map updates India", "navigation data India", "road closures data",
      "privacy-safe data", "face and number plate blurring", "DPDP Act", "DPDP Act compliant data",
      "data licensing", "dataset licence", "data marketplace India",
      "Hivemapper alternative", "Nexar alternative", "Hivemapper India", "Nexar India",
      "pre-seed startup India", "mobility startup India", "data startup India", "deep tech startup India",
      "invest in RoadLens", "RoadLens investor deck",
    ],
    near(["road data", "dashcam", "pothole detection", "road safety", "mobility startup"], INDIA),
  ),

  ai: unique(
    [
      "AI solutions", "AI solutions for companies", "AI solutions for business", "AI company", "AI agency",
      "AI development company", "AI consulting", "AI consultant", "AI strategy", "AI workshop", "AI implementation",
      "AI integration", "custom AI", "custom AI development", "generative AI", "GenAI solutions", "LLM integration",
      "ChatGPT integration", "Claude integration", "OpenAI integration", "large language models for business",
      "AI assistant", "AI assistant for business", "AI chatbot", "AI chatbot for website", "website chatbot",
      "WhatsApp chatbot", "WhatsApp AI chatbot", "WhatsApp AI assistant", "WhatsApp automation",
      "customer service chatbot", "lead generation chatbot", "appointment booking bot", "Arabic AI chatbot",
      "workflow automation", "business process automation", "AI automation", "automate repetitive tasks",
      "AI agents", "AI agents for business", "RPA alternative", "email automation", "CRM automation",
      "document processing", "AI document processing", "invoice processing", "OCR automation", "data extraction from PDF",
      "contract analysis AI", "form processing",
      "knowledge assistant", "AI knowledge base", "internal AI assistant", "private ChatGPT for company",
      "RAG", "retrieval augmented generation", "enterprise search AI",
      "AI features for apps", "AI search", "AI summaries", "AI for small business", "AI for SMEs",
    ],
    near(["AI solutions", "AI company", "AI consulting", "AI chatbot", "WhatsApp chatbot", "AI automation", "AI agency"], OMAN),
    ["ذكاء اصطناعي عمان", "شات بوت واتساب", "حلول الذكاء الاصطناعي مسقط", "أتمتة الأعمال"],
  ),

  services: unique(
    [
      "web design", "web development", "website design", "website development", "website designer", "web developer",
      "web design agency", "web design company", "web design studio", "freelance web designer",
      "branding", "brand identity", "logo design", "brand design", "visual identity",
      "business website", "company website", "brand website", "corporate website", "portfolio website",
      "landing page", "landing page design", "one page website", "product launch page",
      "online store", "ecommerce website", "Shopify store", "Shopify developer", "custom ecommerce",
      "web app", "web app development", "customer portal", "dashboard development", "internal tools",
      "Next.js developer", "React developer", "responsive website", "mobile-friendly website", "fast website",
      "SEO audit", "technical SEO audit", "website maintenance", "website care plan", "website hosting",
      "website redesign", "WhatsApp button website", "Google Maps on website",
    ],
    near(["web design", "web development", "website design", "web designer", "branding", "ecommerce website", "landing page"], OMAN),
    ["تصميم مواقع", "تصميم مواقع مسقط", "تصميم مواقع عمان", "تطوير مواقع", "متجر الكتروني عمان", "تصميم هوية تجارية"],
  ),

  process: [
    "website design process", "web design process", "web development process", "website project timeline",
    "how long does a website take", "website timeline", "discovery design build launch",
    "website launch checklist", "web project phases", "how websites are made", "website brief",
  ],

  seo: unique(
    [
      "SEO", "SEO services", "technical SEO", "on-page SEO", "SEO setup", "website SEO", "SEO audit",
      "schema markup", "structured data", "JSON-LD", "rich results", "FAQ schema", "local SEO",
      "Google Search Console", "Google Search Console setup", "sitemap", "XML sitemap", "robots.txt",
      "meta tags", "meta description", "title tags", "Open Graph tags", "social preview images",
      "page speed", "Core Web Vitals", "image compression", "301 redirects", "canonical URLs", "AI search optimisation",
    ],
    near(["SEO", "SEO company", "SEO services", "local SEO"], ["Oman", "Muscat"]),
  ),

  faq: [
    "website cost", "how much does a website cost", "website cost Oman", "AI solution cost", "AI chatbot cost",
    "who owns my website", "can I edit my website", "is SEO included", "how long does a website take",
    "web design FAQ", "AI FAQ", "vexoro FAQ", "RoadLens FAQ", "what is RoadLens", "what is vexoro",
    "how to invest in RoadLens", "web design questions", "website ownership",
  ],

  contact: [
    "contact vexoro", "vexoro email", "hello@vexoro.dev", "invest in RoadLens", "RoadLens investor deck",
    "partner with vexoro", "drive with RoadLens", "free AI consultation", "free website consultation",
    "website quote", "website quote Oman", "hire web designer Oman", "hire AI developer", "AI consultation Oman",
    "start a project", "data buyer partnership",
  ],

  pricing: unique(
    [
      "website price", "website prices", "website packages", "website cost", "web design pricing", "web design packages",
      "cheap website", "affordable website", "affordable web design", "budget website", "low cost website",
      "website price list", "landing page price", "ecommerce website price", "website add-ons",
      "website maintenance price", "domain and hosting setup", "website in OMR", "website packages OMR",
      "15 OMR website", "30 OMR website", "50 OMR website", "75 OMR website",
    ],
    near(["website price", "website cost", "cheap website", "affordable web design", "web design packages"], ["Oman", "Muscat", "Salalah", "Sohar"]),
    ["سعر تصميم موقع", "أسعار تصميم المواقع عمان", "تصميم موقع رخيص"],
  ),
};
