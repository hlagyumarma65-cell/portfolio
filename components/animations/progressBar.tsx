"use client";

import { motion } from "motion/react";

type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="w-80 h-3 rounded-full bg-zinc-800 overflow-hidden mt-8">
      <motion.div
        className="h-full rounded-full bg-cyan-400"
        animate={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}