import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "सखी Junction - Women's Health & Community",
  description:
    "A safe, community-driven platform designed to amplify women's voices, foster healing, and deliver holistic wellness solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'