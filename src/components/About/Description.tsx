import React from "react";
import DescriptionModal from "./DescriptionModal";
import { TextSlideInWhenInView, TextTilt } from "../animation/text";

const Description = () => {
  return (
    <>
      {/* Description */}
      <div className="max-w-screen-md mb-6 text-lg">
        <p className="text-secondary font-medium">
          <TextTilt>
            I love building clean, responsive, and interactive websites using
            modern frontend technologies.
          </TextTilt>
        </p>
        <DescriptionModal />
        <div className="text-secondary mt-4">
          <p className="font-medium">
            <TextTilt>Got an idea?</TextTilt>
          </p>
          <p>
            <TextTilt>
              OH GREAT!! Let&apos;s make it happen - Shoot me a message at
            </TextTilt>{" "}
            <span className="font-bold">
              <TextSlideInWhenInView words>
                nuralam.rsc@gmail.com
              </TextSlideInWhenInView>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
