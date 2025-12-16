import type { Metadata } from "next"
import SingaporeClientPage from "./singapore-client-page"

export const metadata: Metadata = {
  title: "Accounting Services for Singapore Companies in Thailand | PND50",
  description:
    "Expert accounting and tax services for Singapore businesses expanding to Thailand. We help Singaporean companies navigate Thai compliance, tax filing, and business setup with ease.",
  keywords: [
    "Singapore company Thailand",
    "accounting Singapore business Thailand",
    "Thai accounting for Singaporeans",
    "Singapore to Thailand expansion",
    "cross-border accounting ASEAN",
    "Thai tax for Singapore companies",
  ],
  alternates: {
    canonical: "https://pnd50.com/for/singapore",
  },
  openGraph: {
    title: "Thai Accounting Services for Singapore Companies | PND50",
    description:
      "Helping Singapore businesses succeed in Thailand with expert accounting, tax filing, and compliance support.",
    url: "https://pnd50.com/for/singapore",
  },
}

export default function SingaporePage() {
  return <SingaporeClientPage />
}
