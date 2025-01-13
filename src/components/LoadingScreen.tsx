"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SodiumLoadingScreen } from "./ui";

const DELAY = 3;

// Main Loading Screen
const LoadingScreen: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  //useEffect(() => {
  //  (async () => {
  //    setTimeout(() => {
  //      setIsLoading(false);
  //    }, DELAY * 1000);
  //  })();
  //});

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <SodiumLoadingScreen key="loading-screen" />
      ) : (
        <div key="main-content">{children}</div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
