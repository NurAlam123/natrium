import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="my-16 mx-4 relative flex justify-center">
      <div>
        <h1 className="text-2xl md:text-[2.5rem] font-semibold">Projects</h1>
        <div className="p-6 flex gap-3 flex-col">
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
