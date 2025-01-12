import {
  AboutNavigation,
  Description,
  Greetings,
  Skills,
} from "@/components/About";

const About = () => {
  return (
    <section className="m-4 mb-12" id="about">
      <div className="overflow-hidden">
        <div>
          <Greetings />
          <Description />
          <Skills />
          <AboutNavigation />
        </div>
      </div>
    </section>
  );
};

export default About;
