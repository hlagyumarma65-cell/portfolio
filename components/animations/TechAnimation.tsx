"use client";

import { useEffect, useState } from "react";

import BackgroundGlow from "./BackgroundGlow";
import TypingText from "./TypingText";
import ProgressBar from "./progressBar";
import FloatingIcons from "./FloatingIcons";

export default function TechAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#020617]">

      <BackgroundGlow />

      <FloatingIcons />

      <div className="relative z-10 flex flex-col items-center">

        <h1 className="mb-6 text-5xl font-bold text-white">
          Hla <span className="text-cyan-400">Gyo U Marma</span>
        </h1>

        <TypingText />

        <ProgressBar progress={progress} />

        <p className="mt-5 text-lg font-semibold text-cyan-400">
          {progress}%
        </p>

      </div>

    </div>
  );
}