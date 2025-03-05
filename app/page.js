"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, MessageCircle, Calendar, BookOpen, Bell } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen flex flex-col`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">सखी Junction</h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
                A safe, community-driven platform designed to amplify women's voices, foster healing, and deliver
                holistic wellness solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => router.push("/community")} className="bg-primary hover:bg-primary/90">
                  Join Our Community
                </Button>
                <Button size="lg" variant="outline" onClick={() => router.push("/about")}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Women supporting each other"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Anonymous Health Discussions"
              description="A secure, women-only community where users can discuss PCOS, cancer, menstrual health, and more without fear of judgment."
            />

            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-primary" />}
              title="Smart Chatbox"
              description="A smart assistant trained in women's health, mental well-being, and myth-busting, providing instant, science-backed guidance."
            />

            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Cycle & Wellness Tracker"
              description="An easy-to-use menstrual and symptom tracker that offers personalized insights and self-care tips."
            />

            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Empowering Articles & Posts"
              description="A curated collection of blogs, stories, and expert insights written by and for women."
            />

            <FeatureCard
              icon={<Bell className="h-10 w-10 text-primary" />}
              title="'Her Voice' Self-Care Messages"
              description="A unique personal motivation system that allows users to set up scheduled voice/text messages for self-care."
            />

            <FeatureCard
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Holistic Wellness Resources"
              description="Access to resources covering physical health, mental wellness, nutrition, and self-defense tips."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Why Women Love सखी Junction
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="सखी Junction helped me find a community of women who understand my PCOS journey. I no longer feel alone."
              author="Priya, 28"
            />

            <TestimonialCard
              quote="The cycle tracker has been a game-changer for managing my endometriosis symptoms and planning my life accordingly."
              author="Meera, 32"
            />

            <TestimonialCard
              quote="As a breast cancer survivor, the supportive community here has been instrumental in my healing journey."
              author="Anjali, 45"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join सखी Junction Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a movement that's redefining women's health discussions and building a supportive community.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => router.push("/signup")}
            className="bg-white text-primary hover:bg-gray-100"
          >
            Sign Up Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <Card className="h-full bg-white dark:bg-gray-800">
      <CardContent className="pt-6">
        <p className="italic text-gray-700 dark:text-gray-300 mb-4">"{quote}"</p>
        <p className="font-semibold text-primary">— {author}</p>
      </CardContent>
    </Card>
  )
}

