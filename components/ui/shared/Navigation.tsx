import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

export const Navigation = async () => {
  const user = await currentUser();
  return (
    <>
      <nav className="bg-sky-600 p-4 sticky top-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Core Campus
          </Link>
          <ul className="flex gap-5 last:mr-4">
            <li>
              <Link
                href="/"
                className="text-white p-2 hover:text-black transition-colors delay-75"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white p-2 hover:text-black transition-colors delay-75"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white p-2 hover:text-black transition-colors delay-75"
              >
                Contact
              </Link>
            </li>
            <li>
              {user === null || user === undefined ? (
                <Link
                  href="/sign-in"
                  className="text-white bg-gray-400 hover:bg-orange-300 rounded-md p-2 transition-colors delay-75"
                >
                  Sign In
                </Link>
              ) : (
                <>
                <Link
                  href="/dashboard"
                  className="text-white bg-gray-400 hover:bg-orange-300 rounded-md p-2 transition-colors delay-75 mr-6"
                >
                  Dashboard
                </Link>
                <SignedIn>
                  <SignOutButton signOutOptions={{ redirectUrl: "/sign-in" }}>
                    <span className="text-white hover:text-black transition-colors delay-75 cursor-pointer underline underline-offset-2">
                      Logout
                    </span>
                  </SignOutButton>
                </SignedIn>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
