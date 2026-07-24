"use client";

import { motion } from "motion/react";
import Image from "next/image";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";

const projects = [
  {
    title: "Tongsa Cafe",

    badge: "Featured",

    image: "/images/projects/tongsa-cafe.png",

    description:
      "Modern restaurant website built with Django featuring responsive design and premium UI.",

    github: "#",

    live: "#",

    tech: [
      {
        name: "Django",
        icon: SiDjango,
      },

      {
        name: "HTML",
        icon: SiHtml5,
      },

      {
        name: "CSS",
        icon: SiCss,
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },

  {
    title: "Portfolio",

    badge: "Latest",

    image: "/images/projects/portfolio.png",

    description:
      "Personal portfolio built using Next.js, Tailwind CSS and beautiful animations.",

    github: "#",

    live: "#",

    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },

      {
        name: "React",
        icon: SiReact,
      },

      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Coming Soon",

    badge: "New",

    image: "/images/projects/coming-soon.jpg",

    description:
      "More premium projects are coming soon.",

    github: "#",

    live: "#",

    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },

      {
        name: "React",
        icon: SiReact,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

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
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center text-5xl font-bold"
        >
          My{" "}
          <span className="text-cyan-400">
            Projects
          </span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
          Some of my latest works built using modern technologies
          with beautiful user experience.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

        </div>
        {projects.map((project, index) => (
  <motion.div
    key={project.title}
    initial={{
      opacity: 0,
      y: 60,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.7,
      delay: index * 0.15,
    }}
    viewport={{
      once: true,
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]"
  >
    {/* Image */}

    <div className="relative h-60 overflow-hidden">

      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute left-5 top-5 rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-black">
        {project.badge}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

    </div>

    {/* Content */}

    <div className="p-6">

      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {project.description}
      </p>

      {/* Tech */}

      <div className="mt-6 flex flex-wrap gap-3">

        {project.tech.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
            >
              <Icon />

              <span>{item.name}</span>

            </div>
          );
        })}
      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-4">
        
      </div>
              <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 px-5 py-3 font-semibold transition hover:bg-cyan-400 hover:text-black"
        >
          <FaGithub />
          GitHub
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
        >
          Live Demo
          <FaExternalLinkAlt />
        </motion.a>

      </div>

  </motion.div>
))}

        </div>

    </section>
  );
}