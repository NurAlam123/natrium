import CursorBlur from "@/components/CursorBlur";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Header from "@/pages/Header";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <>
      <CursorBlur />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
