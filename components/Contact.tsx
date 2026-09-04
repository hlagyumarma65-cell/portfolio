"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaTerminal,
  FaSatelliteDish,
} from "react-icons/fa";
import { useAssistant } from "@/components/assistant/useAssistant";

export default function Contact() {
  const { triggerAssistant } = useAssistant();

  const handleConsoleFocus = () => {
    triggerAssistant("contact-greet", {
      title: "COMMUNICATION CONSOLE",
      status: "🤖 SYSTEM ONLINE // READY",
      subtext: "Transmission channels open. Let's build something together!",
      variant: "cyan",
    });
  };

  return (
    <section
      id="contact"
      className="hero-bg relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="glow one opacity-40"></div>
      <div className="glow two opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with AI Terminal Console Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Futuristic Status Badge Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 rounded-full border border-cyan-400/30 bg-black/40 px-5 py-2 backdrop-blur-md mb-6">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300">
              <span className="status-dot w-2 h-2" />
              SYSTEM STATUS: ONLINE
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="font-mono text-[11px] text-emerald-400">
              CONNECTION: SECURE (TLS 1.3)
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="font-mono text-[11px] text-cyan-300">
              READY TO CONNECT
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Initiate <span className="text-cyan-400">Transmission</span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind, interested in hiring, or want to collaborate on cutting-edge software? Send a direct message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card: Direct Comms & Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-cyan-400/20 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono tracking-widest mb-3">
                <FaSatelliteDish />
                <span>DIRECT CHANNELS</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Get In Touch
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I&apos;m always open to discussing new opportunities, freelance contracts, internships, or engineering partnerships. Let&apos;s turn visionary ideas into reality.
              </p>

              {/* Email Direct link */}
              <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-slate-900/60">
                <div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl shrink-0">
                  <FaEnvelope />
                </div>

                <div className="overflow-hidden">
                  <p className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                    Official Email
                  </p>
                  <a
                    href="mailto:hlagyumarma65@gmail.com"
                    className="font-medium text-sm sm:text-base text-white hover:text-cyan-300 transition truncate block"
                  >
                    hlagyumarma65@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="mt-10 pt-8 border-t border-white/[0.08]">
              <p className="text-xs font-mono text-gray-400 mb-4 uppercase tracking-wider">
                Network Grid
              </p>
              <div className="flex items-center gap-5 text-2xl sm:text-3xl text-gray-300">
                <motion.a
                  whileHover={{ y: -4, color: "#22d3ee" }}
                  href="https://github.com/hlagyumarma65-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition"
                  title="GitHub Profile"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, color: "#22d3ee" }}
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition"
                  title="Facebook Profile"
                >
                  <FaFacebook />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, color: "#22d3ee" }}
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Form: Transmission Console */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-cyan-400/20 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-10"
          >
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono tracking-widest mb-6">
              <FaTerminal />
              <span>DISPATCH CONSOLE</span>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message transmission received. Thank you!");
              }}
            >
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Visitor Identity
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  onFocus={handleConsoleFocus}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-sm sm:text-base outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Communication Frequency / Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  onFocus={handleConsoleFocus}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-sm sm:text-base outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Payload Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your project, timeline, or inquiry..."
                  onFocus={handleConsoleFocus}
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-sm sm:text-base outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="hero-btn w-full rounded-xl bg-cyan-400 py-4 font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,0.4)] transition hover:bg-cyan-300 text-sm sm:text-base"
              >
                Transmit Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}