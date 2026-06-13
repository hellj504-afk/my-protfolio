"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Muhammad Umair
        </h1>
        <p className="text-gray-300 text-lg mt-4">Web · Android · Games | Office + AI · Laser Engraving</p>
        <div className="flex gap-4 justify-center mt-6">
          <Link href="#contact" className="px-6 py-2 bg-purple-600 rounded-full">Contact Me</Link>
          <a href="/Umair_CV.pdf" download className="px-6 py-2 bg-gray-800 rounded-full">Download CV</a>
        </div>
      </div>
    </section>
  );
}