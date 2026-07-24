"use client";

import { AnimatePresence, motion } from "motion/react";

interface CinematicTransitionProps {
  show: boolean;
}

export default function CinematicTransition({
  show,
}: CinematicTransitionProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]"
        >
          {/* Background Glow */}
          <motion.div
            className="absolute h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[160px]"
            animate={{
              scale: [0.8, 1.2, 1],
              opacity: [0.3, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Content */}
          <div className="relative z-10 text-center">

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-cyan-300 text-sm mb-8"
            >
              👋 Welcome To My Portfolio
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.2,
              }}
              transition={{
                duration: 1,
              }}
              className="text-6xl md:text-8xl font-extrabold"
            >
              <span className="text-white">Hla </span>
              <span className="text-cyan-400">Gyo U Marma</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-xl md:text-2xl text-cyan-300 tracking-widest"
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "220px" }}
              transition={{ delay: 1, duration: 1 }}
              className="mx-auto mt-10 h-1 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}