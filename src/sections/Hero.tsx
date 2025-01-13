import { FadeIn } from "@/components/animation/layout";
import {
  HeroNavigation,
  HeroSodiumAnimation,
  NameAndAddress,
} from "@/components/Hero";
import { ScrollDown } from "@/components/ui";
import { HERO_FADE_IN_DELAY } from "@/constants/animation-times";

const Hero = () => {
  return (
    <section className="h-[100svh] lg:h-screen flex justify-center items-center relative overflow-hidden">
      <HeroSodiumAnimation />
      <FadeIn delay={HERO_FADE_IN_DELAY}>
        <NameAndAddress />
        <HeroNavigation />
      </FadeIn>
      <ScrollDown />
    </section>
  );
};

export default Hero;
