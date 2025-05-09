"use client";

import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import useModalStore from "@/store/modal-store";
import useModalEsc from "@/hooks/useModalEsc";
import { useEffect } from "react";

const modalVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
  },
};

const contentVariant: Variants = {
  initial: {
    scale: 0.4,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

const Modal: React.FC<Props & { id: string }> = ({ children, id }) => {
  const showModal = useModalStore((state) => state.showModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const modalID = useModalStore((state) => state.modalID);

  const correctModal = showModal && modalID === id;

  useModalEsc(closeModal, showModal);

  return (
    <AnimatePresence mode="wait">
      {correctModal && (
        <motion.div
          id={id}
          key="modal"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalVariant}
          transition={{
            ease: "easeInOut",
            duration: 0.4,
          }}
          className={cn(
            "w-full h-full top-0 left-0 bg-dark/90 backdrop-blur fixed justify-center items-center z-[20] flex",
          )}
        >
          <div className="absolute inset-0" onClick={closeModal} />
          <motion.div
            key="modal-content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={contentVariant}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
            }}
            className="relative max-w-screen-md rounded-xl border border-dark-3 bg-dark h-[90%] mx-2 p-6 z-[22]"
          >
            <button
              onClick={closeModal}
              className="absolute flex justify-center items-center top-0 right-0 w-6 h-6 bg-daisy text-dark mx-1 my-1 rounded-full"
            >
              <IoClose />
            </button>
            <div className="max-w-full h-full py-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
