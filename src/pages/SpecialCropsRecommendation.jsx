import { useState } from "react";
import "../style/Home.css";
import { recommendSpecialCrops } from "../data/specialCropLogic";

const initialForm = {
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  rainfall: "",
  state: "",
  season: "",
  areaOfLand: "",
  profitPriority: "High",
  processingCapability: "Raw",
  timeToHarvest: "Medium"
};

function SpecialCropsRecommendation() {
  const [formData, setFormData] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const averageMargin = result?.allRecommendations?.length
    ? Math.round(
        result.allRecommendations.reduce((sum, item) => sum + item.estimatedProfitMargin, 0) /
          result.allRecommendations.length
      )
    : 0;

  const bestExportGap = result?.allRecommendations?.length
    ? Math.max(
        ...result.allRecommendations.map((item) => item.exportMarketPrice - item.indiaMarketPrice)
      )
    : 0;

  function onChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));
    const data = recommendSpecialCrops(formData);
    setResult(data);
    setIsLoading(false);
  }

  function handleReset() {
    setFormData(initialForm);
    setResult(null);
  }

  return (
    <div className="page special-page">
      <section className="special-hero premium-hero-base">
        <div className="hero-grid-pattern"></div>
        <div className="special-hero-inner">
          <div className="special-hero-copy">
            <span className="special-badge">Profit-first crop planning</span>
            <h1>Special Crops Recommendation</h1>
            <p>
              Find export-oriented, high-value crops that fit your farm conditions and maximize
              income potential.
            </p>
          </div>
          <div className="special-hero-metrics">
            <div>
              <strong>Top 3</strong>
              <span>Priority recommendations</span>
            </div>
            <div>
              <strong>Export vs India</strong>
              <span>Profit margin comparison</span>
            </div>
            <div>
              <strong>Rule-based</strong>
              <span>Fast and practical output</span>
            </div>
          </div>
        </div>
      </section>

      <section className="special-content">
        <div className="special-layout">
          <form className="special-form" onSubmit={handleSubmit}>
            <div className="special-form-head">
              <h2>Input Details</h2>
              <p>Complete all steps to generate export-oriented special crop suggestions.</p>
              <div className="special-form-progress">
                <span>01 Soil</span>
                <span>02 Farm</span>
                <span>03 Preferences</span>
              </div>
              <div className="special-how-it-works">
                <h4>How this works</h4>
                <ul>
                  <li>We first check crop suitability using soil nutrients, rainfall, state, and season.</li>
                  <li>Then we compare India vs export price to estimate profit margin.</li>
                  <li>Your preferences (profit, processing, harvest time) are used to rank results.</li>
                </ul>
              </div>
            </div>

            <div className="special-section">
              <div className="special-section-title">
                <span className="step-pill">Step 1</span> Soil & Climate
              </div>
              <div className="special-grid">
                <label className="special-field">
                  <span className="special-label">Nitrogen (N)</span>
                  <input
                    name="nitrogen"
                    type="number"
                    min="0"
                    placeholder="Example: 90"
                    value={formData.nitrogen}
                    onChange={onChange}
                    required
                  />
                  <small>Primary growth nutrient (typical range: 40 to 140)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Phosphorus (P)</span>
                  <input
                    name="phosphorus"
                    type="number"
                    min="0"
                    placeholder="Example: 45"
                    value={formData.phosphorus}
                    onChange={onChange}
                    required
                  />
                  <small>Root development support (typical range: 20 to 80)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Potassium (K)</span>
                  <input
                    name="potassium"
                    type="number"
                    min="0"
                    placeholder="Example: 50"
                    value={formData.potassium}
                    onChange={onChange}
                    required
                  />
                  <small>Overall crop resilience (typical range: 20 to 90)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Rainfall (mm)</span>
                  <input
                    name="rainfall"
                    type="number"
                    min="0"
                    placeholder="Example: 850"
                    value={formData.rainfall}
                    onChange={onChange}
                    required
                  />
                  <small>Average seasonal rainfall (example: 600 to 1200 mm)</small>
                </label>
              </div>
            </div>

            <div className="special-section">
              <div className="special-section-title">
                <span className="step-pill">Step 2</span> Farm Information
              </div>
              <div className="special-grid">
                <label className="special-field">
                  <span className="special-label">State</span>
                  <select name="state" value={formData.state} onChange={onChange} required>
                    <option value="">Select state</option>
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>Uttar Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>Jammu & Kashmir</option>
                    <option>Himachal Pradesh</option>
                  </select>
                  <small>Primary cultivation location (example: Maharashtra)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Season</span>
                  <select name="season" value={formData.season} onChange={onChange} required>
                    <option value="">Select season</option>
                    <option>Kharif</option>
                    <option>Rabi</option>
                    <option>Zaid</option>
                  </select>
                  <small>Expected planting cycle (example: Kharif)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Area of Land (acres)</span>
                  <input
                    name="areaOfLand"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Example: 2.5"
                    value={formData.areaOfLand}
                    onChange={onChange}
                    required
                  />
                  <small>Total farm area available (example: 1 to 5 acres)</small>
                </label>
              </div>
            </div>

            <div className="special-section">
              <div className="special-section-title">
                <span className="step-pill">Step 3</span> Special Crop Preferences
              </div>
              <div className="special-grid">
                <label className="special-field">
                  <span className="special-label">Profit Priority</span>
                  <select name="profitPriority" value={formData.profitPriority} onChange={onChange}>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Very High</option>
                  </select>
                  <small>Filters by profit margin threshold (start with High)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Processing Capability</span>
                  <select name="processingCapability" value={formData.processingCapability} onChange={onChange}>
                    <option>Raw</option>
                    <option>Processed</option>
                  </select>
                  <small>Prioritize raw vs processed crops (choose Processed if available)</small>
                </label>
                <label className="special-field">
                  <span className="special-label">Time to Harvest</span>
                  <select name="timeToHarvest" value={formData.timeToHarvest} onChange={onChange}>
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Long</option>
                  </select>
                  <small>Crop maturity timeline preference (example: Medium)</small>
                </label>
              </div>
            </div>

            <div className="special-actions">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Analyzing..." : "Get Special Crop Recommendations"}
              </button>
              <button type="button" className="secondary" onClick={handleReset} disabled={isLoading}>
                Reset
              </button>
            </div>
          </form>

          <div className="special-results">
            {!result && (
              <div className="special-empty">
                <h3>Recommendation Preview</h3>
                <p>
                  Submit your inputs to view top 3 special crops with export-price advantage and
                  expected profit margin.
                </p>
              </div>
            )}

            {result && (
              <>
                <div className="special-summary">
                  <span>Matched crops: {result.summary.matchedCount}</span>
                  <span>Priority: {result.summary.priority}</span>
                  <span>Mode: {result.summary.mode}</span>
                </div>

                <div className="special-kpi-grid">
                  <div className="special-kpi-card">
                    <strong>{averageMargin}%</strong>
                    <span>Average Margin</span>
                  </div>
                  <div className="special-kpi-card">
                    <strong>Rs {bestExportGap.toLocaleString()}</strong>
                    <span>Top Export Gap</span>
                  </div>
                  <div className="special-kpi-card">
                    <strong>{result.topRecommendations[0]?.cropName ?? "-"}</strong>
                    <span>Best Ranked Crop</span>
                  </div>
                </div>

                {result.topRecommendations.length === 0 && (
                  <div className="special-no-results">
                    <h4>No crops matched your current filters.</h4>
                    <p>Try lowering profit priority or choosing a different harvest duration.</p>
                  </div>
                )}

                <h3 className="special-top-title">Top 3 Recommended Special Crops</h3>
                <div className="special-top-grid">
                  {result.topRecommendations.map((crop, idx) => (
                    <article key={crop.cropName} className="special-top-card">
                      <div className="rank">#{idx + 1}</div>
                      <h4>{crop.cropName}</h4>
                      <p>{crop.suitableRegion}</p>
                      <div className="special-price-row">
                        <span>India: Rs {crop.indiaMarketPrice.toLocaleString()}</span>
                        <span>Export: Rs {crop.exportMarketPrice.toLocaleString()}</span>
                      </div>
                      <div className="margin">{crop.estimatedProfitMargin}% margin</div>
                    </article>
                  ))}
                </div>

                <div className="special-output-guide">
                  <h4>How to read this output</h4>
                  <div className="special-output-guide-grid">
                    <div>
                      <strong>Estimated Profit Margin</strong>
                      <p>Percentage gain from export price compared to India market price.</p>
                    </div>
                    <div>
                      <strong>Profit Level</strong>
                      <p>High means stronger export advantage for your selected inputs.</p>
                    </div>
                    <div>
                      <strong>Top 3 Cards</strong>
                      <p>Best ranked options after applying suitability and preference filters.</p>
                    </div>
                  </div>
                </div>

                <div className="special-table-wrap">
                  <table className="special-table">
                    <thead>
                      <tr>
                        <th>Crop Name</th>
                        <th>Suitable Region</th>
                        <th>India Price (Rs)</th>
                        <th>Export Price (Rs)</th>
                        <th>Profit Margin (%)</th>
                        <th>Profit Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.allRecommendations.map((crop) => (
                        <tr key={crop.cropName}>
                          <td>{crop.cropName}</td>
                          <td>{crop.suitableRegion}</td>
                          <td>Rs {crop.indiaMarketPrice.toLocaleString()}</td>
                          <td>Rs {crop.exportMarketPrice.toLocaleString()}</td>
                          <td>{crop.estimatedProfitMargin}%</td>
                          <td>
                            <span className={`profit-tag ${crop.profitLevel.toLowerCase()}`}>
                              {crop.profitLevel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialCropsRecommendation;
