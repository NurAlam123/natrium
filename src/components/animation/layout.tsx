"use client";
import { motion } from "framer-motion";

export const SlideIn = ({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) => {
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

//export const
