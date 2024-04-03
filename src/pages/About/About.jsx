import CursorBlur from "../../components/shared/CursorBlur";
import GoBackButton from "../../components/ui/GoBackButton";

const About = () => {
    return (
        <section>
            <CursorBlur />
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