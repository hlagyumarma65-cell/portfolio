"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";

export type AssistantState =
  | "idle"
  | "inspecting"
  | "project-unlock"
  | "cert-scan"
  | "contact-greet";

export interface AssistantMessage {
  title?: string;
  status: string;
  subtext?: string;
  variant?: "cyan" | "emerald" | "purple";
}

interface AssistantContextType {
  state: AssistantState;
  message: AssistantMessage | null;
  triggerAssistant: (state: AssistantState, customMessage?: AssistantMessage) => void;
  resetAssistant: () => void;
}

export const AssistantContext = createContext<AssistantContextType>({
  state: "idle",
  message: null,
  triggerAssistant: () => {},
  resetAssistant: () => {},
});

export function useAssistant() {
  return useContext(AssistantContext);
}
