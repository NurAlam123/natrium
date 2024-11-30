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
    title: "Bento Profile",
    description:
      "This is my own bento grid portfolio made with Next.js, Tailwnd CSS, Framer Moiton.",
    image: {
      src: "/projects/bento.png",
      alt: "Bento Profile",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/NurAlam123/bento",
      live: "https://lightento.vercel.app/",
    },
  },
  {
    title: "CerebroMesh Labs",
    description:
      "CerebroMesh Labs is a Next.js based landing page which provides high-quality curated datasets to enhance your AI.",
    image: {
      src: "/projects/cerebromesh_labs.png",
      alt: "CerebroMesh Labs",
    },
    techs: ["Next.js", "Tailwnd CSS"],
    links: {
      github: "",
      live: "https://cerebromesh-labs-ten.vercel.app/",
    },
  },
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
  {
    title: "Sodium UI",
    description:
      "Sodium UI is a random collection of UI elements that I found interesting on various websites or other online media platforms. I tried recreating them myself as practice.",
    image: {
      src: "/projects/sodium_ui.png",
      alt: "Sodium UI",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Moiton"],
    links: {
      github: "https://github.com/nuralam123/sodium-ui",
      live: "https://sodium-ui.vercel.app/",
    },
  },
];
