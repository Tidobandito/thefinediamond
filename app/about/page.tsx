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

const journeySteps = [
  {
    number: "01",
    title: "Rough Stone",
    description:
      "Carefully selected rough diamonds sourced from trusted mines around the world, chosen for their exceptional potential and natural brilliance.",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80&auto=format",
  },
  {
    number: "02",
    title: "Expert Cutting",
    description:
      "Our master cutters analyze each stone with precision laser technology, applying exact cuts to maximize brilliance, fire, and scintillation.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format",
  },
  {
    number: "03",
    title: "Brilliant Diamond",
    description:
      "The finished gem — graded, certified by GIA, and ready to become the centerpiece of your custom design. Nature perfected by craft.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format",
  },
];

const traditionalChain = [
  { label: "Mining", markup: "+0%" },
  { label: "Dealer", markup: "+15%" },
  { label: "Manufacturer", markup: "+20%" },
  { label: "Wholesaler", markup: "+30%" },
  { label: "Retailer", markup: "+50-100%" },
  { label: "You", markup: null },
];

const facilities = [
  {
    title: "Cutting & Polishing",
    description:
      "State-of-the-art facilities equipped with precision laser technology and staffed by cutters with decades of experience.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80&auto=format",
  },
  {
    title: "Quality Control Lab",
    description:
      "Every stone passes rigorous inspection using advanced gemological instruments before earning our seal of approval.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format",
  },
  {
    title: "Design Studio",
    description:
      "Where concepts become reality. Our 3D CAD designers and master jewelers collaborate under one roof.",
    image:
      "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&q=80&auto=format",
  },
];

const teamMembers = [
  {
    name: "Team Member",
    role: "Master Gemologist",
    bio: "Over 20 years of experience in diamond grading and selection. GIA Graduate Gemologist.",
  },
  {
    name: "Team Member",
    role: "Lead Designer",
    bio: "Specializing in custom CAD design with a portfolio of over 2,000 bespoke pieces.",
  },
  {
    name: "Team Member",
    role: "Master Jeweler",
    bio: "Third-generation craftsman trained in both traditional and modern jewelry-making techniques.",
  },
];

export default function AboutPage() {
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
      <section
        ref={heroRef}
        className="relative h-[85vh] overflow-hidden bg-black"
      >
        {/* Background image with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=85&auto=format"
            alt="Diamond craftsmanship — precision cutting of a brilliant stone"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        </motion.div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[200px] pointer-events-none" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex items-end pb-24"
        >
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.5, delay: 0.6, ease }}
                className="h-[1px] bg-gold/40 mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease }}
                className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
              >
                Our Story
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1, ease }}
                className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              >
                From Mine to
                <br />
                Masterpiece
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3, ease }}
                className="text-white/35 text-base md:text-lg font-light leading-relaxed max-w-xl"
              >
                Every extraordinary diamond begins as a rough stone deep within
                the earth. Our story is the journey that transforms
                nature&apos;s raw beauty into something truly brilliant — and
                puts it directly in your hands.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════ THE DIAMOND JOURNEY ═══════════════════ */}
      <section className="relative py-32 bg-[#060608] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Section label */}
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
              The Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              The Diamond Journey
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
              From deep underground to the ring on your finger — a process
              guided by expertise at every step.
            </motion.p>
          </motion.div>

          {/* Journey cards */}
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] overflow-hidden">
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent" />

                    {/* Step number */}
                    <div className="absolute top-6 left-6">
                      <span className="text-gold/40 text-[11px] tracking-[0.5em] uppercase font-light">
                        Step {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-white/90 text-xl tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8">
                    <svg
                      className="w-5 h-5 text-gold/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY DIRECT MATTERS ═══════════════════ */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
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
              The Difference
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Why Direct Matters
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
              The traditional jewelry supply chain is full of middlemen. Each one
              adds cost — but not value. We skip them all.
            </motion.p>
          </motion.div>

          {/* Traditional Supply Chain */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-20"
          >
            <p className="text-white/20 text-[11px] tracking-[0.5em] uppercase text-center mb-10">
              Traditional Retail Model
            </p>

            <div className="relative bg-white/[0.02] border border-white/[0.04] p-8 md:p-12">
              {/* Chain links */}
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-0">
                {traditionalChain.map((step, index) => (
                  <div key={step.label} className="flex items-center">
                    <div
                      className={`relative px-4 py-4 md:px-6 md:py-5 text-center min-w-[100px] md:min-w-[130px] border ${
                        step.label === "You"
                          ? "border-white/20 bg-white/[0.04]"
                          : "border-white/[0.06] bg-white/[0.02]"
                      }`}
                    >
                      <p className="text-white/50 text-xs md:text-sm tracking-wide">
                        {step.label}
                      </p>
                      {step.markup && step.label !== "Mining" && (
                        <p className="text-red-400/80 text-[11px] mt-1.5 font-medium tracking-wide">
                          {step.markup}
                        </p>
                      )}
                      {step.label === "Mining" && (
                        <p className="text-white/20 text-[11px] mt-1.5 tracking-wide">
                          Base cost
                        </p>
                      )}
                    </div>
                    {index < traditionalChain.length - 1 && (
                      <svg
                        className="w-4 h-4 text-white/10 mx-1 md:mx-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Total markup callout */}
              <p className="text-red-400/50 text-center text-sm mt-8 tracking-wide">
                Up to 200%+ in markups before it reaches you
              </p>
            </div>
          </motion.div>

          {/* The Fine Diamond Model */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <p className="text-gold/60 text-[11px] tracking-[0.5em] uppercase text-center mb-10">
              The Fine Diamond Model
            </p>

            <div className="relative bg-white/[0.02] border border-gold/[0.12] p-8 md:p-12">
              {/* Gold glow behind */}
              <div className="absolute inset-0 bg-gold/[0.02] pointer-events-none" />

              <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                {/* Our Facilities */}
                <div className="px-10 py-6 border border-gold/20 bg-gold/[0.04] text-center min-w-[200px]">
                  <p className="font-heading text-gold/80 text-sm md:text-base tracking-wide">
                    Our Facilities
                  </p>
                  <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mt-2">
                    Cutting, Design & Craft
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-8 h-8 text-gold/40 rotate-90 md:rotate-0 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>

                {/* You */}
                <div className="px-10 py-6 border border-gold/40 bg-gold/[0.08] text-center min-w-[200px]">
                  <p className="font-heading text-white/90 text-sm md:text-base tracking-wide">
                    You
                  </p>
                  <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase mt-2">
                    Direct Savings
                  </p>
                </div>
              </div>

              {/* Savings callout */}
              <p className="relative text-gold/40 text-center text-sm mt-8 tracking-wide">
                Same quality. No unnecessary markups.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ OUR FACILITIES ═══════════════════ */}
      <section className="relative py-32 bg-[#060608] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[200px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
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
              Where It Happens
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Our Facilities
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
              Where precision meets artistry. A look inside the spaces where
              your diamond is shaped and your jewelry is crafted.
            </motion.p>
          </motion.div>

          {/* Facility cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease }}
                className="group"
              >
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] overflow-hidden">
                  {/* Image placeholder */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.02]">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-white/90 text-lg tracking-tight mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[400px] rounded-full bg-gold/[0.02] blur-[200px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
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
              The People
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Our Team
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
              Decades of combined expertise in gemology, design, and
              craftsmanship.
            </motion.p>
          </motion.div>

          {/* Team cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease }}
              >
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] overflow-hidden">
                  {/* Photo placeholder */}
                  <div className="relative aspect-[3/4] bg-white/[0.02] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full border border-white/[0.08] mx-auto flex items-center justify-center mb-3">
                        <svg
                          className="w-10 h-10 text-white/10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <p className="text-white/10 text-[10px] tracking-[0.3em] uppercase">
                        Photo Coming
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 text-center">
                    <h3 className="font-heading text-white/90 text-lg tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase mb-4">
                      {member.role}
                    </p>
                    <p className="text-white/30 text-sm font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-32 bg-[#060608] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.04] blur-[200px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-16 h-[1px] bg-gold/40 mx-auto mb-10"
            />

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Experience the Difference
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/30 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12"
            >
              See for yourself why buying direct means better quality, better
              design, and a better price. We&apos;d love to hear from you.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="inline-block px-12 py-4 bg-gold text-black text-[11px] tracking-[0.4em] uppercase font-medium transition-all duration-300 hover:bg-gold/90 hover:shadow-[0_0_40px_rgba(201,168,76,0.15)]"
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
