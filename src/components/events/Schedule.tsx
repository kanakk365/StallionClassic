import { Clock, MapPin } from "lucide-react"

export default function ScheduleSection() {
  const events = [
    {
      id: 1,
      day: "12",
      month: "May",
      time: "09:00 am - 05:00 pm",
      location: "Hyderabad",
      title: "Events - Preliminary Judging",
      highlights:
        "Highlights - Witness 20+ athletes vie for IFBB Pro status in the most rigorous judging session of the year.",
    },
    {
      id: 2,
      day: "13",
      month: "May",
      time: "09:00 am - 05:00 pm",
      location: "Hyderabad",
      title: "Events - Preliminary Judging",
      highlights:
        "Highlights - Witness 20+ athletes vie for IFBB Pro status in the most rigorous judging session of the year.",
    },
    {
      id: 3,
      day: "14",
      month: "May",
      time: "09:00 am - 05:00 pm",
      location: "Hyderabad",
      title: "Events - Preliminary Judging",
      highlights:
        "Highlights - Witness 20+ athletes vie for IFBB Pro status in the most rigorous judging session of the year.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl  text-black mb-3 font-[impact] ">MARK YOUR CALENDAR</h2>
          <p className="text-2xl text-gray-800 font-[CreatoDisplay] ">Three days of pure athletic greatness</p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto font-[CreatoDisplay] ">
          {events.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row w-full ">
                {/* Date Column */}
                <div className="p-4 md:p-6 md:w-[20%] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-[#dc4a26] text-center">
                    <div className="text-xl md:text-2xl font-medium">{event.month}</div>
                    <div className="text-5xl md:text-7xl font-bold leading-none ">{event.day}</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:w-[80%]">
                  {/* Time & Location Column */}
                  <div className="p-4 md:p-6 w-full md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center mb-3 text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <span className="text-sm md:text-base">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                      <span className="text-sm md:text-base">{event.location}</span>
                    </div>
                  </div>

                  {/* Event Title Column */}
                  <div className="p-4 md:p-6 w-full md:w-1/3 flex items-center border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="text-gray-800 text-sm md:text-base">{event.title}</div>
                  </div>

                  {/* Highlights Column */}
                  <div className="p-4 md:p-6 w-full md:w-1/3 flex items-center">
                    <div className="text-gray-600 text-xs md:text-sm">{event.highlights}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full flex justify-center mt-10 gap-16">
            <button className="bg-[#dc4a26] py-1 px-10 font-[CreatoDisplay] text-xl cursor-pointer ">Register Now</button>
            <button className="bg-[#212121] py-1 px-12 font-[CreatoDisplay] text-xl cursor-pointer">Book Now </button>
        </div>
      </div>
    </section>
  )
}
