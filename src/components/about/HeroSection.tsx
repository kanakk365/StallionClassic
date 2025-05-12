import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/hero/hero.png"
          alt="Bodybuilding background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="flex items-center justify-center w-full mb-6">
          <div className="h-0.5 bg-[#dc4a26] w-24 md:w-48"></div>
          <h1 className="text-4xl md:text-6xl mx-4 md:mx-8 text-white font-[impact]  ">
            MORE THAN A SHOW
          </h1>
          <div className="h-0.5 bg-[#dc4a26] w-24 md:w-48"></div>
        </div>

        <h2 className="text-4xl md:text-7xl text-white mb-6 font-[impact] ">
          A BODYBUILDING REVOLUTION
        </h2>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl text-white font-[CreatoDisplay]">
          Built By Athletes, For Athletes. More Than Medals—We Build Legends
        </p>

        <Link
          href="/register"
          className="bg-[#dc4a26] text-white px-8 py-4 font-bold text-lg tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
        >
          REGISTER NOW
        </Link>
      </div>
    </main>
  );
}
