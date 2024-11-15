"use client";

import { motion } from "framer-motion";

export const TextDoubleBounce = ({ children }: { children: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden"
    >
      <motion.p
        className="leading-none"
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" },
        }}
      >
        {children}
      </motion.p>
      <motion.p
        className="absolute inset-0 leading-none"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 },
        }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};
