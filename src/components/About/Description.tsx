import React from "react";
import { SlideIn } from "../animation/layout";

const Description = () => {
  return (
    <>
      {/* Description */}
      <div className="max-w-[550px] mb-6 space-y-2 mx-auto">
        <SlideIn>
          <p className="text-secondary">
            I love building clean, responsive, and interactive websites using
            modern frontend technologies.
          </p>
        </SlideIn>
        <SlideIn direction="right">
          <p className="text-secondary">
            I am also interested in AI/ML, Bot Development, and Competitive
            Programming. I created a private Discord bot &quot;Fibu&quot; by
            Python in 2020 for my &quot;Hero Programmers&quot; Discord server
            and another bot &quot;Maria&quot; as its companion. I also practiced
            and joined some CP contests on Codeforces.
          </p>
        </SlideIn>
        <SlideIn>
          <p className="text-secondary">
            When I am not coding, I am probably sketching some random things or
            creating pixel art, reading manga, exploring random animated movies,
            anime, or other movies.
          </p>
        </SlideIn>
        <SlideIn direction="right">
          <div className="text-secondary">
            Got an idea? OH GREAT!! Let&apos;s make it happen - Shoot me a
            message at{" "}
            <span className="font-bold underline underline-offset-4">
              nuralam.rsc@gmail.com
            </span>
            .
          </div>
        </SlideIn>
      </div>
    </>
  );
};

export default Description;
