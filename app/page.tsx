"use client";

import { Download, Mail, Phone, MapPin, Github, Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, Layers, Server, Globe, Zap, Cpu, Send, Award, TrendingUp, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/92309988810", "_blank");
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
    { name: "ZE CAD", level: 92, icon: Zap },
    { name: "PowerPoint", level: 85, icon: FileText },
    { name: "Python", level: 85, icon: Code2 },
    { name: "Node.js", level: 82, icon: Server },
    { name: "React", level: 88, icon: Cpu },
  ];

  const techStack = [
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Layers },
    { name: "Python", icon: Code2 },
    { name: "JavaScript", icon: Globe },
    { name: "React", icon: Cpu },
    { name: "Node.js", icon: Server },
    { name: "Unity", icon: Gamepad2 },
    { name: "Godot", icon: Gamepad2 },
    { name: "Android Studio", icon: Smartphone },
    { name: "Flutter", icon: Smartphone },
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a3e 50%, #2d1b4e 100%)",
      color: "white",
      fontFamily: "sans-serif",
      minHeight: "100vh"
    }}>
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

      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 20px 40px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <img src="/profile.png" alt="Muhammad Umair" style={{ width: "160px", height: "160px", borderRadius: "50%", objectFit: "cover", border: "3px solid #a855f7", boxShadow: "0 0 30px rgba(168,85,247,0.3)" }} />
          </div>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "8px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MUHAMMAD UMAIR
          </h1>
          <p style={{ color: "#c4b5fd", fontSize: "22px", marginBottom: "12px", fontWeight: "500" }}>
            Full Stack Developer · AI/ML Engineer · Game Architect
          </p>
          <p style={{ color: "#9ca3af", maxWidth: "700px", margin: "0 auto 32px", fontSize: "16px" }}>
            4+ years of experience in building scalable web applications, Android apps, and interactive games.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/Umair_CV.pdf" download style={{ padding: "12px 28px", backgroundColor: "#a855f7", borderRadius: "999px", textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "8px" }}>
              <Download size={18} /> Download CV
            </a>
            <button onClick={openWhatsApp} style={{ padding: "12px 28px", backgroundColor: "#25D366", borderRadius: "999px", border: "none", color: "white", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <Send size={18} /> WhatsApp Me
            </button>
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.3)" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Technical Skills
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {skills.map((skill, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <skill.icon size={24} style={{ color: "#a855f7" }} />
                <span>{skill.name}</span>
                <span style={{ marginLeft: "auto", color: "#a855f7" }}>{skill.level}%</span>
              </div>
              <div style={{ height: "8px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ width: `${skill.level}%`, height: "100%", background: "linear-gradient(90deg, #a855f7, #ec4899)", borderRadius: "999px" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tech" style={{ padding: "80px 20px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Tech Stack
        </h2>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px", padding: "40px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px" }}>
          {techStack.map((tech, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px" }}>
              <tech.icon size={48} style={{ color: "#a855f7", marginBottom: "8px" }} />
              <p style={{ fontSize: "13px", color: "#d1d5db" }}>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.3)" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Experience
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "3px", background: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
          {[
            { period: "2023 – Present", title: "Senior Full Stack Developer", desc: "Leading full-stack development & AI integration" },
            { period: "2021 – 2023", title: "Game & App Developer", desc: "Developed 15+ games & apps" },
            { period: "2019 – 2021", title: "Design & Laser Specialist", desc: "Precision laser engraving expert" }
          ].map((exp, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "48px", marginBottom: "48px" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "14px", height: "14px", backgroundColor: "#a855f7", borderRadius: "50%" }} />
              <span style={{ color: "#a855f7", fontSize: "14px" }}>{exp.period}</span>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "6px" }}>{exp.title}</h3>
              <p style={{ color: "#9ca3af" }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Let's Work Together
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "32px" }}>Available for freelance, contract, or full-time opportunities.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap", marginBottom: "32px" }}>
          <a href="mailto:jeeumair698@gmail.com" style={{ color: "#d1d5db", textDecoration: "none" }}>jeeumair698@gmail.com</a>
          <a href="tel:03099988810" style={{ color: "#d1d5db", textDecoration: "none" }}>03099988810</a>
          <span>Pakistan</span>
        </div>
        <a href="https://github.com/hellj504-a" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", textDecoration: "none", color: "white" }}>
          <Github size={18} /> GitHub
        </a>
      </section>

      <footer style={{ padding: "28px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#6b7280" }}>
        © 2025 Muhammad Umair. All rights reserved.
      </footer>
    </div>
  );
}