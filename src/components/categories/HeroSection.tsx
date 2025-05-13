import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cat/hero/hero.png"
          alt="Bodybuilding background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal leading-tight tracking-wider mb-4 sm:mb-6 font-[impact]">
          YOUR PHYSIQUE
        </h1>

        <div className="flex items-center justify-center w-full mb-4 sm:mb-6">
          <div className="h-1 bg-[#dc4a26] w-12 sm:w-20 md:w-32 lg:w-48"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 font-[impact]">YOUR STAGE</h2>
          <div className="h-1 bg-[#dc4a26] w-12 sm:w-20 md:w-32 lg:w-48"></div>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-[CreatoDisplay]">
          Find The Division That Matches Your Goals-Whether You&apos;re Chasing Mass , Aesthetics Or Golden-Era Glory.
        </p>

        <Link
          href="/register"
          className="bg-[#dc4a26] text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-bold text-base sm:text-lg tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
        >
          REGISTER NOW
        </Link>
      </div>
    </main>
  )
}
