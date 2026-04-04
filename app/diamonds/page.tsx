"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function DiamondsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=1920&q=80&auto=format"
          alt="Brilliant diamonds"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-6"
          >
            Exceptional Stones
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
          >
            The Collection
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="w-16 h-[1px] bg-gold/40 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-white/35 max-w-2xl mx-auto text-base font-light leading-relaxed"
          >
            Every diamond in our collection is hand-selected for exceptional brilliance,
            fire, and beauty. Browse our curated inventory and find the perfect stone.
          </motion.p>
        </div>
      </section>

      {/* Diamond Search Engine */}
      <section className="relative">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <iframe
              src="https://thefinediamond-frame.jewelershowcase.com"
              width="100%"
              height="1500"
              frameBorder="0"
              scrolling="yes"
              sandbox="allow-scripts allow-forms allow-same-origin"
              className="w-full min-w-full border-0"
              style={{ minWidth: "100%" }}
              title="Diamond Search — The Fine Diamond"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            Can&rsquo;t Find What You&rsquo;re Looking For?
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-4 mb-8" />
          <p className="text-white/35 text-base font-light leading-relaxed max-w-xl mx-auto mb-12">
            Our diamond specialists can source any stone to your exact specifications.
            Tell us what you need and we&rsquo;ll find it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 text-[10px] tracking-[0.2em] uppercase bg-gold text-black font-medium hover:bg-gold/90 transition-all duration-500"
            >
              Contact a Specialist
            </Link>
            <Link
              href="/custom-design"
              className="px-10 py-4 text-[10px] tracking-[0.2em] uppercase border border-white/[0.12] text-white/50 hover:border-white/[0.25] hover:text-white/80 transition-all duration-500"
            >
              Start Custom Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
