"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BootTextProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function BootText({
  lines,
  typingSpeed = 28,
  lineDelay = 260,
  className = "",
  onComplete,
}: BootTextProps) {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      if (onComplete) onComplete();
      return;
    }

    const fullLine = lines[lineIndex];
    let charIndex = 0;

    const resetTimer = window.setTimeout(() => {
      setCurrentLine("");
    }, 0);

    const typingInterval = setInterval(() => {
      charIndex += 1;
      setCurrentLine(fullLine.slice(0, charIndex));

      if (charIndex >= fullLine.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCompletedLines((prev) => [...prev, fullLine]);
          setLineIndex((prev) => prev + 1);
        }, lineDelay);
      }
    }, typingSpeed);

    return () => {
      clearTimeout(resetTimer);
      clearInterval(typingInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, lines]);

  return (
    <div
      className={`font-mono text-xs leading-relaxed text-cyan-300/90 sm:text-sm ${className}`}
    >
      <AnimatePresence initial={false}>
        {completedLines.map((line, index) => (
          <motion.div
            key={`${line}-${index}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span className="text-cyan-500">▹</span>
            <span>{line}</span>
            {index < lines.length - 1 && (
              <span className="text-cyan-400/70">OK</span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {lineIndex < lines.length && (
        <div className="flex items-center gap-2">
          <span className="text-cyan-500">▹</span>
          <span>{currentLine}</span>
          <motion.span
            className="inline-block h-3.5 w-1.5 bg-cyan-300"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}
    </div>
  );
}