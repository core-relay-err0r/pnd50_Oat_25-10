import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Expert Financial Guidance?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let tax compliance and financial management hold your business back. Our experienced team is ready to
            help you navigate Thailand's complex regulatory landscape with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm opacity-90">15-minute discovery call</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <MessageCircle className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm opacity-90">Same-day reply guaranteed</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-sm opacity-90">Tailored to your business</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="tel:+6620172949">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Call Now: +66 2 017 2949
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>✓ No obligation consultation ✓ Immediate expert advice ✓ Transparent pricing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
