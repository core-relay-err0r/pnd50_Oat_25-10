import TaxPlanningClient from "@/app/services/tax-planning/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "การวางแผนภาษี | PND50",
  description: "บริการวางแผนภาษีเชิงกลยุทธ์เพื่อเพิ่มประสิทธิภาพภาษีและลดภาระภาษีอย่างถูกกฎหมายสำหรับธุรกิจในประเทศไทย",
  openGraph: {
    locale: "th_TH",
  },
}

export default function TaxPlanningPageThai() {
  return <TaxPlanningClient />
}
