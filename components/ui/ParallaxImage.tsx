'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number; // default 10 = moves 10% up/down
}

export default function ParallaxImage({ src, alt, className, intensity = 10 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ''}`}>
      <motion.div style={{ y }} className="h-full w-full scale-[1.2]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
