import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FIT Parent - Family. Intentionality. Truth.",
  description:
    "Take our assessment to understand 10 principles that address your child's emotional, mental, physical, relational, and spiritual health.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
