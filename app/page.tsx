import Link from "next/link";
import Image from "next/image";
import mainImage from "@images/main.jpg";

export default function MainPage() {
  return (
    <>
      <main className="grid place-items-center">
        <section className="z-20 col-span-full row-span-full">
          <h1 className="text-white text-4xl font-bold" aria-label="Heading">
            Boost up your skills with a new way of learning
          </h1>
          <div className="flex justify-center items-center gap-5 mt-4">
            <Link
              href="/about"
              className="bg-white text-black font-bold py-2 px-4 rounded-sm"
              aria-label="About"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="bg-primary-500 text-white font-bold py-2 px-4 rounded-sm"
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>
        </section>
        <Image
          src={mainImage}
          alt="main image"
          className="z-10 col-span-full row-span-full h-screen opacity-80 filter brightness-75 backdrop-blur-sm"
        />
      </main>
    </>
  );
}
