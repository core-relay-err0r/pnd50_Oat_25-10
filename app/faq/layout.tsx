import type React from "react"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.faq.title,
  description: pageMetadata.faq.description,
  keywords: [
    "PND50 FAQ",
    "Thailand tax questions",
    "Singapore company Thailand tax",
    "Russian business Thailand accounting",
    "Taiwan company PND50 filing",
    "foreign company Thailand FAQ",
    "expat business Thailand questions",
  ],
  openGraph: {
    title: pageMetadata.faq.title,
    description: pageMetadata.faq.description,
    url: `${siteConfig.url}/faq`,
  },
}

const faqItems = [
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
  // International Business Questions - Singapore
  {
    question: "I'm from Singapore. Can my Singapore company file PND50 in Thailand?",
    answer:
      "If your Singapore company has a registered branch or subsidiary in Thailand, yes - you must file PND50 (ภ.ง.ด.50) annually. Many Singapore businesses expanding to Thailand use our services for seamless tax compliance. We handle all Thai tax filings while you focus on growing your ASEAN business. Reference: Revenue Code of Thailand, Section 66; Double Tax Agreement Thailand-Singapore",
  },
  // International Business Questions - Russia
  {
    question: "As a Russian entrepreneur, how do I handle Thai corporate taxes?",
    answer:
      "Russian business owners with Thai companies must file PND50 corporate tax returns annually, plus monthly VAT (PP30) and withholding tax forms. We specialize in helping Russian entrepreneurs navigate Thai tax regulations, with clear English communication and transparent processes. Reference: Revenue Code of Thailand; Thai-Russia Tax Treaty",
  },
  // International Business Questions - Taiwan
  {
    question: "Can Taiwanese companies get PND50 filing support in Thailand?",
    answer:
      "Yes! Many Taiwanese manufacturers and trading companies use our PND50 filing services. We understand the unique needs of Taiwan-Thailand business operations, including transfer pricing, withholding tax on royalties, and proper documentation for cross-border transactions. Reference: Revenue Code of Thailand, Section 70; Transfer Pricing regulations",
  },
  // International Business Questions - General
  {
    question: "What is PND50 and why do foreign companies need to file it?",
    answer:
      "PND50 (ภ.ง.ด.50 or P.N.D.50) is Thailand's annual corporate income tax return. ALL companies registered in Thailand - including foreign-owned subsidiaries from Singapore, Russia, Taiwan, China, or anywhere else - must file PND50 within 150 days after their fiscal year ends. Late filing results in penalties and surcharges. Reference: Section 68, Revenue Code of Thailand",
  },
  {
    question: "Do I need a Thai accountant if my business transactions are mostly overseas?",
    answer:
      "Yes. Even if your Thai company's transactions occur overseas (common for Singapore, Russian, and Taiwanese parent companies), Thai law requires proper accounting records in Thai Baht and annual PND50 filing. A qualified Thai accountant ensures compliance and helps you avoid penalties. Reference: Accounting Act B.E. 2543; Section 65, Revenue Code of Thailand",
  },
  {
    question: "How can foreign companies benefit from Thailand's tax treaties?",
    answer:
      "Thailand has Double Tax Agreements (DTAs) with over 60 countries including Singapore, Russia, Taiwan (via special arrangement), and China. These treaties can reduce withholding taxes on dividends, royalties, and service fees. We help foreign companies structure their Thai operations to maximize treaty benefits while staying compliant. Reference: Thai Revenue Department; Bilateral Tax Treaties",
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
