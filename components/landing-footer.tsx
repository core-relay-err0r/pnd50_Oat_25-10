import Link from "next/link"

const CURRENT_YEAR = 2025

export function LandingFooter({
  variant = "dark",
  absolute = true,
}: { variant?: "dark" | "light"; absolute?: boolean }) {
  const isLight = variant === "light"

  return (
    <footer className={`${absolute ? "absolute bottom-0 left-0 right-0" : "relative w-full"} z-20`}>
      <div className="container mx-auto relative z-10 pt-8 pb-6 px-4">
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
            © {CURRENT_YEAR} PND50. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
