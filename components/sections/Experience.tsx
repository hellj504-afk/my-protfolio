"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Laser Machine Operator (Expert)",
    company: "PAK ELEKTRON LIMITED",
    location: "Lahore, Pakistan",
    period: "2018 - Present (7+ years)",
    description: [
      "Expert in laser engraving on different materials",
      "Create designs using Corel Draw, Photoshop, and EZCAD",
      "Handle various engraving styles and techniques",
      "Quality control and machine maintenance",
    ],
  },
  {
    title: "Oracle Specialist",
    company: "PAK ELEKTRON LIMITED",
    location: "Lahore, Pakistan",
    period: "2023 - Present (2 years)",
    description: [
      "Job completion and BOMs setup in Oracle system",
      "Inventory management and tracking",
      "Database optimization and reporting",
      "Process automation and workflow improvement",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance / Remote",
    location: "Lahore, Pakistan",
    period: "2023 - Present (2 years)",
    description: [
      "Build Android apps, web apps, and websites",
      "Use AI tools for development (ChatGPT, Copilot)",
      "Work with Flutter, Unity, Godot for cross-platform apps",
      "Automation scripting for various tasks",
    ],
  },
];

const education = [
  {
    degree: "Self-Trained Developer",
    institution: "Continuous Learning",
    period: "2023 - Present",
    description: "Android Development, Web Development, AI Integration, Game Development",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
                >
                  <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                  <p className="text-blue-400 mb-2">{exp.company} • {exp.location}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
                >
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <p className="text-blue-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
