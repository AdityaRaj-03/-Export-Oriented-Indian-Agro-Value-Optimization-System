import { Link } from "react-router-dom";

function FAQ() {
  const faqs = [
    {
      q: "What is the purpose of this system?",
      a: "To help farmers select the most suitable crops for export based on soil conditions, climate factors, region, and season using data-driven analysis."
    },
    {
      q: "Who can use this tool?",
      a: "This tool is designed for farmers, agricultural advisors, agronomists, and students who are interested in export-oriented crop planning.",
      hasLink: true
    },
    {
      q: "What information do I need to use the crop prediction feature?",
      a: "You need basic details such as your region, current season, soil type, approximate rainfall, temperature, and irrigation method."
    },
    {
      q: "Do I need technical knowledge to use this website?",
      a: "No. The website is designed to be simple and easy to use, even for users with limited technical or computer knowledge."
    },
    {
      q: "How does the system recommend crops?",
      a: "The system analyzes user inputs and compares them with historical agricultural, climate, and export data using data analytics and machine learning techniques."
    },
    {
      q: "Does this system provide real-time market prices?",
      a: "No. The current version uses historical data for analysis. Real-time price and weather integration may be added in future versions."
    },
    {
      q: "How accurate are the crop recommendations?",
      a: "The recommendations are based on historical data and learned patterns. Actual results may vary due to weather changes, soil conditions, and market fluctuations."
    },
    {
      q: "Can I use this system for all crops?",
      a: "The system currently supports selected major Indian crops with export potential. Support for more crops can be added in future updates."
    },
    {
      q: "Is this system suitable for small-scale farmers?",
      a: "Yes. The system is designed to support both small-scale and large-scale farmers by providing guidance for better crop selection."
    },
    {
      q: "Does this system replace agricultural experts?",
      a: "No. This system is a decision-support tool and should be used along with expert advice and local farming knowledge."
    },
    {
      q: "What technologies are used in this project?",
      a: "The system uses React.js for the frontend, Python and Flask for the backend, and machine learning libraries for prediction."
    },
    {
      q: "What are the future enhancements planned for this system?",
      a: "Future improvements include real-time data integration, support for more regions and crops, multilingual support, and mobile application development."
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
            {f.hasLink && (
              <div className="faq-link-wrapper">
                <p>Click here to see how you can use the tool:</p>
                <Link to="/howto" className="faq-link-btn">How to Use</Link>
              </div>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
