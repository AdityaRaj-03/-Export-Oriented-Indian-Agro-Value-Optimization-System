const CROP_PROFILES = [
  {
    name: "Rice",
    states: ["West Bengal", "Punjab", "Haryana", "Tamil Nadu", "Odisha", "Andhra Pradesh"],
    rainfallRange: [900, 1800],
    temperatureRange: [22, 34],
    pHRange: [5.2, 7.4],
    nitrogenRange: [70, 180],
    exportCountry: "UAE, Saudi Arabia",
    marketPrice: [2100, 2700],
    exportPrice: [2900, 3800],
    yieldBase: 4.2,
    riskProfile: "Low"
  },
  {
    name: "Sugarcane",
    states: ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu"],
    rainfallRange: [1200, 2200],
    temperatureRange: [20, 38],
    pHRange: [6.0, 8.0],
    nitrogenRange: [90, 220],
    exportCountry: "Indonesia, Bangladesh",
    marketPrice: [3200, 3900],
    exportPrice: [4700, 5900],
    yieldBase: 6.5,
    riskProfile: "Medium"
  },
  {
    name: "Wheat",
    states: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
    rainfallRange: [400, 900],
    temperatureRange: [10, 28],
    pHRange: [6.0, 7.8],
    nitrogenRange: [60, 160],
    exportCountry: "Nepal, Bangladesh",
    marketPrice: [2500, 3050],
    exportPrice: [3400, 4100],
    yieldBase: 3.8,
    riskProfile: "Low"
  },
  {
    name: "Maize",
    states: ["Karnataka", "Bihar", "Madhya Pradesh", "Rajasthan", "Andhra Pradesh"],
    rainfallRange: [500, 1200],
    temperatureRange: [18, 32],
    pHRange: [5.5, 7.5],
    nitrogenRange: [60, 150],
    exportCountry: "Vietnam, Malaysia",
    marketPrice: [2000, 2550],
    exportPrice: [3200, 4000],
    yieldBase: 4.0,
    riskProfile: "Low"
  },
  {
    name: "Millet",
    states: ["Karnataka", "Maharashtra", "Rajasthan", "Tamil Nadu", "Telangana", "Gujarat"],
    rainfallRange: [250, 850],
    temperatureRange: [24, 38],
    pHRange: [5.5, 8.2],
    nitrogenRange: [30, 120],
    exportCountry: "UAE, Germany",
    marketPrice: [1800, 2250],
    exportPrice: [3900, 4800],
    yieldBase: 2.6,
    riskProfile: "Low"
  },
  {
    name: "Cotton",
    states: ["Gujarat", "Maharashtra", "Telangana", "Punjab", "Haryana", "Rajasthan"],
    rainfallRange: [500, 1100],
    temperatureRange: [21, 35],
    pHRange: [6.0, 8.5],
    nitrogenRange: [50, 140],
    exportCountry: "Vietnam, China",
    marketPrice: [5200, 6400],
    exportPrice: [6400, 8200],
    yieldBase: 3.1,
    riskProfile: "Medium"
  },
  {
    name: "Groundnut",
    states: ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Karnataka", "Maharashtra"],
    rainfallRange: [450, 950],
    temperatureRange: [20, 32],
    pHRange: [6.0, 7.5],
    nitrogenRange: [40, 120],
    exportCountry: "Indonesia, Netherlands",
    marketPrice: [4300, 5600],
    exportPrice: [6200, 7900],
    yieldBase: 2.9,
    riskProfile: "Low"
  },
  {
    name: "Soybean",
    states: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Karnataka", "Telangana"],
    rainfallRange: [500, 1100],
    temperatureRange: [20, 32],
    pHRange: [6.0, 7.5],
    nitrogenRange: [40, 130],
    exportCountry: "China, Japan",
    marketPrice: [3700, 4900],
    exportPrice: [5600, 7100],
    yieldBase: 2.8,
    riskProfile: "Medium"
  },
  {
    name: "Pulses",
    states: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh", "Karnataka"],
    rainfallRange: [300, 800],
    temperatureRange: [15, 30],
    pHRange: [6.0, 8.2],
    nitrogenRange: [30, 100],
    exportCountry: "UAE, Sri Lanka",
    marketPrice: [5400, 6800],
    exportPrice: [7100, 9000],
    yieldBase: 2.4,
    riskProfile: "Low"
  },
  {
    name: "Chili",
    states: ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu"],
    rainfallRange: [400, 1000],
    temperatureRange: [20, 34],
    pHRange: [6.0, 7.8],
    nitrogenRange: [50, 140],
    exportCountry: "Thailand, UAE",
    marketPrice: [6200, 7900],
    exportPrice: [8600, 10800],
    yieldBase: 2.7,
    riskProfile: "Medium"
  }
];

function scoreBand(value, min, max, maxScore) {
  if (value >= min && value <= max) {
    const center = (min + max) / 2;
    const halfSpan = Math.max(1, (max - min) / 2);
    const distance = Math.abs(value - center);
    const tightness = Math.max(0, 1 - distance / halfSpan);
    return maxScore * (0.72 + tightness * 0.28);
  }

  const gap = value < min ? min - value : value - max;
  return Math.max(0, maxScore - gap / 3);
}

function rankCrops(input) {
  const nitrogen = Number(input.N ?? input.nitrogen ?? 0);
  const soilPh = Number(input.Soil_pH ?? input.soilPh ?? 7);
  const temperature = Number(input.Temperature ?? input.temperature ?? 25);
  const rainfall = Number(input.Rainfall ?? input.rainfall ?? 0);
  const state = input.state || "";
  const district = input.district || "";

  return CROP_PROFILES.map((crop) => {
    const stateBonus = crop.states.includes(state) ? 22 : 0;
    const districtBonus = district ? 4 : 0;
    const rainfallScore = scoreBand(rainfall, crop.rainfallRange[0], crop.rainfallRange[1], 24);
    const temperatureScore = scoreBand(temperature, crop.temperatureRange[0], crop.temperatureRange[1], 18);
    const pHScore = scoreBand(soilPh, crop.pHRange[0], crop.pHRange[1], 14);
    const nitrogenScore = scoreBand(nitrogen, crop.nitrogenRange[0], crop.nitrogenRange[1], 14);
    const neutralBonus = Math.max(0, 10 - Math.abs(soilPh - 6.6) * 2);

    const fitScore = Math.round(
      stateBonus +
      districtBonus +
      rainfallScore +
      temperatureScore +
      pHScore +
      nitrogenScore +
      neutralBonus
    );

    return {
      ...crop,
      fitScore
    };
  }).sort((a, b) => b.fitScore - a.fitScore);
}

export function predictCrop(input) {
  const nitrogen = Number(input.N ?? input.nitrogen ?? 0);
  const soilPh = Number(input.Soil_pH ?? input.soilPh ?? 7);
  const temperature = Number(input.Temperature ?? input.temperature ?? 25);
  const rainfall = Number(input.Rainfall ?? input.rainfall ?? 0);
  const state = input.state || "Unknown State";
  const district = input.district || "Unknown District";

  const rankedCrops = rankCrops({ ...input, state, district });
  const bestCrop = rankedCrops[0];
  const backupCrops = rankedCrops.slice(1, 4);

  const phBalance = Math.max(0, 1 - Math.abs(soilPh - 6.5) / 3);
  const climateScore = Math.min(100, (rainfall / 1400) * 50 + ((40 - Math.abs(temperature - 26)) / 40) * 50);
  const nutrientScore = Math.min(100, (nitrogen / 150) * 100);

  const cropYield = Math.max(
    1.2,
    Math.min(
      14,
      bestCrop.yieldBase +
        (bestCrop.fitScore / 100) * 3.2 +
        nutrientScore * 0.015 +
        phBalance * 1.1 +
        (Math.min(1200, rainfall) / 1200) * 1.2 +
        Math.random() * 0.5
    )
  );
  const adjustedYield = cropYield.toFixed(2);

  const exportMultiplier = 1 + bestCrop.fitScore / 130;
  const mktPrice = Math.round(bestCrop.marketPrice[0] + Math.random() * (bestCrop.marketPrice[1] - bestCrop.marketPrice[0]));
  const expPrice = Math.round(bestCrop.exportPrice[0] + Math.random() * (bestCrop.exportPrice[1] - bestCrop.exportPrice[0]));

  const locationBoost = state === "Tamil Nadu" || district === "Coimbatore" ? 5 : 0;

  const exportPotentialScore = Math.min(
    100,
    Math.max(
      0,
      nutrientScore * 0.3 +
        climateScore * 0.3 +
        phBalance * 18 +
        (mktPrice / 8000) * 10 +
        exportMultiplier * 10 +
        locationBoost
    )
  );

  const riskSafetyScore = Math.min(
    100,
    Math.max(
      0,
      78 - Math.abs(soilPh - 6.5) * 9 +
        Math.min(20, rainfall / 85) +
        Math.max(0, 18 - Math.abs(temperature - 27) * 2) +
        Math.min(16, nitrogen / 11)
    )
  );

  const totalProduction = parseFloat(adjustedYield);
  const localMarketRevenue = Math.round(totalProduction * 0.65 * mktPrice);
  const exportMarketRevenue = Math.round(totalProduction * 0.35 * expPrice);

  const localMarketLoss = Math.round(
    (bestCrop.riskProfile === "High" ? 38000 : bestCrop.riskProfile === "Medium" ? 28000 : 15000) +
    Math.random() * 4500
  );
  const exportMarketLoss = Math.round(
    (bestCrop.riskProfile === "High" ? 42000 : bestCrop.riskProfile === "Medium" ? 34000 : 20000) +
    Math.random() * 4500
  );

  const localProfit = localMarketRevenue - localMarketLoss;
  const exportProfit = exportMarketRevenue - exportMarketLoss;
  const betterOption = localProfit > exportProfit ? "Sell in Local Market" : "Export to International Market";

  return {
    crop: bestCrop.name,
    export: exportPotentialScore,
    risk: riskSafetyScore,
    yield: parseFloat(adjustedYield),
    marketPrice: mktPrice,
    exportPrice: expPrice,
    bestCountry: bestCrop.exportCountry,
    localMarketRevenue,
    exportMarketRevenue,
    localMarketLoss,
    exportMarketLoss,
    betterOption,
    localProfit,
    exportProfit,
    recommendedAlternatives: backupCrops.map((crop) => ({
      crop: crop.name,
      fitScore: crop.fitScore,
      exportCountry: crop.exportCountry,
      marketPrice: Math.round(crop.marketPrice[0] + (crop.marketPrice[1] - crop.marketPrice[0]) * 0.4),
      exportPrice: Math.round(crop.exportPrice[0] + (crop.exportPrice[1] - crop.exportPrice[0]) * 0.5),
      riskProfile: crop.riskProfile
    }))
  };
}
