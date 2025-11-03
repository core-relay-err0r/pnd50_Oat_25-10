import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About PND50 | Our Mission & Expertise in Thai Accounting",
  description:
    "Learn about PND50, a Burakorn Partners company. We're dedicated to revolutionizing accounting for foreign-owned businesses in Thailand with technology and expert guidance.",
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-4">Content coming soon...</p>
      </div>
    </div>
  )
}

export default AboutPage
