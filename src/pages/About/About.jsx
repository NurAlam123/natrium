import { Link } from "react-router-dom";
import CursorBlur from "../../components/shared/CursorBlur/CursorBlur";
import GoBackButton from "../../components/shared/ui/GoBackButton/GoBackButton";
import './About.css'

const About = () => {
    return (
        <section className="about-page">
            <CursorBlur />
            <div style={{
                marginBottom: '30px',
            }}>
                <GoBackButton />
            </div>
            <section className="about-container">
                <div className="about">
                    <h1 className="about-h1">Hi,</h1>
                    <h2 className="about-h2">
                        I am <span className="about-name bold">Nur Alam<span className="animation-ping">.</span></span>
                    </h2>
                    <p className="about-me">
                        {/* A Web Developer */}
                        - Currently learning <strong>Web Development</strong>
                    </p>
                    <p className="about-description">
                        I also have interest in ML/AI, CP, Discord Bot Development, Game Development etc.<br />
                        Didn&apos;t explored that much on these thing expect Discord Bot Development. <br />
                        <strong>And don&apos;t have any work experiences till now.</strong>
                    </p>
                    <div className="skill-container">
                        <h2>Skills</h2>
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>React</li>
                            {/* <li>Nodejs</li> */}
                            <li>Tailwind</li>
                        </ul>
                        <p>and a little bit of C, C++</p>
                    </div>
                </div>
                <div className="about-btn-container">
                    <div className="about-btn-group">
                        <div>
                            <Link to={'/resume'} className="btn btn-pill about-btn-link">Resume</Link>
                        </div>
                        <div>
                            <Link to={'/projects'} className="btn btn-pill about-btn-link">Projects</Link>
                        </div>
                        <div>
                            <Link to={'/contact'} className="btn btn-pill about-btn-link">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About