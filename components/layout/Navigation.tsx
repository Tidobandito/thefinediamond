"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/diamonds", label: "Diamonds" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "Our Story" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="font-heading text-[22px] tracking-[0.35em] text-white group-hover:text-gold transition-colors duration-500">
                THE FINE DIAMOND
              </span>
            </Link>

            {/* Desktop Nav — center */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-white/50 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/contact"
                className="text-white/50 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-colors duration-500"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="relative overflow-hidden border border-gold/40 text-gold px-7 py-3 text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-500 group"
              >
                <span className="relative z-10">Schedule a Visit</span>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold transition-colors duration-500" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-3"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-7 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={isMobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1px] bg-white origin-left"
                />
                <motion.span
                  animate={isMobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  className="w-full h-[1px] bg-white"
                />
                <motion.span
                  animate={isMobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1px] bg-white origin-left"
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[100px]" />

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
                    className="font-heading text-white text-4xl tracking-[0.15em] hover:text-gold transition-colors duration-500"
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
                  className="font-heading text-white text-4xl tracking-[0.15em] hover:text-gold transition-colors duration-500"
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
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="border border-gold/40 text-gold px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
                >
                  Schedule a Visit
                </Link>
              </motion.div>
            </nav>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
                Birmingham, Alabama
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
