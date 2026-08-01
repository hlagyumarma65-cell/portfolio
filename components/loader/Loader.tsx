"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiCpu, FiWifi, FiCheckCircle, FiActivity } from "react-icons/fi";
import HGBot from "./HGBot";
import BootText from "./BootText";
import ProgressBar from "./ProgressBar";

interface LoaderProps {
  onFinish: () => void;
  userName?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BOOT_LINES = [
  "> Booting Neural Core...",
  "> Loading Portfolio Engine...",
  "> Connecting AI Modules...",
  "> Checking Projects...",
  "> Starting Interface...",
];

function createParticles(): Particle[] {
  return Array.from({ length: 36 }, (_, i) => ({
    id: i,
    x: (i * 13) % 100,
    y: (i * 17) % 100,
    size: 2 + (i % 3),
    duration: 6 + (i % 5),
    delay: (i % 4) * 0.5,
  }));
}

export default function Loader({
  onFinish,
  userName = "Hla Gyo Marma",
}: LoaderProps) {
  const [progressDone, setProgressDone] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [particles] = useState<Particle[]>(() => createParticles());

  const bootLines = useMemo(
    () => [...BOOT_LINES, `> Welcome ${userName}`],
    [userName]
  );

  useEffect(() => {
    if (!progressDone) return;

    const readyTimer = setTimeout(() => setIsReady(true), 250);
    const exitTimer = setTimeout(() => setIsExiting(true), 1300);
    const finishTimer = setTimeout(() => onFinish(), 2100);

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, progressDone]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#020617]"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

          {/* Particles */}
          <div className="absolute inset-0">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full bg-cyan-300/70"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                }}
                animate={{ y: [0, -24, 0], opacity: [0.2, 0.9, 0.2] }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Scan line */}
          <motion.div
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
            animate={{ y: ["-10%", "110%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Main content */}
          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 px-6">
            <div className="flex w-full items-center justify-center gap-6 sm:gap-10">
              {/* Left hologram panels */}
              <div className="hidden flex-col gap-3 sm:flex">
                <HoloPanel icon={<FiCpu />} label="SYSTEM" delay={0.2} />
                <HoloPanel icon={<FiActivity />} label="BOOT" delay={0.5} />
              </div>

              {/* Robot */}
              <HGBot isDone={isReady} />

              {/* Right hologram panels */}
              <div className="hidden flex-col gap-3 sm:flex">
                <HoloPanel icon={<FiWifi />} label="AI ONLINE" delay={0.35} />
                <HoloPanel
                  icon={<FiCheckCircle />}
                  label="READY"
                  delay={0.65}
                  active={isReady}
                />
              </div>
            </div>

            {/* Terminal + progress */}
            <div className="w-full rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-4 backdrop-blur-sm sm:p-6">
              <BootText lines={bootLines} />

              <div className="mt-4">
                <ProgressBar
                  duration={5000}
                  onComplete={() => setProgressDone(true)}
                />
              </div>

              <AnimatePresence>
                {isReady && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 flex items-center gap-2 font-mono text-xs text-emerald-300 sm:text-sm"
                  >
                    <span>SYSTEM READY</span>
                    <span>✓</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HoloPanel({
  icon,
  label,
  delay = 0,
  active = true,
}: {
  icon: ReactNode;
  label: string;
  delay?: number;
  active?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/5 px-3 py-2 backdrop-blur-sm"
    >
      <motion.span
        className={active ? "text-cyan-300" : "text-cyan-500/60"}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
      <span className="font-mono text-[10px] tracking-widest text-cyan-200/90">
        {label}
      </span>
    </motion.div>
  );
}