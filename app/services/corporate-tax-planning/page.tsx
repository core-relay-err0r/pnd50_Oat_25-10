import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Building2, FileText, ArrowRight, CheckCircle2 } from "lucide-react"
import { RelatedLinks } from "@/components/seo/related-links"

export const metadata: Metadata = {
  title: "Corporate Tax Planning Services | PND50",
  description:
    "Strategic corporate tax planning to minimize tax liability and maximize profitability in Thailand. Expert guidance on tax structures, incentives, and compliance.",
  keywords: [
    "corporate tax planning Thailand",
    "business tax strategy",
    "corporate tax optimization",
    "BOI tax incentives",
    "การวางแผนภาษีนิติบุคคล",
  ],
}

const CorporateTaxPlanningPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Strategic Corporate Tax Planning for Business Growth
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Optimize your corporate tax position with expert planning strategies. We help businesses minimize tax
                liability while ensuring full compliance with Thai tax regulations and maximizing available incentives.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Optimize Your Taxes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/corporate-tax-planning-with-charts-and-growth-grap.jpg"
                alt="Corporate tax planning illustration with growth charts and business analytics"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Corporate Tax Planning Services</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Comprehensive tax strategies tailored to your business structure and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-7 w-7 text-blue-500" />
                  Tax Efficiency Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of tax-efficient structures and strategies to minimize corporate income tax (20% standard
                  rate) while maintaining compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-7 w-7 text-blue-500" />
                  BOI & Tax Incentives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert guidance on Board of Investment (BOI) incentives, tax holidays, and special economic zone
                  benefits for eligible businesses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-7 w-7 text-blue-500" />
                  Corporate Restructuring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tax-efficient corporate restructuring, mergers, acquisitions, and group reorganizations to optimize
                  overall tax position.
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
              Key Tax Planning Areas We Cover
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Corporate income tax optimization (20% standard rate)",
                "Transfer pricing compliance and documentation",
                "International tax planning and treaty benefits",
                "Group tax consolidation strategies",
                "Dividend and profit distribution planning",
                "R&D tax incentives and double deduction claims",
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Optimize Your Corporate Tax Strategy?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Let our tax planning experts analyze your business and develop a customized strategy to minimize tax
            liability and maximize profitability.
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

export default CorporateTaxPlanningPage
