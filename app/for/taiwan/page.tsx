import type { Metadata } from "next"
import TaiwanClientPage from "./taiwan-client-page"

export const metadata: Metadata = {
  title: "Accounting Services for Taiwan Companies in Thailand | PND50",
  description:
    "Expert accounting and tax services for Taiwanese businesses in Thailand. We help Taiwan companies with Thai compliance, company setup, and cross-border tax planning.",
  keywords: [
    "Taiwan company Thailand",
    "accounting Taiwan business Thailand",
    "Thai accounting for Taiwanese",
    "Taiwan to Thailand expansion",
    "Taiwanese business Thailand",
    "Thai tax for Taiwan companies",
  ],
  alternates: {
    canonical: "https://pnd50.com/for/taiwan",
  },
  openGraph: {
    title: "Thai Accounting Services for Taiwan Companies | PND50",
    description:
      "Helping Taiwanese businesses succeed in Thailand with expert accounting, tax filing, and compliance support.",
    url: "https://pnd50.com/for/taiwan",
  },
}

export default function TaiwanPage() {
  return <TaiwanClientPage />
}
