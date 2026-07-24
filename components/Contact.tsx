"use client";

import { motion } from "motion/react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="hero-bg min-h-screen py-32 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
            CONTACT
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?
            Feel free to contact me anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
        >
          <h3 className="text-4xl font-bold mb-8">
            Get In Touch
          </h3>

          <p className="text-gray-400 leading-9">
            I&apos;m always interested in freelance work,
            internships and exciting projects.
            If you have any questions,
            don&apos;t hesitate to contact me.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Email
              </p>

              <a
                href="mailto:hlagyumarma65@gmail.com"
                className="font-medium hover:text-cyan-400 transition"
              >
                hlagyumarma65@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex gap-5 text-3xl">

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
        </motion.div>
                {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
        >
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <textarea
              rows={7}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <button
              type="submit"
              className="hero-btn rounded-full bg-cyan-400 px-10 py-4 font-semibold text-black hover:bg-cyan-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        </div>
      </div>
    </section>
  );
}

          