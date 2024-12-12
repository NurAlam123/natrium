"use client";

import CursorBlur from "@/components/CursorBlur";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

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
        <div ref={parentRef} className="relative border">
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
