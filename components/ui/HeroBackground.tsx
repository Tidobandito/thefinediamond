'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Animated hero background — Full-bleed gemstone image with
 * cinematic Ken Burns motion, liquid gold shimmer, and radial light pulses.
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Hero image with continuous slow zoom + drift */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.08, 1.04, 1.1, 1],
          x: [0, -15, 10, -5, 0],
          y: [0, -10, 5, -8, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/gallery/IMG_5043.JPG"
          alt="Pink diamond ring by The Fine Diamond"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Radial light pulse from center — simulates stone brilliance */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.25) 0%, rgba(201,168,76,0.08) 30%, transparent 60%)',
        }}
      />

      {/* Second radial pulse — offset timing for depth */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          background: 'radial-gradient(circle at 55% 40%, rgba(201,168,76,0.2) 0%, transparent 45%)',
        }}
      />

      {/* Liquid gold shimmer sweep — diagonal */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(105deg, transparent 20%, rgba(201,168,76,0.12) 35%, rgba(255,255,255,0.08) 42%, rgba(201,168,76,0.12) 49%, transparent 64%)',
        }}
      />

      {/* Second shimmer — opposite direction, slower */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: ['200%', '-100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut',
          delay: 4,
        }}
        style={{
          background: 'linear-gradient(75deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(201,168,76,0.08) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
        }}
      />

      {/* Warm gold glow — bottom corners for luxury framing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(201,168,76,0.06) 0%, transparent 50%)',
        }}
      />

      {/* Top vignette for header readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%)',
        }}
      />

      {/* Edge vignette for cinematic framing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
        }}
      />
    </div>
  );
}
