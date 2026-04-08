"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParallaxImage from "@/components/ui/ParallaxImage";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease },
  }),
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.5, delay: 0.6, ease }}
              className="h-[1px] bg-gold mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease }}
              className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease }}
              className="text-navy text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              A Private Practice in
              <br />
              Extraordinary Stones
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease }}
              className="text-muted text-base md:text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
            >
              The Fine Diamond is a private luxury gemstone practice based in
              Las Vegas. We source rare diamonds, sapphires, emeralds, rubies,
              and collector stones from trusted cutting houses worldwide — and
              work directly with each client from first inquiry to final delivery.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <ParallaxImage
                src="/images/gallery/IMG_0804.JPG"
                alt="Fine gemstone close-up"
                className="absolute inset-0"
                intensity={8}
              />
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-gold/30 z-10" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-gold/30 z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
              >
                The Approach
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-navy text-4xl md:text-5xl tracking-tight leading-[1.1] mb-8"
                style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
              >
                Personally Sourced,
                <br />
                Privately Presented
              </motion.h2>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="w-16 h-[1px] bg-gold mb-8"
              />
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-muted text-base leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Every stone in our collection is hand-selected by Matt from
                trusted sources around the world. We do not carry generic
                inventory — each gemstone is chosen for its exceptional quality,
                rarity, or investment potential.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={4}
                className="text-muted text-base leading-[1.8] mb-12"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Whether you&apos;re looking for a specific stone for a bespoke
                piece or building a collection of rare gems, we work entirely
                to your specifications with complete discretion.
              </motion.p>
              <motion.div variants={fadeUp} custom={5}>
                <Link
                  href="/contact"
                  className="text-gold text-[11px] tracking-[0.25em] uppercase hover:text-gold/80 transition-colors duration-500 border-b border-gold/30 hover:border-gold pb-1"
                  style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-16 h-[1px] bg-gold mx-auto mb-10"
            />
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-navy text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              Experience the Collection
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Private viewings available by appointment in Las Vegas.
              We&apos;d love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="btn-gold-shimmer inline-block px-12 py-4 bg-gold text-white text-[11px] tracking-[0.4em] uppercase transition-all duration-300 hover:bg-gold/90 glow-pulse"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 400 }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
