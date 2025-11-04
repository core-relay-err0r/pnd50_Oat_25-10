"use client"

import { useRouter } from "next/navigation"
import GenerateInvoiceForm from "@/components/GenerateInvoiceForm"

export default function NewInvoicePage() {
  const router = useRouter()

  const handleSuccess = (invoiceId: string) => {
    router.push(`/invoices/${invoiceId}`)
  }

  return (
    <div className="container mx-auto py-8">
      <GenerateInvoiceForm onSuccess={handleSuccess} />
    </div>
  )
}
