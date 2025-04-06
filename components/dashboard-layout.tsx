"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Home, Leaf, Sprout, MessageSquare, CloudSun, LogOut, User } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useIsMobile()
  const [weather, setWeather] = useState({
    temp: 28,
    condition: "Sunny",
    location: "Punjab",
  })
  const [userInfo, setUserInfo] = useState({
    firstName: "User",
    lastName: "",
    phone: "",
  })

  // Load user info from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserInfo = localStorage.getItem("userInfo")
      if (storedUserInfo) {
        setUserInfo(JSON.parse(storedUserInfo))
      }
    }
  }, [])

  // Simulate fetching weather data
  useEffect(() => {
    // This would be an actual API call in a real app
    const fetchWeather = () => {
      // Simulated data
      setWeather({
        temp: Math.floor(Math.random() * 10) + 25,
        condition: ["Sunny", "Partly Cloudy", "Cloudy", "Light Rain"][Math.floor(Math.random() * 4)],
        location: "Punjab",
      })
    }

    fetchWeather()
  }, [])

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/dashboard/disease-detection",
      label: "Disease Detection",
      icon: Leaf,
    },
    {
      href: "/dashboard/crop-recommendations",
      label: "Crop Recommendations",
      icon: Sprout,
    },
    {
      href: "/dashboard/farming-tips",
      label: "Farming Tips",
      icon: CloudSun,
    },
    {
      href: "/dashboard/assistant",
      label: "AI Assistant",
      icon: MessageSquare,
    },
  ]

  const handleLogout = () => {
    // Clear user data from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("userInfo")
    }

    // Redirect to home page
    router.push("/")
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader className="flex items-center justify-center py-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <Image
                  src="/images/kisanai-logo.png"
                  alt="KisanAI Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </div>
              <span className="text-xl font-bold text-green-800">KisanAI</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>{/* Footer is empty now that we removed settings */}</SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="flex flex-col flex-1">
            <header className="border-b bg-white">
              <div className="flex h-16 items-center px-4 justify-between">
                <div className="flex items-center">
                  {isMobile && <SidebarTrigger className="mr-2" />}
                  <h1 className="text-xl font-semibold">
                    {navItems.find((item) => item.href === pathname)?.label || "Dashboard"}
                  </h1>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2 bg-green-50 p-2 rounded-md">
                    <CloudSun className="h-5 w-5 text-green-600" />
                    <div className="text-sm">
                      <span className="font-medium">{weather.temp}°C</span>
                      <span className="text-muted-foreground ml-1">{weather.condition}</span>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>
                            {userInfo.firstName.charAt(0)}
                            {userInfo.lastName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {userInfo.firstName} {userInfo.lastName}
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">{userInfo.phone}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/profile">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

