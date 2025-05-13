import HeroSection from '@/components/events/HeroSection'
import MainEventSection from '@/components/events/MainEvents'
import PricingSection from '@/components/events/Pricing'
import ScheduleSection from '@/components/events/Schedule'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import TestimonialsSection from '@/components/landing/Testimonials'

import React from 'react'

function Events() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ScheduleSection/>
        <MainEventSection/>
        <PricingSection/>
        <TestimonialsSection/>
        <Footer/>
    </div>
  )
}

export default Events