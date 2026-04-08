'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shimmerX, setShimmerX] = useState(50);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 12);
    setRotateY(x * 12);
    setShimmerX(((e.clientX - rect.left) / rect.width) * 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  // Disable tilt on touch devices
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative group ${className || ''}`}
    >
      {children}
      {/* Shimmer overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${shimmerX}% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}
