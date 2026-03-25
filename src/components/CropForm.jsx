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
    <form className={`crop-smart-form clean-form ${isPredicting ? "is-loading" : ""}`} onSubmit={handleSubmit}>
      <div className="crop-form-header">
        <h2>Crop Recommendation Form</h2>
        <p>Complete these three sections for a faster and more accurate recommendation.</p>
        <div className="crop-form-badges">
          <span>1. Soil & Climate</span>
          <span>2. Farm Details</span>
          <span>3. Market Window</span>
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
            <span className="simple-label">Phosphorus (P) <em>*</em></span>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="Example: 40"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
              required
            />
            <small className="simple-help">Soil phosphorus value</small>
          </label>

          <label className="simple-field">
            <span className="simple-label">Potassium (K) <em>*</em></span>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="Example: 45"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              required
            />
            <small className="simple-help">Soil potassium value</small>
          </label>

          <label className="simple-field field-wide">
            <span className="simple-label">Rainfall (mm) <em>*</em></span>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="Example: 850"
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
          <span>Farm Info</span>
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
            <small className="simple-help">Your farm location</small>
          </label>

          <label className="simple-field">
            <span className="simple-label">Season <em>*</em></span>
            <select value={season} onChange={(e) => setSeason(e.target.value)} required>
              <option value="">Select season</option>
              <option>Kharif</option>
              <option>Rabi</option>
              <option>Zaid</option>
            </select>
            <small className="simple-help">Crop cycle period</small>
          </label>

          <label className="simple-field">
            <span className="simple-label">Area of Land (acres) <em>*</em></span>
            <input
              type="number"
              min="0"
              step="0.01"
              inputMode="decimal"
              placeholder="Example: 2.5"
              value={areaOfLand}
              onChange={(e) => setAreaOfLand(e.target.value)}
              required
            />
            <small className="simple-help">Total cultivable area</small>
          </label>
        </div>
      </section>

      <section className="crop-form-section">
        <div className="crop-input-section-title section-market">
          <span className="section-step">Step 3</span>
          <span>Market Info</span>
        </div>
        <div className="crop-input-grid simple-grid">
          <label className="simple-field">
            <span className="simple-label">District <em>*</em></span>
            <input
              type="text"
              placeholder="Example: Ludhiana"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
            <small className="simple-help">District-level market zone</small>
          </label>

          <label className="simple-field">
            <span className="simple-label">Market <em>*</em></span>
            <input
              type="text"
              placeholder="Example: Khanna Mandi"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              required
            />
            <small className="simple-help">APMC / local market name</small>
          </label>

          <label className="simple-field field-wide">
            <span className="simple-label">Arrival Date <em>*</em></span>
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              required
            />
            <small className="simple-help">Expected produce arrival date</small>
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
