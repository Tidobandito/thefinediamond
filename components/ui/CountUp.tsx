'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface CountUpProps {
  value: string; // e.g., "01", "02", "03"
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = useState('00');
  const [done, setDone] = useState(false);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // Slower for more drama
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic — slower deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);

      if (current !== start) {
        start = current;
        setDisplay(current.toString().padStart(2, '0'));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  const digits = display.split('');

  return (
    <span ref={ref} className={`${className} inline-flex overflow-hidden`}>
      <AnimatePresence mode="popLayout">
        {digits.map((digit, i) => (
          <motion.span
            key={`${i}-${digit}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className="inline-block"
          >
            {digit}
          </motion.span>
        ))}
      </AnimatePresence>
      {/* Gold flash on completion */}
      {done && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gold/10 rounded-full pointer-events-none"
          style={{ filter: 'blur(20px)' }}
        />
      )}
    </span>
  );
}
