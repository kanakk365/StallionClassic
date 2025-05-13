import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function MainEventSection() {
  return (
    <section className="py-16 md:py-24 bg-[#181818]">
      <div className="container mx-auto px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-[impact] text-white mb-2">MAIN EVENT SHOWDOWN</h2>
          <p className="text-2xl text-white font-[CreatoDisplay] ">The moment everything builds toward</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Video/Image on the left */}          <div className="w-full md:w-1/2">
            <div className="relative w-[633px] h-[580px] overflow-hidden rounded-md mx-auto">
              <Image
                src="/images/events/main/1.png"
                alt="Bodybuilding competition"
                fill
                className="object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300"
                  aria-label="Play video"
                >
                  <div className="w-12 h-12 bg-[#dc4a26] rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-[impact] text-white mb-14">WHY IT MATTERS</h3>

            <div className="space-y-20 font-[CreatoDisplay]">
              <div>
                <h4 className="text-2xl font-bold text-white inline-block">Pro Cards - </h4>
                <span className="text-white text-xl">5 IFBB pro qualifications up for grabs</span>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white inline-block">Broadcast - </h4>
                <span className="text-white text-xl">Live on ESPN3 with instant replays</span>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white inline-block">Guest Poser - </h4>
                <span className="text-white text-xl">Famous Bodybuilder makes special appearance</span>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white inline-block">Prize pool - </h4>
                <span className="text-white text-xl">Largest in Stallion History</span>
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="/register"
                className="inline-block bg-[#dc4a26] text-white px-8 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
