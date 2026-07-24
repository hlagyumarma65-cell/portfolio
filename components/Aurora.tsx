"use client";

import { motion } from "motion/react";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[150px]"
        animate={{
          x: [0, -70, 30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </div>
  );
}