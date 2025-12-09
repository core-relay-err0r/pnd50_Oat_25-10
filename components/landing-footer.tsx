import Link from "next/link"

export function LandingFooter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light"

  return (
    <footer className={`relative w-full z-20 ${isLight ? "" : ""}`}>
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-sky-100/90 via-sky-50/40 to-transparent"
            : "bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"
        }`}
        style={{ height: "150px", bottom: 0, top: "auto" }}
      />

      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-sky-100/70 via-sky-50/20 to-transparent"
            : "bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"
        }`}
        style={{ height: "200px", bottom: 0, top: "auto" }}
      />

      <div
        className={`absolute bottom-0 left-0 right-0 h-16 pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-sky-100 via-sky-50/60 to-transparent"
            : "bg-gradient-to-t from-slate-900 via-slate-800/60 to-transparent"
        }`}
      />

      <div className="container mx-auto relative z-10 pt-32 pb-6 px-4">
        <div className="text-center">
          <p className={`text-xs md:text-sm font-medium ${isLight ? "text-slate-600" : "text-slate-400"}`}>
            Powered by{" "}
            <Link
              href="https://burakornpartners.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors underline underline-offset-4 ${
                isLight
                  ? "text-sky-600 hover:text-sky-700 decoration-sky-300/50"
                  : "text-primary hover:text-primary/80 decoration-primary/30"
              }`}
            >
              Burakorn Partners
            </Link>
          </p>
          <p className={`text-[10px] mt-2 ${isLight ? "text-slate-500" : "text-slate-600"}`}>
            © {new Date().getFullYear()} PND50. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
