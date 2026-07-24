"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Initializing Portfolio...",
        1000,
        "Loading HTML...",
        700,
        "Loading CSS...",
        700,
        "Loading JavaScript...",
        700,
        "Loading Python...",
        700,
        "Loading React...",
        700,
        "Loading Next.js...",
        700,
        "Loading Django...",
        700,
        "Portfolio Ready ✓",
        2000,
      ]}
      speed={45}
      repeat={Infinity}
      className="text-2xl font-bold text-cyan-400 text-center"
    />
  );
}