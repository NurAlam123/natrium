"use client";

import { useRef } from "react";
import { TextSlideInWhenInView } from "../animation/text";
import { SlideUp } from "../animation/layout";

const Greetings = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      {/* Greetings */}
      <div>
        <h2 className="mb-2 md:mb-4 font-semibold">
          <TextSlideInWhenInView>Hi,</TextSlideInWhenInView>
        </h2>
        <h3 className="mb-2 md:mb-4 font-medium" ref={nameRef}>
          <TextSlideInWhenInView rootRef={nameRef}>I am</TextSlideInWhenInView>{" "}
          <span className="text-blue font-semibold">
            <TextSlideInWhenInView delay={1} rootRef={nameRef}>
              Nur Alam
            </TextSlideInWhenInView>
            <span className="animate-ping">
              <TextSlideInWhenInView delay={1.8} rootRef={nameRef}>
                .
              </TextSlideInWhenInView>
            </span>
          </span>
        </h3>
        <SlideUp>
          <p className="text-daisy/90 mb-6 text-lg">
            {/* A Web Developer - Currently learning{" "}
              <strong>Web Development</strong> */}
            - <strong className="font-semibold">Front-End Developer</strong>
          </p>
        </SlideUp>
      </div>{" "}
    </>
  );
};

export default Greetings;
