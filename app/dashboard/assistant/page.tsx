"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, Mic, ImageIcon } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function AssistantPage() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your AI farming assistant. How can I help you today? You can ask me about crop diseases, farming practices, or get advice on your specific farming challenges.",
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // This would use the AI SDK in a real app
      // For now, we'll simulate a response
      setTimeout(async () => {
        // Simulated AI response
        const response = await simulateAIResponse(input)

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      console.error("Error generating response:", error)
      setIsLoading(false)
    }
  }

  // Simulate AI response - in a real app, this would use the AI SDK
  const simulateAIResponse = async (query: string): Promise<string> => {
    // In a real implementation, we would use:
    // const { text } = await generateText({
    //   model: openai("gpt-4o"),
    //   prompt: query,
    //   system: "You are a helpful farming assistant with expertise in agriculture."
    // });

    // For now, return predefined responses based on keywords
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("disease") || lowerQuery.includes("pest")) {
      return "To identify crop diseases, look for visual symptoms like spots, wilting, or discoloration. Take clear photos of affected areas and upload them in the Disease Detection section for AI analysis. For common pests, consider natural remedies like neem oil or introducing beneficial insects before resorting to chemical pesticides."
    } else if (lowerQuery.includes("water") || lowerQuery.includes("irrigation")) {
      return "Efficient irrigation is crucial for crop health. Consider drip irrigation to reduce water usage by up to 60%. Water early morning or evening to minimize evaporation. For most crops, it's better to water deeply but less frequently to encourage deeper root growth. Monitor soil moisture regularly and adjust based on weather conditions and crop stage."
    } else if (lowerQuery.includes("fertilizer") || lowerQuery.includes("nutrient")) {
      return "Before applying fertilizers, conduct a soil test to understand your soil's specific needs. Organic options like compost, manure, and green manures improve soil structure while adding nutrients. Apply fertilizers at the right growth stage - nitrogen during vegetative growth, phosphorus for root development, and potassium during flowering and fruiting stages."
    } else {
      return "Thank you for your question. To provide the most accurate advice, I'd need more specific details about your farming situation, such as your location, crop type, soil conditions, and current farming practices. Feel free to provide more context, or you can also use our Crop Recommendation tool for personalized suggestions based on your specific conditions."
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card className="h-[calc(100vh-10rem)]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-green-600" />
              AI Farming Assistant
            </CardTitle>
            <CardDescription>
              Ask questions about farming practices, crop diseases, or get personalized advice
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden">
            <div className="h-[calc(100vh-16rem)] overflow-y-auto pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <Avatar className="h-8 w-8">
                        {message.role === "assistant" ? (
                          <>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                            <AvatarFallback className="bg-green-100 text-green-800">AI</AvatarFallback>
                          </>
                        ) : (
                          <>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </>
                        )}
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 ${
                          message.role === "assistant" ? "bg-muted text-foreground" : "bg-green-600 text-white"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                        <AvatarFallback className="bg-green-100 text-green-800">AI</AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-4 bg-muted">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-green-600 animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 rounded-full bg-green-600 animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 rounded-full bg-green-600 animate-bounce"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Button type="button" size="icon" variant="outline" className="shrink-0">
                <Mic className="h-5 w-5" />
                <span className="sr-only">Voice input</span>
              </Button>
              <Button type="button" size="icon" variant="outline" className="shrink-0">
                <ImageIcon className="h-5 w-5" />
                <span className="sr-only">Upload image</span>
              </Button>
              <Input
                placeholder="Type your question here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="shrink-0 bg-green-600 hover:bg-green-700"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

