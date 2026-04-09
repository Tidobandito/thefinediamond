"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/diamonds", label: "Diamonds" },
  { href: "/gallery", label: "Gallery" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/about", label: "Our Story" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gold/10"
            : "bg-white"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left"
        />
        <nav className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="font-[var(--font-display)] text-[20px] tracking-[0.35em] text-charcoal group-hover:text-gold transition-colors duration-500 uppercase" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}>
                THE FINE DIAMOND
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-muted hover:text-charcoal text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 py-2 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="tel:+17862301333"
                className="text-muted hover:text-charcoal text-[11px] tracking-[0.15em] transition-colors duration-500"
              >
                786-230-1333
              </a>
              <Link
                href="/contact"
                className="btn-gold-shimmer relative overflow-hidden border border-gold text-gold px-7 py-3 text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-white transition-all duration-500 group"
              >
                <span className="relative z-10">Inquire</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-charcoal p-3"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-7 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={isMobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1px] bg-charcoal origin-left"
                />
                <motion.span
                  animate={isMobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  className="w-full h-[1px] bg-charcoal"
                />
                <motion.span
                  animate={isMobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1px] bg-charcoal origin-left"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <nav className="relative z-10 flex flex-col items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-charcoal text-4xl tracking-[0.15em] hover:text-gold transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="text-charcoal text-4xl tracking-[0.15em] hover:text-gold transition-colors duration-500"
                  style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <a
                  href="tel:+17862301333"
                  className="text-gold text-lg tracking-[0.15em]"
                >
                  786-230-1333
                </a>
              </motion.div>
            </nav>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-muted text-[10px] tracking-[0.3em] uppercase">
                Las Vegas, Nevada
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
