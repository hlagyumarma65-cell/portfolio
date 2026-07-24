"use client";

import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import {
  FaArrowRight,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="glow one"></div>
      <div className="glow two"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              👋 Welcome To My Portfolio
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
            >
              Hi, I&apos;m
              <br />

              <span className="text-cyan-400">
                Hla Gyo
              </span>

            </motion.h1>

            <div className="mt-8 h-12 flex items-center">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer 💻",
                  2000,

                  "Next.js Developer ⚡",
                  2000,

                  "React Developer ⚛️",
                  2000,

                  "Django Developer 🐍",
                  2000,

                  "Freelancer 🚀",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="text-2xl font-bold text-cyan-400 md:text-4xl"
              />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              I create modern, responsive and high-performance
              websites using Next.js, React, Django and
              beautiful UI animations.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 0 35px rgba(34,211,238,.6)",
                }}
                whileTap={{
                  scale: .96,
                }}
                className="hero-btn inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black"
              >
                View Projects

                <motion.span
                  animate={{
                    x: [0, 6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 0 30px rgba(34,211,238,.45)",
                }}
                whileTap={{
                  scale: .96,
                }}
                className="hero-btn rounded-full border border-cyan-400 px-8 py-4 font-semibold text-white hover:bg-cyan-400 hover:text-black"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-6 text-3xl">

              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -8,
                  rotate: 8,
                  scale: 1.2,
                }}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -8,
                  rotate: -8,
                  scale: 1.2,
                }}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <FaFacebook />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -8,
                  rotate: 8,
                  scale: 1.2,
                }}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

              {/* Floating Image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                className="relative z-10 h-80 w-80 md:h-[430px] md:w-[430px]"
              >

                <Image
                  src="/images/profile.jpeg"
                  alt="Hla Gyo U Marma"
                  fill
                  priority
                  sizes="(max-width:768px)100vw,430px"
                  className="rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_45px_rgba(34,211,238,.6)]"
                />

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Down */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-sm uppercase tracking-[0.3em] text-gray-400"
        >
          Scroll Down
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mx-auto mt-3 h-10 w-[2px] bg-cyan-400"
        />

      </motion.div>

    </section>
  );
}