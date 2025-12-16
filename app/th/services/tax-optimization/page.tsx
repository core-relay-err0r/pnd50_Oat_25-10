import TaxOptimizationClient from "@/app/services/tax-optimization/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "การเพิ่มประสิทธิภาพภาษี | PND50",
  description: "บริการเพิ่มประสิทธิภาพภาษีสำหรับธุรกิจในประเทศไทย ลดภาระภาษีอย่างถูกกฎหมายและปฏิบัติตามกฎระเบียบ",
  openGraph: {
    locale: "th_TH",
  },
}

export default function TaxOptimizationPageThai() {
  return <TaxOptimizationClient />
}
