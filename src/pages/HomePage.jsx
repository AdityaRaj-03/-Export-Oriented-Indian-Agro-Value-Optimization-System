import { useState } from "react";
import CropForm from "../components/CropForm";
import Result from "../components/Result";
import Footer from "../components/Footer";
import "../style/Home.css";

function HomePage() {
  const [result, setResult] = useState(null);

  function handlePredict(formData) {
    // Dummy logic for prediction
    const recommendations = {
      "North-Kharif-Loamy": { crop: "Rice", export: "High", risk: "Low" },
      "North-Rabi-Clay": { crop: "Wheat", export: "Very High", risk: "Low" },
      "West-Kharif-Sandy": { crop: "Cotton", export: "High", risk: "Medium" },
      "Central-Rabi-Loamy": { crop: "Chickpea", export: "Medium", risk: "Low" },
    };

    const key = `${formData.region}-${formData.season}-${formData.soilType}`;
    const prediction = recommendations[key] || {
      crop: "Mixed Vegetables",
      export: "Medium",
      risk: "Medium"
    };

    setResult(prediction);
  }

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
            <a href="#crop-form" className="hero-cta">Get Started — Predict Now</a>
          </div>
          <div className="hero-art" aria-hidden>
            {/* decorative illustration placeholder */}
            <svg width="240" height="160" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="240" height="160" rx="12" fill="#eef2ff" />
              <circle cx="60" cy="60" r="28" fill="#bbf7d0" />
              <rect x="120" y="30" width="90" height="70" rx="8" fill="#bfdbfe" />
            </svg>
          </div>
        </div>
      </section>

      <div className="content-grid">
        <div id="crop-form">
          <CropForm onPredict={handlePredict} />
        </div>

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

      <Result result={result} />

      <Footer />
    </div>
  );
}

export default HomePage;
