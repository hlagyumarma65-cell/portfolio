"use client";

import { motion } from "motion/react";

const lines = [
  "Initializing HG Bot...",
  "Loading Portfolio...",
  "Loading Projects...",
  "Loading Skills...",
  "Connecting AI Modules...",
  "System Ready ✓",
];

export default function BootText() {
  return (
    <div className="mt-10 flex flex-col items-center font-mono text-sm md:text-base">
      {lines.map((line, index) => (
        <motion.p
          key={line}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.6,
            duration: 0.4,
          }}
          className="mb-2 text-cyan-300"
        >
          {"> "} {line}
        </motion.p>
      ))}
    </div>
  );
}