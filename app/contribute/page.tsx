import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Github, GitBranch, GitPullRequest, MessageSquare, Star } from "lucide-react"
import Link from "next/link"

export default function ContributePage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Contribute to VIBE CODED</h1>
          <p className="text-muted-foreground">Join our community and help build the future of vibe coding</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <Link href="https://github.com/bbroad25/vibecoded">
            <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </Link>
          <Link href="https://github.com/bbroad25/vibecoded/fork">
            <Button variant="outline">
              <GitBranch className="mr-2 h-4 w-4" />
              Fork Repository
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="code" className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contributing Code</CardTitle>
                <CardDescription>Help improve the platform by contributing code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Getting Started</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Fork the repository on GitHub</li>
                    <li>Clone your fork locally</li>
                    <li>Create a new branch for your feature or bugfix</li>
                    <li>Make your changes and commit them</li>
                    <li>Push your branch to your fork</li>
                    <li>Open a pull request from your branch to the main repository</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Development Setup</h3>
                  <div className="bg-muted p-3 rounded-md text-sm font-mono">
                    <p># Clone the repository</p>
                    <p>git clone https://github.com/yourusername/vibecoded.git</p>
                    <p>cd vibecoded</p>
                    <p># Install dependencies</p>
                    <p>npm install</p>
                    <p># Start the development server</p>
                    <p>npm run dev</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Current Issues</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-3 border rounded-md">
                      <Code className="h-4 w-4 mt-0.5 text-brand-coral" />
                      <div>
                        <p className="text-sm font-medium">Implement dark mode toggle persistence</p>
                        <p className="text-xs text-muted-foreground">Good first issue · Frontend</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 border rounded-md">
                      <Code className="h-4 w-4 mt-0.5 text-brand-teal" />
                      <div>
                        <p className="text-sm font-medium">Add markdown editor for journal entries</p>
                        <p className="text-xs text-muted-foreground">Enhancement · Frontend</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 border rounded-md">
                      <Code className="h-4 w-4 mt-0.5 text-brand-navy" />
                      <div>
                        <p className="text-sm font-medium">Implement user authentication with NextAuth</p>
                        <p className="text-xs text-muted-foreground">Feature · Backend</p>
                      </div>
                    </div>
                  </div>
                  <Link href="https://github.com/bbroad25/vibecoded/issues">
                    <Button variant="link" className="h-auto p-0 text-brand-teal">
                      View all issues
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contributing Documentation</CardTitle>
                <CardDescription>Help improve our documentation and guides</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Documentation Structure</h3>
                  <p className="text-sm text-muted-foreground">
                    Our documentation is organized into the following sections:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Getting Started - Introduction to VIBE CODED</li>
                    <li>User Guide - How to use the platform</li>
                    <li>API Reference - Technical documentation for developers</li>
                    <li>Tutorials - Step-by-step guides for specific tasks</li>
                    <li>Contributing - How to contribute to the project</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">How to Contribute</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentation is written in Markdown and stored in the <code>/docs</code> directory of the
                    repository. To contribute:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Find an area of documentation that needs improvement</li>
                    <li>Fork the repository and create a branch for your changes</li>
                    <li>Make your changes to the relevant Markdown files</li>
                    <li>Submit a pull request with your changes</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Documentation Needs</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-3 border rounded-md">
                      <BookOpen className="h-4 w-4 mt-0.5 text-brand-yellow" />
                      <div>
                        <p className="text-sm font-medium">Improve getting started guide</p>
                        <p className="text-xs text-muted-foreground">Documentation · Beginner-friendly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 border rounded-md">
                      <BookOpen className="h-4 w-4 mt-0.5 text-brand-yellow" />
                      <div>
                        <p className="text-sm font-medium">Create tutorial for setting up a coding journal</p>
                        <p className="text-xs text-muted-foreground">Tutorial · User Guide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Contributions</CardTitle>
                <CardDescription>Other ways to contribute to the VIBE CODED community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Community Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Help other users by answering questions and providing support in our community channels:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>GitHub Discussions</li>
                    <li>Discord Server</li>
                    <li>Farcaster</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Content Creation</h3>
                  <p className="text-sm text-muted-foreground">
                    Create content that helps others learn about vibe coding:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Write blog posts about your vibe coding experiences</li>
                    <li>Create tutorials for specific coding techniques</li>
                    <li>Share your vibe coding journey on social media</li>
                    <li>Record videos demonstrating vibe coding practices</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Spread the Word</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="flex gap-2">
                      <Star className="h-4 w-4 text-brand-yellow" />
                      Star on GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex gap-2">
                      <MessageSquare className="h-4 w-4 text-brand-coral" />
                      Join Discord
                    </Button>
                    <Button variant="outline" size="sm" className="flex gap-2">
                      <GitPullRequest className="h-4 w-4 text-brand-teal" />
                      Submit a PR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

