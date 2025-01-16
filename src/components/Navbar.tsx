"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, Variants } from "framer-motion";
import { navigation } from "@/constants/index";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const Navbar: React.FC<Props> = ({ children }) => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  scrollYProgress.on("change", (latestValue) => {
    setShow(latestValue >= 0.01 && latestValue < 0.98);
  });

  return (
    <section ref={containerRef} className="relative">
      <AnimatePresence mode="wait">
        {show && (
          <div>
            <div
              ref={navRef}
              className={cn(
                "max-w-36 hidden overflow-hidden md:block fixed top-1/2 -translate-x-[calc(100%+30px)] z-[10]",
              )}
              key="navbar"
            >
              <DesktopNavbar key="desktop-navbar" />
            </div>
          </div>
        )}
      </AnimatePresence>
      {children}
    </section>
  );
};

const DesktopNavbar = () => {
  const desktopVariant: Variants = {
    initial: {
      x: "-100%",
      scale: 0.7,
      opacity: 0,
    },
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
      scale: 0.7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={desktopVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="bg-dark border-dark-2 border p-4 text-sm z-10  rounded-xl flex flex-col gap-2 top-0 left-0 -tanslate-x-2"
    >
      {navigation.map((navLink) => (
        <Link
          key={navLink.title}
          href={navLink.href}
          className="hover:bg-dark/20 text-secondary font-medium bg-dark-1 px-4 py-2 rounded-2xl border border-dark-2 transition duration-200 text-center"
        >
          {navLink.title}
        </Link>
      ))}
    </motion.nav>
  );
};

export default Navbar;
