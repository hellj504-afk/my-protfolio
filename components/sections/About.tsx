"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Multi-skilled developer and technical specialist with experience in web development, Android apps, game development, AI-assisted workflows, office automation, graphic design, and laser engraving.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left mt-8">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/20">
              <span className="text-purple-400 text-2xl block mb-2">⚡</span>
              <p className="text-sm">Works under pressure without compromising quality</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/20">
              <span className="text-purple-400 text-2xl block mb-2">🧠</span>
              <p className="text-sm">Fast learner & multi-tool problem solver</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/20">
              <span className="text-purple-400 text-2xl block mb-2">📅</span>
              <p className="text-sm">Deadline-driven with clean documentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
