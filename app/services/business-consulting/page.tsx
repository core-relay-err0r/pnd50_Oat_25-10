import type { Metadata } from "next"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, BarChart, DollarSign, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Business Consulting | PND50",
  description:
    "Empowering your business with strategic insights and innovative solutions. Achieve sustainable growth with our expert consulting services.",
}

const BusinessConsultingPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Strategic Insights for Sustainable Growth
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We partner with you to navigate challenges, unlock opportunities, and build a roadmap for long-term
                success.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/images/services/business-consulting-hero.png"
                alt="Professionals in a consulting meeting analyzing a graph"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Consulting Services</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              From strategic planning to financial advisory, we provide the expertise you need to thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="h-7 w-7 text-blue-500" />
                  Strategic Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop a clear roadmap for your business success with our comprehensive strategic planning services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart className="h-7 w-7 text-blue-500" />
                  Operational Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Streamline your operations and improve efficiency with our expert analysis and recommendations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="h-7 w-7 text-blue-500" />
                  Financial Advisory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make informed financial decisions with our comprehensive advisory services, from budgeting to
                  investment analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">What is business consulting?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Business consulting is a service where experts provide professional advice, guidance, and actionable
                  solutions to businesses experiencing issues they can't deal with on their own. It helps companies
                  improve their performance and efficiency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  How can business consulting benefit my company?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our consulting services can help you gain new perspectives on challenges, identify new opportunities,
                  improve operational efficiency, increase profitability, and develop a solid strategy for sustainable
                  growth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  What types of businesses do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We work with a wide range of businesses, from startups and small businesses to established enterprises
                  across various industries. Our tailored approach ensures that our solutions meet the unique needs of
                  each client.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default BusinessConsultingPage
