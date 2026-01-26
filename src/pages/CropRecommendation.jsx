import { useState } from "react";
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

  return (
    <div className="page">
      <div className="content-grid">
        <div id="crop-form">
          <CropForm onPredict={handlePredict} />
        </div>
      </div>

      <Result result={result} />
    </div>
  );
}

export default CropRecommendation;