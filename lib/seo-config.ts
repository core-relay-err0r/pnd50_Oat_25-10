// SEO Configuration for PND50 Website
// Centralized SEO settings for consistency across all pages

export const siteConfig = {
  name: "PND50",
  tagline: "AI Boutique Accounting & Consultant",
  description:
    "Tech-driven accounting and consulting services in Thailand. Expert PND50 tax filing, VAT management, corporate tax planning, and business consulting for foreign-owned companies.",
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

  // Keywords for different pages
  keywords: {
    home: [
      "accounting Thailand",
      "tax consultant Bangkok",
      "PND50 filing",
      "บริษัทบัญชี",
      "ที่ปรึกษาภาษี",
      "foreign company accounting Thailand",
      "AI accounting",
    ],
    services: [
      "corporate tax planning Thailand",
      "VAT management",
      "withholding tax",
      "audit support Bangkok",
      "company registration Thailand",
    ],
    calculator: ["tax calculator Thailand", "accounting fee calculator", "business cost estimate Thailand"],
    contact: ["contact accountant Bangkok", "accounting consultation Thailand", "free tax consultation"],
    about: ["about PND50", "accounting firm Bangkok", "experienced accountants Thailand"],
  },

  // AI search optimization content
  aiSearchContent: {
    businessSummary: `PND50 is a boutique accounting and consulting firm based in Bangkok, Thailand, specializing in serving foreign-owned businesses. Founded in 2014, PND50 combines human expertise with AI-powered tools to deliver 5x faster and error-free accounting, tax filing, and business consulting services. The company is located at Bhiraj Tower at EmQuartier and serves clients from Singapore, Russia, Taiwan, and other countries operating businesses in Thailand.`,

    coreServices: [
      "Annual PND50 (ภ.ง.ด.50) corporate income tax filing",
      "Monthly bookkeeping and accounting",
      "VAT registration and monthly PP.30 filing",
      "Withholding tax management",
      "Tax planning and optimization",
      "Audit support and preparation",
      "Company registration in Thailand",
      "Business consulting for market entry",
    ],

    uniqueSellingPoints: [
      "Human advisors powered by AI for 5x faster processing",
      "Native language support (English, Thai, Russian, Chinese)",
      "10+ years of experience serving foreign businesses",
      "200+ clients with 99% satisfaction rate",
      "Transparent fixed-fee pricing",
      "Located in prime Bangkok business district",
    ],

    targetAudience: [
      "Foreign entrepreneurs starting businesses in Thailand",
      "Singapore companies expanding to Thailand",
      "Russian business owners in Thailand",
      "Taiwanese companies with Thailand operations",
      "E-commerce businesses needing Thai accounting",
      "Startups requiring compliance support",
    ],

    frequentlyAskedQuestions: [
      {
        question: "What is PND50 tax filing in Thailand?",
        answer:
          "PND50 (ภ.ง.ด.50) is the annual corporate income tax return that all companies registered in Thailand must file within 150 days after their fiscal year ends. PND50 accounting firm specializes in preparing and filing this return accurately and on time.",
      },
      {
        question: "How much does accounting cost in Thailand?",
        answer:
          "Accounting fees in Thailand typically range from 5,000-50,000 THB per month depending on transaction volume and complexity. PND50 offers transparent pricing starting from 8,000 THB/month for startups with our Startup Package.",
      },
      {
        question: "Can foreigners own 100% of a Thai company?",
        answer:
          "Yes, foreigners can own 100% of certain types of businesses in Thailand, particularly those promoted by the BOI or operating under the Foreign Business Act exemptions. PND50 can advise on the best structure for your business.",
      },
      {
        question: "Do I need a Thai accountant for my business?",
        answer:
          "Yes, all companies registered in Thailand must maintain accounting records in Thai Baht according to Thai Accounting Standards. A qualified accountant familiar with Thai regulations is essential for compliance.",
      },
    ],
  },
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: "PND50 | AI Boutique Accounting & Consultant in Thailand",
    description:
      "Tech-driven accounting and consulting services. Expert human advisors powered by AI for 5x faster, error-free tax filing, bookkeeping, and business consulting in Thailand.",
  },
  services: {
    title: "Business Services | PND50 (ภ.ง.ด.50) Accounting Thailand",
    description:
      "Complete accounting, tax filing (ภ.ง.ด.50/P.N.D.50), and business compliance services for foreign-owned companies in Thailand. Expert support from setup to ongoing operations.",
  },
  calculator: {
    title: "Accounting Fee Calculator | Get Instant Quote | PND50",
    description:
      "Calculate your accounting and tax service costs instantly. Free quote for company registration, bookkeeping, tax filing, and consulting services in Thailand.",
  },
  contact: {
    title: "Contact Us | Free Consultation | PND50 Thailand",
    description:
      "Schedule a free consultation with our expert accountants. We speak your language and provide personalized accounting solutions for your business in Thailand.",
  },
  about: {
    title: "About PND50 | 10+ Years of Excellence in Thai Accounting",
    description:
      "Learn about PND50's journey. 200+ clients served, 99% satisfaction rate. Our AI-powered team delivers exceptional accounting services for foreign businesses in Thailand.",
  },
  faq: {
    title: "Frequently Asked Questions | PND50 Thailand",
    description:
      "Find answers to common questions about accounting, tax filing, company registration, and business consulting services in Thailand.",
  },
  caseStudies: {
    title: "Client Success Stories | Case Studies | PND50",
    description:
      "Discover how PND50 has helped businesses succeed in Thailand. Real case studies showcasing our accounting and consulting expertise.",
  },
  portfolio: {
    title: "Our Portfolio | PND50 Thailand",
    description:
      "Explore our portfolio of successful projects and client engagements across various industries in Thailand.",
  },
  privacyPolicy: {
    title: "Privacy Policy | PND50 Thailand",
    description: "Read PND50's privacy policy. Learn how we collect, use, and protect your personal information.",
  },
  termsOfService: {
    title: "Terms of Service | PND50 Thailand",
    description: "Review PND50's terms of service for accounting and consulting services in Thailand.",
  },
}

// Service-specific metadata
export const serviceMetadata = {
  accounting: {
    title: "Accounting Services | Monthly Bookkeeping | PND50 Thailand",
    description:
      "Professional accounting and bookkeeping services for businesses in Thailand. Accurate financial records, monthly reports, and compliance support.",
  },
  "tax-planning": {
    title: "Tax Planning & Strategy | Corporate Tax | PND50 Thailand",
    description:
      "Strategic tax planning services to minimize your tax burden legally. Expert corporate tax advice for foreign-owned businesses in Thailand.",
  },
  "tax-optimization": {
    title: "Tax Optimization Services | Save on Taxes | PND50 Thailand",
    description:
      "Optimize your tax position with our expert guidance. Legal tax-saving strategies for businesses operating in Thailand.",
  },
  "pnd50-filing": {
    title: "PND50 Filing Service | Annual Tax Return | PND50 Thailand",
    description:
      "Expert PND50 annual tax filing services. Accurate, timely submission of your corporate income tax return in Thailand.",
  },
  "vat-management": {
    title: "VAT Management Services | VAT Filing Thailand | PND50",
    description:
      "Complete VAT management including registration, monthly filing, and compliance for businesses in Thailand.",
  },
  "withholding-tax": {
    title: "Withholding Tax Services | Tax Compliance | PND50 Thailand",
    description: "Expert withholding tax management and compliance services for all payment types in Thailand.",
  },
  "audit-support": {
    title: "Audit Support Services | Financial Audit | PND50 Thailand",
    description:
      "Professional audit support and preparation services. Ensure smooth audits with our expert assistance in Thailand.",
  },
  "business-consulting": {
    title: "Business Consulting | Market Entry Thailand | PND50",
    description:
      "Strategic business consulting for companies entering or expanding in Thailand. Expert advice on market entry, compliance, and growth.",
  },
  "corporate-tax-planning": {
    title: "Corporate Tax Planning | Tax Strategy | PND50 Thailand",
    description: "Comprehensive corporate tax planning and strategy services for businesses operating in Thailand.",
  },
}

// Package metadata
export const packageMetadata = {
  startup: {
    title: "Startup Package | Company Registration | PND50 Thailand",
    description:
      "Perfect for new businesses. Company registration, basic accounting setup, monthly bookkeeping, and tax compliance services in Thailand.",
  },
  growth: {
    title: "Growth Package | Complete Accounting Solution | PND50 Thailand",
    description:
      "Comprehensive accounting package including payroll, VAT management, financial reporting, and priority support for growing businesses in Thailand.",
  },
  "full-cycle": {
    title: "Full-Cycle Package | Enterprise Accounting | PND50 Thailand",
    description:
      "Enterprise-grade accounting services with strategic advisory, audit support, corporate governance, and dedicated account manager in Thailand.",
  },
}

export const thaiKeywords = {
  general: ["บริษัทบัญชี", "สำนักงานบัญชี", "ที่ปรึกษาภาษี", "รับทำบัญชี", "บริการบัญชี", "วางแผนภาษี"],
  services: ["ยื่น ภงด.50", "ภาษีนิติบุคคล", "ภาษีมูลค่าเพิ่ม", "ภาษีหัก ณ ที่จ่าย", "จดทะเบียนบริษัท", "ตรวจสอบบัญชี"],
  location: ["บัญชี กรุงเทพ", "ที่ปรึกษาภาษี กรุงเทพ", "สำนักงานบัญชี กรุงเทพ", "accounting Bangkok", "tax consultant Bangkok"],
}

// Local business areas served
export const serviceAreas = [
  { name: "Bangkok", nameTh: "กรุงเทพมหานคร" },
  { name: "Nonthaburi", nameTh: "นนทบุรี" },
  { name: "Samut Prakan", nameTh: "สมุทรปราการ" },
  { name: "Pathum Thani", nameTh: "ปทุมธานี" },
  { name: "Chonburi", nameTh: "ชลบุรี" },
  { name: "Phuket", nameTh: "ภูเก็ต" },
  { name: "Chiang Mai", nameTh: "เชียงใหม่" },
]

export const industryKeywords = {
  foreignBusiness: [
    "foreign company Thailand",
    "BOI company accounting",
    "international business Thailand",
    "expat business services",
    "foreign investment Thailand",
  ],
  ecommerce: ["ecommerce accounting Thailand", "online business tax Thailand", "digital business accounting"],
  startup: ["startup accounting Thailand", "SME accounting Bangkok", "small business tax Thailand"],
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
    altLanguage: "en-RU",
  },
  {
    code: "TW",
    name: "Taiwan",
    language: "zh-TW",
    description: "Accounting services for Taiwanese companies in Thailand",
    altLanguage: "en-TW",
  },
  {
    code: "TH",
    name: "Thailand",
    language: "th-TH",
    description: "Local accounting services in Thailand",
  },
]
