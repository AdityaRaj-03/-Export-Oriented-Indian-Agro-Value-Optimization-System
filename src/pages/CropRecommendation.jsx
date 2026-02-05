import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import CropForm from "../components/CropForm";
import Result from "../components/Result";
import { predictCrop } from "../data/dummyLogic";

function CropRecommendation() {
  const [result, setResult] = useState(null);

  function handlePredict(formData) {
    const prediction = predictCrop(formData);
    setResult(prediction);
  }

  const features = [
    { icon: "🎯", title: "Accurate", desc: "Data-driven predictions" },
    { icon: "⚡", title: "Fast", desc: "Results in seconds" },
    { icon: "🌍", title: "Export-focused", desc: "Market-ready crops" }
  ];

  return (
    <div className="page crop-page">
      {/* Hero Section */}
      <div className="crop-hero premium-hero-base">
        {/* Elegant Landscape */}
        <div className="landscape-scene">
          <div className="horizon-glow"></div>
          <div className="field-layer layer-1"></div>
          <div className="field-layer layer-2"></div>
          <div className="field-layer layer-3"></div>
          <div className="field-layer layer-4"></div>
          <div className="field-texture"></div>
        </div>
        
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
        
        <div className="crop-hero-bg">
          <div className="crop-circle circle-1"></div>
          <div className="crop-circle circle-2"></div>
        </div>
        
        <div className="crop-hero-main">
          <div className="crop-hero-content">
            <span className="crop-badge">
              <span className="badge-dot"></span>
              AI-Powered
            </span>
            <h1>Crop <span className="highlight">Recommendation</span></h1>
            <p>Get personalized crop suggestions based on your soil, climate, and market demand for maximum export potential.</p>
            
            <div className="crop-features">
              {features.map((f, i) => (
                <div key={i} className="crop-feature">
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Crop Visual */}
          <div className="crop-hero-visual">
            <div className="crop-animation-container">
              <div className="soil-layer"></div>
              <div className="plant-grow">
                <div className="stem"></div>
                <div className="leaf leaf-left"></div>
                <div className="leaf leaf-right"></div>
                <div className="flower"></div>
              </div>
              <div className="sun-icon">☀️</div>
              <div className="water-drops">
                <span className="drop d1">💧</span>
                <span className="drop d2">💧</span>
                <span className="drop d3">💧</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="crop-content">
        <div className="crop-form-wrapper">
          <CropForm onPredict={handlePredict} />
        </div>

        <Result result={result} />

        {/* Help Link */}
        <div className="crop-help">
          <p>Need help filling the form?</p>
          <Link to="/howto" className="help-link">
            <span>📖</span> View How to Use Guide
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CropRecommendation;