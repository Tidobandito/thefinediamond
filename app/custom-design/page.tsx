"use client";

import { motion } from "framer-motion";
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

export default function CustomDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.5, delay: 0.8, ease }}
              className="h-[1px] bg-gold mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease }}
              className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-8"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            >
              Custom CAD Design
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="text-navy text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              Your Vision,
              <br />
              <span className="italic text-gold">Realized</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease }}
              className="text-muted text-base md:text-lg leading-relaxed mb-12 max-w-xl"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
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
                className="btn-gold-shimmer inline-block px-10 py-4 text-[11px] tracking-[0.2em] uppercase bg-gold text-white hover:bg-gold/90 transition-all duration-300 glow-pulse"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 400 }}
              >
                Start Your Design
              </Link>
              <a
                href="#how-it-works"
                className="inline-block px-10 py-4 text-[11px] tracking-[0.2em] uppercase border border-navy/15 text-muted hover:border-gold hover:text-gold transition-all duration-300"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
              >
                See the Process
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
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
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            >
              The Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-navy text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              How It Works
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="w-16 h-[1px] bg-gold mx-auto mb-6"
            />
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-muted text-base leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Four stages from concept to creation. You stay involved at every step.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[1px] bg-gold/15" />

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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full border border-gold/30 bg-white flex items-center justify-center">
                    <span className="text-gold text-lg tracking-wider" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}>
                      {step.numeral}
                    </span>
                  </div>
                </div>

                <div
                  className={`pl-28 md:pl-0 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-16"
                      : "md:pl-16 md:ml-auto"
                  }`}
                >
                  <p className="text-gold/50 text-[11px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
                    Step {step.numeral}
                  </p>
                  <h3
                    className="text-navy text-2xl md:text-3xl tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-16 h-[1px] bg-gold mx-auto mb-8"
            />
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-navy text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              Ready to Create Something
              <br />
              <span className="italic text-gold">Extraordinary</span>?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted text-base md:text-lg leading-relaxed mb-14 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Whether you have a detailed sketch or just the spark of an idea,
              we&apos;ll bring it to life. Start a conversation with us today.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="btn-gold-shimmer inline-block px-12 py-5 text-[11px] tracking-[0.2em] uppercase bg-gold text-white hover:bg-gold/90 transition-all duration-300 glow-pulse"
                style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 400 }}
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
