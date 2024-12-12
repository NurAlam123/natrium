"use client";

import { contacts } from "@/constants";
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
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  className="group"
                >
                  <div className="hover:blur-sm">
                    <contact.icon />
                  </div>
                  <span className="tooltip group-hover:inline-block group-hover:absolute">
                    {contact.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
