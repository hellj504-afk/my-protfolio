"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Gamepad, Bot, Zap, PenTool } from "lucide-react";

const services = [
  { title: "Web Development", desc: "Responsive websites with modern UI/UX and animations.", icon: Globe },
  { title: "Android App Development", desc: "Native & no-code apps using Android Studio & MIT App Inventor.", icon: Smartphone },
  { title: "Game Development", desc: "2D/3D games using Unity, Godot & Flutter with multiplayer.", icon: Gamepad },
  { title: "AI Integration & Automation", desc: "AI-assisted solutions for smarter & faster workflows.", icon: Bot },
  { title: "Laser Engraving & Automation", desc: "Precision engraving on wood, acrylic, leather, metal & more.", icon: Zap },
  { title: "Design & Prepress", desc: "CorelDRAW, Photoshop for vector designs & print-ready files.", icon: PenTool },
];

export function WhatIDo() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            What I Do
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <service.icon className="w-10 h-10 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
