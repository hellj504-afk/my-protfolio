"use client";

import { Download, Mail, Phone, MapPin, Github, Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, Layers, Server, Globe, Lock, Zap, Cpu, Lightbulb, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/923099988810", "_blank");
  };

  const skills = [
    { name: "HTML/CSS", level: 90, icon: Code2 },
    { name: "Android Studio", level: 85, icon: Smartphone },
    { name: "Flutter", level: 80, icon: Smartphone },
    { name: "Unity/C#", level: 85, icon: Gamepad2 },
    { name: "Godot", level: 80, icon: Gamepad2 },
    { name: "JavaScript", level: 88, icon: Code2 },
    { name: "AI Automation", level: 85, icon: Bot },
    { name: "CorelDRAW", level: 95, icon: Paintbrush },
    { name: "Photoshop", level: 90, icon: Paintbrush },
    { name: "Excel + AI", level: 88, icon: FileText },
    { name: "ZE CAD", level: 92, icon: Lightbulb },
    { name: "PowerPoint", level: 85, icon: FileText },
    { name: "Python", level: 85, icon: Code2 },
    { name: "Node.js", level: 82, icon: Server },
    { name: "React", level: 88, icon: Globe },
  ];

  const techStack = [
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Layers },
    { name: "Python", icon: Code2 },
    { name: "JavaScript", icon: Globe },
    { name: "React", icon: Cpu },
    { name: "Node.js", icon: Server },
    { name: "Unity", icon: Gamepad2 },
    { name: "ZE CAD", icon: Lightbulb },
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a3e 50%, #2d1b4e 100%)",
      color: "white",
      fontFamily: "sans-serif",
      minHeight: "100vh"
    }}>

      {/* Header */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        padding: "16px 24px",
        backgroundColor: isScrolled ? "rgba(0,0,0,0.7)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(139,92,246,0.3)" : "none",
        transition: "all 0.3s"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MUHAMMAD UMAIR
          </span>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {["About", "Skills", "Tech", "Projects", "Experience", "Contact"].map(item => (
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
          {/* Profile Pic - No Ring, Only Diamond Background */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
            position: "relative",
            width: "160px",
            height: "160px",
            margin: "0 auto 24px auto"
          }}>
            {/* Purple Diamond Background */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: "200px",
              height: "200px",
              background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.2))",
              border: "2px solid rgba(168,85,247,0.5)",
              boxShadow: "0 0 30px rgba(168,85,247,0.4)",
              zIndex: 0
            }} />
            <img
              src="/profile.png"
              alt="Muhammad Umair"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #a855f7",
                position: "relative",
                zIndex: 1,
                backgroundColor: "black"
              }}
            />
          </div>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "8px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MUHAMMAD UMAIR
          </h1>
          <p style={{ color: "#c4b5fd", fontSize: "20px", marginBottom: "16px" }}>Web · Android · Games | Office + AI · Laser Engraving · Design</p>
          <p style={{ color: "#9ca3af", maxWidth: "600px", margin: "0 auto 32px" }}>I build web apps, Android apps, and games. I also streamline office work with AI tools and create precision laser engraving designs.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/Umair_CV.pdf" download style={{ padding: "10px 24px", backgroundColor: "#a855f7", borderRadius: "999px", textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "8px" }}>
              <Download size={16} /> Download CV
            </a>
            <button onClick={openWhatsApp} style={{ padding: "10px 24px", backgroundColor: "#25D366", borderRadius: "999px", border: "none", color: "white", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontWeight: "bold", animation: "pulse 1.5s ease-in-out infinite" }}>
              <Send size={16} /> WhatsApp Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>
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
              <div key={i} style={{ padding: "16px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(5px)" }}>
                <span style={{ fontSize: "32px" }}>{item.emoji}</span>
                <p style={{ fontSize: "14px", color: "#9ca3af", marginTop: "8px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Glowing Progress Bar */}
      <section id="skills" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          My Skills (80%+ Expertise)
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {skills.map((skill, i) => (
            <div key={i} style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <skill.icon size={24} style={{ color: "#a855f7" }} />
                <span style={{ fontWeight: "bold" }}>{skill.name}</span>
                <span style={{ marginLeft: "auto", color: "#a855f7" }}>{skill.level}%</span>
              </div>
              <div style={{ height: "8px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #a855f7, #ec4899)",
                  borderRadius: "999px",
                  boxShadow: "0 0 10px #a855f7",
                  animation: "glowPulse 1.5s ease-in-out infinite"
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Icons Box */}
      <section id="tech" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          My Tech Stack
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px", padding: "32px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(10px)" }}>
          {techStack.map((tech, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px", transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <tech.icon size={48} style={{ color: "#a855f7", marginBottom: "8px" }} />
              <p style={{ fontSize: "14px", color: "#d1d5db" }}>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          What I Do
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {[
            { title: "Web Development", desc: "Responsive websites with modern UI/UX", icon: Code2 },
            { title: "Android Apps", desc: "Native & no-code apps", icon: Smartphone },
            { title: "Game Development", desc: "2D/3D games with Unity, Godot", icon: Gamepad2 },
            { title: "AI Automation", desc: "AI-assisted smarter workflows", icon: Bot },
            { title: "Laser Engraving", desc: "Wood, acrylic, metal, leather", icon: Lightbulb },
            { title: "Design & Prepress", desc: "CorelDRAW, Photoshop", icon: Paintbrush }
          ].map((item, i) => (
            <div key={i} style={{ padding: "24px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(5px)", textAlign: "left" }}>
              <item.icon size={40} style={{ color: "#a855f7", marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Featured Projects
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
          {[
            { title: "Multiplayer Racing Game", desc: "Real-time racing with chat & leaderboard", tech: "Unity + C#" },
            { title: "Task Manager App", desc: "Productivity app for Android", tech: "Android + Java" },
            { title: "AI Dashboard", desc: "Smart dashboard with AI insights", tech: "Web + Tailwind" },
            { title: "Custom Engraving Designs", desc: "Precision engraving with ZE CAD", tech: "ZE CAD + CorelDRAW" }
          ].map((project, i) => (
            <div key={i} style={{ padding: "24px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(5px)", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{project.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "12px" }}>{project.desc}</p>
              <span style={{ color: "#a855f7", fontSize: "12px" }}>{project.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience with Glowing Timeline Line */}
      <section id="experience" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Experience
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "2px", background: "#a855f7", boxShadow: "0 0 10px #a855f7", animation: "glowPulse 2s ease-in-out infinite" }} />
          {[
            { period: "Present", title: "Freelance Developer & Designer", desc: "Building web, mobile apps, games, AI solutions & laser engraving" },
            { period: "2021 – 2023", title: "Game Developer", desc: "2D/3D games with Unity & Godot, multiplayer & leaderboards" },
            { period: "2019 – 2021", title: "Designer & Laser Specialist", desc: "Graphic design & laser engraving with ZE CAD" }
          ].map((exp, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "48px", marginBottom: "48px", textAlign: "left" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "12px", height: "12px", backgroundColor: "#a855f7", borderRadius: "50%", border: "2px solid rgba(0,0,0,0.5)", boxShadow: "0 0 8px #a855f7" }} />
              <span style={{ color: "#a855f7", fontSize: "14px" }}>{exp.period}</span>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px", marginBottom: "8px" }}>{exp.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Let's Work Together
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "32px" }}>I'm available for freelance work or full-time opportunities.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginBottom: "24px" }}>
          <a href="mailto:jeeumair698@gmail.com" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af", textDecoration: "none" }}><Mail size={16} /> jeeumair698@gmail.com</a>
          <a href="tel:03099988810" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af", textDecoration: "none" }}><Phone size={16} /> 03099988810</a>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af" }}><MapPin size={16} /> Pakistan</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="https://github.com/hellj504-a" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", textDecoration: "none", color: "white" }}>
            <Github size={16} /> GitHub
          </a>
          <button onClick={openWhatsApp} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", backgroundColor: "#25D366", borderRadius: "999px", border: "none", color: "white", cursor: "pointer", fontWeight: "bold" }}>
            <Send size={16} /> WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#6b7280", fontSize: "14px" }}>
        © 2025 Muhammad Umair. All rights reserved.
      </footer>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @keyframes glowPulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}