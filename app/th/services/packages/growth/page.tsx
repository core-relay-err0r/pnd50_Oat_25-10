import GrowthPackageClient from "@/app/services/packages/growth/page.tsx"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "แพ็คเกจการเติบโต | PND50",
  description: "แพ็คเกจบริการขั้นสูงสำหรับธุรกิจที่กำลังเติบโตในประเทศไทย บัญชี ภาษี และคำปรึกษา",
  openGraph: {
    locale: "th_TH",
  },
}

export default function GrowthPackagePageThai() {
  return <GrowthPackageClient />
}
