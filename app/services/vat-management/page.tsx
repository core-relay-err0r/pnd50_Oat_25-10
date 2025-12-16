import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, Calculator, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react"
import { RelatedLinks } from "@/components/seo/related-links"

export const metadata: Metadata = {
  title: "VAT Management Services | PND50",
  description:
    "Expert VAT registration, filing, and compliance services in Thailand. Ensure your business meets all VAT obligations with our comprehensive management solutions.",
  keywords: ["VAT management", "VAT registration Thailand", "VAT filing", "VAT compliance", "การจัดการภาษีมูลค่าเพิ่ม"],
}

const VatManagementPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Comprehensive VAT Management Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Navigate Thailand's VAT requirements with confidence. From registration to monthly filing, we handle all
                aspects of VAT compliance so you can focus on growing your business.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get VAT Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/vat-tax-documents-and-calculator-illustration.jpg"
                alt="VAT management illustration with tax forms and calculator"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our VAT Services</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Complete VAT solutions tailored to your business needs in Thailand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileCheck className="h-7 w-7 text-blue-500" />
                  VAT Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete assistance with VAT registration for new businesses and companies reaching the VAT threshold
                  (1.8 million THB annual revenue).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calculator className="h-7 w-7 text-blue-500" />
                  Monthly VAT Filing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accurate monthly VAT return preparation and submission (PP30, PP36) by the 15th of each month to
                  ensure compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-7 w-7 text-blue-500" />
                  VAT Audits & Disputes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert support during Revenue Department audits and assistance with VAT disputes or refund claims.
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
              Why Choose PND50 for VAT Management?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Expert knowledge of Thai VAT regulations and updates",
                "Timely filing to avoid penalties and interest",
                "Accurate VAT calculations and input/output tracking",
                "Professional liaison with Revenue Department",
                "Cloud-based systems for real-time VAT status",
                "Bilingual support in English and Thai",
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need Help with VAT Compliance?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Don't risk penalties or missed deadlines. Let our VAT experts handle your monthly filings and ensure full
            compliance with Thai tax law.
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

export default VatManagementPage
