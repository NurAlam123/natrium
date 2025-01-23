"use client";

import { randomNumber } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import RickRollVideo from "./RickRollVideo";

const DURATION = 18;
const DELAY = 22;

const RickRoll = () => {
  const [startRoll, setStartRoll] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();

  const top = randomNumber(10, 80);
  const right = randomNumber(60, 400);
  const rotate = randomNumber(-45, 45);

  const startTheRoll = () => {
    setStartRoll(true);
    const timeoutID = setTimeout(stopTheRoll, DELAY * 1000);
    timeoutRef.current = timeoutID;
  };

  const stopTheRoll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStartRoll(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {startRoll && (
          <>
            <RickRollVideo
              key="rick-roll"
              duration={DURATION}
              close={stopTheRoll}
            />
          </>
        )}
      </AnimatePresence>
      <div
        className="hidden cursor-pointer md:block absolute rotate w-fit h-fit rounded-lg overflow-hidden"
        suppressHydrationWarning
        style={{
          top: `${top}px`,
          right: `${right}px`,
          rotate: `${rotate}deg`,
          mixBlendMode: "overlay",
        }}
        onClick={startTheRoll}
      >
        <Image
          src="/rock_egg.webp"
          alt="absolute cinema easter egg"
          width={100}
          height={100}
          className="object-fill"
        />
      </div>
    </>
  );
};

export default RickRoll;
