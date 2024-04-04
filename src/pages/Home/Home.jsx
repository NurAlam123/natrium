import { Link } from 'react-router-dom'
import './Home.css'
import useMouseHoverEffect from '../../hooks/useMouseHoverEffect'
import CursorBlur from '../../components/shared/CursorBlur/CursorBlur';
import { FaLocationArrow } from 'react-icons/fa';

const Home = () => {
    useMouseHoverEffect();
    return (
        <>
            <CursorBlur />
            <div>
                <div className='location'>
                    <p><FaLocationArrow /></p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <p className='home-name'>Nur Alam</p><br />
            </div>
            <div className="home-container">
                <Link to="/about" className="link">
                    <span className="link-arrow"> &gt; </span>About
                </Link>
                <Link to="/projects" className="link">
                    <span className="link-arrow"> &gt; </span>Projects
                </Link>
                <Link to="/contact" className="link">
                    <span className="link-arrow"> &gt; </span>Contact
                </Link>
            </div>
        </>
    )
}

export default Home