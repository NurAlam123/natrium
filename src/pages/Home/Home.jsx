import { Link } from 'react-router-dom'
import './Home.css'
import useMouseHoverEffect from '../../hooks/useMouseHoverEffect'
import { FaLocationArrow } from 'react-icons/fa';
import CursorBlur from '../../components/shared/CursorBlur/CursorBlur';
import NaElectrons from '../../components/shared/NaElectrons/NaElectrons';
import { FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa'


const Home = () => {
    useMouseHoverEffect();
    return (
        <div className='home-page'>
            <section>
                <main>
                    <NaElectrons />
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
                </main>
                <footer>
                    <section className='socials'>
                        <p>Socials</p>
                        <div className='social-links'>
                            <a href='mailto:nuralam.rsc@gmail.com' target='_blank'><FaEnvelope /></a>
                            <a href='https://github.com/nuralam123' target='_blank'><FaGithub /></a>
                            <a href='https://facebook.com/nur.0.alam' target='_blank'><FaFacebook /></a>
                        </div>
                    </section>
                </footer>
            </section>

        </div>
    )
}

export default Home