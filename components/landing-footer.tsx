import Link from "next/link"

export function LandingFooter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light"

  return (
    <footer className={`absolute bottom-0 left-0 right-0 z-20 ${isLight ? "" : ""}`}>
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-sky-100 via-sky-50/80 via-30% to-transparent"
            : "bg-gradient-to-t from-slate-950 via-slate-900/90 via-30% to-transparent"
        }`}
        style={{ height: "250px", bottom: 0, top: "auto" }}
      />

      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-blue-100/50 via-transparent to-transparent"
            : "bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
        }`}
        style={{ height: "350px", bottom: 0, top: "auto" }}
      />

      <div
        className={`absolute bottom-0 left-0 right-0 h-24 pointer-events-none ${
          isLight
            ? "bg-gradient-to-r from-sky-100/80 via-blue-100/60 to-teal-100/80"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
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
