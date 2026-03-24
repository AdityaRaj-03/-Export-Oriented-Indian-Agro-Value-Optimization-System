export function predictCrop(input) {
  const nitrogen = Number(input.nitrogen);
  const phosphorus = Number(input.phosphorus);
  const potassium = Number(input.potassium);
  const rainfall = Number(input.rainfall);
  const areaOfLand = Number(input.areaOfLand);

  const nutrientScore = nitrogen + phosphorus + potassium;

  if (
    input.season === "Kharif" &&
    rainfall >= 900 &&
    nutrientScore >= 180 &&
    areaOfLand >= 1
  ) {
    return {
      crop: "Sugarcane",
      export: "High",
      risk: "Medium"
    };
  }

  if (
    input.season === "Rabi" &&
    rainfall >= 600 && rainfall < 900 &&
    nutrientScore >= 130
  ) {
    return {
      crop: "Rice",
      export: "High",
      risk: "Low"
    };
  }

  if (
    input.season === "Zaid" ||
    rainfall < 600 ||
    nutrientScore < 130
  ) {
    return {
      crop: "Wheat",
      export: "Medium",
      risk: "Medium"
    };
  }

  return {
    crop: "Wheat",
    export: "Medium",
    risk: "Medium"
  };
}
