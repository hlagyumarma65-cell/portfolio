"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { FaTerminal, FaUserAstronaut, FaCopy, FaCheck } from "react-icons/fa";

export default function HeroTerminal() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx hlagyo-marma");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none" />

      {/* Terminal Window Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#070d18]/90 shadow-[0_0_50px_rgba(34,211,238,0.25)] backdrop-blur-2xl"
      >
        {/* Top Title Bar */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 bg-[#0d1627] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-cyan-300/80 tracking-wide font-semibold hidden sm:inline">
              hla-gyo@ai-workspace:~
            </span>
          </div>

          {/* Toggle between Terminal and Photo */}
          <button
            onClick={() => setShowPhoto((prev) => !prev)}
            className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-mono text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
            title="Toggle between Interactive Terminal and Biometric Photo"
          >
            {showPhoto ? (
              <>
                <FaTerminal className="text-xs" />
                <span>Show Terminal</span>
              </>
            ) : (
              <>
                <FaUserAstronaut className="text-xs" />
                <span>Show Photo ID</span>
              </>
            )}
          </button>
        </div>

        {/* Window Body */}
        <div className="relative min-h-[340px] sm:min-h-[380px] p-5 font-mono text-xs sm:text-sm leading-relaxed text-gray-300 select-text">
          <AnimatePresence mode="wait">
            {!showPhoto ? (
              <motion.div
                key="terminal-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {/* Prompt 1 */}
                <div>
                  <div className="text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="text-emerald-400">hlagyo@workspace</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$</span>
                    <span className="text-white">whoami</span>
                  </div>
                  <div className="mt-1 pl-3 border-l-2 border-cyan-500/30 text-gray-200">
                    &gt; <span className="text-cyan-300 font-bold">Hla Gyo U Marma</span>
                    <br />
                    &gt; Full Stack Engineer & AI Systems Architect
                  </div>
                </div>

                {/* Prompt 2 */}
                <div>
                  <div className="text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="text-emerald-400">hlagyo@workspace</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$</span>
                    <span className="text-white">cat system_spec.json</span>
                  </div>
                  <div className="mt-1 pl-3 border-l-2 border-purple-500/30 text-gray-300 space-y-0.5 text-[11px] sm:text-xs">
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;focus&quot;</span>:{" "}
                      <span className="text-emerald-300">&quot;High-Performance Web & AI&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;stack&quot;</span>: [
                      <span className="text-cyan-300">&quot;Next.js 16&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;React 19&quot;</span>,{" "}
                      <span className="text-yellow-300">&quot;Django&quot;</span>,{" "}
                      <span className="text-sky-300">&quot;Tailwind&quot;</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;status&quot;</span>:{" "}
                      <span className="text-emerald-400 font-bold">&quot;Available for Hire&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;latency&quot;</span>:{" "}
                      <span className="text-cyan-300">&quot;0.8ms (Optimized)&quot;</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>

                {/* Prompt 3: One-click interactive command */}
                <div className="pt-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-cyan-400/20 bg-cyan-950/20">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-gray-200">npx hlagyo-marma</span>
                    </div>
                    <button
                      onClick={copyCommand}
                      className="text-gray-400 hover:text-cyan-300 transition"
                      title="Copy command"
                    >
                      {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                    </button>
                  </div>
                </div>

                {/* Blinking Cursor line */}
                <div className="flex items-center gap-2 pt-1 text-cyan-400">
                  <span className="text-emerald-400">hlagyo@workspace</span>
                  <span className="text-gray-400">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block h-4 w-2 bg-cyan-400"
                  />
                </div>
              </motion.div>
            ) : (
              /* Biometric Photo View when user toggles */
              <motion.div
                key="photo-content"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-full py-4"
              >
                <div className="relative h-60 w-60 sm:h-64 sm:w-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.5)]">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Hla Gyo U Marma"
                    fill
                    priority
                    sizes="256px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-mono text-xs text-cyan-300 font-semibold tracking-wider">
                  BIOMETRIC IDENTITY: HLA GYO MARMA
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scanline Effect */}
          <div className="scan-line opacity-30" />
        </div>
      </motion.div>
    </div>
  );
}
