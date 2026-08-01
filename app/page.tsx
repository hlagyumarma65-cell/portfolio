"use client";

import { useState } from "react";

import Loader from "@/components/loader/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#020617] text-white">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Services />

        <Certificates />

        <Contact />

        <Footer />
      </main>
    </>
  );
}