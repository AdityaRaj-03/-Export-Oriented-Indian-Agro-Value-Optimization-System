import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

import { predictCrop } from "./data/dummyLogic";

function App() {
  const [result, setResult] = useState(null);

  function handlePredict(inputData) {
    const prediction = predictCrop(inputData);
    setResult(prediction);
  }

  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onPredict={handlePredict}
              result={result}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
