"use client";

import { motion } from "motion/react";

export default function RoomEnvironment() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark wall background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f23] to-[#020617]" />

      {/* Futuristic window with city lights */}
      <div className="absolute top-[8%] right-[8%] w-[180px] h-[120px] rounded-lg border border-cyan-500/10 overflow-hidden">
        {/* Window glass */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#060d1a]" />

        {/* City lights */}
        <div className="absolute bottom-[15%] left-[10%] w-[3px] h-[25px] bg-cyan-400/20 rounded-full" />
        <div className="absolute bottom-[15%] left-[20%] w-[4px] h-[35px] bg-blue-400/15 rounded-full" />
        <div className="absolute bottom-[15%] left-[35%] w-[3px] h-[20px] bg-cyan-300/15 rounded-full" />
        <div className="absolute bottom-[15%] left-[50%] w-[5px] h-[40px] bg-blue-500/10 rounded-full" />
        <div className="absolute bottom-[15%] left-[65%] w-[3px] h-[28px] bg-cyan-400/15 rounded-full" />
        <div className="absolute bottom-[15%] left-[80%] w-[4px] h-[32px] bg-blue-400/12 rounded-full" />

        {/* Stars */}
        <div className="absolute top-[15%] left-[25%] w-[1px] h-[1px] bg-white/40 rounded-full" />
        <div className="absolute top-[25%] left-[60%] w-[1px] h-[1px] bg-white/30 rounded-full" />
        <div className="absolute top-[10%] left-[75%] w-[1px] h-[1px] bg-white/35 rounded-full" />

        {/* Window frame glow */}
        <div className="absolute inset-0 border border-cyan-500/8 rounded-lg" />
      </div>

      {/* Ambient wall light from monitor */}
      <motion.div
        className="absolute top-[20%] left-[30%] w-[300px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle shelf on wall */}
      <div className="absolute top-[15%] left-[5%] w-[100px] h-[3px] bg-gradient-to-r from-transparent via-gray-700/30 to-transparent rounded-full" />

      {/* Small items on shelf */}
      <div className="absolute top-[12%] left-[8%] w-[8px] h-[12px] bg-gray-600/20 rounded-sm" />
      <div className="absolute top-[11%] left-[18%] w-[6px] h-[16px] bg-gray-600/15 rounded-sm" />

      {/* Floor gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#020617] via-[#060d1a]/80 to-transparent" />

      {/* Subtle ambient light strips */}
      <motion.div
        className="absolute bottom-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
