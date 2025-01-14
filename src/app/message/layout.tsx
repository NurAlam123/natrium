import Footer from "@/sections/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="fixed h-screen w-screen -z-[999] overflow-hidden noise-background bg-no-repeat" />
      {children}
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}
