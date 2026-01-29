import { useEffect, useState } from "react";
import "../style/Home.css";
import Avatar from "../assets/aditya-avatar.svg";

function Counter({ to, label }) {
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
    <div className="stat">
      <div className="stat-value">{value}{typeof to === 'string' ? '' : ''}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
  const features = [
    "Crop recommendation",
    "Export potential",
    "Risk indicators",
    "Mobile-friendly",
    "Fast predictions",
  ];

  const tech = ["React", "Flask", "Python", "Scikit-learn", "XGBoost", "Pandas"];

  const team = [
    { name: "Divyanshu Kashyap", role: "Developer" },
    { name: "Bavigadda Meghana", role: "Research" },
    { name: "Aditya Raj", role: "Lead" },
  ];

  const [active, setActive] = useState({});

  function toggleFeature(i) {
    setActive((s) => ({ ...s, [i]: !s[i] }));
  }

  return (
    <div className="page about-page">
      <div className="about-grid">
        <div className="about-photo-wrap">
          <img src={Avatar} alt="Aditya Raj" className="about-photo" />
        </div>

        <div className="about-content">
          <h1>Export-Oriented Indian Agro — Project Overview</h1>
          <p className="lead">
            Export-Oriented Indian Agro Value Optimization System is a web-based decision support tool designed to help Indian farmers select suitable crops for export.
            The system uses agricultural, climatic, and regional data to recommend crops that have higher export potential and better profitability.
          </p>

          <section className="card">
            <h2>Problem Statement</h2>
            <p>
              Indian farmers often face difficulty in selecting the right crops for cultivation when targeting export markets. Crop selection depends on multiple factors such as soil conditions, climate, season, and market demand.
              Traditional advisory systems rarely consider export demand, leading to missed income opportunities.
            </p>
          </section>

          <section className="card">
            <h2>Solution Approach</h2>
            <p>
              The system analyzes user-provided inputs such as region, season, soil type, rainfall, and temperature. Using data analytics and machine learning techniques, it identifies patterns from historical agricultural and export data and recommends the most suitable crop for the given conditions.
            </p>
          </section>

          <section className="card">
            <h2>Key Features</h2>
            <div className="feature-chips">
              {features.map((f, i) => (
                <button key={i} className={"chip " + (active[i] ? 'active' : '')} onClick={() => toggleFeature(i)}>
                  {f}
                </button>
              ))}
            </div>
          </section>

          <section className="card split">
            <div>
              <h2>Technologies Used</h2>
              <div className="tech-list">
                {tech.map((t, i) => (
                  <span key={i} className="tech">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <h2>Dataset & Methodology</h2>
              <details className="faq-item"><summary>Overview</summary>
                <p>
                  The system uses historical agricultural data including soil properties, weather conditions, regional information, and crop records. Data preprocessing, feature selection, and machine learning models (Random Forest, XGBoost) are applied to predict crop suitability and export potential.
                </p>
              </details>
            </div>
          </section>

          <section className="card">
            <h2>Team & Guide</h2>
            <div className="team-grid">
              {team.map((m, i) => (
                <div key={i} className="team-card">
                  <div className="team-avatar">{m.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
                  <div>
                    <strong>{m.name}</strong>
                    <div className="muted">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="muted" style={{ marginTop: 12 }}>Guided By: Mr. Karan Kumar Das — Lovely Professional University</p>
          </section>

          <section className="card stats-row">
            <Counter to={1200} label="Farmers helped" />
            <Counter to={45} label="Export-ready crops" />
            <Counter to={18} label="Avg. yield increase (%)" />
          </section>

          <p className="about-cta">For collaboration or queries: <a href="mailto:support@agroexport.com">support@agroexport.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
