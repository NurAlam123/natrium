"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SodiumLoadingScreen } from "./ui";
import { LOADING_SCREEN_DURATION } from "@/constants";

// Main Loading Screen
const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        // scroll to the hero section
        window.scrollTo(0, 0);
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
