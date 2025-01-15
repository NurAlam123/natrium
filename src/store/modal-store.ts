import { create } from "zustand";

type ModalState = {
  showModal: boolean;
  closeModal: () => void;
  toggleModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  closeModal: () => set({ showModal: false }),
  toggleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default useModalStore;
