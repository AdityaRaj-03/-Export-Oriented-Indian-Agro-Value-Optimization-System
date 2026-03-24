import { useState } from "react";

function CropForm({ onPredict, onReset, isPredicting }) {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [rainfall, setRainfall] = useState("");

  const [stateName, setStateName] = useState("");
  const [season, setSeason] = useState("");
  const [areaOfLand, setAreaOfLand] = useState("");

  const [district, setDistrict] = useState("");
  const [market, setMarket] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (isPredicting) return;

    onPredict({
      nitrogen,
      phosphorus,
      potassium,
      rainfall,
      state: stateName,
      season,
      areaOfLand,
      district,
      market,
      arrivalDate
    });
  }

  function handleReset() {
    setNitrogen("");
    setPhosphorus("");
    setPotassium("");
    setRainfall("");

    setStateName("");
    setSeason("");
    setAreaOfLand("");

    setDistrict("");
    setMarket("");
    setArrivalDate("");

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

      <div className="crop-input-section-title section-soil">Soil / Climate</div>

      <div className="crop-input-grid">
        <label className="crop-field-card">
          <div className="field-head">
            <span className="field-icon">🧪</span>
            <div className="field-title-wrap">
              <span className="field-label">Nitrogen (N)</span>
              <small>Soil nutrient value</small>
            </div>
          </div>
          <input
            type="number"
            min="0"
            placeholder="e.g. 90"
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
            required
          />
        </label>

        <label className="crop-field-card">
          <div className="field-head">
            <span className="field-icon">🧪</span>
            <div className="field-title-wrap">
              <span className="field-label">Phosphorus (P)</span>
              <small>Soil nutrient value</small>
            </div>
          </div>
          <input
            type="number"
            min="0"
            placeholder="e.g. 40"
            value={phosphorus}
            onChange={(e) => setPhosphorus(e.target.value)}
            required
          />
        </label>

        <label className="crop-field-card">
          <div className="field-head">
            <span className="field-icon">🧪</span>
            <div className="field-title-wrap">
              <span className="field-label">Potassium (K)</span>
              <small>Soil nutrient value</small>
            </div>
          </div>
          <input
            type="number"
            min="0"
            placeholder="e.g. 45"
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
            required
          />
        </label>

        <label className="crop-field-card field-wide">
          <div className="field-head">
            <span className="field-icon">🌧️</span>
            <div className="field-title-wrap">
              <span className="field-label">Rainfall (mm)</span>
              <small>Average seasonal rain</small>
            </div>
          </div>
          <input
            type="number"
            min="0"
            placeholder="e.g. 850"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="crop-input-section-title section-farm">Farm Info</div>

      <div className="crop-input-grid">
        <label className="crop-field-card field-wide">
          <div className="field-head">
            <span className="field-icon">🗺️</span>
            <div className="field-title-wrap">
              <span className="field-label">State</span>
              <small>Select your state</small>
            </div>
          </div>
          <select value={stateName} onChange={(e) => setStateName(e.target.value)} required>
            <option value="">Select State</option>
            <option>Punjab</option>
            <option>Haryana</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
          </select>
        </label>

        <label className="crop-field-card">
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

        <label className="crop-field-card">
          <div className="field-head">
            <span className="field-icon">📐</span>
            <div className="field-title-wrap">
              <span className="field-label">Area of Land (acres)</span>
              <small>Total cultivable area</small>
            </div>
          </div>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 2.5"
            value={areaOfLand}
            onChange={(e) => setAreaOfLand(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="crop-input-section-title section-market">Market Info</div>

      <div className="crop-input-grid">
        <label className="crop-field-card">
          <div className="field-head">
            <span className="field-icon">🏙️</span>
            <div className="field-title-wrap">
              <span className="field-label">District</span>
              <small>District-level market zone</small>
            </div>
          </div>
          <input
            type="text"
            placeholder="e.g. Ludhiana"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
        </label>

        <label className="crop-field-card">
          <div className="field-head">
            <span className="field-icon">🏪</span>
            <div className="field-title-wrap">
              <span className="field-label">Market</span>
              <small>APMC / local market</small>
            </div>
          </div>
          <input
            type="text"
            placeholder="e.g. Khanna Mandi"
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            required
          />
        </label>

        <label className="crop-field-card field-wide">
          <div className="field-head">
            <span className="field-icon">📅</span>
            <div className="field-title-wrap">
              <span className="field-label">Arrival Date</span>
              <small>Expected produce arrival</small>
            </div>
          </div>
          <input
            type="date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="crop-form-actions">
        <p className="crop-form-note">Tip: Keep N/P/K and rainfall values realistic for better recommendations.</p>
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
