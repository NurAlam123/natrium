"use client";

import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";

import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  index: number;
  range: Array<number>;
  progress: MotionValue;
  targetScale: number;
};

// Project Card
const ProjectCard = ({
  title,
  description,
  image,
  techs,
  links,
  index,
  range,
  targetScale,
  progress,
}: ProjectCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.section
      style={{
        scale,
        top: `calc(10% + ${index * 20}px)`,
      }}
      className="sticky mb-2 h-svh"
    >
      <div className="p-4 md:p-8 mt-4 h-[424px] md:h-[640px] bg-dark border border-dark-2 rounded-xl flex gap-4 max-w-screen-md mx-auto">
        <div className="w-8">
          <Link
            href={"#"}
            className="text-2xl font-medium mb-2 text-primary [writing-mode:vertical-lr]"
          >
            {title}
          </Link>
        </div>
        <div className="space-y-4 flex-1">
          <Image
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-lg"
            width={720}
            height={720}
          />
          <div className="space-y-2">
            <p className="text-sm line-clamp-1">{description}</p>
            <Link className="inline-flex gap-2 text-blue" href={"#"}>
              Read More...
              <ArrowRight />
            </Link>
          </div>
          <div className="flex gap-3 text-xs flex-auto flex-wrap">
            {techs.map((tech) => (
              <span
                key={tech}
                className="border-dark-2 border bg-dark-1 px-4 py-1 rounded-full flex items-center text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 text-2xl">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                className="text-daisy hover:text-blue/70 transition"
              >
                <span className="sr-only">Github</span>
                <FaGithub aria-hidden focusable={false} />
              </a>
            )}
            {links.live && (
              <a
                target="_blank"
                href={links.live}
                className="text-daisy hover:text-blue/70 transition"
              >
                <span className="sr-only">Live site</span>
                <FaLink aria-hidden focusable={false} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCard;
