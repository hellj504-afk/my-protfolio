"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mt-2">I'm available for freelance work or full-time opportunities.</p>
        </motion.div>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="mailto:jeeumair698@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
              <Mail className="w-5 h-5" /> jeeumair698@gmail.com
            </Link>
            <Link href="tel:03099988810" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
              <Phone className="w-5 h-5" /> 03099988810
            </Link>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5" /> Pakistan
            </div>
          </div>
          <div>
            <Link href="https://github.com/hellj504-a" target="_blank" className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <Github className="w-5 h-5" /> Visit GitHub →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
