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
    <div className="sticky top-0 md:mb-24">
      <div className="p-4 md:p-6  mt-4 md:mb-12 h-[500px] lg:h-[calc(100vh-24px)] bg-dark border border-dark-2 rounded-xl flex flex-col gap-4 max-w-screen-md mx-auto">
        <div>
          <Image
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-lg"
            width={720}
            height={720}
          />
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2 text-primary">{title}</h4>
          <p className="text-sm text-gray max-w-xl">{description}</p>
          <div className="flex gap-3 text-xs mt-4 flex-auto flex-wrap">
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
    </div>
  );
};

export default ProjectCard;
