"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, Camera, AlertCircle, Leaf } from "lucide-react"
import Image from "next/image"

export default function DiseaseDetectionPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{
    disease: string
    confidence: number
    severity: "Low" | "Medium" | "High"
    description: string
    treatment: string[]
  } | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    // In a real app, this would access the device camera
    alert("Camera functionality would be implemented here")
  }

  // Update the analyzeImage function to provide different recommendations based on the disease
  const analyzeImage = () => {
    if (!selectedImage) return

    setIsAnalyzing(true)

    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // Mock results - in a real app, this would come from an AI model
      const diseases = [
        {
          disease: "Leaf Rust",
          confidence: 92.5,
          severity: "Medium",
          description:
            "Leaf rust is a fungal disease that affects wheat and other cereal crops. It appears as orange-brown pustules on leaves and can reduce crop yield significantly if left untreated.",
          treatment: [
            "Apply fungicide containing propiconazole or tebuconazole",
            "Ensure proper spacing between plants for better air circulation",
            "Remove and destroy infected plant debris",
            "Consider rust-resistant varieties for future planting",
          ],
        },
        {
          disease: "Powdery Mildew",
          confidence: 88.7,
          severity: "Low",
          description:
            "Powdery mildew is a fungal disease that appears as white powdery spots on leaves and stems. It thrives in humid conditions with moderate temperatures and can affect a wide range of crops.",
          treatment: [
            "Apply sulfur-based fungicide or neem oil spray",
            "Improve air circulation around plants",
            "Avoid overhead watering to keep foliage dry",
            "Remove and destroy severely infected plant parts",
          ],
        },
        {
          disease: "Bacterial Leaf Blight",
          confidence: 95.2,
          severity: "High",
          description:
            "Bacterial leaf blight is a serious disease affecting rice crops. It causes water-soaked lesions that turn yellow to white as they mature, and can lead to significant yield losses.",
          treatment: [
            "Use copper-based bactericides as a preventive measure",
            "Practice crop rotation with non-host crops",
            "Use disease-free seeds and resistant varieties",
            "Avoid excessive nitrogen fertilization",
            "Maintain proper field drainage",
          ],
        },
      ]

      // Randomly select one of the diseases for demonstration
      setResult(diseases[Math.floor(Math.random() * diseases.length)])
      setIsAnalyzing(false)
    }, 2000)
  }

  const resetAnalysis = () => {
    setSelectedImage(null)
    setResult(null)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              Crop Disease Detection
            </CardTitle>
            <CardDescription>
              Upload or take a photo of your crop to identify diseases and get treatment recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!selectedImage ? (
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="upload">Upload Image</TabsTrigger>
                  <TabsTrigger value="camera">Take Photo</TabsTrigger>
                </TabsList>
                <TabsContent value="upload">
                  <div className="border-2 border-dashed rounded-lg p-12 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload an image</h3>
                    <p className="text-sm text-muted-foreground mb-4">Drag and drop an image, or click to browse</p>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                      />
                      <Button>Select Image</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="camera">
                  <div className="border-2 border-dashed rounded-lg p-12 text-center">
                    <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Take a photo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use your device camera to take a photo of the crop
                    </p>
                    <Button onClick={handleCameraCapture}>Open Camera</Button>
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="border rounded-lg overflow-hidden">
                      <Image
                        src={selectedImage || "/placeholder.svg"}
                        alt="Selected crop image"
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" onClick={resetAnalysis}>
                        Change Image
                      </Button>
                      <Button onClick={analyzeImage} disabled={isAnalyzing} className="bg-green-600 hover:bg-green-700">
                        {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                      </Button>
                    </div>
                  </div>

                  {result && (
                    <div className="flex-1">
                      <div className="border rounded-lg p-4 bg-green-50">
                        <h3 className="text-lg font-medium mb-2">Analysis Results</h3>
                        <div className="space-y-3">
                          <div>
                            <Label className="text-sm text-muted-foreground">Disease Detected</Label>
                            <p className="font-medium text-lg">{result.disease}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Confidence</Label>
                            <p className="font-medium">{result.confidence.toFixed(1)}%</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Severity</Label>
                            <p className="font-medium">{result.severity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {result && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">About {result.disease}</h3>
                      <p className="text-muted-foreground">{result.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Recommended Treatment</h3>
                      <ul className="space-y-2">
                        {result.treatment.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="rounded-full bg-green-100 p-1 mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-600"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-start border-t pt-4">
            <Alert variant="outline" className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle>Tips for better results</AlertTitle>
              <AlertDescription className="text-sm">
                Take clear, well-lit photos of the affected plant parts. Include both healthy and diseased portions for
                comparison.
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

