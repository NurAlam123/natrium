import DescriptionModal from "./DescriptionModal";
import { SlideUp } from "../animation/layout";

const Description = () => {
  return (
    <>
      {/* Description */}
      <div className="max-w-screen-md mb-6 text-lg">
        <SlideUp>
          <p className="text-secondary font-medium">
            I love building clean, responsive, and interactive websites using
            modern frontend technologies.
          </p>
        </SlideUp>
        <DescriptionModal />
        <div className="text-secondary mt-4">
          <SlideUp>
            <p className="font-medium">Got an idea?</p>
          </SlideUp>
          <SlideUp>
            <p>
              OH GREAT!! Let&apos;s make it happen - Shoot me a message at
              <span className="font-bold">nuralam.rsc@gmail.com</span>
            </p>
          </SlideUp>
        </div>
      </div>
    </>
  );
};

export default Description;
