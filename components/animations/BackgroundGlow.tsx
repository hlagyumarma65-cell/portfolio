"use client";

import { motion } from "motion/react";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[140px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />
    </>
  );
}