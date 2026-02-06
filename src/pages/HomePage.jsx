// ...existing code...
import { Link } from "react-router-dom";
import "../style/Home.css";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>Grow Smarter, Export Better</h1>
            <p>
              Unlock export potential with crop recommendations tailored to your
              soil, climate, and market needs — designed for Indian agro producers.
            </p>
            <Link to="/recommend" className="hero-cta">Get Started — Predict Now</Link>
          </div>
          {/* decorative illustration removed */}
        </div>
      </section>

      <div className="content-grid">
        <aside className="features">
          <h2>Why use this tool?</h2>
          <div className="feature-list">
            <div className="feature">
              <strong>Data-driven</strong>
              <p>Recommendations combine soil, seasonality and export demand.</p>
            </div>
            <div className="feature">
              <strong>Optimized for export</strong>
              <p>Focus on high-value crops with proven export potential.</p>
            </div>
            <div className="feature">
              <strong>Simple & fast</strong>
              <p>Minimal inputs — instant guidance for farmers and agronomists.</p>
            </div>
          </div>
        </aside>
      </div>

      
      
      <Footer />
    </div>
  );
}

export default HomePage;
// ...existing code...