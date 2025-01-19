"use client";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

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
      viewport={{
        once: true,
        //amount: 0.2,
      }}
      variants={{
        left: { x: "-100%", opacity: 0 },
        right: { x: "100%", opacity: 0 },
        animate: {
          x: 0,
          opacity: 1,
        },
      }}
      transition={{
        //type: "spring",
        duration: 0.5,
        delay: 0.5,
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

export const SlideUp: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { amount: 0.8 });

  const slideUpVariants: Variants = {
    initial: {
      y: 50,
      scale: 0.98,
      opacity: 0,
    },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        animate={isInView ? "show" : "initial"}
        variants={slideUpVariants}
        className={className}
        viewport={{}}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
      >
        {children}
      </motion.div>
    </div>
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
