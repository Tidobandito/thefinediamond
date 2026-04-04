"use client";

import { motion } from "framer-motion";

interface ImageWithOverlayProps {
  children: React.ReactNode;
  gradient?: "bottom" | "full" | "left";
  className?: string;
  bgColor?: string;
}

export default function ImageWithOverlay({
  children,
  gradient = "bottom",
  className = "",
  bgColor = "navy",
}: ImageWithOverlayProps) {
  const gradients = {
    bottom: `bg-gradient-to-t from-${bgColor} via-${bgColor}/50 to-transparent`,
    full: `bg-${bgColor}/60`,
    left: `bg-gradient-to-r from-${bgColor} via-${bgColor}/60 to-transparent`,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${gradients[gradient]} z-10`} />
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.section>
  );
}
