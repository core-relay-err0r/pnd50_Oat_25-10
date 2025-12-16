import type { Metadata } from "next"
import RussiaClientPage from "./russia-client-page"

export const metadata: Metadata = {
  title: "Accounting Services for Russian Companies in Thailand | PND50",
  description:
    "Expert accounting and tax services for Russian businesses in Thailand. We help Russian entrepreneurs navigate Thai compliance, company setup, and tax filing with Russian-speaking support.",
  keywords: [
    "Russian company Thailand",
    "accounting Russian business Thailand",
    "Thai accounting for Russians",
    "Russia to Thailand business",
    "Russian entrepreneur Thailand",
    "Thai tax for Russian companies",
    "бухгалтерия Таиланд",
  ],
  alternates: {
    canonical: "https://pnd50.com/for/russia",
  },
  openGraph: {
    title: "Thai Accounting Services for Russian Companies | PND50",
    description:
      "Helping Russian businesses succeed in Thailand with expert accounting, tax filing, and compliance support.",
    url: "https://pnd50.com/for/russia",
  },
}

export default function RussiaPage() {
  return <RussiaClientPage />
}
