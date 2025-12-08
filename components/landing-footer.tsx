import Link from "next/link"

export function LandingFooter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light"

  return (
    <footer
      className={`absolute bottom-0 left-0 right-0 z-20 pt-20 pb-6 px-4 ${
        isLight
          ? "bg-gradient-to-t from-white/80 via-sky-50/60 to-transparent"
          : "bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p className={`text-xs md:text-sm font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Powered by{" "}
            <Link
              href="https://burakornpartners.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors underline underline-offset-4 ${
                isLight
                  ? "text-blue-600 hover:text-blue-700 decoration-blue-300/50"
                  : "text-primary hover:text-primary/80 decoration-primary/30"
              }`}
            >
              Burakorn Partners
            </Link>
          </p>
          <p className={`text-[10px] mt-2 ${isLight ? "text-slate-400" : "text-slate-600"}`}>
            © {new Date().getFullYear()} PND50. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
