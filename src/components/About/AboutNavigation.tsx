import Link from "next/link";

const AboutNavigation = () => {
  return (
    <>
      {/* Pages */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Link
          href={"/resume"}
          className="button rounded-full transition duration-500"
        >
          Resume
        </Link>
        <Link
          href={"#projects"}
          className="button rounded-full transition duration-500"
        >
          Projects
        </Link>
        <Link
          href={"#contact"}
          className="button rounded-full transition duration-500"
        >
          Contact Me
        </Link>
      </div>
    </>
  );
};

export default AboutNavigation;
