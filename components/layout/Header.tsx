"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          MUHAMMAD UMAIR
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
