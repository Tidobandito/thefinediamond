import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px]" />

      <div className="text-center px-8 relative z-10">
        <div className="w-12 h-[1px] bg-gold/40 mx-auto mb-8" />

        <p className="text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-8">
          Page Not Found
        </p>

        <h1 className="font-heading text-white/[0.06] text-[12rem] md:text-[16rem] leading-none tracking-tight mb-8">
          404
        </h1>

        <p className="text-white/25 text-base mb-12 max-w-md mx-auto font-light">
          This page doesn&apos;t exist. Perhaps you&apos;d like to explore
          our collection instead.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/"
            className="bg-gold text-black px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-500"
          >
            Return Home
          </Link>
          <Link
            href="/diamonds"
            className="border border-white/[0.08] text-white/40 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:border-gold/40 hover:text-gold transition-all duration-700"
          >
            Browse Diamonds
          </Link>
        </div>
      </div>
    </section>
  );
}
