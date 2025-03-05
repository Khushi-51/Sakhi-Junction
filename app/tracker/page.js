"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { DropletIcon, ThermometerIcon, HeartIcon, BrainIcon, ActivityIcon, PillIcon } from "lucide-react"

export default function HealthTracker() {
  const [darkMode, setDarkMode] = useState(false)
  const [date, setDate] = useState(new Date())
  const [symptoms, setSymptoms] = useState({
    flow: 2,
    pain: 1,
    mood: 3,
    energy: 2,
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Mock data for cycle prediction
  const cycleData = {
    lastPeriod: new Date(2023, 2, 15),
    cycleLength: 28,
    periodLength: 5,
    nextPeriod: new Date(2023, 3, 12),
    fertileWindow: {
      start: new Date(2023, 3, 5),
      end: new Date(2023, 3, 9),
    },
  }

  // Mock data for cycle history
  const cycleHistory = [
    { month: "January", length: 29, flow: "Medium", pain: "Mild" },
    { month: "February", length: 28, flow: "Heavy", pain: "Moderate" },
    { month: "March", length: 28, flow: "Medium", pain: "Mild" },
  ]

  // Mock data for insights
  const insights = [
    "Your cycle has been consistent for the last 3 months",
    "You tend to experience more fatigue 2 days before your period",
    "Your mood tends to improve after day 3 of your cycle",
    "Consider taking iron supplements during your period based on your flow patterns",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">Cycle & Wellness Tracker</h1>

        <Tabs defaultValue="tracker" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tracker">Daily Tracker</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Daily Tracker Tab */}
          <TabsContent value="tracker">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Log Today's Symptoms</CardTitle>
                  <CardDescription>Track how you're feeling today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium flex items-center">
                        <DropletIcon className="h-4 w-4 mr-2 text-primary" />
                        Flow Intensity
                      </label>
                      <Badge variant={symptoms.flow > 0 ? "default" : "outline"}>
                        {symptoms.flow === 0
                          ? "None"
                          : symptoms.flow === 1
                            ? "Light"
                            : symptoms.flow === 2
                              ? "Medium"
                              : symptoms.flow === 3
                                ? "Heavy"
                                : "Very Heavy"}
                      </Badge>
                    </div>
                    <Slider
                      value={[symptoms.flow]}
                      min={0}
                      max={4}
                      step={1}
                      onValueChange={(value) => setSymptoms({ ...symptoms, flow: value[0] })}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium flex items-center">
                        <ThermometerIcon className="h-4 w-4 mr-2 text-primary" />
                        Pain Level
                      </label>
                      <Badge variant={symptoms.pain > 0 ? "default" : "outline"}>
                        {symptoms.pain === 0
                          ? "None"
                          : symptoms.pain === 1
                            ? "Mild"
                            : symptoms.pain === 2
                              ? "Moderate"
                              : symptoms.pain === 3
                                ? "Severe"
                                : "Very Severe"}
                      </Badge>
                    </div>
                    <Slider
                      value={[symptoms.pain]}
                      min={0}
                      max={4}
                      step={1}
                      onValueChange={(value) => setSymptoms({ ...symptoms, pain: value[0] })}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium flex items-center">
                        <BrainIcon className="h-4 w-4 mr-2 text-primary" />
                        Mood
                      </label>
                      <Badge variant="default">
                        {symptoms.mood === 0
                          ? "Very Low"
                          : symptoms.mood === 1
                            ? "Low"
                            : symptoms.mood === 2
                              ? "Neutral"
                              : symptoms.mood === 3
                                ? "Good"
                                : "Excellent"}
                      </Badge>
                    </div>
                    <Slider
                      value={[symptoms.mood]}
                      min={0}
                      max={4}
                      step={1}
                      onValueChange={(value) => setSymptoms({ ...symptoms, mood: value[0] })}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium flex items-center">
                        <ActivityIcon className="h-4 w-4 mr-2 text-primary" />
                        Energy Level
                      </label>
                      <Badge variant="default">
                        {symptoms.energy === 0
                          ? "Very Low"
                          : symptoms.energy === 1
                            ? "Low"
                            : symptoms.energy === 2
                              ? "Moderate"
                              : symptoms.energy === 3
                                ? "High"
                                : "Very High"}
                      </Badge>
                    </div>
                    <Slider
                      value={[symptoms.energy]}
                      min={0}
                      max={4}
                      step={1}
                      onValueChange={(value) => setSymptoms({ ...symptoms, energy: value[0] })}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Today's Log</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cycle Prediction</CardTitle>
                  <CardDescription>Based on your tracking history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Next Period</p>
                      <p className="text-xl font-semibold text-primary">
                        {cycleData.nextPeriod.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        In {Math.round((cycleData.nextPeriod - new Date()) / (1000 * 60 * 60 * 24))} days
                      </p>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Cycle Length</p>
                      <p className="text-xl font-semibold text-primary">{cycleData.cycleLength} days</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Period: {cycleData.periodLength} days</p>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Fertile Window</p>
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-primary">
                          {cycleData.fertileWindow.start.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Start</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-primary">
                          {cycleData.fertileWindow.end.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">End</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Recommended Self-Care</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <HeartIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Consider taking iron supplements during your period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <PillIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Have pain relief medication ready 2 days before expected period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ActivityIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Light exercise may help reduce cramps</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Calendar View Tab */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>Track your cycle visually</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-red-400 mr-2"></div>
                    <span className="text-sm">Period</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-pink-200 mr-2"></div>
                    <span className="text-sm">Fertile Window</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-400 mr-2"></div>
                    <span className="text-sm">Ovulation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle>Your Health Insights</CardTitle>
                <CardDescription>Personalized insights based on your tracking data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Cycle Patterns</h3>
                    <ul className="space-y-2">
                      {insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2 bg-primary/5 p-3 rounded-md">
                          <ActivityIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-primary/5 p-4 rounded-md">
                        <h4 className="font-medium mb-2 flex items-center">
                          <HeartIcon className="h-4 w-4 mr-2 text-primary" />
                          Nutrition
                        </h4>
                        <p className="text-sm">
                          Based on your flow patterns, consider increasing iron-rich foods during your period.
                        </p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-md">
                        <h4 className="font-medium mb-2 flex items-center">
                          <ActivityIcon className="h-4 w-4 mr-2 text-primary" />
                          Exercise
                        </h4>
                        <p className="text-sm">
                          Light yoga may help with the cramps you typically experience on day 2.
                        </p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-md">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BrainIcon className="h-4 w-4 mr-2 text-primary" />
                          Mental Wellness
                        </h4>
                        <p className="text-sm">
                          Schedule self-care activities around day 25 of your cycle when your mood tends to dip.
                        </p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-md">
                        <h4 className="font-medium mb-2 flex items-center">
                          <PillIcon className="h-4 w-4 mr-2 text-primary" />
                          Supplements
                        </h4>
                        <p className="text-sm">
                          Consider magnesium supplements to help with the fatigue you experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Cycle History</CardTitle>
                <CardDescription>Review your past cycles and symptoms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Month</th>
                        <th className="text-left py-3 px-4">Cycle Length</th>
                        <th className="text-left py-3 px-4">Flow</th>
                        <th className="text-left py-3 px-4">Pain Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cycleHistory.map((cycle, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{cycle.month}</td>
                          <td className="py-3 px-4">{cycle.length} days</td>
                          <td className="py-3 px-4">{cycle.flow}</td>
                          <td className="py-3 px-4">{cycle.pain}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Symptom Trends</h3>
                  <div className="h-64 bg-primary/5 rounded-md flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Symptom trend visualization would appear here</p>
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

