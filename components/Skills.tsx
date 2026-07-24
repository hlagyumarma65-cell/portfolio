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

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-300 text-3xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Django",
    icon: <SiDjango className="text-green-500 text-3xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-3xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-3xl" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white text-3xl" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500 text-3xl" />,
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-cyan-400 text-3xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] py-32 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-gray-400 text-lg"
        >
          Technologies I use to build modern, fast and premium web
          applications.
        </motion.p>

        <div className="relative mt-24 flex h-[760px] items-center justify-center">

          {/* Center Orb */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="absolute z-30"
          >

            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-4 rounded-full border border-cyan-400/30 border-dashed"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-2xl shadow-[0_0_70px_rgba(34,211,238,.35)]"
            >

              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="mt-2 text-2xl font-bold text-cyan-400">
                SKILLS
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                16 Technologies
              </p>

            </motion.div>

          </motion.div>
                  {/* Skill Nodes */}

        {skills.map((skill, index) => {

          const angle =
            (index / skills.length) * Math.PI * 2 - Math.PI / 2;

          const radius = 290;

          const x = Math.cos(angle) * radius;

          const y = Math.sin(angle) * radius;

          return (

            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              whileHover={{
                scale: 1.15,
                y: -12,
                boxShadow:
                  "0 0 35px rgba(34,211,238,.7)",
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px - 52px)`,
                top: `calc(50% + ${y}px - 52px)`,
              }}
              className="group z-20 flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl"
            >

              <motion.div
                animate={{
                  rotate: [0, 6, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  delay: index * .15,
                }}
              >
                {skill.icon}
              </motion.div>

              <span className="mt-2 text-[11px] font-semibold">
                {skill.name}
              </span>

            </motion.div>

          );

        })}
                {/* Connection Lines */}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 760 760"
        >
          {skills.map((_, index) => {

            const angle =
              (index / skills.length) * Math.PI * 2 - Math.PI / 2;

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
                stroke="rgba(34,211,238,.25)"
                strokeWidth="2"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.05,
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
    </section>
  );
}