import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/kisanai-logo.png" alt="KisanAI Logo" width={40} height={40} className="rounded-md" />
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
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">AI-Powered Support for Farmers</h1>
            <p className="text-lg text-gray-700">
              Empowering small and marginal farmers with technology to improve yield, reduce losses, and make informed
              decisions.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/ai-kissan.png"
              alt="Farmer using app"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <section id="features" className="py-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">How KisanAI Helps You</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="p-2 rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                      <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                      <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                    </svg>
                  </span>
                  Crop Disease Detection
                </CardTitle>
                <CardDescription>
                  Upload a photo of your crop and get instant disease diagnosis with treatment recommendations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="p-2 rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="M16 6h0" />
                      <path d="M18 10h0" />
                      <path d="M15 14h0" />
                      <path d="m7 14 4 3v3" />
                    </svg>
                  </span>
                  Crop Recommendations
                </CardTitle>
                <CardDescription>
                  Get personalized crop suggestions based on your soil type, region, and weather conditions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="p-2 rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  Farming Tips
                </CardTitle>
                <CardDescription>
                  Access weekly farming tips and best practices tailored to your region and crops.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/images/kisanai-logo.png"
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

