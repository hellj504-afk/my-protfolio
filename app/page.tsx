"use client";

import { Download, Mail, Phone, MapPin, Github, Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, Layers, Server, Globe, Lock, Zap, Cpu, Lightbulb, Send, Award, TrendingUp, Shield } from "lucide-react";
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
      background: "radial-gradient(circle at 20% 30%, rgba(15, 25, 55, 0.95), rgba(8, 12, 28, 0.98)), repeating-linear-gradient(45deg, rgba(168,85,247,0.03) 0px, rgba(168,85,247,0.03) 2px, transparent 2px, transparent 8px)",
      color: "white",
      fontFamily: "sans-serif",
      minHeight: "100vh",
      position: "relative"
    }}>

      {/* Floating Crystal Elements */}
      <div style={{ position: "fixed", top: "10%", left: "5%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "15%", right: "3%", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(236,72,153,0.08), transparent)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: "40%", right: "15%", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        padding: "16px 24px",
        backgroundColor: isScrolled ? "rgba(10, 15, 35, 0.7)" : "transparent",
        backdropFilter: isScrolled ? "blur(15px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(168,85,247,0.25)" : "none",
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
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 20px 40px", position: "relative", zIndex: 2 }}>
        <div>
          {/* Profile Pic - Clean, no background */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
            position: "relative",
            width: "160px",
            height: "160px",
            margin: "0 auto 24px auto"
          }}>
            <img
              src="/profile.png"
              alt="Muhammad Umair"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid rgba(168,85,247,0.6)",
                boxShadow: "0 0 30px rgba(168,85,247,0.3)",
                position: "relative",
                zIndex: 1,
                backgroundColor: "transparent"
              }}
            />
          </div>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "8px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MUHAMMAD UMAIR
          </h1>
          <p style={{ color: "#c4b5fd", fontSize: "22px", marginBottom: "12px", fontWeight: "500" }}>
            Full Stack Developer · AI/ML Engineer · Game Architect · Laser Engraving Expert
          </p>
          <p style={{ color: "#a78bfa", fontSize: "16px", marginBottom: "16px" }}>
            Web · Android · Games | Office Automation · AI Integration · Precision Design
          </p>
          <p style={{ color: "#9ca3af", maxWidth: "700px", margin: "0 auto 32px", fontSize: "16px", lineHeight: "1.6" }}>
            4+ years of experience in building scalable web applications, Android apps, and interactive games. 
            Specialized in AI-powered workflows, blockchain integration, and high-precision laser engraving. 
            Delivering quality-driven solutions under pressure with rapid adaptability.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/Umair_CV.pdf" download style={{ padding: "12px 28px", background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))", backdropFilter: "blur(10px)", borderRadius: "999px", textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", border: "1px solid rgba(168,85,247,0.4)" }}>
              <Download size={18} /> Download CV
            </button>
            <button onClick={openWhatsApp} style={{ padding: "12px 28px", background: "linear-gradient(135deg, #25D366, #128C7E)", borderRadius: "999px", border: "none", color: "white", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontWeight: "bold", animation: "pulse 1.5s ease-in-out infinite" }}>
              <Send size={18} /> WhatsApp Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Glassmorphism */}
      <section id="about" style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "24px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Professional Excellence
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "40px", fontSize: "16px", lineHeight: "1.6" }}>
            Multi-skilled developer and technical specialist with comprehensive experience in web development, 
            Android apps, game development, AI-assisted workflows, office automation, graphic design, and precision laser engraving.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "20px" }}>
            {[
              { icon: Award, title: "Quality Commitment", text: "Works under pressure without compromising quality standards" },
              { icon: TrendingUp, title: "Rapid Adaptability", text: "Fast learner & multi-tool problem solver with agile mindset" },
              { icon: Shield, title: "Deadline Assurance", text: "Deadline-driven with clean documentation and reliable delivery" }
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid rgba(168,85,247,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
                <item.icon size={40} style={{ color: "#a855f7", marginBottom: "16px", margin: "0 auto 16px auto" }} />
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#9ca3af" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center" }}>
          Technical Expertise
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "48px", textAlign: "center" }}>80%+ Proficiency Across All Domains</p>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {skills.map((skill, i) => (
            <div key={i} style={{ textAlign: "left", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(5px)", padding: "16px", borderRadius: "16px", border: "1px solid rgba(168,85,247,0.15)" }}>
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

      {/* Tech Stack Box */}
      <section id="tech" style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center" }}>
          Core Technology Stack
        </h2>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "24px", padding: "40px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderRadius: "30px", border: "1px solid rgba(168,85,247,0.2)" }}>
          {techStack.map((tech, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px", transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <tech.icon size={52} style={{ color: "#a855f7", marginBottom: "10px" }} />
              <p style={{ fontSize: "13px", color: "#d1d5db", fontWeight: "500" }}>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center" }}>
          What I Do
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {[
            { title: "Web Development", desc: "Scalable full-stack apps with Next.js, React & Node.js", icon: Code2 },
            { title: "Android Apps", desc: "Native Java/Kotlin & cross-platform Flutter apps", icon: Smartphone },
            { title: "Game Development", desc: "2D/3D immersive games with Unity & Godot", icon: Gamepad2 },
            { title: "AI Automation", desc: "Intelligent workflows using LLMs and RAG pipelines", icon: Bot },
            { title: "Laser Engraving", desc: "High-precision designs on wood, acrylic, metal, leather", icon: Zap },
            { title: "Design & Prepress", desc: "Professional vector graphics with CorelDRAW & Photoshop", icon: Paintbrush }
          ].map((item, i) => (
            <div key={i} style={{ padding: "24px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid rgba(168,85,247,0.2)", textAlign: "left" }}>
              <item.icon size={40} style={{ color: "#a855f7", marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.5" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center" }}>
          Featured Projects
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
          {[
            { title: "Multiplayer Racing Game", desc: "Real-time multiplayer racing with chat, leaderboard & rewards", tech: "Unity + C#" },
            { title: "Task Manager App", desc: "Productivity app for Android with task categories & analytics", tech: "Android + Java" },
            { title: "AI Dashboard", desc: "Smart dashboard with AI insights, charts & Excel data analysis", tech: "Web + Tailwind + Python" },
            { title: "Custom Engraving Designs", desc: "Precision vector engravings on wood & acrylic using ZE CAD", tech: "ZE CAD + CorelDRAW" }
          ].map((project, i) => (
            <div key={i} style={{ padding: "24px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid rgba(168,85,247,0.2)", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{project.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "12px", lineHeight: "1.5" }}>{project.desc}</p>
              <span style={{ color: "#a855f7", fontSize: "12px", fontWeight: "500" }}>{project.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience with Glowing Timeline */}
      <section id="experience" style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center" }}>
          Professional Journey
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "3px", background: "#a855f7", boxShadow: "0 0 15px #a855f7", animation: "glowPulse 2s ease-in-out infinite" }} />
          {[
            { period: "2023 – Present", title: "Senior Full Stack Developer", desc: "Leading full-stack development & AI integration for enterprise clients" },
            { period: "2021 – 2023", title: "Game & App Developer", desc: "Developed 15+ games & apps using Unity, Godot, Flutter & Android Studio" },
            { period: "2019 – 2021", title: "Design & Laser Specialist", desc: "Mastered precision laser engraving, CorelDRAW & Photoshop workflows" }
          ].map((exp, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "48px", marginBottom: "48px", textAlign: "left" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "14px", height: "14px", backgroundColor: "#a855f7", borderRadius: "50%", border: "2px solid black", boxShadow: "0 0 10px #a855f7", animation: "glowPulse 1.5s ease-in-out infinite" }} />
              <span style={{ color: "#a855f7", fontSize: "14px", fontWeight: "600" }}>{exp.period}</span>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "6px", marginBottom: "8px" }}>{exp.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.5" }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 20px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderRadius: "30px", padding: "48px", border: "1px solid rgba(168,85,247,0.2)" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Let's Build Something Amazing
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "32px" }}>Available for freelance, contract, or full-time opportunities worldwide.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap", marginBottom: "32px" }}>
            <a href="mailto:jeeumair698@gmail.com" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d1d5db", textDecoration: "none" }}><Mail size={18} /> jeeumair698@gmail.com</a>
            <a href="tel:03099988810" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d1d5db", textDecoration: "none" }}><Phone size={18} /> 03099988810</a>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d1d5db" }}><MapPin size={18} /> Pakistan</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="https://github.com/hellj504-a" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: "rgba(255,255,255,0.1)", borderRadius: "999px", textDecoration: "none", color: "white", fontWeight: "500" }}>
              <Github size={18} /> GitHub Portfolio
            </a>
            <button onClick={openWhatsApp} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: "linear-gradient(135deg, #25D366, #128C7E)", borderRadius: "999px", border: "none", color: "white", cursor: "pointer", fontWeight: "bold" }}>
              <Send size={18} /> WhatsApp Instant
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "28px", textAlign: "center", borderTop: "1px solid rgba(168,85,247,0.15)", color: "#6b7280", fontSize: "14px", position: "relative", zIndex: 2 }}>
        <p>© 2025 Muhammad Umair — Full Stack Developer & AI Engineer. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        @keyframes glowPulse {
          0% { opacity: 0.5; box-shadow: 0 0 5px #a855f7; }
          50% { opacity: 1; box-shadow: 0 0 15px #a855f7; }
          100% { opacity: 0.5; box-shadow: 0 0 5px #a855f7; }
        }
      `}</style>
    </div>
  );
}