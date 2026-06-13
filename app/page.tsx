"use client";

import { Download, Mail, Phone, MapPin, Github, Code2, Smartphone, Gamepad2, Bot, Paintbrush, FileText, Layers, Server, Globe, Zap, Cpu, Send, Award, TrendingUp, Shield, X, Printer } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCV, setShowCV] = useState(false);

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
    { name: "JavaScript", level: 88, icon: Globe },
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
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 4K Still Image Background */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        zIndex: 0
      }} />

      {/* Dark Overlay for text readability */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.75)",
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
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
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <img src="/profile.png" alt="Muhammad Umair" style={{ width: "160px", height: "160px", borderRadius: "50%", objectFit: "cover", border: "3px solid #a855f7", boxShadow: "0 0 30px rgba(168,85,247,0.3)" }} />
            </div>
            <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "8px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              MUHAMMAD UMAIR
            </h1>
            <p style={{ color: "#c4b5fd", fontSize: "22px", marginBottom: "12px", fontWeight: "500" }}>
              Full Stack Developer · AI/ML Engineer · Game Architect · Laser Expert
            </p>

            {/* Intro Glowing Box */}
            <div style={{
              maxWidth: "800px",
              margin: "32px auto",
              padding: "24px 32px",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid rgba(168,85,247,0.4)",
              boxShadow: "0 0 30px rgba(168,85,247,0.2)",
              animation: "glowPulse 2s ease-in-out infinite"
            }}>
              <p style={{ color: "#ffffff", fontSize: "16px", lineHeight: "1.6" }}>
                4+ years of experience in building scalable web applications, Android apps, and interactive games. 
                Specialized in AI-powered workflows, blockchain integration, and high-precision laser engraving. 
                Delivering quality-driven solutions under pressure with rapid adaptability.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setShowCV(true)} style={{ padding: "12px 28px", backgroundColor: "#a855f7", borderRadius: "999px", border: "none", color: "white", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <Download size={18} /> Download / Print CV
              </button>
              <button onClick={openWhatsApp} style={{ padding: "12px 28px", backgroundColor: "#25D366", borderRadius: "999px", border: "none", color: "white", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <Send size={18} /> WhatsApp Me
              </button>
            </div>
          </div>
        </section>

        {/* Quality Commitment Boxes */}
        <section id="about" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Professional Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Award, title: "Quality Commitment", text: "Works under pressure without compromising quality standards" },
                { icon: TrendingUp, title: "Rapid Adaptability", text: "Fast learner & multi-tool problem solver with agile mindset" },
                { icon: Shield, title: "Deadline Assurance", text: "Deadline-driven with clean documentation and reliable delivery" }
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid rgba(168,85,247,0.3)" }}>
                  <item.icon size={48} style={{ color: "#a855f7", marginBottom: "16px", margin: "0 auto 16px auto" }} />
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px", color: "#ffffff" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "#d1d5db", lineHeight: "1.5" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section with Glowing Progress Bar */}
        <section id="skills" style={{ padding: "80px 20px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Technical Expertise
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "48px", textAlign: "center" }}>80%+ Proficiency Across All Domains</p>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {skills.map((skill, i) => (
              <div key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <skill.icon size={24} style={{ color: "#a855f7" }} />
                  <span style={{ color: "#ffffff" }}>{skill.name}</span>
                  <span style={{ marginLeft: "auto", color: "#a855f7" }}>{skill.level}%</span>
                </div>
                <div style={{ height: "10px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", overflow: "hidden" }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #a855f7, #ec4899)",
                    borderRadius: "999px",
                    boxShadow: "0 0 12px #a855f7",
                    animation: "glowPulse 1.5s ease-in-out infinite"
                  }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Box */}
        <section id="tech" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.4)" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Tech Stack
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px", padding: "40px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", borderRadius: "20px" }}>
            {techStack.map((tech, i) => (
              <div key={i} style={{ textAlign: "center", padding: "16px" }}>
                <tech.icon size={48} style={{ color: "#a855f7", marginBottom: "8px" }} />
                <p style={{ fontSize: "13px", color: "#ffffff" }}>{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section style={{ padding: "80px 20px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            What I Do
          </h2>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              { title: "Web Development", desc: "Scalable full-stack apps with Next.js, React & Node.js", icon: Code2 },
              { title: "Android Apps", desc: "Native Java/Kotlin & cross-platform Flutter apps", icon: Smartphone },
              { title: "Game Development", desc: "2D/3D immersive games with Unity & Godot", icon: Gamepad2 },
              { title: "AI Automation", desc: "Intelligent workflows using LLMs and RAG pipelines", icon: Bot },
              { title: "Laser Engraving", desc: "High-precision designs on wood, acrylic, metal, leather", icon: Zap },
              { title: "Design & Prepress", desc: "Professional vector graphics with CorelDRAW & Photoshop", icon: Paintbrush }
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", borderRadius: "16px", border: "1px solid rgba(168,85,247,0.2)" }}>
                <item.icon size={40} style={{ color: "#a855f7", marginBottom: "16px" }} />
                <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px", color: "#ffffff" }}>{item.title}</h3>
                <p style={{ color: "#d1d5db", fontSize: "14px" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.4)" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Featured Projects
          </h2>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
            {[
              { title: "Multiplayer Racing Game", desc: "Real-time multiplayer racing with chat & leaderboard", tech: "Unity + C#" },
              { title: "Task Manager App", desc: "Productivity app for Android with task categories", tech: "Android + Java" },
              { title: "AI Dashboard", desc: "Smart dashboard with AI insights & Excel analysis", tech: "Web + Tailwind + Python" },
              { title: "Custom Engraving Designs", desc: "Precision vector engravings with ZE CAD", tech: "ZE CAD + CorelDRAW" }
            ].map((project, i) => (
              <div key={i} style={{ padding: "24px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", borderRadius: "16px", border: "1px solid rgba(168,85,247,0.2)" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#ffffff" }}>{project.title}</h3>
                <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "12px" }}>{project.desc}</p>
                <span style={{ color: "#a855f7", fontSize: "12px" }}>{project.tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience with Glowing Timeline */}
        <section id="experience" style={{ padding: "80px 20px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "48px", textAlign: "center", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Professional Journey
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "3px", background: "#a855f7", boxShadow: "0 0 15px #a855f7", animation: "glowPulse 2s ease-in-out infinite" }} />
            {[
              { period: "2023 – Present", title: "Senior Full Stack Developer", desc: "Leading full-stack development & AI integration for enterprise clients" },
              { period: "2021 – 2023", title: "Game & App Developer", desc: "Developed 15+ games & apps using Unity, Godot, Flutter & Android Studio" },
              { period: "2019 – 2021", title: "Design & Laser Specialist", desc: "Mastered precision laser engraving, CorelDRAW & Photoshop workflows" }
            ].map((exp, i) => (
              <div key={i} style={{ position: "relative", paddingLeft: "48px", marginBottom: "48px" }}>
                <div style={{ position: "absolute", left: "8px", top: "8px", width: "14px", height: "14px", backgroundColor: "#a855f7", borderRadius: "50%", border: "2px solid black", boxShadow: "0 0 10px #a855f7", animation: "glowPulse 1.5s ease-in-out infinite" }} />
                <span style={{ color: "#a855f7", fontSize: "14px", fontWeight: "600" }}>{exp.period}</span>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "6px", marginBottom: "8px", color: "#ffffff" }}>{exp.title}</h3>
                <p style={{ color: "#d1d5db", fontSize: "14px" }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: "80px 20px", backgroundColor: "rgba(0,0,0,0.4)", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", borderRadius: "30px", padding: "48px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Let's Work Together
            </h2>
            <p style={{ color: "#d1d5db", marginBottom: "32px" }}>Available for freelance, contract, or full-time opportunities worldwide.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap", marginBottom: "32px" }}>
              <a href="mailto:jeeumair698@gmail.com" style={{ color: "#ffffff", textDecoration: "none" }}>jeeumair698@gmail.com</a>
              <a href="tel:03099988810" style={{ color: "#ffffff", textDecoration: "none" }}>03099988810</a>
              <span style={{ color: "#ffffff" }}>Pakistan</span>
            </div>
            <a href="https://github.com/hellj504-a" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", textDecoration: "none", color: "white" }}>
              <Github size={18} /> GitHub
            </a>
          </div>
        </section>

        <footer style={{ padding: "28px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" }}>
          © 2025 Muhammad Umair. All rights reserved.
        </footer>
      </div>

      {/* CV Popup Modal */}
      {showCV && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.95)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.3s ease-in-out",
          overflowY: "auto",
          padding: "20px"
        }}>
          <div style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "30px 24px",
            textAlign: "center",
            position: "relative",
            animation: "slideUp 0.4s ease-in-out",
            maxHeight: "90vh",
            overflowY: "auto"
          }}>
            <button onClick={() => setShowCV(false)} style={{
              position: "sticky",
              top: "0",
              float: "right",
              background: "none",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              color: "#333",
              marginTop: "-10px"
            }}>×</button>
            
            <div style={{ clear: "both" }} />
            
            <img src="/profile.png" alt="Muhammad Umair" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "16px", border: "3px solid #a855f7" }} />
            
            <h1 style={{ color: "#1a1a2e", fontSize: "28px", marginBottom: "4px" }}>MUHAMMAD UMAIR</h1>
            <p style={{ color: "#a855f7", fontWeight: "600", marginBottom: "16px" }}>Full Stack Developer · AI/ML Engineer · Game Architect</p>
            
            <div style={{ background: "#f5f5f5", padding: "12px", borderRadius: "12px", marginBottom: "20px" }}>
              <p style={{ color: "#333", fontSize: "14px" }}>📞 03099988810 | 📧 jeeumair698@gmail.com</p>
              <p style={{ color: "#333", fontSize: "14px" }}>📍 Lahore, Pakistan | 💼 4+ Years Experience</p>
            </div>
            
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <h3 style={{ color: "#1a1a2e", borderBottom: "2px solid #a855f7", paddingBottom: "6px", marginBottom: "12px" }}>💻 Technical Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["HTML/CSS", "JavaScript", "React", "Node.js", "Python", "Flutter", "Unity", "Godot", "Android Studio", "CorelDRAW", "Photoshop", "ZE CAD"].map(skill => (
                  <span key={skill} style={{ background: "#e9d5ff", color: "#6b21a5", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>{skill}</span>
                ))}
              </div>
            </div>
            
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <h3 style={{ color: "#1a1a2e", borderBottom: "2px solid #a855f7", paddingBottom: "6px", marginBottom: "12px" }}>🏆 Professional Excellence</h3>
              <ul style={{ color: "#444", fontSize: "13px", paddingLeft: "20px" }}>
                <li>⚡ Works under pressure without compromising quality</li>
                <li>🧠 Fast learner & multi-tool problem solver</li>
                <li>📅 Deadline-driven with clean documentation</li>
              </ul>
            </div>
            
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
              <button onClick={() => window.print()} style={{ padding: "12px 24px", background: "linear-gradient(135deg, #a855f7, #ec4899)", border: "none", borderRadius: "40px", color: "white", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
                <Printer size={18} /> Print / Save as PDF
              </button>
              <button onClick={() => setShowCV(false)} style={{ padding: "12px 24px", backgroundColor: "#333", border: "none", borderRadius: "40px", color: "white", cursor: "pointer" }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes glowPulse {
          0% { opacity: 0.5; box-shadow: 0 0 5px #a855f7; }
          50% { opacity: 1; box-shadow: 0 0 20px #a855f7; }
          100% { opacity: 0.5; box-shadow: 0 0 5px #a855f7; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media print {
          body * {
            visibility: hidden;
          }
          .cv-print, .cv-print * {
            visibility: visible;
          }
          .cv-print {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}