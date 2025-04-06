"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sprout } from "lucide-react"
import Image from "next/image"

interface CropRecommendation {
  name: string
  score: number
  description: string
  growthPeriod: string
  waterRequirement: "Low" | "Medium" | "High"
  expectedYield: string
  image: string
}

export default function CropRecommendationsPage() {
  const [soilType, setSoilType] = useState("")
  const [rainfall, setRainfall] = useState(50)
  const [temperature, setTemperature] = useState(25)
  const [humidity, setHumidity] = useState(60)
  const [isGenerating, setIsGenerating] = useState(false)
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock data - in a real app, this would come from an AI model
      setRecommendations([
        {
          name: "Wheat",
          score: 92,
          description:
            "Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food.",
          growthPeriod: "110-130 days",
          waterRequirement: "Medium",
          expectedYield: "3.5-4.5 tons/hectare",
          image: "/images/wheat.png",
        },
        {
          name: "Rice",
          score: 85,
          description: "Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima.",
          growthPeriod: "90-110 days",
          waterRequirement: "High",
          expectedYield: "4-6 tons/hectare",
          image: "/images/rice.png",
        },
        {
          name: "Maize (Corn)",
          score: 78,
          description:
            "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico.",
          growthPeriod: "70-100 days",
          waterRequirement: "Medium",
          expectedYield: "5-7 tons/hectare",
          image: "/images/maize.png",
        },
      ])
      setIsGenerating(false)

      // Automatically switch to the results tab
      document.querySelector('[value="results"]')?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    }, 2000)
  }

  const resetForm = () => {
    setSoilType("")
    setRainfall(50)
    setTemperature(25)
    setHumidity(60)
    setRecommendations([])
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Sprout className="h-5 w-5 text-green-600" />
              Crop Recommendations
            </CardTitle>
            <CardDescription>
              Get AI-powered crop recommendations based on your soil and climate conditions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="form">Input Parameters</TabsTrigger>
                <TabsTrigger value="results" disabled={recommendations.length === 0}>
                  Recommendations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="soilType">Soil Type</Label>
                        <Select value={soilType} onValueChange={setSoilType} required>
                          <SelectTrigger id="soilType">
                            <SelectValue placeholder="Select soil type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clay">Clay Soil</SelectItem>
                            <SelectItem value="sandy">Sandy Soil</SelectItem>
                            <SelectItem value="loamy">Loamy Soil</SelectItem>
                            <SelectItem value="silty">Silty Soil</SelectItem>
                            <SelectItem value="peaty">Peaty Soil</SelectItem>
                            <SelectItem value="chalky">Chalky Soil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rainfall">Average Rainfall (mm/month)</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="rainfall"
                            min={0}
                            max={300}
                            step={10}
                            value={[rainfall]}
                            onValueChange={(value) => setRainfall(value[0])}
                            className="flex-1"
                          />
                          <span className="w-12 text-right font-medium">{rainfall}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="temperature">Average Temperature (°C)</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="temperature"
                            min={0}
                            max={50}
                            step={1}
                            value={[temperature]}
                            onValueChange={(value) => setTemperature(value[0])}
                            className="flex-1"
                          />
                          <span className="w-12 text-right font-medium">{temperature}°C</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="humidity">Average Humidity (%)</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="humidity"
                            min={0}
                            max={100}
                            step={5}
                            value={[humidity]}
                            onValueChange={(value) => setHumidity(value[0])}
                            className="flex-1"
                          />
                          <span className="w-12 text-right font-medium">{humidity}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Reset
                    </Button>
                    <Button
                      type="submit"
                      disabled={isGenerating || !soilType}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isGenerating ? "Generating..." : "Get Recommendations"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="results">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Recommended Crops</h3>
                    <Button variant="outline" size="sm" onClick={() => resetForm()}>
                      New Recommendation
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {recommendations.map((crop, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-32 bg-green-50 flex items-center justify-center p-4">
                            <div className="relative h-24 w-24">
                              <Image
                                src={crop.image || "/placeholder.svg"}
                                alt={crop.name}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <CardContent className="flex-1 p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-xl font-bold">{crop.name}</h4>
                              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                                {crop.score}% match
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-4">{crop.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <Label className="text-xs text-muted-foreground">Growth Period</Label>
                                <p className="font-medium">{crop.growthPeriod}</p>
                              </div>
                              <div>
                                <Label className="text-xs text-muted-foreground">Water Requirement</Label>
                                <p className="font-medium">{crop.waterRequirement}</p>
                              </div>
                              <div>
                                <Label className="text-xs text-muted-foreground">Expected Yield</Label>
                                <p className="font-medium">{crop.expectedYield}</p>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

