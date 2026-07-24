"use client";

import { motion } from "motion/react";

interface CursorRingProps {
  x: number;
  y: number;
}

export default function CursorRing({
  x,
  y,
}: CursorRingProps) {
  return (
    <motion.div
      className="fixed h-5 w-5 rounded-full border border-cyan-400/80 pointer-events-none z-[9998]"
      animate={{
        x: x - 8,
        y: y - 8,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
    />
  );
}