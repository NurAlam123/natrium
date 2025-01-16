"use client";

import { HERO_FADE_IN_DELAY } from "@/constants/animation-times";
import { textSplit } from "@/lib/utils";
import { motion, MotionProps, Variants } from "framer-motion";

type Props = {
  children: string;
  className?: string;
};

export const TextFlip: React.FC<Props> = ({ children }) => {
  const DELAY = 0.1;
  const DURATION = 0.2;

  const chars = textSplit(children.toString());

  return (
    <div>
      <span className="sr-only">{children}</span>
      <motion.div
        initial="initial"
        animate="animate"
        className="relative whitespace-nowrap"
      >
        <p>
          {chars.map((char, i) => (
            <motion.span
              aria-hidden
              key={i}
              variants={{
                initial: {
                  y: 0,
                },
                animate: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeOut",
                duration: DURATION,
                delay: DELAY * i + HERO_FADE_IN_DELAY,
              }}
              className="inline-block"
            >
              {char}
              {char === " " && <>&nbsp;</>}
            </motion.span>
          ))}
        </p>
        <p className="absolute inset-0">
          {chars.map((char, i) => (
            <motion.span
              aria-hidden
              key={i}
              variants={{
                initial: {
                  y: "100%",
                },
                animate: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeOut",
                duration: DURATION,
                delay: DELAY * i + HERO_FADE_IN_DELAY,
              }}
              className="inline-block"
            >
              {char}
              {char === " " && <>&nbsp;</>}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
};

export const HeroTextFancyAnimation: React.FC<Props> = ({ children }) => {
  const STAGGER_CHILDREN_DELAY = 0.2;
  const DURATION = 0.5;

  const variants: Variants = {
    animate: {
      scale: [1, 1.4, 1],
    },
  };

  const chars = textSplit(children.toString());
  const REPEAT_DELAY = chars ? chars.length * STAGGER_CHILDREN_DELAY + 5 : 0;

  return (
    <motion.span
      animate="animate"
      transition={{
        staggerChildren: STAGGER_CHILDREN_DELAY,
        delayChildren: HERO_FADE_IN_DELAY + 1.4,
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
          transition={{
            ease: "easeOut",
            repeat: Infinity,
            duration: DURATION,
            repeatDelay: REPEAT_DELAY,
          }}
        >
          {char}
          {char === " " && <>&nbsp;</>}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Text slide in variants
const textSlideInVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const TextSlideInChildren: React.FC<
  Props & { duration: number; words?: boolean }
> = ({ children, duration, words }) => {
  const chars = textSplit(children.toString(), words);

  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          aria-hidden
          key={i}
          className="inline-block"
          variants={textSlideInVariants}
          transition={{
            ease: "easeOut",
            duration: duration,
          }}
        >
          {char}
          {(char === " " || words) && <>&nbsp;</>}
        </motion.span>
      ))}
    </>
  );
};

const TextSlideInBase: React.FC<
  Props & MotionProps & { childrenDuration: number; words?: boolean }
> = ({ children, childrenDuration, words = false, ...rest }) => {
  return (
    <motion.span
      className="inline-block overflow-hidden"
      initial="initial"
      {...rest}
    >
      <span className="sr-only">{children}</span>
      <TextSlideInChildren words={words} duration={childrenDuration}>
        {children}
      </TextSlideInChildren>
    </motion.span>
  );
};

export const TextSlideIn: React.FC<Props> = ({ children }) => {
  const STAGGER_CHILDREN_DELAY = 0.2;
  const DURATION = 0.1;

  return (
    <TextSlideInBase
      animate="animate"
      transition={{
        staggerChildren: STAGGER_CHILDREN_DELAY,
        delayChildren: HERO_FADE_IN_DELAY,
      }}
      childrenDuration={DURATION}
    >
      {children}
    </TextSlideInBase>
  );
};

// Text slide in while the container is in view
export const TextSlideInWhenInView: React.FC<
  Props & {
    rootRef?: React.RefObject<Element>;
    delay?: number;
    words?: boolean;
  }
> = ({ children, rootRef, delay = 0.4, words = false }) => {
  const STAGGER_CHILDREN_DELAY = 0.1;
  const DURATION = 0.1;

  return (
    <TextSlideInBase
      words={words}
      whileInView="animate"
      viewport={{
        //once: true,
        amount: 1,
        ...(rootRef && { root: rootRef }),
      }}
      transition={{
        staggerChildren: STAGGER_CHILDREN_DELAY,
        delayChildren: delay,
      }}
      childrenDuration={DURATION}
    >
      {children}
    </TextSlideInBase>
  );
};

export const TextTilt: React.FC<Props> = ({ children }) => {
  const chars = textSplit(children.toString(), true);

  const variants: Variants = {
    initial: {
      skewY: 10,
      opacity: 0.7,
    },
    animate: {
      skewY: 0,
      opacity: 1,
    },
  };

  return (
    <motion.span
      initial="initial"
      whileInView="animate"
      className="inline-block overflow-hidden"
      viewport={{
        amount: 1,
      }}
      transition={{
        ease: "easeOut",
        delay: 0.8,
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={variants}
          transition={{
            ease: "easeOut",
            duration: 0.4,
          }}
        >
          {char}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
};
