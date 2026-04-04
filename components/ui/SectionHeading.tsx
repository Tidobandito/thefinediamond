"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-6">
          {label}
        </span>
      )}
      <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <>
          <div
            className={`w-16 h-[1px] bg-gold/40 mt-6 mb-6 ${
              align === "center" ? "mx-auto" : ""
            }`}
          />
          <p
            className={`text-white/30 text-base max-w-xl font-light leading-relaxed ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </>
      )}
    </motion.div>
  );
}
