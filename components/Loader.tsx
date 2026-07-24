"use client";

import { useEffect, useState } from "react";
import TechAnimation from "./animations/TechAnimation";
import CinematicTransition from "./animations/CinematicTransition";
interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowTransition(true);
    }, 3500);

    const finishTimer = setTimeout(() => {
      setShowTransition(false);
      onFinish();
    }, 5200);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <>
      {showLoader && <TechAnimation />}
      <CinematicTransition show={showTransition} />
    </>
  );
}