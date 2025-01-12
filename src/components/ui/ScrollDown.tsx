import { FaArrowDown } from "react-icons/fa";

const ScrollDown = () => {
  return (
    <div className="text-white/70 tracking-widest font-thin uppercase absolute left-0 bottom-16 mx-5">
      <span className="block mb-2">scroll</span>
      <span className="animate-bounce block">
        <FaArrowDown className="text-daisy" />
      </span>
    </div>
  );
};

export default ScrollDown;
