import Image from "next/image"
import Link from "next/link"

export default function StatsSection() {
  const stats = [
    {
      id: "participants",
      title: "PARTICIPANTS",
      value: "150+ Elite Athletes",
    },
    {
      id: "events",
      title: "EVENTS",
      value: "8+ Years",
    },
    {
      id: "team",
      title: "TEAM MEMBERS",
      value: "25+ Experts",
    },
    {
      id: "collaboration",
      title: "COLLABORATION",
      value: "12+ Global Partners",
    },
  ]

  return (
    <section className="relative py-20 md:py-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/stats/1.png"
          alt="Crowd background"
          fill
          className="object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-3 font-[impact] ">STALLION CLASSIC IN NUMBERS</h2>
          <p className="text-xl md:text-2xl text-white font-[CreatoDisplay] ">The Scale Of Excellence</p>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex items-center">
              <div className="text-center px-4 md:px-8 py-4">
                <h3 className="text-2xl md:text-3xl text-white mb-3 font-[impact] ">{stat.title}</h3>
                <p className="text-xl md:text-3xl text-white font-[CreatoDisplay] ">{stat.value}</p>
              </div>
              {index < stats.length - 1 && <div className="hidden md:block h-20 w-0.5 bg-[#dc4a26]"></div>}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/register"
            className="inline-block bg-[#dc4a26] text-white px-8 py-4 font-bold text-lg tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay] "
          >
            JOIN THE LEGACY, REGISTER NOW
          </Link>
        </div>
      </div>
    </section>
  )
}
