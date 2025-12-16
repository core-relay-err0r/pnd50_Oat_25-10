import CalculatorClient from "@/app/calculator/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "คำนวณภาษี | PND50",
  description: "เครื่องคำนวณภาษีและค่าบริการออนไลน์ฟรีสำหรับธุรกิจในประเทศไทย คำนวณ PND50, VAT, ภาษีหัก ณ ที่จ่าย",
  openGraph: {
    title: "คำนวณภาษี | PND50",
    description: "เครื่องคำนวณภาษีฟรีสำหรับธุรกิจในไทย",
    locale: "th_TH",
  },
}

export default function CalculatorPageThai() {
  return <CalculatorClient />
}
