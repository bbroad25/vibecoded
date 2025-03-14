import Link from "next/link"
import { Github, Heart, Coins } from "lucide-react"
import { Logo } from "./logo"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Logo />
              <p className="text-sm text-muted-foreground">
                A beginner-friendly platform for tracking and sharing your coding journey. Born on Farcaster.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="https://github.com/bbroad25/vibecoded"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://dexscreener.com/base/0x04c1b807800472ae561031c8793b781e4a2af792"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Coins className="h-5 w-5" />
                <span className="sr-only">$VIBECODED</span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">$VIBECODED: 0x1f2af89CcF233E5aDF7095Cee6c3361836f2BeaF</p>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3 text-muted-foreground">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explore" className="text-sm hover:underline">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/getting-started" className="text-sm hover:underline">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm hover:underline">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm hover:underline">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3 text-muted-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-sm hover:underline">
                  API
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-sm hover:underline">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-sm hover:underline">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3 text-muted-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-sm hover:underline">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VIBE CODED. Born on Farcaster.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-brand-coral" /> by the community
          </p>
        </div>
      </div>
    </footer>
  )
}

