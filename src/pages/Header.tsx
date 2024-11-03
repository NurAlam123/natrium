import { bebasNeue } from "@/app/fonts";
import clsx from "clsx";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const Header = () => {
  return (
    <section className="flex h-lvh justify-center items-center">
      <div>
        <div>
          {/* <NaElectrons /> */}
          <div>
            <div className="text-gray flex items-center gap-2">
              <p>
                <FaLocationArrow />
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <p
              className={clsx(
                bebasNeue.className,
                "font-semibold not-italic text-[5rem] md:text-[14rem] tracking-wider text-secondary",
              )}
            >
              Nur Alam
            </p>
          </div>
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
    </section>
  );
};

export default Header;
