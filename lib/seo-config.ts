// SEO Configuration for PND50 Website
// Centralized SEO settings - focused keywords (detailed SEO on individual service pages)

export const siteConfig = {
  name: "PND50",
  tagline: "AI Boutique Accounting & Consultant",
  description:
    "Tech-driven accounting and consulting services in Thailand for foreign-owned businesses. Expert PND50 tax filing, bookkeeping, and business setup assistance for companies from Singapore, Russia, Taiwan, and worldwide.",
  url: "https://pnd50.com",
  ogImage: "/og-image.jpg",
  locale: "en_US",
  alternateLocale: "th_TH",

  // Business Information for LocalBusiness Schema
  business: {
    name: "PND50 Co., Ltd.",
    legalName: "PND50 Company Limited",
    type: "AccountingService",
    email: "info@pnd50.com",
    phone: "+66-2-017-2949",
    address: {
      streetAddress: "Bhiraj Tower at EmQuartier, 689 Sukhumvit Rd, Khlong Tan Nuea",
      addressLocality: "Watthana",
      addressRegion: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    geo: {
      latitude: 13.7304,
      longitude: 100.5696,
    },
    openingHours: ["Mo-Fr 09:00-18:00"],
    foundingDate: "2014",
    priceRange: "$$",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com/pnd50",
    linkedin: "https://linkedin.com/company/pnd50",
    twitter: "https://twitter.com/pnd50",
  },

  keywords: {
    home: [
      "accounting Thailand",
      "tax consultant Bangkok",
      "foreign company accounting Thailand",
      "open business in Thailand",
    ],
    services: [
      "accounting services Thailand",
      "tax filing Thailand",
      "company registration Thailand",
      "business setup Thailand",
    ],
    calculator: ["accounting fee calculator", "business cost estimate Thailand"],
    contact: ["contact accountant Bangkok", "accounting consultation Thailand"],
    about: ["about PND50", "accounting firm Bangkok"],
    faq: ["accounting questions Thailand", "tax questions Thailand"],
    caseStudies: ["client success stories"],
    portfolio: ["our portfolio"],
    privacyPolicy: ["privacy policy"],
    termsOfService: ["terms of service"],
  },

  // AI search optimization content
  aiSearchContent: {
    businessSummary: `PND50 is a boutique accounting and consulting firm based in Bangkok, Thailand, specializing in serving foreign-owned businesses. Founded in 2014, PND50 combines human expertise with AI-powered tools to deliver accurate and timely accounting, tax filing, and business consulting services.`,

    coreServices: [
      "Accounting & bookkeeping in Thailand",
      "Tax filing & compliance in Thailand",
      "Payroll services in Thailand",
      "Company registration in Thailand",
      "Business advisory in Thailand",
    ],

    uniqueSellingPoints: [
      "English-speaking team for foreign businesses",
      "10+ years experience serving expat companies",
      "200+ clients with 99% satisfaction rate",
      "Transparent fixed-fee pricing",
    ],

    targetAudience: [
      "Foreign entrepreneurs in Thailand",
      "Expats starting businesses in Thailand",
      "International companies expanding to Thailand",
    ],

    frequentlyAskedQuestions: [
      {
        question: "What is PND50 tax filing in Thailand?",
        answer:
          "PND50 (ภ.ง.ด.50) is the annual corporate income tax return that all companies registered in Thailand must file within 150 days after their fiscal year ends.",
      },
      {
        question: "How do I open a business in Thailand as a foreigner?",
        answer:
          "To open a business in Thailand, you need to register a Thai Limited Company, register for tax and social security, and open a corporate bank account. PND50 provides end-to-end assistance.",
      },
      {
        question: "Do I need a Thai accountant for my business?",
        answer:
          "Yes, all companies in Thailand must maintain accounting records according to Thai Accounting Standards. A qualified accountant familiar with Thai regulations is essential.",
      },
    ],
  },
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: "PND50 | Accounting & Tax Services for Foreign Businesses in Thailand",
    description:
      "Expert accounting, tax filing, and business setup services for foreign-owned companies in Thailand. English support, transparent pricing.",
  },
  services: {
    title: "Business Services in Thailand | PND50",
    description:
      "Complete accounting, tax, payroll, and corporate services for foreign businesses in Thailand. From startup to full-cycle support.",
  },
  calculator: {
    title: "Get a Quote | PND50 Thailand",
    description: "Calculate your accounting and tax service costs. Free quote for foreign businesses in Thailand.",
  },
  contact: {
    title: "Contact Us | PND50 Thailand",
    description: "Schedule a free consultation with our expert accountants in Thailand.",
  },
  about: {
    title: "About PND50 | Accounting Firm in Bangkok",
    description: "10+ years serving foreign businesses in Thailand. 200+ clients, 99% satisfaction rate.",
  },
  faq: {
    title: "FAQ | PND50 Thailand",
    description: "Answers to common questions about accounting, tax, and business in Thailand.",
  },
  caseStudies: {
    title: "Client Success Stories | PND50",
    description: "See how PND50 has helped foreign businesses succeed in Thailand.",
  },
  portfolio: {
    title: "Our Portfolio | PND50 Thailand",
    description: "Explore our portfolio of successful client engagements.",
  },
  privacyPolicy: {
    title: "Privacy Policy | PND50 Thailand",
    description: "PND50's privacy policy and data protection practices.",
  },
  termsOfService: {
    title: "Terms of Service | PND50 Thailand",
    description: "PND50's terms of service for accounting and consulting.",
  },
}

export const thaiKeywords = {
  general: ["บริษัทบัญชี", "ที่ปรึกษาภาษี", "รับทำบัญชี"],
  services: ["ภงด.50", "ภาษีนิติบุคคล", "จดทะเบียนบริษัท"],
  location: ["บัญชี กรุงเทพ", "accounting Bangkok"],
}

// Local business areas served
export const serviceAreas = [
  { name: "Bangkok", nameTh: "กรุงเทพมหานคร" },
  { name: "Nonthaburi", nameTh: "นนทบุรี" },
  { name: "Samut Prakan", nameTh: "สมุทรปราการ" },
  { name: "Pathum Thani", nameTh: "ปทุมธานี" },
  { name: "Chonburi", nameTh: "ชลบุรี" },
]

export const industryKeywords = {
  foreignBusiness: ["foreign company Thailand", "expat business Thailand", "open business in Thailand"],
  startup: ["startup accounting Thailand", "SME accounting Bangkok"],
}

// Target countries for international SEO
export const targetCountries = [
  {
    code: "SG",
    name: "Singapore",
    language: "en-SG",
    description: "Accounting services for Singapore companies expanding to Thailand",
  },
  {
    code: "RU",
    name: "Russia",
    language: "ru-RU",
    description: "Accounting services for Russian businesses in Thailand",
  },
  {
    code: "TW",
    name: "Taiwan",
    language: "zh-TW",
    description: "Accounting services for Taiwanese companies in Thailand",
  },
  {
    code: "TH",
    name: "Thailand",
    language: "th-TH",
    description: "Local accounting services in Thailand",
  },
]

// International keywords for geo SEO
export const internationalKeywords = {
  singapore: [
    "PND50 tax filing Singapore companies",
    "Thailand accounting for Singapore business",
    "Singapore company Thailand subsidiary tax",
    "Thai corporate tax Singapore entrepreneurs",
    "PND50 filing Singapore-Thailand business",
  ],
  russia: [
    "PND50 tax filing Russian business Thailand",
    "Thailand accounting Russian entrepreneurs",
    "Russian company Thailand tax compliance",
    "Thai corporate tax Russian business owners",
    "PND50 filing Russian digital nomads Thailand",
  ],
  taiwan: [
    "PND50 tax filing Taiwan companies Thailand",
    "Thailand accounting Taiwanese business",
    "Taiwan company Thailand subsidiary tax",
    "Thai corporate tax Taiwan manufacturers",
    "PND50 filing Taiwan-Thailand trading",
  ],
  china: [
    "PND50 tax filing Chinese companies Thailand",
    "Thailand accounting Chinese business",
    "China company Thailand subsidiary tax",
    "Thai corporate tax Chinese investors",
  ],
  general: [
    "PND50 foreign company Thailand",
    "Thai tax filing international business",
    "Expat accounting Thailand",
    "Foreign business tax Thailand",
    "International company Thailand accounting",
  ],
}
