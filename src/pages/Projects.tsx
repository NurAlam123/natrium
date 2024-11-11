import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="mx-4 my-10">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-2xl md:text-[2.5rem] font-semibold mb-6">
          Projects
        </h1>
        <div className="p-2 flex gap-12 flex-col">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              links={project.links}
              techs={project.techs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
