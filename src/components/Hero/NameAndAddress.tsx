import { FaLocationArrow } from "react-icons/fa";

const NameAndAddress = () => {
  return (
    <div>
      <div className="text-daisy flex items-center gap-2">
        <span>
          <FaLocationArrow />
        </span>
        <address>Dhaka, Bangladesh</address>
      </div>
      <h1 className="font-bebas-neue font-semibold not-italic sm:text-[64px] text-[81px] md:text-[258px] tracking-wider text-secondary !leading-tight">
        Nur Alam
      </h1>
    </div>
  );
};

export default NameAndAddress;
