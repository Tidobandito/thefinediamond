import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
      <div className="text-center px-8 relative z-10">
        <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />

        <p className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-8">
          Page Not Found
        </p>

        <h1
          className="text-charcoal/[0.06] text-[12rem] md:text-[16rem] leading-none tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
        >
          404
        </h1>

        <p className="text-muted text-base mb-12 max-w-md mx-auto" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
          This page doesn&apos;t exist. Perhaps you&apos;d like to explore
          our gallery instead.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/"
            className="bg-gold text-white px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-gold/90 transition-colors duration-500"
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Return Home
          </Link>
          <Link
            href="/gallery"
            className="border border-charcoal/10 text-muted px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-700"
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
