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
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: FaLaptopCode,
    color: "text-cyan-400",
    description:
      "Modern, fast and responsive websites built with clean code and best practices.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    color: "text-sky-400",
    description:
      "Interactive user interfaces using React, Next.js and Tailwind CSS.",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend Development",
    icon: FaPython,
    color: "text-yellow-400",
    description:
      "Secure backend development using Python, Django and database integration.",
    tech: ["Python", "Django", "Database"],
  },
  {
    title: "UI / UX Design",
    icon: FaPalette,
    color: "text-pink-400",
    description:
      "Beautiful, modern and user-friendly interface with smooth animations.",
    tech: ["UI", "UX", "Design"],
  },
  {
    title: "Responsive Design",
    icon: FaMobileAlt,
    color: "text-green-400",
    description:
      "Perfectly optimized websites for desktop, tablet and mobile devices.",
    tech: ["Responsive", "Mobile", "Desktop"],
  },
  {
    title: "Portfolio Websites",
    icon: FaGlobe,
    color: "text-cyan-300",
    description:
      "Professional portfolio and business websites with premium design.",
    tech: ["Portfolio", "Business", "Landing Page"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            What I Can Do
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            I build modern, responsive and high-performance web
            applications using the latest technologies with clean,
            scalable and maintainable code.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,.25)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 text-5xl ${service.color}`}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-5 leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {service.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="relative z-10 mt-8 flex items-center gap-2 font-semibold text-cyan-400"
                >
                  Learn More
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}