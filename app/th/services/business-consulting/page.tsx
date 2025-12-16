import BusinessConsultingClient from "@/app/services/business-consulting/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ที่ปรึกษาธุรกิจ | PND50",
  description: "บริการที่ปรึกษาธุรกิจสำหรับธุรกิจในประเทศไทย กลยุทธ์ทางการเงิน การเติบโต และการวางแผนธุรกิจ",
  openGraph: {
    locale: "th_TH",
  },
}

export default function BusinessConsultingPageThai() {
  return <BusinessConsultingClient />
}
