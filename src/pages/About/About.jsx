import CursorBlur from "../../components/shared/CursorBlur/CursorBlur";
import GoBackButton from "../../components/ui/GoBackButton";
import NaElectrons from "../../components/shared/NaElectrons/NaElectrons";
import './About.css'

const About = () => {
    return (
        <section>
            <CursorBlur />
            <div style={{
                marginBottom: '60px',
            }}>
                <GoBackButton />
            </div>
            <section className="about">
                <NaElectrons />
                <div>
                    <h1 className="about-h1">Hi, </h1>
                    <h2 className="about-h2">
                        I am <span className="about-name bold">Nur Alam<span className="animation-ping">.</span></span>
                    </h2>
                </div>
            </section>
        </section>
    )
}

export default About