"use client";

import { motion } from "motion/react";
import {
  FaLaptopCode,
  FaReact,
  FaPython,
  FaPalette,
  FaMobileAlt,
  FaGlobe,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const services = [
  {
    code: "SVC_01",
    title: "Website Development",
    icon: FaLaptopCode,
    color: "text-cyan-400",
    borderColor: "group-hover:border-cyan-400/60",
    glowColor: "rgba(34,211,238,0.25)",
    description:
      "Modern, fast and responsive websites built with clean code, modular architecture, and modern best practices.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    code: "SVC_02",
    title: "Frontend Engineering",
    icon: FaReact,
    color: "text-sky-400",
    borderColor: "group-hover:border-sky-400/60",
    glowColor: "rgba(56,189,248,0.25)",
    description:
      "Fluid, interactive user interfaces crafted with React 19, Next.js App Router, Tailwind CSS, and buttery Motion transitions.",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    code: "SVC_03",
    title: "Backend Architecture",
    icon: FaPython,
    color: "text-yellow-400",
    borderColor: "group-hover:border-yellow-400/60",
    glowColor: "rgba(250,204,21,0.25)",
    description:
      "Secure and scalable backend systems using Python, Django, RESTful APIs, and efficient database modeling.",
    tech: ["Python", "Django", "Database"],
  },
  {
    code: "SVC_04",
    title: "UI / UX Design",
    icon: FaPalette,
    color: "text-pink-400",
    borderColor: "group-hover:border-pink-400/60",
    glowColor: "rgba(244,114,182,0.25)",
    description:
      "Sleek, futuristic, and human-centric user interface designs focused on accessibility, visual hierarchy, and intuitive interaction.",
    tech: ["UI", "UX", "Design"],
  },
  {
    code: "SVC_05",
    title: "Responsive Systems",
    icon: FaMobileAlt,
    color: "text-emerald-400",
    borderColor: "group-hover:border-emerald-400/60",
    glowColor: "rgba(52,211,153,0.25)",
    description:
      "Pixel-perfect responsive optimization across mobile, tablet, laptop, and ultra-wide desktop monitors without layout shifts.",
    tech: ["Responsive", "Mobile", "Desktop"],
  },
  {
    code: "SVC_06",
    title: "Portfolio & Brand Presence",
    icon: FaGlobe,
    color: "text-cyan-300",
    borderColor: "group-hover:border-cyan-300/60",
    glowColor: "rgba(103,232,249,0.25)",
    description:
      "Professional identity and business landing pages featuring premium cinematic aesthetics that leave lasting impressions.",
    tech: ["Portfolio", "Business", "Landing Page"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#020617] px-4 sm:px-6 py-24 sm:py-32 text-white">
      {/* Subtle Grid / Glow */}
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-mono text-cyan-300 mb-4">
            SERVICE PROTOCOLS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Specialized <span className="text-cyan-400">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Delivering clean, scalable code and high-performance solutions tailored to solve complex digital challenges.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-7 sm:p-8 backdrop-blur-xl transition-all duration-500 ${service.borderColor} hover:shadow-[0_0_35px_${service.glowColor}] flex flex-col justify-between`}
              >
                {/* Scanline indicator */}
                <div className="scan-line opacity-20 group-hover:opacity-50" />

                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] text-cyan-400/60 font-semibold tracking-wider">
                      {service.code}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
                      <FaCheck className="text-[8px]" /> ACTIVE
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-4xl ${service.color} transition duration-300 group-hover:scale-105 group-hover:border-cyan-400/40`}
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-6 text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags & CTA */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-mono text-cyan-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition"
                  >
                    Initiate <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}