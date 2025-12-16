import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileSearch, Scale, ArrowRight, CheckCircle2 } from "lucide-react"
import { RelatedLinks } from "@/components/seo/related-links"

export const metadata: Metadata = {
  title: "Tax Audit Support Services | PND50",
  description:
    "Professional tax audit representation and support in Thailand. Expert assistance with Revenue Department audits, documentation preparation, and dispute resolution.",
  keywords: [
    "tax audit support Thailand",
    "Revenue Department audit",
    "tax audit representation",
    "audit preparation",
    "การตรวจสอบภาษี",
  ],
}

const AuditSupportPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Professional Tax Audit Support & Representation
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Facing a tax audit from the Revenue Department? Our experienced team provides comprehensive support from
                preparation to resolution, protecting your interests every step of the way.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Audit Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/professional-tax-audit-support-with-documents-and-.jpg"
                alt="Tax audit support illustration with protective shield and documents"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Audit Support Services</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Comprehensive assistance throughout the entire audit process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-7 w-7 text-blue-500" />
                  Pre-Audit Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive review of your financial records and tax filings to identify and address potential
                  issues before the audit begins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileSearch className="h-7 w-7 text-blue-500" />
                  Documentation Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organization and preparation of all required documentation, invoices, receipts, and supporting
                  evidence for the audit process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-7 w-7 text-blue-500" />
                  Audit Representation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional representation during Revenue Department meetings and negotiations to protect your
                  interests and minimize tax exposure.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
              Why Choose PND50 for Audit Support?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Extensive experience with Thai Revenue Department audits",
                "Thorough documentation review and preparation",
                "Expert negotiation to minimize tax assessments",
                "Clear communication in both English and Thai",
                "Post-audit compliance recommendations",
                "Dispute resolution and appeals support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Don't Face an Audit Alone</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Get expert representation and support to navigate the audit process confidently. Contact us for immediate
            assistance with your tax audit.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-4 text-lg font-bold rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            Schedule Free Consultation
          </Button>
        </Container>
      </Section>

      <RelatedLinks variant="services" />
    </>
  )
}

export default AuditSupportPage
