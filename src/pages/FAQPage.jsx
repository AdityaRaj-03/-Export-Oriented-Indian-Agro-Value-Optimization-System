import FAQ from "../components/FAQ";
import "../style/Home.css";

function FAQPage() {
  return (
    <div className="page faq-page">
      <div className="faq-hero">
        <div className="faq-hero-content">
          <span className="faq-hero-badge">Support Center</span>
          <h1>Frequently Asked Questions</h1>
          <p className="subtitle">
            Find answers to common questions about our crop recommendation system. 
            Browse by category or search for specific topics.
          </p>
        </div>
        <div className="faq-hero-illustration">
          <div className="faq-floating-icons">
            <span className="floating-icon icon-1">❓</span>
            <span className="floating-icon icon-2">💡</span>
            <span className="floating-icon icon-3">🌾</span>
            <span className="floating-icon icon-4">📊</span>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}

export default FAQPage;
