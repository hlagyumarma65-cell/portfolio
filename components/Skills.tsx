"use client";

import { motion } from "motion/react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { useAssistant } from "@/components/assistant/useAssistant";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-3xl" />,
    category: "Full Stack",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-300 text-3xl" />,
    category: "Language",
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400 text-3xl" />,
    category: "Backend",
  },
  {
    name: "Django",
    icon: <SiDjango className="text-green-500 text-3xl" />,
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    category: "Runtime",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    category: "Styling",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    category: "Structure",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    category: "Styling",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-3xl" />,
    category: "Database",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-3xl" />,
    category: "Version Control",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white text-3xl" />,
    category: "DevOps",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500 text-3xl" />,
    category: "UI Design",
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-cyan-400 text-3xl" />,
    category: "Architecture",
  },
];

export default function Skills() {
  const { triggerAssistant } = useAssistant();

  const handleInspect = (skillName: string) => {
    triggerAssistant("inspecting", {
      title: "SKILL INSPECTED",
      status: `🤖 ${skillName} Module`,
      subtext: "Production ready • High proficiency verified",
      variant: "cyan",
    });
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] py-24 sm:py-32 text-white"
    >
      {/* Background Glows */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-mono text-cyan-300 mb-4">
            SYSTEM CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Technologies and frameworks engineered to build modern, performant, and scalable digital solutions.
          </p>
        </motion.div>

        {/* ================= MOBILE / TABLET RESPONSIVE GRID (Visible on screens < lg) ================= */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:hidden">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleInspect(skill.name)}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-cyan-400/20 bg-white/[0.04] backdrop-blur-lg active:border-cyan-400/60 active:bg-cyan-950/20 transition cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl shrink-0">{skill.icon}</div>
              <div className="overflow-hidden">
                <h4 className="font-semibold text-xs sm:text-sm text-white truncate">
                  {skill.name}
                </h4>
                <p className="text-[10px] text-gray-400 truncate font-mono">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP ORBITAL RADIAL SYSTEM (Visible on lg screens >= 1024px) ================= */}
        <div className="relative mt-20 hidden lg:flex h-[760px] items-center justify-center">
          {/* Center Orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="absolute z-30"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-cyan-400/30 border-dashed"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-2xl shadow-[0_0_70px_rgba(34,211,238,.35)]"
            >
              <div className="text-5xl">⚡</div>
              <h3 className="mt-2 text-2xl font-bold text-cyan-400">SKILLS</h3>
              <p className="mt-2 text-xs font-mono text-gray-300">16 Modules</p>
            </motion.div>
          </motion.div>

          {/* Skill Nodes Around Orbit */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 290;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                whileHover={{
                  scale: 1.15,
                  y: -12,
                  boxShadow: "0 0 35px rgba(34,211,238,.7)",
                }}
                onMouseEnter={() => handleInspect(skill.name)}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px - 52px)`,
                  top: `calc(50% + ${y}px - 52px)`,
                }}
                className="group z-20 flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl transition hover:border-cyan-400"
              >
                <motion.div
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    delay: index * 0.15,
                  }}
                >
                  {skill.icon}
                </motion.div>

                <span className="mt-2 text-[11px] font-semibold text-gray-200 group-hover:text-cyan-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}

          {/* Laser Connection Lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 760 760"
          >
            {skills.map((_, index) => {
              const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 290;
              const x = 380 + Math.cos(angle) * radius;
              const y = 380 + Math.sin(angle) * radius;

              return (
                <motion.line
                  key={index}
                  x1="380"
                  y1="380"
                  x2={x}
                  y2={y}
                  stroke="rgba(34,211,238,.2)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.04 }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}