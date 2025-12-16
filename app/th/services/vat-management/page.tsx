import VATClient from "@/app/services/vat-management/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "บริการจัดการ VAT | PND50",
  description: "บริการจัดการภาษีมูลค่าเพิ่ม (VAT) ครบวงจรสำหรับธุรกิจในประเทศไทย การยื่น การคำนวณ และการปฏิบัติตามกฎระเบียบ",
  openGraph: {
    locale: "th_TH",
  },
}

export default function VATPageThai() {
  return <VATClient />
}
