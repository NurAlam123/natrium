"use client";

import { heroProgrammersLink } from "@/constants";
import { Modal } from "../ui";
import useModalStore from "@/store/modal-store";
import { SlideUp } from "../animation/layout";

const DescriptionModal: React.FC<{ children?: React.ReactNode }> = () => {
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <div>
      <SlideUp>
        <span
          className="text-blue cursor-pointer"
          onClick={() => toggleModal("description-modal")}
        >
          Read More...
        </span>
      </SlideUp>
      <Modal id="description-modal">
        <div className="space-y-4">
          <p className="text-secondary/80">
            I am also interested in AI/ML, Bot Development, and Competitive
            Programming.
          </p>
          <p className="text-secondary/75">
            I created a private Discord bot &quot;Fibu&quot; by Python in 2020
            for my{" "}
            <a target="_blank" href={heroProgrammersLink} className="text-blue">
              &quot;
              <span className="underline underline-offset-2">
                Hero Programmers
              </span>
              &quot;
            </a>{" "}
            Discord server and another bot &quot;Maria&quot; as its companion.
          </p>
          <p className="text-secondary/80">
            I also practiced and joined some CP contests on Codeforces.
          </p>
          <p className="text-secondary/80">
            When I am not coding, I am probably sketching some random things or
            creating pixel art, reading manga, exploring random animated movies,
            anime, or other movies.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default DescriptionModal;
