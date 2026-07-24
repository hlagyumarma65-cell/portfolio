"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-wide"
          >
            <span className="text-cyan-400">Hla</span> Gyo
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="transition hover:text-cyan-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social */}
          <div className="hidden md:flex items-center gap-5 text-xl">

            <a
              href="https://github.com/hlagyumarma65-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400 hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400 hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 z-40 bg-[#050816] md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-semibold transition hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}

              <div className="mt-8 flex gap-8 text-3xl">

                <a
                  href="https://github.com/hlagyumarma65-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}