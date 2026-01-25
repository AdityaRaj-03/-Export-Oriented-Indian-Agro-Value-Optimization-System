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
        </ul>
        <div className="nav-actions">
          <Link to="/" className="nav-cta">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;