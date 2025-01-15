import { FaLocationArrow } from "react-icons/fa";
import { HeroTextFancyAnimation, TextFlip } from "../animation/text";

const NameAndAddress = () => {
  return (
    <div>
      <div className="text-daisy flex text-center items-center gap-2">
        <span>
          <FaLocationArrow />
        </span>
        <address className="overflow-hidden">
          <TextFlip>Dhaka, Bangladesh</TextFlip>
        </address>
      </div>
      <h1 className="font-bebas-neue font-semibold text-center not-italic sm:text-[64px] text-[81px] md:text-[258px] tracking-wider text-secondary !leading-tight [font-display:swap]">
        <HeroTextFancyAnimation>Nur Alam</HeroTextFancyAnimation>
      </h1>
    </div>
  );
};

export default NameAndAddress;
