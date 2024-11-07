"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import sendMessage from "@/utils/discord-webhook";
import clsx from "clsx";
import { useActionState, useState } from "react";
import toast from "react-hot-toast";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaThreads, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [characters, setCharacters] = useState(0);
  const [overLimit, setOverLimit] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [userMessage, setUserMessage] = useState("");
  const charactersLimit = 999;

  const countCharacters = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textLength = event.target.value.length;
    if (textLength > 0) setDisableButton(false);
    else setDisableButton(true);

    if (textLength >= charactersLimit - 20) setOverLimit(true);
    else setOverLimit(false);

    setCharacters(textLength);
  };

  const handleSendBtn = async (prevState: object, formData: FormData) => {
    setDisableButton(true);
    const message = formData.get("message") as string;
    setUserMessage(message);

    const send = await sendMessage(message);
    if (send) {
      toast.success("Your message successfully delivered. 😃");
      setUserMessage("");
      setCharacters(0);
    } else {
      toast.error("Oops... Couldn't deliver your message. Sorry! Try again 😞");
      setDisableButton(false);
    }
  };

  const [state, formAction, isPending] = useActionState(handleSendBtn, false);

  return (
    <section
      className="flex justify-center items-center mb-8 mt-4"
      id="contact"
    >
      <div>
        <div>
          {/* Contact Links */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
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

          {/* Anonymous message */}
          <div>
            <p className="font-normal text-gray mb-2">
              Want to send anonymous message?
            </p>
            <form action={formAction}>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  className="outline-none p-5 rounded-lg border-2 border-dark-3 bg-dark-1 text-gray h-[300px] resize-none focus:border-blue transition-colors duration-300"
                  placeholder="Write it down here..."
                  defaultValue={userMessage}
                  maxLength={charactersLimit}
                  onChange={(event) => countCharacters(event)}
                ></textarea>
                <p
                  className={`absolute bottom-[13px] right-[8px] text-[0.86rem] font-light ${
                    overLimit ? "text-[#d90423]" : "text-gray opacity-[0.6]"
                  }`}
                >
                  {characters}/{charactersLimit}
                </p>
              </div>
              <button
                className={clsx(
                  "button rounded-full w-full mt-2",
                  isPending
                    ? "disabled:cursor-progress"
                    : "disabled:cursor-not-allowed",
                )}
                type="submit"
                disabled={disableButton || (isPending && true)}
              >
                {isPending ? <LoadingSpinner size={25} /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
