import type { Metadata } from "next";
import "./globals.css";
import { bebasNeue, poppins } from "./fonts";
import { meta } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(meta.site.url),
  title: { default: meta.site.title, template: `%s | ${meta.site.title}` },
  description: meta.site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: meta.author.name,
    description: meta.site.description,
    images: [
      {
        url: meta.site.bannerImage,
        width: 1280,
        height: 720,
        alt: meta.site.description,
      },
    ],
  },
  keywords: meta.site.keywords,
  creator: meta.author.username,
  openGraph: {
    type: "website",
    url: meta.site.url,
    title: meta.site.title,
    description: meta.site.description,
    locale: "en-US",
    images: [
      {
        url: meta.site.bannerImage,
        width: 1280,
        height: 720,
        alt: meta.site.description,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bebasNeue.variable} text-primary font-poppins antialiased`}
      >
        <div className="fixed h-screen w-screen -z-[999] overflow-hidden noise-background bg-no-repeat" />

        {children}
      </body>
    </html>
  );
}
