import { create } from "zustand";

type ModalState = {
  showModal: boolean;
  modalID: string;
  closeModal: () => void;
  toggleModal: (modalID: string) => void;
};

const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  closeModal: () => set({ showModal: false, modalID: "" }),
  modalID: "",
  toggleModal: (modalID) =>
    set((state) => ({ showModal: !state.showModal, modalID: modalID })),
}));

export default useModalStore;
