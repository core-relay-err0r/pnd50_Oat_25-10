import type React from "react"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.faq.title,
  description: pageMetadata.faq.description,
  keywords: [
    "PND50",
    "ภ.ง.ด.50",
    "P.N.D.50",
    "Thailand corporate tax",
    "Thai accounting FAQ",
    "foreign business Thailand",
    "Thai tax compliance",
    "annual corporate income tax Thailand",
  ],
  openGraph: {
    title: pageMetadata.faq.title,
    description: pageMetadata.faq.description,
    url: `${siteConfig.url}/faq`,
  },
}

const faqItems = [
  {
    question: "What does PND50 mean? Why is your company named this way?",
    answer:
      "PND50 (P.N.D.50) comes from ภ.ง.ด.50 in Thai, which stands for 'แบบแสดงรายการภาษีเงินได้บริษัทหรือห้างหุ้นส่วนนิติบุคคล' — Thailand's Annual Corporate Income Tax Return form. Every Thai company must file this form within 150 days after their fiscal year ends. We named our company after this essential tax form because it represents the core of what we do: helping foreign-owned businesses navigate Thai corporate tax compliance with confidence and clarity. Reference: Revenue Code of Thailand, Section 68; Form ภ.ง.ด.50 (P.N.D.50)",
  },
  {
    question: "What is the difference between PND50 and PND51?",
    answer:
      "PND50 (ภ.ง.ด.50) is the Annual Corporate Income Tax Return filed once a year within 150 days after fiscal year end. PND51 (ภ.ง.ด.51) is the Half-Year Corporate Income Tax Return filed within 2 months after the first 6 months of the fiscal year. Both are mandatory for all registered companies in Thailand. Our team handles both filings as part of our tax compliance services. Reference: Revenue Code of Thailand, Sections 67 bis and 68",
  },
  {
    question: "Who is PND50 designed for?",
    answer:
      "PND50 specializes in serving foreign-owned businesses operating in Thailand. Whether you're a startup, SME, or established company with international ownership, we provide accounting, tax, payroll, and corporate services in English (and Thai, Chinese, Russian) with a focus on making Thai compliance simple and stress-free.",
  },
  // Accounting Questions
  {
    question: "Why do I have to record accounting in Thai Baht when all transactions are in foreign currencies?",
    answer:
      "All companies registered in Thailand under Thai law must prepare financial statements in accordance with Thai Accounting Standards and policies, which require using the Thai Baht (THB) as the presentation currency. Even if all your transactions are in foreign currencies, your official financial reports must be presented in THB. Reference: Section 11, Accounting Act B.E. 2543 (2000); Thai Accounting Standard (TAS) No.21",
  },
  {
    question: 'Why does my company have a "Gain or Loss on Exchange Rate" account?',
    answer:
      "Because your business uses foreign currencies for transactions, every time these are converted to Thai Baht for accounting, the exchange rate may differ from the transaction date to the payment date. This difference creates a foreign exchange gain or loss, which reflects the true value of your foreign-currency transactions. Reference: Thai Accounting Standard (TAS) No.21",
  },
  {
    question: "Why must we revalue exchange rates at year-end using the rate from the Thai Revenue Department?",
    answer:
      "At the end of each accounting year, companies must adjust the value of all foreign-currency items (such as receivables or cash) to reflect the current exchange rate. The Thai Revenue Department publishes official exchange rates each year, which must be used for consistency and tax compliance. Reference: Thai Accounting Standard (TAS) No.21; Revenue Department Announcement on Exchange Rates",
  },
  // Tax Questions
  {
    question: "Why must exchange gains or losses be included in taxable income or expenses?",
    answer:
      "Foreign exchange gains or losses are part of real business results and must be treated as taxable income or deductible expenses under Thai tax law. Reference: Section 65 Ter (4), Revenue Code of Thailand",
  },
  {
    question: "Do we need to register for VAT if revenue exceeds THB 1.8 million but all sales are outside Thailand?",
    answer:
      "If all sales and services are performed and used entirely outside Thailand, your business is not subject to Thai VAT. You don't need to register for VAT unless you wish to do so voluntarily. Reference: Section 77/1 and Section 82/3, Revenue Code of Thailand",
  },
  {
    question: "After registering for VAT, do I still need to file form PP.30 if there's no income?",
    answer:
      "Yes. Once VAT-registered, you must file Form PP.30 every month — by the 15th of the following month — even if you have no income. Missing the deadline may lead to surcharges and penalties. Reference: Section 83 and Section 90, Revenue Code of Thailand",
  },
  // General Questions
  {
    question: "Why should we use monthly accounting and tax services with PND50?",
    answer:
      "Even if most transactions occur overseas and no withholding tax applies, monthly accounting ensures compliance with Thai accounting and tax law, no missed deadlines or penalties, organized audit-ready financial records, and ongoing support with expert advice. Monthly accounting gives peace of mind — we keep your business accurate, compliant, and stress-free.",
  },
  // Corporate Questions
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
]

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FAQSchema faqs={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      {children}
    </>
  )
}
