import { database, frameworks, programmings, tools } from "@/constants";

// Skills
const Skills = () => {
  return (
    <div>
      <div className=" w-full max-w-screen-md  bg-dark-1  rounded-xl px-4 py-2 relative">
        <h4>Skills</h4>
      </div>
      <div className="relative text-daisy">
        <div className="w-[2px] h-full absolute bg-dark-1 rounded-b-full ms-3" />
        <ProgrammingLanguage />
        <Frameworks />
        <Tools />
        <Databases />
      </div>
    </div>
  );
};

const Base = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="ml-8 pt-2 relative">
        <div>
          <p className="text-soft-white font-medium text-base md:text-lg xl:text-xl">
            {title}
          </p>
        </div>
        <ul className="list-disc ml-10 mb-2">{children}</ul>
      </div>
    </>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="list-item hover:text-blue hover:font-medium transition duration-700 w-fit">
      {children}
    </li>
  );
};

// Programming Languages
const ProgrammingLanguage = () => {
  return (
    <Base title="Programming Languages ">
      {programmings.map((programming) => (
        <ListItem key={programming}>{programming}</ListItem>
      ))}
    </Base>
  );
};

// Frameworks
const Frameworks = () => {
  return (
    <Base title="Frameworks & Technologies">
      {frameworks.map((framework) => (
        <ListItem key={framework}>{framework}</ListItem>
      ))}
    </Base>
  );
};

// Tools
const Tools = () => {
  return (
    <Base title="Tools & Softwares">
      {tools.map((tool) => (
        <ListItem key={tool}>{tool}</ListItem>
      ))}
    </Base>
  );
};

// Databases
const Databases = () => {
  return (
    <Base title="Database">
      {database.map((base) => (
        <ListItem key={base}>{base}</ListItem>
      ))}
    </Base>
  );
};

export default Skills;
