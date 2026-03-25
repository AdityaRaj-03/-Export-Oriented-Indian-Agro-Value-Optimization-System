import { useState } from "react";

function CropForm({ onPredict, onReset, isPredicting }) {
  const [nitrogen, setNitrogen] = useState("");
  const [soilPh, setSoilPh] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");

  const [stateName, setStateName] = useState("");
  const [district, setDistrict] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (isPredicting) return;

    onPredict({
      N: nitrogen,
      Soil_pH: soilPh,
      Temperature: temperature,
      Rainfall: rainfall,
      state: stateName,
      district
    });
  }

  function handleReset() {
    setNitrogen("");
    setSoilPh("");
    setTemperature("");
    setRainfall("");

    setStateName("");
    setDistrict("");

    if (onReset) onReset();
  }

  return (
    <form className={`crop-smart-form clean-form ${isPredicting ? "is-loading" : ""}`} onSubmit={handleSubmit}>
      <div className="crop-form-header">
        <h2>Crop Recommendation Form</h2>
        <p>Enter only the required soil, weather, and location values.</p>
        <div className="crop-form-badges">
          <span>1. Soil & Climate</span>
          <span>2. Location</span>
        </div>
      </div>

      <section className="crop-form-section">
        <div className="crop-input-section-title section-soil">
          <span className="section-step">Step 1</span>
          <span>Soil / Climate</span>
        </div>
        <div className="crop-input-grid simple-grid">
          <label className="simple-field">
            <span className="simple-label">Nitrogen (N) <em>*</em></span>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="Example: 90"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              required
            />
            <small className="simple-help">Soil nitrogen value</small>
          </label>

          <label className="simple-field">
            <span className="simple-label">Soil pH <em>*</em></span>
            <input
              type="number"
              min="0"
              max="14"
              step="0.1"
              inputMode="decimal"
              placeholder="Example: 6.5"
              value={soilPh}
              onChange={(e) => setSoilPh(e.target.value)}
              required
            />
            <small className="simple-help">pH level of your soil</small>
          </label>

          <label className="simple-field">
            <span className="simple-label">Temperature (°C) <em>*</em></span>
            <input
              type="number"
              min="-10"
              max="60"
              inputMode="numeric"
              placeholder="Example: 25"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              required
            />
            <small className="simple-help">Current average temperature</small>
          </label>

          <label className="simple-field field-wide">
            <span className="simple-label">Rainfall (mm) <em>*</em></span>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="Example: 1000"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
              required
            />
            <small className="simple-help">Average seasonal rainfall in your area</small>
          </label>
        </div>
      </section>

      <section className="crop-form-section">
        <div className="crop-input-section-title section-farm">
          <span className="section-step">Step 2</span>
          <span>Location</span>
        </div>
        <div className="crop-input-grid simple-grid">
          <label className="simple-field field-wide">
            <span className="simple-label">State <em>*</em></span>
            <select value={stateName} onChange={(e) => setStateName(e.target.value)} required>
              <option value="">Select your state</option>
              <option>Punjab</option>
              <option>Haryana</option>
              <option>Uttar Pradesh</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
            </select>
            <small className="simple-help">State where your farm is located</small>
          </label>

          <label className="simple-field field-wide">
            <span className="simple-label">District <em>*</em></span>
            <input
              type="text"
              placeholder="Example: Coimbatore"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
            <small className="simple-help">District-level location</small>
          </label>
        </div>
      </section>

      <div className="crop-form-actions">
        <p className="crop-form-note">Tip: Fill all required fields marked with * for better recommendations.</p>
        <div className="crop-action-buttons">
          <button type="submit" className="crop-submit-btn" disabled={isPredicting}>
            {isPredicting ? "Analyzing Conditions..." : "Generate Recommendation"}
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
