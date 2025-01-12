import { database, frameworks, programmings, tools } from "@/constants";

// Skills
const Skills = () => {
  return (
    <div>
      <div className=" w-full bg-dark-1  rounded-xl px-4 py-2 relative">
        <h2 className="text-2xl text-white font-semibold">Skills</h2>
      </div>
      <div className="relative text-gray">
        <div className="w-[2px] h-full absolute bg-dark-1 rounded-b-full ms-3" />
        <ProgrammingLanguage />
        <Frameworks />
        <Tools />
        <Databases />
      </div>
    </div>
  );
};

// Programming Languages
const ProgrammingLanguage = () => {
  return (
    <>
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
    </>
  );
};

// Frameworks
const Frameworks = () => {
  return (
    <>
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
    </>
  );
};

// Tools
const Tools = () => {
  return (
    <>
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
    </>
  );
};

// Databases
const Databases = () => {
  return (
    <>
      <div className="ml-8 pt-6 relative">
        <h4 className="text-lg font-semibold text-soft-white">Database</h4>
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
    </>
  );
};

export default Skills;
