"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] border-t border-cyan-500/20 py-10 text-center text-gray-400 select-none">
      {/* Subtle top edge glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* System Status */}
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          <span>SYSTEM STATUS: ONLINE</span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-gray-400">
          &copy; {currentYear} Hla Gyo Marma. All rights reserved.
        </p>

        {/* Minimal Terminal Tag */}
        <div className="font-mono text-[11px] text-gray-500">
          BUILD // V2.0.26
        </div>
      </div>
    </footer>
  );
}
