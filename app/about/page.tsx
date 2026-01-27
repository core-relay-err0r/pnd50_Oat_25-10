import AboutClientPage from "./about-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About PND50 | Our Mission & Expertise in Thai Accounting",
  description:
    "Learn about PND50, a Burakorn Partners company. We're dedicated to revolutionizing accounting for foreign-owned businesses in Thailand with technology and expert guidance.",
}

export default function AboutPage() {
  return <AboutClientPage />
}
