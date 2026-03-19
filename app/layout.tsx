import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Nexus — The Intelligence Layer for Modern Business",
  description: "Nexus unifies your data, automates your workflows, and delivers AI-powered insights that move your business forward.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}