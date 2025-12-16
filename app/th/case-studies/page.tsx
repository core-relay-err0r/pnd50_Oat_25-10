import CaseStudiesClient from "@/app/case-studies/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "กรณีศึกษา | PND50",
  description: "กรณีศึกษาความสำเร็จจากลูกค้าของ PND50 ในการบริหารบัญชีและภาษีสำหรับธุรกิจในประเทศไทย",
  openGraph: {
    title: "กรณีศึกษา | PND50",
    description: "เรื่องราวความสำเร็จจากลูกค้าของเรา",
    locale: "th_TH",
  },
}

export default function CaseStudiesPageThai() {
  return <CaseStudiesClient />
}
