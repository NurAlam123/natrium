import { About, Contact, Footer, Hero, Projects } from "@/sections";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* React Hot Toast */}
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer />
    </>
  );
}

//import { useRef, useState } from "react";

//export default function Home() {
//const parentRef = useRef<HTMLDivElement>(null);
//
//const [show, setShow] = useState(false);
//
//const { scrollYProgress } = useScroll({
//  target: parentRef,
//  offset: ["start start", "end end"],
//});
//
//useMotionValueEvent(scrollYProgress, "change", (progress: number) => {
//  if (progress > 0 && progress < 1 && !show) {
//    setShow(true);
//    return;
//  }
//  if (progress <= 0 || (progress >= 1 && show)) {
//    setShow(false);
//    return;
//  }
//});

//return (
//<>
{
  /*
      <CursorBlur />
      <Loader />
      */
}

//<section
//style={{
//  opacity: 0,
//  scale: 0.9,
//}}
//animate={{
//  opacity: 1,
//  scale: 1,
//}}
//transition={{
//  delay: 6.56,
//  duration: 1,
//}}
//>
//<Hero />
{
  /*
        <div
          //ref={parentRef}
          className="relative"
        >
          <Navbar 
            show={show} 
          />
          <div>
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
        <Footer />
          */
}
//</section>
//</>
//);
//}`
