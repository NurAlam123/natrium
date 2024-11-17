"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.div
      className="hidden md:flex justify-center items-center fixed top-full left-0 z-10 ms-5 pb-4 shadow-sm"
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.nav className="bg-dark border-dark-2 border p-4 text-sm z-10 *:text-primary *:border *:border-dark-1 *:bg-dark-1 *:px-4 *:py-2 *:rounded-2xl rounded-xl flex flex-col gap-2">
        <Link
          href="/"
          className="hover:bg-dark/20 hover:border hover:border-dark-2"
        >
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
    </motion.div>
  );
};

export default Navbar;
