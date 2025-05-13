
import DivisionsSection from '@/components/categories/Division'
import HeroSection from '@/components/categories/HeroSection'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import TestimonialsSection from '@/components/landing/Testimonials'
import React from 'react'

function Categories() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <DivisionsSection/>
        <TestimonialsSection/>
        <Footer/>
    </div>
  )
}

export default Categories