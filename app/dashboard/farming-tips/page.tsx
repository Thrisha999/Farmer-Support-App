import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CloudSun, Calendar, Clock } from "lucide-react"
import Image from "next/image"

interface FarmingTip {
  id: number
  title: string
  content: string
  category: string
  date: string
  readTime: string
  image?: string
}

export default function FarmingTipsPage() {
  // Sample data - in a real app, this would come from an API
  const tips: Record<string, FarmingTip[]> = {
    latest: [
      {
        id: 1,
        title: "Optimizing Irrigation During Dry Spells",
        content:
          "During periods of limited rainfall, it's crucial to optimize your irrigation practices. Consider implementing drip irrigation systems which can reduce water usage by up to 60% compared to traditional methods. Water early in the morning or late in the evening to minimize evaporation. Focus on the root zone rather than the entire field. Monitor soil moisture levels regularly and adjust your watering schedule accordingly.",
        category: "Water Management",
        date: "April 2, 2025",
        readTime: "4 min read",
        image: "/images/dry-spells.jpg",
      },
      {
        id: 2,
        title: "Natural Pest Control Methods for Organic Farming",
        content:
          "Organic farming relies on natural pest control methods rather than synthetic pesticides. Introduce beneficial insects like ladybugs and praying mantises to control aphids and other pests. Plant companion crops such as marigolds, which repel nematodes, or basil, which deters flies and mosquitoes. Create diverse plantings to prevent pest buildup. Use neem oil spray for a broad-spectrum natural insecticide that's safe for beneficial insects.",
        category: "Organic Farming",
        date: "March 28, 2025",
        readTime: "5 min read",
        image: "/images/pest-control.jpg",
      },
      {
        id: 3,
        title: "Soil Health: The Foundation of Successful Farming",
        content:
          "Healthy soil is the foundation of productive farming. Regular soil testing helps you understand its nutrient content and pH levels. Implement crop rotation to prevent nutrient depletion and reduce pest pressure. Add organic matter through compost or cover crops to improve soil structure and water retention. Minimize tillage to protect soil microorganisms and prevent erosion. Consider adding beneficial microbes to enhance nutrient availability.",
        category: "Soil Management",
        date: "March 25, 2025",
        readTime: "6 min read",
        image: "/images/soil-health.jpg",
      },
    ],
    seasonal: [
      {
        id: 4,
        title: "Preparing Your Fields for the Monsoon Season",
        content:
          "As monsoon approaches, proper field preparation becomes essential. Clear drainage channels to prevent waterlogging. Consider raised bed farming in areas prone to flooding. Apply organic mulch to protect soil from heavy rainfall impact. Install rain gauges to monitor precipitation levels. Prepare contingency crops that can withstand excessive moisture. Service water pumps and ensure they're ready for potential flooding situations.",
        category: "Seasonal Planning",
        date: "March 20, 2025",
        readTime: "5 min read",
        image: "/images/monsoon.jpg",
      },
      {
        id: 5,
        title: "Summer Crop Protection Strategies",
        content:
          "Protecting crops during intense summer heat requires specific strategies. Install shade cloth for sensitive crops during peak heat hours. Increase watering frequency but avoid overwatering. Apply mulch to keep soil temperatures moderate and retain moisture. Consider planting heat-resistant varieties. Create windbreaks to reduce hot, drying winds. Monitor for heat stress symptoms and address them promptly.",
        category: "Crop Protection",
        date: "March 15, 2025",
        readTime: "4 min read",
        image: "/images/summer.jpg",
      },
    ],
    techniques: [
      {
        id: 6,
        title: "Intercropping: Maximizing Land Use Efficiency",
        content:
          "Intercropping involves growing two or more crops simultaneously in the same field. This practice maximizes land use efficiency and can increase total yield per acre. Choose complementary crops that don't compete for the same resources. Consider tall and short plant combinations to maximize sunlight utilization. Legumes paired with grains can enhance soil nitrogen. Plan harvest times carefully to minimize interference between crops.",
        category: "Farming Techniques",
        date: "March 10, 2025",
        readTime: "6 min read",
        image: "/images/intercropping.jpg",
      },
      {
        id: 7,
        title: "Conservation Tillage: Protecting Soil While Reducing Costs",
        content:
          "Conservation tillage minimizes soil disturbance, leaving at least 30% of crop residue on the soil surface. This approach reduces erosion, improves soil health, and lowers fuel and labor costs. Start with appropriate equipment modifications. Manage residue effectively to prevent disease. Monitor for weed pressure and adjust control methods accordingly. Consider cover crops during off-seasons to further enhance soil protection and build organic matter.",
        category: "Sustainable Practices",
        date: "March 5, 2025",
        readTime: "5 min read",
        image: "/images/conservation.jpg",
      },
    ],
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CloudSun className="h-5 w-5 text-green-600" />
              Farming Tips & Best Practices
            </CardTitle>
            <CardDescription>Weekly curated farming advice tailored to your region and crops</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="latest" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="latest">Latest Tips</TabsTrigger>
                <TabsTrigger value="seasonal">Seasonal Advice</TabsTrigger>
                <TabsTrigger value="techniques">Farming Techniques</TabsTrigger>
              </TabsList>

              {Object.entries(tips).map(([category, categoryTips]) => (
                <TabsContent key={category} value={category} className="space-y-6">
                  {categoryTips.map((tip) => (
                    <Card key={tip.id} className="overflow-hidden">
                      {tip.image && (
                        <div className="w-full h-48 relative">
                          <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                            {tip.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                        <p className="text-muted-foreground mb-4">{tip.content}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{tip.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{tip.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

