// SEO Configuration for PND50 Website
// Centralized SEO settings - focused keywords (detailed SEO on individual service pages)

export const siteConfig = {
  name: "PND50",
  tagline: "AI Boutique Accounting & Consultant",
  description:
    "Tech-driven accounting and consulting services in Thailand for foreign-owned businesses. Expert tax filing, bookkeeping, and business setup assistance.",
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

export const localizedKeywords = {
  en: {
    primary: [
      "Thailand accounting services",
      "tax consultant Bangkok",
      "foreign business Thailand",
      "expat accounting Thailand",
      "company registration Thailand",
      "PND50 tax filing",
      "corporate tax Thailand",
      "bookkeeping services Bangkok",
      "payroll services Thailand",
      "business advisory Thailand",
    ],
    secondary: [
      "accounting firm Bangkok",
      "tax planning Thailand",
      "monthly accounting Thailand",
      "annual audit Thailand",
      "VAT registration Thailand",
      "social security Thailand",
      "work permit accounting",
      "BOI accounting Thailand",
      "transfer pricing Thailand",
      "financial reporting Thailand",
    ],
    longTail: [
      "best accounting firm for foreigners in Thailand",
      "how to open company in Thailand as foreigner",
      "corporate income tax rate Thailand",
      "accounting requirements for Thai company",
      "annual tax filing deadline Thailand",
      "SME accounting services Bangkok",
      "startup accounting Thailand",
      "e-commerce accounting Thailand",
      "restaurant accounting Thailand",
      "real estate accounting Thailand",
    ],
  },
  th: {
    primary: [
      "บริการบัญชี ประเทศไทย",
      "ที่ปรึกษาภาษี กรุงเทพ",
      "รับทำบัญชี",
      "จดทะเบียนบริษัท",
      "ยื่นภาษี ภงด.50",
      "ภาษีนิติบุคคล",
      "บริการเงินเดือน",
      "ที่ปรึกษาธุรกิจ",
      "ตรวจสอบบัญชี",
      "วางแผนภาษี",
    ],
    secondary: [
      "สำนักงานบัญชี กรุงเทพ",
      "บัญชีรายเดือน",
      "งบการเงิน",
      "จดทะเบียนภาษีมูลค่าเพิ่ม",
      "ประกันสังคม",
      "บัญชี BOI",
      "ราคาโอน",
      "รายงานการเงิน",
      "บัญชีสำหรับต่างชาติ",
      "บริษัทต่างชาติในไทย",
    ],
    longTail: [
      "สำนักงานบัญชีที่ดีที่สุดสำหรับชาวต่างชาติ",
      "วิธีเปิดบริษัทในไทยสำหรับชาวต่างชาติ",
      "อัตราภาษีเงินได้นิติบุคคล",
      "ข้อกำหนดบัญชีสำหรับบริษัทไทย",
      "กำหนดยื่นภาษีประจำปี",
      "บริการบัญชี SME กรุงเทพ",
      "บัญชีสตาร์ทอัพ",
      "บัญชีอีคอมเมิร์ซ",
      "บัญชีร้านอาหาร",
      "บัญชีอสังหาริมทรัพย์",
    ],
  },
  ru: {
    primary: [
      "бухгалтерские услуги Таиланд",
      "налоговый консультант Бангкок",
      "бизнес для иностранцев Таиланд",
      "бухгалтерия для экспатов",
      "регистрация компании Таиланд",
      "налоговая декларация PND50",
      "корпоративный налог Таиланд",
      "бухгалтерский учет Бангкок",
      "расчет зарплаты Таиланд",
      "бизнес консалтинг Таиланд",
    ],
    secondary: [
      "бухгалтерская фирма Бангкок",
      "налоговое планирование Таиланд",
      "ежемесячная бухгалтерия",
      "годовой аудит Таиланд",
      "регистрация НДС Таиланд",
      "социальное страхование Таиланд",
      "бухгалтерия разрешения на работу",
      "бухгалтерия BOI Таиланд",
      "трансфертное ценообразование",
      "финансовая отчетность Таиланд",
    ],
    longTail: [
      "лучшая бухгалтерская фирма для иностранцев в Таиланде",
      "как открыть компанию в Таиланде иностранцу",
      "ставка корпоративного налога в Таиланде",
      "требования к бухгалтерии тайской компании",
      "срок подачи годовой налоговой декларации",
      "бухгалтерские услуги для малого бизнеса Бангкок",
      "бухгалтерия для стартапов Таиланд",
      "бухгалтерия электронной коммерции",
      "бухгалтерия ресторана Таиланд",
      "бухгалтерия недвижимости Таиланд",
    ],
  },
  cn: {
    primary: [
      "泰国会计服务",
      "曼谷税务顾问",
      "外国人泰国企业",
      "外籍人士会计",
      "泰国公司注册",
      "PND50报税",
      "泰国企业所得税",
      "曼谷记账服务",
      "泰国工资服务",
      "泰国商业咨询",
    ],
    secondary: [
      "曼谷会计师事务所",
      "泰国税务规划",
      "月度会计服务",
      "泰国年度审计",
      "泰国增值税登记",
      "泰国社会保险",
      "工作许可会计",
      "泰国BOI会计",
      "转让定价",
      "泰国财务报告",
    ],
    longTail: [
      "泰国最好的外国人会计师事务所",
      "外国人如何在泰国开公司",
      "泰国企业所得税税率",
      "泰国公司会计要求",
      "泰国年度报税截止日期",
      "曼谷中小企业会计服务",
      "泰国创业公司会计",
      "电子商务会计泰国",
      "餐厅会计泰国",
      "房地产会计泰国",
    ],
  },
}

export const localizedPageMetadata = {
  en: {
    home: {
      title: "PND50 | Accounting & Tax Services for Foreign Businesses in Thailand",
      description:
        "Expert accounting, tax filing, and business setup services for foreign-owned companies in Thailand. English support, transparent pricing, AI-powered accuracy.",
      keywords: localizedKeywords.en.primary,
    },
    services: {
      title: "Business Services in Thailand | Accounting, Tax, Payroll | PND50",
      description:
        "Complete accounting, tax filing, payroll processing, and corporate services for foreign businesses in Thailand. From startup to full-cycle support.",
      keywords: [...localizedKeywords.en.primary.slice(0, 5), ...localizedKeywords.en.secondary.slice(0, 5)],
    },
    about: {
      title: "About PND50 | Leading Accounting Firm for Foreigners in Bangkok",
      description:
        "10+ years serving foreign businesses in Thailand. 200+ satisfied clients, 99% accuracy rate. Meet our team of bilingual accounting experts.",
      keywords: [
        "accounting firm Bangkok",
        "about PND50",
        "foreign business accountant Thailand",
        "expat accounting experts",
      ],
    },
    faq: {
      title: "FAQ | Thailand Accounting & Tax Questions Answered | PND50",
      description:
        "Get answers to common questions about accounting, tax filing, company registration, and doing business in Thailand as a foreigner.",
      keywords: [
        "Thailand accounting FAQ",
        "tax questions Thailand",
        "company registration FAQ",
        "business in Thailand questions",
      ],
    },
    contact: {
      title: "Contact PND50 | Free Consultation for Foreign Businesses in Thailand",
      description:
        "Schedule a free consultation with our accounting experts. Office in Bangkok, serving clients throughout Thailand. English, Thai, Russian, Chinese support.",
      keywords: ["contact accountant Bangkok", "accounting consultation Thailand", "free business consultation"],
    },
  },
  th: {
    home: {
      title: "PND50 | บริการบัญชีและภาษีสำหรับธุรกิจต่างชาติในประเทศไทย",
      description:
        "บริการบัญชี ยื่นภาษี และจัดตั้งธุรกิจอย่างมืออาชีพสำหรับบริษัทต่างชาติในประเทศไทย ทีมงานพูดภาษาของคุณ ราคาโปร่งใส ความแม่นยำด้วย AI",
      keywords: localizedKeywords.th.primary,
    },
    services: {
      title: "บริการธุรกิจในประเทศไทย | บัญชี ภาษี เงินเดือน | PND50",
      description:
        "บริการบัญชีครบวงจร ยื่นภาษี ทำเงินเดือน และบริการนิติบุคคลสำหรับธุรกิจต่างชาติในประเทศไทย ตั้งแต่เริ่มต้นจนถึงบริการเต็มรูปแบบ",
      keywords: [...localizedKeywords.th.primary.slice(0, 5), ...localizedKeywords.th.secondary.slice(0, 5)],
    },
    about: {
      title: "เกี่ยวกับ PND50 | สำนักงานบัญชีชั้นนำสำหรับชาวต่างชาติในกรุงเทพ",
      description:
        "ประสบการณ์กว่า 10 ปีในการให้บริการธุรกิจต่างชาติในประเทศไทย ลูกค้ากว่า 200 ราย อัตราความพึงพอใจ 99% พบทีมผู้เชี่ยวชาญบัญชีสองภาษา",
      keywords: ["สำนักงานบัญชี กรุงเทพ", "เกี่ยวกับ PND50", "นักบัญชีธุรกิจต่างชาติ", "ผู้เชี่ยวชาญบัญชีสำหรับต่างชาติ"],
    },
    faq: {
      title: "คำถามที่พบบ่อย | บัญชีและภาษีประเทศไทย | PND50",
      description: "คำตอบสำหรับคำถามทั่วไปเกี่ยวกับบัญชี การยื่นภาษี จดทะเบียนบริษัท และการทำธุรกิจในประเทศไทยสำหรับชาวต่างชาติ",
      keywords: ["คำถามที่พบบ่อยบัญชีไทย", "คำถามภาษีไทย", "คำถามจดทะเบียนบริษัท", "คำถามธุรกิจในไทย"],
    },
    contact: {
      title: "ติดต่อ PND50 | ปรึกษาฟรีสำหรับธุรกิจต่างชาติในประเทศไทย",
      description:
        "นัดหมายปรึกษาฟรีกับผู้เชี่ยวชาญบัญชีของเรา สำนักงานในกรุงเทพ ให้บริการลูกค้าทั่วประเทศไทย รองรับภาษาไทย อังกฤษ รัสเซีย และจีน",
      keywords: ["ติดต่อนักบัญชี กรุงเทพ", "ปรึกษาบัญชี ประเทศไทย", "ปรึกษาธุรกิจฟรี"],
    },
  },
  ru: {
    home: {
      title: "PND50 | Бухгалтерские и налоговые услуги для иностранного бизнеса в Таиланде",
      description:
        "Профессиональные бухгалтерские услуги, подача налоговых деклараций и регистрация бизнеса для иностранных компаний в Таиланде. Русскоязычная поддержка, прозрачные цены, точность благодаря ИИ.",
      keywords: localizedKeywords.ru.primary,
    },
    services: {
      title: "Бизнес-услуги в Таиланде | Бухгалтерия, Налоги, Зарплата | PND50",
      description:
        "Полный спектр бухгалтерских услуг, подача налоговых деклараций, расчет зарплаты и корпоративные услуги для иностранного бизнеса в Таиланде.",
      keywords: [...localizedKeywords.ru.primary.slice(0, 5), ...localizedKeywords.ru.secondary.slice(0, 5)],
    },
    about: {
      title: "О PND50 | Ведущая бухгалтерская фирма для иностранцев в Бангкоке",
      description:
        "Более 10 лет обслуживания иностранного бизнеса в Таиланде. 200+ довольных клиентов, 99% точность. Познакомьтесь с нашей командой двуязычных экспертов.",
      keywords: [
        "бухгалтерская фирма Бангкок",
        "о PND50",
        "бухгалтер для иностранного бизнеса",
        "эксперты по бухгалтерии для экспатов",
      ],
    },
    faq: {
      title: "Часто задаваемые вопросы | Бухгалтерия и налоги в Таиланде | PND50",
      description:
        "Ответы на частые вопросы о бухгалтерии, налогах, регистрации компании и ведении бизнеса в Таиланде для иностранцев.",
      keywords: [
        "FAQ бухгалтерия Таиланд",
        "вопросы о налогах Таиланд",
        "FAQ регистрация компании",
        "вопросы о бизнесе в Таиланде",
      ],
    },
    contact: {
      title: "Контакты PND50 | Бесплатная консультация для иностранного бизнеса в Таиланде",
      description:
        "Запишитесь на бесплатную консультацию с нашими экспертами. Офис в Бангкоке, обслуживание по всему Таиланду. Поддержка на русском, английском, тайском и китайском языках.",
      keywords: ["контакт бухгалтер Бангкок", "консультация по бухгалтерии Таиланд", "бесплатная бизнес консультация"],
    },
  },
  cn: {
    home: {
      title: "PND50 | 泰国外资企业会计和税务服务",
      description: "为泰国外资公司提供专业的会计、报税和企业注册服务。中文支持，价格透明，AI驱动的精准度。",
      keywords: localizedKeywords.cn.primary,
    },
    services: {
      title: "泰国商业服务 | 会计、税务、工资 | PND50",
      description: "为泰国外资企业提供全面的会计、报税、工资处理和企业服务。从创业到全周期支持。",
      keywords: [...localizedKeywords.cn.primary.slice(0, 5), ...localizedKeywords.cn.secondary.slice(0, 5)],
    },
    about: {
      title: "关于PND50 | 曼谷领先的外国人会计师事务所",
      description: "10年以上服务泰国外资企业经验。200多位满意客户，99%准确率。认识我们的双语会计专家团队。",
      keywords: ["曼谷会计师事务所", "关于PND50", "外资企业会计师", "外籍人士会计专家"],
    },
    faq: {
      title: "常见问题 | 泰国会计和税务问答 | PND50",
      description: "获取有关会计、报税、公司注册和在泰国经商的常见问题解答。",
      keywords: ["泰国会计常见问题", "泰国税务问题", "公司注册常见问题", "泰国经商问题"],
    },
    contact: {
      title: "联系PND50 | 泰国外资企业免费咨询",
      description: "预约与我们会计专家的免费咨询。曼谷办公室，服务泰国全境。提供中文、英文、泰文、俄文支持。",
      keywords: ["联系曼谷会计师", "泰国会计咨询", "免费商业咨询"],
    },
  },
}
