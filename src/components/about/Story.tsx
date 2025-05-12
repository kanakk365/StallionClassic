export default function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl text-black mb-2 font-[CreatoDisplay] ">Our Story</h3>
          <h2 className="text-4xl md:text-5xl  text-black font-[impact] ">BUILT ON PASSION, DEFINED BY EXCELLENCE</h2>
        </div>

        <div className="relative max-w-6xl mx-auto mt-12 px-10 py-8">
          {/* Top-left corner */}
          <div className="absolute left-0 top-0 w-50 h-1 bg-[#dc4a26]"></div>
          <div className="absolute left-0 top-0 w-1 h-50 bg-[#dc4a26]"></div>

          {/* Bottom-right corner */}
          <div className="absolute right-0 bottom-0 w-50 h-1 bg-[#dc4a26]"></div>
          <div className="absolute right-0 bottom-0 w-1 h-50 bg-[#dc4a26]"></div>

          <div className="text-gray-800 space-y-8 text-center font-[CreatoDisplay] ">
            <p className="text-lg md:text-xl leading-relaxed">
              The Stallion Classic isn&apos;t just a competition—it&apos;s a celebration of discipline, sacrifice, and the
              relentless pursuit of greatness. Since its inception, this premier event has set the gold standard for
              Bodybuilding, Men&apos;s Physique, and Classic Physique divisions, attracting top-tier athletes who demand a
              stage worthy of their dedication.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              What sets Stallion Classic apart? Raw authenticity. No gimmicks. Just pure judging rigor, world-class
              production, and an unwavering commitment to honoring the sport&apos;s legacy while pushing its future forward.
              Whether you&apos;re stepping on stage for the first time or defending a title, this is where your physique
              speaks loudest.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              The Stallion Classic Wasn&apos;t Born In A Corporate Boardroom—It Was Forged In The Gym. Founded By Athletes
              Who Believed Competitions Should Reward Hard Work, Not Politics, We&apos;ve Stayed True To One Principle: The
              Best Physiques Win, Period.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              What Started As A Local Showdown Is Now A Global Phenomenon, But The Heart Of The Event Remains The Same.
              Every Detail—From Our Transparent Judging System To The Championship-Grade Stage Lighting—Is Designed To
              Give Athletes The Platform They Deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
