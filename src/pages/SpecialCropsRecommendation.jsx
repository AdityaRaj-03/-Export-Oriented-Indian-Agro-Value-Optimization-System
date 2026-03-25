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

  const averageSuitability = result?.allRecommendations?.length
    ? Math.round(
        result.allRecommendations.reduce((sum, item) => sum + item.suitabilityScore, 0) /
          result.allRecommendations.length
      )
    : 0;

  const bestCrop = result?.topRecommendations?.[0] ?? null;
  const secondCrop = result?.topRecommendations?.[1] ?? null;
  const isGeneratedTheme = isLoading || Boolean(result);

  const marginLead = bestCrop && secondCrop
    ? bestCrop.estimatedProfitMargin - secondCrop.estimatedProfitMargin
    : 0;

  const fitLead = bestCrop && secondCrop
    ? bestCrop.suitabilityScore - secondCrop.suitabilityScore
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
            <span className="special-badge">Special Intelligence Layer</span>
            <p className="special-hero-kicker">Export-Oriented Strategy</p>
            <h1>
              Special Crops
              <span className="special-hero-title-highlight"> for Higher Global Margins</span>
            </h1>
            <p className="special-hero-lead">
              This page is built for premium planning: it prioritizes crops that match your farm
              profile and can produce stronger export-side returns.
            </p>
            <div className="special-hero-cta-row">
              <a href="#special-form">Start Recommendation</a>
              <small>Use latest NPK and rainfall values for precise output</small>
            </div>
          </div>
          <aside className="special-hero-proof">
            <p className="proof-label">What makes this page special</p>
            <h3>Built for export-focused crop decisions, not generic recommendations.</h3>
            <div className="proof-stats">
              <div>
                <strong>Top 3</strong>
                <span>Action-ready shortlist</span>
              </div>
              <div>
                <strong>2 Signals</strong>
                <span>Farm fit + margin logic</span>
              </div>
              <div>
                <strong>Clear Why</strong>
                <span>Reason shown for #1 crop</span>
              </div>
            </div>
            <div className="proof-points">
              <span>Export premium focused ranking</span>
              <span>Suitability + profit scoring engine</span>
              <span>Transparent recommendation logic</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="special-content">
        <div className={`special-layout ${isGeneratedTheme ? "is-generated" : ""}`}>
          <form id="special-form" className={`special-form ${isLoading ? "is-loading" : ""}`} onSubmit={handleSubmit}>
            <div className="special-form-head">
              <span className="special-form-eyebrow">Export Strategy Input</span>
              <h2>Input Details</h2>
              <p>Fill the form to get clear export-focused crop recommendations.</p>
              <p className="special-form-tagline">Designed for farmers who want stronger margins, not generic suggestions.</p>
              <div className="special-form-progress">
                <span>Step 1 Soil and Climate</span>
                <span>Step 2 Farm Information</span>
                <span>Step 3 Preferences</span>
              </div>
              <div className="special-form-highlights">
                <span>Guided form</span>
                <span>Profit first</span>
                <span>Fast output</span>
              </div>
              <div className="special-quick-check">
                <span>Use latest soil test values</span>
                <span>Pick true harvest timeline</span>
                <span>Choose realistic processing mode</span>
              </div>
            </div>

            <div className="special-section special-section-soil">
              <div className="special-section-title">
                <span className="step-pill">Step 1</span>
                <span className="step-title">Soil & Climate</span>
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

            <div className="special-section special-section-farm">
              <div className="special-section-title">
                <span className="step-pill">Step 2</span>
                <span className="step-title">Farm Information</span>
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

            <div className="special-section special-section-preferences">
              <div className="special-section-title">
                <span className="step-pill">Step 3</span>
                <span className="step-title">Special Crop Preferences</span>
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
              <p className="special-form-note">Tip: Keep values realistic to get more accurate profit-based ranking.</p>
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Analyzing..." : "Generate Recommendations"}
              </button>
              <button type="button" className="secondary" onClick={handleReset} disabled={isLoading}>
                Reset
              </button>
              <div className="special-form-trust">
                <span>Data Safe</span>
                <span>Instant Analysis</span>
                <span>Export Focused</span>
              </div>
            </div>
          </form>

          <div className="special-results">
            <div className="special-results-head">
              <span className="results-status">Live Decision Board</span>
              <h3>Recommendation Results</h3>
              <p>Ranked by suitability and export profit potential.</p>
            </div>

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
                {bestCrop && (
                  <section className="special-output-hero">
                    <div className="special-output-hero-main">
                      <p className="hero-eyebrow">Best Opportunity Right Now</p>
                      <h4>{bestCrop.cropName}</h4>
                      <p>
                        Best combined score for your conditions with {bestCrop.estimatedProfitMargin}%
                        estimated margin and {bestCrop.suitabilityScore}/100 farm fit.
                      </p>
                    </div>
                    <div className="special-output-hero-metrics">
                      <span>India: Rs {bestCrop.indiaMarketPrice.toLocaleString()}</span>
                      <span>Export: Rs {bestCrop.exportMarketPrice.toLocaleString()}</span>
                      <span>Harvest: {bestCrop.harvestTime}</span>
                    </div>
                  </section>
                )}

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
                  <div className="special-kpi-card">
                    <strong>{averageSuitability}/100</strong>
                    <span>Avg Farm Fit Score</span>
                  </div>
                </div>

                {bestCrop && secondCrop && (
                  <section className="special-compare-strip">
                    <div>
                      <span>Top Match</span>
                      <strong>{bestCrop.cropName}</strong>
                    </div>
                    <div>
                      <span>Margin Lead vs #2</span>
                      <strong>{marginLead > 0 ? `+${marginLead}%` : `${marginLead}%`}</strong>
                    </div>
                    <div>
                      <span>Farm Fit Lead</span>
                      <strong>{fitLead > 0 ? `+${fitLead}` : fitLead} pts</strong>
                    </div>
                  </section>
                )}

                {result.topRecommendations.length === 0 && (
                  <div className="special-no-results">
                    <h4>No crops matched your current filters.</h4>
                    <p>Try lowering profit priority or choosing a different harvest duration.</p>
                  </div>
                )}

                <div className="special-top-head">
                  <h3 className="special-top-title">Top 3 Recommended Special Crops</h3>
                  <p>Shortlisted for export edge, farm fit, and your selected strategy.</p>
                </div>
                <div className="special-top-grid">
                  {result.topRecommendations.map((crop, idx) => (
                    <article key={crop.cropName} className="special-top-card">
                      <div className="rank">#{idx + 1}</div>
                      <h4>{crop.cropName}</h4>
                      <span className={`top-profit-level ${crop.profitLevel.toLowerCase()}`}>{crop.profitLevel} Profit</span>
                      <p>{crop.suitableRegion}</p>
                      <div className="special-price-row">
                        <span>India: Rs {crop.indiaMarketPrice.toLocaleString()}</span>
                        <span>Export: Rs {crop.exportMarketPrice.toLocaleString()}</span>
                      </div>
                      <div className="special-card-meta">
                        <span>Fit {crop.suitabilityScore}/100</span>
                        <span>{crop.harvestTime} harvest</span>
                        <span>{crop.processingFriendly ? "Processing-friendly" : "Raw focus"}</span>
                      </div>
                      <div className="margin">{crop.estimatedProfitMargin}% margin</div>
                    </article>
                  ))}
                </div>

                {bestCrop && (
                  <section className="special-why-card">
                    <h4>Why this ranking is strong</h4>
                    <ul>
                      <li>
                        {bestCrop.cropName} has the best total score from your selected season,
                        state, and harvest preference.
                      </li>
                      <li>
                        Export advantage is Rs{" "}
                        {(bestCrop.exportMarketPrice - bestCrop.indiaMarketPrice).toLocaleString()}
                        over domestic price.
                      </li>
                      <li>
                        Processing mode {result.summary.mode} is reflected in ranking and margin
                        calculation.
                      </li>
                    </ul>
                  </section>
                )}

                <div className="special-table-wrap">
                  <table className="special-table">
                    <thead>
                      <tr>
                        <th>Crop Name</th>
                        <th>Suitable Region</th>
                        <th>India Price (Rs)</th>
                        <th>Export Price (Rs)</th>
                        <th>Profit Margin (%)</th>
                        <th>Farm Fit (0-100)</th>
                        <th>Harvest</th>
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
                          <td>{crop.suitabilityScore}</td>
                          <td>{crop.harvestTime}</td>
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
