import { HeroNavigation, NameAndAddress } from "@/components/Hero";
import { ScrollDown } from "@/components/ui";

const Hero = () => {
  return (
    <section className="h-svh flex justify-center items-center relative">
      <div>
        <NameAndAddress />
        <HeroNavigation />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Hero;
