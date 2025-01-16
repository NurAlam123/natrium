"use client";

import { randomNumber } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import AbsoluteCinemaScreen from "./AbsoluteCinemaScreen";

const DURATION = 18;
const DELAY = 22;

const AbsoluteCinema = () => {
  const [startCinema, setStartCinema] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();

  const top = randomNumber(10, 80);
  const left = randomNumber(60, 600);
  const rotate = randomNumber(-45, 45);

  const startTheCinema = () => {
    setStartCinema(true);
    const timeoutID = setTimeout(stopTheCinema, DELAY * 1000);
    timeoutRef.current = timeoutID;
  };

  const stopTheCinema = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStartCinema(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {startCinema && (
          <>
            <AbsoluteCinemaScreen
              key="absolute-cinema"
              duration={DURATION}
              close={stopTheCinema}
            />
          </>
        )}
      </AnimatePresence>
      <div
        className="hidden md:block absolute rotate w-fit h-fit rounded-lg overflow-hidden"
        suppressHydrationWarning
        style={{
          top: `${top}px`,
          left: `${left}px`,
          rotate: `${rotate}deg`,
          mixBlendMode: "overlay",
        }}
        onClick={startTheCinema}
      >
        <Image
          src="/absolute-cinema.webp"
          alt="absolute cinema easter egg"
          width={100}
          height={100}
          className="object-fill"
        />
      </div>
    </>
  );
};

export default AbsoluteCinema;
