import "../style/Home.css";
import { Link } from "react-router-dom";

function HowToUse() {
  return (
    <div className="page">
      <h1>How to Use the System</h1>
      <p className="subtitle">A simple step-by-step guide to get practical crop recommendations.</p>

      <section>
        <h2>Who is this system for?</h2>
        <p>This system is designed for farmers who want to choose the best crops for export based on their land, climate, and region.</p>
      </section>

      <section>
        <h2>What do you need before using it?</h2>
        <ul>
          <li>Your region</li>
          <li>Current season</li>
          <li>Soil type (if known)</li>
          <li>Average rainfall or temperature</li>
        </ul>
      </section>

      <section>
        <h2>Step-by-step usage</h2>
        <ol>
          <li>
            <strong>Open the Website</strong>
            <p>Open the website using a mobile phone or computer with an internet connection.</p>
          </li>
          <li>
            <strong>Click on "Get Started"</strong>
            <p>On the home page, click the <Link to="/recommend">Get Started</Link> button to begin crop recommendation.</p>
          </li>
          <li>
            <strong>Fill the form</strong>
            <p>Explain each field in simple words:</p>
            <ul>
              <li><strong>Region</strong> – Select your farming region.</li>
              <li><strong>Season</strong> – Choose current season (Kharif / Rabi / Zaid).</li>
              <li><strong>Soil Type</strong> – Select the soil of your land.</li>
              <li><strong>Rainfall</strong> – Enter average rainfall (if known).</li>
              <li><strong>Temperature</strong> – Enter average temperature.</li>
            </ul>
            <p><em>If exact values are not known, approximate values can be entered.</em></p>
          </li>
          <li>
            <strong>Click "Predict Crop"</strong>
            <p>After entering all details, click on the Predict Crop button.</p>
          </li>
          <li>
            <strong>Understand the result</strong>
            <p>Output explanation:</p>
            <ul>
              <li><strong>Recommended Crop</strong> – Best crop for your conditions</li>
              <li><strong>Export Potential</strong> – Demand in export market</li>
              <li><strong>Risk Level</strong> – Possibility of loss</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2>Example</h2>
        <p><strong>Region:</strong> Central<br />
        <strong>Season:</strong> Rabi<br />
        <strong>Soil Type:</strong> Loamy<br />
        <strong>Rainfall:</strong> 800 mm</p>
        <p><strong>Recommended Crop:</strong> Wheat</p>
      </section>

      <section>
        <h2>Important notes</h2>
        <ul>
          <li>This system provides guidance, not a guarantee.</li>
          <li>Final decisions should consider expert advice.</li>
          <li>Weather and market conditions may change.</li>
        </ul>
      </section>

      <section>
        <h2>Support / Help</h2>
        <p>For help, contact: <a href="mailto:support@agroexport.com">support@agroexport.com</a></p>
      </section>
    </div>
  );
}

export default HowToUse;
