"use client";

import { motion } from "motion/react";

export default function Desk() {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* Desk Surface */}
      <div className="relative w-full h-12 bg-gradient-to-r from-[#0c1322] via-[#131d33] to-[#0c1322] rounded-t-xl border-t border-cyan-500/30 shadow-[0_-4px_25px_rgba(34,211,238,0.1)] flex items-center justify-between px-8">
        {/* Subtle Edge Glow */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Small Tech Device / Audio Interface on Left */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-5 bg-[#090e1a] rounded border border-cyan-500/20 flex items-center justify-around px-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" />
            <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
            <span className="w-1 h-1 rounded-full bg-blue-400/60" />
          </div>

          {/* Minimal Ceramic Mug */}
          <div className="relative w-5 h-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-sm border border-slate-700/60 flex flex-col items-center">
            {/* Handle */}
            <div className="absolute -left-1.5 top-1 w-2 h-3 border-l-2 border-y-2 border-slate-700/60 rounded-l-sm" />
            {/* Steam animation */}
            <motion.div
              animate={{ y: [-2, -8], opacity: [0.6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              className="absolute -top-2 w-1.5 h-2 bg-white/20 rounded-full blur-[1px]"
            />
          </div>
        </div>

        {/* Center: Desk Mat + Mechanical Keyboard */}
        <div className="relative w-72 sm:w-80 h-9 bg-[#080d16] rounded border border-cyan-500/20 flex items-center justify-center shadow-inner">
          {/* Mechanical Keyboard Body */}
          <div className="relative w-48 sm:w-52 h-6 bg-[#0f172a] rounded border border-cyan-400/30 flex items-center justify-center px-1 shadow-[0_0_10px_rgba(34,211,238,0.15)]">
            {/* Keyboard Key Rows simulation */}
            <div className="w-full grid grid-cols-12 gap-0.5 opacity-80">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 bg-cyan-950/80 rounded-[1px] border border-cyan-400/20"
                />
              ))}
            </div>

            {/* Subtle RGB Underglow */}
            <div className="absolute -bottom-0.5 inset-x-2 h-[2px] bg-cyan-400/50 blur-[2px]" />
          </div>

          {/* Ergonomic Gaming / Dev Mouse */}
          <div className="absolute right-4 w-4 h-6 bg-[#0f172a] rounded-full border border-cyan-400/30 flex flex-col items-center pt-1 shadow-[0_0_8px_rgba(34,211,238,0.2)]">
            <div className="w-0.5 h-1.5 bg-cyan-400 rounded-full" />
          </div>
        </div>

        {/* Small Futuristic Mini Plant on Right */}
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5 bg-[#0f172a] rounded-full border border-emerald-500/30 flex items-center justify-center">
            <span className="w-2 h-3 bg-emerald-400/80 rounded-t-full shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
          </div>
        </div>
      </div>

      {/* Desk Leg / Structure */}
      <div className="w-full flex justify-between px-16 h-8">
        <div className="w-2.5 h-full bg-gradient-to-b from-[#131d33] to-[#080d16] border-x border-cyan-500/10" />
        <div className="w-2.5 h-full bg-gradient-to-b from-[#131d33] to-[#080d16] border-x border-cyan-500/10" />
      </div>
    </div>
  );
}
