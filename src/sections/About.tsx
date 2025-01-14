import {
  AboutNavigation,
  Description,
  Greetings,
  Skills,
} from "@/components/About";

const About = () => {
  return (
    <section className="mx-4 mt-12 lg:mt-24 py-12" id="about">
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
