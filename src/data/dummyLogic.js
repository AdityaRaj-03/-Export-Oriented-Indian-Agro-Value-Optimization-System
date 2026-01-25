export function predictCrop(input) {
  if (input.region === "West" && input.season === "Kharif") {
    return {
      crop: "Sugarcane",
      export: "High",
      risk: "Medium"
    };
  }

  if (input.region === "Central" && input.season === "Rabi") {
    return {
      crop: "Rice",
      export: "High",
      risk: "Low"
    };
  }

  return {
    crop: "Wheat",
    export: "Medium",
    risk: "Medium"
  };
}
