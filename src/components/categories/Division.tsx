import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    id: "bodybuilding",
    title: "BODYBUILDING",
    subtitle: "The Ultimate Test Of Size, Symmetry, And Stage Presence",
    image: "/images/cat/division/1a.png",
    keyFacts: [
      "Judged 60% Muscularity, 30% Symmetry, 10% Conditioning",
      "No Weight Limits - Pure Mass Rules",
      "8 Mandatory Poses (Front Lat Spread To Most Muscular)",
    ],
    categories: [
      "Bodybuilding 55 to 60 KG",
      "Bodybuilding 60 to 65 KG",
      "Bodybuilding 65 to 70 KG",
      "Bodybuilding 70 to 75 KG",
      "Bodybuilding 75 to 80 KG",
      "Bodybuilding 80 to 85 KG",
      "Bodybuilding 85 to 90 KG",
      "Bodybuilding 90 to 95 KG",
      "Bodybuilding 95+ KG",
    ],
    galleryImages: [
      "/images/cat/division/1b.png",
      "/images/cat/division/1c.png",
      "/images/cat/division/1d.png",
    ],
  },
  {
    id: "mens-physique",
    title: "MENS PHYSIQUE",
    subtitle: "Aesthetics, Proportion, and Stage Presence",
    image: "/images/cat/division/2a.png",
    keyFacts: [
      "Judged on V-taper, Shoulder-to-Waist Ratio",
      "Board Shorts Required - No Bodybuilding Posing Trunks",
      "4 Quarter Turns - No Mandatory Poses",
    ],
    categories: [
      "Men's Physique Up to 170 cm",
      "Men's Physique Up to 173 cm",
      "Men's Physique Up to 176 cm",
      "Men's Physique Up to 179 cm",
      "Men's Physique Up to 182 cm",
      "Men's Physique Up to 185 cm",
      "Men's Physique Up to 188 cm",
      "Men's Physique Over 188 cm",
      "Men's Physique Masters 40+",
    ],
    galleryImages: [
      "/images/cat/division/2b.png",
      "/images/cat/division/2c.png",
      "/images/cat/division/2d.png",
    ],
  },
  {
    id: "classic-physique",
    title: "CLASSIC PHYSIQUE",
    subtitle: "Golden-era Muscle with Modern Precision",
    image: "/images/cat/division/3a.png",
    keyFacts: [
      "Weight Limits Based on Height",
      "Blend of Bodybuilding Mass and Aesthetic Lines",
      "Classic Poses Including Vacuum Pose Required",
    ],
    categories: [
      "Classic Physique Up to 168 cm",
      "Classic Physique Up to 171 cm",
      "Classic Physique Up to 175 cm",
      "Classic Physique Up to 180 cm",
      "Classic Physique Up to 185 cm",
      "Classic Physique Up to 190 cm",
      "Classic Physique Up to 195 cm",
      "Classic Physique Over 195 cm",
      "Classic Physique Masters 40+",
    ],
    galleryImages: [
      "/images/cat/division/3b.png",
      "/images/cat/division/3c.png",
      "/images/cat/division/3d.png",
    ],
  },
  {
    id: "fitness-model",
    title: "FITNESS MODEL",
    subtitle: "Commercial Appeal with Athletic Conditioning",
    image: "/images/cat/division/4a.png",
    keyFacts: [
      "Judged on Marketability and Commercial Appeal",
      "Athletic, Lean Physique - Not Extreme Muscularity",
      "Includes Swimwear and Fashion Rounds",
    ],
    categories: [
      "Fitness Model Male Up to 175 cm",
      "Fitness Model Male Up to 180 cm",
      "Fitness Model Male Up to 185 cm",
      "Fitness Model Male Over 185 cm",
      "Fitness Model Female Up to 163 cm",
      "Fitness Model Female Up to 168 cm",
      "Fitness Model Female Up to 173 cm",
      "Fitness Model Female Over 173 cm",
      "Fitness Model Masters 35+",
    ],
    galleryImages: [
      "/images/cat/division/4b.png",
      "/images/cat/division/4c.png",
      "/images/cat/division/4d.png",
    ],
  },
  {
    id: "sports-model",
    title: "SPORTS MODEL",
    subtitle: "Athletic Performance Meets Aesthetic Appeal",
    image: "/images/cat/division/5a.png",
    keyFacts: [
      "Focus on Athletic Functionality and Aesthetics",
      "Includes Fitness Performance Elements",
      "Judged on Muscle Tone, Not Size",
    ],
    categories: [
      "Sports Model Male Beginner",
      "Sports Model Male Novice",
      "Sports Model Male Open",
      "Sports Model Male Masters 40+",
      "Sports Model Female Beginner",
      "Sports Model Female Novice",
      "Sports Model Female Open",
      "Sports Model Female Masters 35+",
      "Sports Model Teams",
    ],
    galleryImages: [
      "/images/cat/division/5b.png",
      "/images/cat/division/5c.png",
      "/images/cat/division/5d.png",
    ],
  },
];

export default function DivisionsSection() {
  return (
    <section className="py-8 pt-16 bg-white">
      <div className="max-w-8xl mx-auto px-20">
        {divisions.map((division) => (
          <div key={division.id} className="mb-16 last:mb-0">
            {/* Top heading with border */}
            <div className="border border-[#dc4a26] rounded-md p-4 mb-6 bg-white">
              <h2 className="text-2xl md:text-4xl py-2 text-center text-black font-[impact] ">
                DISCOVER THE PERFECT DIVISION FOR YOUR BODYBUILDING JOURNEY
              </h2>
            </div>

            {/* Main content box with border */}
            <div className="border border-[#dc4a26] rounded-md overflow-hidden p-1 ">
              <div className="bg-black text-white rounded-md">
                {/* Top image with title overlay */}
                <div className="relative">
                  <div className="h-[550px] relative">
                    <Image
                      src={division.image || "/placeholder.svg"}
                      alt={`${division.title} division`}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>{" "}
                  {/* Title overlay on image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-32">
                    <h2 className="text-5xl md:text-7xl font-[impact] text-white mb-2 ">
                      {division.title}
                    </h2>
                    <p className="text-xl text-white font-[CreatoDisplay]">{division.subtitle}</p>
                  </div>
                </div>

                {/* Content section with black background */}
                <div className="py-16 px-8 bg-gradient-to-b from-[#090a05] to-black">
                  {/* Key facts */}
                  <div className="mb-16">
                    <h3 className="text-3xl font-[impact] text-center mb-8">
                      KEY FACTS
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      {division.keyFacts.map((fact, factIndex) => (
                        <div
                          key={factIndex}
                          className="bg-[#1e1e1a] border border-[#dc4a26] rounded p-4 text-center text-lg font-[CreatoDisplay] flex items-center"
                        >
                          <p>{fact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">
                      CATEGORIES
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
                      {division.categories
                        .slice(0, 8)
                        .map((category, catIndex) => (
                          <div
                            key={catIndex}
                            className="border border-[#dc4a26] rounded px-4 py-2  bg-[#1f1f1b] text-center  font-[CreatoDisplay] "
                          >
                            {category}
                          </div>
                        ))}
                    </div>
                    {division.categories.length > 8 && (
                      <div className="flex justify-center mt-3">
                        <div className="border border-[#dc4a26] rounded px-4 py-2  bg-[#1f1f1b] text-center  font-[CreatoDisplay]">
                          {division.categories[8]}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Register button */}
                  <div className="text-center mb-8">
                    <Link
                      href="/register"
                      className="inline-block bg-[#dc4a26] text-white px-8 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay] "
                    >
                      JOIN THE LEGACY, REGISTER NOW
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {division.galleryImages.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-[4/3] relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${division.title} pose ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
