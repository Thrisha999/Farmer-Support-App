"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/components/dashboard-layout"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Sprout, CloudSun, Bell } from "lucide-react"

export default function DashboardPage() {
  const [weather, setWeather] = useState({
    temp: 28,
    condition: "Sunny",
  })

  // Load user info and simulate weather data on component mount
  useEffect(() => {
    // Simulate fetching weather data
    const randomTemp = Math.floor(Math.random() * 10) + 25
    const conditions = ["Sunny", "Partly Cloudy", "Cloudy", "Light Rain"]
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]

    setWeather({
      temp: randomTemp,
      condition: randomCondition,
    })
  }, [])

  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      title: "Potential pest alert for wheat crops",
      description: "Recent weather conditions may lead to increased aphid activity in wheat crops.",
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "Optimal time for rice planting",
      description: "Based on current weather patterns, the next 7 days are ideal for rice planting.",
      date: "1 day ago",
    },
    {
      id: 3,
      title: "New government subsidy available",
      description: "New subsidy program for organic farming practices has been announced.",
      date: "3 days ago",
    },
  ]

  // Function to get weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "/images/weather-sunny.png"
      case "partly cloudy":
        return "/images/weather-cloudy.png"
      case "cloudy":
        return "/images/weather-cloudy.png"
      case "light rain":
        return "/images/weather-rainy.png"
      default:
        return "/images/weather-sunny.png"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/kisanai-logo.png"
                  alt="KisanAI Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <CardTitle className="text-xl">Welcome</CardTitle>
              </div>
              <CardDescription>Here's what's happening with your farm today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/dashboard/disease-detection" className="block">
                  <Card className="h-full hover:bg-green-50 transition-colors cursor-pointer border-green-100">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 mb-2 rounded-full bg-green-100 flex items-center justify-center">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium">Diagnose Crop Issue</h3>
                      <p className="text-sm text-muted-foreground mt-1">Upload a photo to identify diseases</p>
                      <div className="mt-3 h-24 w-full relative rounded-md overflow-hidden">
                        <Image src="/images/crop-disease.png" alt="Crop Disease" fill className="object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/dashboard/crop-recommendations" className="block">
                  <Card className="h-full hover:bg-green-50 transition-colors cursor-pointer border-green-100">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 mb-2 rounded-full bg-green-100 flex items-center justify-center">
                        <Sprout className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium">Get Crop Recommendations</h3>
                      <p className="text-sm text-muted-foreground mt-1">Find the best crops for your land</p>
                      <div className="mt-3 h-24 w-full relative rounded-md overflow-hidden">
                        <Image
                          src="/images/crop-recommendation.png"
                          alt="Crop Recommendation"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/dashboard/farming-tips" className="block">
                  <Card className="h-full hover:bg-green-50 transition-colors cursor-pointer border-green-100">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 mb-2 rounded-full bg-green-100 flex items-center justify-center">
                        <CloudSun className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium">Farming Tips</h3>
                      <p className="text-sm text-muted-foreground mt-1">Weekly advice for better yields</p>
                      <div className="mt-3 h-24 w-full relative rounded-md overflow-hidden">
                        <Image src="/images/farming-tips.png" alt="Farming Tips" fill className="object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CloudSun className="h-5 w-5 text-green-600" />
                Weather Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2">{weather.temp}°C</div>
                <div className="text-muted-foreground mb-4">{weather.condition}</div>
                <div className="h-20 w-20 relative mb-4">
                  <Image
                    src={getWeatherIcon(weather.condition) || "/placeholder.svg"}
                    alt="Weather"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="w-full grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-medium">Tomorrow</div>
                    <div>{weather.temp - 2}°C</div>
                  </div>
                  <div>
                    <div className="font-medium">Wed</div>
                    <div>{weather.temp + 1}°C</div>
                  </div>
                  <div>
                    <div className="font-medium">Thu</div>
                    <div>{weather.temp - 1}°C</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Bell className="h-5 w-5 text-green-600" />
                Recent Notifications
              </CardTitle>
              <CardDescription>AI-powered insights and alerts for your farm</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex flex-col space-y-1 border-b pb-3 last:border-0">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground">{notification.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

