"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 16, className, once = true }: RevealProps) {
  const reduceMotion = useSafeReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: reduceMotion ? { opacity: 0.55 } : { opacity: 0.55, y },
        show: { opacity: 1, y: 0 },
      }}
      transition={
        reduceMotion
          ? { duration: 0.18, ease: "easeOut" }
          : { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, y = 12 }: { children: ReactNode; className?: string; y?: number }) {
  const reduceMotion = useSafeReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? { opacity: 0.55 } : { opacity: 0.55, y },
        show: {
          opacity: 1,
          y: 0,
          transition: reduceMotion
            ? { duration: 0.18, ease: "easeOut" }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
