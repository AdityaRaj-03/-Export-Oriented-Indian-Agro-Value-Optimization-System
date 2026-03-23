import { useState } from "react";

function CropForm({ onPredict, onReset, isPredicting }) {
  const [region, setRegion] = useState("");
  const [season, setSeason] = useState("");
  const [soilType, setSoilType] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (isPredicting) return;

    onPredict({
      region,
      season,
      soilType,
      rainfall,
      temperature
    });
  }

  function handleReset() {
    setRegion("");
    setSeason("");
    setSoilType("");
    setRainfall("");
    setTemperature("");

    if (onReset) onReset();
  }

  return (
    <form className={`crop-smart-form ${isPredicting ? "is-loading" : ""}`} onSubmit={handleSubmit}>
      <div className="crop-form-header">
        <h2>🌱 Crop Recommendation</h2>
        <p>Fill in your farm conditions to get a focused export-ready suggestion.</p>
        <div className="crop-form-badges">
          <span>AI Assisted</span>
          <span>Fast Result</span>
          <span>Export Focused</span>
        </div>
      </div>

        <div className="crop-input-section-title">Farm Inputs</div>

      <div className="crop-input-grid">
          <label className="crop-field-card field-wide">
            <div className="field-head">
              <span className="field-icon">📍</span>
              <div className="field-title-wrap">
                <span className="field-label">Region</span>
                <small>Choose your farming zone</small>
              </div>
            </div>
          <select value={region} onChange={(e) => setRegion(e.target.value)} required>
            <option value="">Select Region</option>
            <option>North</option>
            <option>Central</option>
            <option>West</option>
          </select>
        </label>

          <label className="crop-field-card field-wide">
            <div className="field-head">
              <span className="field-icon">🗓️</span>
              <div className="field-title-wrap">
                <span className="field-label">Season</span>
                <small>Select cultivation cycle</small>
              </div>
            </div>
          <select value={season} onChange={(e) => setSeason(e.target.value)} required>
            <option value="">Select Season</option>
            <option>Kharif</option>
            <option>Rabi</option>
            <option>Zaid</option>
          </select>
        </label>

          <label className="crop-field-card field-wide">
            <div className="field-head">
              <span className="field-icon">🧪</span>
              <div className="field-title-wrap">
                <span className="field-label">Soil Type</span>
                <small>Match crop with soil profile</small>
              </div>
            </div>
          <select value={soilType} onChange={(e) => setSoilType(e.target.value)} required>
            <option value="">Select Soil Type</option>
            <option>Sandy</option>
            <option>Clay</option>
            <option>Silt</option>
            <option>Loamy</option>
          </select>
        </label>

          <label className="crop-field-card">
            <div className="field-head">
              <span className="field-icon">🌧️</span>
              <div className="field-title-wrap">
                <span className="field-label">Rainfall (mm)</span>
                <small>Average seasonal rain</small>
              </div>
            </div>
          <input
            type="number"
            placeholder="e.g. 850"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            required
          />
        </label>

          <label className="crop-field-card">
            <div className="field-head">
              <span className="field-icon">🌡️</span>
              <div className="field-title-wrap">
                <span className="field-label">Temperature (°C)</span>
                <small>Typical day temperature</small>
              </div>
            </div>
          <input
            type="number"
            placeholder="e.g. 28"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
          />
        </label>
      </div>

        <div className="crop-form-actions">
          <p className="crop-form-note">Tip: Use realistic weather values for better recommendations.</p>
          <div className="crop-action-buttons">
            <button type="submit" className="crop-submit-btn" disabled={isPredicting}>
              {isPredicting ? "Analyzing Conditions..." : "🎯 Generate Prediction"}
            </button>
            <button type="button" className="crop-reset-btn" onClick={handleReset} disabled={isPredicting}>
              Reset Form
            </button>
          </div>
          <div className="crop-form-trust">
            <span>🔒 Data Safe</span>
            <span>⚡ Instant Analysis</span>
          </div>
        </div>
    </form>
  );
}

export default CropForm;
