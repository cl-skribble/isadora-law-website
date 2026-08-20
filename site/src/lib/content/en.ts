// English content for the Isadora & Associates website.
// Components read from useContent() — edit text here, no JSX changes needed.
import type { SiteContent } from "./types";

export const en: SiteContent = {
  site: {
    name: "Isadora & Associates",
    legalName: "Messrs. Isadora & Associates",
    tagline: "Your Legal Compass",
    established: 2017,
    url: "www.isadoralaw.com",
    phone: "+6012-4728274",
    address: [
      "D3-5-11, Block D, Tamarind Square,",
      "Persiaran Multimedia, Cyber 10,",
      "63000, Cyberjaya, Selangor",
    ],
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],

  logo: { subtitle: "Advocates & Solicitors" },

  hero: {
    established: "Est. 2017 · Cyberjaya, Malaysia",
    headingLine1: "Your Legal",
    headingLine2: "Compass.",
    body: "A premier Malaysian law firm delivering wise counsel, pragmatic strategy, and uncompromising professional standards — for clients who expect more than legal representation.",
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Our Services",
    scroll: "Scroll",
  },

  about: {
    eyebrow: "A Commitment To",
    heading: "Excellence",
    paragraphs: [
      "Messrs. Isadora & Associates, established in 2017, is a premier Malaysian law firm headquartered in Cyberjaya, dedicated to providing high quality, solution oriented legal services. We take pride in offering our valued clients wise counsel alongside pragmatic and cost effective solutions derived from a foundation of vast experience and thorough knowledge of the law. Our firm is built upon the guiding principles of being trustworthy, efficient, and focused on developing sophisticated legal strategies that ensure justice exists for all from both legal and economic perspectives.",
      "At Isadora & Associates, we understand that accurately interpreting a client's unique business objectives is the cornerstone of effective representation. We go beyond the traditional role of legal counsel by building long standing relationships and integrating ourselves as a vital part of our clients' teams.",
    ],
    pullQuote: "Your Goals, Our Strategy. Your Success, Our Standard.",
  },

  welcome: {
    eyebrow: "Welcome",
    heading: "Message",
    paragraphs: [
      "With every matter entrusted to us, we take a thoughtful and strategic approach, developing tailored legal solutions to ensure fairness, protection, and the best possible outcomes for our clients. We believe that justice is not just a principle, but a responsibility we uphold in every case we handle.",
      "Beyond legal representation, we aim to be our clients' trusted partners in their business journey – offering clear guidance, practical insight, and long-term support to help them make confident and well-informed decisions at every stage of growth.",
    ],
    image: "/images/team/team-group.png",
  },

  teamSection: { eyebrow: "Our", emphasis: "Team" },
  team: [
    {
      slug: "isadora-ismail",
      name: "Nur' Isadora Ismail",
      title: "Managing Partner",
      bio: "Specialist in General Corporate Law, Dispute Resolution, and Entertainment & Sports Law.",
      image: "/images/team/isadora-ismail.png",
    },
    {
      slug: "siti-sharina",
      name: "Siti Sharina Binti Ismail",
      title: "Partner & Head of Conveyancing",
      bio: "Head of Conveyancing with vast expertise in complex land transactions and Islamic/Conventional financing for major Malaysian banks.",
      image: "/images/team/siti-sharina.png",
    },
    {
      slug: "nur-aqilah",
      name: "Nur Aqilah Izmah Binti Ahmad Tarmizi",
      title: "Head of Civil Litigation & Dispute Resolution",
      bio: "Lead for Civil Litigation and Dispute Resolution, with extensive experience representing clients in high-value tenancy and negligence cases across all court levels.",
      image: "/images/team/nur-aqilah.png",
    },
    {
      slug: "norridza-halim",
      name: "Norridza Binti Abdul Halim",
      title: "Associate & Head of Corporate Department",
      bio: "Head of Corporate with over a decade of experience managing international business ventures and regulatory compliance for major GLCs.",
      image: "/images/team/norridza-halim.png",
    },
    {
      slug: "nik-norazreen",
      name: "Nik Norazreen",
      title: "Legal Assistant",
      bio: "A dedicated specialist in property conveyancing, handling sub sale transactions and land administration from documentation to completion.",
      image: "/images/team/nik-norazreen.png",
    },
  ],

  managingPartner: {
    name: "Nur' Isadora Ismail",
    title: "Managing Partner",
    credentials: "LL.B (Hons), UiTM | Diploma in Syariah Law & Practice (DSLA UiTM)",
    image: "/images/team/isadora-ismail-full.png",
    bio: "Nur' Isadora Ismail founded Isadora & Associates in 2017 with a clear vision to deliver legal services defined by modern efficiency, strategic depth, and uncompromising professional standards. A First Class law graduate, she is recognised for aligning legal strategy with commercial realities across diverse industries, including established corporate sectors and the eSports ecosystem. Under her leadership, the firm provides principled and commercially sound legal solutions that balance client protection with broader considerations of economic justice.",
    pillarsHeading: "Strategic Pillars of Expertise",
    pillars: [
      {
        title: "Corporate and Commercial & Trademark Agent",
        description:
          "Advises on the drafting, review, and negotiation of complex MOUs, MOAs, shareholder agreements, and commercial arrangements across multiple industries. She is also a Registered Trademark Agent dedicated to protecting brands through strategic trademark registration and intellectual property services.",
      },
      {
        title: "Dispute Resolution",
        description:
          "An experienced litigator representing corporate and individual clients in debt recovery, defamation suits, foreclosure proceedings, or any other contentious matters in both Civil and Syariah Court in Malaysia.",
      },
      {
        title: "Syariah Law",
        description:
          "A dedicated Syariah lawyer providing practical, strategic, and compassionate legal solutions in matrimonial and family law, including divorce, child custody, maintenance, harta sepencarian, faraid, and estate administration.",
      },
    ],
    industryEngagementHeading: "Industry Engagement",
    industryEngagement: [
      {
        org: "Persatuan Peneraju Tanah Bumiputera Malaysia",
        roles: ["EXCO Member", "Keynote and featured speaker"],
      },
      {
        org: "Property Investor Club",
        roles: ["Guest speaker, Property Investor Connect"],
      },
      {
        org: "Institute Keusahawanan Negara, INSKEN",
        roles: ["Program Trainer and Coach"],
      },
      {
        org: "Universiti Teknologi MARA",
        roles: ["Industry speaker, Sembang Santai Alumni Asasi Undang-Undang"],
      },
      {
        org: "Persatuan Peguam-peguam Muslim Malaysia",
        roles: ["Industry speaker, Masterclass Undang-undang"],
      },
    ],
  },

  visionMission: {
    visionLabel: "VISION",
    vision:
      "To be Malaysia's most trusted legal architects, redefining excellence through innovative strategies that empower our clients to navigate a complex world with absolute confidence.",
    missionLabel: "MISSION",
    mission:
      "At Isadora & Associates, our mission is to deliver high-impact, cost-effective legal solutions by seamlessly integrating with our clients' objectives. We are committed to upholding the highest standards of efficiency and trustworthiness, ensuring that justice is accessible, pragmatic, and economically sound for every client we serve.",
  },

  coreValuesSection: { eyebrow: "Core", emphasis: "Values" },
  coreValues: [
    {
      title: "Relentless Efficiency",
      description:
        "Time is a critical asset. We are committed to a high-velocity workflow, utilising thorough legal knowledge and modern practices to deliver results swiftly without ever compromising on the quality of our work.",
    },
    {
      title: "Absolute Integrity",
      description:
        "Trust is our cornerstone. We uphold the highest ethical standards in every interaction, ensuring our clients feel secure in our counsel and confident that their reputation is protected by ours.",
    },
    {
      title: "Pragmatic Innovation",
      description:
        'We value agility and creative problem-solving. We provide "Wise Counsel" that avoids unnecessary complexity, focusing instead on cost-effective and functional solutions that work in the real world.',
    },
    {
      title: "Economic Foresight",
      description:
        "Justice should make sense on a balance sheet. We analyse every case from both a legal and economic perspective, ensuring that our sophisticated strategies deliver maximum value and sustainable outcomes for our clients.",
    },
    {
      title: "Strategic Alignment",
      description:
        "We synchronise with your business DNA. By accurately interpreting your unique objectives, we ensure our legal strategies act as a bridge to your commercial success.",
    },
    {
      title: "Collaborative Partnership",
      description:
        'We move beyond the traditional "lawyer-client" divide. We integrate ourselves as a vital part of your team, fostering long-standing relationships built on mutual respect, transparency, and a shared commitment to your vision.',
    },
  ],

  whyUsSection: { eyebrow: "Why", emphasis: "Isadora & Associates?" },
  whyUs: [
    {
      title: "Precision in Strategy, Agility in Execution",
      description:
        "Our approach is collaborative and integrated, enabling us to provide clear, objective advice while upholding the highest standards of professional integrity, even in complex and challenging circumstances.",
    },
    {
      title: "The Digital Edge",
      description:
        "Through the adoption of the Denning System and Simplify, our processes are structured for systematic documentation and efficient case management — enabling faster follow-ups, greater transparency, and reliable outcomes that meet the demands of today's fast-moving business environment.",
    },
  ],

  achievementsSection: {
    industryEyebrow: "Industry",
    industryEmphasis: "Engagement",
    recentEyebrow: "Recent",
    recentEmphasis: "Achievements",
  },
  achievements: [
    { title: "Best Commercial Law Firm Malaysia", org: "APAC Insider Legal Awards" },
    { title: "Gender Inclusive Law Firm of The Year South East Asia", org: "APAC Insider Legal Awards" },
    { title: "Most Innovative Emerging Commercial Law Firm Malaysia", org: "APAC Insider Legal Awards" },
  ],

  servicesSection: {
    eyebrow: "Our",
    emphasis: "Services",
    intro: "Seven practice areas. Tap any to see key services and detail.",
    keyServicesLabel: "Key Services",
  },
  services: [
    {
      slug: "corporate-commercial",
      name: "Corporate & Commercial Law",
      summary: "Strategic counsel across entity formation, M&A, and cross-border commercial ventures.",
      description:
        "Our Corporate practice is recognised for its strategic approach to navigating complex business landscapes, from initial entity formation to high stakes acquisitions. We act for both local and international clients, offering comprehensive counsel on regulatory compliance and cross-border ventures. Our team provides practical, timely solutions designed to safeguard our clients' long-term commercial interests and economic justice.",
      keyServices: [
        "Company Incorporation & SPV Formation",
        "Mergers & Acquisitions (M&A)",
        "Legal Due Diligence Exercises",
        "Corporate & Commercial Agreements",
        "Shareholders & Share Sale Agreements",
        "Joint Venture & Concession Agreements",
      ],
      image: "/images/backgrounds/corporate-commercial.jpg",
    },
    {
      slug: "real-estate-conveyancing",
      name: "Real Estate & Conveyancing",
      summary: "Precise, secure legal documentation across Malaysia's residential, developer, and land transactions.",
      description:
        "Our Property and Real Estate practice supports a diverse range of clients in navigating Malaysia's dynamic property market with precision and security. We handle a wide spectrum of transactions, including sub sales, developer projects, and complex land matters such as Malay Reserve and Customary Land. Our commitment is to deliver efficient legal documentation that fully protects the rights of purchasers, sellers, and financial institutions alike.",
      keyServices: [
        "Sale and Purchase Agreements (Subsale & Developer)",
        "Consumer & Corporate Loan Documentation",
        "Perfection of Transfer and Charge",
        "Tenancy & Lease Agreements",
        "Property Transmission & Wills",
        "Land Subdivision & Conversion",
      ],
      image: "/images/backgrounds/real-estate-conveyancing.jpg",
    },
    {
      slug: "civil-litigation",
      name: "Civil Litigation & Dispute Resolution",
      summary: "Relentless representation in court and alternative dispute resolution, at every level.",
      description:
        "Led by a team with a proven track record, we are dedicated to the relentless pursuit of justice and the unwavering protection of our clients' rights. We specialise in resolving a broad range of contentious matters, appearing in courts at all levels to manage everything from debt recovery to complex land and trust disputes. Our focus is on offering insightful guidance and achieving outstanding possible outcomes through both trial and alternative dispute resolution.",
      keyServices: [
        "Debt Recovery & Foreclosure",
        "General Negligence & Defamation Claims",
        "Tenancy & Land Trespass Disputes",
        "Family Law & Matrimonial Property",
        "Probate & Estate Administration",
        "Intellectual Property Infringement",
      ],
      image: "/images/backgrounds/civil-litigation.jpg",
    },
    {
      slug: "entertainment-sports",
      name: "Entertainment & Sports Law",
      summary: "Niche legal counsel for the eSports and entertainment industry, from contracts to IP.",
      description:
        "As a pioneer in the evolving eSports landscape, our firm provides niche expertise in governance, regulation, and commercial management. We serve as sole legal counsel for industry leaders, managing the delicate balance between creative freedom and strict legal compliance. Our team plays a pivotal role in safeguarding intellectual property and fostering a secure business environment for athletes and organisations.",
      keyServices: [
        "eSports Contract Drafting & Management",
        "Sponsorship & Consultancy Agreements",
        "Event Management & Licensing Compliance",
        "Intellectual Property Protection",
        "Governance & Regulatory Consultation",
        "Entertainment Industry Dispute Resolution",
      ],
      image: "/images/backgrounds/entertainment-sports.jpg",
    },
    {
      slug: "intellectual-property",
      name: "Intellectual Property Law",
      summary: "Protecting trademarks, copyrights, and trade secrets as lasting commercial value.",
      description:
        "Our Intellectual Property practice protects the ideas, brands, and creative works that underpin our clients' competitive advantage. We advise innovators, businesses, and creators on registering, commercialising, and enforcing their trademarks, copyrights, and trade secrets. Our team combines strategic filing with robust enforcement, transforming intangible assets into lasting, defensible commercial value.",
      keyServices: [
        "Trademark Registration",
        "Copyright Protection & Licensing",
        "IP Infringement & Enforcement Actions",
        "Trade Secret & Confidentiality Agreements",
        "IP Due Diligence & Portfolio Audits",
        "Franchising & Technology Licensing",
      ],
      image: "/images/backgrounds/intellectual-property.jpg",
    },
    {
      slug: "global-desk",
      name: "Global Desk",
      summary: "A dedicated gateway for international enterprises entering the Malaysian market.",
      description:
        "Leveraging our strategic location in Malaysia's technological heart, our Global Desk serves as a dedicated gateway for international enterprises, specifically those from Dubai, China, Singapore, and Taiwan seeking to navigate the Malaysian legal and commercial landscape. We specialise in bridging the gap between diverse regulatory frameworks and local market requirements, providing seamless cross-border counsel that respects both cultural nuances and business objectives.",
      keyServices: [
        "Foreign Direct Investment (FDI) & Market Entry",
        "Cross-Border Corporate Structuring",
        "Regulatory Compliance & Licensing",
        "International Joint Ventures & M&A",
        "Immigration & Global Mobility",
        "Bilingual Dispute Management & Arbitration",
      ],
      image: "/images/backgrounds/global-desk-map.jpg",
    },
    {
      slug: "syariah-law",
      name: "Syariah Law",
      summary: "Practical, compassionate counsel in Syariah matrimonial, family, and estate matters.",
      description:
        "Nur' Isadora Ismail graduated as First Class Post-Graduate Diploma in Syariah Law & Practice (DSLA) UiTM Shah Alam and received Anugerah Sarjana Cemerlang - Master Excellence Award (ASC) for the programme in 2025. She has wide expertise and experience in most of the muslim personal matters and currently is able to practice and represent our clients in Selangor, Malaysia.",
      keyServices: [
        "Registration of Marriage, Polygamy",
        "Divorce and Dissolution of Marriage",
        "Rights of parties after divorce – Mutaah, Nafkah Iddah, Arrears of Maintenance, Matrimonial Property",
        "Inheritance and Succession – Faraidh, Wills",
        "Hadhanah and Custody of Child and Maintenance of Child",
        "Enforcement and Execution of Judgment – Hiwalah, Seizure and Sale, Judgment Debtor Summons",
      ],
      image: "/images/backgrounds/syariah-law.jpg",
    },
  ],

  clientsSection: {
    eyebrow: "Our",
    emphasis: "Valued Clients",
    subtitle: "Trusted by industry leaders across corporate, eSports, publishing, and technology.",
  },
  clients: [
    { name: "NIQA", slug: "niqa", width: 360, height: 219 },
    { name: "MAHTHIKA", slug: "mahthika", width: 298, height: 99 },
    { name: "MAB Esports", slug: "mab-esports", width: 149, height: 159 },
    { name: "TODAK", slug: "todak", width: 301, height: 123 },
    { name: "Siakap Keli", slug: "siakap-keli", width: 174, height: 58 },
    { name: "Warnakala Studios", slug: "warnakala-studios", width: 512, height: 94 },
    { name: "Zibeline International", slug: "zibeline-international", width: 221, height: 52 },
    { name: "IDW Manifest Life", slug: "idw", width: 695, height: 339 },
    { name: "MediCart", slug: "medicart", width: 308, height: 89 },
    { name: "cara", slug: "cara", width: 265, height: 98 },
    { name: "Ketech Asia", slug: "ketech-asia", width: 729, height: 246 },
    { name: "Zinniq", slug: "zinniq", width: 292, height: 320 },
    { name: "MODKHA", slug: "modkha", width: 248, height: 135 },
    { name: "Todak Culture", slug: "todak-culture", width: 288, height: 57 },
    { name: "D'Harmoni Telco Infra", slug: "dharmoni-telco", width: 302, height: 81 },
    { name: "EJA Executive Jet Aviation", slug: "eja", width: 160, height: 160 },
    { name: "Arus Juta", slug: "arus-juta", width: 150, height: 110 },
    { name: "hyleen", slug: "hyleen", width: 908, height: 398 },
  ],

  contact: {
    headingLine1: "Your Legal",
    headingLine2: "Compass.",
    ctaButton: "Book a Consultation",
    rightsReserved: "All rights reserved.",
  },

  form: {
    title: "Send an Enquiry",
    subtitle: "We typically respond within one business day.",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    practiceAreaLabel: "Practice Area",
    messageLabel: "Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "+60 12-345 6789",
    messagePlaceholder: "Tell us briefly about your matter",
    selectAreaPlaceholder: "Select an area",
    otherOption: "Other",
    submitIdle: "Send Enquiry",
    submitPending: "Sending…",
    messages: {
      missingFields: "Please fill in your name, email, and message.",
      invalidEmail: "Please enter a valid email address.",
      tooLong: "One of the fields is too long. Please shorten it.",
      notConfigured: "Sorry, the enquiry form isn't available right now. Please call or email us directly.",
      sendFailed: "Sorry, something went wrong sending your enquiry. Please try again or call us directly.",
      success: "Thank you — your enquiry has been sent. We'll be in touch shortly.",
    },
  },
};
