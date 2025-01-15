import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useModalStore from "@/store/modal-store";
import useModalEsc from "@/hooks/useModalEsc";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const showModal = useModalStore((state) => state.showModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const toggleModal = useModalStore((state) => state.toggleModal);
  useModalEsc(closeModal, showModal);

  return (
    <>
      {showModal && (
        <motion.div
          className={cn(
            "w-full h-full top-0 left-0 bg-dark/90 backdrop-blur fixed justify-center items-center z-[20] flex",
          )}
        >
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative max-w-screen-md rounded-xl border border-dark-3 bg-dark h-[90%] mx-2 p-6 z-[22]">
            <button
              onClick={toggleModal}
              className="absolute flex justify-center items-center top-0 right-0 w-6 h-6 bg-daisy text-dark mx-1 my-1 rounded-full"
            >
              <IoClose />
            </button>
            <div className="max-w-full h-full py-4">{children}</div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
