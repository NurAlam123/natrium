import {
  HeroNavigation,
  HeroSodiumAnimation,
  NameAndAddress,
} from "@/components/Hero";
import { ScrollDown } from "@/components/ui";

const Hero = () => {
  return (
    <section className="h-[100svh] lg:h-screen flex justify-center items-center relative overflow-hidden">
      <HeroSodiumAnimation />
      <div>
        <NameAndAddress />
        <HeroNavigation />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Hero;
