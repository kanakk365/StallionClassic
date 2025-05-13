import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const pricingOptions = [
    {
      title: "General Access",
      description: "The essentials to experience the action all events, expo hall, and electric crowd energy",
      price: "Free",
      features: ["Entry to all competition events", "Expo hall access", "Basic event program"],
    },
    {
      title: "VIP Experience",
      description: "Front-row seats, judge insights, and exclusive perks – immerse yourself like never before.",
      price: "₹ 1999",
      features: [
        "Front-row reserved seating",
        "Real-time judge commentary",
        "Exclusive VIP lounge with cash bar",
        "Early venue entry (1 hour)",
      ],
    },
    {
      title: "Platinum Backstage",
      description: "Rub shoulders with champions – pump room access, trophy photos, and elite afterparty",
      price: "₹ 2499",
      features: [
        "Athlete pump room access",
        "Professional photo op with trophies",
        "Afterparty VIP table",
        "Meet-and-greet fast pass",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl  text-[#282828] mb-2 font-[impact] ">CHOOSE YOUR EXPERIENCE</h2>
          <p className="text-2xl text-gray-700 font-[CreatoDisplay] ">From casual fan to backstage insider</p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-[#181818] rounded-md overflow-hidden text-white text-center font-[CreatoDisplay] w-[419px] h-[594px] flex flex-col mx-auto">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl md:text-3xl font-[impact] mb-2">{option.title}</h3>
                <p className="text-gray-300 mb-6">{option.description}</p>

                <div className="border-t border-gray-700 my-6"></div>

                <div className="text-5xl font-[impact] text-[#dc4a26] mb-8  ">{option.price}</div>

                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start pl-6">
                      <Check className="h-5 w-5 text-white mr-2 mt-0.5  " />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 pb-8">
                <Link
                  href="/book"
                  className="block text-center bg-[#dc4a26] text-white py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors rounded-sm"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
