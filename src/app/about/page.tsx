import HeroSection from "@/components/about/HeroSection";
import Navbar from "@/components/landing/Navbar";
import StorySection from "../../components/about/Story";
import VisionariesSection from "@/components/about/Visionaries";
import MissionSection from "@/components/about/Mission";
import VideoSection from "@/components/about/Vid";
import CtaSection from "@/components/landing/Cta";
import Footer from "@/components/landing/Footer";


export default function About() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StorySection/>
      <VisionariesSection/>
      <MissionSection/>
      <VideoSection/>
      <CtaSection/>
      <Footer/>
    </div>
  );
}
