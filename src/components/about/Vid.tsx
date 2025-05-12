import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl text-black mb-2 font-[impact] ">
            BLOOD, SWEAT & LEGACY
          </h2>
          <p className="text-xl text-gray-700 font-[CreatoDisplay] ">
            90 seconds that capture the Stallion Classic spirit
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-md shadow-xl">
            <Image
              src="/images/about/vid/1.png"
              alt="Stallion Classic competition video"
              fill
              className="object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300 group"
                aria-label="Play video"
              >
                <div className="w-16 h-16 bg-[#dc4a26] rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-10 text-center">
            <Link
              href="/register"
              className=" font-[CreatoDisplay] inline-block bg-[#dc4a26] text-white px-8 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
