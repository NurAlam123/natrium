import React from "react";
import { SlideIn } from "../animation/layout";

const Greetings = () => {
  return (
    <>
      {/* Greetings */}
      <div>
        <SlideIn>
          <h1 className="text-[2.5rem] md:text-[4.2rem] font-bold">Hi,</h1>
        </SlideIn>
        <SlideIn>
          <h2 className="text-[1.5rem]">
            I am{" "}
            <span className="text-blue font-semibold">
              Nur Alam<span className="animate-ping">.</span>
            </span>
          </h2>
        </SlideIn>
        <SlideIn>
          <p className="text-daisy text-sm mb-4">
            {/* A Web Developer - Currently learning{" "}
              <strong>Web Development</strong> */}
            - <strong>Front-End Developer</strong>
          </p>
        </SlideIn>
      </div>{" "}
    </>
  );
};

export default Greetings;
