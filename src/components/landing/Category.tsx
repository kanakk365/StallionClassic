import Image from "next/image"

export default function CategoriesSection() {
  const categories = [
    {
      id: "bodybuilding",
      title: "BODYBUILDING",
      description: "Mass, symmetry, and sheer power.",
      image: "/images/landing/category/1.png",
    },
    {
      id: "mens-physique",
      title: "MENS PHYSIQUE",
      description: "Aesthetics, proportion, and stage presence",
      image: "/images/landing/category/2.png",
    },
    {
      id: "classic-physique",
      title: "CLASSIC PHYSIQUE",
      description: "Golden-era muscle with modern precision",
      image: "/images/landing/category/3.png",
    },
    {
      id: "denim-jeans",
      title: "DENIM JEANS",
      description: "Where rugged denim complements championship conditioning",
      image: "/images/landing/category/4.png",
    },
    {
      id: "master-bodybuilding",
      title: "MASTER BODYBUILDING",
      description: "For athletes 40+ who redefine aging",
      image: "/images/landing/category/5.png",
    },
  ]

  return (
    <section className=" px-10 py-16 md:py-24 bg-[#181818]">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl text-white mb-2 font-[CreatoDisplay] ">Division & Categories</h3>
          <h2 className="text-3xl md:text-5xl text-white font-[impact] ">YOUR CATEGORY AWAITS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top row - 3 cards */}
          {categories.slice(0, 3).map((category) => (
            <div key={category.id} className="relative overflow-hidden group">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl md:text-4xl  mb-2 font-[impact] text-center ">{category.title}</h3>
                  <p className="text-sm md:text-base text-center font-[CreatoDisplay] ">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {categories.slice(3, 5).map((category) => (
            <div key={category.id} className="relative overflow-hidden group">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-4xl mb-2 font-[impact] text-center ">{category.title}</h3>
                  <p className="text-sm md:text-base font-[CreatoDisplay] text-center ">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
