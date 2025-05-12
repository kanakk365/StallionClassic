import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl text-black mb-3 font-[impact]">
          THE STAGE IS SET. ARE YOU?
        </h2>
        <p className="text-xl text-gray-800 mb-8 font-[CreatoDisplay]">
          Judges are watching. Sponsors are waiting
        </p>

        <Link
          href="/register"
          className="inline-block bg-[#dc4a26] text-white px-8 py-4 font-bold text-lg tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
        >
          JOIN THE LEGACY, REGISTER NOW
        </Link>
      </div>
    </section>
  );
}
