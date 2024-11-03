import Link from "next/link";

const About = () => {
  return (
    <section className="h-screen flex items-center justify-center" id="about">
      <div>
        <div className="space-y-4">
          <div>
            {/* Greetings */}
            <div>
              <h1 className="text-[2.5rem] md:text-[4.2rem] font-bold">Hi,</h1>
              <h2 className="text-[1.5rem]">
                I am{" "}
                <span className="text-blue font-semibold">
                  Nur Alam<span className="animate-ping">.</span>
                </span>
              </h2>
              <p className="text-gray text-sm mb-4">
                {/* A Web Developer */}- Currently learning{" "}
                <strong>Web Development</strong>
              </p>
            </div>

            {/* Description */}
            <div className="max-w-[550px] mb-6 space-y-2 mx-auto">
              <p className="text-secondary">
                I also have interest in ML/AI, CP, Discord Bot Development, Game
                Development etc. Didn&apos;t explore that much on these thing
                except Discord Bot Development.
              </p>
              {/*
              <p>
                <strong>
                  And don&apos;t have any work experiences till now.
                </strong>
              </p>
              */}
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl text-gray font-semibold mb-2">Skills</h2>
              <ul className="list-disc ml-10 mb-2">
                <li className="list-item">Javascript</li>
                <li className="list-item">Next.js</li>
                <li className="list-item">Frammer Motion</li>
                <li className="list-item">React</li>
                <li className="list-item">Nodejs</li>
                <li className="list-item">Tailwind CSS</li>
                <li className="list-item">Python</li>
              </ul>
              <p>and a little bit of C, C++</p>
            </div>
          </div>
          {/* Pages */}
          <div className="flex flex-wrap gap-2">
            <Link href={"/resume"} className="button rounded-full">
              Resume
            </Link>
            <Link href={"#projects"} className="button rounded-full">
              Projects
            </Link>
            <Link href={"#contact"} className="button rounded-full">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
