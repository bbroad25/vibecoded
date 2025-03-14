import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, BookOpen, Lightbulb, Github, Star, GitFork, Coins } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 code-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-coral text-white hover:bg-brand-coral/80">
                  Born on Farcaster
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">VIBE CODED</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A beginner-friendly platform for tracking your coding journey and vibing with fellow devs. No fancy
                  jargon, just good vibes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button className="bg-brand-coral hover:bg-brand-coral/90 text-white">
                    Join the Vibe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/bbroad25/vibecoded">
                  <Button variant="outline" className="flex gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://dexscreener.com/base/0x04c1b807800472ae561031c8793b781e4a2af792">
                  <Button variant="outline" className="flex gap-2">
                    <Coins className="h-4 w-4" />
                    $VIBECODED
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                Token Contract: 0x1f2af89CcF233E5aDF7095Cee6c3361836f2BeaF
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-xl github-style flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_vu5w3pvu5w3pvu5w-voiCKVsIgFsEvxIJjIQT8cORNE9dyb.jpeg"
                  alt="VIBE CODED Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="w-full py-6 md:py-10 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-brand-yellow" />
              <span className="text-lg font-medium">1.2k Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="h-5 w-5 text-brand-coral" />
              <span className="text-lg font-medium">342 Forks</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-teal" />
              <span className="text-lg font-medium">87 Contributors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to track your coding journey and connect with fellow vibe enthusiasts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                  <BookOpen className="h-6 w-6 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Learning Journal</h3>
                  <p className="text-muted-foreground">
                    Document your coding journey without the pressure. Stuck on a bug for 3 hours? That's a vibe too!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-coral/10">
                  <Users className="h-6 w-6 text-brand-coral" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Community Interaction</h3>
                  <p className="text-muted-foreground">
                    Connect with other coders who are just vibing. No gatekeeping, just good energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy/10">
                  <Code className="h-6 w-6 text-brand-navy" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Resource Sharing</h3>
                  <p className="text-muted-foreground">
                    Found a tutorial that actually makes sense? Share it with the squad!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <Lightbulb className="h-6 w-6 text-brand-yellow" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Vibe Metrics</h3>
                  <p className="text-muted-foreground">
                    Track your coding moods. "Confused but caffeinated" is a valid state of being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted open-source-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-navy text-white">
                Farcaster Community
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Built by the community, for the community
              </h2>
              <p className="text-muted-foreground md:text-lg">
                VIBE CODED was born on Farcaster and thrives on community contributions. Join us in building a platform
                that helps beginners track and share their coding journey without the intimidation factor.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contribute">
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white">How to Contribute</Button>
                </Link>
                <Link href="https://github.com/bbroad25/vibecoded/issues">
                  <Button variant="outline">View Issues</Button>
                </Link>
              </div>
            </div>
            <div className="github-style p-6 bg-card">
              <h3 className="text-xl font-medium mb-4">Recent Contributors</h3>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    {String.fromCharCode(65 + (i % 26))}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Contribution Activity</h4>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div key={i} className={`contribution-dot contribution-level-${Math.floor(Math.random() * 5)}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to vibe?</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your coding journey today and connect with a community that's all about the good vibes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button className="bg-brand-coral hover:bg-brand-coral/90 text-white">Get Started</Button>
              </Link>
              <Link href="/explore">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

