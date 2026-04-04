import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Diamond } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import allDiamonds from "@/data/diamonds.json";

const diamonds = allDiamonds as Diamond[];

const shapeImageMap: Record<string, string> = {
  Round:
    "https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=1200&q=80&auto=format",
  Oval:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80&auto=format",
  Emerald:
    "https://images.unsplash.com/photo-1583937443566-6b5e8a0f1b2a?w=1200&q=80&auto=format",
  Cushion:
    "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=1200&q=80&auto=format",
  Princess:
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&q=80&auto=format",
  Pear:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80&auto=format",
  Marquise:
    "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f5?w=1200&q=80&auto=format",
  Radiant:
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&q=80&auto=format",
  Asscher:
    "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=1200&q=80&auto=format",
  Heart:
    "https://images.unsplash.com/photo-1551122089-4e3e72477432?w=1200&q=80&auto=format",
};

function getShapeImage(shape: string): string {
  return (
    shapeImageMap[shape] ||
    "https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=1200&q=80&auto=format"
  );
}

export function generateStaticParams() {
  return diamonds.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const diamond = diamonds.find((d) => d.id === id);
  if (!diamond) return { title: "Diamond Not Found | The Fine Diamond" };

  return {
    title: `${diamond.carat}ct ${diamond.shape} Diamond — ${diamond.color} Color, ${diamond.clarity} Clarity | The Fine Diamond`,
    description: `Explore this stunning ${diamond.carat} carat ${diamond.shape} cut diamond with ${diamond.color} color and ${diamond.clarity} clarity. ${diamond.certification} certified. ${formatPrice(diamond.price)}.`,
  };
}

function getRelatedDiamonds(current: Diamond): Diamond[] {
  return diamonds
    .filter((d) => d.id !== current.id)
    .sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      if (a.shape === current.shape) scoreA += 3;
      if (b.shape === current.shape) scoreB += 3;
      if (a.color === current.color) scoreA += 2;
      if (b.color === current.color) scoreB += 2;
      if (a.clarity === current.clarity) scoreA += 1;
      if (b.clarity === current.clarity) scoreB += 1;
      return scoreB - scoreA;
    })
    .slice(0, 3);
}

export default async function DiamondDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const diamond = diamonds.find((d) => d.id === id);

  if (!diamond) notFound();

  const related = getRelatedDiamonds(diamond);

  const specs = [
    { label: "Shape", value: diamond.shape },
    { label: "Carat Weight", value: `${diamond.carat} ct` },
    { label: "Color Grade", value: diamond.color },
    { label: "Clarity Grade", value: diamond.clarity },
    { label: "Cut Grade", value: diamond.cut },
    { label: "Polish", value: diamond.polish },
    { label: "Symmetry", value: diamond.symmetry },
    { label: "Fluorescence", value: diamond.fluorescence },
    { label: "Certification", value: diamond.certification },
    { label: "Dimensions", value: diamond.dimensions },
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Breadcrumb */}
      <nav className="pt-32 pb-0">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <ol className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase">
            <li>
              <Link
                href="/"
                className="text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li className="text-white/10">/</li>
            <li>
              <Link
                href="/diamonds"
                className="text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                Diamonds
              </Link>
            </li>
            <li className="text-white/10">/</li>
            <li className="text-gold/70">
              {diamond.carat}ct {diamond.shape}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content — Two Column */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Diamond Visual */}
            <div className="relative aspect-square bg-[#060608] overflow-hidden">
              {/* Unsplash diamond image */}
              <Image
                src={getShapeImage(diamond.shape)}
                alt={`${diamond.carat}ct ${diamond.shape} cut diamond`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Dark overlay for atmosphere */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Ambient glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full bg-gold/[0.04] blur-[120px]" />
              </div>

              {/* Gold corner accents — top left */}
              <div className="absolute top-0 left-0 w-12 h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent" />

              {/* Gold corner accents — top right */}
              <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-gold/40 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent" />

              {/* Gold corner accents — bottom left */}
              <div className="absolute bottom-0 left-0 w-12 h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-gradient-to-t from-gold/40 to-transparent" />

              {/* Gold corner accents — bottom right */}
              <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-gradient-to-l from-gold/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-gradient-to-t from-gold/40 to-transparent" />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex gap-2 z-10">
                {diamond.isNew && (
                  <span className="bg-white/[0.06] backdrop-blur-md text-gold text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border border-gold/10">
                    New
                  </span>
                )}
                {diamond.isFeatured && (
                  <span className="bg-gold/10 backdrop-blur-md text-gold text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border border-gold/20">
                    Featured
                  </span>
                )}
              </div>

              {/* Subtle border */}
              <div className="absolute inset-0 border border-white/[0.04]" />
            </div>

            {/* Right — Details & Specs */}
            <div className="flex flex-col justify-center">
              {/* Certification label */}
              <p className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-4">
                {diamond.certification} Certified
              </p>

              {/* Title */}
              <h1 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl tracking-tight mb-3">
                {diamond.carat}ct {diamond.shape} Diamond
              </h1>

              {/* Quick specs line */}
              <p className="text-white/30 text-sm tracking-wider font-light mb-8">
                {diamond.color} Color &middot; {diamond.clarity} Clarity &middot;{" "}
                {diamond.cut} Cut
              </p>

              {/* Price */}
              <div className="mb-10 pb-8 border-b border-white/[0.04]">
                <p className="font-heading text-white text-4xl tracking-tight">
                  {formatPrice(diamond.price)}
                </p>
              </div>

              {/* Specs rows */}
              <div className="mb-10">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-3 border-b border-white/[0.04]"
                  >
                    <span className="text-white/20 text-[11px] tracking-[0.15em] uppercase font-light">
                      {spec.label}
                    </span>
                    <span className="text-white/80 text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/custom-design"
                  className="px-8 py-4 text-[10px] tracking-[0.2em] uppercase text-center bg-gold text-black font-medium hover:bg-gold/90 transition-all duration-500"
                >
                  Begin Your Commission
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 text-[10px] tracking-[0.2em] uppercase text-center border border-white/[0.12] text-white/50 hover:border-white/[0.25] hover:text-white/80 transition-all duration-500"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Diamonds */}
      <section className="relative py-32">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-6">
              You May Also Consider
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl tracking-tight mb-4">
              Similar Diamonds
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-4 mb-6" />
            <p className="text-white/35 text-base font-light leading-relaxed max-w-xl mx-auto">
              Explore other diamonds with similar characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.04]">
            {related.map((d) => (
              <Link
                key={d.id}
                href={`/diamonds/${d.id}`}
                className="group block bg-[#0A0A0C] overflow-hidden transition-all duration-700 hover:bg-[#0E0E12]"
              >
                {/* Image area */}
                <div className="relative aspect-square overflow-hidden">
                  {/* Unsplash diamond image */}
                  <Image
                    src={getShapeImage(d.shape)}
                    alt={`${d.carat}ct ${d.shape} cut diamond`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Ambient glow on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="w-32 h-32 rounded-full bg-gold/10 blur-[60px]" />
                  </div>

                  {/* Hover reveal */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-16 text-center">
                      <span className="text-gold/70 text-[10px] tracking-[0.3em] uppercase">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 border-t border-white/[0.04]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold/50 text-[10px] tracking-[0.2em] uppercase">
                      {d.shape}
                    </span>
                    <span className="w-3 h-[1px] bg-white/10" />
                    <span className="text-white/20 text-[10px] tracking-[0.15em]">
                      {d.certification}
                    </span>
                  </div>

                  <h3 className="font-heading text-white/90 text-lg mb-2 tracking-tight">
                    {d.carat}ct {d.shape}
                  </h3>

                  <div className="flex items-center gap-4 text-[10px] text-white/25 tracking-[0.15em] uppercase mb-4">
                    <span>{d.color}</span>
                    <span className="w-[1px] h-3 bg-white/10" />
                    <span>{d.clarity}</span>
                    <span className="w-[1px] h-3 bg-white/10" />
                    <span>{d.cut}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                    <p className="font-heading text-white text-xl tracking-tight">
                      {formatPrice(d.price)}
                    </p>
                    <span className="text-gold/40 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/diamonds"
              className="inline-block px-8 py-4 text-[10px] tracking-[0.2em] uppercase border border-white/[0.12] text-white/50 hover:border-white/[0.25] hover:text-white/80 transition-all duration-500"
            >
              Back to All Diamonds
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-8 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-6">
            Bespoke Service
          </p>
          <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Ready to Create Something Extraordinary?
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-4 mb-8" />
          <p className="text-white/35 text-base font-light leading-relaxed max-w-xl mx-auto mb-12">
            Pair this diamond with a custom setting designed just for you. Our artisans
            will bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/custom-design"
              className="px-10 py-4 text-[10px] tracking-[0.2em] uppercase bg-gold text-black font-medium hover:bg-gold/90 transition-all duration-500"
            >
              Start Custom Design
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 text-[10px] tracking-[0.2em] uppercase border border-white/[0.12] text-white/50 hover:border-white/[0.25] hover:text-white/80 transition-all duration-500"
            >
              Speak with a Specialist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
