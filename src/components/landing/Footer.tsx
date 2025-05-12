import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white pt-8 sm:pt-12 md:pt-16 pb-6 font-[CreatoDisplay]">
      <div className="px-4 sm:px-6 md:px-10 mx-auto">
        {/* Main Heading - Centered at top */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[impact] ">STALLION CLASSIC</h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4 md:pl-6">
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl mb-4 font-[impact]">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/register"
                className="inline-block bg-[#dc4a26] text-white px-6 py-2 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>
          </div>

          {/* Logo in the middle */}
          <div className="flex justify-center items-center sm:items-start order-first sm:order-none mb-6 sm:mb-0">
            <Image
              src="/images/landing/footer/logo.png"
              alt="Stallion Classic Logo"
              width={200}
              height={200}
              className=""
            />
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left sm:pl-0 md:pl-54">
            <h3 className="text-xl sm:text-2xl mb-4 font-[impact]">CONTACT</h3>
            <address className="not-italic text-gray-300 mb-4">
              <p>123 Ironclad Way, Fitness City,</p>
              <p>FC 10001</p>
            </address>
            <p className="text-gray-300 mb-2">(555) 789-4560</p>
            <p className="text-gray-300 mb-4">info@stallionextremefitness.com</p>

            {/* Social Media */}
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="#" className="text-white hover:text-[#dc4a26] transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-[#dc4a26] transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-[#dc4a26] transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">© 2025 Stallion Classic - All Right Reserved</p>
          <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
