import { navigation } from "@/constants";
import Link from "next/link";
import React from "react";

const HeroNavigation = () => {
  return (
    <div className="space-y-4">
      <div className="md:text-xl space-x-4 text-primary">
        {navigation.slice(1).map((navLink) => (
          <Link
            key={navLink.title}
            href={navLink.href}
            className="hover:text-blue group space-x-1"
          >
            <span className="text-blue invisible group-hover:visible transition-[visibility] duration-100 ease-in-out">
              &gt;
            </span>
            <span>{navLink.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroNavigation;
