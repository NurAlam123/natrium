import React from "react";
import { heroProgrammersLink } from "@/constants";

const Description = () => {
  return (
    <>
      {/* Description */}
      <div className="max-w-screen-md mb-6 space-y-2 text-lg">
        <p className="text-secondary font-medium">
          I love building clean, responsive, and interactive websites using
          modern frontend technologies.
        </p>
        <p className="text-secondary/75 mt-4">
          I am also interested in AI/ML, Bot Development, and Competitive
          Programming.
        </p>
        <p className="text-secondary/75">
          I created a private Discord bot &quot;Fibu&quot; by Python in 2020 for
          my{" "}
          <a
            target="_blank"
            href={heroProgrammersLink}
            className="text-blue/90"
          >
            &quot;
            <span className="underline underline-offset-2">
              Hero Programmers
            </span>
            &quot;
          </a>{" "}
          Discord server and another bot &quot;Maria&quot; as its companion.
        </p>
        <p className="text-secondary/75">
          I also practiced and joined some CP contests on Codeforces.
        </p>
        <p className="text-secondary/75">
          When I am not coding, I am probably sketching some random things or
          creating pixel art, reading manga, exploring random animated movies,
          anime, or other movies.
        </p>
        <div className="text-secondary mt-4">
          <p className="font-medium">Got an idea?</p>
          <p>
            OH GREAT!! Let&apos;s make it happen - Shoot me a message at{" "}
            <span className="font-bold underline underline-offset-4">
              nuralam.rsc@gmail.com
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
