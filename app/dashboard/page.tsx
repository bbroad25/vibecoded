import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Lightbulb, Plus, Share2, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Track your coding journey and connect with others.</p>
        </div>
        <Button className="bg-brand-coral hover:bg-brand-coral/90 text-white">
          <Plus className="mr-2 h-4 w-4" /> New Journal Entry
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Journal Entries</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resources Shared</CardTitle>
                <Share2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">+1 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Community Interactions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+5 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Vibe</CardTitle>
                <Lightbulb className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Creative</div>
                <p className="text-xs text-muted-foreground">Trending upward</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-brand-teal/10 p-2">
                      <BookOpen className="h-4 w-4 text-brand-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">You added a new journal entry</p>
                      <p className="text-xs text-muted-foreground">Learned about React Server Components</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-brand-coral/10 p-2">
                      <Share2 className="h-4 w-4 text-brand-coral" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">You shared a resource</p>
                      <p className="text-xs text-muted-foreground">Advanced TypeScript Patterns</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-brand-navy/10 p-2">
                      <Users className="h-4 w-4 text-brand-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Alex commented on your entry</p>
                      <p className="text-xs text-muted-foreground">"Great insights on state management!"</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Weekly Vibe Challenge</CardTitle>
                <CardDescription>Ends in 3 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">Build a Mood-Based Code Editor Theme</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a VS Code or editor theme that changes based on your coding mood or time of day.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">12 participants</p>
                      <p className="text-xs text-muted-foreground">3 submissions so far</p>
                    </div>
                    <Button size="sm" className="bg-brand-coral hover:bg-brand-coral/90 text-white">
                      Join Challenge
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/challenges" className="text-sm text-brand-teal hover:underline">
                  View all challenges
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="journal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Journal</CardTitle>
              <CardDescription>Track your coding journey and document your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">React Server Components Deep Dive</h3>
                      <p className="text-xs text-muted-foreground">2 hours ago · Breakthrough</p>
                    </div>
                    <div className="bg-brand-teal/10 text-brand-teal text-xs px-2 py-1 rounded">React</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Finally understood how RSC works with client components. The mental model clicked when I realized...
                  </p>
                  <div className="mt-2">
                    <Link href="/journal/entry-1">
                      <Button variant="link" className="h-auto p-0 text-brand-teal">
                        Read more
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Struggling with TypeScript Generics</h3>
                      <p className="text-xs text-muted-foreground">Yesterday · Challenge</p>
                    </div>
                    <div className="bg-brand-coral/10 text-brand-coral text-xs px-2 py-1 rounded">TypeScript</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Spent hours trying to figure out how to properly type this function. Still not sure if my approach
                    is correct...
                  </p>
                  <div className="mt-2">
                    <Link href="/journal/entry-2">
                      <Button variant="link" className="h-auto p-0 text-brand-teal">
                        Read more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">
                View All Journal Entries
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Feed</CardTitle>
              <CardDescription>See what other vibe coders are sharing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-teal to-brand-coral flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">Sarah Chen</h3>
                        <p className="text-xs text-muted-foreground">3 hours ago</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Just had a breakthrough with my React Native project! After struggling with navigation for days,
                        I finally figured out how to structure my app properly.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Code className="mr-1 h-3 w-3" /> 12
                        </Button>
                        <Button variant="outline" size="sm">
                          <Lightbulb className="mr-1 h-3 w-3" /> 8
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">Miguel Rodriguez</h3>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Sharing my favorite VS Code extensions for productivity. These have completely changed my
                        workflow!
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Code className="mr-1 h-3 w-3" /> 24
                        </Button>
                        <Button variant="outline" size="sm">
                          <Lightbulb className="mr-1 h-3 w-3" /> 15
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">
                View Full Community Feed
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shared Resources</CardTitle>
              <CardDescription>Discover helpful tools and articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Advanced TypeScript Patterns</h3>
                      <p className="text-xs text-muted-foreground">Shared by you · Yesterday</p>
                    </div>
                    <div className="bg-brand-navy/10 text-brand-navy text-xs px-2 py-1 rounded">Article</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive guide to advanced TypeScript patterns that will level up your code.
                  </p>
                  <div className="mt-2">
                    <Link href="https://example.com/typescript-patterns">
                      <Button variant="link" className="h-auto p-0 text-brand-teal">
                        View resource
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">VS Code Productivity Hacks</h3>
                      <p className="text-xs text-muted-foreground">Shared by Miguel Rodriguez · 2 days ago</p>
                    </div>
                    <div className="bg-brand-yellow/10 text-brand-yellow text-xs px-2 py-1 rounded">Video</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Learn how to maximize your productivity in VS Code with these essential shortcuts and extensions.
                  </p>
                  <div className="mt-2">
                    <Link href="https://example.com/vscode-hacks">
                      <Button variant="link" className="h-auto p-0 text-brand-teal">
                        View resource
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">Browse All Resources</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

