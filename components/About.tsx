"use client";

import { motion } from "motion/react";
import Image from "next/image";

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl animate-pulse"></div>

            <motion.div
              whileHover={{
                scale: 1.04,
                rotate: 2,
              }}
              transition={{
                duration: .3,
              }}
            >

              <Image
                src="/images/about.png"
                alt="About Me"
                width={360}
                height={360}
                className="relative z-10 h-80 w-80 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_45px_rgba(34,211,238,.6)] md:h-[380px] md:w-[380px]"
              />

            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-300">

            <p>
              Hi, I&apos;m
              <span className="font-semibold text-cyan-400">
                {" "}Hla Gyo U Marma
              </span>,
              a passionate Full Stack Developer and CST student.
            </p>

            <p>
              I love building modern websites using
              <span className="text-cyan-400">
                {" "}Next.js, React, Django
              </span>
              {" "}and Tailwind CSS with smooth UI animations.
            </p>

            <p>
              My goal is to create fast, responsive and beautiful
              web applications that provide an excellent user experience.
            </p>

          </div>
                    {/* Stats */}

          <div className="mt-10 grid grid-cols-2 gap-5">

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                CST
              </h3>

              <p className="mt-2 text-gray-400">
                Diploma Student
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                2028
              </h3>

              <p className="mt-2 text-gray-400">
                Graduation
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                React
              </h3>

              <p className="mt-2 text-gray-400">
                Frontend Development
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                Django
              </h3>

              <p className="mt-2 text-gray-400">
                Backend Development
              </p>
            </motion.div>

          </div>

          {/* Tech Stack */}

          <div className="mt-12 flex flex-wrap gap-6 text-5xl">

            <motion.div whileHover={{ y: -10, rotate: 8 }}>
              <FaReact className="text-cyan-400" />
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <SiNextdotjs />
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <FaPython className="text-yellow-400" />
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <SiDjango className="text-green-500" />
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <SiTailwindcss className="text-sky-400" />
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <FaNodeJs className="text-green-500" />
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <FaGithub />
            </motion.div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{
                scale: .96,
              }}
              className="hero-btn rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{
                scale: .96,
              }}
              className="hero-btn rounded-full border border-cyan-400 px-8 py-4 font-semibold text-white hover:bg-cyan-400 hover:text-black"
            >
              Hire Me
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}