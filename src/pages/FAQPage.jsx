import FAQ from "../components/FAQ";
import "../style/Home.css";

function FAQPage() {
  return (
    <div className="page">
      <h1>Frequently Asked Questions</h1>
      <p className="subtitle">Common questions about this tool and how to use it.</p>
      <FAQ />
    </div>
  );
}

export default FAQPage;
