import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function VisionariesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className=" mx-auto px-16 max-w-7xl ">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-black mb-3 font-[impact] ">
            THE VISIONARIES BEHIND THE LEGACY
          </h2>
          <p className="text-xl text-gray-700 font-[CreatoDisplay] ">
            Two founders. One relentless standard of excellence
          </p>
        </div>

        {/* First Founder - Jay Acharya */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
          {" "}
          {/* Image on the left */}{" "}
          <div className="w-full md:w-2/5 relative">
            {/* Orange background div - clearly visible and offset */}
            <div className="absolute top-3 left-3 w-full h-[500px] bg-[#dc4a26] rounded-md z-0"></div>

            {/* Main image container */}
            <div className="relative h-[500px] w-full z-10">
              <Image
                src="/images/about/vis/1.png"
                alt="Jay Acharya"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          {/* Content on the right */}
          <div className="w-full md:w-3/5">
            <h3 className="text-3xl md:text-4xl text-black mb-2 font-[impact]">
              Jay Acharya
            </h3>
            <p className="text-black mb-6">
              ICN INDIA - Country President , ICN AUSTRALIA - Mens Physique Pro
            </p>

            <p className="text-gray-800 text-lg mb-8 leading-relaxed font-[CreatoDisplay]">
              ICN (I Compete Natural) is a global leader in natural fitness
              modeling and bodybuilding, uniting a passionate community of
              drug-free athletes, coaches, and fans. With over 31,000 members
              across 88 countries, we champion health, integrity, and fair
              competition. Known as the tech leaders in natural fitness, ICN
              offers seamless registration, athlete rankings, and competition
              history tracking. ICN India upholds global standards with
              cutting-edge technology and WADA-level drug testing. Founded in
              Australia in 1991, ICN continues to innovate and elevate the sport
              of natural competitive fitness.
            </p>

            <Link
              href="https://instagram.com"
              className=" font-[CreatoDisplay] inline-flex items-center bg-[#dc4a26] text-white px-6 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
            >
              FOLLOW NOW <Instagram className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Second Founder - Raventh */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16">
          {" "}
          {/* Image on the right */}{" "}
          <div className="w-full md:w-2/5 relative">
            {/* Orange background div - clearly visible and offset */}
            <div className="absolute top-3 left-3 w-full h-[500px] bg-[#dc4a26] rounded-md z-0"></div>

            {/* Main image container */}
            <div className="relative h-[500px] w-full z-10">
              <Image
                src="/images/about/vis/2.png"
                alt="Raventh"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          {/* Content on the left */}
          <div className="w-full md:w-3/5">
            <h3 className="text-3xl md:text-4xl font-[impact] text-black mb-2">
              RAVENTH
            </h3>
            <p className="text-black mb-6">
              ICN INDIA - Country President , ICN AUSTRALIA - Mens Physique Pro
            </p>

            <p className="text-gray-800 text-lg mb-8 leading-relaxed font-[CreatoDisplay]">
              ICN (I Compete Natural) is a global leader in natural fitness
              modeling and bodybuilding, uniting a passionate community of
              drug-free athletes, coaches, and fans. With over 31,000 members
              across 88 countries, we champion health, integrity, and fair
              competition. Known as the tech leaders in natural fitness, ICN
              offers seamless registration, athlete rankings, and competition
              history tracking. ICN India upholds global standards with
              cutting-edge technology and WADA-level drug testing. Founded in
              Australia in 1991, ICN continues to innovate and elevate the sport
              of natural competitive fitness.
            </p>

            <Link
              href="https://instagram.com"
              className=" font-[CreatoDisplay] inline-flex items-center  text-white px-6 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
            >
              FOLLOW NOW <Instagram className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
