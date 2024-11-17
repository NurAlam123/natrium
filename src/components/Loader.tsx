"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Sodium from "./Sodium";

const DELAY = 3;
const DURATION = 10;

// 20th century fox intro screen
const LoadingScreen = () => {
  const loadingAnimation: Variants = {
    initial: {
      top: 0,
    },
    exit: {
      left: "100%",
      scale: 0,
      transition: {
        delay: DELAY,
        duration: DURATION,
        ease: "easeOut",
      },
    },
  };
  const [mute, setMute] = useState(true);

  return (
    <motion.div
      variants={loadingAnimation}
      initial="initial"
      animate="exit"
      className="bg-dark fixed left-0 top-0 h-dvh w-dvw cursor-wait flex flex-col gap-2 justify-center items-center z-20"
    >
      <video
        muted={mute}
        autoPlay
        className="rounded-xl aspect-video object-cover opacity-55 size-full"
      >
        <source src="/20th_fox_century_intro.mp4" />
      </video>
      <button
        className="absolute bg-dark/55 shadow-md drop-shadow-md border border-dark-2 right-0 bottom-0 me-8 mb-8 w-12 h-12 p-2 rounded-full flex items-center justify-center"
        onClick={() => setMute(!mute)}
      >
        {mute ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </motion.div>
  );
};

// Sodium Electorn Spinning Screen
const SodiumLoadingScreen = () => {
  return (
    <motion.div
      exit={{
        scale: 0,
        left: "100%",
        transition: {
          delay: DELAY,
          ease: "easeOut",
        },
      }}
      className="bg-dark overflow-hidden fixed left-0 top-0 h-dvh w-dvw cursor-wait flex flex-col gap-2 z-20 "
    >
      <motion.div className="opacity-25">
        <Sodium className="scale-[4] md:scale-[10]" />
      </motion.div>
    </motion.div>
  );
};

// 20th century
export const V1Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, DELAY * 1000);
    })();
  });

  return (
    <AnimatePresence mode="wait">
      {isLoading && <LoadingScreen />}
    </AnimatePresence>
  );
};

// Main Loading Screen
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, DELAY * 1000);
    })();
  });

  return (
    <AnimatePresence mode="wait">
      {isLoading && <SodiumLoadingScreen />}
    </AnimatePresence>
  );
};

export default Loader;
