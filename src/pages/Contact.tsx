"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaThreads, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <motion.section
      ref={containerRef}
      className="flex justify-center items-center relative mb-8 mt-4 h-svh"
      style={{
        opacity: scrollYProgress,
      }}
    >
      <div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          {/* Contact Links */}
          <div className="mb-6">
            <div className="flex gap-2 text-[2.3rem] items-center text-secondary">
              <a
                href="mailto:nuralam.rsc@gmail.com"
                target="_blank"
                className="group"
              >
                <div className="hover:blur-sm">
                  <FaEnvelope />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  Email
                </span>
              </a>
              <a
                className="group"
                href="https://github.com/NurAlam123"
                target="_blank"
              >
                <div className="hover:blur-sm">
                  <FaGithub />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  Github
                </span>
              </a>
              <a
                className="group"
                href="https://www.linkedin.com/in/nur-alam404"
                target="_blank"
              >
                <div className="hover:blur-sm">
                  <FaLinkedin />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  LinkedIn
                </span>
              </a>
              <a
                className="group cursor-pointer"
                href="https://discord.com/users/838836138537648149"
              >
                <div className="hover:blur-sm">
                  <FaDiscord />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  Discord
                </span>
              </a>
              <a
                className="group cursor-pointer"
                href="https://x.com/nur_alam_404"
              >
                <div className="hover:blur-sm">
                  <FaXTwitter />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  X
                </span>
              </a>
              <a
                className="group cursor-pointer"
                href="https://threads.net/@nur_alam_._"
              >
                <div className="hover:blur-sm">
                  <FaThreads />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  Threads
                </span>
              </a>
              <a
                className="group cursor-pointer"
                href="https://bsky.app/profile/nuralam.bsky.social"
              >
                <div className="hover:blur-sm">
                  <FaBluesky />
                </div>
                <span className="tooltip group-hover:inline-block group-hover:absolute">
                  BlueSky
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
