import Sodium from "@/components/Sodium";
import { navigation } from "@/constants";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="flex h-svh max-h:[280px] relative justify-center items-center">
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
            <div className="font-bebas-neue font-semibold not-italic text-[4rem] md:text-[12rem] tracking-wider text-secondary leading-tight">
              Nur Alam
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="md:text-[1.3rem] space-x-4 text-primary">
            {navigation.slice(1).map((navLink) => (
              <Link
                key={navLink.title}
                href={navLink.href}
                className="hover:text-blue group space-x-1"
              >
                <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                  &gt;
                </span>
                <span>{navLink.title}</span>
              </Link>
            ))}
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
