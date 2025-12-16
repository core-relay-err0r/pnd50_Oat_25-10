import ServicesClient from "@/app/services/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "บริการของเรา | PND50 บัญชีและภาษี",
  description: "บริการครบวงจรด้านบัญชีและภาษีสำหรับธุรกิจในประเทศไทย: การยื่น PND50, การวางแผนภาษี, บัญชี, VAT, ภาษีหัก ณ ที่จ่าย และอื่นๆ",
  openGraph: {
    title: "บริการของเรา | PND50",
    description: "บริการครบวงจรด้านบัญชีและภาษีสำหรับธุรกิจในไทย",
    locale: "th_TH",
  },
}

export default function ServicesPageThai() {
  return <ServicesClient />
}
