"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaGraduationCap,
  FaCode,
  FaLayerGroup,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import AboutDossier from "@/components/terminal/AboutDossier";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#020617] px-4 sm:px-6 py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Subtle Cyber Glow */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT — AI Telemetry & Biometric Dossier Console */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <AboutDossier />
        </motion.div>

        {/* RIGHT — Bio & Engineering Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-mono text-cyan-300 mb-4">
            DEVELOPER PROFILE
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-gray-300">
            <p>
              Hi, I&apos;m{" "}
              <span className="font-semibold text-cyan-300">
                Hla Gyo U Marma
              </span>
              , an aspiring Full Stack Developer and CST student focused on building high-performance modern web platforms.
            </p>

            <p>
              I specialize in crafting responsive user interfaces with{" "}
              <span className="text-cyan-400 font-medium">Next.js, React, and Tailwind CSS</span>
              , backed by robust backend systems powered by{" "}
              <span className="text-cyan-400 font-medium">Django & Python</span>.
            </p>

            <p>
              My philosophy combines clean code architecture with futuristic aesthetic polish to deliver seamless digital experiences.
            </p>
          </div>

          {/* Metrics / Glass Cards Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.5)" }}
              className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl transition"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-xl mb-1">
                <FaGraduationCap />
                <h3 className="text-2xl sm:text-3xl font-bold">CST</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Diploma Student
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.5)" }}
              className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl transition"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-xl mb-1">
                <FaCode />
                <h3 className="text-2xl sm:text-3xl font-bold">2028</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Target Graduation
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.5)" }}
              className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl transition"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-xl mb-1">
                <FaLayerGroup />
                <h3 className="text-2xl sm:text-3xl font-bold">React</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Frontend Architecture
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.5)" }}
              className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl transition"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-xl mb-1">
                <FaBrain />
                <h3 className="text-2xl sm:text-3xl font-bold">Django</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Backend & APIs
              </p>
            </motion.div>
          </div>

          {/* Primary Tech Stack Floating Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-5 text-3xl sm:text-4xl text-gray-400">
            <motion.div whileHover={{ y: -6, color: "#22d3ee" }} className="transition">
              <FaReact title="React" />
            </motion.div>
            <motion.div whileHover={{ y: -6, color: "#ffffff" }} className="transition">
              <SiNextdotjs title="Next.js" />
            </motion.div>
            <motion.div whileHover={{ y: -6, color: "#facc15" }} className="transition">
              <FaPython title="Python" />
            </motion.div>
            <motion.div whileHover={{ y: -6, color: "#22c55e" }} className="transition">
              <SiDjango title="Django" />
            </motion.div>
            <motion.div whileHover={{ y: -6, color: "#38bdf8" }} className="transition">
              <SiTailwindcss title="Tailwind CSS" />
            </motion.div>
            <motion.div whileHover={{ y: -6, color: "#22c55e" }} className="transition">
              <FaNodeJs title="Node.js" />
            </motion.div>
            <motion.div whileHover={{ y: -6, color: "#ffffff" }} className="transition">
              <FaGithub title="GitHub" />
            </motion.div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hero-btn rounded-full bg-cyan-400 px-8 py-3.5 font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hero-btn rounded-full border border-cyan-400 px-8 py-3.5 font-semibold text-white hover:bg-cyan-400 hover:text-black transition"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}