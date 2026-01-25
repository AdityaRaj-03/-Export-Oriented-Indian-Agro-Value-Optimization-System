import "../style/Home.css";
import Avatar from "../assets/aditya-avatar.svg";

function About() {
  return (
    <div className="page about-page">
      <div className="about-grid">
        <div className="about-photo-wrap">
          <img src={Avatar} alt="Aditya Raj" className="about-photo" />
        </div>

        <div className="about-content">
          <h1>About the Creator — Aditya Raj</h1>
          <p>
            Aditya Raj is a product-minded developer and agritech enthusiast who
            built this tool to help Indian farmers choose export-ready crops.
            He blends domain research with pragmatic engineering to ship
            solutions that are simple, reliable, and impactful.
          </p>

          <h2>Life & Journey</h2>
          <ul className="timeline">
            <li>
              <strong>Grew up close to agriculture</strong>
              <p>Early exposure to farming communities inspired a focus on practical tools.</p>
            </li>
            <li>
              <strong>Education & Tech</strong>
              <p>Studied engineering and moved into full-stack development, focusing on data-driven apps.</p>
            </li>
            <li>
              <strong>Building for impact</strong>
              <p>Combines market research with product design to support export-oriented farming.</p>
            </li>
          </ul>

          <p className="about-cta">Want to collaborate? Reach out — Aditya is open to partnerships.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
