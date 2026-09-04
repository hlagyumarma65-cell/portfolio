"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFingerprint,
} from "react-icons/fa";
import { useAssistant } from "@/components/assistant/useAssistant";

const sampleCerts = [
  {
    id: "CERT_001",
    title: "Computer Science & Technology",
    issuer: "Diploma Engineering Program",
    date: "In Progress (2028)",
    status: "VERIFIED",
    grade: "Distinction Track",
    hash: "0x89F4...22D3",
  },
  {
    id: "CERT_002",
    title: "Full Stack Web Engineering",
    issuer: "Modern React & Next.js Architecture",
    date: "Certified 2024",
    status: "VERIFIED",
    grade: "Grade A+",
    hash: "0x4C1B...9742",
  },
  {
    id: "CERT_003",
    title: "Python & Django Backend Architecture",
    issuer: "Software Development Standards",
    date: "Certified 2024",
    status: "VERIFIED",
    grade: "Advanced Track",
    hash: "0x3B82...5FB5",
  },
];

export default function Certificates() {
  const { triggerAssistant } = useAssistant();
  const [scanningId, setScanningId] = useState<string | null>(null);
  const [verifiedIds, setVerifiedIds] = useState<string[]>([]);

  const handleScan = (id: string, title: string) => {
    setScanningId(id);
    triggerAssistant("cert-scan", {
      title: "SECURITY SCAN",
      status: "🤖 SCANNING HASH...",
      subtext: `Verifying credentials for ${title}`,
      variant: "emerald",
    });

    setTimeout(() => {
      setVerifiedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setScanningId(null);
    }, 1400);
  };

  return (
    <section
      id="certificates"
      className="relative bg-[#020617] px-4 sm:px-6 py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-80 w-full max-w-4xl bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-mono text-cyan-300 mb-4">
            CRYPTOGRAPHIC CREDENTIALS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Accredited <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Verified qualifications and technical certifications recognized for modern software engineering excellence.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleCerts.map((cert, index) => {
            const isScanning = scanningId === cert.id;
            const isVerified = verifiedIds.includes(cert.id);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={() => handleScan(cert.id, cert.title)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] flex flex-col justify-between"
              >
                {/* Visual Laser Scan Effect */}
                {isScanning && (
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "400%" }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] z-20 pointer-events-none"
                  />
                )}

                <div>
                  {/* Card Header with Icon & ID */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-2xl group-hover:scale-105 transition">
                      <FaAward />
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400 bg-slate-900/60 border border-white/10 px-2.5 py-1 rounded-full">
                      <FaFingerprint className="text-cyan-400" />
                      {cert.id}
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {cert.issuer}
                  </p>

                  <p className="mt-3 text-xs font-mono text-cyan-400/80">
                    Period: {cert.date}
                  </p>
                </div>

                {/* Bottom Verification Status */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="font-mono text-[11px] text-gray-500">
                    {cert.hash}
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                    <FaCheckCircle className="text-[10px]" />
                    {isScanning ? "SCANNING..." : isVerified ? "✓ VERIFIED" : "VERIFIED"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audit Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-gray-500">
            Click any credential badge to trigger live SHA-256 cryptographic verification.
          </p>
        </div>
      </div>
    </section>
  );
}