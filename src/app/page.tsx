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
