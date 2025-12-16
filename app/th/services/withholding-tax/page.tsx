import WithholdingTaxClient from "@/app/services/withholding-tax/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ภาษีหัก ณ ที่จ่าย | PND50",
  description: "บริการจัดการภาษีหัก ณ ที่จ่ายสำหรับธุรกิจในประเทศไทย คำนวณ ยื่น และรายงานภาษีหัก ณ ที่จ่ายอย่างถูกต้อง",
  openGraph: {
    locale: "th_TH",
  },
}

export default function WithholdingTaxPageThai() {
  return <WithholdingTaxClient />
}
