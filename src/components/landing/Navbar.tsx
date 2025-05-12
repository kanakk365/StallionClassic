"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 mx-auto px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/images/landing/hero/logo.png"
          alt="Stallion Classic Logo"
          width={90}
          height={90}
          className="mr-2 sm:mr-4 sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px]"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-12 font-[CreatoDisplay]">
        <Link
          href="/"
          className="text-white hover:text-[#dc4a26] transition-colors text-sm lg:text-base"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-[#dc4a26] transition-colors text-sm lg:text-base"
        >
          About
        </Link>
        <Link
          href="/categories"
          className="text-white hover:text-[#dc4a26] transition-colors text-sm lg:text-base"
        >
          Categories
        </Link>
        <Link
          href="/events"
          className="text-white hover:text-[#dc4a26] transition-colors text-sm lg:text-base"
        >
          Events
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white flex flex-col space-y-1.5 mr-2 z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-8 h-1 bg-white transition-transform duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white transition-transform duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8 font-[CreatoDisplay]">
            <Link
              href="/"
              className="text-white hover:text-[#dc4a26] transition-colors text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#dc4a26] transition-colors text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/categories"
              className="text-white hover:text-[#dc4a26] transition-colors text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/events"
              className="text-white hover:text-[#dc4a26] transition-colors text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/registration"
              className="bg-[#dc4a26] text-white px-8 py-3 font-bold text-xl tracking-wider hover:bg-opacity-90 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              REGISTRATION
            </Link>
          </nav>
        </div>
      </div>

      {/* Registration Button - Desktop */}
      <Link
        href="/registration"
        className="hidden md:block bg-[#dc4a26] text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-bold tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
      >
        REGISTRATION
      </Link>
    </header>
  )
}
