"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Diamond } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

// Verified diamond/jewelry images from Unsplash — all confirmed jewelry on dark backgrounds
const diamondImages: Record<string, string> = {
  Round: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format",
  Oval: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80&auto=format",
  Emerald: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format",
  Cushion: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80&auto=format",
  Princess: "https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=800&q=80&auto=format",
  Pear: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80&auto=format",
  Marquise: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&q=80&auto=format",
  Radiant: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format",
  Asscher: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80&auto=format",
  Heart: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format",
};

interface DiamondCardProps {
  diamond: Diamond;
  index?: number;
}

export default function DiamondCard({ diamond, index = 0 }: DiamondCardProps) {
  const imageUrl = diamondImages[diamond.shape] || diamondImages.Round;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      <Link
        href={`/diamonds/${diamond.id}`}
        className="group block bg-[#0A0A0C] overflow-hidden transition-all duration-700 hover:bg-[#0E0E12]"
      >
        {/* Image area */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${diamond.carat}ct ${diamond.shape} diamond`}
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-700" />

          {/* Ambient glow on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
            <div className="w-40 h-40 rounded-full bg-gold/15 blur-[80px]" />
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            {diamond.isNew && (
              <span className="bg-black/40 backdrop-blur-md text-gold text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border border-gold/20">
                New
              </span>
            )}
            {diamond.isFeatured && (
              <span className="bg-black/40 backdrop-blur-md text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/10">
                Featured
              </span>
            )}
          </div>

          {/* Hover reveal */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-10">
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20 text-center">
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase">
                View Details
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 border-t border-white/[0.04]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gold/50 text-[10px] tracking-[0.2em] uppercase">
              {diamond.shape}
            </span>
            <span className="w-3 h-[1px] bg-white/10" />
            <span className="text-white/20 text-[10px] tracking-[0.15em]">
              {diamond.certification}
            </span>
          </div>

          <h3 className="font-heading text-white/90 text-lg mb-2 tracking-tight">
            {diamond.carat}ct {diamond.shape}
          </h3>

          <div className="flex items-center gap-4 text-[10px] text-white/25 tracking-[0.15em] uppercase mb-4">
            <span>{diamond.color}</span>
            <span className="w-[1px] h-3 bg-white/10" />
            <span>{diamond.clarity}</span>
            <span className="w-[1px] h-3 bg-white/10" />
            <span>{diamond.cut}</span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
            <p className="font-heading text-white text-xl tracking-tight">
              {formatPrice(diamond.price)}
            </p>
            <span className="text-gold/40 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Explore &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
