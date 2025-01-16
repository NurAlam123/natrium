import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// 20th century fox intro screen
const AbsoluteCinemaScreen: React.FC<{
  duration: number;
  close: () => void;
}> = ({ duration, close }) => {
  const loadingAnimation: Variants = {
    initial: {
      top: 0,
    },
    slideUp: {
      top: "-100%",
      scale: 0.6,
      transition: {
        delay: 10,
        duration: duration,
        ease: "easeOut",
      },
    },
    exit: {
      top: "-100%",
      scale: 0.6,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const [mute, setMute] = useState(true);

  return (
    <motion.div
      variants={loadingAnimation}
      initial="initial"
      animate="slideUp"
      exit="exit"
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
      <button
        className="absolute bg-dark/55 shadow-md drop-shadow-md border border-dark-2 left-0 bottom-0 ms-8 mb-8 w-12 h-12 p-2 rounded-full flex items-center justify-center"
        onClick={() => close()}
      >
        <IoClose />
      </button>
    </motion.div>
  );
};

export default AbsoluteCinemaScreen;
