"use client";

import CursorBlur from "@/components/CursorBlur";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CursorBlur />
      <Loader />
      <motion.section
        style={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 6.56,
          duration: 1,
        }}
      >
        <Hero />
        <div ref={parentRef} className="relative">
          <Navbar parentRef={parentRef} />
          <div>
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
        <Footer />
      </motion.section>
    </>
  );
}
