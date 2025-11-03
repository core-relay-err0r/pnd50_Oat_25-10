import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | PND50",
  description:
    "Comprehensive accounting, tax, payroll, and corporate services for foreign-owned businesses in Thailand.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span>💼</span>
            Our Services
          </h1>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {/* Accounting & Bookkeeping */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Accounting & Bookkeeping</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                We handle your monthly bookkeeping, financial statements, and reconciliations with precision. All work
                is processed internally using TR Cloud — a secure accounting system operated by our team. Reports are
                delivered directly to you via email every month.
              </p>
            </div>
          </div>

          {/* Tax & Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tax & Compliance</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                Monthly and annual tax filings, including VAT, withholding tax, and corporate income tax. We help ensure
                your company remains fully compliant with Thai Revenue Department regulations.
              </p>
            </div>
          </div>

          {/* Payroll Services */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Payroll Services</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                Monthly payroll and social security submissions, prepared accurately and delivered on time. Ideal for
                both local and foreign-owned businesses.
              </p>
            </div>
          </div>

          {/* Corporate Services */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Corporate Services</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                Company registration, shareholder updates, and annual DBD filings — handled efficiently by our team.
              </p>
            </div>
          </div>

          {/* Advisory & Support */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Advisory & Support</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                Clear, practical guidance on accounting and compliance to help your business make confident decisions in
                Thailand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
