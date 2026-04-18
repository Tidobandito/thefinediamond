"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import CountUp from "@/components/ui/CountUp";
import HeroBackground from "@/components/ui/HeroBackground";

/* ─────────── animation variants ─────────── */

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* entrance variants for variety */
const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const tiltReveal = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* hero word-by-word animation */
const wordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 1.3 },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* particle configuration for hero — fixed values to avoid hydration mismatch */
const heroParticles = [
  { id: 0, left: "8%", top: "15%", size: 1.5, duration: 3.2, delay: 0, blur: 0, drift: 12 },
  { id: 1, left: "22%", top: "45%", size: 2, duration: 4.1, delay: 0.8, blur: 1, drift: -15 },
  { id: 2, left: "35%", top: "25%", size: 1.2, duration: 3.8, delay: 1.5, blur: 0, drift: 8 },
  { id: 3, left: "48%", top: "65%", size: 2.5, duration: 5, delay: 0.3, blur: 0, drift: -20 },
  { id: 4, left: "62%", top: "35%", size: 1.8, duration: 3.5, delay: 2.1, blur: 1, drift: 15 },
  { id: 5, left: "75%", top: "55%", size: 1.3, duration: 4.5, delay: 1.2, blur: 0, drift: -10 },
  { id: 6, left: "88%", top: "20%", size: 2.2, duration: 3.9, delay: 3.0, blur: 0, drift: 18 },
  { id: 7, left: "15%", top: "75%", size: 1.6, duration: 4.8, delay: 0.5, blur: 1, drift: -8 },
  { id: 8, left: "42%", top: "85%", size: 1.4, duration: 3.3, delay: 2.5, blur: 0, drift: 12 },
  { id: 9, left: "55%", top: "12%", size: 2.8, duration: 5.2, delay: 1.8, blur: 1, drift: -18 },
  { id: 10, left: "70%", top: "70%", size: 1.1, duration: 4.2, delay: 3.5, blur: 0, drift: 6 },
  { id: 11, left: "30%", top: "50%", size: 2.1, duration: 3.7, delay: 0.9, blur: 0, drift: -14 },
  { id: 12, left: "82%", top: "42%", size: 1.7, duration: 4.6, delay: 2.8, blur: 1, drift: 10 },
  { id: 13, left: "5%", top: "60%", size: 2.4, duration: 5.5, delay: 1.0, blur: 0, drift: -6 },
  { id: 14, left: "92%", top: "80%", size: 1.3, duration: 3.1, delay: 3.8, blur: 0, drift: 16 },
];

/* ─────────── sample stone data for "Selected Stones" cards ─────────── */

const featuredStones = [
  {
    src: "featured-ring.png",
    name: "Information upon request",
    status: "Available" as const,
  },
  {
    src: "IMG_0247.JPG",
    name: "Information upon request",
    status: "Available" as const,
  },
  {
    src: "IMG_0804.JPG",
    name: "Information upon request",
    status: "Available" as const,
  },
  {
    src: "IMG_1454.JPG",
    name: "Information upon request",
    status: "Available" as const,
  },
  {
    src: "IMG_2357.JPG",
    name: "Information upon request",
    status: "Available" as const,
  },
  {
    src: "IMG_2608.JPG",
    name: "Information upon request",
    status: "Available" as const,
  },
];

/* ─────────── testimonials data ─────────── */

const testimonials = [
  {
    quote: "Matt found us a stone that three other dealers said didn't exist. The 4-carat Kashmir sapphire is now the centerpiece of my wife's anniversary ring. His eye for quality is unmatched.",
    name: "James R.",
    location: "Scottsdale, AZ",
    detail: "4.2ct Kashmir Sapphire Ring",
  },
  {
    quote: "The entire experience felt like having a private jeweler on retainer. From the first call to the final setting, every detail was handled with extraordinary care.",
    name: "Victoria L.",
    location: "Manhattan, NY",
    detail: "Custom Engagement Ring",
  },
  {
    quote: "I've purchased from Harry Winston and Graff. Matt's stones rival both at a fraction of the markup. The direct sourcing model isn't marketing — it's real savings on real stones.",
    name: "David & Sarah K.",
    location: "Beverly Hills, CA",
    detail: "3.5ct D Flawless Diamond",
  },
];

/* ─────────── main page ─────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <HeroSection />

      {/* ═══════════════════ VALUES ═══════════════════ */}
      <ValuesSection />
      <div className="section-divider" />

      {/* ═══════════════════ SELECTED STONES ═══════════════════ */}
      <SelectedStonesSection />
      <div className="section-divider" />

      {/* ═══════════════════ THE ATELIER ═══════════════════ */}
      <AtelierSection />

      {/* ═══════════════════ OUR ORIGIN ═══════════════════ */}
      <OriginSection />
      <div className="section-divider" />

      {/* ═══════════════════ BEHIND THE CRAFT ═══════════════════ */}
      <BehindTheCraftSection />
      <div className="section-divider" />

      {/* ═══════════════════ CLIENT STORIES ═══════════════════ */}
      <TestimonialsSection />

      {/* ═══════════════════ PRIVATE ACCESS ═══════════════════ */}
      <NewsletterSection />

      {/* ═══════════════════ CONTACT FORM ═══════════════════ */}
      <ContactSection />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Cinematic video with staggered text reveals
═══════════════════════════════════════════════════════════════ */

function HeroSection() {
  const heroWords = ["Where", "Brilliance", "Meets", "Precision"];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Animated background — replaces static video */}
      <HeroBackground />

      {/* Animated gold dust particles — upgraded */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heroParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold/40"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              filter: p.blur ? `blur(${p.blur}px)` : "none",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [0, -40, -80],
              x: [0, p.drift],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Gold accent line with light sweep */}
        <div className="relative mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-[1px] bg-gold origin-center"
          />
          {/* Light sweep across the line */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="text-gold/80 text-[11px] tracking-[0.5em] uppercase mb-6"
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          Las Vegas &middot; Private Jeweler
        </motion.p>

        {/* Main heading — word-by-word reveal */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          className="text-white text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 max-w-5xl"
          style={{
            fontFamily:
              "var(--font-display), 'Cormorant Garamond', Georgia, serif",
          }}
        >
          {heroWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className={`inline-block mr-[0.25em] ${
                word === "Meets" ? "italic text-gold/90" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.9 }}
          className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed"
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          Rare, investment-grade gemstones sourced globally.
          Every stone hand-selected. Every piece bespoke.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VALUES — 01, 02, 03 with animated counters
═══════════════════════════════════════════════════════════════ */

function ValuesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background video — the original hero footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/values-bg.mp4" type="video/mp4" />
      </video>
      {/* Cream overlay for text legibility */}
      <div className="absolute inset-0 bg-cream/85" />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] bg-gold mx-auto mb-8 origin-center"
          />
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-charcoal text-4xl md:text-5xl tracking-tight mb-6"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Rare Stones, Bespoke Service
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            The Fine Diamond specializes in rare, investment-grade gemstones
            sourced globally and presented privately. Every stone is
            hand-selected. Every piece is designed to your specifications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              num: "01",
              title: "Globally Sourced",
              desc: "Rare diamonds, sapphires, emeralds, rubies, and collector stones sourced from trusted mines and cutting houses worldwide.",
            },
            {
              num: "02",
              title: "Bespoke Design",
              desc: "From concept to creation — every piece designed and crafted to your vision with precision and care.",
            },
            {
              num: "03",
              title: "Private Service",
              desc: "Discreet, personalized consultations. Matt works directly with every client from first inquiry to final delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index === 0 ? slideFromLeft : index === 2 ? slideFromRight : fadeUp}
              custom={index}
              className="relative p-12 lg:p-16 border-b md:border-b-0 md:border-r border-gold/10 last:border-r-0 last:border-b-0 group"
            >
              <CountUp
                value={item.num}
                className="text-gold/30 text-6xl font-light tracking-wider block mb-6"
              />
              <h3
                className="text-charcoal text-2xl mb-4 group-hover:text-gold transition-colors duration-700"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-muted text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SELECTED STONES — Rich product cards with specs
═══════════════════════════════════════════════════════════════ */

function SelectedStonesSection() {
  return (
    <section className="py-32 bg-ivory">
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
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            The Collection
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-charcoal text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Selected Stones
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex items-end justify-between"
          >
            <p
              className="text-muted text-base max-w-lg leading-relaxed"
              style={{
                fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              A curated selection from our current inventory. Each stone
              available for private viewing.
            </p>
            <Link
              href="/gallery"
              className="hidden md:inline-block text-gold text-[11px] tracking-[0.25em] uppercase hover:text-gold/80 transition-colors duration-500 border-b border-gold/30 hover:border-gold pb-1"
              style={{
                fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              }}
            >
              View Full Gallery
            </Link>
          </motion.div>
        </motion.div>

        {/* Stone cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStones.map((stone, index) => (
            <motion.div
              key={stone.src}
              initial={{
                opacity: 0,
                x: index < 3 ? -30 : 30,
                y: 30,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TiltCard>
                <div className="group relative overflow-hidden bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500">
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={`/images/gallery/${stone.src}`}
                      alt="Fine gemstone piece"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info panel */}
                  <div className="p-5">
                    <p
                      className="text-charcoal text-sm italic mb-3"
                      style={{
                        fontFamily:
                          "var(--font-body), 'Montserrat', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Information upon request
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="inline-block"
                    >
                      <Link
                        href="/contact"
                        className="btn-gold-shimmer text-[9px] tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-white px-4 py-2 transition-all duration-500 inline-block"
                        style={{
                          fontFamily:
                            "var(--font-body), 'Montserrat', sans-serif",
                        }}
                      >
                        Inquire
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:hidden"
        >
          <Link
            href="/gallery"
            className="text-gold text-[11px] tracking-[0.25em] uppercase hover:text-gold/80 transition-colors duration-500 border-b border-gold/30 pb-1"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE ATELIER — 4-step process with roman numerals
═══════════════════════════════════════════════════════════════ */

function AtelierSection() {
  const steps = [
    {
      numeral: "I",
      title: "Consultation",
      desc: "We begin with a private conversation about your vision — the occasion, the stone, the style. No catalog. No compromise.",
    },
    {
      numeral: "II",
      title: "3D Design",
      desc: "Our master designers translate your vision into photorealistic 3D CAD renderings. You see every angle before a single grain of metal is touched.",
    },
    {
      numeral: "III",
      title: "Refinement",
      desc: "We refine every millimeter together — adjusting proportions, stone placement, and metalwork until the design is exactly right.",
    },
    {
      numeral: "IV",
      title: "Creation",
      desc: "Your piece is handcrafted by master jewelers. Set with your chosen stone. Delivered with full certification and a lifetime guarantee.",
    },
  ];

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,168,76,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-gold/50 text-[11px] tracking-[0.5em] uppercase block mb-6"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Bespoke Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            The Atelier
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/50 text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            From first conversation to final delivery — a four-step journey to
            your one-of-a-kind piece.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connecting line — draws on scroll */}
          <motion.div
            className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.numeral}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative text-center px-6 py-8"
            >
              {/* Roman numeral with spring-bounce ring */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
                <motion.div
                  className="absolute inset-0 rounded-full border border-gold/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: i * 0.2 + 0.3,
                  }}
                />
                <span
                  className="animate-gradient-text text-2xl tracking-wider"
                  style={{
                    fontFamily:
                      "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {step.numeral}
                </span>
              </div>

              <h3
                className="text-white text-xl mb-3"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(201,168,76,0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-block"
          >
            <Link
              href="/custom-design"
              className="btn-gold-shimmer inline-block px-10 py-4 text-[12px] tracking-[0.25em] uppercase bg-gold text-white hover:bg-gold/90 transition-all duration-500 glow-pulse"
              style={{
                fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              Start Your Design
            </Link>
          </motion.div>
        </motion.div>

        {/* Bespoke process showcase video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="relative rounded-sm overflow-hidden border border-gold/20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            >
              <source src="/video/bespoke-process.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OUR ORIGIN — Full-bleed parallax sourcing story
═══════════════════════════════════════════════════════════════ */

function OriginSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      {/* Full-bleed parallax image */}
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Image
            src="/images/gallery/IMG_1130.JPG"
            alt="Fine gemstones sourced from around the world"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                }}
              >
                Our Origin
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                }}
              >
                From Mine to{" "}
                <span className="italic text-gold">Masterpiece</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-16 h-[1px] bg-gold mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/60 text-base leading-relaxed mb-6"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                Matt sources directly from the world&apos;s finest mines and
                cutting houses — from the sapphire fields of Sri Lanka to the
                emerald deposits of Colombia. No middlemen. No markups. Just
                extraordinary stones at honest prices.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/50 text-sm leading-relaxed mb-10"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                Every stone is evaluated in person, certified by the world&apos;s
                leading gemological laboratories, and presented to you with
                complete transparency on origin, treatment, and value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link
                  href="/about"
                  className="btn-gold-shimmer inline-block px-8 py-3 text-[11px] tracking-[0.25em] uppercase text-gold border border-gold/40 hover:bg-gold hover:text-white transition-all duration-500"
                  style={{
                    fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  }}
                >
                  Our Story
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BEHIND THE CRAFT — Video clips section
═══════════════════════════════════════════════════════════════ */

function BehindTheCraftSection() {
  const craftVideos = [
    { src: "/video/craft-1.mp4", label: "The Art of Selection" },
    { src: "/video/craft-2.mp4", label: "Precision & Detail" },
  ];

  return (
    <section className="py-32 bg-champagne">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Up Close
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-charcoal text-4xl md:text-5xl tracking-tight mb-6"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Behind the Craft
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            An intimate look at the stones and the process that brings them to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {craftVideos.map((vid, i) => (
            <motion.div
              key={vid.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative overflow-hidden border border-gold/10 bg-cream group"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src={vid.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <p
                className="absolute bottom-4 left-5 text-white/80 text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {vid.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS — Client stories with elegant cards
═══════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            In Their Words
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-charcoal text-4xl md:text-5xl tracking-tight"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Client Stories
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ perspective: 800 }}
              className="relative p-8 lg:p-10 border border-charcoal/5 hover:border-gold/20 transition-all duration-700 group"
            >
              {/* Quote mark */}
              <span className="quote-mark">&ldquo;</span>

              <p
                className="relative text-charcoal/80 text-sm leading-relaxed mb-8 pt-8"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {t.quote}
              </p>

              <div className="w-8 h-[1px] bg-gold/30 mb-4 group-hover:w-12 transition-all duration-500" />

              <p
                className="text-charcoal text-sm mb-1"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                  fontSize: "16px",
                }}
              >
                {t.name}
              </p>
              <p
                className="text-muted text-[11px] tracking-[0.1em] mb-1"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {t.location}
              </p>
              <p
                className="text-gold/60 text-[10px] tracking-[0.15em] uppercase"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                }}
              >
                {t.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NEWSLETTER — Private Access email capture
═══════════════════════════════════════════════════════════════ */

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative gold line patterns */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-2xl mx-auto px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={scaleIn}
            className="text-gold/50 text-[11px] tracking-[0.5em] uppercase block mb-6"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Exclusive
          </motion.span>
          <motion.h2
            variants={scaleIn}
            className="text-white text-3xl md:text-4xl tracking-tight mb-4"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Private Access
          </motion.h2>
          <motion.p
            variants={scaleIn}
            className="text-white/40 text-sm leading-relaxed mb-10"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            Be the first to see new acquisitions, rare finds, and private
            collection events. Reserved for our inner circle.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4"
            >
              <p
                className="text-gold text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                }}
              >
                Welcome to the inner circle. We&apos;ll be in touch.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              custom={3}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input flex-1 px-5 py-3.5 bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-all duration-500"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              />
              <button
                type="submit"
                className="btn-gold-shimmer px-8 py-3.5 bg-gold text-white text-[11px] tracking-[0.2em] uppercase hover:bg-gold/90 transition-all duration-500"
                style={{
                  fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                  fontWeight: 400,
                }}
              >
                Join
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM — Inquiry form (existing, refined)
═══════════════════════════════════════════════════════════════ */

function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-ivory">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="w-16 h-[1px] bg-gold mx-auto mb-8"
          />
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-charcoal text-4xl md:text-5xl tracking-tight mb-4"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Begin the Conversation
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            Tell us what you&apos;re looking for — we source stones globally and
            work entirely to your specifications.
          </motion.p>
        </motion.div>

        <InquiryForm />
      </div>
    </section>
  );
}

/* ─────────── Inquiry Form ─────────── */

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    stoneInterest: "",
    budgetRange: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = (field: string, value: string) => {
    const newErrors = { ...errors };
    if (field === "name" && !value.trim())
      newErrors.name = "Full name is required.";
    else if (field === "name") delete newErrors.name;

    if (field === "phone" && !value.trim())
      newErrors.phone = "Phone number is required.";
    else if (field === "phone") delete newErrors.phone;

    if (field === "email") {
      if (!value.trim()) newErrors.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        newErrors.email = "Please enter a valid email.";
      else delete newErrors.email;
    }

    if (field === "stoneInterest" && !value)
      newErrors.stoneInterest = "Please select a stone type.";
    else if (field === "stoneInterest") delete newErrors.stoneInterest;

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.stoneInterest)
      newErrors.stoneInterest = "Please select a stone type.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xnjgpbko", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          _replyto: formData.email,
          stoneInterest: formData.stoneInterest,
          budgetRange: formData.budgetRange || "Not specified",
          message: formData.message || "(none)",
          _subject: `New Inquiry — ${formData.stoneInterest} — ${formData.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-[1px] bg-gold mx-auto mb-8" />
        <h3
          className="text-charcoal text-3xl mb-4"
          style={{
            fontFamily:
              "var(--font-display), 'Cormorant Garamond', Georgia, serif",
          }}
        >
          Thank You
        </h3>
        <p
          className="text-muted"
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          Thank you. Matt will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border ${
      errors[field] ? "border-red-400" : "border-charcoal/10"
    } text-charcoal text-sm focus:outline-none focus:border-gold transition-colors duration-500`;

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 text-sm">
          Something went wrong. Please call us at 786-230-1333 or email
          matt@thefinediamond.com directly.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            onBlur={(e) => validate("name", e.target.value)}
            className={inputClass("name")}
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            onBlur={(e) => validate("phone", e.target.value)}
            className={inputClass("phone")}
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
            placeholder="(000) 000-0000"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onBlur={(e) => validate("email", e.target.value)}
            className={inputClass("email")}
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="stoneInterest"
            className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Stone Interest *
          </label>
          <select
            id="stoneInterest"
            required
            value={formData.stoneInterest}
            onChange={(e) => {
              setFormData({ ...formData, stoneInterest: e.target.value });
              validate("stoneInterest", e.target.value);
            }}
            onBlur={(e) => validate("stoneInterest", e.target.value)}
            className={`${inputClass("stoneInterest")} appearance-none`}
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            <option value="">Select a stone type</option>
            <option value="Diamond">Diamond</option>
            <option value="Sapphire">Sapphire</option>
            <option value="Emerald">Emerald</option>
            <option value="Ruby">Ruby</option>
            <option value="Alexandrite">Alexandrite</option>
            <option value="Tanzanite">Tanzanite</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
          {errors.stoneInterest && (
            <p className="text-red-400 text-xs mt-1">
              {errors.stoneInterest}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="budgetRange"
          className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
          }}
        >
          Budget Range
        </label>
        <select
          id="budgetRange"
          value={formData.budgetRange}
          onChange={(e) =>
            setFormData({ ...formData, budgetRange: e.target.value })
          }
          className={`${inputClass("budgetRange")} appearance-none`}
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
          }}
        >
          <option value="">Prefer not to say</option>
          <option value="Under $10,000">Under $10,000</option>
          <option value="$10,000 – $50,000">$10,000 – $50,000</option>
          <option value="$50,000 – $200,000">$50,000 – $200,000</option>
          <option value="$200,000+">$200,000+</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={inputClass("message")}
          style={{
            fontFamily: "var(--font-body), 'Montserrat', sans-serif",
          }}
          placeholder="Tell us what you're looking for — we source stones globally and work entirely to your specifications."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold-shimmer bg-gold text-white px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-gold/90 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed glow-pulse"
        style={{
          fontFamily: "var(--font-body), 'Montserrat', sans-serif",
          fontWeight: 400,
        }}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </motion.form>
  );
}
