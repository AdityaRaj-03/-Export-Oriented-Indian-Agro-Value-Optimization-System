import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

function Counter({ to, label, icon }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 800;
    const stepTime = Math.max(10, Math.floor(duration / to));
    const timer = setInterval(() => {
      start += 1;
      if (start >= to) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [to]);

  return (
    <div className="stat-card-new">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
  const features = [
    { icon: "🌾", title: "Crop Recommendation", desc: "AI-powered suggestions" },
    { icon: "📊", title: "Export Potential", desc: "Market demand analysis" },
    { icon: "⚠️", title: "Risk Indicators", desc: "Cultivation alerts" },
    { icon: "📱", title: "Mobile Friendly", desc: "Use anywhere" },
    { icon: "⚡", title: "Fast Predictions", desc: "Results in seconds" },
    { icon: "🎯", title: "High Accuracy", desc: "92%+ precision" },
  ];

  const tech = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Flask", icon: "🌶️", color: "#000" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Scikit-learn", icon: "🔬", color: "#F7931E" },
    { name: "XGBoost", icon: "🚀", color: "#FF6600" },
    { name: "Pandas", icon: "🐼", color: "#150458" },
  ];

  const team = [
    { name: "Divyanshu Kashyap", role: "Backend Developer", icon: "⚙️" },
    { name: "Bavigadda Meghana", role: "Research & ML", icon: "🧠" },
    { name: "Aditya Raj", role: "Frontend Developer", icon: "🎨" },
  ];

  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="page about-page-new">
      {/* Hero Section */}
      <section className="about-hero">
        {/* Elegant Landscape */}
        <div className="landscape-scene">
          <div className="horizon-glow"></div>
          <div className="field-layer layer-1"></div>
          <div className="field-layer layer-2"></div>
          <div className="field-layer layer-3"></div>
          <div className="field-layer layer-4"></div>
          <div className="field-texture"></div>
        </div>
        
        <div className="about-hero-content">
          <span className="badge">🌍 Export-Ready Solutions</span>
          <h1>Empowering Indian<br /><span className="gradient-text">Farmers</span> Globally</h1>
          <p>AI-driven crop recommendations for maximum export potential</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Counter to={1200} label="Farmers Helped" icon="👨‍🌾" />
        <Counter to={45} label="Export Crops" icon="🌾" />
        <Counter to={92} label="Accuracy %" icon="🎯" />
        <Counter to={18} label="Yield Increase %" icon="📈" />
      </section>

      {/* Problem & Solution */}
      <section className="problem-solution">
        <div className="ps-card problem">
          <div className="ps-icon">❌</div>
          <h3>The Problem</h3>
          <p>Farmers struggle to select export-ready crops due to lack of market data</p>
        </div>
        <div className="ps-arrow">→</div>
        <div className="ps-card solution">
          <div className="ps-icon">✅</div>
          <h3>Our Solution</h3>
          <p>ML-powered system analyzes climate, soil & market demand for smart recommendations</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section-new">
        <h2>What We Offer</h2>
        <div className="features-grid-new">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`feature-card-new ${hoveredFeature === i ? 'active' : ''}`}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="feature-icon-new">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <h2>Built With</h2>
        <div className="tech-grid">
          {tech.map((t, i) => (
            <div key={i} className="tech-card">
              <span className="tech-icon">{t.icon}</span>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section-new">
        <h2>Meet the Team</h2>
        <div className="team-grid-new">
          {team.map((m, i) => (
            <div key={i} className="team-card-new">
              <div className="team-photo-placeholder">
                <span>{m.icon}</span>
              </div>
              <h3 className="team-name">{m.name}</h3>
              <p className="team-role">{m.role}</p>
            </div>
          ))}
        </div>
        <p className="guide-text">
          <span className="guide-icon">👨‍🏫</span>
          Guided by <strong>Mr. Karan Kumar Das</strong> — LPU
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="cta-content">
          <h2>Ready to Boost Your Exports?</h2>
          <Link to="/recommend" className="cta-btn-new">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}

export default About;
