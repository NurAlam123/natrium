import CursorBlur from "@/components/CursorBlur";
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <>
      <CursorBlur />
      <Hero />
      <div className="relative">
        <Navbar />
        <div>
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}
