"use client";

import { motion, Variants } from "framer-motion";
import { Sodium } from "@/components/ui";
import { useMediaQuery } from "react-responsive";
import { LOADING_SCREEN_DURATION } from "@/constants";

const EXIT_DELAY = LOADING_SCREEN_DURATION;
const EXIT_DURATION = 0.8;
const ANIMATION_DELAY = EXIT_DELAY - EXIT_DURATION;
const ANIMATION_DURATION = EXIT_DELAY - ANIMATION_DELAY;

// Sodium Electorn Spinning Screen
const SodiumLoadingScreen = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const spinningAnimationVariants: Variants = {
    initial: {
      left: "0px",
      top: "0px",
      scale: isDesktop ? 8 : 4,
    },
    animate: {
      scale: isDesktop ? 2.3 : 1.4,
      top: "50%",
      left: "50%",
      translateX: "-50%",
      translateY: "-50%",
      transition: {
        delay: ANIMATION_DELAY,
        duration: ANIMATION_DURATION,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0.1,
      transition: {
        duration: EXIT_DURATION,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className="bg-dark fixed z-[99] overflow-hidden h-svh w-svw">
      <Sodium
        initial="initial"
        exit="exit"
        animate="animate"
        variants={spinningAnimationVariants}
        className="sodium-loading-screen opacity-20 absolute"
      />
    </motion.div>
  );
};

export default SodiumLoadingScreen;
