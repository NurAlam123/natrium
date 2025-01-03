import { SlideIn } from "@/components/animation/layout";
import { database, frameworks, programmings, tools } from "@/constants";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex justify-center m-4 mb-12" id="about">
      <div className="overflow-hidden">
        <div>
          {/* Greetings */}
          <div>
            <SlideIn>
              <h1 className="text-[2.5rem] md:text-[4.2rem] font-bold">Hi,</h1>
            </SlideIn>
            <SlideIn>
              <h2 className="text-[1.5rem]">
                I am{" "}
                <span className="text-blue font-semibold">
                  Nur Alam<span className="animate-ping">.</span>
                </span>
              </h2>
            </SlideIn>
            <SlideIn>
              <p className="text-gray text-sm mb-4">
                {/* A Web Developer - Currently learning{" "}
              <strong>Web Development</strong> */}
                - <strong>Front-End Developer</strong>
              </p>
            </SlideIn>
          </div>

          {/* Description */}
          <div className="max-w-[550px] mb-6 space-y-2 mx-auto">
            <SlideIn>
              <p className="text-secondary">
                I love building clean, responsive, and interactive websites
                using modern frontend technologies.
              </p>
            </SlideIn>
            <SlideIn direction="right">
              <p className="text-secondary">
                I am also interested in AI/ML, Bot Development, and Competitive
                Programming. I created a private Discord bot &quot;Fibu&quot; by
                Python in 2020 for my &quot;Hero Programmers&quot; Discord
                server and another bot &quot;Maria&quot; as its companion. I
                also practiced and joined some CP contests on Codeforces.
              </p>
            </SlideIn>
            <SlideIn>
              <p className="text-secondary">
                When I am not coding, I am probably sketching some random things
                or creating pixel art, reading manga, exploring random animated
                movies, anime, or other movies.
              </p>
            </SlideIn>
            <SlideIn direction="right">
              <div className="text-secondary">
                Got an idea? OH GREAT!! Let&apos;s make it happen - Shoot me a
                message at{" "}
                <span className="font-bold underline underline-offset-4">
                  nuralam.rsc@gmail.com
                </span>
                .
              </div>
            </SlideIn>
          </div>

          {/* Skills */}
          <div>
            <div className=" w-full bg-dark-1  rounded-xl px-4 py-2 relative">
              <h2 className="text-2xl text-white font-semibold">Skills</h2>
            </div>
            <div className="relative text-gray">
              <div className="w-[2px] h-full absolute bg-dark-1 rounded-b-full ms-3" />

              {/* Programming Languages */}
              <div className="ml-8 pt-2 relative">
                <div>
                  <h4 className="text-lg font-semibold text-soft-white">
                    Programming Languages
                  </h4>
                </div>
                <ul className="list-disc ml-10 mb-2">
                  {programmings.map((programming) => (
                    <li
                      className="list-item hover:text-blue hover:font-bold transition duration-700 w-fit"
                      key={programming}
                    >
                      {programming}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frameworks */}
              <div className="ml-8 pt-6 relative">
                <h4 className="text-lg font-semibold text-soft-white">
                  Frameworks & Technologies
                </h4>
                <ul className="list-disc ml-10 mb-2">
                  {frameworks.map((framework) => (
                    <li
                      className="list-item hover:text-blue hover:font-bold transition duration-700 w-fit"
                      key={framework}
                    >
                      {framework}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="ml-8 pt-6 relative">
                <h4 className="text-lg font-semibold text-soft-white">
                  Tools & Softwares
                </h4>
                <ul className="list-disc ml-10 mb-2">
                  {tools.map((tool) => (
                    <li
                      className="list-item hover:text-blue hover:font-bold transition duration-700 w-fit"
                      key={tool}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Database */}
              <div className="ml-8 pt-6 relative">
                <h4 className="text-lg font-semibold text-soft-white">
                  Database
                </h4>
                <ul className="list-disc ml-10 mb-2">
                  {database.map((base) => (
                    <li
                      className="list-item hover:text-blue hover:font-bold transition duration-700 w-fit"
                      key={base}
                    >
                      {base}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            href={"/resume"}
            className="button rounded-full transition duration-500"
          >
            Resume
          </Link>
          <Link
            href={"#projects"}
            className="button rounded-full transition duration-500"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            className="button rounded-full transition duration-500"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
