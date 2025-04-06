import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/icon-kissan.png" alt="KisanAI Logo" width={40} height={40} className="rounded-md" />
          <h1 className="text-2xl font-bold text-green-800">KisanAI</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6">About KisanAI</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              KisanAI is dedicated to empowering small and marginal farmers through accessible AI-driven agricultural
              support. Our mission is to bridge the technology gap in farming communities, providing tools that help
              farmers make informed decisions to improve yield, reduce losses, and minimize dependency on costly expert
              consultations.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that by combining traditional farming knowledge with modern technology, we can create
              sustainable agricultural practices that benefit both farmers and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>AI-powered crop disease detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Personalized crop recommendations based on soil and climate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Region-specific farming tips and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>AI chatbot for instant farming advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Weather forecasts and alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Impact</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Increased crop yields by up to 25% for participating farmers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Reduced crop losses due to early disease detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Optimized resource usage through smart recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Empowered farmers with knowledge and technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Promoted sustainable farming practices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">How It Works</h2>
            <p className="text-gray-700 mb-4">
              KisanAI uses advanced machine learning algorithms to analyze images of crops, soil data, and weather
              patterns. Our system is trained on thousands of crop disease images and agricultural data points to
              provide accurate recommendations tailored to each farmer's specific conditions.
            </p>
            <p className="text-gray-700">
              The mobile-friendly application works even in areas with limited connectivity, ensuring that farmers in
              remote regions can access the technology they need to improve their farming practices.
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/signup">Join KisanAI Today</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/images/icon-kissan.png"
                alt="KisanAI Logo"
                width={32}
                height={32}
                className="rounded-md bg-white"
              />
              <span className="text-xl font-bold">KisanAI</span>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left text-green-200">© 2025 KisanAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

