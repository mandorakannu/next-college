import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReduxProvider } from "@providers/redux/provider";
import { Navigation } from "@ui/shared/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Core Campus",
  description:
    "Core Campus is a college management project for students and teachers. This project is made by Kannu Mandora | Full Stack Developer",
    keywords: [
      "Kannu",
      "Kannu Mandora",
      "Mandora",
      "Web Developer",
      "Full Stack",
      "MERN Stack",
      "Stack",
      "Full Stack Developer",
      "Mandora Kannu",
      "tech blogger",
      "developer",
      "web development",
      "software engineering",
      "programming languages",
    ],
    authors: [{ name: "Kannu Mandora" }],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Kannu Mandora | Full Stack Developer",
      description:
        "Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am currently focused on my skills in React, Node, and Express. I am also learning about MySQL and MongoDB.",
      siteId: "@mandorakannu",
      creator: "@KannuMandora",
      creatorId: "1467726470533754880",
      images: ["https://collegemanagement.mandorakannu.xyz/images/main.webp"],
    },
    verification: {
      google: "_RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE",
      yandex: "yandex",
      yahoo: "yahoo",
      other: {
        me: ["mandorakannu@gmail.com"],
      },
    },
    icons: [
      {
        href: "/favicon.ico",
        rel: "icon",
        type: "image/x-icon",
        url: "/favicon.ico",
      },
    ],
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navigation />
            {children}</body>
        </html>
      </ClerkProvider>
    </ReduxProvider>
  );
}
