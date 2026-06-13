"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, Database, Cloud } from "lucide-react";

const skills = [
  { name: "HTML5/CSS3", icon: Code2 },
  { name: "Android Studio", icon: Smartphone },
  { name: "Flutter", icon: Smartphone },
  { name: "Unity/C#", icon: Gamepad2 },
  { name: "Godot", icon: Gamepad2 },
  { name: "JavaScript", icon: Code2 },
  { name: "AI Automation", icon: Bot },
  { name: "CorelDRAW", icon: Paintbrush },
  { name: "Photoshop", icon: Paintbrush },
  { name: "Excel + AI", icon: FileText },
  { name: "ZE CAD", icon: Database },
  { name: "PowerPoint", icon: FileText },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Skills
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-4 rounded-xl text-center border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <skill.icon className="w-8 h-8 mx-auto text-purple-400 mb-2" />
              <span className="text-xs text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
