"use client";

import { motion, AnimatePresence } from "motion/react";

interface CursorClickEffectProps {
  x: number;
  y: number;
  show: boolean;
}

export default function CursorClickEffect({
  x,
  y,
  show,
}: CursorClickEffectProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0.9,
          }}
          animate={{
            scale: 4,
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="pointer-events-none fixed z-[9998] h-10 w-10 rounded-full border-2 border-cyan-400"
          style={{
            left: x - 20,
            top: y - 20,
            boxShadow:
              "0 0 25px rgba(34,211,238,.9), 0 0 60px rgba(34,211,238,.5)",
          }}
        />
      )}
    </AnimatePresence>
  );
}