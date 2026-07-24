"use client";

import { motion } from "motion/react";

interface CursorDotProps {
  x: number;
  y: number;
}

export default function CursorDot({
  x,
  y,
}: CursorDotProps) {
  return (
    <motion.div
      className="fixed h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] pointer-events-none z-[9999]"
      animate={{
        x: x - 6,
        y: y - 6,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
      }}
    />
  );
}