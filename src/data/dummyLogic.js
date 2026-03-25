export function predictCrop(input) {
  const nitrogen = Number(input.nitrogen);
  const phosphorus = Number(input.phosphorus);
  const potassium = Number(input.potassium);
  const rainfall = Number(input.rainfall);
  const areaOfLand = Number(input.areaOfLand);
  const season = input.season;
  const district = input.district || "Unknown Region";

  const nutrientScore = nitrogen + phosphorus + potassium;
  
  // Base yield calculation (tons per acre)
  let cropYield = 2.5 + (nutrientScore / 100) * 0.8 + (rainfall / 1000) * 2 + Math.random() * 1.5;
  cropYield = Math.max(1.5, Math.min(15, cropYield)); // Clamp between 1.5 and 15
  const adjustedYield = (cropYield * areaOfLand).toFixed(2);

  // Crop selection and pricing
  let crop, exportScore, riskScore, exportCountry, mktPrice, expPrice;

  if (
    season === "Kharif" &&
    rainfall >= 900 &&
    nutrientScore >= 180 &&
    areaOfLand >= 1
  ) {
    crop = "Sugarcane";
    exportScore = "High";
    riskScore = "Medium";
    exportCountry = "Brazil, India";
    mktPrice = 3200 + Math.random() * 800;
    expPrice = 4800 + Math.random() * 1200;
  } else if (
    season === "Rabi" &&
    rainfall >= 600 && rainfall < 900 &&
    nutrientScore >= 130
  ) {
    crop = "Rice";
    exportScore = "High";
    riskScore = "Low";
    exportCountry = "UAE, Saudi Arabia";
    mktPrice = 800 + Math.random() * 400;
    expPrice = 1200 + Math.random() * 600;
  } else if (
    season === "Kharif" &&
    rainfall < 600 &&
    nutrientScore < 130
  ) {
    crop = "Millet";
    exportScore = "Medium";
    riskScore = "Low";
    exportCountry = "UAE, Germany";
    mktPrice = 850 + Math.random() * 350;
    expPrice = 4500 + Math.random() * 1000;
  } else if (season === "Zaid") {
    crop = "Cotton";
    exportScore = "High";
    riskScore = "Medium";
    exportCountry = "Vietnam, China";
    mktPrice = 5500 + Math.random() * 1500;
    expPrice = 6800 + Math.random() * 1800;
  } else {
    crop = "Wheat";
    exportScore = "Medium";
    riskScore = "Medium";
    exportCountry = "Bangladesh, Nepal";
    mktPrice = 2500 + Math.random() * 700;
    expPrice = 3500 + Math.random() * 900;
  }

  mktPrice = Math.round(mktPrice);
  expPrice = Math.round(expPrice);

  // Calculate actual export potential score (0-100) based on inputs
  const exportPotentialScore = Math.min(100, Math.max(0, 
    (nutrientScore / 300) * 35 +          // 35 points from nutrient quality
    (rainfall / 1200) * 25 +              // 25 points from rainfall
    (areaOfLand / 2) * 20 +              // 20 points from land area
    (mktPrice / 8000) * 20                // 20 points from market demand
  ));

  // Calculate risk safety score (0-100) based on inputs - inverse of loss risk
  const riskSafetyScore = Math.min(100, Math.max(0,
    85 - (Math.abs(nutrientScore - 200) / 300) * 30 +  // Penalize imbalanced nutrients
    Math.min(30, (rainfall / 1000) * 20) +             // More rainfall = safer
    (areaOfLand > 1 ? 15 : 5)                          // Larger farms are safer
  ));

  // Revenue calculations
  const totalProduction = parseFloat(adjustedYield);
  const localMarketRevenue = Math.round(totalProduction * 0.7 * mktPrice);
  const exportMarketRevenue = Math.round(totalProduction * 0.3 * expPrice);
  
  // Loss calculations (based on crop type and risk)
  const localMarketLoss = Math.round(
    (riskScore === "High" ? 35000 : riskScore === "Medium" ? 28000 : 15000) +
    Math.random() * 5000
  );
  const exportMarketLoss = Math.round(
    (riskScore === "High" ? 40000 : riskScore === "Medium" ? 35000 : 20000) +
    Math.random() * 5000
  );

  // Determine better option
  const localProfit = localMarketRevenue - localMarketLoss;
  const exportProfit = exportMarketRevenue - exportMarketLoss;
  const betterOption = localProfit > exportProfit ? "Sell in Local Market" : "Export to International Market";

  return {
    crop,
    export: exportPotentialScore,
    risk: riskSafetyScore,
    yield: parseFloat(adjustedYield),
    marketPrice: mktPrice,
    exportPrice: expPrice,
    bestCountry: exportCountry,
    localMarketRevenue,
    exportMarketRevenue,
    localMarketLoss,
    exportMarketLoss,
    betterOption,
    localProfit,
    exportProfit
  };
}
