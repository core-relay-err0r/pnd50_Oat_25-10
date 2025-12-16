import AboutClientPage from "@/app/about/about-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "เกี่ยวกับ PND50 | ภารกิจและความเชี่ยวชาญด้านบัญชีไทย",
  description:
    "เรียนรู้เกี่ยวกับ PND50 บริษัทในเครือ Burakorn Partners เราทุ่มเทเพื่อปฏิวัติระบบบัญชีสำหรับธุรกิจต่างชาติในประเทศไทยด้วยเทคโนโลยีและคำแนะนำจากผู้เชี่ยวชาญ",
  openGraph: {
    title: "เกี่ยวกับ PND50 | บริการบัญชีและภาษีมืออาชีพ",
    description: "ผู้เชี่ยวชาญด้านบัญชีและภาษีสำหรับธุรกิจในไทย",
    locale: "th_TH",
  },
}

export default function AboutPageThai() {
  return <AboutClientPage />
}
