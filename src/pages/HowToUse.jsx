import "../style/Home.css";
import { Link } from "react-router-dom";

function HowToUse() {
  const steps = [
    {
      num: "01",
      title: "Open the Website",
      desc: "Open the website using a mobile phone or computer with an internet connection.",
      icon: "🌐"
    },
    {
      num: "02",
      title: "Click on 'Get Started'",
      desc: "On the home page, click the Get Started button to begin crop recommendation.",
      icon: "🖱️"
    },
    {
      num: "03",
      title: "Fill the Form",
      desc: "Enter your region, season, soil type, rainfall, and temperature details.",
      icon: "📝"
    },
    {
      num: "04",
      title: "Click 'Predict Crop'",
      desc: "After entering all details, click on the Predict Crop button.",
      icon: "🔮"
    },
    {
      num: "05",
      title: "Get Your Results",
      desc: "View recommended crops, export potential, and risk indicators.",
      icon: "📊"
    }
  ];

  const requirements = [
    { icon: "📍", text: "Your farming region" },
    { icon: "🌤️", text: "Current season" },
    { icon: "🏔️", text: "Soil type (if known)" },
    { icon: "🌧️", text: "Average rainfall" },
    { icon: "🌡️", text: "Average temperature" }
  ];

  return (
    <div className="page howto-page">
      {/* Hero Section */}
      <div className="howto-hero premium-hero-base">
        {/* Premium Background Elements */}
        <div className="hero-grid-pattern"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="hero-glow-orb orb-3"></div>
        <div className="hero-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
        <div className="hero-border-glow"></div>
        
        <div className="howto-hero-bg">
          <div className="hero-circle circle-1"></div>
          <div className="hero-circle circle-2"></div>
          <div className="hero-circle circle-3"></div>
          <div className="hero-wave"></div>
        </div>
        
        <div className="howto-hero-main">
          <div className="howto-hero-content">
            <div className="howto-badge-modern">
              <span className="badge-glow"></span>
              <span className="badge-icon">📖</span>
              <span className="badge-text">User Guide</span>
            </div>
            
            <h1>Learn How to <span className="highlight">Get Started</span></h1>
            <p>Follow our simple 5-step process to receive personalized crop recommendations tailored to your farming conditions.</p>
            
            {/* Quick Stats */}
            <div className="howto-quick-stats">
              <div className="howto-stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Easy Steps</span>
              </div>
              <div className="stat-divider"></div>
              <div className="howto-stat-item">
                <span className="stat-number">2 min</span>
                <span className="stat-label">Average Time</span>
              </div>
              <div className="stat-divider"></div>
              <div className="howto-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free to Use</span>
              </div>
            </div>

            <div className="howto-hero-actions">
              <Link to="/recommend" className="howto-btn primary">
                <span>🌱</span> Try It Now
              </Link>
              <Link to="/faq" className="howto-btn secondary">
                <span>❓</span> View FAQs
              </Link>
            </div>
          </div>

          {/* Enhanced Visual Steps Preview */}
          <div className="howto-hero-visual">
            <div className="steps-preview-enhanced">
              <div className="steps-preview-glow"></div>
              <div className="steps-preview-header">
                <div className="header-icon-wrapper">
                  <span className="preview-icon">🎯</span>
                  <span className="icon-ring"></span>
                </div>
                <div className="header-text">
                  <span className="header-title">Quick Overview</span>
                  <span className="header-subtitle">3 simple steps</span>
                </div>
                <div className="header-badge">LIVE</div>
              </div>
              <div className="steps-progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="steps-preview-body">
                <div className="preview-step-enhanced completed">
                  <div className="step-indicator">
                    <div className="step-connector done"></div>
                    <div className="step-dot done">
                      <span className="check-icon">✓</span>
                    </div>
                  </div>
                  <div className="step-info">
                    <span className="step-title">Enter Details</span>
                    <span className="step-desc">Fill your farm info</span>
                  </div>
                  <span className="step-status completed">Done</span>
                </div>
                
                <div className="preview-step-enhanced active">
                  <div className="step-indicator">
                    <div className="step-connector"></div>
                    <div className="step-dot active">
                      <span className="dot-pulse"></span>
                      <span className="dot-core"></span>
                    </div>
                  </div>
                  <div className="step-info">
                    <span className="step-title">Process Data</span>
                    <span className="step-desc">AI analyzes inputs</span>
                  </div>
                  <span className="step-status active">In Progress</span>
                </div>
                
                <div className="preview-step-enhanced pending">
                  <div className="step-indicator">
                    <div className="step-dot pending">
                      <span>3</span>
                    </div>
                  </div>
                  <div className="step-info">
                    <span className="step-title">Get Results</span>
                    <span className="step-desc">View recommendations</span>
                  </div>
                  <span className="step-status pending">Waiting</span>
                </div>
              </div>
              <div className="steps-preview-footer">
                <div className="footer-content">
                  <span className="footer-icon">⚡</span>
                  <span className="footer-text">Results in seconds</span>
                </div>
                <div className="footer-action">
                  <span className="action-dot"></span>
                </div>
              </div>
            </div>
            
            <div className="hero-floating-icons">
              <span className="float-icon f1">📋</span>
              <span className="float-icon f2">✨</span>
              <span className="float-icon f3">🌾</span>
              <span className="float-icon f4">🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="howto-content">
        {/* Who is this for */}
        <section className="howto-section">
          <div className="section-header">
            <span className="section-icon">👥</span>
            <h2>Who is this system for?</h2>
          </div>
          <div className="info-card">
            <p>This system is designed for <strong>farmers</strong>, <strong>agricultural advisors</strong>, and <strong>agronomists</strong> who want to choose the best crops for export based on their land, climate, and region.</p>
          </div>
        </section>

        {/* Requirements */}
        <section className="howto-section">
          <div className="section-header">
            <span className="section-icon">📋</span>
            <h2>What do you need?</h2>
          </div>
          <div className="requirements-grid">
            {requirements.map((req, i) => (
              <div key={i} className="requirement-card">
                <span className="req-icon">{req.icon}</span>
                <span className="req-text">{req.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="howto-section">
          <div className="section-header">
            <span className="section-icon">🚀</span>
            <h2>Step-by-step Guide</h2>
          </div>
          <div className="steps-container">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Example */}
        <section className="howto-section">
          <div className="section-header">
            <span className="section-icon">💡</span>
            <h2>Example</h2>
          </div>
          <div className="example-card">
            <div className="example-input">
              <h4>Input</h4>
              <div className="example-items">
                <span><strong>Region:</strong> Central</span>
                <span><strong>Season:</strong> Rabi</span>
                <span><strong>Soil:</strong> Loamy</span>
                <span><strong>Rainfall:</strong> 800mm</span>
              </div>
            </div>
            <div className="example-arrow">→</div>
            <div className="example-output">
              <h4>Output</h4>
              <div className="example-result">
                <span className="crop-icon">🌾</span>
                <span className="crop-name">Wheat</span>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="howto-section">
          <div className="section-header">
            <span className="section-icon">⚠️</span>
            <h2>Important Notes</h2>
          </div>
          <div className="notes-grid">
            <div className="note-card">
              <span className="note-icon">📌</span>
              <p>This system provides <strong>guidance</strong>, not a guarantee.</p>
            </div>
            <div className="note-card">
              <span className="note-icon">👨‍🌾</span>
              <p>Final decisions should consider <strong>expert advice</strong>.</p>
            </div>
            <div className="note-card">
              <span className="note-icon">🌦️</span>
              <p>Weather and market conditions <strong>may change</strong>.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="howto-cta">
          <h2>Ready to get started?</h2>
          <p>Try our crop recommendation system now and make data-driven farming decisions.</p>
          <Link to="/recommend" className="cta-button">
            <span>🌱</span> Start Prediction
          </Link>
        </section>
      </div>
    </div>
  );
}

export default HowToUse;
