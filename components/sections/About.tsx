"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Shield, Zap, Smartphone, Bot, Palette } from "lucide-react";

const skills = [
  { name: "Android & Web Dev", icon: Smartphone, tech: ["Android", "React", "Next.js", "Flutter", "Unity", "Godot"] },
  { name: "Frontend Dev", icon: Layout, tech: ["HTML/CSS", "Tailwind", "JavaScript", "TypeScript"] },
  { name: "Backend Dev", icon: Code2, tech: ["Node.js", "Python", "Oracle", "APIs"] },
  { name: "Automation", icon: Bot, tech: ["Command Line", "Scripting", "Workflow Automation"] },
  { name: "Design Tools", icon: Palette, tech: ["Corel Draw", "Photoshop", "EZCAD", "Laser Engraving"] },
  { name: "Databases", icon: Database, tech: ["Oracle", "MySQL", "Inventory Systems"] },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Crafting Digital & Physical Experiences</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm Muhammad Umair, a passionate Full Stack Developer, Android Developer, and Automation Expert. I build web apps, mobile apps, games, and automation solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently working at PAK ELEKTRON LIMITED as Laser Machine Operator with 7+ years of experience in laser engraving, Corel Draw, Photoshop, and EZCAD. Also have 2+ years of Oracle experience for job completion and inventory management.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-blue-400">📍</span> Lahore, Pakistan 🇵🇰
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-blue-400">💼</span> Full Stack Developer · Laser Machine Expert
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-blue-400">📧</span> umair@example.com
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
