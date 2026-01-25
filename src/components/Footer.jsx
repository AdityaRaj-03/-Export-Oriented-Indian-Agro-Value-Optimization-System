import "../style/Home.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">🌾 AgroExport</div>
          <p>Helping Indian farmers reach global markets with smarter choices.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#crop-form">Predict</a>
            <a href="/about">About</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} AgroExport — Made with care</div>
    </footer>
  );
}

export default Footer;
