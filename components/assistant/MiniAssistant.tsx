"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAssistant } from "./useAssistant";

export default function MiniAssistant() {
  const { state, message, resetAssistant } = useAssistant();
  const [mounted, setMounted] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isInteracting = state !== "idle";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none select-none">
      {/* Speech / HUD Holographic Dialogue Bubble */}
      <AnimatePresence>
        {isInteracting && message && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto mb-3 max-w-xs sm:max-w-sm rounded-2xl border border-cyan-400/40 bg-[#091122]/90 p-4 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-xl"
          >
            {/* Header / Protocol tag */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-300 uppercase">
                  {message.title || "AI ASSISTANT"}
                </span>
              </div>
              <button
                onClick={resetAssistant}
                className="text-gray-400 hover:text-cyan-300 text-xs transition"
                aria-label="Close assistant message"
              >
                ✕
              </button>
            </div>

            {/* Message Body */}
            <div className="space-y-1 font-mono">
              <p className="text-xs sm:text-sm font-semibold text-white">
                {message.status}
              </p>
              {message.subtext && (
                <p className="text-[11px] text-cyan-300/80 leading-relaxed">
                  {message.subtext}
                </p>
              )}
            </div>

            {/* Scanline / Glow Accent */}
            <div className="scan-line opacity-30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini Companion Robot Drone Body */}
      <motion.div
        animate={{
          y: isInteracting ? [0, -6, 0] : [0, -8, 0],
          rotate: isInteracting ? [0, 2, -2, 0] : [0, 1, -1, 0],
        }}
        transition={{
          duration: isInteracting ? 1.8 : 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-auto relative cursor-pointer"
        onClick={() => setMinimized((prev) => !prev)}
        title="AI Companion Assistant — Click to toggle"
      >
        {/* Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg" />

        <svg
          viewBox="0 0 80 80"
          className="relative w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        >
          <defs>
            <linearGradient id="miniBotBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="miniVisor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Left Wing / Thruster */}
          <motion.path
            d="M18 42 L6 36 L12 48 Z"
            fill="#1e293b"
            stroke="#38bdf8"
            strokeWidth="1"
            animate={{ rotate: isInteracting ? [-4, 4, -4] : [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "18px 42px" }}
          />

          {/* Right Wing / Thruster */}
          <motion.path
            d="M62 42 L74 36 L68 48 Z"
            fill="#1e293b"
            stroke="#38bdf8"
            strokeWidth="1"
            animate={{ rotate: isInteracting ? [4, -4, 4] : [2, -2, 2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "62px 42px" }}
          />

          {/* Spherical Aero Chassis */}
          <circle
            cx="40"
            cy="40"
            r="24"
            fill="url(#miniBotBody)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          {/* Cybernetic Visor Screen */}
          <rect
            x="24"
            y="32"
            width="32"
            height="16"
            rx="8"
            fill="#050b14"
            stroke="#22d3ee"
            strokeWidth="1"
          />

          {/* Dual Visor Eyes / Scanner */}
          <motion.ellipse
            cx="33"
            cy="40"
            rx="3.5"
            ry={isInteracting ? 4 : 3}
            fill="#67e8f9"
            animate={{
              scaleY: [1, 1, 0.1, 1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              times: [0, 0.45, 0.5, 0.55, 1],
            }}
          />

          <motion.ellipse
            cx="47"
            cy="40"
            rx="3.5"
            ry={isInteracting ? 4 : 3}
            fill="#67e8f9"
            animate={{
              scaleY: [1, 1, 0.1, 1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              times: [0, 0.45, 0.5, 0.55, 1],
            }}
          />

          {/* Top Crown Sensor Light */}
          <circle
            cx="40"
            cy="16"
            r="2.5"
            fill={isInteracting ? "#34d399" : "#38bdf8"}
          />

          {/* Bottom Propulsion Glow */}
          <motion.ellipse
            cx="40"
            cy="65"
            rx="8"
            ry="2.5"
            fill="#38bdf8"
            opacity="0.6"
            animate={{ scaleX: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
