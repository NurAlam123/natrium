"use client";
import { useMediaQuery } from "react-responsive";
import { Sodium } from "../ui";
import {
  HERO_SODIUM_ANIMATION_DELAY,
  HERO_SODIUM_ANIMATION_DURATION,
} from "@/constants/animation-times";

const HeroSodiumAnimation = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  return (
    <Sodium
      initial={{
        scale: isDesktop ? 2.3 : 1.4,
        opacity: 0.1,
      }}
      animate={{
        scale: isDesktop ? 2.6 : 1.7,
        opacity: 0.2,
      }}
      transition={{
        duration: HERO_SODIUM_ANIMATION_DURATION,
        delay: HERO_SODIUM_ANIMATION_DELAY,
      }}
      style={{
        translateX: "-50%",
        translateY: "-50%",
        top: "50%",
        left: "50%",
      }}
      className="opacity-20 absolute -z-[100]"
    />
  );
};

export default HeroSodiumAnimation;
