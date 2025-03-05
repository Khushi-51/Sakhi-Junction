import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">सखी</span>
              <span className="text-2xl font-bold ml-1">Junction</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Empowering women through community, technology, and self-care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/community"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/tracker"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Health Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/chatbox"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Smart Chatbox
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-primary" /> for women everywhere
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} सखी Junction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

