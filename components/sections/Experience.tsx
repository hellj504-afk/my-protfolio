"use client";

import { motion } from "framer-motion";

const experiences = [
  { period: "Present", title: "Freelance Developer & Designer", desc: "Building web & mobile apps, games, AI solutions, office automation and laser engraving designs." },
  { period: "2021 – 2023", title: "Game Developer", desc: "Developed multiple 2D/3D games using Unity & Godot with multiplayer and leaderboard systems." },
  { period: "2019 – 2021", title: "Designer & Laser Engraving Specialist", desc: "Graphic design projects and laser engraving using ZE CAD." },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto relative">
          {/* Glowing line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-purple-500 glow-line" />
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-4`}
              >
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-2 border-black z-10" />
                <div className="md:w-1/2 pl-10 md:pl-0">
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-500/20">
                    <span className="text-purple-400 text-sm">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
