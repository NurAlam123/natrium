"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const containerPos = containerRef.current?.getBoundingClientRect();
    const top = containerPos?.top;

    if (!top) return;
    const bottom = document.documentElement.scrollHeight - top - 240;

    if (y > top && !show && y < bottom) {
      setShow(true);
      return;
    }

    if ((y <= top || y > bottom) && show) {
      setShow(false);
      return;
    }
  });

  return (
    <motion.section
      ref={containerRef}
      className="hidden md:flex justify-center items-center fixed top-full z-10 ms-5 pb-4 shadow-sm"
      variants={{
        visible: {
          y: "-100%",
        },
        hidden: {
          y: "0%",
        },
      }}
      animate={show ? "visible" : "hidden"}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.nav
        ref={navRef}
        className="bg-dark border-dark-2 border p-4 text-sm z-10 *:text-secondary *:font-medium *:bg-dark-1 *:px-4 *:py-2 *:rounded-2xl rounded-xl flex flex-col gap-2 *:border *:border-dark-2 *:transition *:text-center"
      >
        <Link href="/" className="hover:bg-dark/20">
          Home
        </Link>
        <Link href="#about" className="hover:bg-dark/20">
          About
        </Link>
        <Link href="#projects" className="hover:bg-dark/20">
          Projects
        </Link>
        <Link href="#contact" className="hover:bg-dark/20">
          Contact
        </Link>
      </motion.nav>
    </motion.section>
  );
};

export default Navbar;
