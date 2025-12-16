import AuditSupportClient from "@/app/services/audit-support/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "สนับสนุนการตรวจสอบบัญชี | PND50",
  description: "บริการสนับสนุนการตรวจสอบบัญชีมืออาชีพสำหรับธุรกิจในประเทศไทย เตรียมเอกสาร ประสานงานกับผู้สอบบัญชี",
  openGraph: {
    locale: "th_TH",
  },
}

export default function AuditSupportPageThai() {
  return <AuditSupportClient />
}
