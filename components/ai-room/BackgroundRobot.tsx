"use client";

import { motion } from "motion/react";

export default function BackgroundRobot() {
  return (
    <div className="relative flex flex-col items-center select-none pointer-events-none">
      {/* Subtle Robot Aura / Back Glow */}
      <div className="absolute -top-6 w-32 h-44 rounded-full bg-cyan-400/5 blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 200 240"
        className="w-48 sm:w-56 h-auto drop-shadow-[0_4px_25px_rgba(14,165,233,0.15)]"
      >
        <defs>
          {/* High-grade graphite metallic gradient */}
          <linearGradient id="androidGraphite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a303c" />
            <stop offset="45%" stopColor="#1e232d" />
            <stop offset="100%" stopColor="#12161e" />
          </linearGradient>

          {/* Dark chassis joint gradient */}
          <linearGradient id="androidJoint" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3d4452" />
            <stop offset="100%" stopColor="#141820" />
          </linearGradient>

          {/* Glowing optical sensor gradient */}
          <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>

          {/* Subtle LED glow filter */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================= ERGONOMIC CHAIR (Backrest & Neckrest) ================= */}
        <path
          d="M60 90 Q60 60 100 60 Q140 60 140 90 L145 190 Q100 205 55 190 Z"
          fill="#0a0e17"
          stroke="#1e293b"
          strokeWidth="2"
        />
        {/* Headrest */}
        <rect
          x="78"
          y="28"
          width="44"
          height="22"
          rx="6"
          fill="#0f172a"
          stroke="#1e293b"
          strokeWidth="1.5"
        />

        {/* ================= TORSO & SPINE (Ergonomic slight forward lean) ================= */}
        <g>
          {/* Main Upper Torso Chassis */}
          <path
            d="M74 86 L126 86 L120 160 L80 160 Z"
            fill="url(#androidGraphite)"
            stroke="#334155"
            strokeWidth="1.5"
          />

          {/* Internal spine mechanical channel */}
          <line
            x1="100"
            y1="90"
            x2="100"
            y2="152"
            stroke="#0284c7"
            strokeWidth="2"
            strokeDasharray="4 3"
            filter="url(#softGlow)"
            opacity="0.8"
          />

          {/* Subtle Torso Accent Lines */}
          <path
            d="M84 100 L95 125 L105 125 L116 100"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Core Power Status Indicator */}
          <motion.circle
            cx="100"
            cy="110"
            r="3.5"
            fill="#38bdf8"
            filter="url(#softGlow)"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Collar / Neck connector */}
          <rect
            x="93"
            y="76"
            width="14"
            height="12"
            rx="3"
            fill="url(#androidJoint)"
            stroke="#334155"
            strokeWidth="1"
          />
        </g>

        {/* ================= HEAD & FACE (Subtle natural movement) ================= */}
        <motion.g
          animate={{
            rotate: [0, 1.5, -1, 0],
            y: [0, -1, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.35, 0.7, 1],
          }}
          style={{ transformOrigin: "100px 76px" }}
        >
          {/* Sleek Minimalist Humanoid Head Chassis */}
          <path
            d="M80 40 C80 26 120 26 120 40 L118 72 C118 78 110 82 100 82 C90 82 82 78 82 72 Z"
            fill="url(#androidGraphite)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Smooth Visor / Optical Plate */}
          <path
            d="M84 48 C84 45 116 45 116 48 L115 58 C115 61 85 61 85 58 Z"
            fill="#090d16"
            stroke="#1e293b"
            strokeWidth="1"
          />

          {/* Left Optical Sensor (Subtle Eye) */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.46, 0.5, 0.54, 1],
            }}
            style={{ transformOrigin: "93px 52px" }}
          >
            <circle cx="93" cy="52" r="3" fill="url(#sensorGlow)" />
            <circle cx="93" cy="52" r="1.5" fill="#e0f2fe" />
          </motion.g>

          {/* Right Optical Sensor (Subtle Eye) */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.46, 0.5, 0.54, 1],
            }}
            style={{ transformOrigin: "107px 52px" }}
          >
            <circle cx="107" cy="52" r="3" fill="url(#sensorGlow)" />
            <circle cx="107" cy="52" r="1.5" fill="#e0f2fe" />
          </motion.g>

          {/* Minimal ear/temple status light */}
          <circle cx="81" cy="52" r="1" fill="#38bdf8" opacity="0.8" />
          <circle cx="119" cy="52" r="1" fill="#38bdf8" opacity="0.8" />
        </motion.g>

        {/* ================= LEFT ARM & NATURAL TYPING ================= */}
        <g>
          {/* Shoulder Joint */}
          <circle cx="70" cy="94" r="8" fill="url(#androidJoint)" stroke="#334155" strokeWidth="1.5" />
          {/* Upper Arm */}
          <path d="M68 98 L56 142" stroke="url(#androidGraphite)" strokeWidth="9" strokeLinecap="round" />
          {/* Elbow */}
          <circle cx="56" cy="144" r="5.5" fill="url(#androidJoint)" stroke="#334155" strokeWidth="1" />

          {/* Forearm & Hand with typing movement */}
          <motion.g
            animate={{
              rotate: [0, -3, 1, -2, 0],
              y: [0, 1.5, -1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "56px 144px" }}
          >
            {/* Forearm angled toward keyboard */}
            <path d="M56 144 L84 182" stroke="url(#androidGraphite)" strokeWidth="7" strokeLinecap="round" />
            {/* Wrist */}
            <circle cx="84" cy="182" r="4" fill="url(#androidJoint)" />
            {/* Fingers typing on keyboard */}
            <path
              d="M84 182 L96 190 M85 184 L98 193 M84 186 L94 195"
              stroke="#64748b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Tiny finger LED pulse */}
            <circle cx="96" cy="190" r="1" fill="#38bdf8" opacity="0.7" />
          </motion.g>
        </g>

        {/* ================= RIGHT ARM & NATURAL TYPING ================= */}
        <g>
          {/* Shoulder Joint */}
          <circle cx="130" cy="94" r="8" fill="url(#androidJoint)" stroke="#334155" strokeWidth="1.5" />
          {/* Upper Arm */}
          <path d="M132 98 L144 142" stroke="url(#androidGraphite)" strokeWidth="9" strokeLinecap="round" />
          {/* Elbow */}
          <circle cx="144" cy="144" r="5.5" fill="url(#androidJoint)" stroke="#334155" strokeWidth="1" />

          {/* Forearm & Hand with typing movement */}
          <motion.g
            animate={{
              rotate: [0, 2, -2, 3, 0],
              y: [0, -1, 1.5, -1, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              times: [0, 0.2, 0.55, 0.8, 1],
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "144px 144px" }}
          >
            {/* Forearm angled toward keyboard */}
            <path d="M144 144 L116 182" stroke="url(#androidGraphite)" strokeWidth="7" strokeLinecap="round" />
            {/* Wrist */}
            <circle cx="116" cy="182" r="4" fill="url(#androidJoint)" />
            {/* Fingers typing on keyboard */}
            <path
              d="M116 182 L104 190 M115 184 L102 193 M116 186 L106 195"
              stroke="#64748b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Tiny finger LED pulse */}
            <circle cx="104" cy="190" r="1" fill="#38bdf8" opacity="0.7" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
