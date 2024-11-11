import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";

type ProjectImageType = {
  src: string;
  alt: string;
};

type ProjectLinkType = {
  github: string;
  live: string;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  techs: Array<string>;
  image: ProjectImageType;
  links: ProjectLinkType;
};

// Project Card

const ProjectCard = ({
  title,
  description,
  image,
  techs,
  links,
}: ProjectCardProps) => {
  return (
    <div className="p-4 md:p-6  my-4 bg-dark-1/5 rounded-xl max-w-screen-md mx-auto flex flex-col gap-4">
      <div>
        <Image
          src={image.src}
          alt={image.alt}
          className="object-cover rounded-lg"
          width={1280}
          height={1280}
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium mb-2 text-primary">{title}</h4>
        <p className="text-sm text-gray">{description}</p>
        <div className="flex gap-3 text-xs mt-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className="border-dark-2 border bg-dark-1 px-4 py-1 rounded-full flex items-center text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-2 text-2xl">
        {links.github && (
          <a
            href={links.github}
            className="text-gray hover:text-blue/70 transition"
          >
            <FaGithub />
          </a>
        )}
        {links.live && (
          <a
            href={links.live}
            className="text-gray hover:text-blue/70 transition"
          >
            <FaLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
