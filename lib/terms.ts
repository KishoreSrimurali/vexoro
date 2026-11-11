// Public Terms of Service (/terms). Version 3.0 replaces every earlier version, including the old signed PDF (v1.0).
// Bump TERMS_META.version and the dates whenever the wording changes, and update the sitemap date.

export const TERMS_META = {
  version: "3.0",
  effective: "11 November 2026",
  updated: "11 November 2026",
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
  "These Terms of Service (“Terms”) are a binding agreement between you and vexoro. They apply to the whole of vexoro.dev and every other website, subdomain, page, form, link, file, email, app, API, server, system and service operated under the vexoro name, and to every product, programme and venture of vexoro, including vexoro Digital and Project Z. They replace all earlier versions. Please read them carefully, in particular the sections on disclaimers, limitation of liability, indemnity and disputes. If you do not agree with these Terms, you must not access or use any of our websites, systems or Services.";

export const TERMS: TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these Terms",
    clauses: [
      "You accept these Terms, for yourself and for any business or organisation you represent, as soon as you do any of the following: visit, browse or use any of our websites; connect to any of our servers, systems or APIs; submit any form; join a waitlist, pilot or programme; request or receive a quote, proposal, sample, deck or other material; place, accept or approve an order; pay an invoice or deposit; confirm anything by email, WhatsApp or any other channel; give us instructions to start work; or use any product, device, app, software or data we provide.",
      "Electronic acceptance is valid and binding in accordance with the Electronic Transactions Law of the Sultanate of Oman (Royal Decree 69/2008). No signature, click or further step is needed for these Terms to apply.",
      "If you act for a business or organisation, you confirm that you are authorised to bind it, and you and it are jointly responsible for complying with these Terms.",
      "A quote, proposal, order form, licence, programme guide or other written terms we issue for a specific product, project or venture (“Specific Terms”) add to these Terms. Where Specific Terms conflict with these Terms, the Specific Terms apply to that product or project only, and only to the extent of the conflict.",
      "Any terms you propose, including terms in your purchase orders, emails, supplier forms or portals, do not apply and are rejected, even if we accept your order or do not object to them, unless our founder and CEO expressly agrees to them in writing.",
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    clauses: [
      "“vexoro”, “we”, “us” and “our” mean vexoro, the venture group operating under the vexoro name at vexoro.dev, together with each of its ventures, its founder, owners, directors, team members, contractors, successors and assigns.",
      "“Venture” means any business or product line operated under the vexoro name, currently vexoro Digital and Project Z, and any venture added in future.",
      "“You” and “your” mean any person or organisation that visits our websites, connects to our systems, or uses, orders, buys, licenses, takes part in or receives anything we provide, including visitors, clients, customers, participants, partners, licensees, waitlist members and investors.",
      "“Websites” means vexoro.dev and every other website, subdomain, page, preview or deployment we operate, including their content, code, design and files.",
      "“Systems” means every server, host, network, database, API, endpoint, storage location, account, dashboard, admin panel, deployment, repository and other technical infrastructure we own, operate, rent or use, whether run by us or by a provider on our behalf.",
      "“Services” means everything we provide or make available, with or without charge, including the Websites, the Systems, websites, apps, designs, development, AI solutions, SEO, hosting, maintenance, software, devices, data, content, programmes, samples, support and any related service.",
      "“Project” means work described in an accepted quote, proposal, package or order.",
      "“Deliverables” means the final work created specifically for you under a Project and handed over to you.",
      "“Your Materials” means everything you provide to us or through our Services: text, images, logos, video, data, documents, files, prompts, login details, instructions and feedback.",
      "“Third-Party Services” means services, software, platforms and infrastructure not owned by us, such as hosting and cloud providers, domain registrars, content delivery networks, plugins, fonts, AI models, analytics, payment gateways, maps, app stores, email providers, WhatsApp, Google and social media platforms.",
      "“Business Day” means a working day in the Sultanate of Oman, excluding official public holidays.",
      "“Including” and similar words mean including without limitation. Headings are for convenience only and do not affect meaning.",
    ],
  },
  {
    id: "scope",
    title: "What these Terms cover",
    clauses: [
      "These Terms cover every page and part of the Websites, every System, and every Service of every Venture, whether paid or free, live, in testing, in pilot or not yet launched, and whether you reach it directly, through a link, through an API or through a third party.",
      "vexoro Digital provides websites, design, branding, AI solutions, SEO, hosting, maintenance and related digital services. Sections 10 to 19 apply to these services, in addition to the general sections.",
      "Project Z is a vexoro venture. Section 20 applies to anyone who takes part in Project Z as a participant, contributor, driver, fleet partner or device holder, and section 21 applies to anyone who buys, licenses, pilots or partners on Project Z products or data. Information about Project Z, including its investor brief, is also covered by sections 22 and 23.",
      "Sections 22 and 23 apply to waitlists, pilots and early access, and to all investor information, including the Project Z investor brief, decks, data rooms and related communications.",
      "Every other section applies to everyone and to every Venture, Website, System and Service.",
      "Each Venture runs as its own line of business. Unless Specific Terms say otherwise, an agreement for one Venture covers that Venture only, and a matter with one Venture does not give you any rights against, or claims on the assets of, any other Venture or vexoro as a whole.",
      "When we launch a new Venture, product or Website, these Terms apply to it from the moment it is made available, together with any Specific Terms we publish for it.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility, identity and accounts",
    clauses: [
      "You must be at least 18 years old and legally able to enter into a binding agreement to use our Services. Anyone under 18 may only browse the Websites with the involvement of a parent or guardian, who accepts these Terms on their behalf.",
      "You must give us accurate, complete and current information about yourself and any business you represent, and keep it up to date. We may verify any information you give us, ask for proof of identity, authority or ownership, and refuse, suspend or end any Service if information is false, incomplete or cannot be verified.",
      "Where you have an account, login, key, token or other access to any of our Systems, you are responsible for keeping it secure and confidential and for everything done with it, whether or not you authorised it. You must tell us immediately if you suspect unauthorised access. We may disable any credential at any time.",
      "We may refuse to provide any Service to anyone, for any lawful reason or no reason, before an order or application is accepted.",
    ],
  },
  {
    id: "websites",
    title: "Using our Websites",
    clauses: [
      "We give you a limited, personal, non-exclusive, revocable and non-transferable permission to view and use the Websites for lawful, personal or internal business purposes. All other rights are reserved by us.",
      "Content on the Websites, including descriptions, statistics, examples, case studies, roadmaps, timelines, estimates, prices, FAQs and venture information, is general information only. It is not professional, legal, financial, investment, insurance, tax or technical advice, it may be incomplete, out of date or wrong, and we may change or remove it at any time without notice. You rely on it entirely at your own risk.",
      "Contact forms, waitlist forms and buttons on the Websites may open your own email app or send information to Third-Party Services. Submitting a form or sending a message does not create a contract, a reservation or any obligation for us to reply.",
      "We may change, suspend, restrict or remove any part of the Websites, Systems or Services at any time, for anyone or everyone, without notice and without liability.",
      "Links to other websites are provided for convenience only. We do not control or endorse them and are not responsible for their content, availability or practices.",
    ],
  },
  {
    id: "systems",
    title: "Our servers, systems and infrastructure",
    clauses: [
      "The Systems are our private property, or are used by us under licence, and are provided only to support our Services. You may access them only through the interfaces we intentionally make available to you, and only within the limits we set.",
      "You must not, and must not help anyone else to: access or attempt to access any System, account, data or area you are not expressly authorised to use; probe, scan, map or test the vulnerability of any System; bypass, disable or interfere with any security, authentication, rate limit, access control or monitoring; send excessive, automated or malformed traffic; carry out or attempt any denial-of-service attack; upload or transmit malware, exploits or harmful code; intercept or tamper with data in transit; or use any System to send spam or attack anyone else.",
      "We may log, monitor, record and analyse any access to and activity on the Websites and Systems, including IP addresses, devices, requests, timestamps and errors, to operate, secure and improve them, enforce these Terms, and comply with the law. You consent to this monitoring.",
      "Unauthorised access to or use of any System is a breach of these Terms and may be a crime under the Cyber Crime Law of the Sultanate of Oman (Royal Decree 12/2011) and the laws of other countries. We may block any person, network or region, preserve evidence, report suspected offences to the authorities, and cooperate with any investigation, without notice to you.",
      "If you believe you have found a security vulnerability, report it privately to the contact in section 42 and do not access, change or disclose any data. A report does not authorise any testing, and we are not obliged to offer any reward.",
      "We do not promise that the Websites or Systems will be available, uninterrupted, fast, secure, error-free or free of harmful components, or that any data stored on them will be preserved. We may carry out maintenance, migrations and upgrades, change providers or locations, and take any System offline at any time.",
      "Our Systems may be hosted by Third-Party Services in any country. You agree that information may be stored and processed outside your country, subject to section 30.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    clauses: [
      "You must not use the Websites, Systems or Services to: break any law; infringe anyone’s rights; harass, threaten, defame or impersonate anyone; mislead, defraud or scam anyone; collect personal data without a lawful basis; or publish, store or distribute anything unlawful, obscene, hateful, violent, discriminatory or contrary to public order or morals in the Sultanate of Oman.",
      "You must not copy, scrape, crawl, harvest, index, mine, download in bulk, frame, mirror, archive or republish any part of the Websites, Systems or Services, or use them or their content to train, fine-tune, test or benchmark any artificial intelligence or machine learning model, without our prior written permission. Standard search engine indexing that follows our robots.txt is permitted.",
      "You must not decompile, reverse engineer, disassemble or attempt to derive the source code, models, weights, prompts, data or structure of any of our software, Systems or Services, except to the extent the law expressly allows this despite this restriction.",
      "You must not use our Services, information or materials to build, market or support a competing product or service, or to solicit our clients, participants, partners or data buyers.",
      "You must not resell, sublicense, rent or commercially exploit any Service except as Specific Terms expressly allow.",
    ],
  },
  {
    id: "prices",
    title: "Prices, errors and availability",
    clauses: [
      "Prices are in the currency shown, which is Omani rial (OMR) unless stated otherwise. Published prices are starting prices for the listed scope, and prices marked “from” or “+” are minimums.",
      "Prices exclude Value Added Tax and all other taxes, duties and charges, which you must pay in addition where they apply, and exclude Third-Party Service costs unless your quote expressly includes them.",
      "We may change our prices, packages, offers and Services at any time. Changes do not affect an order we have already accepted in writing.",
      "If a price, description or other information is shown in error, we are not bound by it, even after you have placed an order. We will tell you, and you may proceed at the correct price or cancel and receive a refund of anything you paid for that order.",
      "Offers, discounts and promotional prices apply only while stated and only to new orders, may be withdrawn at any time, and cannot be combined unless we say so.",
    ],
  },
  {
    id: "orders",
    title: "Quotes and orders",
    clauses: [
      "Quotes are valid for 14 days from the date issued unless the quote states otherwise. A quote, proposal or listing is an invitation to deal and not an offer that you can accept to form a contract.",
      "An order becomes binding on us only when we confirm it in writing or start the work. We may decline any order, before acceptance, without giving a reason.",
      "Only the items expressly listed in your accepted quote, package or order are included. Anything else is out of scope and will be quoted and charged separately.",
    ],
  },
  {
    id: "digital",
    title: "vexoro Digital: services and scope",
    clauses: [
      "We decide the technical methods, tools, frameworks, providers and team used to deliver your Project, unless we expressly agree otherwise in writing.",
      "We may use subcontractors and AI-assisted tools for any part of a Project. We remain responsible for the work under these Terms, subject to the limits in them.",
      "Extra pages, features, integrations, copywriting, photography, translation, logo design, data entry, migrations, content uploads, training and support are outside scope unless your quote expressly lists them.",
    ],
  },
  {
    id: "payment",
    title: "Payment",
    clauses: [
      "Unless your quote says otherwise, a non-refundable deposit of 50% is due before we start work, and the remaining balance is due before launch or handover, whichever comes first. Projects of 30 OMR or less, and all monthly, subscription and licence fees, are payable in full in advance.",
      "Invoices are due within 7 days of issue. Time for payment is of the essence. You must pay in full, without any deduction, withholding or set-off, and you must cover all bank, transfer and currency fees so that we receive the full amount invoiced.",
      "If any payment is late, we may, without liability and without affecting our other rights: pause or stop all work for you under any Project; withhold launch, handover, credentials and files; suspend or take offline any website, hosting, account, licence, device or Service we provide to you; charge a late payment fee of 5% of the overdue amount for each month or part month it remains unpaid, to the extent permitted by law; and recover all reasonable costs of collection, including legal and agency fees. Timelines are extended by the length of any pause.",
      "Until we receive full payment of everything you owe us, all Deliverables, work in progress, accounts, domains and files remain our property and you have no right to use, publish or transfer them.",
      "If you dispute an invoice, you must tell us in writing within 7 days of receiving it, giving detailed reasons. Otherwise the invoice is final and accepted. The undisputed part remains payable on time.",
      "We may set off any amount you owe us against any amount we owe you, including deposits and earnings.",
      "Chargebacks or payment reversals made without first following section 40 are a breach of these Terms. You must repay the reversed amount together with all fees and costs we incur.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Your responsibilities as a client",
    clauses: [
      "You must provide complete and accurate materials, access, feedback and approvals on time, and respond to requests within 5 Business Days.",
      "You are solely responsible for the content of your website, app or materials and for the accuracy and legality of all information on them, including prices, offers, product claims, medical, financial or legal statements, licences and permits.",
      "You are solely responsible for complying with the laws that apply to your business and to your website, app or AI solution, including consumer protection, e-commerce, advertising, licensing, accessibility, tax and data protection laws, and for any notices, policies and consents they require.",
      "You must name one decision-maker for each Project. Instructions and approvals from that person, or anyone using your usual email or WhatsApp contact, are binding on you.",
    ],
  },
  {
    id: "timelines",
    title: "Timelines and delays",
    clauses: [
      "Any timeline, date or estimate we give is a non-binding estimate, not a guarantee, and time is not of the essence for our performance. A timeline starts only once we have received the deposit and everything we need from you.",
      "Delays caused by you, by changes of scope, by Third-Party Services or by events outside our control extend the timeline accordingly. We are not liable for any loss caused by delay.",
      "If you do not respond or provide what we need for 30 days, we may treat the Project as paused. After 60 days of inactivity we may close the Project. Payments received are not refunded, all work done to that date becomes payable, and restarting requires a new quote and may carry a restart fee.",
    ],
  },
  {
    id: "revisions",
    title: "Revisions and change requests",
    clauses: [
      "Each package includes the number of revision rounds stated in it. A revision round is one consolidated list of changes to the agreed design or content, sent together.",
      "Revisions cover adjustments to work already agreed. New pages, features, layouts or a new direction are change requests, charged at our current rates, and may extend the timeline.",
      "“Unlimited revisions”, where offered, applies only during the agreed Project period, to the agreed scope, and subject to fair use as we reasonably decide. It does not cover redesigns, new features or work after launch.",
    ],
  },
  {
    id: "approval",
    title: "Approval and acceptance",
    clauses: [
      "Approval given by email, WhatsApp, signature, a message in any project tool, or by telling us to go live counts as written approval.",
      "Deliverables are accepted, finally and without further claim, at the earliest of: your approval, the website or product going live, or 7 days after delivery if you have not reported specific defects in writing.",
      "You must check all content, spelling, prices, contact details, links and functionality before approving. We are not responsible for anything you approved, and changes after approval are change requests.",
    ],
  },
  {
    id: "ai",
    title: "AI solutions and AI output",
    clauses: [
      "AI solutions use machine learning models, which are probabilistic. Their output can be inaccurate, incomplete, biased, offensive, out of date or different each time, and may resemble content owned by others.",
      "We do not guarantee any level of accuracy, availability, cost, response time or business result from any AI solution, and we are not responsible for decisions made or actions taken based on AI output.",
      "You are responsible for reviewing AI output before relying on it, for keeping a human involved in any decision with legal, financial, medical, safety or similarly significant effects, for telling your users when they are dealing with AI where the law or good practice requires, and for the information you or your users put into an AI solution.",
      "AI solutions depend on Third-Party Services, such as model providers, whose pricing, terms, behaviour and availability can change without notice. Usage costs charged by those providers are payable by you unless your quote says otherwise. We may switch models or providers at any time.",
    ],
  },
  {
    id: "seo",
    title: "SEO, marketing and results",
    clauses: [
      "We use recognised good practice for search engines, speed and usability.",
      "WE DO NOT GUARANTEE ANY SEARCH RANKING, POSITION, TRAFFIC, NUMBER OF LEADS, CONVERSIONS, SALES, REVENUE, SAVINGS, FOLLOWERS OR OTHER BUSINESS RESULT FROM ANY SERVICE.",
      "Search engines, AI assistants, social platforms and advertising networks change their rules without notice and are outside our control.",
    ],
  },
  {
    id: "warranty",
    title: "Bug fixing after launch",
    clauses: [
      "For 14 days after launch, we will fix, free of charge, any defect reported to us in writing that is caused by our work and stops the Deliverable working as agreed. This is your only remedy for defects.",
      "This does not cover problems caused by changes made by you or anyone else, Your Materials, Third-Party Services or their updates, hosting, browsers or devices, misuse, or new requirements.",
      "We test on current versions of major browsers and devices. We do not guarantee identical appearance or behaviour on every device, browser or screen size.",
    ],
  },
  {
    id: "hosting",
    title: "Maintenance, hosting and backups",
    clauses: [
      "Support, updates and changes after the bug-fixing period are provided only under a paid plan or a separate quote.",
      "Plans run month to month and may be cancelled by either side with 30 days’ written notice. Fees for a period already started are not refunded.",
      "Unless your plan expressly includes backups, you are solely responsible for keeping your own copies of your website, content and data. Even where backups are included, we do not guarantee that any backup will be complete, current or restorable, and we are not liable for any loss of data.",
      "Uptime, response and resolution figures under any plan are targets on a reasonable-efforts basis, not guarantees, and service credits are not provided unless your Specific Terms expressly say so.",
      "Domain and hosting renewals are your responsibility unless your active plan includes them. We are not liable if a domain, certificate or account expires or is lost.",
      "Where we register domains, hosting or similar accounts for you, we hold them on your behalf and transfer them once everything you owe us is paid. If a plan ends or is suspended for non-payment, we may take the website offline and, after 30 days’ notice, delete it and its data.",
    ],
  },
  {
    id: "project-z-participants",
    title: "Project Z: participants and device holders",
    clauses: [
      "Taking part in Project Z is voluntary and at your own risk. You must hold, and keep valid, every licence, permit, registration and insurance that the law or any platform you work with requires for your activity and any vehicle you use.",
      "You are an independent participant. Nothing in these Terms makes you our employee, worker, agent, partner or joint venturer, and you are responsible for your own taxes, insurance, costs and compliance with the rules of any platform you work for.",
      "Devices, cameras, equipment and software we provide (“Devices”) remain our property at all times. You receive them on the deposit and conditions we set, must install and use them only as instructed and only for Project Z, and must not open, modify, move, sell, pledge or remove them without our written approval. We may deduct from the deposit, or charge you, for loss, theft, damage beyond normal wear, missing parts, non-return within 14 days of your participation ending, or any amount you owe us.",
      "You must act safely and obey all laws at all times. Never handle a Device or app while driving. No Project Z feature is an emergency service, and any SOS or alert feature is an aid only.",
      "You must give every notice and obtain every consent that we instruct or that the law requires, including notices to passengers or other people who may be recorded.",
      "All footage, images, audio, location, sensor and other data captured by a Device or submitted through Project Z (“Project Z Data”) belongs to us from the moment it is created. To the extent you have any rights in it, you assign them to us, or where assignment is not possible you grant us an exclusive, perpetual, irrevocable, worldwide, royalty-free, transferable and sublicensable licence to use, edit, combine, sell and license it for any purpose, and you waive any moral rights and any claim to payment beyond the earnings in our programme rules.",
      "Earnings are paid only for Project Z Data that we decide, at our discretion, is usable and meets our quality rules, at the rates and on the schedule in our programme rules at the time it was captured. We may change rates and rules for the future at any time. We do not guarantee any level of earnings, and any figures we publish are estimates only.",
      "We may withhold, reverse or set off earnings and deposits that result from fraud, tampering, staged events, duplicated or manipulated data, or any breach of these Terms, and may suspend or end your participation at any time. You may stop at any time by telling us and returning every Device.",
    ],
  },
  {
    id: "project-z-data",
    title: "Project Z: data, products and partners",
    clauses: [
      "Datasets, clips, feeds, maps, samples, reports and other data or products we provide through Project Z (“Data Products”) are licensed, not sold. Your licence is limited to the scope, territory, period and purpose in your order or licence. Without one, it is a non-exclusive, non-transferable, revocable licence for your internal evaluation only.",
      "You must not resell, sublicense, publish or share Data Products, attempt to re-identify any person or vehicle in them, combine them with other data to do so, or use them for surveillance, profiling, discrimination or any unlawful purpose.",
      "Data Products are a record of real-world conditions. They are provided “as is” and may contain gaps, errors, artefacts or out-of-date information. We do not guarantee their accuracy, completeness, timeliness or fitness for any purpose.",
      "You are solely responsible for validating Data Products before using them in any product, model, insurance or credit decision, map, vehicle or safety-critical system, and for your compliance with every law that applies to your use, including data protection laws.",
      "Samples, pricing, pilot terms and partnership discussions are confidential and may be used only to evaluate a purchase or partnership. We may use any feedback from pilot buyers and partners without restriction or payment.",
      "When a licence ends, you must stop using the Data Products and delete every copy, except where the law requires you to keep it, and confirm deletion in writing if we ask. We may audit your compliance on reasonable notice.",
      "You must not bypass us to deal directly with Project Z participants, fleet partners or suppliers introduced to you through Project Z for the purpose of obtaining similar data, during your relationship with us and for 24 months after it ends.",
    ],
  },
  {
    id: "early-access",
    title: "Waitlists, pilots and early access",
    clauses: [
      "Joining a waitlist, pilot, beta or early-access programme for any Venture, including Project Z, does not guarantee a place, a Device, a launch date, a price, earnings or any Service.",
      "Pilot, beta and early-access Services may be incomplete, unreliable, changed or ended at any time, and are provided entirely without warranty.",
      "We decide who is offered a place, on what terms and in what order, at our discretion.",
    ],
  },
  {
    id: "investors",
    title: "Investor information and the Project Z investor brief",
    clauses: [
      "Information about investing in vexoro or any Venture, including the Project Z investor brief, decks, figures, data rooms, emails, calls and statements on our Websites (“Investor Information”), is general information only. It is not an offer to sell, or a solicitation of an offer to buy, any shares, securities, tokens or other interest in any jurisdiction, and it is not investment, legal, tax or accounting advice.",
      "Any investment can only be made under separate written agreements signed by both sides, and only on the terms of those agreements. Nothing on our Websites or in our communications creates any commitment by us to accept an investment, to keep a round open, or to offer any particular terms.",
      "Projections, plans, targets, valuations, market sizes, unit economics, roadmaps and other forward-looking statements are estimates based on assumptions that may prove wrong. Actual results may differ materially. We make no representation or warranty as to the accuracy or completeness of any Investor Information, and we have no duty to update it.",
      "You must make your own independent investigation and take your own professional advice. You confirm that you will not rely on any Investor Information, and to the fullest extent permitted by law, neither vexoro nor its founder, team or advisers will be liable for any loss arising from its use.",
      "Investor Information is confidential. You may use it only to assess a possible investment, may share it only with your professional advisers who are bound by confidentiality, and must return or delete it on request.",
      "Investing in an early-stage venture involves a high risk, including the risk of losing your entire investment.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services",
    clauses: [
      "Our Websites, Systems and Services rely on Third-Party Services. Their use is governed by their own terms, which you are responsible for accepting and following where they apply to you.",
      "We are not responsible or liable for any act, omission, outage, data loss, security incident, price change, policy change, account suspension or discontinuation of any Third-Party Service, or for any loss it causes.",
    ],
  },
  {
    id: "ip",
    title: "Our intellectual property",
    clauses: [
      "The Websites, Systems and Services, and everything in them, including the vexoro and Project Z names, logos, brands, designs, text, graphics, code, software, models, data, databases, documents and the selection and arrangement of all of it, are owned by us or our licensors and protected by the Law on Copyright and Related Rights of the Sultanate of Oman (Royal Decree 65/2008), the Industrial Property Rights Law (Royal Decree 67/2008) and international law. All rights not expressly granted to you are reserved.",
      "You must not use our names, logos or brands, or anything confusingly similar, in any way, including in domain names, social media handles, advertising or keywords, without our prior written permission.",
      "On payment in full of everything you owe us, you own the Deliverables created specifically for you under a Project, excluding the materials described in clauses 25.4 to 25.6. Until then we own them and you have only a limited right to review them.",
      "We keep ownership of all our pre-existing and general-purpose materials, including code libraries, components, templates, prompts, workflows, tools, methods, know-how and improvements, even if developed during your Project. Once you have paid in full, we grant you a perpetual, non-exclusive, non-transferable licence to use them only as part of your Deliverables.",
      "Open-source software, fonts, icons, stock media and AI models remain owned by their creators and are used under their own licences, which you must follow.",
      "Draft designs, concepts and options you did not choose remain our property and may be reused by us.",
      "We may display any work we have done for you, your name and logo, and a description of the Project in our portfolio, Websites, marketing and social media, and may include a small credit link in the footer of your website, unless you ask us in writing not to before the Project starts.",
    ],
  },
  {
    id: "your-materials",
    title: "Your Materials and feedback",
    clauses: [
      "You confirm that you own, or have every permission needed to use and to let us use, all of Your Materials, and that they are accurate, lawful and do not infringe anyone’s rights.",
      "You grant us a worldwide, royalty-free, non-exclusive licence to host, store, copy, modify, process and display Your Materials as needed to provide, secure and improve our Services and to comply with the law. This licence continues for as long as we hold Your Materials and, for work shown under clause 25.7, permanently.",
      "We do not check Your Materials for legality, accuracy, copyright or trademark issues and are not responsible for them. We may refuse, remove or disable access to any material we believe is unlawful, infringing, harmful or in breach of these Terms, without notice.",
      "Any idea, suggestion or feedback you give us about any Venture, Website or Service may be used by us for any purpose, without restriction, attribution or payment, and you assign to us any rights you have in it.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited projects",
    clauses: [
      "We do not build, host, support or license anything that is illegal in the Sultanate of Oman or where it is used, contrary to public order or morals, or that involves gambling, adult content, hate, harassment, fraud, scams, pyramid schemes, counterfeit goods, weapons, malware, phishing, unlawful surveillance, or the infringement of others’ rights.",
      "If we believe that a Project or use falls into these categories or breaches section 7, we may stop work and suspend or remove any Service immediately, keep all payments received, invoice all work done, and report the matter to the authorities.",
    ],
  },
  {
    id: "non-solicitation",
    title: "Non-solicitation",
    clauses: [
      "While we work with you and for 12 months afterwards, you must not, directly or indirectly, hire, engage or solicit any member of our team or any subcontractor who worked on your Project or account, without our written consent.",
      "If you do, you must pay us a placement fee equal to 50% of that person’s first-year compensation, as a genuine pre-estimate of our loss, to the extent permitted by law.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    clauses: [
      "You must keep confidential all non-public information we share with you or that you obtain from our Websites, Systems or Services, including prices, quotes, proposals, methods, code, data, Investor Information, pilot terms and business plans, and use it only for the purpose for which it was shared. This obligation lasts for 5 years after our relationship ends, and indefinitely for source code, data and trade secrets.",
      "We will keep your non-public business information confidential and use it only to provide our Services, except as needed to provide them, to enforce these Terms, or as required by law.",
      "Confidentiality does not apply to information that is public through no fault of the receiving party, was already lawfully known to it, is independently developed, or must be disclosed by law or a competent authority.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy and data protection",
    clauses: [
      "We handle personal data in line with the Personal Data Protection Law of the Sultanate of Oman (Royal Decree 6/2022), and, where a Venture operates in India, the Digital Personal Data Protection Act, 2023, and any other law that applies. We collect only what we need to run our Websites, Systems and Services, keep them secure, and comply with the law.",
      "For personal data collected through a website, app or AI solution we build or host for you, you are the controller and are solely responsible for having a lawful basis, privacy notices and consents. When we process that data for you, we do so only on your documented instructions and to provide the Services.",
      "For Project Z, we process personal data, footage and location information as described in our programme rules and notices, and take reasonable steps, such as blurring faces and number plates where relevant, before data is used in Data Products. No method of de-identification is perfect.",
      "We take reasonable technical and organisational measures to protect personal data. No system can be made completely secure, and we do not guarantee protection against hacking, malware, spam or attacks. We will tell affected clients without undue delay if we become aware of a security incident affecting their data in Systems we manage.",
      "You may contact us using section 42 to exercise any data rights you have under the law.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    clauses: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE WEBSITES, SYSTEMS, SERVICES, DELIVERABLES, DEVICES, DATA PRODUCTS, AI OUTPUT AND INVESTOR INFORMATION ARE PROVIDED “AS IS” AND “AS AVAILABLE”, WITH ALL FAULTS, AND WE DISCLAIM ALL WARRANTIES, CONDITIONS AND REPRESENTATIONS NOT EXPRESSLY STATED IN THESE TERMS, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING ANY WARRANTY OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY, SECURITY AND ANY WARRANTY ARISING FROM A COURSE OF DEALING OR USAGE OF TRADE.",
      "We do not warrant that any Service will meet your requirements, achieve any result, be compatible with any system, or be uninterrupted, timely, secure or error-free, or that defects will be corrected.",
      "You use the Websites, Systems and Services at your own risk, and you are responsible for any damage to your devices or loss of data that results.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    clauses: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS OF ANY KIND ARISING OUT OF OR RELATING TO THESE TERMS, THE WEBSITES, THE SYSTEMS OR ANY SERVICE, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF STATUTORY DUTY OR OTHERWISE, IS LIMITED TO THE LOWER OF (A) THE FEES YOU ACTUALLY PAID US FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM IN THE 3 MONTHS BEFORE THE EVENT GIVING RISE TO IT, AND (B) 500 OMR. WHERE YOU HAVE PAID US NOTHING, INCLUDING AS A VISITOR, WAITLIST MEMBER, PARTICIPANT OR INVESTOR, OUR TOTAL LIABILITY IS LIMITED TO 10 OMR.",
      "WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL LOSS, OR FOR ANY LOSS OF PROFITS, REVENUE, BUSINESS, CONTRACTS, CUSTOMERS, OPPORTUNITY, INVESTMENT, GOODWILL, REPUTATION, DATA, RANKINGS OR ANTICIPATED SAVINGS, OR FOR ANY BUSINESS INTERRUPTION, WHETHER DIRECT OR INDIRECT, AND EVEN IF WE WERE TOLD SUCH LOSS WAS POSSIBLE.",
      "We are not liable for any loss caused by Your Materials, your instructions or approvals, Third-Party Services, changes made by anyone other than us, unauthorised access to any System despite our reasonable measures, your breach of these Terms, or events outside our reasonable control.",
      "No claim may be brought against our founder, owners, directors, team members or contractors personally. They may rely on this clause, and on the limits in this section, as if they were parties to these Terms.",
      "You must notify us in writing of any claim, with full details, within 3 months of the event giving rise to it. A claim not notified in time is waived to the extent permitted by law.",
      "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under the laws of the Sultanate of Oman, including liability for fraud or wilful misconduct. Where the law does not allow a limit to apply in full, it applies to the maximum extent allowed.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    clauses: [
      "You will defend, indemnify and hold harmless vexoro, each Venture, and their founder, owners, directors, team members, contractors and licensors from and against all claims, demands, proceedings, losses, damages, liabilities, fines, penalties, costs and expenses, including reasonable legal fees, arising out of or relating to: (a) Your Materials or the content of your website, app or products; (b) your business, products, services or customers; (c) your use or misuse of the Websites, Systems, Services, Devices, Data Products or AI output; (d) any unauthorised access to or interference with any System by you or anyone using your credentials; (e) your breach of these Terms or of any law; or (f) any claim that anything you provided infringes another person’s rights.",
      "We may take control of the defence of any such claim at your cost, and you must cooperate fully with us. You must not settle any claim that affects us without our written consent.",
    ],
  },
  {
    id: "suspension",
    title: "Suspension and termination",
    clauses: [
      "We may suspend, restrict or end your access to any or all of the Websites, Systems or Services, immediately and without liability, if: you fail to pay; you breach these Terms or any Specific Terms; we suspect fraud, abuse, a security threat or unlawful activity; you are abusive or threatening towards our team; we are required to by law or by a provider; or continuing would expose us to risk or liability.",
      "We may also end any Service, programme or Venture for convenience by giving you 30 days’ notice, and will then refund any fees you have prepaid for the period after it ends.",
      "On termination for any reason, all amounts you owe us become due immediately, all licences we have granted you end except licences to Deliverables you have fully paid for, and you must stop using and return or delete our Devices, materials and confidential information.",
      "Sections 6, 7, 11, 20, 21, 23, 25, 26, 28 to 33, 35 and 39 to 42, and any other provision that by its nature should survive, continue after termination.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation and refunds",
    clauses: [
      "You may cancel a Project by written notice. You must pay for all work done up to the date of cancellation, including work in progress at our current rates, and for all Third-Party costs already committed, even if these exceed the deposit.",
      "All payments are non-refundable except where these Terms or the law expressly require a refund. In particular, no refunds are given for deposits once work has started, for work that has been delivered, approved or launched, for monthly or licence periods already started, for Device deposits withheld under section 20, or for dissatisfaction with style, results or AI output.",
      "If we end a Service for convenience under clause 34.2, your only remedy is the refund described there.",
    ],
  },
  {
    id: "consumers",
    title: "Your rights as a consumer",
    clauses: [
      "If you are a consumer, you may have rights under the Consumer Protection Law of the Sultanate of Oman (Royal Decree 66/2014) or other consumer laws that cannot be excluded or limited by contract. Nothing in these Terms takes those rights away. Where a provision of these Terms would breach them, it applies only to the extent the law allows.",
    ],
  },
  {
    id: "force-majeure",
    title: "Force majeure",
    clauses: [
      "We are not liable for any delay or failure caused by events beyond our reasonable control, including natural disasters, extreme weather, epidemics, war, terrorism, civil unrest, government action, sanctions, strikes, power, internet or telecom failures, cyber attacks, and failures or changes of Third-Party Services, hosting or cloud providers.",
      "If such an event lasts more than 60 days, either side may end the affected Project or Service by written notice, and you must pay for all work done to that date.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    clauses: [
      "We may change these Terms at any time by publishing a new version at vexoro.dev/terms. The new version applies from its effective date to all use of the Websites and Systems, and to all new orders, programmes and licences.",
      "For a Project or licence already accepted, the version in force when you accepted it continues to apply to that Project or licence, except for changes required by law or relating to the security of our Systems, which apply immediately.",
      "Your continued use of any Website, System or Service after a change takes effect means you accept the changed Terms. It is your responsibility to check this page regularly.",
    ],
  },
  {
    id: "notices",
    title: "Communication and notices",
    clauses: [
      "We communicate mainly by email and WhatsApp, and you agree to receive communications from us electronically. Electronic communications satisfy any requirement for written notice.",
      "Notices to us must be sent by email to the contact in section 42. Notices to you may be sent to any email address or phone number you have given us, or published on our Websites. A notice is treated as received on the next Business Day after it is sent.",
      "You are responsible for keeping your contact details up to date.",
    ],
  },
  {
    id: "disputes",
    title: "Governing law and disputes",
    clauses: [
      "These Terms, and any dispute or claim arising out of or in connection with them or their subject matter, including non-contractual disputes, are governed by the laws of the Sultanate of Oman.",
      "Before starting any proceedings, you must first notify us in writing with full details of the dispute and try in good faith to resolve it with us for at least 30 days.",
      "If the dispute is not resolved, it will be decided exclusively by the competent courts of the Sultanate of Oman, and you irrevocably submit to their jurisdiction. However, we may bring proceedings to recover unpaid amounts, protect our intellectual property, confidential information, Devices or Systems, or seek urgent or injunctive relief, in any court of competent jurisdiction, including the courts of the country where you are based.",
      "To the extent permitted by law, every claim must be brought individually, and not as a claimant or member in any class, group, collective or representative action.",
      "You agree that a breach of sections 6, 7, 20, 21, 23, 25 or 29 may cause us harm that money cannot adequately compensate, and that we may seek injunctive or other equitable relief for it without having to prove actual damage or post any security, to the extent the law allows.",
    ],
  },
  {
    id: "general",
    title: "General provisions",
    clauses: [
      "Entire agreement. These Terms and any Specific Terms are the entire agreement between you and us about their subject matter, and replace all earlier agreements, versions, discussions and statements. You confirm that you have not relied on any statement or promise that is not set out in them.",
      "Severability. If any provision is found invalid or unenforceable, it applies to the maximum extent permitted, and the rest of these Terms remains in full effect.",
      "No waiver. A delay or failure by us to enforce any right is not a waiver of it. A waiver is valid only if given by us in writing.",
      "Assignment. You may not assign, transfer or subcontract any of your rights or obligations without our prior written consent. We may assign, transfer or subcontract any of our rights and obligations at any time, including to any Venture, affiliate, successor or buyer of all or part of our business.",
      "Independent parties. Nothing in these Terms creates a partnership, joint venture, employment, franchise or agency relationship. No one other than you, us and the persons named in clause 32.4 has any right to enforce these Terms.",
      "Records. Our electronic records of communications, approvals, orders, payments, access logs and Project Z Data are admissible and, unless proven otherwise, conclusive evidence of their contents.",
      "Language. These Terms are written in English. If they are translated, the English version prevails to the extent permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    clauses: ["Questions, notices, security reports and data requests about these Terms, our Websites, our Systems or any Venture should be sent to:"],
  },
];
