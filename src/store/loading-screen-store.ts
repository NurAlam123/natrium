import { create } from "zustand";

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: true,
  setIsLoading: (value) => set({ isLoading: value }),
}));

export default useLoadingStore;
