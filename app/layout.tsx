import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "AlphaDAO - Building Skills, Products, and Community-Owned Infrastructure",
  description:
    "A decentralized autonomous organization focused on Web3 education, research, and infrastructure. Building Recertify, the protocol for verifiable blockchain credentials.",
  generator: "AlphaDAO",
  icons: {
    icon: [
      {
        url: "/new-logo.png",
        type: "image/png",
      },
    ],
    apple: "/new-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
