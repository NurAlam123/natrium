"use client";

import CursorBlur from "@/components/CursorBlur";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const parentRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress: number) => {
    if (progress > 0 && progress < 1 && !show) {
      setShow(true);
      return;
    }
    if (progress <= 0 || (progress >= 1 && show)) {
      setShow(false);
      return;
    }
  });

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
          <Navbar show={show} />
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
