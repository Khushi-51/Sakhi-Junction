"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sun, Moon, Menu } from "lucide-react"

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/community" },
    { name: "Health Tracker", href: "/tracker" },
    { name: "Articles", href: "/articles" },
    { name: "Self-Care", href: "/self-care" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">सखी</span>
            <span className="text-2xl font-bold ml-1">Junction</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Toggle Theme" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium py-2 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Log In
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

