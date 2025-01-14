import LoadingScreen from "@/components/LoadingScreen";
import { About, Contact, Footer, Hero, Projects } from "@/sections";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      {}
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <section className="max-w-screen-lg mx-auto">
          <About />
          <Projects />
          <Contact />
        </section>
        {/* React Hot Toast */}
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer />
    </>
  );
}
