import GoBackButton from "../../components/ui/GoBackButton";
import useMouseHoverEffect from "../../hooks/useMouseHoverEffect"

const About = () => {
    useMouseHoverEffect();
    return (
        <section>
            <div className="cursor" id="cursor"></div>
            <div style={{
                marginBottom: '60px'
            }}>
                <GoBackButton />
            </div>
            <section>
                <h2>Hi, I am Nur Alam.</h2><br />
                A programmer, web developer.
            </section>
        </section>
    )
}

export default About