import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "small"
}

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link href="/" className="block">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20at%2010.57.17%E2%80%AFPM-qTqL2LfMnfDN2QgRmP3i064BKQtPQR.png"
        alt="VIBE CODED Logo"
        width={variant === "small" ? 120 : 180}
        height={variant === "small" ? 60 : 90}
        className="object-contain"
        priority
      />
    </Link>
  )
}

