"use client";

import { motion } from "motion/react";

export default function HGBot() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex flex-col items-center"
    >
      {/* Head */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-cyan-400 bg-zinc-900 shadow-[0_0_30px_#22d3ee66]">

        {/* Left Eye */}
        <motion.div
          animate={{
            scaleY: [1, 0.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-6 h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"
        />

        {/* Right Eye */}
        <motion.div
          animate={{
            scaleY: [1, 0.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute right-6 h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"
        />

        {/* Mouth */}
        <div className="absolute bottom-5 h-1.5 w-8 rounded-full bg-cyan-400" />

        {/* Antenna */}
        <motion.div
          animate={{
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="absolute -top-8 h-8 w-1 rounded-full bg-cyan-400 origin-bottom"
        >
          <div className="-mt-1 ml-[-4px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]" />
        </motion.div>
      </div>

      {/* Body */}
      <div className="relative mt-3 h-24 w-20 rounded-2xl border-4 border-cyan-400 bg-zinc-900 shadow-[0_0_25px_#22d3ee44]">

        {/* Chest Light */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-8 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]"
        />

        {/* Left Arm */}
        <motion.div
          animate={{
            rotate: [25, 55, 25],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className="absolute -left-6 top-4 h-12 w-2 origin-top rounded-full bg-cyan-400"
        />

        {/* Right Arm */}
        <motion.div
          animate={{
            rotate: [-25, -55, -25],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className="absolute -right-6 top-4 h-12 w-2 origin-top rounded-full bg-cyan-400"
        />

        {/* Left Leg */}
        <motion.div
          animate={{
            rotate: [15, -15, 15],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className="absolute -bottom-10 left-4 h-10 w-2 origin-top rounded-full bg-cyan-400"
        />

        {/* Right Leg */}
        <motion.div
          animate={{
            rotate: [-15, 15, -15],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className="absolute -bottom-10 right-4 h-10 w-2 origin-top rounded-full bg-cyan-400"
        />
      </div>

      {/* Shadow */}
      <motion.div
        animate={{
          scaleX: [1, 0.8, 1],
          opacity: [0.35, 0.2, 0.35],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="mt-12 h-3 w-24 rounded-full bg-cyan-900/30 blur-md"
      />
    </motion.div>
  );
}