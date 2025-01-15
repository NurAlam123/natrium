"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { SodiumLoadingScreen } from "./ui";
import { LOADING_SCREEN_DURATION } from "@/constants/animation-times";
import useLoadingStore from "@/store/loading-screen-store";

// Main Loading Screen
const LoadingScreen = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.remove("no-scroll");
      return;
    }

    // Prevent scrolling in loading screen
    document.body.classList.add("no-scroll");

    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, LOADING_SCREEN_DURATION * 1000);
    })();
  });

  return (
    <AnimatePresence mode="wait">
      {isLoading && <SodiumLoadingScreen key="loading-screen" />}
    </AnimatePresence>
  );
};

export default LoadingScreen;
