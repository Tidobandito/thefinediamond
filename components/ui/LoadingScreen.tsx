'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('tfd-loaded')) {
      setShow(true);
      sessionStorage.setItem('tfd-loaded', '1');
      const timer = setTimeout(() => setShow(false), 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <h1
              className="text-3xl tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              THE FINE DIAMOND
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] bg-gold mx-auto mt-6"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
