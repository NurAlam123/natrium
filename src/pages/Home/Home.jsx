import { Link } from 'react-router-dom';
import useMouseHoverEffect from '../../hooks/useMouseHoverEffect';
import { FaLocationArrow } from 'react-icons/fa';
import NaElectrons from '../../components/shared/ui/NaElectrons/NaElectrons';
import CursorBlur from '../../components/shared/CursorBlur/CursorBlur';

const Home = () => {
  useMouseHoverEffect();
  return (
    <div className="flex h-lvh justify-center items-center">
      <CursorBlur />
      <section>
        <main>
          <NaElectrons />
          <div>
            <div className="text-gray flex items-center gap-2">
              <p>
                <FaLocationArrow />
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <p className="font-bebas font-semibold not-italic text-[5rem] md:text-[14rem] tracking-wider text-secondary">
              Nur Alam
            </p>
          </div>
          <div className="md:text-[1.3rem] space-x-4 text-primary">
            <Link to="/about" className="hover:text-blue group space-x-1">
              <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                &gt;
              </span>
              <span>About</span>
            </Link>
            <Link to="/projects" className="hover:text-blue group space-x-1">
              <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                &gt;
              </span>
              <span>Projects</span>
            </Link>
            <Link to="/contact" className="hover:text-blue group space-x-1">
              <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
                &gt;
              </span>
              <span>Contact</span>
            </Link>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;
