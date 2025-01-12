import { FaLocationArrow } from "react-icons/fa";
import { Sodium } from "../ui";

const NameAndAddress = () => {
  return (
    <div>
      <div className="text-daisy flex items-center gap-2">
        <span>
          <FaLocationArrow />
        </span>
        <address>Dhaka, Bangladesh</address>
      </div>
      <div className="relative">
        <div className="opacity-20 absolute -top-20 -left-4 -z-[100]">
          <Sodium />
        </div>
        <p className="font-bebas-neue font-semibold not-italic sm:text-[64px] text-[81px] md:text-[258px] tracking-wider text-secondary !leading-tight">
          Nur Alam
        </p>
      </div>
    </div>
  );
};

export default NameAndAddress;
