"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, BookOpen, Heart, Share2, Clock } from "lucide-react"

export default function Articles() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Understanding PCOS: Symptoms, Causes, and Management",
      excerpt:
        "Polycystic Ovary Syndrome affects millions of women worldwide. Learn about the symptoms, causes, and effective management strategies.",
      author: "Dr. Priya Sharma",
      authorRole: "Gynecologist",
      date: "April 5, 2023",
      readTime: "8 min read",
      category: "Reproductive Health",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["PCOS", "Hormonal Health", "Women's Health"],
    },
    {
      id: 2,
      title: "The Connection Between Stress and Your Menstrual Cycle",
      excerpt:
        "Stress can significantly impact your menstrual cycle. Discover the science behind this connection and strategies to maintain hormonal balance.",
      author: "Dr. Meera Kapoor",
      authorRole: "Endocrinologist",
      date: "March 22, 2023",
      readTime: "6 min read",
      category: "Menstrual Health",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Stress Management", "Menstrual Health", "Hormones"],
    },
    {
      id: 3,
      title: "Breast Self-Examination: A Step-by-Step Guide",
      excerpt:
        "Regular breast self-examinations are crucial for early detection of breast cancer. Learn the proper technique with this comprehensive guide.",
      author: "Dr. Anjali Rao",
      authorRole: "Oncologist",
      date: "April 1, 2023",
      readTime: "5 min read",
      category: "Cancer Awareness",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Breast Health", "Cancer Prevention", "Self-Examination"],
    },
    {
      id: 4,
      title: "Nutrition for Hormonal Balance: Foods That Help",
      excerpt:
        "What you eat can significantly impact your hormonal health. Discover the foods that can help maintain hormonal balance naturally.",
      author: "Divya Tiwari",
      authorRole: "Nutritionist",
      date: "March 15, 2023",
      readTime: "7 min read",
      category: "Nutrition",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Nutrition", "Hormonal Health", "Diet"],
    },
    {
      id: 5,
      title: "Managing Anxiety and Depression During Your Period",
      excerpt:
        "Many women experience mood changes during their menstrual cycle. Learn effective strategies to manage anxiety and depression symptoms.",
      author: "Sanya Malhotra",
      authorRole: "Psychologist",
      date: "March 28, 2023",
      readTime: "9 min read",
      category: "Mental Health",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Mental Health", "Anxiety", "Depression", "PMS"],
    },
    {
      id: 6,
      title: "Essential Self-Defense Techniques Every Woman Should Know",
      excerpt:
        "Empower yourself with these practical self-defense techniques that can help you stay safe in potentially dangerous situations.",
      author: "Ritu Singh",
      authorRole: "Self-Defense Instructor",
      date: "April 3, 2023",
      readTime: "10 min read",
      category: "Self-Defense",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Self-Defense", "Safety", "Empowerment"],
    },
  ]

  // Categories for filtering
  const categories = [
    "All Categories",
    "Reproductive Health",
    "Menstrual Health",
    "Cancer Awareness",
    "Nutrition",
    "Mental Health",
    "Self-Defense",
  ]

  // Filter articles based on search query
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">Empowering Articles & Posts</h1>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="All Categories">
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured Article"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">Featured</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  Endometriosis Awareness: Breaking the Silence on a Common Condition
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  Endometriosis affects 1 in 10 women worldwide, yet it often goes undiagnosed for years. This
                  comprehensive guide aims to raise awareness, explain symptoms, and discuss treatment options.
                </CardDescription>
                <div className="flex items-center mb-6">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Neha Gupta" />
                    <AvatarFallback>NG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Dr. Neha Gupta</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Gynecologist & Endometriosis Specialist</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">April 10, 2023</span>
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>12 min read</span>
                </div>
                <Button>Read Full Article</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3">{article.category}</Badge>
              </div>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-3 line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                <div className="flex items-center mb-4">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={article.author} />
                    <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{article.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{article.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  <span className="mr-3">{article.date}</span>
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="link" className="px-0">
                  Read More
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Topics Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "PCOS",
              "Menstrual Health",
              "Breast Cancer",
              "Mental Health",
              "Nutrition",
              "Fitness",
              "Pregnancy",
              "Menopause",
              "Endometriosis",
              "Self-Defense",
              "Hormonal Health",
              "Sexual Health",
              "Wellness",
              "Self-Care",
            ].map((topic) => (
              <Button key={topic} variant="outline" className="rounded-full">
                {topic}
              </Button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Women's Health Insights</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, research findings, and self-care tips directly
              in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

