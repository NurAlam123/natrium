import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Nur Alam",
  description: "Hi! I am Nur Alam. I am a Front-End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
