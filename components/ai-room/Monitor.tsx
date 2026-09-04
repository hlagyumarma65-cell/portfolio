"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Monitor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex items-end justify-center gap-3">
      {/* Soft Monitor Backglow (Atmospheric Cyan Glow) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* LEFT MONITOR: Code Editor / System Diagnostics */}
      <div className="relative w-48 sm:w-56 h-36 bg-[#0a0f1d] rounded-lg border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] flex flex-col overflow-hidden">
        {/* Bezel header */}
        <div className="h-4 bg-[#0d1527] px-2 flex items-center justify-between border-b border-cyan-500/20">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="font-mono text-[8px] text-cyan-400/60 tracking-wider">
            workspace.tsx
          </span>
        </div>

        {/* Code Content */}
        <div className="p-2 font-mono text-[9px] leading-tight text-gray-300 space-y-1 select-none">
          <div className="text-cyan-400/90 font-semibold">
            <span className="text-pink-400">const</span> agent ={" "}
            <span className="text-emerald-400">&apos;Autonomous-AI&apos;</span>;
          </div>
          <div className="text-gray-400 text-[8px]">
            &gt; Neural status: <span className="text-emerald-400">OPTIMAL</span>
          </div>
          <div className="text-gray-400 text-[8px]">
            &gt; Memory sync: <span className="text-cyan-300">99.8%</span>
          </div>
          <div className="text-gray-400 text-[8px]">
            &gt; Core: <span className="text-purple-300">Active</span>
          </div>

          {/* Simulated Code Lines with subtle pulse */}
          <div className="pt-1.5 space-y-1">
            <div className="h-1 w-3/4 bg-cyan-500/20 rounded" />
            <div className="h-1 w-1/2 bg-blue-500/25 rounded" />
            <div className="h-1 w-5/6 bg-purple-500/20 rounded" />
            <div className="h-1 w-2/3 bg-cyan-400/25 rounded" />
          </div>
        </div>

        {/* Scan line effect */}
        <div className="scan-line opacity-40" />

        {/* Monitor Stand Base */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#0d1527] border-x border-cyan-500/20" />
      </div>

      {/* RIGHT MONITOR: Main Terminal Execution */}
      <div className="relative w-56 sm:w-64 h-40 bg-[#050b14] rounded-lg border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.2)] flex flex-col overflow-hidden">
        {/* Bezel Header */}
        <div className="h-5 bg-[#091120] px-2.5 flex items-center justify-between border-b border-cyan-500/30">
          <span className="font-mono text-[9px] text-cyan-300 font-bold flex items-center gap-1.5">
            <span className="status-dot w-1.5 h-1.5" />
            TERMINAL // DEV
          </span>
          <span className="font-mono text-[8px] text-gray-500">node:v22</span>
        </div>

        {/* Terminal Content */}
        <div className="p-2 font-mono text-[8px] sm:text-[9px] leading-relaxed text-gray-300 space-y-0.5 select-none">
          <div className="text-cyan-300">&gt; npm run dev</div>
          <div className="text-gray-400">Building portfolio...</div>
          <div className="text-gray-400">Loading components...</div>
          <div className="text-emerald-400">✓ Navbar</div>
          <div className="text-emerald-400">✓ Hero</div>
          <div className="text-emerald-400">✓ Skills</div>
          <div className="text-emerald-400">✓ Projects</div>
          <div className="text-emerald-400">✓ Services</div>

          <div className="pt-0.5 flex items-center gap-1 font-semibold text-cyan-300">
            <span>Portfolio Ready</span>
            {mounted && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-3 bg-cyan-400"
              />
            )}
          </div>
        </div>

        {/* Scan line effect */}
        <div className="scan-line opacity-50" />

        {/* Monitor Stand Base */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#091120] border-x border-cyan-500/30" />
      </div>
    </div>
  );
}
