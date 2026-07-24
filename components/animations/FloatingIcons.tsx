"use client";

import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  { Icon: FaHtml5, color: "text-orange-500", x: -180, y: -120 },
  { Icon: FaCss3Alt, color: "text-blue-500", x: 180, y: -100 },
  { Icon: FaJs, color: "text-yellow-400", x: -170, y: 120 },
  { Icon: FaPython, color: "text-yellow-300", x: 170, y: 130 },
  { Icon: FaReact, color: "text-cyan-400", x: 0, y: -180 },
  { Icon: SiNextdotjs, color: "text-white", x: 0, y: 180 },
  { Icon: SiDjango, color: "text-green-500", x: -220, y: 0 },
  { Icon: SiTailwindcss, color: "text-sky-400", x: 220, y: 0 },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, color, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute text-4xl ${color}`}
          initial={{ x, y }}
          animate={{
            y: [y, y - 20, y],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
}