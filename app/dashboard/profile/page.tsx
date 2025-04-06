"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data - in a real app, this would come from a database
  const [userData, setUserData] = useState({
    firstName: "Ravi",
    lastName: "Singh",
    email: "ravi.singh@example.com",
    phone: "+91 9876543210",
    region: "Punjab",
    address: "Village Gurdaspur, District Amritsar",
  })

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <User className="h-5 w-5 text-green-600" />
              My Profile
            </CardTitle>
            <CardDescription>View and manage your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                  <AvatarFallback className="text-2xl">
                    {userData.firstName.charAt(0)}
                    {userData.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {!isEditing && (
                  <Button onClick={() => setIsEditing(true)} variant="outline">
                    Edit Profile
                  </Button>
                )}
              </div>

              <div className="flex-1 space-y-4">
                {isEditing ? (
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={userData.firstName}
                          onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={userData.lastName}
                          onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Region/State</Label>
                      <Input
                        id="region"
                        value={userData.region}
                        onChange={(e) => setUserData({ ...userData, region: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={userData.address}
                        onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button type="button" onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">
                              {userData.firstName} {userData.lastName}
                            </p>
                            <p className="text-sm text-muted-foreground">Full Name</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">{userData.email}</p>
                            <p className="text-sm text-muted-foreground">Email</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">{userData.phone}</p>
                            <p className="text-sm text-muted-foreground">Phone</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Location</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">{userData.region}</p>
                            <p className="text-sm text-muted-foreground">Region/State</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">{userData.address}</p>
                            <p className="text-sm text-muted-foreground">Address</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

