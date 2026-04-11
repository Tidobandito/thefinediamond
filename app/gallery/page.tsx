"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";

interface GalleryStone {
  src: string;
  alt: string;
}

// Gallery images — featured ring first
const galleryStones: GalleryStone[] = [
  { src: "featured-ring.png", alt: "Custom bespoke diamond ring by The Fine Diamond, Las Vegas" },
  { src: "IMG_0205.JPG", alt: "Rare gemstone sourced from global cutting house" },
  { src: "IMG_0247.JPG", alt: "Hand-selected loose diamond available for private viewing" },
  { src: "IMG_0334.JPG", alt: "Fine colored gemstone from The Fine Diamond collection" },
  { src: "IMG_0447.JPG", alt: "Investment-grade gemstone available by private inquiry" },
  { src: "IMG_0804.JPG", alt: "Rare collector stone hand-selected by private dealer" },
  { src: "IMG_1078.JPG", alt: "Luxury gemstone piece from The Fine Diamond gallery" },
  { src: "IMG_1130.JPG", alt: "Exceptional loose stone available for custom setting" },
  { src: "IMG_1454.JPG", alt: "Fine jewelry piece crafted with rare gemstones" },
  { src: "IMG_1475.JPG", alt: "Precious gemstone from trusted international source" },
  { src: "IMG_2084.JPG", alt: "Rare stone available for bespoke jewelry commission" },
  { src: "IMG_2357.JPG", alt: "Hand-selected gemstone from The Fine Diamond, Las Vegas" },
  { src: "IMG_2358.JPG", alt: "Collector-grade gemstone available by appointment" },
  { src: "IMG_2399.JPG", alt: "Fine gemstone for custom engagement ring design" },
  { src: "IMG_2409.JPG", alt: "Luxury loose stone from private dealer collection" },
  { src: "IMG_2480.JPG", alt: "Exceptional colored gemstone sourced globally" },
  { src: "IMG_2608.JPG", alt: "Rare gemstone available for private consultation" },
  { src: "IMG_2662.JPG", alt: "Investment-quality stone from The Fine Diamond" },
  { src: "IMG_2726.JPG", alt: "Fine jewelry piece with hand-selected gemstone" },
  { src: "IMG_3883.JPG", alt: "Rare collector stone available in Las Vegas" },
  { src: "IMG_4114.JPG", alt: "Luxury gemstone from global sourcing network" },
  { src: "IMG_4129.JPG", alt: "Bespoke jewelry piece from The Fine Diamond" },
  { src: "IMG_5043.JPG", alt: "Precious stone hand-selected for exceptional quality" },
  { src: "IMG_5086.JPG", alt: "Fine gemstone available for custom jewelry design" },
  { src: "IMG_5926.JPG", alt: "Rare stone from trusted cutting house worldwide" },
  { src: "IMG_6084.JPG", alt: "Luxury collector gemstone by private Las Vegas dealer" },
  { src: "IMG_6362.JPG", alt: "Exceptional gemstone for bespoke commission" },
  { src: "IMG_8669.JPG", alt: "Hand-selected rare stone from The Fine Diamond" },
  { src: "IMG_9683.JPG", alt: "Investment-grade gemstone available by inquiry" },
  { src: "IMG_9753.JPG", alt: "Fine jewelry crafted with rare collector stone" },
  { src: "12F128DA-DD99-4E0A-AFEA-10A61E5B2289.jpg", alt: "Precious gemstone from The Fine Diamond gallery" },
  { src: "270F9EA1-35A2-41EF-838D-9A703A905996.jpg", alt: "Luxury gemstone sourced from international cutting house" },
  { src: "7305494C-BD86-451C-B5B3-4F69A33F8CFA.jpg", alt: "Rare collector stone available for private viewing" },
  { src: "7D9E987F-2AC8-433E-A1D9-BED6A59CD945.jpg", alt: "Fine gemstone hand-selected by private dealer" },
  { src: "9790A664-18BC-4121-A424-7BA284F90B3B.jpg", alt: "Exceptional stone for custom bespoke jewelry" },
  { src: "CAFA559F-3E88-4469-8689-6C3E6D9F53EF.jpg", alt: "Rare gemstone from The Fine Diamond, Las Vegas" },
];

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] bg-gold mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
          >
            The Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-charcoal text-5xl md:text-6xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
          >
            Curated Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-muted max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Every piece hand-selected and available for private viewing.
            Inquire for details on any item.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid — Masonry-style */}
      <section className="py-16 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
            style={{ columnFill: "balance" }}
          >
            {galleryStones.map((stone, index) => (
              <motion.div
                key={stone.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                className="break-inside-avoid mb-4"
              >
                <TiltCard>
                  <div className="group relative overflow-hidden bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500">
                    {/* Image */}
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/5" : "3/4" }}
                    >
                      <Image
                        src={`/images/gallery/${stone.src}`}
                        alt={stone.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      {/* Gold overlay on hover */}
                      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500" />
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <p
                        className="text-charcoal text-sm italic mb-3"
                        style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
                      >
                        Information upon request
                      </p>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="btn-gold-shimmer block text-center py-3 text-[10px] tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-500"
                        style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
