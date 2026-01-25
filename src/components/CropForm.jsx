import { useState } from "react";

function CropForm({ onPredict }) {
  const [region, setRegion] = useState("");
  const [season, setSeason] = useState("");
  const [soilType, setSoilType] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onPredict({
      region,
      season,
      soilType,
      rainfall,
      temperature
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>🌱 Crop Recommendation</h2>

      <select value={region} onChange={(e) => setRegion(e.target.value)} required>
        <option value="">Select Region</option>
        <option>North</option>
        <option>Central</option>
        <option>West</option>
      </select>

      <select value={season} onChange={(e) => setSeason(e.target.value)} required>
        <option value="">Select Season</option>
        <option>Kharif</option>
        <option>Rabi</option>
        <option>Zaid</option>
      </select>

      <select value={soilType} onChange={(e) => setSoilType(e.target.value)} required>
        <option value="">Select Soil Type</option>
        <option>Sandy</option>
        <option>Clay</option>
        <option>Silt</option>
        <option>Loamy</option>
      </select>

      <input
        type="number"
        placeholder="Rainfall (mm)"
        value={rainfall}
        onChange={(e) => setRainfall(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Temperature (°C)"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        required
      />

      <button type="submit">🎯 Predict Crop</button>
    </form>
  );
}

export default CropForm;
