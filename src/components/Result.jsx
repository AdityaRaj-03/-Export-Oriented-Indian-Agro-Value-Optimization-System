function Result({ result }) {
  if (!result) return null;

  return (
    <div className="result">
      <h2>✅ Recommendation Result</h2>

      <p>
        <strong>🌾 Recommended Crop:</strong>
        <span>{result.crop}</span>
      </p>
      <p>
        <strong>📈 Export Potential:</strong>
        <span>{result.export}</span>
      </p>
      <p>
        <strong>⚠️ Risk Level:</strong>
        <span>{result.risk}</span>
      </p>
    </div>
  );
}

export default Result;
