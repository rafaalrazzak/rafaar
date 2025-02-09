'use client';

import { motion, useAnimation, type Variants } from 'framer-motion';
import type React from 'react';
import { useEffect, useRef } from 'react';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={revealVariants}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};
