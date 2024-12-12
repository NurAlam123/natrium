import { IconType } from "react-icons";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaThreads, FaXTwitter } from "react-icons/fa6";

type ContactType = {
  name: string;
  link: string;
  icon: IconType;
};

const contacts: ContactType[] = [
  {
    name: "Email",
    link: "mailto:nuralam.rsc@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Github",
    link: "https://github.com/NurAlam123",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nur-alam404",
    icon: FaLinkedin,
  },
  {
    name: "Discord",
    link: "https://discord.com/users/838836138537648149",
    icon: FaDiscord,
  },
  {
    name: "X",
    link: "https://x.com/nur_alam_404",
    icon: FaXTwitter,
  },
  {
    name: "Threads",
    link: "https://threads.net/@nur_alam_._",
    icon: FaThreads,
  },
  {
    name: "BlueSky",
    link: "https://bsky.app/profile/nuralam.bsky.social",
    icon: FaBluesky,
  },
];

export default contacts;
