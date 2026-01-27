import type React from "react"
// Services layout with schemas only (metadata is in page.tsx)
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServiceSchema
        name="Accounting in Thailand & Company Registration Services"
        description="Professional accounting services and company registration in Thailand. Open your company in Thailand with expert guidance from PND50."
        url="/services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      {children}
    </>
  )
}
