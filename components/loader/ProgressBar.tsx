"use client";

import { motion } from "motion/react";

export default function ProgressBar() {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm font-mono text-cyan-300">
        <span>Loading...</span>
        <span>100%</span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-cyan-950">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 shadow-[0_0_20px_#22d3ee]"
        />
      </div>
    </div>
  );
}