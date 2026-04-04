"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  index: number;
  total: number;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon,
  index,
  total,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gold/30" />
      )}

      {/* Number circle */}
      <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center mb-6 relative bg-white">
        <span className="text-3xl">{icon}</span>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
          {number}
        </span>
      </div>

      <h3 className="font-heading text-navy text-xl mb-3">{title}</h3>
      <p className="text-gray text-sm leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  );
}
