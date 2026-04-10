// ...existing code...
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiCloudRain,
  FiGlobe,
  FiMapPin,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import "../style/Home.css";
import Footer from "../components/Footer";

function HomePage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".landing-reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FiMapPin />,
      title: "Precision Crop Decisions",
      text: "Map your exact farm conditions to crops with stronger market fit and practical export potential."
    },
    {
      icon: <FiGlobe />,
      title: "Export-Ready Recommendations",
      text: "Prioritize crops with demand visibility so planning is tied to real export opportunities."
    },
    {
      icon: <FiActivity />,
      title: "Fast Strategic Planning",
      text: "From farm input to actionable direction in seconds, with risk-aware signals built in."
    }
  ];

  const trustPoints = [
    { icon: <FiCheckCircle />, text: "Built for Indian conditions" },
    { icon: <FiUsers />, text: "Designed for exporters and advisors" },
    { icon: <FiClock />, text: "Decision-ready output in under a minute" }
  ];

  const quickKpis = [
    { icon: <FiBarChart2 />, label: "Prediction Confidence", value: "92%" },
    { icon: <FiTrendingUp />, label: "Export Opportunity Signals", value: "45+" },
    { icon: <FiCloudRain />, label: "Weather & Soil Inputs", value: "12" },
  ];

  const panelSignals = [
    { icon: <FiTrendingUp />, label: "Export Demand", value: "High", tone: "is-positive" },
    { icon: <FiMapPin />, label: "District Fit", value: "Strong", tone: "is-sky" },
    { icon: <FiShield />, label: "Risk Outlook", value: "Low", tone: "is-calm" },
    { icon: <FiCloudRain />, label: "Weather Match", value: "Aligned", tone: "is-neutral" },
  ];

  const panelTrendBars = [58, 64, 62, 71, 76, 84, 79, 88];

  const proofStats = [
    { icon: <FiUsers />, value: "1.2k+", text: "Farmers and advisors already using it" },
    { icon: <FiGlobe />, value: "45+", text: "Export-focused crop opportunities tracked" },
    { icon: <FiTrendingUp />, value: "+18%", text: "Average confidence uplift in crop planning" },
  ];

  const flow = [
    {
      step: "01",
      icon: <FiMapPin />,
      title: "Add Your Farm Profile",
      text: "Enter region, season, soil type, rainfall, and temperature conditions."
    },
    {
      step: "02",
      icon: <FiBarChart2 />,
      title: "Get Top Crop Matches",
      text: "Receive instant recommendations aligned with your local growing context."
    },
    {
      step: "03",
      icon: <FiShield />,
      title: "Plan for Export Outcome",
      text: "Use market and risk cues to decide what to grow with confidence."
    }
  ];

  const marketSignals = [
    {
      icon: <FiTrendingUp />,
      title: "Demand Momentum",
      value: "High",
      score: 84,
      trend: "+9%",
      text: "Tracks categories where export pull remains consistently strong."
    },
    {
      icon: <FiCheckCircle />,
      title: "Climate Fit",
      value: "Verified",
      score: 91,
      trend: "+6%",
      text: "Checks if crop selection is aligned with your field environment."
    },
    {
      icon: <FiShield />,
      title: "Planning Risk",
      value: "Controlled",
      score: 78,
      trend: "-12%",
      text: "Highlights safer pathways to avoid season-level crop mismatch."
    }
  ];

  const testimonials = [
    {
      quote:
        "We stopped guessing and started planning. The recommendation was practical and market-aligned.",
      name: "Ramesh K.",
      role: "Farmer, Punjab",
      impact: "Export clarity improved"
    },
    {
      quote:
        "This helped us advise growers using export logic, not just trial-and-error intuition.",
      name: "Priya S.",
      role: "Agri Advisor, Gujarat",
      impact: "Decision time reduced"
    },
    {
      quote:
        "Simple interface, fast output, and clear direction for the next season.",
      name: "Anil T.",
      role: "Producer Group Lead",
      impact: "Season planning stronger"
    }
  ];

  const useCases = [
    {
      icon: <FiUsers />,
      title: "For Farmers",
      text: "Choose crops with clearer confidence before committing your season."
    },
    {
      icon: <FiBarChart2 />,
      title: "For Agri Advisors",
      text: "Guide growers with quick, data-backed recommendations in meetings."
    },
    {
      icon: <FiGlobe />,
      title: "For Export Planners",
      text: "Spot crop directions with stronger demand momentum and lower risk."
    }
  ];

  return (
    <div className="page landing-page">
      <section className="landing-hero">
        <div className="landing-hero-grid-pattern"></div>
        <div className="landing-hero-illustration" aria-hidden="true">
          <div className="hero-orb hero-orb-a"></div>
          <div className="hero-orb hero-orb-b"></div>
          <div className="hero-mini-card hero-mini-card-map">
            <FiMapPin />
            <span>District Match</span>
          </div>
          <div className="hero-mini-card hero-mini-card-export">
            <FiTrendingUp />
            <span>Export Signal</span>
          </div>
          <div className="hero-mini-card hero-mini-card-risk">
            <FiShield />
            <span>Risk Alert</span>
          </div>
        </div>
        <div className="landing-hero-shell">
          <div className="landing-hero-content">
            <span className="landing-badge">Built for Indian Farmers and Export Planners</span>
            <p className="landing-hero-eyebrow">From local farm inputs to higher-value crop decisions</p>
            <h1 className="landing-hero-title">
              Plan the Right Crop.
              <span className="landing-title-accent"> Grow with Export Confidence.</span>
            </h1>
            <p className="landing-hero-subcopy">
              Get a data-backed crop recommendation in under a minute using your region, soil, and weather
              conditions so your next season starts with clarity.
            </p>

            <div className="landing-hero-actions">
              <Link to="/recommend" className="landing-cta-primary">
                Get My Crop Recommendation <FiArrowRight className="cta-icon" aria-hidden="true" />
              </Link>
              <Link to="/special-crops" className="landing-cta-secondary">
                See Special Crop Opportunities
              </Link>
            </div>

            <div className="landing-hero-kpis">
              {quickKpis.map((item) => (
                <div key={item.label} className="landing-kpi-card">
                  <span className="landing-kpi-icon">{item.icon}</span>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>

            <div className="landing-hero-trustbar">
              {trustPoints.map((point) => (
                <span key={point.text}>
                  <i className="trust-icon">{point.icon}</i>
                  <i className="trust-dot"></i>
                  {point.text}
                </span>
              ))}
            </div>
          </div>

          <div className="landing-hero-panel landing-dashboard-panel">
            <div className="landing-panel-head">
              <span className="dot"></span>
              <strong>Instant Recommendation Preview</strong>
            </div>

            <div className="dashboard-top-row">
              <div className="dashboard-crop-info">
                <span className="dashboard-crop-chip">Recommended Crop</span>
                <h3>Rice</h3>
                <p>High export momentum for your district and season profile.</p>
              </div>

              <div className="dashboard-score-wrap" aria-label="Confidence score is 91 percent">
                <div className="dashboard-score-ring">
                  <strong>91</strong>
                </div>
                <span>Confidence</span>
              </div>
            </div>

            <div className="landing-panel-signals-grid">
              {panelSignals.map((item) => (
                <div key={item.label} className={`landing-signal-card ${item.tone}`}>
                  <span className="landing-signal-icon">{item.icon}</span>
                  <div>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-trend-box">
              <div className="dashboard-trend-head">
                <span>Export Demand Trend</span>
                <strong>+12%</strong>
              </div>
              <div className="dashboard-sparkline" aria-label="7-day export demand trend">
                {panelTrendBars.map((height, idx) => (
                  <span key={idx} style={{ height: `${height}%` }}></span>
                ))}
              </div>
            </div>

            <Link to="/recommend" className="dashboard-panel-cta">
              Open Full Recommendation <FiArrowRight className="cta-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-proof-strip landing-reveal" style={{ "--reveal-delay": "80ms" }}>
        {proofStats.map((item, idx) => (
          <div key={item.text} className="proof-item" style={{ "--reveal-delay": `${120 + idx * 70}ms` }}>
            <span className="proof-icon">{item.icon}</span>
            <strong>{item.value}</strong>
            <span>{item.text}</span>
          </div>
        ))}
      </section>

      <section className="landing-section landing-reveal" style={{ "--reveal-delay": "140ms" }}>
        <div className="landing-section-head">
          <p className="landing-section-label">Core Benefits</p>
          <h2>Everything You Need to Choose the Right Crop Fast</h2>
          <p>Practical recommendations that combine local fit, market relevance, and speed.</p>
        </div>
        <div className="landing-benefits-grid">
          {benefits.map((item, idx) => (
            <article key={idx} className="landing-benefit-card" style={{ "--reveal-delay": `${160 + idx * 70}ms` }}>
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-process landing-reveal" style={{ "--reveal-delay": "220ms" }}>
        <div className="landing-section-head">
          <p className="landing-section-label">Workflow</p>
          <h2>How It Works in 3 Quick Steps</h2>
          <p>A simple flow designed for real farming timelines, not complex dashboards.</p>
        </div>
        <div className="landing-process-grid">
          {flow.map((item, idx) => (
            <article key={idx} className="landing-process-card" style={{ "--reveal-delay": `${240 + idx * 70}ms` }}>
              <span className="process-step">{item.step}</span>
              <span className="process-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-reveal" style={{ "--reveal-delay": "300ms" }}>
        <div className="landing-section-head">
          <p className="landing-section-label">Market View</p>
          <h2>Clear Signals Before You Commit a Season</h2>
          <p>Go beyond prediction with decision support that helps reduce costly crop mismatch.</p>
        </div>
        <div className="landing-market-grid">
          {marketSignals.map((signal, idx) => (
            <article key={signal.title} className="landing-market-card" style={{ "--reveal-delay": `${320 + idx * 70}ms` }}>
              <div className="landing-market-head">
                <h3><span className="landing-market-icon">{signal.icon}</span>{signal.title}</h3>
                <span>{signal.value}</span>
              </div>
              <div className="landing-market-mini-metric">
                <strong>{signal.score}%</strong>
                <small>{signal.trend} vs last cycle</small>
              </div>
              <div className="landing-market-meter" aria-label={`${signal.title} score ${signal.score} percent`}>
                <i style={{ width: `${signal.score}%` }}></i>
              </div>
              <p>{signal.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-reveal" style={{ "--reveal-delay": "380ms" }}>
        <div className="landing-section-head">
          <p className="landing-section-label">Who It Helps</p>
          <h2>Designed for Real Roles Across the Agro Value Chain</h2>
          <p>Different users, one clear outcome: faster and stronger crop planning decisions.</p>
        </div>
        <div className="landing-usecase-grid">
          {useCases.map((item, idx) => (
            <article key={item.title} className="landing-usecase-card" style={{ "--reveal-delay": `${400 + idx * 70}ms` }}>
              <span className="landing-usecase-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-reveal" style={{ "--reveal-delay": "460ms" }}>
        <div className="landing-section-head">
          <p className="landing-section-label">Voices</p>
          <h2>What Users Say</h2>
          <p>Teams using the platform for seasonal planning and export-focused decisions.</p>
        </div>
        <div className="landing-testimonials-grid">
          {testimonials.map((item, idx) => (
            <article key={item.name} className="landing-testimonial-card" style={{ "--reveal-delay": `${480 + idx * 70}ms` }}>
              <div className="landing-testimonial-head">
                <span className="landing-avatar">{item.name.charAt(0)}</span>
                <span className="landing-stars" aria-label="Rated five stars">
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </span>
              </div>
              <span className="landing-quote-mark" aria-hidden="true">"</span>
              <p>{item.quote}</p>
              <span className="landing-testimonial-impact">{item.impact}</span>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-final-cta landing-reveal">
        <h2>Ready to Decide Your Next Crop with Confidence?</h2>
        <p>Run your recommendation now and start this season with a stronger plan.</p>
        <div className="landing-hero-actions">
          <Link to="/recommend" className="landing-cta-primary">Start Free Recommendation</Link>
          <Link to="/contact" className="landing-cta-secondary">Talk to the Team</Link>
        </div>
      </section>

      <div className="landing-mobile-cta" aria-label="Quick actions">
        <Link to="/recommend" className="landing-mobile-cta-primary">
          Start Recommendation
        </Link>
        <Link to="/contact" className="landing-mobile-cta-secondary">
          Contact Team
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;