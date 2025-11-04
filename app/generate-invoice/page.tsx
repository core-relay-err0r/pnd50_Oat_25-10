import GenerateInvoicePageClient from "@/components/GenerateInvoicePageClient"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

export default function GenerateInvoicePage() {
  return (
    <Section className="py-8 sm:py-12 md:py-20 bg-slate-50">
      <Container className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Generate an Invoice
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple tool to help you create professional invoices. Fill out the form below to get started. The
            generated invoice is for preview purposes only.
          </p>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <GenerateInvoicePageClient />
        </div>
      </Container>
    </Section>
  )
}
