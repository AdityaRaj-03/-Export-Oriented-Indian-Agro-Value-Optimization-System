function Result({ result }) {
  const exportScoreMap = { High: 90, Medium: 65, Low: 40 };
  const riskSafetyMap = { Low: 90, Medium: 65, High: 40 };
  const exportToneMap = { High: "positive", Medium: "balanced", Low: "caution" };
  const riskToneMap = { Low: "positive", Medium: "balanced", High: "caution" };

  const exportScore = result ? exportScoreMap[result.export] ?? 50 : 0;
  const riskSafetyScore = result ? riskSafetyMap[result.risk] ?? 50 : 0;
  const exportTone = result ? exportToneMap[result.export] ?? "balanced" : "balanced";
  const riskTone = result ? riskToneMap[result.risk] ?? "balanced" : "balanced";

  if (!result) {
    return (
      <div className="result crop-result-card result-empty">
        <h2>📊 Prediction Panel</h2>
        <p className="result-empty-text">
          Submit the form to see your recommended crop, export potential, and risk profile here.
        </p>
        <div className="result-empty-chips">
          <span>Crop Fit</span>
          <span>Export Score</span>
          <span>Risk Snapshot</span>
        </div>
      </div>
    );
  }

  return (
    <div className="result crop-result-card result-filled">
      <div className="result-head">
        <h2>✅ Recommendation Result</h2>
        <p>Based on your selected farm conditions</p>
      </div>

      <div className="result-hero">
        <span className="result-hero-label">Best Match Crop</span>
        <h3>{result.crop}</h3>
        <div className="result-hero-tags">
          <span className={`result-status ${exportTone}`}>Export: {result.export}</span>
          <span className={`result-status ${riskTone}`}>Risk: {result.risk}</span>
        </div>
      </div>

      <div className="result-score-grid">
        <div className="score-card export">
          <div className="score-label-row">
            <strong>Export Potential</strong>
            <span>{exportScore}%</span>
          </div>
          <div className="score-track">
            <div className="score-fill" style={{ "--score": `${exportScore}%` }}></div>
          </div>
          <p className="score-note">Indicates expected market demand and export viability.</p>
        </div>

        <div className="score-card risk">
          <div className="score-label-row">
            <strong>Risk Safety Index</strong>
            <span>{riskSafetyScore}%</span>
          </div>
          <div className="score-track">
            <div className="score-fill" style={{ "--score": `${riskSafetyScore}%` }}></div>
          </div>
          <p className="score-note">Higher score means more stable and lower operational risk.</p>
        </div>
      </div>

      <div className="result-row">
        <strong>🌾 Recommended Crop</strong>
        <span className="result-pill success">{result.crop}</span>
      </div>
      <div className="result-row">
        <strong>📈 Export Potential</strong>
        <span className="result-pill info">{result.export}</span>
      </div>
      <div className="result-row">
        <strong>⚠️ Risk Level</strong>
        <span className="result-pill warning">{result.risk}</span>
      </div>

      <div className="result-insights">
        <h4>Strategic Suggestions</h4>
        <ul>
          <li>Plan sowing around your selected season window to maximize output consistency.</li>
          <li>Track local mandi/export trends weekly to adjust harvest timing for better price realization.</li>
          <li>Use soil and weather monitoring to keep risk near or below the current level.</li>
        </ul>
      </div>
    </div>
  );
}

export default Result;
