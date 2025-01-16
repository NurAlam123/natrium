import CursorBlur from "@/components/CursorBlur";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import { About, Contact, Footer, Hero, Projects } from "@/sections";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <CursorBlur />
      <LoadingScreen />
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <section className="relative max-w-screen-lg mx-auto">
          <Navbar>
            <About />
            <Projects />
            <Contact />
          </Navbar>
        </section>
        {/* React Hot Toast */}
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer />
    </>
  );
}
