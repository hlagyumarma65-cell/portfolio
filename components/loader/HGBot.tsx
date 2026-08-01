"use client";

import { motion } from "motion/react";

interface HGBotProps {
  isDone?: boolean;
  className?: string;
}

export default function HGBot({ isDone = false, className = "" }: HGBotProps) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <motion.svg
        viewBox="0 0 220 260"
        className="h-48 w-40 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] sm:h-56 sm:w-48 md:h-64 md:w-56"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="hgBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <radialGradient id="hgCoreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
          </radialGradient>
          <filter id="hgGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Antenna */}
        <motion.line
          x1="110"
          y1="20"
          x2="110"
          y2="4"
          stroke="#22d3ee"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ transformOrigin: "110px 20px" }}
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="110"
          cy="4"
          r="5"
          fill="#67e8f9"
          filter="url(#hgGlow)"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Left Arm */}
        <motion.g
          style={{ transformOrigin: "70px 108px" }}
          animate={{ rotate: [0, -25, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="60"
            y="108"
            width="12"
            height="42"
            rx="6"
            fill="url(#hgBodyGradient)"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
        </motion.g>

        {/* Right Arm */}
        <motion.g
          style={{ transformOrigin: "150px 108px" }}
          animate={{ rotate: [0, 25, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="148"
            y="108"
            width="12"
            height="42"
            rx="6"
            fill="url(#hgBodyGradient)"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
        </motion.g>

        {/* Left Leg */}
        <motion.g
          style={{ transformOrigin: "88px 190px" }}
          animate={{ rotate: [-18, 18, -18] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="82"
            y="190"
            width="14"
            height="48"
            rx="6"
            fill="#0e7490"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
        </motion.g>

        {/* Right Leg */}
        <motion.g
          style={{ transformOrigin: "132px 190px" }}
          animate={{ rotate: [18, -18, 18] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="124"
            y="190"
            width="14"
            height="48"
            rx="6"
            fill="#0e7490"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
        </motion.g>

        {/* Body */}
        <rect
          x="66"
          y="96"
          width="88"
          height="100"
          rx="24"
          fill="url(#hgBodyGradient)"
          stroke="#67e8f9"
          strokeWidth="2"
          filter="url(#hgGlow)"
        />

        {/* Chest Core */}
        <motion.circle
          cx="110"
          cy="146"
          r="16"
          fill="url(#hgCoreGradient)"
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="110" cy="146" r="6" fill="#e0f7ff" />

        {/* Head */}
        <rect
          x="72"
          y="26"
          width="76"
          height="66"
          rx="22"
          fill="url(#hgBodyGradient)"
          stroke="#67e8f9"
          strokeWidth="2"
          filter="url(#hgGlow)"
        />

        {/* Eyes */}
        <motion.ellipse
          cx="94"
          cy="58"
          rx="7"
          ry="9"
          fill="#e0f7ff"
          style={{ transformOrigin: "94px 58px" }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            times: [0, 0.45, 0.5, 0.55, 1],
            ease: "easeInOut",
          }}
        />
        <motion.ellipse
          cx="126"
          cy="58"
          rx="7"
          ry="9"
          fill="#e0f7ff"
          style={{ transformOrigin: "126px 58px" }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            times: [0, 0.45, 0.5, 0.55, 1],
            ease: "easeInOut",
          }}
        />

        {/* Mouth */}
        {isDone ? (
          <motion.path
            d="M96 74 Q110 88 124 74"
            stroke="#e0f7ff"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ) : (
          <motion.line
            x1="98"
            y1="76"
            x2="122"
            y2="76"
            stroke="#e0f7ff"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.svg>

      {/* Ground shadow / glow */}
      <motion.div
        className="mx-auto h-3 w-28 rounded-full bg-cyan-400/30 blur-md sm:w-32"
        animate={{ scaleX: [1, 0.75, 1], opacity: [0.5, 0.25, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}