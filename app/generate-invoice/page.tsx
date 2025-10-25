import GenerateInvoiceForm from "@/components/GenerateInvoiceForm"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

export default function GenerateInvoicePage() {
  return (
    <Section className="py-12 md:py-20 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Generate an Invoice</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple tool to help you create professional invoices. Fill out the form below to get started. The
            generated invoice is for preview purposes only.
          </p>
        </div>
        <div className="mt-10">
          <GenerateInvoiceForm />
        </div>
      </Container>
    </Section>
  )
}
