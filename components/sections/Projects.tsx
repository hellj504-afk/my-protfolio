"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Android Apps Portfolio",
    description: "Multiple Android applications built with Flutter, Unity, and Godot. Cross-platform apps for various use cases.",
    tech: ["Flutter", "Unity", "Godot", "Android"],
    github: "https://github.com/hellj504-a",
    live: "#",
  },
  {
    title: "Web Development Projects",
    description: "Full-stack web applications using React, Next.js, Node.js, and various AI tools for rapid development.",
    tech: ["React", "Next.js", "Node.js", "Tailwind"],
    github: "https://github.com/hellj504-a",
    live: "#",
  },
  {
    title: "Automation Scripts",
    description: "Command-line automation tools for various tasks and workflow optimization.",
    tech: ["Python", "Bash", "Automation", "CLI"],
    github: "https://github.com/hellj504-a",
    live: "#",
  },
  {
    title: "Laser Engraving Designs",
    description: "Professional designs created with Corel Draw, Photoshop, and EZCAD for different materials.",
    tech: ["Corel Draw", "Photoshop", "EZCAD", "Laser"],
    github: "#",
    live: "#",
    category: "Design",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="p-6">
                {project.category && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded mb-3">
                    {project.category}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                    <Github className="w-4 h-4" /> Code
                  </Link>
                  <Link href={project.live} target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
