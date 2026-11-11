// Search phrases for each page's keywords meta tag. Kept to terms that match what the page is about:
// unrelated or stuffed terms are a spam signal for Bing, and Google ignores the tag either way.

const OMAN = ["Oman", "Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Seeb", "Barka", "Ibri", "Duqm", "GCC", "Middle East"];
const INDIA = ["Bengaluru", "Bangalore", "Karnataka", "India", "Chennai", "Hyderabad", "Mumbai", "Delhi", "Pune"];
const BLR = ["Bengaluru", "Bangalore", "Karnataka", "India"];

/** Every pairing of a phrase with a place, e.g. "web design Muscat". */
const near = (phrases: string[], places: string[]) => phrases.flatMap((p) => places.map((place) => `${p} ${place}`));

const unique = (...lists: string[][]) => [...new Set(lists.flat())];

export const KEYWORDS = {
  home: unique(
    [
      "venture group", "venture studio", "venture builder", "startup studio", "startup builder", "company builder",
      "product studio", "build ventures", "products that solve real problems", "problem-first startups",
      "lean startup", "bootstrapped startups", "new ventures", "tech ventures", "tech startup",
      "Project Z", "vexoro Digital", "AI phone calls India", "voice AI India", "AI solutions", "AI company",
      "branding and web development", "web design studio", "digital studio", "founder-led company",
    ],
    near(["venture studio", "startup studio", "AI company", "tech company", "digital agency"], ["Oman", "Muscat", "Bengaluru", "Bangalore", "India"]),
    ["شركة ذكاء اصطناعي عمان", "تصميم مواقع عمان", "شركة ناشئة عمان", "استوديو مشاريع"],
  ),

  ventures: unique(
    [
      "vexoro ventures", "venture studio", "venture builder", "venture group", "startup studio", "company builder",
      "startup portfolio", "new ventures", "pre-seed startups", "invest in startups", "angel investment",
      "startup investment opportunity", "early-stage startups", "lean startups", "stage-gated startup",
      "build lean prove scale", "problem-first products", "startup ideas", "co-found a startup",
      "partner with a startup studio", "Project Z", "vexoro Digital",
    ],
    near(["startup studio", "venture studio", "venture builder", "startups", "startup investment"], ["Bengaluru", "Bangalore", "India", "Oman", "Muscat", "GCC"]),
  ),

  projectZ: unique(
    [
      "Project Z", "Project Z India", "Project Z by vexoro", "Project Z app", "Project Z AI",
      "AI that makes phone calls", "AI phone call assistant", "AI calling assistant", "AI call assistant India",
      "AI that calls for you", "AI to make calls for me", "AI voice agent", "AI voice assistant India",
      "AI calls customer care", "AI to call customer care", "AI customer care calls", "skip hold music",
      "book doctor appointment by AI", "AI doctor appointment booking", "AI appointment booking India",
      "AI calls plumber", "home services booking AI", "refund request call AI", "cancel subscription by phone AI",
      "AI calls in Hindi", "AI calls in Kannada", "AI calls in Tamil", "AI calls in Telugu",
      "Indian language voice AI", "multilingual voice AI India", "Hinglish voice AI", "voice AI India",
      "AI assistant for parents", "manage parents' appointments", "family calling assistant",
      "AI receptionist for clinics", "clinic appointment reminder calls", "no-show reduction calls",
      "payment reminder calls", "AI calls for small business",
      "phone anxiety app", "personal assistant app India", "outbound AI calls", "AI agent for errands",
      "Equal AI alternative", "Truecaller assistant alternative",
      "DPDP Act", "TRAI AI calls", "AI disclosure calls",
      "pre-seed startup India", "voice AI startup India", "AI startup India", "consumer AI startup India",
      "Project Z beta", "Project Z beta waitlist", "Bengaluru startup", "Bangalore startup", "Bangalore AI startup",
      "invest in Project Z", "Project Z investor brief",
    ],
    near(["AI phone calls", "AI calling assistant", "voice AI", "AI startup"], INDIA),
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
    "web design FAQ", "AI FAQ", "vexoro FAQ", "Project Z FAQ", "what is Project Z", "what is vexoro",
    "how to invest in Project Z", "web design questions", "website ownership",
  ],

  contact: [
    "contact vexoro", "vexoro email", "hello@vexoro.dev", "invest in Project Z", "Project Z investor brief",
    "partner with vexoro", "join the Project Z beta", "free AI consultation", "free website consultation",
    "website quote", "website quote Oman", "hire web designer Oman", "hire AI developer", "AI consultation Oman",
    "start a project", "Project Z beta", "Project Z for business",
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

  structure: [
    "vexoro business structure", "vexoro group structure", "vexoro organisation", "vexoro org chart",
    "vexoro group", "vexoro ventures", "vexoro Digital", "Project Z", "Project Z parent company",
    "who owns Project Z", "vexoro founder", "vexoro CEO", "Kishore Srimuralikrishnan", "venture group structure",
    "holding group", "group of companies", "venture studio structure", "company structure",
  ],

  investors: unique(
    [
      "invest in Project Z", "Project Z investors", "Project Z investor brief", "Project Z pre-seed",
      "invest in startups", "startup investment opportunity", "pre-seed round", "pre-seed funding",
      "pre-seed startup", "early-stage startup investment", "angel investment", "angel investors",
      "startups raising funds", "startup fundraising", "seed funding", "venture capital", "VC funding",
      "family office investment", "strategic investors", "stage-gated investment", "tranche funding",
      "invest in AI startups", "invest in voice AI", "invest in consumer AI", "voice AI startup investment",
      "AI startup India pre-seed", "consumer subscription startup", "vexoro investors", "venture studio investment",
    ],
    near(["startups raising", "pre-seed startup", "angel investment", "invest in startups", "AI startup", "startup funding"], BLR),
    near(["startup investment", "angel investors"], ["India", "Oman", "GCC", "Middle East"]),
  ),

};
