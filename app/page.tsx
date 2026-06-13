"use client";

import { Download, Mail, Phone, MapPin, Github, Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white", fontFamily: "sans-serif" }}>
      
      {/* Header */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        padding: "16px 24px",
        backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "transparent",
        borderBottom: isScrolled ? "1px solid rgba(139,92,246,0.2)" : "none",
        transition: "all 0.3s"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MUHAMMAD UMAIR
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["About", "Skills", "Projects", "Experience", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#d1d5db", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#a855f7"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 20px 40px" }}>
        <div>
          {/* Profile Pic - No transparent box */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <img 
              src="/profile.png" 
              alt="Muhammad Umair" 
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #a855f7",
                boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                animation: "pulse 2s infinite"
              }}
            />
          </div>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "8px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MUHAMMAD UMAIR
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "20px", marginBottom: "16px" }}>Web · Android · Games | Office + AI · Laser Engraving · Design</p>
          <p style={{ color: "#6b7280", maxWidth: "600px", margin: "0 auto 32px" }}>I build web apps, Android apps, and games. I also streamline office work with AI tools and create precision laser engraving designs.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a href="/Umair_CV.pdf" download style={{ padding: "10px 24px", backgroundColor: "#a855f7", borderRadius: "999px", textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "8px" }}>
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" style={{ padding: "10px 24px", backgroundColor: "#1f2937", borderRadius: "999px", textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "8px" }}>
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.5)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "24px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            About Me
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "24px" }}>Multi-skilled developer and technical specialist with experience in web development, Android apps, game development, AI-assisted workflows, office automation, graphic design, and laser engraving.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "32px" }}>
            {[
              { emoji: "⚡", text: "Works under pressure without compromising quality" },
              { emoji: "🧠", text: "Fast learner & multi-tool problem solver" },
              { emoji: "📅", text: "Deadline-driven with clean documentation" }
            ].map((item, i) => (
              <div key={i} style={{ padding: "16px", backgroundColor: "rgba(17,24,39,0.5)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.2)" }}>
                <span style={{ fontSize: "32px" }}>{item.emoji}</span>
                <p style={{ fontSize: "14px", color: "#9ca3af", marginTop: "8px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          My Skills
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px" }}>
          {[
            { name: "HTML/CSS", icon: Code2 }, { name: "Android", icon: Smartphone }, { name: "Flutter", icon: Smartphone },
            { name: "Unity", icon: Gamepad2 }, { name: "Godot", icon: Gamepad2 }, { name: "JavaScript", icon: Code2 },
            { name: "AI Auto", icon: Bot }, { name: "CorelDRAW", icon: Paintbrush }, { name: "Photoshop", icon: Paintbrush },
            { name: "Excel", icon: FileText }, { name: "ZE CAD", icon: Code2 }, { name: "PowerPoint", icon: FileText }
          ].map((skill, i) => (
            <div key={i} style={{ padding: "16px", backgroundColor: "rgba(17,24,39,0.5)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.2)" }}>
              <skill.icon size={32} style={{ margin: "0 auto 8px", color: "#a855f7" }} />
              <p style={{ fontSize: "12px", color: "#9ca3af" }}>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.5)", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          What I Do
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {[
            { title: "Web Development", desc: "Responsive websites with modern UI/UX and animations.", icon: Code2 },
            { title: "Android App Dev", desc: "Native & no-code apps using Android Studio & MIT App Inventor.", icon: Smartphone },
            { title: "Game Development", desc: "2D/3D games using Unity, Godot & Flutter.", icon: Gamepad2 },
            { title: "AI Integration", desc: "AI-assisted solutions for smarter & faster workflows.", icon: Bot },
            { title: "Laser Engraving", desc: "Precision engraving on wood, acrylic, leather, metal.", icon: Paintbrush },
            { title: "Design & Prepress", desc: "CorelDRAW, Photoshop for vector designs.", icon: FileText }
          ].map((item, i) => (
            <div key={i} style={{ padding: "24px", backgroundColor: "rgba(17,24,39,0.5)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.2)", textAlign: "left" }}>
              <item.icon size={40} style={{ color: "#a855f7", marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Featured Projects
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
          {[
            { title: "Multiplayer Racing Game", desc: "Real-time multiplayer racing game with chat, leaderboard & rewards system.", tech: "Unity + C#" },
            { title: "Task Manager App", desc: "Productivity app for Android to manage tasks, categories and daily progress.", tech: "Android + Java" },
            { title: "AI Dashboard", desc: "Smart dashboard with AI insights, charts, reports & Excel data analysis.", tech: "Web + Tailwind" },
            { title: "Custom Engraving Designs", desc: "Precision engraving on wood & acrylic using ZE CAD with perfect finishing.", tech: "ZE CAD + CorelDRAW" }
          ].map((project, i) => (
            <div key={i} style={{ padding: "24px", backgroundColor: "rgba(17,24,39,0.5)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.2)", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{project.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "12px" }}>{project.desc}</p>
              <span style={{ color: "#a855f7", fontSize: "12px" }}>{project.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience with Glowing Line */}
      <section id="experience" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.5)", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Experience
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "2px", background: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
          {[
            { period: "Present", title: "Freelance Developer & Designer", desc: "Building web & mobile applications, games, AI solutions, office automation tools and laser engraving designs." },
            { period: "2021 – 2023", title: "Game Developer", desc: "Developed multiple 2D/3D games using Unity & Godot with multiplayer and leaderboard systems." },
            { period: "2019 – 2021", title: "Designer & Laser Specialist", desc: "Worked on graphic design projects and operated laser engraving machines using ZE CAD." }
          ].map((exp, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "48px", marginBottom: "48px", textAlign: "left" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "12px", height: "12px", backgroundColor: "#a855f7", borderRadius: "50%", border: "2px solid black" }} />
              <span style={{ color: "#a855f7", fontSize: "14px" }}>{exp.period}</span>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px", marginBottom: "8px" }}>{exp.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Let's Work Together
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "32px" }}>I'm available for freelance work or full-time opportunities.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginBottom: "24px" }}>
          <a href="mailto:jeeumair698@gmail.com" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af", textDecoration: "none" }}><Mail size={16} /> jeeumair698@gmail.com</a>
          <a href="tel:03099988810" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af", textDecoration: "none" }}><Phone size={16} /> 03099988810</a>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af" }}><MapPin size={16} /> Pakistan</div>
        </div>
        <a href="https://github.com/hellj504-a" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", backgroundColor: "#1f2937", borderRadius: "999px", textDecoration: "none", color: "white" }}>
          <Github size={16} /> Visit GitHub →
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px", textAlign: "center", borderTop: "1px solid #1f2937", color: "#6b7280", fontSize: "14px" }}>
        © 2025 Muhammad Umair. All rights reserved.
      </footer>

      {/* Keyframes for animation */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(168,85,247,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(168,85,247,0); }
          100% { box-shadow: 0 0 0 0 rgba(168,85,247,0); }
        }
      `}</style>
    </div>
  );
}