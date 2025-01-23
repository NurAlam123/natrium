import AbsoluteCinema from "@/components/EasterEgg/absolute-cinema";
import RickRoll from "@/components/EasterEgg/rick-roll";
import { navigation } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-8 md:py-16 flex justify-center items-center text-daisy/70 border-t border-daisy/50">
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-between gap-2">
          <p>Nur Alam &copy; 2024 - 2025.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex gap-2 items-center justify-center text-primary font-medium">
          {navigation.map((navLink) => (
            <Link
              className="flex gap-2 group"
              href={navLink.href}
              key={navLink.title}
            >
              <span className="hover:text-primary/80">{navLink.title}</span>
              <span className="group-last:hidden">/</span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <AbsoluteCinema />
        <RickRoll />
      </div>
    </footer>
  );
};

export default Footer;
