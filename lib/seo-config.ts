// SEO Configuration for PND50 Website
// Centralized SEO settings - focused keywords (detailed SEO on individual service pages)

export const siteConfig = {
  name: "PND50",
  tagline: "ภ.ง.ด.50 - AI Boutique Accounting & Consultant",
  description:
    "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50 (P.N.D.50). Expert accounting, tax filing, and business setup services for foreign-owned companies in Thailand.",
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
      // Brand keywords (highest priority)
      "PND50",
      "ภ.ง.ด.50",
      "P.N.D.50",
      "ภงด50",
      // Brand + service
      "PND50 accounting",
      "PND50 tax services Thailand",
      // Context keywords
      "accounting Thailand foreign business",
      "tax consultant Bangkok",
    ],
    services: [
      "accounting services Thailand",
      "tax filing Thailand",
      "company registration Thailand",
      "business setup Thailand",
    ],
    calculator: ["accounting fee calculator", "business cost estimate Thailand"],
    contact: ["contact accountant Bangkok", "accounting consultation Thailand"],
    about: ["about PND50", "accounting firm Bangkok", "ภ.ง.ด.50 company"],
    faq: ["PND50 FAQ", "ภ.ง.ด.50 questions", "accounting questions Thailand"],
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
      "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50 (P.N.D.50). Expert accounting, tax filing, and business setup services for foreign-owned companies in Thailand.",
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
  "services/accounting": {
    title: "Accounting Services | PND50 Thailand",
    description: "Professional accounting services for foreign businesses in Thailand.",
  },
  "services/tax": {
    title: "Tax Services | PND50 Thailand",
    description: "Expert tax filing and compliance services for foreign businesses in Thailand.",
  },
  "services/payroll": {
    title: "Payroll Services | PND50 Thailand",
    description: "Accurate payroll processing for foreign businesses in Thailand.",
  },
  "services/corporate": {
    title: "Corporate Services | PND50 Thailand",
    description: "Complete corporate services for foreign businesses in Thailand.",
  },
  "services/advisory": {
    title: "Business Advisory Services | PND50 Thailand",
    description: "Guidance and advice for foreign businesses in Thailand.",
  },
  "services/growth": {
    title: "Business Growth Services | PND50 Thailand",
    description: "Support for business growth and expansion in Thailand.",
  },
  schedule: {
    title: "Schedule a Consultation | PND50 Thailand",
    description: "Schedule a consultation with our expert accountants in Thailand.",
  },
  blog: {
    title: "PND50 Blog | ภ.ง.ด.50 Thailand Tax Guide & Accounting Tips",
    description:
      "Learn everything about PND50 (ภ.ง.ด.50) - Thailand's corporate income tax return. Expert guides on tax filing, accounting, and business compliance for foreign companies in Thailand.",
  },
}

export const pageDates = {
  home: { published: "2024-01-01", modified: "2025-06-15" },
  services: { published: "2024-01-01", modified: "2025-06-20" },
  "services/accounting": { published: "2024-01-15", modified: "2025-06-20" },
  "services/tax": { published: "2024-01-15", modified: "2025-06-20" },
  "services/payroll": { published: "2024-01-15", modified: "2025-06-20" },
  "services/corporate": { published: "2024-01-15", modified: "2025-06-20" },
  "services/advisory": { published: "2024-02-01", modified: "2025-06-18" },
  "services/growth": { published: "2024-03-01", modified: "2025-06-15" },
  about: { published: "2024-01-01", modified: "2025-06-22" },
  contact: { published: "2024-01-01", modified: "2025-04-15" },
  faq: { published: "2024-01-01", modified: "2025-06-22" },
  caseStudies: { published: "2024-02-01", modified: "2025-06-10" },
  calculator: { published: "2024-03-01", modified: "2025-06-01" },
  schedule: { published: "2024-01-15", modified: "2025-06-01" },
  blog: { published: "2025-06-23", modified: "2025-06-23" },
}

export const authors = {
  team: {
    name: "PND50 Accounting Team",
    jobTitle: "Certified Accountants",
    description: "Team of certified accountants with 10+ years experience serving foreign businesses in Thailand",
    credentials: ["Certified Public Accountant", "Tax Auditor Certificate"],
  },
  founder: {
    name: "PND50 Founder",
    jobTitle: "Managing Director & CPA",
    description: "Founder of PND50 with extensive experience in Thai accounting and tax for foreign businesses",
    credentials: ["Certified Public Accountant", "Master of Accounting"],
    sameAs: ["https://linkedin.com/company/pnd50"],
  },
}

// Thai keywords for SEO
export const thaiKeywords = {
  // Brand keywords first (highest SEO priority)
  brand: ["PND50", "ภ.ง.ด.50", "P.N.D.50", "ภงด50", "ภงด.50", "พีเอ็นดี50", "PND 50"],
  general: ["บริษัทบัญชี", "ที่ปรึกษาภาษี", "รับทำบัญชี", "สำนักงานบัญชี"],
  services: ["ภาษีนิติบุคคล", "จดทะเบียนบริษัท", "ยื่นภาษี", "ภ.ง.ด.51", "ภงด.51"],
  location: ["บัญชี กรุงเทพ", "ที่ปรึกษาภาษี กรุงเทพ"],
}

// Industry-specific keywords
export const industryKeywords = {
  foreignBusiness: ["foreign company Thailand", "expat business Thailand", "open business in Thailand"],
  startup: ["startup accounting Thailand", "SME accounting Bangkok"],
}
