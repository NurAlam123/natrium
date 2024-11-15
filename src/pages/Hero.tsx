import { bebasNeue } from "@/app/fonts";
import { TextDoubleBounce } from "@/components/animation/text";
import Loader from "@/components/Loader";
import Sodium from "@/components/Sodium";
import clsx from "clsx";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="flex h-svh max-h:[280px] relative justify-center items-center">
      <Loader />
      <div>
        <div>
          <div className="text-gray flex items-center gap-2">
            <p>
              <FaLocationArrow />
            </p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="relative">
            <div className="opacity-20 absolute -top-20 -left-4 -z-[100]">
              <Sodium />
            </div>
            <div
              className={clsx(
                bebasNeue.className,
                "font-semibold not-italic text-[5rem] md:text-[14rem] tracking-normal text-secondary leading-tight",
              )}
            >
              <TextDoubleBounce>Nur Alam</TextDoubleBounce>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="md:text-[1.3rem] space-x-4 text-primary">
            <Link href="#about" className="hover:text-blue group space-x-1">
              <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                &gt;
              </span>
              <span>About</span>
            </Link>
            <Link href="#projects" className="hover:text-blue group space-x-1">
              <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                &gt;
              </span>
              <span>Projects</span>
            </Link>
            <Link href="#contact" className="hover:text-blue group space-x-1">
              <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                &gt;
              </span>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white/70 tracking-widest font-thin uppercase absolute left-0 bottom-16 mx-5">
        <span className="block mb-2">scroll</span>
        <span className="animate-bounce block">
          <FaArrowDown className="text-gray" />
        </span>
      </div>
    </section>
  );
};

export default Hero;
