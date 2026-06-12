"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="text-blue-400 text-sm">Available for freelance work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Muhammad Umair
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Full Stack Developer & Blockchain Engineer
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            I craft exceptional digital experiences. Android, Web, AI, Blockchain, and Automation expert with 7+ years in laser machine operations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
            >
              View Projects
            </Link>
          </div>

          <div className="flex gap-6 justify-center mt-12">
            <Link href="https://github.com/hellj504-a" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:umair@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
