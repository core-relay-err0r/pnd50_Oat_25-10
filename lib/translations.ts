export const translations = {
  en: {
    hero: {
      title1: "AI Boutique",
      words: ["Accounting", "Consultant", "Compliant"],
      description:
        "You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your native language. Our AI makes them",
      faster: "5x faster",
      and: "and",
      errorFree: "totally error-free",
    },
    nav: {
      services: "Services",
      about: "About us",
      faq: "FAQ",
      contact: "Contact",
      schedule: "Schedule Consultation",
    },
    services: {
      badge: "Trusted by 200+ Businesses",
      title1: "Business Compliance &",
      title2: "Accounting",
      title3: "Services in Thailand",
      description:
        "From company setup to ongoing compliance, we provide end-to-end business solutions for foreign-owned companies in Thailand.",
      stats: {
        clients: { value: "200+", label: "Clients Served" },
        experience: { value: "10+", label: "Years Experience" },
        satisfaction: { value: "99%", label: "Client Satisfaction" },
      },
      sectionTitle: "Our Services",
      sectionDescription: "Comprehensive accounting and compliance solutions tailored for your business",
      serviceCards: [
        {
          title: "Accounting",
          description:
            "Monthly bookkeeping with English reports, DBD-compliant financial statements, and real-time dashboard access.",
          features: ["Monthly English reports", "DBD compliance", "Real-time dashboard"],
          href: "/services/accounting",
        },
        {
          title: "Tax Filing",
          description: "Complete tax compliance including PND50/51, PP30, withholding tax, and year-end submissions.",
          features: ["PND50/51 filing", "VAT returns (PP30)", "Withholding tax"],
          href: "/services/tax",
        },
        {
          title: "Payroll",
          description: "End-to-end payroll processing, social security, PND1, and employee documentation.",
          features: ["Salary processing", "Social security", "PND1 filing"],
          href: "/services/payroll",
        },
        {
          title: "Corporate Services",
          description: "Company registration, BOI applications, work permits, and corporate secretarial services.",
          features: ["Company registration", "Work permits", "BOI applications"],
          href: "/services/corporate",
        },
        {
          title: "Advisory",
          description: "Strategic guidance on Thai regulations, tax planning, and business structuring.",
          features: ["Tax planning", "Regulatory guidance", "Business structuring"],
          href: "/services/advisory",
        },
        {
          title: "Growth Services",
          description: "Financial analysis, KPI tracking, and strategic recommendations to scale your business.",
          features: ["Financial analysis", "KPI tracking", "Growth strategy"],
          href: "/services/growth",
        },
      ],
      exploreService: "Explore this service",
    },
    about: {
      badge: "About PND50",
      title1: "Regional corporate",
      title2: "specialist with",
      title3: "Global standards",
      description:
        "PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate Thai accounting and compliance with clarity and confidence.",
      contactUs: "Contact Us",
      stats: {
        years: { value: "10+", label: "Years of Excellence", description: "Trusted expertise in Thai accounting" },
        clients: { value: "150+", label: "Happy Clients", description: "International businesses served" },
        satisfaction: { value: "100%", label: "Client Satisfaction", description: "Rated by our customers" },
      },
      mission: {
        badge: "Our Mission",
        title: "Making Thai Accounting",
        titleHighlight: "Clear & Stress-Free",
        description:
          "We believe accounting should empower, not confuse. Our approach combines expert knowledge with modern technology to make Thai compliance transparent and manageable.",
        points: [
          { title: "Crystal Clear", description: "Plain-English communication about your numbers and obligations" },
          { title: "Always Compliant", description: "Stay ahead of deadlines with proactive compliance management" },
          {
            title: "Peace of Mind",
            description: "Human expertise backed by reliable technology and real-time support",
          },
        ],
      },
      testimonials: {
        badge: "Our Success Stories",
        title: "Trusted by Businesses Across Thailand",
        description:
          "We're proud to support international startups — especially from Russia and Vietnam. Helping them navigate Thai business with confidence.",
      },
    },
    faq: {
      badge: "Help Center",
      title1: "Frequently Asked",
      title2: "Questions",
      description: "Clear answers about accounting, tax, and business setup in Thailand — explained in simple English.",
      searchPlaceholder: "Search questions...",
      allQuestions: "All Questions",
      categories: {
        accounting: "Accounting Questions",
        tax: "Tax Questions",
        general: "General Questions",
        corporate: "Corporate & Compliance",
      },
      questions: {
        accounting: [
          {
            question:
              "Why do I have to record accounting in Thai Baht when all transactions are in foreign currencies?",
            answer:
              "All companies registered in Thailand under Thai law must prepare financial statements in accordance with Thai Accounting Standards and policies, which require using the Thai Baht (THB) as the presentation currency. Even if all your transactions are in foreign currencies, your official financial reports must be presented in THB.",
            reference: "Section 11, Accounting Act B.E. 2543 (2000); Thai Accounting Standard (TAS) No.21",
          },
          {
            question: "Why does my company have a 'Gain or Loss on Exchange Rate' account?",
            answer:
              "Because your business uses foreign currencies for transactions, every time these are converted to Thai Baht for accounting, the exchange rate may differ from the transaction date to the payment date. This difference creates a foreign exchange gain or loss, which reflects the true value of your foreign-currency transactions.",
            reference: "Thai Accounting Standard (TAS) No.21 'The Effects of Changes in Foreign Exchange Rates'",
          },
          {
            question: "Why must we revalue exchange rates at year-end using the rate from the Thai Revenue Department?",
            answer:
              "At the end of each accounting year, companies must adjust the value of all foreign-currency items (such as receivables or cash) to reflect the current exchange rate. The Thai Revenue Department publishes official exchange rates each year, which must be used for consistency and tax compliance.",
            reference: "Thai Accounting Standard (TAS) No.21; Revenue Department Announcement on Exchange Rates",
          },
        ],
        tax: [
          {
            question: "Why must exchange gains or losses be included in taxable income or expenses?",
            answer:
              "Foreign exchange gains or losses are part of real business results and must be treated as taxable income or deductible expenses under Thai tax law.",
            reference: "Section 65 Ter (4), Revenue Code of Thailand; Departmental Instruction Paw.0506/19642 (2001)",
          },
          {
            question:
              "Do we need to register for VAT if revenue exceeds THB 1.8 million but all sales are outside Thailand?",
            answer:
              "If all sales and services are performed and used entirely outside Thailand, your business is not subject to Thai VAT. You don't need to register for VAT unless you wish to do so voluntarily.",
            reference: "Section 77/1 and Section 82/3, Revenue Code of Thailand",
          },
          {
            question: "After registering for VAT, do I still need to file form PP.30 if there's no income?",
            answer:
              "Yes. Once VAT-registered, you must file Form PP.30 every month — by the 15th of the following month — even if you have no income. Missing the deadline may lead to surcharges and penalties.",
            reference: "Section 83 and Section 90, Revenue Code of Thailand",
          },
        ],
        general: [
          {
            question: "Why should we use monthly accounting and tax services with PND50?",
            answer:
              "Even if most transactions occur overseas and no withholding tax applies, monthly accounting ensures compliance with Thai accounting and tax law, no missed deadlines or penalties, organized audit-ready financial records, and ongoing support with expert advice. Monthly accounting gives peace of mind — we keep your business accurate, compliant, and stress-free.",
            reference: "Accounting Act B.E.2543; Thai Revenue Code filing requirements",
          },
        ],
        corporate: [
          {
            question: "Can a foreigner be the sole director or shareholder of a Thai company?",
            answer:
              "Yes, in some cases. Foreigners can own 100% of a company depending on the business type and Thailand's foreign business regulations. Our Corporate Service team can review your structure and prepare all required registration documents.",
          },
          {
            question: "How can I change company details, such as directors or address?",
            answer:
              "Any changes to company details — directors, address, or shareholders — must be officially filed with the Department of Business Development (DBD). PND50's Corporate Service team handles all updates and filings on your behalf.",
          },
          {
            question: "Can my company open a corporate bank account in Thailand?",
            answer:
              "Yes. Every registered company can open a corporate bank account. Requirements vary by bank, but as part of our Corporate Services, PND50 can guide you through the process and help prepare the necessary documents.",
          },
        ],
      },
    },
    contact: {
      badge: "Contact",
      title1: "Let's talk about",
      title2: "your business",
      description:
        "Have questions about Thai accounting or compliance? We're here to help you navigate with confidence.",
      quickResponse: {
        title: "Quick Response",
        subtitle: "We reply within 24 hours",
        email: "Email Response",
        whatsapp: "WhatsApp Reply",
      },
      form: {
        title: "Send a Message",
        subtitle: "Fill out the form and we'll be in touch",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        whatsapp: "WhatsApp",
        companyName: "Company Name",
        message: "Message",
        messagePlaceholder: "Tell us about your needs...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Thank you! We'll get back to you soon.",
        error: "Something went wrong. Please try again.",
      },
      office: {
        title: "Office",
        address: [
          "Suite 3065, 30th Floor",
          "Bhiraj Tower at EmQuartier",
          "689 Sukhumvit Rd, Khlong Tan Nuea",
          "Watthana, Bangkok 10110",
        ],
      },
      directContact: "Direct Contact",
      messageUs: "Message Us",
    },
    cta: {
      badge: "Get Started",
      title1: "Ready to simplify your",
      title2: "business in Thailand?",
      description: "Let's discuss how we can help your business thrive with expert accounting and tax support.",
      schedule: "Schedule Consultation",
      contact: "Contact Us",
    },
  },
  th: {
    hero: {
      title1: "AI Boutique",
      words: ["บัญชี", "ที่ปรึกษา", "ถูกต้องตามกฎหมาย"],
      description: "คุณคุยกับผู้เชี่ยวชาญ ไม่ใช่หุ่นยนต์ เราเชื่อมต่อคุณกับที่ปรึกษาที่พูดภาษาของคุณ AI ของเราทำให้พวกเขา",
      faster: "เร็วขึ้น 5 เท่า",
      and: "และ",
      errorFree: "ไม่มีข้อผิดพลาด",
    },
    nav: {
      services: "บริการ",
      about: "เกี่ยวกับเรา",
      faq: "คำถามที่พบบ่อย",
      contact: "ติดต่อ",
      schedule: "นัดหมายปรึกษา",
    },
    services: {
      badge: "ได้รับความไว้วางใจจาก 200+ ธุรกิจ",
      title1: "บริการด้านการปฏิบัติตามกฎระเบียบ",
      title2: "และบัญชี",
      title3: "ในประเทศไทย",
      description:
        "ตั้งแต่การจดทะเบียนบริษัทจนถึงการปฏิบัติตามกฎระเบียบอย่างต่อเนื่อง เราให้บริการครบวงจรสำหรับบริษัทที่มีเจ้าของเป็นชาวต่างชาติในประเทศไทย",
      stats: {
        clients: { value: "200+", label: "ลูกค้าที่ให้บริการ" },
        experience: { value: "10+", label: "ปีประสบการณ์" },
        satisfaction: { value: "99%", label: "ความพึงพอใจของลูกค้า" },
      },
      sectionTitle: "บริการของเรา",
      sectionDescription: "โซลูชันด้านบัญชีและการปฏิบัติตามกฎระเบียบครบวงจรที่ปรับให้เหมาะกับธุรกิจของคุณ",
      serviceCards: [
        {
          title: "บัญชี",
          description:
            "จัดทำบัญชีรายเดือนพร้อมรายงานภาษาอังกฤษ งบการเงินตามมาตรฐาน กรมพัฒนาธุรกิจการค้า และเข้าถึงแดชบอร์ดแบบเรียลไทม์",
          features: ["รายงานภาษาอังกฤษรายเดือน", "ตรงตามมาตรฐาน กรมพัฒนาธุรกิจการค้า", "แดชบอร์ดแบบเรียลไทม์"],
          href: "/th/services/accounting",
        },
        {
          title: "ยื่นภาษี",
          description: "บริการยื่นภาษีครบถ้วน รวมถึง ภ.ง.ด.50/51, ภ.พ.30, ภาษีหัก ณ ที่จ่าย และการยื่นสิ้นปี",
          features: ["ยื่น ภ.ง.ด.50/51", "ยื่น ภ.พ.30", "ภาษีหัก ณ ที่จ่าย"],
          href: "/th/services/tax",
        },
        {
          title: "เงินเดือน",
          description: "บริการจัดการเงินเดือนครบวงจร ประกันสังคม ภ.ง.ด.1 และเอกสารพนักงาน",
          features: ["ประมวลผลเงินเดือน", "ประกันสังคม", "ยื่น ภ.ง.ด.1"],
          href: "/th/services/payroll",
        },
        {
          title: "บริการองค์กร",
          description: "จดทะเบียนบริษัท ขอรับการส่งเสริมการลงทุน (BOI) ใบอนุญาตทำงาน และบริการเลขานุการบริษัท",
          features: ["จดทะเบียนบริษัท", "ใบอนุญาตทำงาน", "ขอรับการส่งเสริม BOI"],
          href: "/th/services/corporate",
        },
        {
          title: "ที่ปรึกษา",
          description: "คำแนะนำเชิงกลยุทธ์เกี่ยวกับกฎระเบียบไทย การวางแผนภาษี และการจัดโครงสร้างธุรกิจ",
          features: ["วางแผนภาษี", "คำแนะนำด้านกฎระเบียบ", "จัดโครงสร้างธุรกิจ"],
          href: "/th/services/advisory",
        },
        {
          title: "บริการเติบโต",
          description: "การวิเคราะห์ทางการเงิน การติดตาม KPI และคำแนะนำเชิงกลยุทธ์เพื่อขยายธุรกิจของคุณ",
          features: ["วิเคราะห์การเงิน", "ติดตาม KPI", "กลยุทธ์การเติบโต"],
          href: "/th/services/growth",
        },
      ],
      exploreService: "ดูรายละเอียดบริการ",
    },
    about: {
      badge: "เกี่ยวกับ PND50",
      title1: "ผู้เชี่ยวชาญด้านองค์กร",
      title2: "ระดับภูมิภาคด้วย",
      title3: "มาตรฐานสากล",
      description:
        "PND50 เป็นสำนักงานบัญชีและที่ปรึกษาในประเทศไทย ช่วยเหลือธุรกิจที่เป็นเจ้าของโดยชาวต่างชาติในการจัดการบัญชีและการปฏิบัติตามกฎระเบียบไทยอย่างชัดเจนและมั่นใจ",
      contactUs: "ติดต่อเรา",
      stats: {
        years: { value: "10+", label: "ปีแห่งความเป็นเลิศ", description: "ความเชี่ยวชาญที่เชื่อถือได้ในด้านบัญชีไทย" },
        clients: { value: "150+", label: "ลูกค้าที่พึงพอใจ", description: "ธุรกิจต่างชาติที่ให้บริการ" },
        satisfaction: { value: "100%", label: "ความพึงพอใจของลูกค้า", description: "ได้รับการจัดอันดับจากลูกค้าของเรา" },
      },
      mission: {
        badge: "พันธกิจของเรา",
        title: "ทำให้บัญชีไทย",
        titleHighlight: "ชัดเจนและไร้ความเครียด",
        description:
          "เราเชื่อว่าบัญชีควรเสริมพลัง ไม่ใช่สร้างความสับสน แนวทางของเราผสมผสานความรู้จากผู้เชี่ยวชาญกับเทคโนโลยีทันสมัยเพื่อทำให้การปฏิบัติตามกฎระเบียบไทยโปร่งใสและจัดการได้",
        points: [
          { title: "ชัดเจนกระจ่าง", description: "สื่อสารเรื่องตัวเลขและภาระผูกพันของคุณด้วยภาษาที่เข้าใจง่าย" },
          { title: "ปฏิบัติตามกฎเสมอ", description: "นำหน้ากำหนดเวลาด้วยการจัดการการปฏิบัติตามกฎระเบียบเชิงรุก" },
          { title: "ความสบายใจ", description: "ความเชี่ยวชาญของมนุษย์ที่หนุนด้วยเทคโนโลยีที่เชื่อถือได้และการสนับสนุนแบบเรียลไทม์" },
        ],
      },
      testimonials: {
        badge: "เรื่องราวความสำเร็จของเรา",
        title: "ได้รับความไว้วางใจจากธุรกิจทั่วประเทศไทย",
        description: "เราภูมิใจที่ได้สนับสนุนสตาร์ทอัพต่างชาติ โดยเฉพาะจากรัสเซียและเวียดนาม ช่วยให้พวกเขานำทางธุรกิจไทยอย่างมั่นใจ",
      },
    },
    faq: {
      badge: "ศูนย์ช่วยเหลือ",
      title1: "คำถาม",
      title2: "ที่พบบ่อย",
      description: "คำตอบที่ชัดเจนเกี่ยวกับบัญชี ภาษี และการจัดตั้งธุรกิจในประเทศไทย — อธิบายด้วยภาษาที่เข้าใจง่าย",
      searchPlaceholder: "ค้นหาคำถาม...",
      allQuestions: "คำถามทั้งหมด",
      categories: {
        accounting: "คำถามด้านบัญชี",
        tax: "คำถามด้านภาษี",
        general: "คำถามทั่วไป",
        corporate: "องค์กรและการปฏิบัติตามกฎระเบียบ",
      },
      questions: {
        accounting: [
          {
            question: "ทำไมต้องบันทึกบัญชีเป็นเงินบาทเมื่อธุรกรรมทั้งหมดเป็นสกุลเงินต่างประเทศ?",
            answer:
              "บริษัททั้งหมดที่จดทะเบียนในประเทศไทยตามกฎหมายไทยต้องจัดทำงบการเงินตามมาตรฐานการบัญชีไทยและนโยบายที่กำหนดให้ใช้เงินบาท (THB) เป็นสกุลเงินในการนำเสนอ แม้ว่าธุรกรรมทั้งหมดของคุณจะเป็นสกุลเงินต่างประเทศ รายงานการเงินอย่างเป็นทางการของคุณต้องนำเสนอเป็นเงินบาท",
            reference: "มาตรา 11 พระราชบัญญัติการบัญชี พ.ศ. 2543; มาตรฐานการบัญชีไทย (TAS) ฉบับที่ 21",
          },
          {
            question: "ทำไมบริษัทของฉันถึงมีบัญชี 'กำไรหรือขาดทุนจากอัตราแลกเปลี่ยน'?",
            answer:
              "เนื่องจากธุรกิจของคุณใช้สกุลเงินต่างประเทศในการทำธุรกรรม ทุกครั้งที่แปลงเป็นเงินบาทเพื่อการบัญชี อัตราแลกเปลี่ยนอาจแตกต่างจากวันที่ทำธุรกรรมถึงวันที่ชำระเงิน ความแตกต่างนี้สร้างกำไรหรือขาดทุนจากอัตราแลกเปลี่ยน ซึ่งสะท้อนมูลค่าที่แท้จริงของธุรกรรมสกุลเงินต่างประเทศของคุณ",
            reference: "มาตรฐานการบัญชีไทย (TAS) ฉบับที่ 21 'ผลกระทบจากการเปลี่ยนแปลงของอัตราแลกเปลี่ยนเงินตราต่างประเทศ'",
          },
          {
            question: "ทำไมต้องปรับปรุงอัตราแลกเปลี่ยนสิ้นปีโดยใช้อัตราจากกรมสรรพากร?",
            answer:
              "ณ สิ้นปีบัญชีแต่ละปี บริษัทต้องปรับปรุงมูลค่าของรายการสกุลเงินต่างประเทศทั้งหมด (เช่น ลูกหนี้หรือเงินสด) เพื่อสะท้อนอัตราแลกเปลี่ยนปัจจุบัน กรมสรรพากรประกาศอัตราแลกเปลี่ยนอย่างเป็นทางการในแต่ละปี ซึ่งต้องใช้เพื่อความสอดคล้องและการปฏิบัติตามภาษี",
            reference: "มาตรฐานการบัญชีไทย (TAS) ฉบับที่ 21; ประกาศกรมสรรพากรเรื่องอัตราแลกเปลี่ยน",
          },
        ],
        tax: [
          {
            question: "ทำไมกำไรหรือขาดทุนจากอัตราแลกเปลี่ยนต้องรวมในรายได้หรือค่าใช้จ่ายที่ต้องเสียภาษี?",
            answer:
              "กำไรหรือขาดทุนจากอัตราแลกเปลี่ยนเป็นส่วนหนึ่งของผลประกอบการธุรกิจจริงและต้องถือเป็นรายได้ที่ต้องเสียภาษีหรือค่าใช้จ่ายที่หักได้ตามกฎหมายภาษีไทย",
            reference: "มาตรา 65 ตรี (4) ประมวลรัษฎากร; คำสั่งกรมสรรพากร ป.0506/19642 (2544)",
          },
          {
            question: "ต้องจดทะเบียนภาษีมูลค่าเพิ่มหรือไม่ หากรายได้เกิน 1.8 ล้านบาท แต่การขายทั้งหมดอยู่นอกประเทศไทย?",
            answer:
              "หากการขายและบริการทั้งหมดดำเนินการและใช้งานนอกประเทศไทยทั้งหมด ธุรกิจของคุณไม่อยู่ภายใต้ภาษีมูลค่าเพิ่มไทย คุณไม่จำเป็นต้องจดทะเบียนภาษีมูลค่าเพิ่ม เว้นแต่คุณต้องการจดทะเบียนโดยสมัครใจ",
            reference: "มาตรา 77/1 และมาตรา 82/3 ประมวลรัษฎากร",
          },
          {
            question: "หลังจากจดทะเบียนภาษีมูลค่าเพิ่มแล้ว ต้องยื่นแบบ ภ.พ.30 หรือไม่หากไม่มีรายได้?",
            answer:
              "ใช่ เมื่อจดทะเบียนภาษีมูลค่าเพิ่มแล้ว คุณต้องยื่นแบบ ภ.พ.30 ทุกเดือน — ภายในวันที่ 15 ของเดือนถัดไป — แม้ว่าคุณจะไม่มีรายได้ การพลาดกำหนดเวลาอาจนำไปสู่เบี้ยปรับและค่าปรับ",
            reference: "มาตรา 83 และมาตรา 90 ประมวลรัษฎากร",
          },
        ],
        general: [
          {
            question: "ทำไมควรใช้บริการบัญชีและภาษีรายเดือนกับ PND50?",
            answer:
              "แม้ว่าธุรกรรมส่วนใหญ่จะเกิดขึ้นในต่างประเทศและไม่มีภาษีหัก ณ ที่จ่าย การทำบัญชีรายเดือนรับประกันการปฏิบัติตามกฎหมายบัญชีและภาษีไทย ไม่พลาดกำหนดเวลาหรือค่าปรับ บันทึกการเงินที่จัดระเบียบพร้อมสำหรับการตรวจสอบ และการสนับสนุนอย่างต่อเนื่องพร้อมคำแนะนำจากผู้เชี่ยวชาญ การทำบัญชีรายเดือนให้ความสบายใจ — เราดูแลให้ธุรกิจของคุณถูกต้อง ปฏิบัติตามกฎ และไร้ความเครียด",
            reference: "พระราชบัญญัติการบัญชี พ.ศ. 2543; ข้อกำหนดการยื่นแบบตามประมวลรัษฎากร",
          },
        ],
        corporate: [
          {
            question: "ชาวต่างชาติสามารถเป็นกรรมการหรือผู้ถือหุ้นเพียงคนเดียวของบริษัทไทยได้หรือไม่?",
            answer:
              "ได้ ในบางกรณี ชาวต่างชาติสามารถถือหุ้น 100% ของบริษัทได้ขึ้นอยู่กับประเภทธุรกิจและกฎระเบียบธุรกิจต่างชาติของไทย ทีมบริการองค์กรของเราสามารถตรวจสอบโครงสร้างของคุณและจัดเตรียมเอกสารการจดทะเบียนที่จำเป็นทั้งหมด",
          },
          {
            question: "ฉันจะเปลี่ยนรายละเอียดบริษัท เช่น กรรมการหรือที่อยู่ได้อย่างไร?",
            answer:
              "การเปลี่ยนแปลงรายละเอียดบริษัทใดๆ — กรรมการ ที่อยู่ หรือผู้ถือหุ้น — ต้องยื่นอย่างเป็นทางการกับกรมพัฒนาธุรกิจการค้า (DBD) ทีมบริการองค์กรของ PND50 จัดการการอัปเดตและการยื่นทั้งหมดในนามของคุณ",
          },
          {
            question: "บริษัทของฉันสามารถเปิดบัญชีธนาคารนิติบุคคลในประเทศไทยได้หรือไม่?",
            answer:
              "ได้ บริษัทที่จดทะเบียนทุกแห่งสามารถเปิดบัญชีธนาคารนิติบุคคลได้ ข้อกำหนดแตกต่างกันไปตามธนาคาร แต่ในฐานะส่วนหนึ่งของบริการองค์กรของเรา PND50 สามารถแนะนำคุณผ่านกระบวนการและช่วยจัดเตรียมเอกสารที่จำเป็น",
          },
        ],
      },
    },
    contact: {
      badge: "ติดต่อ",
      title1: "มาพูดคุยเกี่ยวกับ",
      title2: "ธุรกิจของคุณ",
      description: "มีคำถามเกี่ยวกับบัญชีหรือการปฏิบัติตามกฎระเบียบไทย? เราพร้อมช่วยคุณนำทางอย่างมั่นใจ",
      quickResponse: {
        title: "ตอบกลับรวดเร็ว",
        subtitle: "เราตอบกลับภายใน 24 ชั่วโมง",
        email: "ตอบกลับอีเมล",
        whatsapp: "ตอบกลับ WhatsApp",
      },
      form: {
        title: "ส่งข้อความ",
        subtitle: "กรอกแบบฟอร์มแล้วเราจะติดต่อกลับ",
        fullName: "ชื่อ-นามสกุล",
        email: "อีเมล",
        phone: "โทรศัพท์",
        whatsapp: "WhatsApp",
        companyName: "ชื่อบริษัท",
        message: "ข้อความ",
        messagePlaceholder: "บอกเราเกี่ยวกับความต้องการของคุณ...",
        submit: "ส่งข้อความ",
        sending: "กำลังส่ง...",
        success: "ขอบคุณ! เราจะติดต่อกลับเร็วๆ นี้",
        error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      },
      office: {
        title: "สำนักงาน",
        address: [
          "ห้อง 3065 ชั้น 30",
          "Bhiraj Tower at EmQuartier",
          "689 ถนนสุขุมวิท แขวงคลองตันเหนือ",
          "เขตวัฒนา กรุงเทพฯ 10110",
        ],
      },
      directContact: "ติดต่อโดยตรง",
      messageUs: "ส่งข้อความถึงเรา",
    },
    cta: {
      badge: "เริ่มต้น",
      title1: "พร้อมที่จะทำให้ธุรกิจ",
      title2: "ในประเทศไทยง่ายขึ้น?",
      description: "มาพูดคุยกันว่าเราจะช่วยธุรกิจของคุณเติบโตได้อย่างไรด้วยการสนับสนุนด้านบัญชีและภาษีจากผู้เชี่ยวชาญ",
      schedule: "นัดหมายปรึกษา",
      contact: "ติดต่อเรา",
    },
  },
  ru: {
    hero: {
      title1: "AI Boutique",
      words: ["Бухгалтерия", "Консалтинг", "Соответствие"],
      description:
        "Вы общаетесь с экспертом, а не с роботом. Мы связываем вас с персональным консультантом, который говорит на вашем языке. Наш ИИ делает их работу",
      faster: "в 5 раз быстрее",
      and: "и",
      errorFree: "без единой ошибки",
    },
    nav: {
      services: "Услуги",
      about: "О нас",
      faq: "FAQ",
      contact: "Контакты",
      schedule: "Записаться на консультацию",
    },
    services: {
      badge: "Нам доверяют более 200 компаний",
      title1: "Соблюдение требований",
      title2: "и бухгалтерские",
      title3: "услуги в Таиланде",
      description:
        "От регистрации компании до текущего соблюдения требований — мы предоставляем комплексные бизнес-решения для компаний с иностранным владением в Таиланде.",
      stats: {
        clients: { value: "200+", label: "Обслуженных клиентов" },
        experience: { value: "10+", label: "Лет опыта" },
        satisfaction: { value: "99%", label: "Удовлетворённость клиентов" },
      },
      sectionTitle: "Наши услуги",
      sectionDescription:
        "Комплексные решения в области бухгалтерского учёта и соблюдения требований, адаптированные для вашего бизнеса",
      serviceCards: [
        {
          title: "Бухгалтерия",
          description:
            "Ежемесячное ведение учёта с отчётами на английском языке, финансовая отчётность по стандартам DBD и доступ к панели управления в реальном времени.",
          features: ["Ежемесячные отчёты на английском", "Соответствие DBD", "Панель в реальном времени"],
          href: "/ru/services/accounting",
        },
        {
          title: "Налоговая отчётность",
          description: "Полное налоговое соответствие, включая PND50/51, PP30, налог у источника и годовую отчётность.",
          features: ["Подача PND50/51", "Декларации НДС (PP30)", "Налог у источника"],
          href: "/ru/services/tax",
        },
        {
          title: "Расчёт зарплаты",
          description: "Комплексная обработка зарплаты, социальное страхование, PND1 и документация сотрудников.",
          features: ["Расчёт зарплаты", "Социальное страхование", "Подача PND1"],
          href: "/ru/services/payroll",
        },
        {
          title: "Корпоративные услуги",
          description: "Регистрация компании, заявки BOI, разрешения на работу и услуги корпоративного секретаря.",
          features: ["Регистрация компании", "Разрешения на работу", "Заявки BOI"],
          href: "/ru/services/corporate",
        },
        {
          title: "Консалтинг",
          description:
            "Стратегическое руководство по тайским нормативам, налоговое планирование и структурирование бизнеса.",
          features: ["Налоговое планирование", "Нормативное руководство", "Структурирование бизнеса"],
          href: "/ru/services/advisory",
        },
        {
          title: "Услуги роста",
          description:
            "Финансовый анализ, отслеживание KPI и стратегические рекомендации для масштабирования вашего бизнеса.",
          features: ["Финансовый анализ", "Отслеживание KPI", "Стратегия роста"],
          href: "/ru/services/growth",
        },
      ],
      exploreService: "Подробнее об услуге",
    },
    about: {
      badge: "О PND50",
      title1: "Региональный корпоративный",
      title2: "специалист с",
      title3: "Глобальными стандартами",
      description:
        "PND50 — бухгалтерская и консалтинговая фирма в Таиланде, помогающая компаниям с иностранным владением разобраться в тайском бухгалтерском учёте и соблюдении требований с ясностью и уверенностью.",
      contactUs: "Связаться с нами",
      stats: {
        years: {
          value: "10+",
          label: "Лет превосходства",
          description: "Проверенная экспертиза в тайской бухгалтерии",
        },
        clients: { value: "150+", label: "Довольных клиентов", description: "Обслуженных международных компаний" },
        satisfaction: { value: "100%", label: "Удовлетворённость клиентов", description: "По оценкам наших клиентов" },
      },
      mission: {
        badge: "Наша миссия",
        title: "Делаем тайскую бухгалтерию",
        titleHighlight: "Понятной и без стресса",
        description:
          "Мы верим, что бухгалтерия должна давать силу, а не путать. Наш подход сочетает экспертные знания с современными технологиями, чтобы сделать тайское соответствие прозрачным и управляемым.",
        points: [
          { title: "Кристальная ясность", description: "Общение простым языком о ваших цифрах и обязательствах" },
          { title: "Всегда в соответствии", description: "Опережайте сроки с проактивным управлением соответствием" },
          {
            title: "Спокойствие",
            description:
              "Человеческая экспертиза, подкреплённая надёжными технологиями и поддержкой в реальном времени",
          },
        ],
      },
      testimonials: {
        badge: "Наши истории успеха",
        title: "Нам доверяют компании по всему Таиланду",
        description:
          "Мы гордимся поддержкой международных стартапов — особенно из России и Вьетнама. Помогаем им уверенно вести бизнес в Таиланде.",
      },
    },
    faq: {
      badge: "Центр помощи",
      title1: "Часто задаваемые",
      title2: "вопросы",
      description:
        "Чёткие ответы о бухгалтерии, налогах и регистрации бизнеса в Таиланде — объяснённые простым языком.",
      searchPlaceholder: "Поиск вопросов...",
      allQuestions: "Все вопросы",
      categories: {
        accounting: "Вопросы по бухгалтерии",
        tax: "Налоговые вопросы",
        general: "Общие вопросы",
        corporate: "Корпоративные вопросы",
      },
      questions: {
        accounting: [
          {
            question: "Почему я должен вести бухгалтерию в тайских батах, когда все операции в иностранной валюте?",
            answer:
              "Все компании, зарегистрированные в Таиланде по тайскому законодательству, должны готовить финансовую отчётность в соответствии с тайскими стандартами бухгалтерского учёта, которые требуют использования тайского бата (THB) в качестве валюты представления. Даже если все ваши операции в иностранной валюте, официальная финансовая отчётность должна быть представлена в батах.",
            reference:
              "Раздел 11, Закон о бухгалтерском учёте B.E. 2543 (2000); Тайский стандарт бухгалтерского учёта (TAS) № 21",
          },
          {
            question: "Почему у моей компании есть счёт 'Прибыль или убыток от курсовой разницы'?",
            answer:
              "Поскольку ваш бизнес использует иностранную валюту для операций, каждый раз при конвертации в тайские баты для бухгалтерии курс обмена может отличаться от даты операции до даты платежа. Эта разница создаёт курсовую прибыль или убыток, который отражает реальную стоимость ваших валютных операций.",
            reference: "Тайский стандарт бухгалтерского учёта (TAS) № 21 'Влияние изменений валютных курсов'",
          },
          {
            question:
              "Почему мы должны переоценивать курсы обмена в конце года по ставке Налогового департамента Таиланда?",
            answer:
              "В конце каждого финансового года компании должны корректировать стоимость всех валютных статей (таких как дебиторская задолженность или денежные средства), чтобы отразить текущий курс обмена. Налоговый департамент Таиланда ежегодно публикует официальные курсы обмена, которые должны использоваться для согласованности и налогового соответствия.",
            reference:
              "Тайский стандарт бухгалтерского учёта (TAS) № 21; Объявление Налогового департамента о курсах обмена",
          },
        ],
        tax: [
          {
            question: "Почему курсовые прибыли или убытки должны включаться в налогооблагаемый доход или расходы?",
            answer:
              "Курсовые прибыли или убытки являются частью реальных результатов бизнеса и должны рассматриваться как налогооблагаемый доход или вычитаемые расходы по тайскому налоговому законодательству.",
            reference: "Раздел 65 Ter (4), Налоговый кодекс Таиланда; Ведомственная инструкция Paw.0506/19642 (2001)",
          },
          {
            question:
              "Нужно ли регистрироваться для НДС, если выручка превышает 1,8 млн батов, но все продажи за пределами Таиланда?",
            answer:
              "Если все продажи и услуги выполняются и используются полностью за пределами Таиланда, ваш бизнес не подлежит тайскому НДС. Вам не нужно регистрироваться для НДС, если вы не желаете сделать это добровольно.",
            reference: "Раздел 77/1 и Раздел 82/3, Налоговый кодекс Таиланда",
          },
          {
            question: "После регистрации НДС нужно ли подавать форму PP.30, если нет дохода?",
            answer:
              "Да. После регистрации НДС вы должны подавать форму PP.30 каждый месяц — до 15 числа следующего месяца — даже если у вас нет дохода. Пропуск срока может привести к штрафам и пеням.",
            reference: "Раздел 83 и Раздел 90, Налоговый кодекс Таиланда",
          },
        ],
        general: [
          {
            question: "Почему стоит использовать ежемесячные бухгалтерские и налоговые услуги PND50?",
            answer:
              "Даже если большинство операций происходит за рубежом и не применимы предоплаченные налоги, ежемесячная бухгалтерия обеспечивает соответствие тайскому законодательству о бухгалтерии и налогах, отсутствие пропущенных сроков или штрафов, организованные финансовые записи, готовые к аудиту, и постоянную поддержку с экспертными консультациями. Ежемесячная бухгалтерия даёт спокойствие — мы поддерживаем ваш бизнес точным, соответствующим требованиям и без стресса.",
            reference: "Закон о бухгалтерском учёте B.E. 2543; Требования к подаче по Налоговому кодексу Таиланда",
          },
        ],
        corporate: [
          {
            question: "Может ли иностранец быть единственным директором или акционером тайской компании?",
            answer:
              "Да, в некоторых случаях. Иностранцы могут владеть 100% компании в зависимости от типа бизнеса и тайских правил иностранного бизнеса. Наша команда корпоративных услуг может проверить вашу структуру и подготовить все необходимые регистрационные документы.",
          },
          {
            question: "Как я могу изменить данные компании, такие как директора или адрес?",
            answer:
              "Любые изменения данных компании — директора, адреса или акционеров — должны быть официально поданы в Департамент развития бизнеса (DBD). Команда корпоративных услуг PND50 обрабатывает все обновления и подачи от вашего имени.",
          },
          {
            question: "Может ли моя компания открыть корпоративный банковский счёт в Таиланде?",
            answer:
              "Да. Каждая зарегистрированная компания может открыть корпоративный банковский счёт. Требования варьируются в зависимости от банка, но в рамках наших корпоративных услуг PND50 может провести вас через процесс и помочь подготовить необходимые документы.",
          },
        ],
      },
    },
    contact: {
      badge: "Контакты",
      title1: "Давайте поговорим о",
      title2: "вашем бизнесе",
      description:
        "Есть вопросы о тайской бухгалтерии или соответствии? Мы здесь, чтобы помочь вам уверенно разобраться.",
      quickResponse: {
        title: "Быстрый ответ",
        subtitle: "Мы отвечаем в течение 24 часов",
        email: "Ответ по email",
        whatsapp: "Ответ в WhatsApp",
      },
      form: {
        title: "Отправить сообщение",
        subtitle: "Заполните форму, и мы свяжемся с вами",
        fullName: "Полное имя",
        email: "Email",
        phone: "Телефон",
        whatsapp: "WhatsApp",
        companyName: "Название компании",
        message: "Сообщение",
        messagePlaceholder: "Расскажите о ваших потребностях...",
        submit: "Отправить",
        sending: "Отправка...",
        success: "Спасибо! Мы скоро свяжемся с вами.",
        error: "Что-то пошло не так. Пожалуйста, попробуйте снова.",
      },
      office: {
        title: "Офис",
        address: [
          "Suite 3065, 30-й этаж",
          "Bhiraj Tower at EmQuartier",
          "689 Sukhumvit Rd, Khlong Tan Nuea",
          "Watthana, Bangkok 10110",
        ],
      },
      directContact: "Прямой контакт",
      messageUs: "Напишите нам",
    },
    cta: {
      badge: "Начать",
      title1: "Готовы упростить свой",
      title2: "бизнес в Таиланде?",
      description:
        "Давайте обсудим, как мы можем помочь вашему бизнесу процветать с экспертной бухгалтерской и налоговой поддержкой.",
      schedule: "Записаться на консультацию",
      contact: "Связаться с нами",
    },
  },
  cn: {
    hero: {
      title1: "AI Boutique",
      words: ["会计", "咨询", "合规"],
      description: "您与专家交谈，而非机器人。我们为您连接一位说您母语的专属顾问。我们的人工智能使他们",
      faster: "快5倍",
      and: "且",
      errorFree: "零错误",
    },
    nav: {
      services: "服务",
      about: "关于我们",
      faq: "常见问题",
      contact: "联系方式",
      schedule: "预约咨询",
    },
    services: {
      badge: "受到200+企业信赖",
      title1: "企业合规",
      title2: "与会计",
      title3: "泰国服务",
      description: "从公司设立到持续合规，我们为泰国外资企业提供端到端的商业解决方案。",
      stats: {
        clients: { value: "200+", label: "服务客户" },
        experience: { value: "10+", label: "年经验" },
        satisfaction: { value: "99%", label: "客户满意度" },
      },
      sectionTitle: "我们的服务",
      sectionDescription: "为您的企业量身定制的全面会计和合规解决方案",
      serviceCards: [
        {
          title: "会计",
          description: "每月记账并提供英文报告、符合DBD标准的财务报表以及实时仪表盘访问。",
          features: ["每月英文报告", "DBD合规", "实时仪表盘"],
          href: "/cn/services/accounting",
        },
        {
          title: "税务申报",
          description: "完整的税务合规服务，包括PND50/51、PP30、预扣税和年度申报。",
          features: ["PND50/51申报", "增值税申报(PP30)", "预扣税"],
          href: "/cn/services/tax",
        },
        {
          title: "薪资",
          description: "端到端薪资处理、社会保险、PND1和员工文档。",
          features: ["薪资处理", "社会保险", "PND1申报"],
          href: "/cn/services/payroll",
        },
        {
          title: "企业服务",
          description: "公司注册、BOI申请、工作许可和公司秘书服务。",
          features: ["公司注册", "工作许可", "BOI申请"],
          href: "/cn/services/corporate",
        },
        {
          title: "咨询",
          description: "关于泰国法规、税务规划和业务结构的战略指导。",
          features: ["税务规划", "法规指导", "业务结构"],
          href: "/cn/services/advisory",
        },
        {
          title: "增长服务",
          description: "财务分析、KPI跟踪和扩展业务的战略建议。",
          features: ["财务分析", "KPI跟踪", "增长战略"],
          href: "/cn/services/growth",
        },
      ],
      exploreService: "了解此服务",
    },
    about: {
      badge: "关于PND50",
      title1: "区域企业",
      title2: "专家，具有",
      title3: "全球标准",
      description: "PND50是一家位于泰国的会计和咨询公司，帮助外资企业清晰、自信地处理泰国会计和合规事务。",
      contactUs: "联系我们",
      stats: {
        years: { value: "10+", label: "卓越年份", description: "值得信赖的泰国会计专业知识" },
        clients: { value: "150+", label: "满意客户", description: "服务的国际企业" },
        satisfaction: { value: "100%", label: "客户满意度", description: "由我们的客户评定" },
      },
      mission: {
        badge: "我们的使命",
        title: "让泰国会计",
        titleHighlight: "清晰无压力",
        description: "我们相信会计应该赋能而非困惑。我们的方法将专业知识与现代技术相结合，使泰国合规透明可控。",
        points: [
          { title: "清晰明了", description: "用简单语言沟通您的数字和义务" },
          { title: "始终合规", description: "通过主动合规管理领先于截止日期" },
          { title: "安心无忧", description: "人类专业知识配以可靠技术和实时支持" },
        ],
      },
      testimonials: {
        badge: "我们的成功故事",
        title: "受到泰国各地企业信赖",
        description: "我们自豪地支持国际初创企业——特别是来自俄罗斯和越南的企业。帮助他们自信地在泰国开展业务。",
      },
    },
    faq: {
      badge: "帮助中心",
      title1: "常见",
      title2: "问题",
      description: "关于泰国会计、税务和业务设立的清晰答案——用简单语言解释。",
      searchPlaceholder: "搜索问题...",
      allQuestions: "所有问题",
      categories: {
        accounting: "会计问题",
        tax: "税务问题",
        general: "一般问题",
        corporate: "企业与合规",
      },
      questions: {
        accounting: [
          {
            question: "为什么我必须用泰铢记账，而所有交易都是外币？",
            answer:
              "根据泰国法律在泰国注册的所有公司必须按照泰国会计准则和政策编制财务报表，这要求使用泰铢(THB)作为列报货币。即使您的所有交易都是外币，您的官方财务报告也必须以泰铢呈报。",
            reference: "第11条，会计法B.E. 2543 (2000)；泰国会计准则(TAS)第21号",
          },
          {
            question: "为什么我的公司有'汇率损益'账户？",
            answer:
              "因为您的业务使用外币进行交易，每次将这些外币转换为泰铢进行会计处理时，汇率可能与交易日期到付款日期不同。这种差异产生外汇损益，反映您外币交易的真实价值。",
            reference: "泰国会计准则(TAS)第21号'外汇汇率变动的影响'",
          },
          {
            question: "为什么我们必须在年末使用泰国税务局的汇率重新估值？",
            answer:
              "在每个会计年度末，公司必须调整所有外币项目（如应收账款或现金）的价值，以反映当前汇率。泰国税务局每年发布官方汇率，必须用于一致性和税务合规。",
            reference: "泰国会计准则(TAS)第21号；税务局关于汇率的公告",
          },
        ],
        tax: [
          {
            question: "为什么汇兑损益必须计入应税收入或费用？",
            answer: "外汇损益是实际业务结果的一部分，必须根据泰国税法作为应税收入或可扣除费用处理。",
            reference: "第65 Ter (4)条，泰国税法；部门指令Paw.0506/19642 (2001)",
          },
          {
            question: "如果收入超过180万泰铢但所有销售都在泰国境外，是否需要注册增值税？",
            answer:
              "如果所有销售和服务完全在泰国境外进行和使用，您的业务不受泰国增值税约束。您不需要注册增值税，除非您希望自愿注册。",
            reference: "第77/1条和第82/3条，泰国税法",
          },
          {
            question: "注册增值税后，如果没有收入，还需要提交PP.30表吗？",
            answer:
              "是的。一旦注册增值税，您必须每月提交PP.30表——在下个月15日之前——即使您没有收入。错过截止日期可能导致附加费和罚款。",
            reference: "第83条和第90条，泰国税法",
          },
        ],
        general: [
          {
            question: "为什么应该使用PND50的月度会计和税务服务？",
            answer:
              "即使大多数交易发生在海外且不适用预扣税，月度会计确保符合泰国会计和税法、不会错过截止日期或罚款、有组织的审计就绪财务记录，以及持续的专家建议支持。月度会计让您安心——我们保持您的业务准确、合规、无压力。",
            reference: "会计法B.E.2543；泰国税法申报要求",
          },
        ],
        corporate: [
          {
            question: "外国人可以成为泰国公司的唯一董事或股东吗？",
            answer:
              "是的，在某些情况下。根据业务类型和泰国外商投资法规，外国人可以拥有公司100%的股权。我们的企业服务团队可以审查您的结构并准备所有必需的注册文件。",
          },
          {
            question: "如何更改公司详细信息，如董事或地址？",
            answer:
              "任何公司详细信息的更改——董事、地址或股东——必须正式向商业发展部(DBD)提交。PND50的企业服务团队代表您处理所有更新和提交。",
          },
          {
            question: "我的公司可以在泰国开设公司银行账户吗？",
            answer:
              "可以。每家注册公司都可以开设公司银行账户。要求因银行而异，但作为我们企业服务的一部分，PND50可以指导您完成流程并帮助准备必要的文件。",
          },
        ],
      },
    },
    contact: {
      badge: "联系方式",
      title1: "让我们谈谈",
      title2: "您的业务",
      description: "对泰国会计或合规有疑问？我们在这里帮助您自信地导航。",
      quickResponse: {
        title: "快速响应",
        subtitle: "我们在24小时内回复",
        email: "邮件回复",
        whatsapp: "WhatsApp回复",
      },
      form: {
        title: "发送消息",
        subtitle: "填写表格，我们将与您联系",
        fullName: "全名",
        email: "邮箱",
        phone: "电话",
        whatsapp: "WhatsApp",
        companyName: "公司名称",
        message: "消息",
        messagePlaceholder: "告诉我们您的需求...",
        submit: "发送消息",
        sending: "发送中...",
        success: "谢谢！我们会尽快与您联系。",
        error: "出错了。请重试。",
      },
      office: {
        title: "办公室",
        address: [
          "3065室，30楼",
          "Bhiraj Tower at EmQuartier",
          "689 Sukhumvit Rd, Khlong Tan Nuea",
          "Watthana, Bangkok 10110",
        ],
      },
      directContact: "直接联系",
      messageUs: "给我们留言",
    },
    cta: {
      badge: "开始",
      title1: "准备简化您在",
      title2: "泰国的业务？",
      description: "让我们讨论如何通过专业的会计和税务支持帮助您的业务蓬勃发展。",
      schedule: "预约咨询",
      contact: "联系我们",
    },
  },
}

export type Locale = keyof typeof translations
export type Translation = (typeof translations)["en"]
