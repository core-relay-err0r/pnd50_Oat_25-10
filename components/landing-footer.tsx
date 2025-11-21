import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="w-full z-20 pt-12 pb-8 px-4 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent mt-auto border-t border-white/5">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-xs md:text-sm font-medium text-slate-400">
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
          <p className="text-[10px] text-slate-600 mt-2">© {new Date().getFullYear()} PND50. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
