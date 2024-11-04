import CursorBlur from "@/components/CursorBlur";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <>
      <CursorBlur />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
