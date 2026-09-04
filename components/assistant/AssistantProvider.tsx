"use client";

import { useState, useCallback, useRef, ReactNode } from "react";
import { AssistantContext, AssistantState, AssistantMessage } from "./useAssistant";

const DEFAULT_MESSAGES: Record<AssistantState, AssistantMessage | null> = {
  idle: null,
  inspecting: {
    title: "AI PROTOCOL",
    status: "🤖 Inspecting module...",
    subtext: "Analyzing tech stack performance",
    variant: "cyan",
  },
  "project-unlock": {
    title: "PROJECT DETECTED",
    status: "🔓 UNLOCKING...",
    subtext: "✓ ACCESS GRANTED",
    variant: "cyan",
  },
  "cert-scan": {
    title: "SECURITY AUDIT",
    status: "🤖 SCANNING...",
    subtext: "VERIFYING... ✓ VERIFIED",
    variant: "emerald",
  },
  "contact-greet": {
    title: "COMMUNICATION LINK",
    status: "🤖 SYSTEM ONLINE",
    subtext: "LET'S BUILD SOMETHING TOGETHER",
    variant: "cyan",
  },
};

export default function AssistantProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AssistantState>("idle");
  const [message, setMessage] = useState<AssistantMessage | null>(null);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAssistant = useCallback(() => {
    setState("idle");
    setMessage(null);
  }, []);

  const triggerAssistant = useCallback(
    (newState: AssistantState, customMessage?: AssistantMessage) => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }

      setState(newState);
      setMessage(customMessage || DEFAULT_MESSAGES[newState]);

      // Auto-reset back to idle after a few seconds
      const timeoutDuration = newState === "project-unlock" || newState === "cert-scan" ? 3800 : 2500;
      resetTimerRef.current = setTimeout(() => {
        resetAssistant();
      }, timeoutDuration);
    },
    [resetAssistant]
  );

  return (
    <AssistantContext.Provider
      value={{
        state,
        message,
        triggerAssistant,
        resetAssistant,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
}
