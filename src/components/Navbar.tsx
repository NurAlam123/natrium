"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { RefObject, useRef, useState } from "react";
import { navigation } from "@/constants/index";

const Navbar = ({ parentRef }: { parentRef: RefObject<HTMLDivElement> }) => {
  const [show, setShow] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        {navigation.map((navLink) => (
          <Link
            key={navLink.title}
            href={navLink.href}
            className="hover:bg-dark/20"
          >
            {navLink.title}
          </Link>
        ))}
      </motion.nav>
    </motion.section>
  );
};

export default Navbar;
