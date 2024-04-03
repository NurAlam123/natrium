import { Link } from 'react-router-dom'
import './Home.css'
import useMouseHoverEffect from '../../hooks/useMouseHoverEffect'
import CursorBlur from '../../components/shared/CursorBlur';

const Home = () => {
    useMouseHoverEffect();
    return (
        <>
            <CursorBlur />
            <div className="name">
                <span>Nur Alam</span>
            </div>
            <div className="container">
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