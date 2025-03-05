
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightIcon, CalendarIcon, ClockIcon, DropletIcon, ThermometerIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function HealthTracker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleLogSymptom = () => {
    toast.success("Symptom logged successfully!");
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-10 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cycle & Wellness Tracker</h1>
          <p className="text-xl text-muted-foreground">
            Monitor your health patterns and receive personalized insights
          </p>
        </div>
        
        <Tabs defaultValue="cycle" className="w-full animate-slideUp">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="cycle">Cycle Tracker</TabsTrigger>
            <TabsTrigger value="symptoms">Symptom Log</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cycle" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1 border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-brand mr-2"></div>
                      <span className="text-sm">Period</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-400 mr-2"></div>
                      <span className="text-sm">Ovulation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
                      <span className="text-sm">Fertile Window</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-sm">PMS Symptoms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2 border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Cycle Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">Current Phase</div>
                        <CalendarIcon className="h-4 w-4 text-brand" />
                      </div>
                      <div className="text-2xl font-semibold mb-1">Follicular</div>
                      <div className="text-sm text-muted-foreground">Day 8 of 28</div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">Next Period</div>
                        <DropletIcon className="h-4 w-4 text-brand" />
                      </div>
                      <div className="text-2xl font-semibold mb-1">In 20 days</div>
                      <div className="text-sm text-muted-foreground">April 15, 2024</div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">Avg. Cycle Length</div>
                        <ClockIcon className="h-4 w-4 text-brand" />
                      </div>
                      <div className="text-2xl font-semibold mb-1">28 days</div>
                      <div className="text-sm text-muted-foreground">Regular cycle</div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-4">Cycle Prediction Timeline</h3>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-muted"></div>
                      
                      <div className="relative pl-10 pb-6">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                          <DropletIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Last Period</h4>
                          <p className="text-sm text-muted-foreground">March 18, 2024</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-10 pb-6">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
                          <ThermometerIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ovulation</h4>
                          <p className="text-sm text-muted-foreground">April 1, 2024</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-10">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                          <DropletIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Next Period</h4>
                          <p className="text-sm text-muted-foreground">April 15, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="symptoms" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Log Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Date</label>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>{date ? date.toLocaleDateString() : "Select a date"}</span>
                        </Button>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Symptom Category</label>
                        <Select defaultValue="physical">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="physical">Physical</SelectItem>
                            <SelectItem value="emotional">Emotional</SelectItem>
                            <SelectItem value="sleep">Sleep</SelectItem>
                            <SelectItem value="energy">Energy</SelectItem>
                            <SelectItem value="digestive">Digestive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Specific Symptom</label>
                        <Select defaultValue="cramps">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select symptom" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cramps">Cramps</SelectItem>
                            <SelectItem value="headache">Headache</SelectItem>
                            <SelectItem value="bloating">Bloating</SelectItem>
                            <SelectItem value="fatigue">Fatigue</SelectItem>
                            <SelectItem value="mood-swings">Mood Swings</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Intensity</label>
                        <Select defaultValue="moderate">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select intensity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">Mild</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="severe">Severe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button className="w-full bg-brand hover:bg-brand-600 text-white" onClick={handleLogSymptom}>
                        Log Symptom
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-8">
                <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Recent Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Cramps</h4>
                            <p className="text-sm text-muted-foreground">Moderate intensity</p>
                          </div>
                          <div className="text-sm text-muted-foreground">March 25, 2024</div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Fatigue</h4>
                            <p className="text-sm text-muted-foreground">Severe intensity</p>
                          </div>
                          <div className="text-sm text-muted-foreground">March 24, 2024</div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Mood Swings</h4>
                            <p className="text-sm text-muted-foreground">Moderate intensity</p>
                          </div>
                          <div className="text-sm text-muted-foreground">March 23, 2024</div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Bloating</h4>
                            <p className="text-sm text-muted-foreground">Mild intensity</p>
                          </div>
                          <div className="text-sm text-muted-foreground">March 22, 2024</div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Headache</h4>
                            <p className="text-sm text-muted-foreground">Moderate intensity</p>
                          </div>
                          <div className="text-sm text-muted-foreground">March 20, 2024</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="insights" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Personalized Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2">Cycle Patterns</h4>
                      <p className="text-sm text-muted-foreground mb-2">Your cycle has been consistently 28 days for the past 3 months, indicating good hormonal balance.</p>
                      <a href="#" className="text-brand text-sm flex items-center">
                        Learn more <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2">Symptom Correlation</h4>
                      <p className="text-sm text-muted-foreground mb-2">We've noticed your headaches tend to occur 2-3 days before your period starts. This may be related to hormonal changes.</p>
                      <a href="#" className="text-brand text-sm flex items-center">
                        Learn more <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2">Self-Care Recommendation</h4>
                      <p className="text-sm text-muted-foreground mb-2">Based on your tracked symptoms, consider magnesium-rich foods and gentle exercise during your premenstrual phase.</p>
                      <a href="#" className="text-brand text-sm flex items-center">
                        Learn more <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Wellness Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Symptom Frequency</h4>
                      <div className="h-40 w-full bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Symptom chart visualization</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Cycle Length History</h4>
                      <div className="h-40 w-full bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Cycle history visualization</p>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full">Generate Detailed Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
