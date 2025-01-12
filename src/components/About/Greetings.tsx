import React from "react";
import { SlideIn } from "../animation/layout";

const Greetings = () => {
  return (
    <>
      {/* Greetings */}
      <div>
        <SlideIn>
          <h2 className="mb-4 font-semibold">Hi,</h2>
        </SlideIn>
        <SlideIn>
          <h3 className="mb-2 font-medium">
            I am{" "}
            <span className="text-blue font-semibold">
              Nur Alam<span className="animate-ping">.</span>
            </span>
          </h3>
        </SlideIn>
        <SlideIn>
          <p className="text-daisy mb-4">
            {/* A Web Developer - Currently learning{" "}
              <strong>Web Development</strong> */}
            - <strong className="font-semibold">Front-End Developer</strong>
          </p>
        </SlideIn>
      </div>{" "}
    </>
  );
};

export default Greetings;
