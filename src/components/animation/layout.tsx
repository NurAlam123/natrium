"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export const SlideIn = ({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) => {
  return (
    <motion.div
      initial={direction}
      whileInView="animate"
      variants={{
        left: { x: "-100%", opacity: 0 },
        right: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const BlurOut = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

const fadeInViewVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  fadeIn: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export const FadeInView: React.FC<{
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}> = ({ children, once = false, className, amount = 0.3 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: amount, once: once });

  return (
    <motion.div
      ref={containerRef}
      animate={inView ? "fadeIn" : "initial"}
      variants={fadeInViewVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
