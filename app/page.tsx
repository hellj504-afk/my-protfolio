"use client";

import { useState, useEffect } from "react";
import { Download, Mail, Phone, MapPin, Github, Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">MUHAMMAD UMAIR</h1>
          <nav className="hidden md:flex gap-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors">{item}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-black" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg shadow-purple-500/20 animate-pulse">
              <img src="/profile.png" alt="Muhammad Umair" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">MUHAMMAD UMAIR</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-4">Web · Android · Games | Office + AI · Laser Engraving · Design · Pressure-Ready</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">I build web apps, Android apps, and games. I also streamline office work with AI tools and create precision laser engraving designs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/Umair_CV.pdf" download className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center gap-2 transition"><Download className="w-4 h-4" /> Download CV</a>
            <a href="#contact" className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center gap-2 transition"><Mail className="w-4 h-4" /> Contact Me</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">About Me</h2>
          <p className="text-gray-300 mb-6">Multi-skilled developer and technical specialist with experience in web development, Android apps, game development, AI-assisted workflows, office automation, graphic design, and laser engraving.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {["⚡ Works under pressure", "🧠 Fast learner & problem solver", "📅 Deadline-driven"].map((text, i) => (
              <div key={i} className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/20">{text}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills with Icons */}
      <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">My Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {[
              { name: "HTML/CSS", icon: Code2 }, { name: "Android Studio", icon: Smartphone }, { name: "Flutter", icon: Smartphone },
              { name: "Unity/C#", icon: Gamepad2 }, { name: "Godot", icon: Gamepad2 }, { name: "JavaScript", icon: Code2 },
              { name: "AI Automation", icon: Bot }, { name: "CorelDRAW", icon: Paintbrush }, { name: "Photoshop", icon: Paintbrush },
              { name: "Excel + AI", icon: FileText }, { name: "ZE CAD", icon: Code2 }, { name: "PowerPoint", icon: FileText }
            ].map((skill, idx) => (
              <div key={idx} className="bg-gray-900/50 p-4 rounded-xl text-center border border-purple-500/20 hover:border-purple-500/50">
                <skill.icon className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                <span className="text-xs text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Web Development", desc: "Responsive websites with modern UI/UX", icon: Code2 },
              { title: "Android Apps", desc: "Native & no-code apps", icon: Smartphone },
              { title: "Game Development", desc: "2D/3D games with Unity, Godot", icon: Gamepad2 },
              { title: "AI Automation", desc: "AI-assisted smarter workflows", icon: Bot },
              { title: "Laser Engraving", desc: "Wood, acrylic, metal, leather", icon: Paintbrush },
              { title: "Design & Prepress", desc: "CorelDRAW, Photoshop", icon: FileText }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
                <service.icon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Multiplayer Racing Game", desc: "Real-time racing with chat & leaderboard", tech: "Unity + C#" },
              { title: "Task Manager App", desc: "Productivity app for Android", tech: "Android + Java" },
              { title: "AI Dashboard", desc: "Smart dashboard with AI insights", tech: "Web + Tailwind" },
              { title: "Custom Engraving Designs", desc: "Precision engraving with ZE CAD", tech: "ZE CAD + CorelDRAW" }
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 text-left">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
                <span className="text-xs text-purple-400">{project.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience with Glowing Line */}
      <section id="experience" className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Experience</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            {[
              { period: "Present", title: "Freelance Developer & Designer", desc: "Building web, mobile apps, games, AI solutions & laser engraving" },
              { period: "2021 – 2023", title: "Game Developer", desc: "2D/3D games with Unity & Godot, multiplayer & leaderboards" },
              { period: "2019 – 2021", title: "Designer & Laser Specialist", desc: "Graphic design & laser engraving with ZE CAD" }
            ].map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-4 mb-8`}>
                <div className="absolute left-1 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full border-2 border-black z-10 top-5" />
                <div className="md:w-1/2 pl-10 md:pl-0">
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-500/20">
                    <span className="text-purple-400 text-sm">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Let's Work Together</h2>
          <p className="text-gray-300 mb-8">I'm available for freelance work or full-time opportunities.</p>
          <div className="flex justify-center gap-6 flex-wrap mb-6">
            <a href="mailto:jeeumair698@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-purple-400"><Mail className="w-5 h-5" /> jeeumair698@gmail.com</a>
            <a href="tel:03099988810" className="flex items-center gap-2 text-gray-300 hover:text-purple-400"><Phone className="w-5 h-5" /> 03099988810</a>
            <div className="flex items-center gap-2 text-gray-300"><MapPin className="w-5 h-5" /> Pakistan</div>
          </div>
          <a href="https://github.com/hellj504-a" target="_blank" className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700"><Github className="w-5 h-5" /> Visit GitHub →</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2025 Muhammad Umair. All rights reserved.
      </footer>
    </main>
  );
}