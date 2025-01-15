"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SodiumLoadingScreen } from "./ui";
import { LOADING_SCREEN_DURATION } from "@/constants/animation-times";

// Main Loading Screen
const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling in loading screen
    document.body.classList.toggle("no-scroll");

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
