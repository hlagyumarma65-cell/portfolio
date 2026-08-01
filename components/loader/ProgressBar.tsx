"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface ProgressBarProps {
  duration?: number;
  className?: string;
  onComplete?: () => void;
}

export default function ProgressBar({
  duration = 5000,
  className = "",
  onComplete,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      const value = Math.round(eased * 100);

      setProgress(value);

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      } else if (onComplete) {
        onComplete();
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-widest text-cyan-300/80 sm:text-xs">
        <span>INITIALIZING SYSTEM</span>
        <span>{progress}%</span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full border border-cyan-500/30 bg-cyan-950/40">
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-white"
          style={{ width: `${progress}%` }}
        >
          <motion.div
            className="absolute inset-y-0 right-0 w-6 bg-white/70 blur-sm"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}