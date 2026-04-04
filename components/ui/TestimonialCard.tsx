"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/types";

export default function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: Testimonial;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#0A0A0C] p-10 md:p-12 flex flex-col"
    >
      {/* Gold accent line */}
      <div className="w-8 h-[1px] bg-gold/40 mb-8" />

      {/* Quote */}
      <blockquote className="text-white/40 text-[15px] leading-[1.9] mb-8 flex-1 font-light italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="pt-6 border-t border-white/[0.04]">
        <p className="font-heading text-white/80 text-sm tracking-wide">
          {testimonial.author}
        </p>
        {testimonial.location && (
          <p className="text-white/20 text-xs mt-1">{testimonial.location}</p>
        )}
        {testimonial.product && (
          <p className="text-gold/30 text-[10px] tracking-[0.2em] uppercase mt-2">
            {testimonial.product}
          </p>
        )}
      </div>
    </motion.div>
  );
}
