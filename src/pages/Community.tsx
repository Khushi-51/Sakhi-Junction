
import AppLayout from "@/components/layout/AppLayout";
import { DiscussionCard } from "@/components/ui/discussion-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FilterIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Community() {
  const [postContent, setPostContent] = useState("");
  
  const topics = [
    "All Topics",
    "PCOS",
    "Cancer",
    "Menstrual Health",
    "Reproductive Health",
    "Mental Health",
    "Nutrition",
    "Fitness",
    "Self-Defense"
  ];
  
  const discussions = [
    {
      author: "Priya S.",
      timeAgo: "2 hours ago",
      content: "Just got my PCOS diagnosis confirmed. Looking for advice on managing symptoms naturally. Has anyone tried dietary changes that actually helped?",
      likes: 24,
      replies: 8,
      tag: "PCOS"
    },
    {
      author: "Anjali R.",
      timeAgo: "5 hours ago",
      content: "I've been experiencing intense period pain for the last few months. Has anyone found relief through yoga or specific exercises?",
      likes: 18,
      replies: 12,
      tag: "Menstrual Health"
    },
    {
      author: "Meera K.",
      timeAgo: "1 day ago",
      content: "Starting therapy next week for postpartum depression. Really nervous but hopeful. Any advice for first-time therapy sessions?",
      likes: 35,
      replies: 14,
      tag: "Mental Health"
    }
  ];
  
  const activeDiscussions = [
    { title: "Managing PCOS symptoms naturally", participants: 32 },
    { title: "Endometriosis pain relief techniques", participants: 18 },
    { title: "Postpartum depression support group", participants: 24 }
  ];
  
  const resources = [
    "Understanding PCOS: A Comprehensive Guide",
    "Breast Self-Examination Techniques",
    "Mental Health Resources for Women",
    "Nutrition Guide for Hormonal Balance"
  ];
  
  const handlePostSubmit = () => {
    if (!postContent.trim()) {
      toast.error("Please write something before posting");
      return;
    }
    
    toast.success("Your post has been submitted");
    setPostContent("");
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="feed" className="w-full animate-fadeIn">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="rooms">Chat Rooms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="feed" className="mt-0 animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-border/30">
                  <h3 className="font-semibold mb-3">Topics</h3>
                  <p className="text-sm text-muted-foreground mb-4">Browse discussions by topic</p>
                  
                  <div className="space-y-2">
                    {topics.map((topic, i) => (
                      <Button 
                        key={i} 
                        variant={i === 0 ? "default" : "ghost"} 
                        className={i === 0 ? "w-full bg-brand hover:bg-brand-600 text-white" : "w-full justify-start"}
                      >
                        {topic}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm border border-border/30">
                  <h3 className="font-semibold mb-2">Community Feed</h3>
                  <p className="text-sm text-muted-foreground mb-4">Safe, anonymous discussions about women's health</p>
                  
                  <div className="mb-4">
                    <Textarea 
                      placeholder="Share your thoughts or ask a question..." 
                      className="resize-none min-h-[100px]"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-xs text-muted-foreground">Your posts are anonymous by default</p>
                      <Button 
                        className="bg-brand hover:bg-brand-600 text-white"
                        onClick={handlePostSubmit}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Recent Posts</h4>
                    <Button variant="ghost" size="sm" className="text-xs">
                      <FilterIcon className="h-3.5 w-3.5 mr-1" /> Filter
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {discussions.map((discussion, i) => (
                      <DiscussionCard
                        key={i}
                        author={discussion.author}
                        timeAgo={discussion.timeAgo}
                        content={discussion.content}
                        likes={discussion.likes}
                        replies={discussion.replies}
                        tag={discussion.tag}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-border/30 mb-6">
                  <h3 className="font-semibold mb-4">Active Discussions</h3>
                  
                  <div className="space-y-3">
                    {activeDiscussions.map((discussion, i) => (
                      <div key={i} className="border-b border-border/30 last:border-0 pb-3 last:pb-0">
                        <a href="#" className="text-brand hover:underline">
                          {discussion.title}
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          {discussion.participants} women discussing
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-border/30">
                  <h3 className="font-semibold mb-4">Health Resources</h3>
                  
                  <div className="space-y-3">
                    {resources.map((resource, i) => (
                      <div key={i} className="border-b border-border/30 last:border-0 pb-3 last:pb-0">
                        <a href="#" className="text-brand hover:underline">
                          {resource}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rooms" className="mt-0 animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-border/30">
                  <h3 className="font-semibold mb-4">Active Chat Rooms</h3>
                  
                  <div className="space-y-2">
                    <Button variant="default" className="w-full bg-brand hover:bg-brand-600 text-white">
                      PCOS Support
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Menstrual Health
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Mental Wellness
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Nutrition & Diet
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Pregnancy & Postpartum
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      General Discussion
                    </Button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <Button className="w-full">Create New Room</Button>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-9">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-border/30 flex flex-col h-[600px]">
                  <div className="p-4 border-b border-border/30">
                    <h3 className="font-semibold">PCOS Support</h3>
                    <p className="text-xs text-muted-foreground">32 participants • 4 online</p>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-medium text-brand-600 flex-shrink-0">
                        PS
                      </div>
                      <div className="bg-muted/40 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-medium mb-1">Priya S.</p>
                        <p className="text-sm">Hi everyone! I was just diagnosed with PCOS last week. I'm feeling a bit overwhelmed with all the information. Has anyone tried inositol supplements?</p>
                        <p className="text-xs text-muted-foreground mt-2">10:30 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-brand-50 text-brand-800 dark:bg-brand-900/30 dark:text-brand-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">I've been taking inositol for about 3 months now. It's helped regulate my cycle a bit, but I've found that diet changes made the biggest difference for me.</p>
                        <p className="text-xs text-brand-600 dark:text-brand-300 mt-2">10:32 AM</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-xs font-medium text-brand flex-shrink-0">
                        You
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-medium text-brand-600 flex-shrink-0">
                        MK
                      </div>
                      <div className="bg-muted/40 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-medium mb-1">Meera K.</p>
                        <p className="text-sm">I agree with the diet changes. Low carb and anti-inflammatory foods made a huge difference for me. My acne cleared up and my periods became more regular.</p>
                        <p className="text-xs text-muted-foreground mt-2">10:35 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-medium text-brand-600 flex-shrink-0">
                        AR
                      </div>
                      <div className="bg-muted/40 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-medium mb-1">Anjali R.</p>
                        <p className="text-sm">Hi @Priya S., welcome to the group! In addition to what others have said, I found that stress management through yoga and meditation helped a lot with my symptoms.</p>
                        <p className="text-xs text-muted-foreground mt-2">10:38 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-medium text-brand-600 flex-shrink-0">
                        PS
                      </div>
                      <div className="bg-muted/40 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-medium mb-1">Priya S.</p>
                        <p className="text-sm">Thank you all for the suggestions! I'll definitely look into diet changes and stress management techniques. This is really helpful!</p>
                        <p className="text-xs text-muted-foreground mt-2">10:40 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-border/30">
                    <div className="flex gap-2">
                      <Textarea 
                        placeholder="Type your message here..." 
                        className="resize-none"
                      />
                      <Button className="bg-brand hover:bg-brand-600 text-white self-end">Send</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
