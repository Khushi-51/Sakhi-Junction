"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Clock, Bell, Calendar, Heart, MessageSquare, Music, Sparkles } from "lucide-react"

export default function SelfCare() {
  const [darkMode, setDarkMode] = useState(false)
  const [messageText, setMessageText] = useState("")
  const [messageDate, setMessageDate] = useState("")
  const [messageTime, setMessageTime] = useState("")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleSaveMessage = (e) => {
    e.preventDefault()
    // In a real app, this would save the message to be delivered later
    alert("Self-care message scheduled!")
    setMessageText("")
    setMessageDate("")
    setMessageTime("")
  }

  // Mock data for scheduled messages
  const scheduledMessages = [
    {
      id: 1,
      message: "Remember to take a deep breath and be kind to yourself today.",
      date: "2023-04-15",
      time: "08:00",
      repeat: "Daily",
    },
    {
      id: 2,
      message: "You're doing great! Take a moment to appreciate how far you've come.",
      date: "2023-04-20",
      time: "19:30",
      repeat: "Weekly",
    },
    {
      id: 3,
      message: "Time for a quick meditation break. 5 minutes of mindfulness can reset your day.",
      date: "2023-04-12",
      time: "12:00",
      repeat: "Weekdays",
    },
  ]

  // Mock data for self-care activities
  const selfCareActivities = [
    {
      category: "Physical",
      activities: [
        "Take a warm bath with essential oils",
        "Practice gentle yoga for 15 minutes",
        "Go for a walk in nature",
        "Try a new healthy recipe",
        "Get 8 hours of sleep tonight",
      ],
    },
    {
      category: "Mental",
      activities: [
        "Meditate for 10 minutes",
        "Journal your thoughts and feelings",
        "Read a book for pleasure",
        "Practice deep breathing exercises",
        "Limit social media time today",
      ],
    },
    {
      category: "Emotional",
      activities: [
        "Call a friend who makes you laugh",
        "Watch a feel-good movie",
        "Practice gratitude by listing 3 things you're thankful for",
        "Allow yourself to feel your emotions without judgment",
        "Say positive affirmations in the mirror",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">"Her Voice" Self-Care Messages</h1>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">Create Message</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Messages</TabsTrigger>
            <TabsTrigger value="activities">Self-Care Activities</TabsTrigger>
          </TabsList>

          {/* Create Message Tab */}
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create a Self-Care Message</CardTitle>
                <CardDescription>Schedule a message to your future self for motivation and self-care</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveMessage} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Write a supportive message to your future self..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={messageDate}
                        onChange={(e) => setMessageDate(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={messageTime}
                        onChange={(e) => setMessageTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="repeat">Repeat</Label>
                    <Select>
                      <SelectTrigger id="repeat">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">Once</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery">Delivery Method</Label>
                    <Select defaultValue="notification">
                      <SelectTrigger id="delivery">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="notification">App Notification</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="voice">Voice Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="private" />
                    <Label htmlFor="private">Keep this message private</Label>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveMessage} disabled={!messageText || !messageDate || !messageTime}>
                  Schedule Message
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Scheduled Messages Tab */}
          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle>Your Scheduled Messages</CardTitle>
                <CardDescription>Messages you've scheduled to receive</CardDescription>
              </CardHeader>
              <CardContent>
                {scheduledMessages.length > 0 ? (
                  <div className="space-y-4">
                    {scheduledMessages.map((msg) => (
                      <Card key={msg.id} className="border-l-4 border-l-primary">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <p className="font-medium">{msg.message}</p>
                            <Button variant="ghost" size="sm">
                              <Bell className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(msg.date).toLocaleDateString()}</span>
                            <Clock className="h-4 w-4 mx-1 ml-3" />
                            <span>{msg.time}</span>
                            <span className="ml-3">• {msg.repeat}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No messages scheduled</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      You haven't scheduled any self-care messages yet.
                    </p>
                    <Button variant="outline" onClick={() => document.getElementById("create-tab").click()}>
                      Create Your First Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Self-Care Activities Tab */}
          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle>Self-Care Activities</CardTitle>
                <CardDescription>Ideas to nurture your physical, mental, and emotional well-being</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selfCareActivities.map((category) => (
                    <div key={category.category}>
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        {category.category === "Physical" && <Heart className="h-5 w-5 mr-2 text-primary" />}
                        {category.category === "Mental" && <Sparkles className="h-5 w-5 mr-2 text-primary" />}
                        {category.category === "Emotional" && <Music className="h-5 w-5 mr-2 text-primary" />}
                        {category.category} Self-Care
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.activities.map((activity, index) => (
                          <div key={index} className="p-3 bg-primary/5 rounded-md flex items-start">
                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 shrink-0">
                              {index + 1}
                            </div>
                            <p>{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="mt-6 p-4 border rounded-md bg-secondary/50">
                    <h3 className="font-medium mb-2">Create Your Own Self-Care Routine</h3>
                    <p className="text-sm mb-4">
                      The best self-care practices are personalized to your needs. Try different activities and note
                      which ones make you feel better.
                    </p>
                    <Button variant="outline" className="w-full">
                      Save Your Favorite Activities
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

