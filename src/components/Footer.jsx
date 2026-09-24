import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link className="footer-brand" to="/">
            ShopKart
          </Link>
          <p>Simple shopping for everyday essentials.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <div className="footer-socials" aria-label="Social media links">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X on Twitter">
            𝕏
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            ◎
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            f
          </a>
        </div>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} ShopKart. All rights reserved.
      </p>
    </footer>
  );
}
