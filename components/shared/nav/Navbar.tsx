import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 w-full bg-white z-50 text-black border-b border-primary-500">
        <nav className="flex items-center justify-between px-6 py-4 sm:py-0">
          <h1 className="block sm:hidden">Core Campus</h1>
          <ul className="hidden lg:flex lg:items-center gap-5 px-2 py-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <UserButton afterSignOutUrl="/" />
        </nav>
      </header>
    </>
  );
}
