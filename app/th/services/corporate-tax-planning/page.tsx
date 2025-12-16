import CorporateTaxClient from "@/app/services/corporate-tax-planning/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "วางแผนภาษีนิติบุคคล | PND50",
  description: "บริการวางแผนภาษีนิติบุคคลเชิงกลยุทธ์สำหรับธุรกิจในประเทศไทย เพิ่มประสิทธิภาพและลดภาระภาษี",
  openGraph: {
    locale: "th_TH",
  },
}

export default function CorporateTaxPageThai() {
  return <CorporateTaxClient />
}
