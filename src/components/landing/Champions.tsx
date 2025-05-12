import Image from "next/image"

export default function ChampionsSection() {
  const champions = [
    {
      id: "john-rivera",
      name: "JOHN RIVERA",
      division: "Division - Bodybuilding Super Heavyweight",
      quote: '"Stallion Classic Tested Every Ounce Of My Discipline. The Ultimate Proving Ground"',
      image: "/images/landing/champ/1.png",
    },
    {
      id: "marcus-cole",
      name: "Marcus Cole",
      division: "Division: Men's Physique (Open)",
      quote: '"That Moment They Called My Name? Pure Electricity"',
      image: "/images/landing/champ/2.png",
    },
    {
      id: "derrick",
      name: "Derrick",
      division: "Division - Men's Physique",
      quote: '"Stallion Classic Tested Every Ounce Of My Discipline. The Ultimate Proving Ground"',
      image: "/images/landing/champ/3.png",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl  text-black mb-4 font-[impact] ">MEET THE 2025 CHAMPIONS</h2>
          <p className="text-xl md:text-2xl text-gray-800 font-[CreatoDisplay] ">
            The Legends Of Stallion Classic - Their Legacy Started Here
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {champions.map((champion) => (
            <div key={champion.id} className="relative w-full sm:w-[350px] md:w-[400px]">
              {/* Orange background div - clearly visible and offset */}
              <div className="absolute top-3 left-3 w-full h-full bg-[#dc4a26] rounded-lg z-0"></div>

              {/* Main card */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="relative aspect-[3/4]">
                  <Image src={champion.image || "/placeholder.svg"} alt={champion.name} fill className="object-cover" />

                  {/* Medal icon */}
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/landing/champ/logo.png"
                      alt="Gold Medal"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>              
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{champion.name}</h3>
                    <p className="text-sm mb-3 text-gray-300">{champion.division}</p>
                    <p className="text-sm italic">{champion.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
