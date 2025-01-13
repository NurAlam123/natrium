import { HeroNavigation, NameAndAddress } from "@/components/Hero";
import { ScrollDown, Sodium } from "@/components/ui";

const Hero = () => {
  return (
    <section className="h-[100svh] lg:h-screen flex justify-center items-center relative overflow-hidden">
      <Sodium className="opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.7] lg:scale-[2.6] -z-[100]" />
      <div>
        <NameAndAddress />
        <HeroNavigation />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Hero;
