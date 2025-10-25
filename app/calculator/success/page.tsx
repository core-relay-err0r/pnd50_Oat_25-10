import { CheckCircle, Clock, ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalculatorSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-3">Quote Sent Successfully!</CardTitle>
            <p className="text-lg text-gray-600">Thank you for your interest in PND50 Accounting Services</p>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Your Quote Has Been Delivered</h3>
                  <p className="text-green-700">
                    We've received your business information and sent your detailed accounting services quote to our
                    team for review.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What Happens Next?</h3>
                  <div className="space-y-2 text-blue-700">
                    <p>• Our accounting specialists will review your requirements</p>
                    <p>• We'll prepare a customized service proposal for your business</p>
                    <p>
                      • <strong>We will contact you within 1 business day</strong> to discuss your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Immediate Assistance?</h3>
              <p className="text-gray-700 mb-4">
                If you have urgent questions or need to speak with us immediately, feel free to reach out:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> info@pnd50.com
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (Thailand Time)
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/calculator">Get Another Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
