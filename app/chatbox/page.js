"use client"

import { useState, useRef, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, User, Info } from "lucide-react"

export default function Chatbox() {
  const [darkMode, setDarkMode] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm your सखी Junction health assistant. I'm here to provide information and support on women's health topics. What can I help you with today?",
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef(null)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    const userMessage = {
      role: "user",
      content: message,
      timestamp: new Date(),
    }

    setChatHistory([...chatHistory, userMessage])
    setMessage("")

    // Simulate bot response (in a real app, this would call an AI API)
    setTimeout(() => {
      const botResponses = {
        pcos: "PCOS (Polycystic Ovary Syndrome) is a hormonal disorder common among women of reproductive age. Symptoms include irregular periods, excess androgen levels, and polycystic ovaries. Lifestyle changes like regular exercise and a balanced diet can help manage symptoms. Would you like more specific information about PCOS management?",
        period:
          "Menstrual cycles typically range from 21 to 35 days, with bleeding lasting 2-7 days. Variations can be normal, but significant changes in flow, duration, or associated pain should be discussed with a healthcare provider. Is there something specific about your period that concerns you?",
        breast:
          "Regular breast self-examinations are recommended to detect any changes. Look for changes in size, shape, skin texture, nipple discharge, or lumps. The best time to perform a self-exam is a few days after your period ends. Would you like me to guide you through how to perform a proper breast self-examination?",
        anxiety:
          "Anxiety is common and can be managed through various techniques. Deep breathing exercises, meditation, regular physical activity, and adequate sleep can help. If anxiety is interfering with your daily life, consider speaking with a mental health professional. Would you like some specific anxiety management techniques?",
      }

      let botResponse =
        "I'm here to help with women's health topics. You can ask me about menstrual health, PCOS, reproductive health, breast health, mental wellness, and more. How can I assist you today?"

      // Simple keyword matching (a real app would use more sophisticated NLP)
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (message.toLowerCase().includes(keyword)) {
          botResponse = response
          break
        }
      }

      setChatHistory([
        ...chatHistory,
        userMessage,
        {
          role: "bot",
          content: botResponse,
          timestamp: new Date(),
        },
      ])
    }, 1000)
  }

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  // Sample suggested questions
  const suggestedQuestions = [
    "What is PCOS and how can I manage it?",
    "How can I track my menstrual cycle?",
    "What are the signs of breast cancer?",
    "How can I manage anxiety during my period?",
    "What foods help with menstrual cramps?",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Health Assistant Chatbox</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Info Sidebar */}
            <Card className="md:col-span-1 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  This health assistant provides information on women's health topics. It can help with:
                </p>
                <ul className="text-sm space-y-2 list-disc pl-4">
                  <li>Menstrual health</li>
                  <li>PCOS and endometriosis</li>
                  <li>Reproductive health</li>
                  <li>Breast health</li>
                  <li>Mental wellness</li>
                  <li>Nutrition and fitness</li>
                </ul>
                <div className="mt-4 pt-4 border-t text-sm text-gray-500 dark:text-gray-400">
                  <p className="mb-2">
                    <strong>Note:</strong> This assistant provides general information only and is not a substitute for
                    professional medical advice.
                  </p>
                  <p>Always consult with a healthcare provider for medical concerns.</p>
                </div>
              </CardContent>
            </Card>

            {/* Chat Interface */}
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Chat with Health Assistant</CardTitle>
                <CardDescription>Ask questions about women's health topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] overflow-y-auto mb-4 p-4 border rounded-md">
                  {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex mb-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`flex max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                        <Avatar className={`h-8 w-8 ${msg.role === "user" ? "ml-2" : "mr-2"}`}>
                          {msg.role === "user" ? (
                            <>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                              <AvatarFallback>
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            </>
                          ) : (
                            <>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot" />
                              <AvatarFallback>
                                <Bot className="h-4 w-4" />
                              </AvatarFallback>
                            </>
                          )}
                        </Avatar>
                        <div
                          className={`p-3 rounded-lg ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          <p>{msg.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Suggested Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setMessage(question)
                        }}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                  <Input
                    placeholder="Type your health question here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" disabled={!message.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

