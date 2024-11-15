"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const LoadingScreen = () => {
  const [mute, setMute] = useState(true);

  const loadingAnimation: Variants = {
    initial: {
      top: 0,
    },
    exit: {
      left: "100%",
      scale: 0,
      transition: {
        delay: 8,
        ease: "easeOut"
      },
    },
  };

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

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 18000);
    })();
  });

  return (
    <AnimatePresence mode="wait">
      {isLoading && <LoadingScreen />}
    </AnimatePresence>
  );
};

export default Loader;
