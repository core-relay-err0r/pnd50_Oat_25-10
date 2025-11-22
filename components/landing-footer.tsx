import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-20 pt-20 pb-6 px-4 bg-gradient-to-t from-slate-50 via-white/80 to-transparent">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-xs md:text-sm font-medium text-slate-500">
            Powered by{" "}
            <Link
              href="https://burakornpartners.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 underline-offset-4"
            >
              Burakorn Partners
            </Link>
          </p>
          <p className="text-[10px] text-slate-400 mt-2">© {new Date().getFullYear()} PND50. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
