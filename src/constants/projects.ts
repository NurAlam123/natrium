import { ProjectCardProps } from "@/components/ProjectCard";

type ProjectCardType = Omit<
  ProjectCardProps,
  "progress" | "index" | "targetScale" | "range"
>;

const projects: Array<ProjectCardType> = [
  {
    title: "Bento Profile",
    description:
      "This is my own bento grid portfolio made with Next.js, Tailwnd CSS, Framer Moiton.",
    image: {
      src: "/projects/bento.webp",
      alt: "Bento Profile",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/NurAlam123/bento",
      live: "https://lightbento.pages.dev/",
    },
  },
  {
    title: "CerebroMesh Labs",
    description:
      "CerebroMesh Labs is a Next.js based landing page which provides high-quality curated datasets to enhance your AI.",
    image: {
      src: "/projects/cerebromesh_labs.webp",
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
      src: "/projects/natala.webp",
      alt: "Natala",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/nuralam123/natala",
      live: "https://natala.pages.dev/",
    },
  },
  {
    title: "Cogni",
    description:
      "Congi is an AI landing page with sleek design and animaiton. Made with Next.js, Tailwind CSS, Framer Motion",
    image: {
      src: "/projects/cogni.webp",
      alt: "Congi",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/nuralam123/Cogni",
      live: "https://cogni-adv.pages.dev/",
    },
  },
  {
    title: "YC Directory",
    description:
      "A modern Full Stack app for the new era for startups. Submit your ideas, vote on pitches and get noticed in virtual competition. Pitch, Vote, Grow",
    image: {
      src: "/projects/yc-directory.webp",
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
      src: "/projects/sodium_ui.webp",
      alt: "Sodium UI",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Moiton"],
    links: {
      github: "https://github.com/nuralam123/sodium-ui",
      live: "https://sodium-ui.vercel.app/",
    },
  },
];

export default projects;
