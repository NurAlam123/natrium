"use client";

import { HERO_FADE_IN_DELAY } from "@/constants/animation-times";
import { motion, MotionProps, Variants } from "framer-motion";

type Props = {
  children: string;
  className?: string;
};

export const TextFlip: React.FC<Props> = ({ children }) => {
  const DELAY = 0.1;
  const DURATION = 0.2;

  const chars = children.toString().split("");

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
  const STAGGER_CHILDREN_DELAY = 0.8;
  const DURATION = 1.5;

  const variants: Variants = {
    animate: {
      scale: [1, 0.9, 0.9, 1.2, 1],
      rotateZ: ["0deg", "15deg", "-15deg", "15deg", "0deg"],
      fontWeight: [600, 100, 100, 600],
    },
  };
  const chars = children?.toString().split("");
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

const TextSlideInChildren: React.FC<Props & { duration: number }> = ({
  children,
  duration,
}) => {
  const chars = children.toString().split("");

  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          aria-hidden
          key={i}
          className="inline-block"
          variants={textSlideInVariants}
          transition={{
            duration: duration,
          }}
        >
          {char}
          {char === " " && <>&nbsp;</>}
        </motion.span>
      ))}
    </>
  );
};

const TextSlideInBase: React.FC<
  Props & MotionProps & { childrenDuration: number }
> = ({ children, childrenDuration, ...rest }) => {
  return (
    <motion.span
      className="inline-block overflow-hidden"
      initial="initial"
      {...rest}
    >
      <span className="sr-only">{children}</span>
      <TextSlideInChildren duration={childrenDuration}>
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
  }
> = ({ children, rootRef, delay = 0.4 }) => {
  const STAGGER_CHILDREN_DELAY = 0.1;
  const DURATION = 0.1;

  return (
    <TextSlideInBase
      whileInView="animate"
      viewport={{
        once: true,
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
