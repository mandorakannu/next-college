import Link from "next/link";
import { dmSansFont } from "@ui/shared/fonts";

export const Homepage = () => {
  return (
    <main className={`${dmSansFont.className} main__homepage__backgroundImage`}>
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl text-center max-sm:text-4xl text-white">
          Boost up your skills with a new way of learning
        </h1>
        <div className="flex items-center gap-4 my-8">
          <Link
            href="/"
            className="bg-white hover:bg-gray-100 text-blue-500 py-2 px-6 rounded"
          >
            Discover
          </Link>
          <Link
            href="/sign-in"
            className="bg-blue-500 hover:bg-blue-600 transition-colors delay-75 text-white py-2 px-6 rounded"
          >
            Sign In
          </Link>
        </div>
      </section>
    </main>
  );
};
