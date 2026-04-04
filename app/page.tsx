"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import DiamondCard from "@/components/ui/DiamondCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import diamondsData from "@/data/diamonds.json";
import testimonialsData from "@/data/testimonials.json";
import type { Diamond, Testimonial } from "@/lib/types";

const diamonds = diamondsData as Diamond[];
const testimonials = testimonialsData as Testimonial[];
const featured = diamonds.filter((d) => d.isFeatured).slice(0, 6);

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-black">
        {/* Background image with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1920&q=90&auto=format"
            alt="Extraordinary colored diamond ring on dark background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        </motion.div>

        {/* Diamond fire accent glow — warmer, more vivid */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/8 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-400/6 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-rose-400/4 blur-[120px] pointer-events-none" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] bg-gold mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gold/80 text-[11px] tracking-[0.5em] uppercase mb-8"
              >
                Est. Birmingham, Alabama
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-8"
              >
                Where Brilliance
                <br />
                <span className="gold-shimmer">Meets Precision</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="text-white/50 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-light"
              >
                Direct from our cutting facilities to you. Every stone
                hand-selected, every piece designed with intention.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-wrap gap-5"
              >
                <Link
                  href="/diamonds"
                  className="group relative bg-gold text-black px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-medium overflow-hidden glow-pulse"
                >
                  <span className="relative z-10">Explore the Collection</span>
                </Link>
                <Link
                  href="/custom-design"
                  className="group border border-white/20 text-white px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-light hover:border-gold/50 hover:text-gold transition-all duration-700"
                >
                  Begin Your Commission
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════ ATELIER VALUES ═══════════════════ */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: "01",
                title: "Direct Sourcing",
                desc: "From our cutting facilities to your hand. No middlemen, no markups — just exceptional stones at remarkable value.",
              },
              {
                num: "02",
                title: "3D CAD Atelier",
                desc: "Photorealistic renders from every angle before production begins. Your piece, perfected in the digital realm first.",
              },
              {
                num: "03",
                title: "GIA Certified",
                desc: "Every diamond independently graded and certified. Full transparency on cut, clarity, color, and carat weight.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.num}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="relative p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/[0.04] last:border-r-0 last:border-b-0 group"
              >
                <span className="text-gold/30 text-[11px] tracking-[0.3em] uppercase mb-6 block">
                  {item.num}
                </span>
                <h3 className="font-heading text-white text-2xl mb-4 group-hover:text-gold transition-colors duration-700">
                  {item.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED STONES ═══════════════════ */}
      <section className="relative py-32 bg-[#060608] overflow-hidden">
        {/* Top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
            >
              The Collection
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Selected Stones
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex items-end justify-between"
            >
              <p className="text-white/30 text-base max-w-lg font-light leading-relaxed">
                Each diamond hand-selected from our cutting facilities.
                GIA certified, expertly graded, priced without retail markup.
              </p>
              <Link
                href="/diamonds"
                className="hidden md:inline-block text-gold/60 text-[11px] tracking-[0.25em] uppercase hover:text-gold transition-colors duration-500 border-b border-gold/20 hover:border-gold/60 pb-1"
              >
                View All Stones
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.03]">
            {featured.map((diamond, index) => (
              <DiamondCard key={diamond.id} diamond={diamond} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 md:hidden"
          >
            <Link
              href="/diamonds"
              className="text-gold/60 text-[11px] tracking-[0.25em] uppercase hover:text-gold transition-colors duration-500 border-b border-gold/20 pb-1"
            >
              View All Stones
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE ATELIER — CAD PROCESS ═══════════════════ */}
      <section className="relative overflow-hidden">
        {/* Full-bleed image section */}
        <div className="relative h-[80vh] min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=85&auto=format"
            alt="Diamond craftsmanship"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
              <div className="max-w-xl">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.span
                    variants={fadeUp}
                    custom={0}
                    className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
                  >
                    The Atelier
                  </motion.span>
                  <motion.h2
                    variants={fadeUp}
                    custom={1}
                    className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6"
                  >
                    Your Vision,{" "}
                    <span className="italic text-gold">Realized</span>
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    custom={2}
                    className="text-white/45 text-lg leading-relaxed mb-10 font-light"
                  >
                    From a whispered idea to a photorealistic 3D render to the
                    finished masterwork in your hands. Our CAD design process
                    is where imagination meets diamond-setting precision.
                  </motion.p>

                  {/* Process steps — minimal, editorial */}
                  <motion.div variants={fadeUp} custom={3} className="space-y-6 mb-12">
                    {[
                      { num: "I", label: "Consultation", detail: "Share your vision" },
                      { num: "II", label: "3D Design", detail: "Photorealistic CAD renders" },
                      { num: "III", label: "Refinement", detail: "Unlimited revisions" },
                      { num: "IV", label: "Creation", detail: "Master craftsmanship" },
                    ].map((step) => (
                      <div key={step.num} className="flex items-center gap-6 group">
                        <span className="text-gold/40 text-sm font-heading w-8">
                          {step.num}
                        </span>
                        <div className="w-8 h-[1px] bg-white/10 group-hover:bg-gold/40 group-hover:w-12 transition-all duration-700" />
                        <span className="text-white/70 text-sm tracking-wider uppercase group-hover:text-white transition-colors duration-500">
                          {step.label}
                        </span>
                        <span className="text-white/20 text-sm font-light hidden sm:inline">
                          — {step.detail}
                        </span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} custom={4}>
                    <Link
                      href="/custom-design"
                      className="inline-block border border-gold/40 text-gold px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-700"
                    >
                      Begin Your Commission
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ORIGIN STORY ═══════════════════ */}
      <section className="relative py-40 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[200px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&q=85&auto=format"
                alt="Diamond cutting and polishing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Corner accent */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-gold/30" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-gold/30" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
              >
                Our Origin
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-heading text-white text-4xl md:text-5xl tracking-tight leading-[1.1] mb-8"
              >
                From Mine to
                <br />
                Masterpiece
              </motion.h2>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="w-16 h-[1px] bg-gold/40 mb-8"
              />
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-white/35 text-base leading-[1.8] mb-6 font-light"
              >
                Every diamond begins its journey deep within the earth.
                Ours travel directly from the cutting floor to your hand —
                no wholesalers, no inflated retail margins, no compromises.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={4}
                className="text-white/35 text-base leading-[1.8] mb-12 font-light"
              >
                The result is a stone of extraordinary quality at a price
                that reflects its true value — not the overhead of a
                traditional supply chain.
              </motion.p>
              <motion.div variants={fadeUp} custom={5}>
                <Link
                  href="/about"
                  className="text-gold/60 text-[11px] tracking-[0.25em] uppercase hover:text-gold transition-colors duration-500 border-b border-gold/20 hover:border-gold/60 pb-1"
                >
                  The Full Story
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="relative py-32 bg-[#060608]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
            >
              Client Stories
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl tracking-tight"
            >
              In Their Words
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.03]">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ NEWSLETTER ═══════════════════ */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[200px]" />
        </div>

        <div className="max-w-xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-heading text-white text-3xl md:text-4xl tracking-tight mb-4"
            >
              Private Access
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-white/30 text-sm mb-10 font-light"
            >
              First access to new acquisitions, private viewings,
              and exclusive commission opportunities.
            </motion.p>

            <motion.form
              variants={fadeUp}
              custom={2}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-colors duration-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold text-black text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-colors duration-500 whitespace-nowrap"
              >
                Request Access
              </button>
            </motion.form>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-white/15 text-[10px] mt-6 tracking-wider"
            >
              By invitation. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
