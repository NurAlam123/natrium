import React from "react";
import DescriptionModal from "./DescriptionModal";

const Description = () => {
  return (
    <>
      {/* Description */}
      <div className="max-w-screen-md mb-6 text-lg">
        <p className="text-secondary font-medium">
          I love building clean, responsive, and interactive websites using
          modern frontend technologies.
        </p>
        <DescriptionModal />
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
