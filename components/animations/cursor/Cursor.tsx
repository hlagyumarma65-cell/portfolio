"use client";

import { useEffect, useState } from "react";

import CursorDot from "./CursorDot";
import CursorRing from "./CursorRing";
import CursorClickEffect from "./CursorClickEffect";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => {
      setClicked(true);

      setTimeout(() => {
        setClicked(false);
      }, 300);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
    };
  }, []);

  return (
    <>
      <CursorRing
        x={position.x}
        y={position.y}
      />

      <CursorDot
        x={position.x}
        y={position.y}
      />

      <CursorClickEffect
        x={position.x}
        y={position.y}
        show={clicked}
      />
    </>
  );
}