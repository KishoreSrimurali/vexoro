// Public Terms of Service (/terms). Replaces the old signed PDF (v1.0).
// Bump TERMS_META.version and the dates whenever the wording changes, and update the sitemap date.

export const TERMS_META = {
  version: "2.0",
  effective: "1 November 2026",
  updated: "31 October 2026",
  law: "Sultanate of Oman",
  contact: "ceo@vexoro.dev",
};

export type TermsSection = {
  id: string;
  title: string;
  /** Shown above the numbered clauses, without a number. */
  intro?: string;
  clauses?: string[];
};

export const TERMS_INTRO =
  "These Terms of Service (\"Terms\") apply to everything provided under the vexoro name: our websites, the products and services of every vexoro venture (including vexoro Digital and RoadLens), and any venture we add later. They explain what we provide, what we expect from you, how payment works, who owns what, and the limits of our responsibility. Please read them carefully. If you do not agree with them, do not use our websites, products or services.";

export const TERMS: TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these Terms",
    clauses: [
      "You accept these Terms, on behalf of yourself and any business or organisation you represent, when you do any of the following: browse or use our websites; join a waitlist, pilot or programme; request, accept or approve a quote, proposal, order or sample; pay an invoice or deposit; confirm an order by email, WhatsApp or any other channel; give us instructions to start work; or use any product, device, app or data we provide.",
      "Electronic acceptance is valid and binding in accordance with the Electronic Transactions Law of the Sultanate of Oman (Royal Decree 69/2008). No signature is needed for these Terms to apply.",
      "If you accept on behalf of a business or organisation, you confirm that you are authorised to bind it, and both you and it are bound by these Terms.",
      "A quote, proposal, order form, programme guide or other written terms for a specific product or project (\"Specific Terms\") may add to these Terms. Where Specific Terms conflict with these Terms, the Specific Terms apply to that product or project only.",
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    clauses: [
      "\"We\", \"us\", \"our\" and \"vexoro\" mean vexoro, the group of independent ventures operating under the vexoro name, reachable at vexoro.dev, together with its founder, team members and ventures.",
      "\"Venture\" means a product line or business run under the vexoro name, currently vexoro Digital and RoadLens, and any venture we add in future.",
      "\"You\" and \"your\" mean any person or organisation that visits our websites or uses, orders, buys, licenses or takes part in anything we provide, including clients, drivers, data buyers, partners, waitlist members, investors and visitors.",
      "\"Services\" means everything we provide: websites, apps, designs, development, AI solutions, SEO, hosting, maintenance, devices, data, programmes and any related support.",
      "\"Project\" means work described in an accepted quote, proposal, package or order.",
      "\"Deliverables\" means the final work created specifically for you under a Project and handed over to you.",
      "\"Client Materials\" means everything you provide to us: text, images, logos, video, data, documents, login details and instructions.",
      "\"Third-Party Services\" means services, software or platforms not owned by us, such as hosting, domains, plugins, fonts, AI models, cloud providers, payment gateways, maps, app stores, WhatsApp, Google and social media platforms.",
      "\"Business Day\" means a working day in the Sultanate of Oman, excluding official public holidays.",
    ],
  },
  {
    id: "ventures",
    title: "Our ventures and the terms that apply",
    clauses: [
      "vexoro Digital provides websites, design, AI solutions, SEO, hosting, maintenance and related digital services. Sections 8 to 17 apply to these services.",
      "RoadLens is a road-data network built on ride-hailing dashcams. Section 18 applies to drivers and fleet partners, and section 19 applies to data buyers, pilot buyers and partners.",
      "Sections 20 and 21 apply to waitlists, pilots and early access, and to investor information.",
      "All other sections apply to every venture and to anyone who uses our websites or Services.",
      "Each venture runs as its own line of business under the vexoro name. Unless Specific Terms say otherwise, your agreement for a venture's Services covers that venture only, and a matter with one venture does not create rights or obligations with another.",
      "Where we launch a new venture, these Terms apply to it from the day it is offered, together with any Specific Terms we publish for it.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility and accounts",
    clauses: [
      "You must be at least 18 years old and legally able to enter into a binding agreement to use our Services. If you are under 18, you may only browse our websites with the involvement of a parent or guardian.",
      "You must give us accurate, complete and current information, and keep it up to date. We may verify the information you give us and refuse or end any Service if it is false, incomplete or cannot be verified.",
      "Where you have an account, login or access to any of our systems, you are responsible for keeping your credentials secure and for everything done through them. Tell us immediately if you suspect unauthorised access.",
      "We may refuse to provide any Service to anyone, at our discretion, before an order is accepted.",
    ],
  },
  {
    id: "website",
    title: "Using our websites",
    clauses: [
      "We give you a limited, personal, revocable and non-transferable right to view and use our websites for lawful purposes. All other rights are reserved.",
      "You must not: copy, scrape, harvest or mine our websites or data by automated means; frame or mirror them; attempt to gain unauthorised access to any system; test, probe or break security; introduce malware; interfere with performance; reverse engineer our software; or use our websites in breach of the Cyber Crime Law of the Sultanate of Oman (Royal Decree 12/2011) or any other law.",
      "Content on our websites, including descriptions, statistics, examples, timelines and prices, is general information. It is not professional, legal, financial, investment or technical advice, and it may be incomplete, out of date or changed without notice.",
      "We may change, suspend or remove any part of our websites at any time, without notice and without liability.",
      "Links to other websites are provided for convenience only. We do not control or endorse them and are not responsible for their content or practices.",
    ],
  },
  {
    id: "pricing-errors",
    title: "Prices, errors and availability",
    clauses: [
      "Unless stated otherwise, prices for vexoro Digital are in Omani rial (OMR). Prices for other ventures are in the currency stated in the relevant quote or order.",
      "Published prices are starting prices for the listed scope, and \"from\" or \"+\" prices are minimums. The final price is confirmed in writing before work starts.",
      "Prices exclude Value Added Tax (VAT) and other taxes, which are added where they apply, and exclude Third-Party Service costs unless the quote says they are included.",
      "We may change published prices, packages, features and availability at any time. Changes do not affect a quote you have already accepted.",
      "If a price or description is shown in error, we may correct it and cancel any order placed at the wrong price. If you have already paid for an order we cancel for this reason, we will refund the amount you paid for it.",
    ],
  },
  {
    id: "quotes",
    title: "Quotes and orders",
    clauses: [
      "Quotes are valid for 14 days from the date issued unless the quote states otherwise.",
      "An order or Project is accepted only when we confirm it in writing or start work. We may decline any order before acceptance.",
      "Only the items listed in an accepted quote, package or order are included.",
    ],
  },
  {
    id: "digital-services",
    title: "vexoro Digital: services and scope",
    clauses: [
      "We provide the services described in the package or quote you accept. Anything not listed (for example extra pages, features, integrations, copywriting, photography, translation, logo design, data entry or training) is outside the scope and will be quoted and charged separately.",
      "We decide the technical methods, tools, frameworks, AI models and providers used to deliver the services, unless we agree otherwise in writing, and we may change them where we consider it necessary.",
      "We may use qualified subcontractors, freelancers and tools for any part of a Project.",
    ],
  },
  {
    id: "payment",
    title: "Payment",
    clauses: [
      "Unless agreed otherwise in writing, a 50% deposit is due before we start work, and the remaining 50% is due before the website or Deliverables are launched or handed over.",
      "Projects with a total price of 30 OMR or less, and any Service we choose, may require full payment in advance.",
      "Maintenance, hosting, subscriptions and other recurring services are paid in advance for each month or period.",
      "Invoices are due within 7 days of issue. If a payment is late, we may pause all work, withhold launch or handover, and suspend any hosting, maintenance, access or other Service we provide, for that Project or any other, until your account is paid in full. Timelines are extended by the length of the pause, and we may charge a reasonable restart fee.",
      "Until we receive full payment, all Deliverables remain our property and you have no right to use them publicly.",
      "You are responsible for all bank, transfer, currency conversion and payment gateway fees, so that we receive the full invoiced amount.",
      "If you dispute an invoice, you must tell us in writing within 7 days of receiving it, stating the reason. The undisputed part remains payable on time.",
      "We may set off any amount you owe us against any amount we owe you.",
    ],
  },
  {
    id: "responsibilities",
    title: "Your responsibilities",
    clauses: [
      "You will provide complete and accurate Client Materials, feedback, access and approvals on time, and respond to requests for feedback or approval within 5 Business Days.",
      "You are solely responsible for the accuracy and legality of all information on your website, app or materials, including prices, offers, product claims, medical, financial or legal statements, and business licences.",
      "You are responsible for complying with the laws that apply to your business, website and use of our Services, including consumer protection, e-commerce, advertising, licensing, tax and data protection laws.",
      "You will name one person as the decision-maker for each Project. Instructions from that person are binding on you.",
    ],
  },
  {
    id: "timelines",
    title: "Timelines and delays",
    clauses: [
      "Any timeline we give is an estimate, not a guarantee. It starts once we have received the deposit and all Client Materials needed to begin.",
      "Delays caused by late materials, late feedback, changes of scope, Third-Party Services or events outside our control extend the timeline accordingly. We are not responsible for any loss caused by such delays.",
      "If you do not respond or provide what we need for 30 days, we may treat the Project as paused. After 60 days of inactivity we may close the Project; payments received are kept for work done and time reserved, and restarting may require a new quote and a restart fee.",
    ],
  },
  {
    id: "revisions",
    title: "Revisions and change requests",
    clauses: [
      "Each package includes the number of revision rounds stated in it. A revision round is one consolidated list of changes to the agreed design or content, sent together.",
      "Revisions cover adjustments to work already agreed. New pages, new features, new layouts or a new design direction are change requests, not revisions.",
      "Extra revision rounds and change requests are charged at our current rates and may extend the timeline. We will confirm the cost before doing the work.",
      "\"Unlimited revisions\", where offered, applies during the agreed Project period only, to the agreed scope, and subject to fair use as we reasonably decide. It does not cover redesigns, new features or work after launch.",
    ],
  },
  {
    id: "approval",
    title: "Approval and acceptance",
    clauses: [
      "Approval given by email, WhatsApp, our project tools or any other written message counts as written approval.",
      "Once you approve a design or stage, further changes to it are change requests.",
      "Deliverables are accepted when you approve them, when the website or product goes live, or 7 days after delivery if you have not reported specific defects in writing, whichever happens first.",
      "You must check all content, spelling, prices, contact details and links before approving. We are not responsible for errors you approved.",
    ],
  },
  {
    id: "ai",
    title: "AI solutions",
    clauses: [
      "AI assistants, automations, document processing and other AI features (\"AI Solutions\") produce outputs by prediction. Outputs can be inaccurate, incomplete, biased, out of date or inappropriate, and the same input may produce different outputs.",
      "You are responsible for reviewing outputs before relying on them, for any decision made or action taken using them, and for telling your own users that they are dealing with an AI system where the law or good practice requires it.",
      "AI Solutions must not be used as the sole basis for medical, legal, financial, safety-critical, employment or other decisions with significant effects on people.",
      "AI Solutions rely on Third-Party Services such as AI model providers, which may change, limit, price or withdraw their models at any time. We are not responsible for those changes, and usage costs charged by those providers are payable by you unless your quote says otherwise.",
      "You are responsible for having the rights and consents needed for any data you, or your users, put into an AI Solution.",
      "We do not guarantee any level of accuracy, automation, time saved, cost saved or other result from an AI Solution.",
    ],
  },
  {
    id: "seo",
    title: "SEO, marketing and results",
    clauses: [
      "We build using recognised good practice for search engines, speed and usability.",
      "WE DO NOT GUARANTEE ANY SEARCH ENGINE RANKING, POSITION, TRAFFIC, NUMBER OF LEADS, SALES, REVENUE OR OTHER BUSINESS RESULT.",
      "Search engines, social platforms, AI assistants and advertising networks change their rules and algorithms without notice and are outside our control.",
    ],
  },
  {
    id: "warranty",
    title: "Bug fixing after launch",
    clauses: [
      "For 14 days after launch, we will fix, free of charge, any defect caused by our work that stops the Deliverables working as agreed.",
      "This does not cover problems caused by changes made by you or anyone else, Third-Party Services or their updates, hosting issues, browsers, devices or operating systems released after launch, misuse, or new requirements.",
      "We test on current versions of major browsers and devices. We do not guarantee identical appearance on every device, browser or screen size, or that anything we provide will be free of all errors or interruptions.",
      "Fixing the defect, or, if we cannot fix it, refunding the part of the fee paid for the defective work, is our only obligation for defects, except for rights you have under section 33.",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance, hosting and backups",
    clauses: [
      "Support, updates and changes after the bug-fixing period are provided only under a paid maintenance plan or a separate quote.",
      "Maintenance and hosting plans run month to month and may be cancelled by either side with 30 days' written notice. Fees already paid for a period are not refunded for that period.",
      "Unless your plan expressly includes backups, you are responsible for keeping your own copies of your website, content and data. Even where backups are included, we do not guarantee that any backup will be complete or restorable.",
      "Response and uptime figures under any plan are targets made on a reasonable-efforts basis, not guarantees.",
      "Domain and hosting renewals are your responsibility unless your active plan includes them. We are not liable if a domain or hosting account expires.",
      "Where we register domains, hosting or similar accounts for you, we hold them for you and transfer them once all invoices are paid.",
    ],
  },
  {
    id: "roadlens-drivers",
    title: "RoadLens: drivers and fleet partners",
    clauses: [
      "Taking part in RoadLens is voluntary. To join, you must hold a valid driving licence and all permits, registrations and insurance required for your vehicle and work, and keep them valid while you take part.",
      "You are an independent participant. Nothing in these Terms makes you our employee, worker, agent or partner, and you are responsible for your own taxes, insurance, vehicle costs and compliance with the rules of any ride-hailing platform you drive for.",
      "Dashcams and other equipment we provide (\"Devices\") remain our property at all times. You receive them on a refundable deposit and must keep them installed as instructed, use them only for RoadLens, and not open, modify, move or remove them without our approval.",
      "We return your deposit when you return the Device in good working order. We may deduct from the deposit, or charge you, for loss, theft, damage beyond normal wear, missing parts, non-return within 14 days of your participation ending, or any amount you owe us.",
      "You must drive safely and obey all traffic laws. Never handle a Device or the driver app while driving. RoadLens is not an emergency service: any SOS feature is an aid only, and you must contact the emergency services directly in an emergency.",
      "You must inform passengers that the vehicle has a recording dashcam, using the notice we provide, and follow any other consent or notice steps we tell you to.",
      "All footage, images, audio, location and sensor data recorded by a Device (\"Footage\") is owned by us from the moment it is recorded. To the extent you have any rights in the Footage, you transfer them to us, or where a transfer is not possible, grant us an exclusive, perpetual, irrevocable, worldwide, royalty-free licence to use, edit, combine, sell and license it for any purpose, and you waive any claim to further payment beyond the earnings set out in our programme rules.",
      "Earnings are paid only for Footage that we decide, at our discretion, is usable and meets our quality rules, at the rates and on the schedule in our programme rules at the time of recording. We may change rates and rules for future recording at any time. We do not guarantee any level of earnings.",
      "We may withhold, reverse or set off earnings that result from fraud, tampering, staged events, duplicate or manipulated Footage, or a breach of these Terms.",
      "We may suspend or end your participation at any time. You may stop at any time by telling us and returning the Device.",
    ],
  },
  {
    id: "roadlens-data",
    title: "RoadLens: data buyers and partners",
    clauses: [
      "Datasets, clips, feeds, map data, samples and other data we provide (\"Data\") are licensed, not sold. Your licence is limited to the scope, territory, period and purpose in your order or licence. Without that, it is a non-exclusive, non-transferable licence for your internal use only.",
      "You must not resell, sublicense, publish or share Data, attempt to re-identify any person or vehicle in it, combine it with other data to do so, or use it for surveillance, profiling or any unlawful purpose.",
      "Data is a record of real-world conditions captured by vehicle cameras. It is provided \"as is\" and may contain gaps, errors, blurring artefacts or out-of-date information. We do not guarantee its accuracy, completeness or fitness for any purpose.",
      "You are responsible for validating Data before using it in any product, model, insurance decision, map or safety-critical system, and for your compliance with the laws that apply to your use of it, including data protection laws.",
      "Sample data packs, pricing and pilot terms are confidential and may be used only to evaluate a purchase. Pilot buyers' feedback may be used by us without restriction.",
      "When a licence ends, you must stop using the Data and delete it, except where the law requires you to keep it, and confirm deletion if we ask.",
    ],
  },
  {
    id: "early-access",
    title: "Waitlists, pilots and early access",
    clauses: [
      "Joining a waitlist, pilot, beta or early-access programme does not guarantee a place, a Device, a launch date, a price or any Service.",
      "Pilot, beta and early-access Services may be incomplete, unreliable or changed or ended at any time, and are provided without any warranty.",
      "We decide who is offered a place and in what order, at our discretion.",
    ],
  },
  {
    id: "investors",
    title: "Investor information",
    clauses: [
      "Information about investing in vexoro or any venture, including decks, figures and statements on our websites, is general information. It is not an offer to sell, or a solicitation of an offer to buy, any shares, securities or other interest, and it is not investment, legal or tax advice.",
      "Any investment can only be made under separate written agreements signed by both sides. Nothing on our websites or in our communications creates any commitment by us to accept an investment or by you to make one.",
      "Projections, plans, targets, market sizes and other forward-looking statements are estimates based on assumptions that may prove wrong. Actual results may differ materially, and you must not rely on them.",
      "Investor materials we share with you are confidential and may be used only to assess an investment.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services",
    clauses: [
      "Our Services may rely on Third-Party Services. Their use is governed by their own terms, which you are responsible for accepting and following.",
      "We are not responsible for outages, data loss, security incidents, price changes, policy changes, account suspensions or discontinuation of any Third-Party Service, or for any loss they cause.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    clauses: [
      "The vexoro and RoadLens names, logos and brands, our websites, software, apps, Devices' software, Data, designs, templates, components, tools, methods and know-how, and all improvements to them, are owned by us or our licensors. You may not use them without our prior written permission.",
      "Upon full payment, you own the Deliverables created specifically for you under a vexoro Digital Project, including the final design and the content you provided. Until then, we own them and you have only a limited right to review them.",
      "We keep ownership of our pre-existing and general-purpose materials used in Deliverables, and grant you a permanent, non-exclusive licence to use them as part of those Deliverables only.",
      "Open-source software, fonts, icons, AI models and stock images remain owned by their creators and are used under their own licences, which you must follow.",
      "Draft designs, concepts and options you did not choose remain our property and we may reuse them.",
      "We may show any work we create, and a description of it, in our portfolio, websites, social media and pitch materials, and include a small credit link in the website footer, unless you ask us in writing not to before the Project starts.",
      "These rights are subject to the Law on Copyright and Related Rights of the Sultanate of Oman (Royal Decree 65/2008) and other laws that apply.",
    ],
  },
  {
    id: "your-content",
    title: "Your content, materials and feedback",
    clauses: [
      "You confirm that you own, or have permission to use, all Client Materials and anything else you send us, and that they do not infringe anyone's rights or break any law.",
      "You give us a worldwide, royalty-free licence to use, copy, store, modify and process Client Materials as needed to provide and improve the Services.",
      "We do not check Client Materials for legal compliance, copyright, accuracy or trademark issues, and we are not responsible for them.",
      "We may refuse to publish, or remove, any material we reasonably believe is unlawful, infringing, harmful or in breach of these Terms.",
      "If you give us ideas, suggestions or feedback, we may use them freely, without payment or credit to you.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited uses and projects",
    clauses: [
      "You must not use our Services, or ask us to build or support anything, that is illegal in the Sultanate of Oman or in the place it is used, contrary to public order or morals, or that involves gambling, adult content, hate, harassment, fraud, scams, pyramid schemes, counterfeit goods, weapons, malware, phishing, spam, unlawful surveillance or tracking, or infringement of the rights of others.",
      "If we reasonably believe a Project or use falls into these categories, we may stop work and suspend or end any Service immediately, keep payments received for work done, take down anything we host, and report the matter to the authorities where appropriate.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy and data protection",
    clauses: [
      "We collect and use personal data only as needed to run our websites and provide the Services, to communicate with you, to meet legal obligations and to protect our rights. We do not sell your personal data. Where we process personal data in Oman, we do so in line with the Personal Data Protection Law of the Sultanate of Oman (Royal Decree 6/2022); for RoadLens in India, in line with India's Digital Personal Data Protection Act, 2023.",
      "RoadLens blurs faces and number plates in Footage before any Data is used, and processes driver data on the basis of the driver's opt-in consent.",
      "For personal data collected through a website, app or AI Solution we build for you, you are the data controller and are responsible for privacy notices, consent and compliance. When we access personal data in your systems, we use it only to provide the Services and keep it confidential.",
      "We take reasonable measures to keep systems and data secure, but no system can be made completely secure, and we do not guarantee protection against hacking, malware, spam or attacks. We will tell you without undue delay if we become aware of a security incident affecting your data in systems we manage.",
      "To ask about, correct or delete your personal data, contact us using the details in section 39.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    clauses: [
      "Each side will keep the other's confidential information private and use it only for the purpose it was shared, during the relationship and for two years after it ends. This does not apply to information that is public, already known to the receiving side, independently developed, or that must be disclosed by law or a competent authority.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    clauses: [
      "EXCEPT AS EXPRESSLY STATED IN THESE TERMS, AND TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR WEBSITES, SERVICES, DELIVERABLES, DEVICES, DATA AND AI OUTPUTS ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\", WITHOUT ANY WARRANTY, REPRESENTATION OR CONDITION OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AVAILABILITY OR NON-INFRINGEMENT.",
      "We do not guarantee that anything we provide will be uninterrupted, timely, secure, error-free or free of viruses, or that it will meet your requirements or achieve any particular result.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    clauses: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THESE TERMS OR ANY SERVICE, WHETHER IN CONTRACT, TORT OR OTHERWISE, IS LIMITED TO THE FEES YOU ACTUALLY PAID US FOR THE SPECIFIC SERVICE OR PROJECT GIVING RISE TO THE CLAIM IN THE 3 MONTHS BEFORE THE CLAIM AROSE, OR 10 OMR WHERE YOU HAVE PAID US NOTHING.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL LOSS, OR FOR LOSS OF PROFITS, REVENUE, EARNINGS, BUSINESS, CONTRACTS, GOODWILL, REPUTATION, DATA OR ANTICIPATED SAVINGS, EVEN IF WE WERE TOLD SUCH LOSS WAS POSSIBLE.",
      "We are not liable for loss caused by Client Materials, Third-Party Services, your instructions or approvals, your use of AI outputs or Data, changes made by anyone other than us, your breach of these Terms, or events outside our reasonable control.",
      "Any claim must be notified to us in writing within 3 months of the event giving rise to it, to the extent the law allows such a time limit.",
      "Our founder, team members, subcontractors and ventures have no personal liability to you beyond what the law requires, and you agree to bring any claim against vexoro only.",
      "Nothing in these Terms limits or excludes liability that cannot be limited or excluded under the laws of the Sultanate of Oman, including liability for fraud, gross negligence or wilful misconduct, or for death or personal injury caused by our act or omission, or your rights described in section 33.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    clauses: [
      "To the extent permitted by law, you will indemnify and hold harmless vexoro, its founder, team members, ventures and subcontractors from all claims, losses, damages, fines, costs and reasonable legal fees arising from: (a) Client Materials, your content or the content of your website or app; (b) your products, services or business activities; (c) your use of our Services, Devices, Data or AI outputs; (d) your breach of these Terms or of any law; or (e) any claim that material you provided infringes another person's rights.",
    ],
  },
  {
    id: "termination",
    title: "Suspension and termination",
    clauses: [
      "We may suspend or end any Service, account, participation or licence, in whole or in part: (a) immediately, if you fail to pay, breach these Terms, act unlawfully, put others at risk, are abusive towards our team, or if we are required to by law or a Third-Party Service; or (b) for any other reason, by giving you reasonable notice.",
      "If we end a Service under (b) without any fault on your part, we will refund any amount you prepaid for the part of the Service not yet provided. Apart from that, ending a Service under this section does not give you a right to a refund or compensation.",
      "On termination, you must pay for all work done and costs committed up to that date, return any Devices, and stop using anything licensed to you. We will hand over completed and fully paid-for Deliverables.",
      "Sections on payment, intellectual property, your content, Footage, Data, privacy, confidentiality, disclaimers, limitation of liability, indemnity, governing law and general provisions continue to apply after termination.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation and refunds",
    clauses: [
      "You may cancel a Project or Service at any time by written notice. You must pay for all work done up to the date of cancellation and for any Third-Party costs already committed.",
      "The deposit is non-refundable once work has started. No refunds are given for work that has been delivered, approved or launched, for time already reserved for you, or for recurring services already provided, except where we fail to provide what was agreed or the law gives you a right to a refund.",
      "Any refund is paid by the original payment method, or another method we choose, within a reasonable time, less any non-refundable Third-Party costs.",
    ],
  },
  {
    id: "consumer-rights",
    title: "Your rights as a consumer",
    clauses: [
      "If you use our Services as a consumer, for purposes outside your trade, business or profession, you have rights under the Consumer Protection Law of the Sultanate of Oman (Royal Decree 66/2014) and its regulations, and under any other consumer law that applies to you and cannot be excluded by contract. These include, where the law provides for them, rights to correct information, to a service that matches what was agreed, and to a repair, replacement or refund for a defective product or service.",
      "Nothing in these Terms removes or limits those rights. Any part of these Terms that would do so does not apply to you to that extent, and the rest of these Terms still applies.",
    ],
  },
  {
    id: "force-majeure",
    title: "Force majeure",
    clauses: [
      "We are not liable for delay or failure caused by events beyond our reasonable control, including natural disasters, extreme weather, epidemics, war, civil unrest, government action, changes in law, power or internet failures, cyberattacks, supply shortages, or failures of Third-Party Services. If such an event lasts more than 60 days, either side may end the affected Service by written notice, with payment due for work done.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms and to our Services",
    clauses: [
      "We may update these Terms at any time by publishing a new version on this page. The new version applies from its effective date. If you keep using our websites or Services after that date, you accept the new version.",
      "For a Project or order you accepted before the change, the version in force when you accepted it continues to apply to that Project or order, unless the law requires the change or you agree to it.",
      "We may change, add to, suspend or stop any Service, feature, venture or programme at any time. If we stop a Service you have prepaid for, we will refund the prepaid amount for the part not provided.",
    ],
  },
  {
    id: "notices",
    title: "Communication and notices",
    clauses: [
      "We communicate mainly by email and WhatsApp. You agree to receive communications from us electronically, and electronic communications meet any requirement for written notice.",
      "Notices to you are treated as received on the next Business Day after we send them to the contact details you gave us, or after we post them on our website for notices that apply to everyone. You are responsible for keeping your contact details up to date.",
      "Notices to us must be sent by email to the address in section 39.",
    ],
  },
  {
    id: "law",
    title: "Governing law and disputes",
    clauses: [
      "These Terms, and any dispute or claim relating to them or to our websites or Services, are governed by the laws of the Sultanate of Oman.",
      "If a dispute arises, you must first contact us in writing and give us at least 30 days to resolve it in good faith before starting any proceedings.",
      "If the dispute is not resolved, it will be referred to the competent courts of the Sultanate of Oman, which have exclusive jurisdiction. You agree to bring any claim on an individual basis only, not as part of any group or representative action. We may still apply to any court for urgent relief, or to recover amounts owed or protect our intellectual property, Devices or Data.",
      "If you are a consumer, this section does not take away any mandatory right to bring proceedings in the courts of your place of residence, or the protection of mandatory consumer laws there.",
    ],
  },
  {
    id: "general",
    title: "General provisions",
    clauses: [
      "Entire agreement. These Terms, together with any Specific Terms, are the entire agreement between you and us and replace any earlier discussions, statements or proposals.",
      "Severability. If any provision is found invalid or unenforceable, the rest remains in full effect, and the invalid provision applies to the maximum extent permitted.",
      "No waiver. A delay or failure to enforce any right is not a waiver of it.",
      "Assignment. You may not transfer your rights or obligations without our written consent. We may transfer our rights and obligations to any venture, successor business or acquirer of all or part of our business.",
      "Independent parties. Nothing in these Terms creates a partnership, joint venture, employment or agency relationship between you and us.",
      "Third parties. No one other than you and us has any right to enforce these Terms, except our founder, team members and ventures for the protections given to them.",
      "Language. These Terms are written in English. If they are translated, the English version prevails to the extent permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    intro: "Questions about these Terms, notices and data requests:",
  },
];
