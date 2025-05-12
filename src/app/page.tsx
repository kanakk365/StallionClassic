import AboutSection from "@/components/landing/About";
import CategoriesSection from "@/components/landing/Category";
import ChampionsSection from "@/components/landing/Champions";
import CtaSection from "@/components/landing/Cta";
import FaqSection from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import PartnersSection from "@/components/landing/PartnerSection";
import ScheduleSection from "@/components/landing/Schedule";
import StatsSection from "@/components/landing/Stats";
import TestimonialsSection from "@/components/landing/Testimonials";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <CategoriesSection/>
      <ChampionsSection/>
      <StatsSection/>
      <ScheduleSection/>
      <PartnersSection/>
      <FaqSection/>
      <TestimonialsSection/>
      <CtaSection/>
      <Footer/>
    </div>
  );
}
