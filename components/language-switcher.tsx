"use client"

import { usePathname, useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLang = pathname.startsWith("/th") ? "th" : "en"

  const switchLanguage = (newLang: string) => {
    if (newLang === currentLang) return

    let newPathname = pathname

    if (newLang === "th") {
      // Switch to Thai
      if (!pathname.startsWith("/th")) {
        newPathname = pathname === "/" ? "/th" : `/th${pathname}`
      }
    } else {
      // Switch to English
      if (pathname.startsWith("/th")) {
        newPathname = pathname.replace(/^\/th/, "") || "/"
      }
    }

    router.push(newPathname)
  }

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={currentLang === language.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
