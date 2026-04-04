"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease },
  }),
};

const steps = [
  {
    numeral: "I",
    title: "Consultation",
    description:
      "Share your vision — a sketch, a photograph, a whispered idea. We discuss stones, metals, and the emotion you want the piece to carry.",
  },
  {
    numeral: "II",
    title: "3D Design",
    description:
      "Our designers build a precise three-dimensional model. You review photorealistic renders from every angle before anything is committed.",
  },
  {
    numeral: "III",
    title: "Refinement",
    description:
      "Unlimited revisions until every detail is right. Prong style, band width, stone placement — nothing is finalized without your approval.",
  },
  {
    numeral: "IV",
    title: "Creation",
    description:
      "Your approved design moves to our master craftsmen. The digital becomes physical, the imagined becomes eternal.",
  },
];

const galleryCards = [
  {
    label: "Concept",
    sublabel: "Where vision takes shape",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    label: "Digital Render",
    sublabel: "Precision made visible",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    label: "Masterwork",
    sublabel: "The finished creation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

const pricingPoints = [
  "Upfront cost estimates before any work begins",
  "No hidden fees for design revisions",
  "Stone and metal costs itemized separately",
  "Direct sourcing means below-retail pricing on every component",
];

export default function CustomDesignPage() {
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
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=85&auto=format"
            alt="Exquisite diamond jewelry on dark velvet"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </motion.div>

        {/* Ambient gold glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.5, delay: 0.8, ease }}
                className="h-[1px] bg-gold/40 mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease }}
                className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-8"
              >
                Custom CAD Design
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease }}
                className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8"
              >
                Your Vision,
                <br />
                <span className="italic text-gold">Realized</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease }}
                className="text-white/35 text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl"
              >
                From a whispered idea to a one-of-a-kind masterpiece. Our custom
                design process gives you control of every detail, with photorealistic
                3D renders so you see exactly what you&apos;re getting before a single
                tool touches metal.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease }}
                className="flex flex-wrap gap-5"
              >
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 text-sm tracking-[0.12em] uppercase font-medium bg-gold text-black hover:bg-gold/90 transition-all duration-300 glow-pulse"
                >
                  Start Your Design
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-block px-10 py-4 text-sm tracking-[0.12em] uppercase font-medium border border-white/20 text-white/70 hover:border-gold/40 hover:text-white transition-all duration-300"
                >
                  See the Process
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════ HOW IT WORKS — CINEMATIC TIMELINE ═══════════════════ */}
      <section id="how-it-works" className="relative py-32 lg:py-44 bg-black overflow-hidden">
        {/* Top divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-6"
            >
              The Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              How It Works
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="w-16 h-[1px] bg-gold/40 mx-auto mb-6"
            />
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-white/30 text-base font-light leading-relaxed max-w-xl mx-auto"
            >
              Four stages from concept to creation. You stay involved at every step.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[1px] bg-white/[0.06]" />

            {steps.map((step, i) => (
              <motion.div
                key={step.numeral}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.1, ease }}
                className={`relative flex items-start gap-8 md:gap-16 mb-24 last:mb-0 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Numeral node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full border border-gold/20 bg-black flex items-center justify-center">
                    <span className="font-heading text-gold/70 text-lg tracking-wider">
                      {step.numeral}
                    </span>
                  </div>
                </div>

                {/* Content — offset left or right */}
                <div
                  className={`pl-28 md:pl-0 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-16"
                      : "md:pl-16 md:ml-auto"
                  }`}
                >
                  <p className="text-gold/40 text-[11px] tracking-[0.4em] uppercase mb-3">
                    Step {step.numeral}
                  </p>
                  <h3 className="font-heading text-white/90 text-2xl md:text-3xl tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/30 text-base font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY — CONCEPT / RENDER / MASTERWORK ═══════════════════ */}
      <section className="relative py-32 lg:py-44 bg-[#060608] overflow-hidden">
        {/* Top divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-6"
            >
              The Journey
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              From Concept to Creation
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="w-16 h-[1px] bg-gold/40 mx-auto"
            />
          </motion.div>

          {/* Three glass cards with arrows */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {galleryCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease }}
                className="relative group"
              >
                {/* Glass card */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-sm p-8 md:p-10">
                  {/* Placeholder area */}
                  <div className="aspect-[4/3] rounded-sm bg-white/[0.02] border border-white/[0.04] flex flex-col items-center justify-center mb-8 group-hover:border-gold/10 transition-colors duration-500">
                    <div className="text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-500">
                      {card.icon}
                    </div>
                    <span className="text-white/15 text-[10px] tracking-[0.4em] uppercase">
                      {card.label}
                    </span>
                  </div>

                  {/* Card label */}
                  <h3 className="font-heading text-white/90 text-xl tracking-tight mb-2">
                    {card.label}
                  </h3>
                  <p className="text-white/30 text-sm font-light">
                    {card.sublabel}
                  </p>
                </div>

                {/* Arrow connector between cards */}
                {i < galleryCards.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-gold/20 bg-black items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gold/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRANSPARENT PRICING ═══════════════════ */}
      <section className="relative py-32 lg:py-44 bg-black overflow-hidden">
        {/* Top divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto px-8 lg:px-12">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-6"
            >
              Pricing
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Transparent Pricing
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="w-16 h-[1px] bg-gold/40 mx-auto mb-6"
            />
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-white/30 text-base font-light leading-relaxed max-w-lg mx-auto"
            >
              No surprises. No hidden fees. You know exactly what
              you&apos;re paying for at every stage.
            </motion.p>
          </motion.div>

          {/* Glass card with pricing points */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-sm p-8 md:p-12"
          >
            <div className="space-y-6">
              {pricingPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="flex items-start gap-5"
                >
                  {/* Gold checkmark */}
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-gold/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/35 text-base font-light leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider and footnote */}
            <div className="mt-10 pt-8 border-t border-white/[0.04]">
              <p className="text-white/20 text-sm font-light leading-relaxed">
                Every custom project begins with a detailed estimate. We itemize
                design fees, stone costs, metal costs, and production so you can
                make informed decisions at every step.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="relative py-32 lg:py-44 bg-[#060608] overflow-hidden">
        {/* Top divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Ambient gold glow — prominent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-[200px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/[0.06] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-8"
            >
              Begin
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Ready to Create Something
              <br />
              <span className="italic text-gold">Extraordinary</span>?
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="w-16 h-[1px] bg-gold/40 mx-auto mb-8"
            />

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-white/30 text-base md:text-lg font-light leading-relaxed mb-14 max-w-xl mx-auto"
            >
              Whether you have a detailed sketch or just the spark of an idea,
              we&apos;ll bring it to life. Start a conversation with our design
              team today.
            </motion.p>

            <motion.div variants={fadeUp} custom={4}>
              <Link
                href="/contact"
                className="inline-block px-12 py-5 text-sm tracking-[0.15em] uppercase font-medium bg-gold text-black hover:bg-gold/90 transition-all duration-300 glow-pulse"
              >
                Begin Your Custom Design
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
