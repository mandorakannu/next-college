import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In | Core Campus",
  description:
    "Sign in to Core Campus to access your account. Core Campus is a college management project for students and teachers. This project is made by Kannu Mandora | Full Stack Developer",
};

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-start items-center h-screen gap-52">
      <Image
        src="/images/sign-in-1.jpg"
        alt="Authentication"
        width={500}
        height={500}
        className="bg-center bg-cover h-full"
      />
      {children}
    </main>
  );
}
