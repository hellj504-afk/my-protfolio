"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "MULTIPLAYER RACING GAME",
    desc: "Real-time multiplayer racing game with chat, leaderboard & rewards system.",
    tech: "Unity + C#",
    link: "#",
  },
  {
    title: "Task Manager App",
    desc: "Productivity app for Android to manage tasks, categories and daily progress.",
    tech: "Android + Java",
    link: "#",
  },
  {
    title: "AI Dashboard",
    desc: "Smart dashboard with AI insights, charts, reports & Excel data analysis.",
    tech: "Web + Tailwind + JS",
    link: "#",
  },
  {
    title: "Custom Engraving Designs",
    desc: "Precision engraving on wood & acrylic using ZE CAD with perfect finishing.",
    tech: "ZE CAD + CorelDRAW",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-purple-400">{project.tech}</span>
                <Link href={project.link} target="_blank" className="text-gray-400 hover:text-white">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
