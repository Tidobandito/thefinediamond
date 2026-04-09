"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function DiamondsPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[1px] bg-gold mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Search &amp; Discover
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-charcoal text-5xl md:text-6xl tracking-tight mb-6"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            }}
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-muted max-w-xl mx-auto text-base leading-relaxed mb-4"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            Browse our full inventory of diamonds, gemstones, fine jewelry, and
            bespoke pieces. Use the search tools below to find exactly what
            you&apos;re looking for.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-gold/50 text-[11px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "var(--font-body), 'Montserrat', sans-serif",
            }}
          >
            Can&apos;t find what you need? Call{" "}
            <a
              href="tel:7862301333"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              786-230-1333
            </a>{" "}
            for a private consultation
          </motion.p>
        </div>
      </section>

      {/* JewelerShowcase Search Engine Embed */}
      <section className="pb-16 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-full border border-charcoal/5 overflow-hidden"
          >
            <iframe
              src="https://thefinediamond-frame.jewelershowcase.com"
              title="The Fine Diamond — Gemstone Search Engine"
              width="100%"
              height="1500"
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              loading="lazy"
              className="w-full border-0"
              style={{ minHeight: "1500px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-12 h-[1px] bg-gold mx-auto mb-8"
            />
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-charcoal text-3xl md:text-4xl tracking-tight mb-4"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              }}
            >
              Looking for Something Specific?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted text-base leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              Matt sources stones globally and has access to inventory far
              beyond what&apos;s shown here. Tell us what you&apos;re looking
              for and we&apos;ll find it.
            </motion.p>
            <motion.a
              variants={fadeUp}
              custom={3}
              href="/contact"
              className="btn-gold-shimmer inline-block px-10 py-4 text-[12px] tracking-[0.25em] uppercase bg-gold text-white hover:bg-gold/90 transition-all duration-500 glow-pulse"
              style={{
                fontFamily: "var(--font-body), 'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              Request a Private Search
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
