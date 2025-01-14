"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SlideIn: React.FC<
  {
    direction?: "left" | "right";
  } & Props
> = ({ children, direction = "left" }) => {
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

export const BlurOut: React.FC<Props> = ({ children }) => {
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

export const FadeInView: React.FC<
  {
    once?: boolean;
    amount?: number;
  } & Props
> = ({ children, once = false, className, amount = 0.3 }) => {
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

export const FadeIn: React.FC<
  Props & {
    delay: number;
  }
> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
