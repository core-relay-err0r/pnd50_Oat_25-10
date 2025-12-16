import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Percent, Users, Globe, ArrowRight, CheckCircle2 } from "lucide-react"
import { RelatedLinks } from "@/components/seo/related-links"

export const metadata: Metadata = {
  title: "Withholding Tax Services | PND50",
  description:
    "Professional withholding tax calculation, filing, and compliance services in Thailand. Expert handling of PND1, PND3, PND53, and PND54 tax forms.",
  keywords: ["withholding tax Thailand", "PND1", "PND3", "PND53", "PND54", "tax withholding services", "ภาษีหัก ณ ที่จ่าย"],
}

const WithholdingTaxPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Expert Withholding Tax Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Accurate calculation and timely filing of withholding tax in Thailand. We handle PND1, PND3, PND53, and
                PND54 forms to ensure your business stays compliant with Revenue Department requirements.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Withholding Tax Help <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/withholding-tax-forms-and-percentage-illustration.jpg"
                alt="Withholding tax documents with percentage calculations"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Withholding Tax Forms We Handle</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Complete management of all withholding tax obligations in Thailand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Percent className="h-7 w-7 text-blue-500" />
                  PND1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Withholding tax on employee salaries and wages. Filed monthly by the 7th of the following month.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-7 w-7 text-blue-500" />
                  PND3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Withholding tax on payments to individuals (freelancers, contractors). Filed monthly or semi-annually.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-7 w-7 text-blue-500" />
                  PND53
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Withholding tax on payments to companies and juristic entities. Filed monthly by the 7th.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Percent className="h-7 w-7 text-blue-500" />
                  PND54
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Annual summary of withholding tax paid. Filed annually by the end of February.
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
              Why Choose Our Withholding Tax Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Accurate calculation of withholding tax rates (1-15%)",
                "Timely filing to avoid penalties and surcharges",
                "Proper documentation and record keeping",
                "Compliance with double taxation treaties",
                "Expert handling of foreign payments",
                "Real-time reporting and tax certificate issuance",
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Simplify Your Withholding Tax Obligations</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Don't get caught with late filings or incorrect calculations. Our experts ensure accurate withholding tax
            management every time.
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

export default WithholdingTaxPage
