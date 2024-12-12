"use client";

import { contacts } from "@/constants";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
        <h1 className="text-6xl font-semibold mb-4">Contact</h1>
        <div className="space-y-4">
          <div className="max-w-screen-md">
            <p className="text-xl font-semibold">Got an idea?</p>
            <p>
              <b className="text-gray">OH GREAT!</b> Let&apos;s discuss about
              it.
            </p>
            <p>
              <strong>nuralam.rsc@gmail.com</strong>
            </p>
          </div>
          {/* Contact Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-2xl">Socials</h3>
            <div className="flex gap-2 text-[2.3rem] items-center text-secondary">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  className="group relative"
                >
                  <div className="hover:blur-sm">
                    <contact.icon />
                  </div>
                  <span className="tooltip group-hover:inline-block group-hover:absolute -translate-x-1/2 left-1/2 mt-2">
                    {contact.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {/* Anonymous Message */}
          <div className="space-y-2 text-lg">
            <p className="font-semibold text-start mt-6 max-w-xs">
              Want to send an anonymous message?
            </p>
            <Link href="/message" className="flex text-blue w-fit relative">
              Click here
              <span className="inline-block absolute left-full top-0 -translate-y-1">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
