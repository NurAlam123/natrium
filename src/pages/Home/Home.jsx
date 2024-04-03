import { Link } from 'react-router-dom'
import './Home.css'
import useMouseHoverEffect from '../../hooks/useMouseHoverEffect'

const Home = () => {
    useMouseHoverEffect();
    return (
        <>
            <div className="cursor" id="cursor"></div>
            <div className="name">
                <span>Nur Alam</span>
            </div>
            <div className="container">
                <Link to="/about" className="link">
                    <span className="link-arrow"> &gt; </span>About
                </Link><br />
                <Link to="/projects" className="link">
                    <span className="link-arrow"> &gt; </span>Projects
                </Link><br />
                <Link to="/contact" className="link">
                    <span className="link-arrow"> &gt; </span>Contact
                </Link><br />
            </div>
        </>
    )
}

export default Home