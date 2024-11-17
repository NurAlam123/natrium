import { ProjectCardProps } from "@/components/ProjectCard";

export const programmings = [
  "Javascript",
  "Typescript",
  "Python",
  "C",
  "C++",
  "HTML",
  "CSS",
];

export const frameworks = [
  "React.js",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
];

export const tools = ["Git", "GitHub", "Figma"];

export const database = ["MongoDB"];

export const projects: Array<ProjectCardProps> = [
  {
    title: "Natala",
    description:
      "Natala, a modern responsive saas landing page built with Next.js, Tailwind CSS, Framer Motion. This project showcases a sleek design with smooth animations and a mobile-first approach.",
    image: {
      src: "/projects/natala.png",
      alt: "Natala",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/nuralam123/natala",
      live: "https://natala.vercel.app/",
    },
  },
  {
    title: "Cogni",
    description:
      "Congi is an AI landing page with sleek design and animaiton. Made with Next.js, Tailwind CSS, Framer Motion",
    image: {
      src: "/projects/cogni.png",
      alt: "Congi",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/nuralam123/Cogni",
      live: "https://cogni-tau.vercel.app/",
    },
  },
  {
    title: "YC Directory",
    description:
      "A modern Full Stack app for the new era for startups. Submit your ideas, vote on pitches and get noticed in virtual competition. Pitch, Vote, Grow",
    image: {
      src: "/projects/yc-directory.png",
      alt: "YC Directory",
    },
    techs: ["Next.js", "Shadcn", "Sanity", "Tailwnd CSS", "React.js"],
    links: {
      github: "https://github.com/nuralam123/yc-directory",
      live: "https://yc-directory-rho.vercel.app/",
    },
  },
];
