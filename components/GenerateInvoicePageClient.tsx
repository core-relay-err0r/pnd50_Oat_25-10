"use client"

import dynamic from "next/dynamic"

const GenerateInvoiceForm = dynamic(() => import("@/components/GenerateInvoiceForm"), {
  ssr: false,
})

export default function GenerateInvoicePageClient() {
  return <GenerateInvoiceForm />
}
