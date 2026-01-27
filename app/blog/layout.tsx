import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | PND50 Blog",
    default: "Blog | PND50 - Thailand Business & Tax Insights",
  },
  description:
    "Expert insights on Thailand business compliance, accounting, tax regulations, and PND50 filing for foreign companies and expats.",
  openGraph: {
    title: "PND50 Blog - Thailand Business & Tax Insights",
    description:
      "Expert insights on Thailand business compliance, accounting, tax regulations, and PND50 filing for foreign companies and expats.",
    type: "website",
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
