"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Filter } from "lucide-react"

export default function Community() {
  const [darkMode, setDarkMode] = useState(false)
  const [newPost, setNewPost] = useState("")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the post to the backend
    alert(`Post submitted: ${newPost}`)
    setNewPost("")
  }

  // Mock data for community posts
  const posts = [
    {
      id: 1,
      author: "Priya S.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 hours ago",
      content:
        "Just got my PCOS diagnosis confirmed. Looking for advice on managing symptoms naturally. Has anyone tried dietary changes that actually helped?",
      likes: 24,
      comments: 8,
      topic: "PCOS",
    },
    {
      id: 2,
      author: "Meera K.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "5 hours ago",
      content:
        "Feeling anxious about my upcoming mammogram. It's my first one after my mother was diagnosed with breast cancer last year. Any tips for staying calm?",
      likes: 32,
      comments: 15,
      topic: "Cancer",
    },
    {
      id: 3,
      author: "Anjali R.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "Yesterday",
      content:
        "I've been tracking my cycle for 3 months now and noticed my periods are getting more regular since I started yoga. Anyone else experienced this?",
      likes: 45,
      comments: 12,
      topic: "Menstrual Health",
    },
    {
      id: 4,
      author: "Divya T.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 days ago",
      content:
        "Struggling with postpartum depression. Some days are better than others. Would love to connect with other moms who've been through this.",
      likes: 56,
      comments: 23,
      topic: "Mental Health",
    },
  ]

  // Topics for the community
  const topics = [
    "All Topics",
    "PCOS",
    "Cancer",
    "Menstrual Health",
    "Reproductive Health",
    "Mental Health",
    "Nutrition",
    "Fitness",
    "Self-Defense",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Topics */}
          <aside className="md:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Topics</CardTitle>
                <CardDescription>Browse discussions by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topics.map((topic) => (
                    <li key={topic}>
                      <Button variant={topic === "All Topics" ? "default" : "ghost"} className="w-full justify-start">
                        {topic}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="md:w-2/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Feed</CardTitle>
                <CardDescription>Safe, anonymous discussions about women's health</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Create Post Form */}
                <form onSubmit={handlePostSubmit} className="mb-8">
                  <div className="space-y-4">
                    <Input
                      placeholder="Share your thoughts or ask a question..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[100px] resize-y"
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your posts are anonymous by default</p>
                      <Button type="submit" disabled={!newPost.trim()}>
                        Post
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Filter Options */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium">Recent Posts</h3>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src={post.avatar} alt={post.author} />
                              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">{post.author}</CardTitle>
                              <CardDescription>{post.time}</CardDescription>
                            </div>
                          </div>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {post.topic}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="py-2">
                        <p>{post.content}</p>
                      </CardContent>
                      <CardFooter className="pt-2 flex justify-between">
                        <div className="flex gap-4">
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Active Discussions & Resources */}
          <aside className="md:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="text-sm">
                    <a href="#" className="text-primary hover:underline">
                      Managing PCOS symptoms naturally
                    </a>
                    <p className="text-gray-500 dark:text-gray-400">32 women discussing</p>
                  </li>
                  <li className="text-sm">
                    <a href="#" className="text-primary hover:underline">
                      Endometriosis pain relief techniques
                    </a>
                    <p className="text-gray-500 dark:text-gray-400">18 women discussing</p>
                  </li>
                  <li className="text-sm">
                    <a href="#" className="text-primary hover:underline">
                      Postpartum depression support group
                    </a>
                    <p className="text-gray-500 dark:text-gray-400">24 women discussing</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-primary hover:underline text-sm">
                      Understanding PCOS: A Comprehensive Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline text-sm">
                      Breast Self-Examination Techniques
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline text-sm">
                      Mental Health Resources for Women
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline text-sm">
                      Nutrition Guide for Hormonal Balance
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

