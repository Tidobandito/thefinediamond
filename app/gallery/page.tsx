"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";

const categories = ["All", "Diamonds", "Sapphires", "Emeralds", "Rubies", "Rare & Collector"] as const;
type Category = (typeof categories)[number];

interface GalleryStone {
  src: string;
  label: string;
  category: Category;
  status: "Available" | "Currently Reserved" | "Contact for Availability";
}

// Map gallery images to categories and labels
// Since we can't inspect the actual images, we distribute them across categories
const galleryStones: GalleryStone[] = [
  { src: "IMG_0205.JPG", label: "Brilliant Cut Diamond", category: "Diamonds", status: "Available" },
  { src: "IMG_0247.JPG", label: "Oval Diamond", category: "Diamonds", status: "Available" },
  { src: "IMG_0334.JPG", label: "Cushion Cut Diamond", category: "Diamonds", status: "Currently Reserved" },
  { src: "IMG_0447.JPG", label: "Round Brilliant Diamond", category: "Diamonds", status: "Available" },
  { src: "IMG_0804.JPG", label: "Pear Shape Diamond", category: "Diamonds", status: "Contact for Availability" },
  { src: "IMG_1078.JPG", label: "Emerald Cut Diamond", category: "Diamonds", status: "Available" },
  { src: "IMG_1130.JPG", label: "Blue Sapphire", category: "Sapphires", status: "Available" },
  { src: "IMG_1454.JPG", label: "Ceylon Sapphire", category: "Sapphires", status: "Currently Reserved" },
  { src: "IMG_1475.JPG", label: "Padparadscha Sapphire", category: "Sapphires", status: "Contact for Availability" },
  { src: "IMG_2084.JPG", label: "Star Sapphire", category: "Sapphires", status: "Available" },
  { src: "IMG_2357.JPG", label: "Colombian Emerald", category: "Emeralds", status: "Available" },
  { src: "IMG_2358.JPG", label: "Zambian Emerald", category: "Emeralds", status: "Available" },
  { src: "IMG_2399.JPG", label: "Emerald Cut Emerald", category: "Emeralds", status: "Currently Reserved" },
  { src: "IMG_2409.JPG", label: "Cabochon Emerald", category: "Emeralds", status: "Contact for Availability" },
  { src: "IMG_2480.JPG", label: "Burmese Ruby", category: "Rubies", status: "Available" },
  { src: "IMG_2608.JPG", label: "Pigeon Blood Ruby", category: "Rubies", status: "Currently Reserved" },
  { src: "IMG_2662.JPG", label: "Oval Ruby", category: "Rubies", status: "Available" },
  { src: "IMG_2726.JPG", label: "Cushion Cut Ruby", category: "Rubies", status: "Contact for Availability" },
  { src: "IMG_3883.JPG", label: "Alexandrite", category: "Rare & Collector", status: "Available" },
  { src: "IMG_4114.JPG", label: "Paraiba Tourmaline", category: "Rare & Collector", status: "Currently Reserved" },
  { src: "IMG_4129.JPG", label: "Tanzanite", category: "Rare & Collector", status: "Available" },
  { src: "IMG_5043.JPG", label: "Fancy Yellow Diamond", category: "Diamonds", status: "Available" },
  { src: "IMG_5086.JPG", label: "Pink Diamond", category: "Rare & Collector", status: "Contact for Availability" },
  { src: "IMG_5926.JPG", label: "Kashmir Sapphire", category: "Sapphires", status: "Contact for Availability" },
  { src: "IMG_6084.JPG", label: "Muzo Emerald", category: "Emeralds", status: "Available" },
  { src: "IMG_6362.JPG", label: "Mozambique Ruby", category: "Rubies", status: "Available" },
  { src: "IMG_8669.JPG", label: "Cat's Eye Chrysoberyl", category: "Rare & Collector", status: "Available" },
  { src: "IMG_9683.JPG", label: "Spinel", category: "Rare & Collector", status: "Available" },
  { src: "IMG_9753.JPG", label: "Imperial Topaz", category: "Rare & Collector", status: "Contact for Availability" },
  { src: "12F128DA-DD99-4E0A-AFEA-10A61E5B2289.jpg", label: "Fancy Colored Diamond", category: "Diamonds", status: "Available" },
  { src: "270F9EA1-35A2-41EF-838D-9A703A905996.jpg", label: "Radiant Cut Diamond", category: "Diamonds", status: "Available" },
  { src: "7305494C-BD86-451C-B5B3-4F69A33F8CFA.jpg", label: "Asscher Cut Diamond", category: "Diamonds", status: "Currently Reserved" },
  { src: "7D9E987F-2AC8-433E-A1D9-BED6A59CD945.jpg", label: "Princess Cut Diamond", category: "Diamonds", status: "Available" },
  { src: "9790A664-18BC-4121-A424-7BA284F90B3B.jpg", label: "Heart Shape Diamond", category: "Diamonds", status: "Contact for Availability" },
  { src: "CAFA559F-3E88-4469-8689-6C3E6D9F53EF.jpg", label: "Marquise Diamond", category: "Diamonds", status: "Available" },
];

function getStatusBadgeClass(status: GalleryStone["status"]) {
  switch (status) {
    case "Available":
      return "bg-green-50 text-green-700 border-green-200";
    case "Currently Reserved":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Contact for Availability":
      return "bg-navy/5 text-navy/70 border-navy/10";
  }
}

function getCategoryFromStone(stone: GalleryStone): string {
  if (stone.category === "Diamonds") return "Diamond";
  if (stone.category === "Sapphires") return "Sapphire";
  if (stone.category === "Emeralds") return "Emerald";
  if (stone.category === "Rubies") return "Ruby";
  return "Other / Not Sure";
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? galleryStones
      : galleryStones.filter((s) => s.category === activeCategory);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
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
            className="text-navy text-5xl md:text-6xl tracking-tight mb-6"
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
            Every stone hand-selected and available for private viewing.
            Click any stone to inquire directly.
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-20 z-30 bg-white border-b border-gold/10 py-4">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gold text-white border-gold"
                    : "bg-white text-muted border-navy/10 hover:border-gold/40 hover:text-gold"
                }`}
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid — Masonry-style with varied heights */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4"
              style={{ columnFill: "balance" }}
            >
              {filtered.map((stone, index) => (
                <motion.div
                  key={stone.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                  className="break-inside-avoid mb-4"
                >
                  <TiltCard>
                    <div className="group relative overflow-hidden bg-white border border-navy/5 hover:border-gold/30 transition-all duration-500">
                      {/* Image */}
                      <div
                        className="relative overflow-hidden"
                        style={{ aspectRatio: index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/5" : "3/4" }}
                      >
                        <Image
                          src={`/images/gallery/${stone.src}`}
                          alt={stone.label}
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
                          className="text-navy text-sm mb-2"
                          style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 400 }}
                        >
                          {stone.label}
                        </p>

                        {/* Status badge */}
                        <span
                          className={`inline-block px-3 py-1 text-[9px] tracking-[0.15em] uppercase border ${getStatusBadgeClass(stone.status)} mb-4`}
                          style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
                        >
                          {stone.status}
                        </span>

                        {/* CTA */}
                        <Link
                          href={`/contact?stone=${encodeURIComponent(getCategoryFromStone(stone))}`}
                          className="btn-gold-shimmer block text-center py-3 text-[10px] tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-500"
                          style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
                        >
                          Inquire About This Stone
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
