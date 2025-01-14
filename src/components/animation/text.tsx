"use client";

import { HERO_FADE_IN_DELAY } from "@/constants/animation-times";
import { motion, Variants } from "framer-motion";

export const TextDoubleBounce = ({ children }: { children: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden"
    >
      <motion.p
        className="leading-none"
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" },
        }}
      >
        {children}
      </motion.p>
      <motion.p
        className="absolute inset-0 leading-none"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 },
        }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

export const HeroTextFancyAnimation: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const STAGGER_CHILDREN_DELAY = 0.4;
  const DURATION = 0.8;

  const variants: Variants = {
    animate: {
      scale: [1, 0.9, 0.9, 1.2, 1],
      rotateZ: ["0deg", "15deg", "-15deg", "15deg", "0deg"],
      fontWeight: [600, 100, 100, 600],
    },
  };
  const chars = children?.toString().split("");

  return (
    <motion.span
      animate="animate"
      transition={{
        staggerChildren: STAGGER_CHILDREN_DELAY,
        duration: DURATION,
        delayChildren: HERO_FADE_IN_DELAY + 0.4,
      }}
      className="inline-block"
    >
      <span className="sr-only">{children}</span>
      {chars?.map((char, i) => (
        <motion.span
          aria-hidden
          key={i}
          variants={variants}
          className="inline-block"
        >
          {char}
          {char === " " && <>&nbsp;</>}
        </motion.span>
      ))}
    </motion.span>
  );
};
