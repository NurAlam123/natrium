import { navigation } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 flex justify-center items-center text-gray/70 border-t border-gray/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <p>&copy; 2024 - Nur Alam.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex gap-2 items-center justify-center text-primary font-medium">
          {navigation.map((navLink) => (
            <Link
              className="flex gap-2 group"
              href={navLink.href}
              key={navLink.title}
            >
              <span className="hover:text-gray">{navLink.title}</span>
              <span className="group-last:hidden">/</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
