// ...existing code...
import { Link } from "react-router-dom";
import "../style/Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">🌾 AgroExport</Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/faq" className="nav-link">FAQ</Link></li>
          <li><Link to="/howto" className="nav-link">How to Use</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <Link to="/recommend" className="nav-cta">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
// ...existing code...