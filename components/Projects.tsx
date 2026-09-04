"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLockOpen, FaTerminal } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { useAssistant } from "@/components/assistant/useAssistant";

const projects = [
  {
    title: "Tongsa Cafe",
    badge: "Featured",
    image: "/images/projects/tongsa-cafe.png",
    fallbackIcon: "☕",
    description:
      "Modern restaurant website built with Django featuring responsive design, interactive menu, and a premium customer experience.",
    github: "https://github.com/hlagyumarma65-cell",
    live: "#",
    tech: [
      { name: "Django", icon: SiDjango },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "AI Developer Portfolio",
    badge: "Latest",
    image: "/images/projects/portfolio.png",
    fallbackIcon: "⚡",
    description:
      "Futuristic AI-themed developer workspace portfolio built with Next.js 16, React 19, Motion, and Tailwind CSS.",
    github: "https://github.com/hlagyumarma65-cell",
    live: "#",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Autonomous AI Workspace",
    badge: "Next-Gen",
    image: "/images/projects/coming-soon.jpg",
    fallbackIcon: "🤖",
    description:
      "Next-generation AI agent integration and machine learning developer tooling currently under active development.",
    github: "https://github.com/hlagyumarma65-cell",
    live: "#",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Python", icon: SiDjango },
    ],
  },
];

export default function Projects() {
  const { triggerAssistant } = useAssistant();
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleProjectInteraction = (title: string) => {
    setActiveProject(title);
    triggerAssistant("project-unlock", {
      title: "SECURITY CLEARANCE",
      status: `🔓 ACCESS GRANTED: ${title}`,
      subtext: "Decryption complete • Source verified",
      variant: "cyan",
    });
  };

  return (
    <section id="projects" className="relative bg-[#020617] px-4 sm:px-6 py-24 sm:py-32 text-white">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-mono text-cyan-300 mb-4">
            DEPLOYED MISSIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            High-performance web applications and systems engineered with precision, modern design, and clean architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isSelected = activeProject === project.title;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => handleProjectInteraction(project.title)}
                onMouseEnter={() => handleProjectInteraction(project.title)}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                  isSelected
                    ? "border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.3)] bg-white/[0.08]"
                    : "border-cyan-400/20 bg-white/[0.03] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                } backdrop-blur-xl flex flex-col justify-between`}
              >
                {/* Scanline on Card */}
                <div className="scan-line opacity-20 group-hover:opacity-60 transition" />

                <div>
                  {/* Image / Graphic Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-gradient-to-b from-[#0a1120] to-[#040813] flex items-center justify-center">
                    {/* Fallback Graphic */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-5xl text-cyan-400/30 group-hover:scale-110 group-hover:text-cyan-300/50 transition duration-700">
                      <span>{project.fallbackIcon}</span>
                      <span className="font-mono text-[10px] text-cyan-500/60 tracking-widest mt-2 uppercase">
                        SYSTEM // {project.badge}
                      </span>
                    </div>

                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      onError={(e) => {
                        // Keep fallback visible if image file is not found
                        const target = e.target as HTMLElement;
                        target.style.display = "none";
                      }}
                    />

                    {/* Badge */}
                    <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-cyan-400 px-3.5 py-1 text-xs font-bold text-black shadow-lg">
                      <FaTerminal className="text-[10px]" />
                      {project.badge}
                    </div>

                    {/* Security Overlay indicator */}
                    <div className="absolute right-5 top-5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5">
                      <FaLockOpen className="text-[10px] text-emerald-400" />
                      UNLOCKED
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/20 to-transparent" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.name}
                            className="flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300"
                          >
                            <Icon className="text-xs" />
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 mt-4 flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 py-3 text-xs sm:text-sm font-semibold transition hover:bg-cyan-400 hover:text-black"
                  >
                    <FaGithub className="text-base" />
                    Source
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-xs sm:text-sm font-semibold text-black transition hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}