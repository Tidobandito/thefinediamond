"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import collectionsData from "@/data/collections.json";
import type { Collection } from "@/lib/types";

const collections = collectionsData as Collection[];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const collectionImages: Record<string, string> = {
  "wedding-engagement":
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80&auto=format",
  rings:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80&auto=format",
  earrings:
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80&auto=format",
  "necklaces-pendants":
    "https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=1200&q=80&auto=format",
  "custom-pieces":
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80&auto=format",
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[200px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1.5, delay: 0.5, ease }}
            className="h-[1px] bg-gold/40 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
          >
            The Collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="font-heading text-white text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6"
          >
            Curated <span className="italic text-gold">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-white/30 text-lg max-w-xl mx-auto font-light"
          >
            From timeless bridal pieces to one-of-a-kind commissions,
            each crafted with intention and sourced with integrity.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="relative py-32 bg-[#060608]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.03]">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <Link
                  href={`/collections/${collection.slug}`}
                  className="group block relative overflow-hidden bg-[#0A0A0C] aspect-[16/9]"
                >
                  {/* Background Image */}
                  {collectionImages[collection.slug] && (
                    <Image
                      src={collectionImages[collection.slug]}
                      alt={collection.name}
                      fill
                      sizes={index === 0 ? "100vw" : "50vw"}
                      className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                  )}

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40 z-10" />

                  {/* Ambient glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/[0.05] blur-[100px]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-10 md:p-14">
                    <span className="text-gold/30 text-[10px] tracking-[0.3em] uppercase mb-3">
                      {collection.products.length} Pieces
                    </span>
                    <h2 className="font-heading text-white/90 text-3xl md:text-4xl mb-3 group-hover:text-gold transition-colors duration-700">
                      {collection.name}
                    </h2>
                    <p className="text-white/25 text-sm max-w-lg mb-6 font-light">
                      {collection.description}
                    </p>
                    <span className="text-gold/40 text-[10px] tracking-[0.25em] uppercase group-hover:text-gold/80 group-hover:tracking-[0.35em] transition-all duration-700">
                      Explore &rarr;
                    </span>
                  </div>

                  {/* Bottom border accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04] group-hover:bg-gold/20 transition-colors duration-700 z-20" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[200px]" />

        <div className="max-w-xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <span className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6">
              Bespoke
            </span>
            <h2 className="font-heading text-white text-3xl md:text-4xl tracking-tight mb-6">
              Nothing Quite Right?
            </h2>
            <p className="text-white/30 text-base mb-10 font-light leading-relaxed">
              Our 3D CAD atelier can bring any vision to life.
              From a whispered idea to a finished masterwork.
            </p>
            <Link
              href="/custom-design"
              className="inline-block border border-gold/40 text-gold px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-700"
            >
              Begin Your Commission
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
