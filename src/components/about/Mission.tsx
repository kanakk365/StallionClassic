import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[impact] text-[#282828]">
            OUR MISSION: ELEVATE THE SPORT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Integrity */}
          <div className="border border-[#dc4a26] rounded-md p-8 flex pb-0 pr-0 flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-[impact] text-black mb-1">
                UNCOMPROMISING
              </h3>
              <h4 className="text-2xl font-[impact] text-[#dc4a26] mb-4">
                INTEGRITY
              </h4>
              <p className="text-gray-700 pr-2 font-[CreatoDisplay]">
                Our judging panel uses dual-screen verification and public
                scorecards. No politics—just physiques.
              </p>
            </div>{" "}
            <div className="mt-auto flex justify-end">
              <Image
                src="/svg/mission/1.svg"
                alt="Uncompromising Integrity Icon"
                width={128}
                height={128}
                className="h-36 w-36"
              />
            </div>
          </div>

          {/* Card 2 - Pathways */}
          <div className="border border-[#dc4a26] rounded-md p-8 flex pb-0 pr-0 flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-[impact] text-black mb-1">
                ATHLETE-CENTRIC
              </h3>
              <h4 className="text-2xl font-[impact] text-[#dc4a26] mb-4">
                PATHWAYS
              </h4>
              <p className="text-gray-700 pr-2 font-[CreatoDisplay]">
                Through sponsorships, media training, and global exposure, we
                turn competitors into icons.
              </p>
            </div>{" "}
            <div className="mt-auto flex justify-end">
              <Image
                src="/svg/mission/2.svg"
                alt="Athlete-Centric Pathways Icon"
                width={128}
                height={128}
                className="h-36 w-36"
              />
            </div>
          </div>

          {/* Card 3 - History/Future */}
          <div className="border border-[#dc4a26] rounded-md p-8 pb-0 pr-0 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-[impact] text-black mb-1">
                HONORING HISTORY,
              </h3>
              <h4 className="text-2xl font-[impact] text-[#dc4a26] mb-4">
                BUILDING TOMORROW
              </h4>
              <p className="text-gray-700 pr-2 font-[CreatoDisplay]">
                Bridging eras through innovation: next-gen athlete analytics
                meet the timeless pursuit of perfect symmetry.
              </p>
            </div>{" "}
            <div className="mt-auto flex justify-end">
              <Image
                src="/svg/mission/3.svg"
                alt="Building Tomorrow Icon"
                width={128}
                height={128}
                className="h-36 w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
