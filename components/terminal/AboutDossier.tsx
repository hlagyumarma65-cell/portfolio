"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  FaMicrochip,
  FaMemory,
  FaNetworkWired,
  FaShieldAlt,
  FaUserAstronaut,
  FaTerminal,
} from "react-icons/fa";

export default function AboutDossier() {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background Ambience */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none" />

      {/* Main Dossier Chassis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#070d18]/90 shadow-[0_0_40px_rgba(34,211,238,0.2)] backdrop-blur-2xl"
      >
        {/* Chassis Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 bg-[#0d1627] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-ping" />
            <span className="font-mono text-xs font-bold tracking-widest text-cyan-300">
              AI TELEMETRY // DOSSIER
            </span>
          </div>

          <button
            onClick={() => setShowPhoto((prev) => !prev)}
            className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-mono text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
          >
            {showPhoto ? (
              <>
                <FaTerminal className="text-xs" />
                <span>Console View</span>
              </>
            ) : (
              <>
                <FaUserAstronaut className="text-xs" />
                <span>Photo View</span>
              </>
            )}
          </button>
        </div>

        {/* Chassis Body */}
        <div className="p-6 font-mono text-xs text-gray-300 relative min-h-[340px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!showPhoto ? (
              <motion.div
                key="dossier-view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* ID Tag */}
                <div className="p-3 rounded-xl border border-cyan-500/20 bg-cyan-950/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Operative</span>
                    <span className="text-sm font-bold text-white tracking-wider">
                      HLA GYO U MARMA
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>

                {/* Telemetry Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                      <FaMicrochip />
                      <span className="text-[10px] text-gray-400">CORE ENGINE</span>
                    </div>
                    <span className="font-bold text-white text-xs sm:text-sm">
                      Next.js 16 • React 19
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                      <FaNetworkWired />
                      <span className="text-[10px] text-gray-400">BACKEND API</span>
                    </div>
                    <span className="font-bold text-white text-xs sm:text-sm">
                      Django • Python 3
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                      <FaShieldAlt />
                      <span className="text-[10px] text-gray-400">ACADEMIC</span>
                    </div>
                    <span className="font-bold text-white text-xs sm:text-sm">
                      CST Diploma (2028)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-1.5 text-purple-400 mb-1">
                      <FaMemory />
                      <span className="text-[10px] text-gray-400">OPTIMIZATION</span>
                    </div>
                    <span className="font-bold text-white text-xs sm:text-sm">
                      99.9% Uptime Ready
                    </span>
                  </div>
                </div>

                {/* Real-time Status Log */}
                <div className="pt-2 border-t border-white/[0.06] text-[11px] text-gray-400 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>&gt; Neural Pipeline:</span>
                    <span className="text-cyan-300">Synchronized</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>&gt; Code Efficiency:</span>
                    <span className="text-emerald-300">Grade A (Strict TS)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>&gt; Deploy Target:</span>
                    <span className="text-sky-300">Global Edge (Vercel)</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="photo-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-4"
              >
                <div className="relative h-56 w-56 sm:h-60 sm:w-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.5)]">
                  <Image
                    src="/images/about.png"
                    alt="About Hla Gyo U Marma"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-mono text-xs text-cyan-300 font-semibold tracking-wider">
                  BIOMETRIC IDENTITY: HLA GYO U MARMA
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scanline */}
          <div className="scan-line opacity-25" />
        </div>
      </motion.div>
    </div>
  );
}
