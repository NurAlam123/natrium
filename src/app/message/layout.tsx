import Footer from "@/sections/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}
