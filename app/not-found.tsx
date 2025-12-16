import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, HelpCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 flex items-center justify-center px-4">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] sm:text-[200px] font-bold leading-none bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8 text-lg">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <HelpCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6">
          <p className="text-sm font-medium text-slate-700 mb-4">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/services"
              className="px-4 py-2 text-sm text-slate-600 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              href="/calculator"
              className="px-4 py-2 text-sm text-slate-600 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Price Calculator
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 text-sm text-slate-600 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 rounded-lg transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-slate-600 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 rounded-lg transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
