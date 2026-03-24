// ...existing code...
import { Link } from "react-router-dom";
import "../style/Home.css";
import Footer from "../components/Footer";

function HomePage() {
  const benefits = [
    {
      icon: "🧠",
      title: "Precision Crop Matching",
      text: "Get the right crop from your farm conditions."
    },
    {
      icon: "📦",
      title: "Export-First Recommendations",
      text: "Focus on crops with stronger export demand."
    },
    {
      icon: "⚡",
      title: "Fast, Actionable Decisions",
      text: "From input to plan in seconds."
    }
  ];

  const flow = [
    { step: "01", title: "Enter Data", text: "Region, season, soil, rainfall, temperature." },
    { step: "02", title: "Get Prediction", text: "Instant best-fit crop recommendation." },
    { step: "03", title: "Take Action", text: "Use export and risk signals to plan." }
  ];

  return (
    <div className="page landing-page">
      <section className="landing-hero premium-hero-base">
        <div className="landing-hero-grid-pattern"></div>
        <div className="landing-hero-shell">
          <div className="landing-hero-content">
            <span className="landing-badge">Built for Indian Agro Exporters</span>
            <h1>Choose the Right Crop for Profit and Export Growth</h1>
            <p>
              Turn your farm inputs into a clear, export-focused crop decision.
            </p>

            <div className="landing-hero-actions">
              <Link to="/recommend" className="landing-cta-primary">Start Free Prediction</Link>
              <Link to="/howto" className="landing-cta-secondary">View Quick Guide</Link>
            </div>

            <div className="landing-hero-meta">
              <span>⚡ Results in seconds</span>
              <span>📈 Export potential scoring</span>
              <span>🛡️ Risk-aware planning</span>
            </div>
          </div>

          <div className="landing-hero-panel">
            <div className="landing-panel-head">
              <span className="dot"></span>
              <strong>Sample Decision Snapshot</strong>
            </div>
            <h3>Recommended Crop: Rice</h3>
            <div className="landing-panel-metric">
              <span>Export Potential</span>
              <strong>High</strong>
            </div>
            <div className="landing-panel-metric">
              <span>Risk Level</span>
              <strong>Low</strong>
            </div>
            <p>Enter your own farm inputs to generate a recommendation tailored to your conditions.</p>
          </div>
        </div>
      </section>

      <section className="landing-proof-strip">
        <div className="proof-item">
          <strong>1.2k+</strong>
          <span>Farmers supported</span>
        </div>
        <div className="proof-item">
          <strong>45+</strong>
          <span>Export-oriented crop signals</span>
        </div>
        <div className="proof-item">
          <strong>+18%</strong>
          <span>Average planning improvement</span>
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-head">
          <h2>Why Farmers and Advisors Use This</h2>
          <p>Simple, fast, and practical.</p>
        </div>
        <div className="landing-benefits-grid">
          {benefits.map((item, idx) => (
            <article key={idx} className="landing-benefit-card">
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-process">
        <div className="landing-section-head">
          <h2>How It Works</h2>
          <p>Three quick steps.</p>
        </div>
        <div className="landing-process-grid">
          {flow.map((item, idx) => (
            <article key={idx} className="landing-process-card">
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-final-cta">
        <h2>Ready to Plan Your Next Crop with Confidence?</h2>
        <p>Start now and get a data-backed recommendation.</p>
        <div className="landing-hero-actions">
          <Link to="/recommend" className="landing-cta-primary">Predict Crop Now</Link>
          <Link to="/contact" className="landing-cta-secondary">Speak with Support</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;