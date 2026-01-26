function FAQ() {
  const faqs = [
    {
      q: "What is the Export-Oriented Indian Agro Value Optimization System?",
      a: "This system is a web-based decision support tool that helps farmers select the most suitable and profitable crops for export based on soil conditions, climate factors, region, and season using data analytics and machine learning techniques."
    },
    {
      q: "Who can use this system?",
      a: "The system is primarily designed for farmers, agricultural planners, and stakeholders interested in export-oriented crop planning. It can also be used by researchers and students for academic and learning purposes."
    },
    {
      q: "What kind of inputs does the system require?",
      a: "The system requires basic information such as region, season, soil type, temperature, rainfall, irrigation type, and previous crop. These inputs are easy to understand and commonly known by farmers."
    },
    {
      q: "How does the system recommend crops?",
      a: "The system analyzes the provided inputs and compares them with historical agricultural, climate, and export-related data. Based on learned patterns, it predicts the most suitable crop for cultivation with better export potential."
    },
    {
      q: "Does the system provide real-time market prices?",
      a: "No. The current version uses historical export and agricultural data for analysis. Real-time market price integration can be added in future versions using live APIs."
    },
    {
      q: "How accurate are the crop recommendations?",
      a: "The accuracy depends on the quality and quantity of historical data used for training the model. The system provides data-driven recommendations, but actual results may vary due to unpredictable factors such as weather changes and market fluctuations."
    },
    {
      q: "Is machine learning really necessary for this project?",
      a: "Yes. Machine learning helps identify complex relationships between soil, climate, and market data that are difficult to analyze using traditional methods. It improves prediction quality as more data becomes available."
    },
    {
      q: "What machine learning models are used?",
      a: "The system uses machine learning models such as Random Forest and XGBoost for crop suitability and profit prediction due to their effectiveness in handling agricultural datasets."
    },
    {
      q: "Can this system replace agricultural experts?",
      a: "No. This system is intended to support decision-making and should be used alongside expert advice. It acts as a guidance tool rather than a replacement for professional agricultural consultation."
    },
    {
      q: "What are the limitations of this system?",
      a: "The system does not currently use real-time data, does not account for sudden climate events, and is limited to selected crops and regions. These limitations can be addressed in future enhancements."
    },
    {
      q: "What technologies are used in this project?",
      a: "The frontend is developed using React.js, the backend uses Python with Flask, and machine learning models are implemented using libraries such as Scikit-learn and XGBoost."
    },
    {
      q: "What is the future scope of this project?",
      a: "Future improvements include real-time weather and market price integration, support for more crops and regions, multilingual interfaces, mobile app development, and advanced risk prediction models."
    }
  ];

  return (
    <section className="faq">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
