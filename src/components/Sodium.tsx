"use client";

import { motion } from "framer-motion";

const Sodium = () => {
  return (
    <div className="flex items-center justify-center absolute">
      <div className="w-20 h-20 bg-white/20 rounded-full flex justify-center items-center">
        <span className="font-semibold">Na</span>
      </div>
      {/* 1st shell - K shell */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
        className="shell size-[150px]"
      >
        {/* 1s1 */}
        <div className="electron top-1/2 absolute" />
        {/* 1s2 */}
        <div className="electron left-full top-1/2 absolute" />
      </motion.div>

      {/* 2nd shell - L shell */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 4,
        }}
        className="shell size-[250px]"
      >
        <div className="absolute top-1/2">
          {/* 2s1 */}
          <div className="electron" />
          {/* 2s2 */}
          <div className="electron" />
        </div>
        <div className="absolute top-0 left-1/2 flex flex-row">
          {/* 2p1 */}
          <div className="electron left-full top-1/2" />
          {/* 2p2 */}
          <div className="electron top-0 left-1/2" />
        </div>
        <div className="absolute left-full top-1/2">
          {/* 2p3 */}
          <div className="electron left-full top-1/2" />
          {/* 2p4 */}
          <div className="electron top-1/2 left-full" />
        </div>
        <div className="absolute left-1/2 top-full flex flex-row">
          {/* 2p5 */}
          <div className="electron" />
          {/* 2p6 */}
          <div className="electron top-full left-1/2" />
        </div>
      </motion.div>

      {/* 3rd shell - M shell */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 6,
        }}
        className="shell size-[350px]"
      >
        {/* 3s1 */}
        <div className="electron absolute top-1/2" />
      </motion.div>
    </div>
  );
};

export default Sodium;
