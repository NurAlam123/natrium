"use client";

import { MessageLink, Socials } from "@/components/Contact";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <motion.section
      id="contact"
      ref={containerRef}
      className="flex justify-center items-center relative mx-4 h-svh"
      style={{
        opacity: scrollYProgress,
      }}
    >
      <div className="text-justify">
        <h2 className="mb-4">Contact</h2>
        <div className="space-y-4">
          <div className="max-w-screen-md">
            <p className="text-lg font-semibold">Got an idea?</p>
            <p>
              <b className="text-daisy">OH GREAT!</b> Let&apos;s discuss about
              it.
            </p>
            <p>
              <strong>nuralam.rsc@gmail.com</strong>
            </p>
          </div>
          {/* Contact Links */}
          <div className="space-y-4">
            <Socials />
          </div>
          {/* Anonymous Message */}
          <div className="space-y-2 text-lg">
            <MessageLink />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
