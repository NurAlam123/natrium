"use client";

import { ProjectCard } from "@/components/Projects";
import { projects } from "@/constants";

import { useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="mx-4 py-12">
      <h2 className="mb-6">Projects</h2>
      <div className="md:p-2 flex gap-4 flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            title={project.title}
            description={project.description}
            image={project.image}
            links={project.links}
            techs={project.techs}
            range={[index * (projects.length / 100), 1]}
            targetScale={1 - (projects.length - index) * 0.04}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
