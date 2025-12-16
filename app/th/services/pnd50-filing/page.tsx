import PND50Client from "@/app/services/pnd50-filing/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "บริการยื่น PND50 | PND50",
  description: "บริการยื่น PND50 (ภาษีเงินได้หัก ณ ที่จ่าย) ฉบับมืออาชีพสำหรับธุรกิจในประเทศไทย ตรงเวลา ถูกต้อง ครบถ้วน",
  openGraph: {
    locale: "th_TH",
  },
}

export default function PND50PageThai() {
  return <PND50Client />
}
