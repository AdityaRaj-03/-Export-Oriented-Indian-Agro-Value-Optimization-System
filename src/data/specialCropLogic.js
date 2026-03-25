const SPECIAL_CROPS = [
  {
    name: "Moringa",
    suitableRegions: ["Tamil Nadu", "Karnataka", "Maharashtra"],
    seasons: ["Kharif", "Zaid"],
    rainfallRange: [400, 1200],
    nutrientBand: [120, 240],
    harvestTime: "Short",
    processingFriendly: true,
    indiaPrice: 5200,
    exportPrice: 9100
  },
  {
    name: "Makhana",
    suitableRegions: ["Uttar Pradesh", "Bihar", "West Bengal"],
    seasons: ["Kharif"],
    rainfallRange: [900, 1800],
    nutrientBand: [110, 220],
    harvestTime: "Long",
    processingFriendly: true,
    indiaPrice: 7600,
    exportPrice: 13200
  },
  {
    name: "Psyllium Husk",
    suitableRegions: ["Rajasthan", "Gujarat", "Haryana"],
    seasons: ["Rabi"],
    rainfallRange: [250, 700],
    nutrientBand: [100, 210],
    harvestTime: "Medium",
    processingFriendly: true,
    indiaPrice: 9800,
    exportPrice: 16800
  },
  {
    name: "Saffron",
    suitableRegions: ["Jammu & Kashmir", "Himachal Pradesh"],
    seasons: ["Rabi"],
    rainfallRange: [600, 1100],
    nutrientBand: [130, 230],
    harvestTime: "Long",
    processingFriendly: false,
    indiaPrice: 122000,
    exportPrice: 198000
  },
  {
    name: "Exotic Mushrooms",
    suitableRegions: ["Punjab", "Haryana", "Karnataka"],
    seasons: ["Zaid", "Rabi"],
    rainfallRange: [500, 1400],
    nutrientBand: [140, 260],
    harvestTime: "Short",
    processingFriendly: true,
    indiaPrice: 14500,
    exportPrice: 23600
  },
  {
    name: "Millets",
    suitableRegions: ["Karnataka", "Maharashtra", "Rajasthan", "Tamil Nadu"],
    seasons: ["Kharif", "Rabi"],
    rainfallRange: [350, 900],
    nutrientBand: [90, 220],
    harvestTime: "Medium",
    processingFriendly: false,
    indiaPrice: 3600,
    exportPrice: 7300
  },
  {
    name: "Pomegranate",
    suitableRegions: ["Maharashtra", "Karnataka", "Gujarat"],
    seasons: ["Kharif", "Zaid"],
    rainfallRange: [450, 950],
    nutrientBand: [130, 250],
    harvestTime: "Medium",
    processingFriendly: true,
    indiaPrice: 9200,
    exportPrice: 14900
  }
];

function getPriorityThreshold(priority) {
  if (priority === "Very High") return 80;
  if (priority === "High") return 60;
  return 35;
}

function toProfitLevel(margin) {
  if (margin >= 90) return "High";
  if (margin >= 55) return "Medium";
  return "Low";
}

function scoreCrop(crop, input) {
  const nutrientScore = Number(input.nitrogen) + Number(input.phosphorus) + Number(input.potassium);
  const rainfall = Number(input.rainfall);

  let score = 0;

  if (crop.suitableRegions.includes(input.state)) score += 28;
  if (crop.seasons.includes(input.season)) score += 18;

  if (rainfall >= crop.rainfallRange[0] && rainfall <= crop.rainfallRange[1]) {
    score += 22;
  } else {
    const rainfallGap = Math.min(
      Math.abs(rainfall - crop.rainfallRange[0]),
      Math.abs(rainfall - crop.rainfallRange[1])
    );
    score += Math.max(0, 22 - rainfallGap / 30);
  }

  if (nutrientScore >= crop.nutrientBand[0] && nutrientScore <= crop.nutrientBand[1]) {
    score += 20;
  } else {
    const nutrientGap = Math.min(
      Math.abs(nutrientScore - crop.nutrientBand[0]),
      Math.abs(nutrientScore - crop.nutrientBand[1])
    );
    score += Math.max(0, 20 - nutrientGap / 8);
  }

  if (input.timeToHarvest === crop.harvestTime) score += 12;

  if (input.processingCapability === "Processed" && crop.processingFriendly) score += 10;
  if (input.processingCapability === "Raw" && !crop.processingFriendly) score += 5;

  return Math.round(score);
}

export function recommendSpecialCrops(input) {
  const priorityThreshold = getPriorityThreshold(input.profitPriority);

  const normalized = SPECIAL_CROPS.map((crop) => {
    const baseMargin = ((crop.exportPrice - crop.indiaPrice) / crop.indiaPrice) * 100;
    const processingBonus = input.processingCapability === "Processed" && crop.processingFriendly ? 8 : 0;
    const areaBonus = Math.min(10, Number(input.areaOfLand || 0) * 1.8);

    const estimatedProfitMargin = Math.round(baseMargin + processingBonus + areaBonus);
    const suitability = scoreCrop(crop, input);

    return {
      cropName: crop.name,
      suitableRegion: crop.suitableRegions.join(", "),
      indiaMarketPrice: Math.round(crop.indiaPrice),
      exportMarketPrice: Math.round(crop.exportPrice),
      estimatedProfitMargin,
      profitLevel: toProfitLevel(estimatedProfitMargin),
      harvestTime: crop.harvestTime,
      processingFriendly: crop.processingFriendly,
      suitabilityScore: suitability,
      totalScore: estimatedProfitMargin * 0.65 + suitability * 0.35
    };
  })
    .filter((crop) => crop.estimatedProfitMargin >= priorityThreshold)
    .filter((crop) => {
      if (input.timeToHarvest) return crop.harvestTime === input.timeToHarvest;
      return true;
    })
    .sort((a, b) => b.totalScore - a.totalScore);

  const recommendations = normalized.slice(0, 6);

  return {
    topRecommendations: recommendations.slice(0, 3),
    allRecommendations: recommendations,
    summary: {
      matchedCount: recommendations.length,
      priority: input.profitPriority,
      mode: input.processingCapability
    }
  };
}
