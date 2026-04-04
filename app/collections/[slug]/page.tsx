import Link from "next/link";
import Image from "next/image";
import collectionsData from "@/data/collections.json";
import type { Collection } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

const collections = collectionsData as Collection[];

/* Map each product ID to a specific Unsplash image */
const productImages: Record<string, string> = {
  // Wedding & Engagement
  we001:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format",
  we002:
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80&auto=format",
  we003:
    "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800&q=80&auto=format",
  we004:
    "https://images.unsplash.com/photo-1551122089-4e3e72477432?w=800&q=80&auto=format",
  // Rings
  r001: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format",
  r002: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80&auto=format",
  r003: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80&auto=format",
  // Earrings
  e001: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80&auto=format",
  e002: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f5?w=800&q=80&auto=format",
  e003: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format",
  // Necklaces & Pendants
  n001: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&q=80&auto=format",
  n002: "https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=800&q=80&auto=format",
  n003: "https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=800&q=80&auto=format",
  // Custom Pieces
  c001: "https://images.unsplash.com/photo-1551122089-4e3e72477432?w=800&q=80&auto=format",
  c002: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&q=80&auto=format",
  c003: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80&auto=format",
};

/* Fallback images per collection slug */
const collectionFallback: Record<string, string> = {
  "wedding-engagement":
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format",
  rings:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format",
  earrings:
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80&auto=format",
  "necklaces-pendants":
    "https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=800&q=80&auto=format",
  "custom-pieces":
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80&auto=format",
};

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  return {
    title: collection?.name || "Collection",
    description: collection?.description || "",
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="font-heading text-white text-4xl mb-4">
            Collection Not Found
          </h1>
          <Link href="/collections" className="text-gold/60 hover:text-gold transition-colors text-[11px] tracking-[0.25em] uppercase">
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black pt-40 pb-20 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <nav className="text-[11px] text-white/20 mb-12 tracking-[0.15em]">
            <Link href="/" className="hover:text-white/50 transition-colors duration-500">
              Home
            </Link>
            <span className="mx-3 text-white/10">/</span>
            <Link href="/collections" className="hover:text-white/50 transition-colors duration-500">
              Collections
            </Link>
            <span className="mx-3 text-white/10">/</span>
            <span className="text-gold/60">{collection.name}</span>
          </nav>

          <div className="w-16 h-[1px] bg-gold/40 mb-8" />

          <h1 className="font-heading text-white text-5xl md:text-6xl tracking-tight mb-6">
            {collection.name}
          </h1>
          <p className="text-white/30 text-lg max-w-xl font-light">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-32 bg-[#060608]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.03]">
            {collection.products.map((product) => {
              const imgSrc =
                productImages[product.id] ||
                collectionFallback[collection.slug] ||
                "";

              return (
                <div
                  key={product.id}
                  className="group bg-[#0A0A0C] overflow-hidden transition-all duration-700 hover:bg-[#0E0E12]"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {imgSrc && (
                      <Image
                        src={imgSrc}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    )}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
                    {/* Ambient glow on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="w-24 h-24 rounded-full bg-gold/[0.08] blur-[50px]" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-7 border-t border-white/[0.04]">
                    <span className="text-gold/30 text-[10px] tracking-[0.2em] uppercase block mb-3">
                      {collection.name}
                    </span>
                    <h3 className="font-heading text-white/90 text-lg mb-2 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-white/25 text-sm leading-relaxed mb-5 font-light">
                      {product.description}
                    </p>
                    <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                      <p className="font-heading text-white text-lg tracking-tight">
                        {product.price
                          ? formatPrice(product.price)
                          : product.priceLabel || "By consultation"}
                      </p>
                      <Link
                        href="/contact"
                        className="text-gold/40 text-[10px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-500"
                      >
                        Inquire &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back link */}
          <div className="text-center mt-20">
            <Link
              href="/collections"
              className="inline-block border border-white/[0.08] text-white/40 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:border-gold/40 hover:text-gold transition-all duration-700"
            >
              All Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
