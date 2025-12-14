import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Home Decor</h3>
          <p>
            We turn houses into dream homes with our bespoke interior design services in Patna, Bihar. Elegance meets comfort and creativity.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li> {/* Added */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Patliputra Colony, Patna - 800013<br/>
            <i className="fas fa-envelope"></i> support@elegantinteriors.com<br/>
            <i className="fas fa-phone-alt"></i> +91-93045-12345
          </p>
        </div>

        <div className="footer-column">
          <h4>Connect with Us</h4>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <form style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{ flex: 1, padding: '10px', borderRadius: '4px', border: 'none' }}
            />
            <button
              style={{
                backgroundColor: 'darkgoldenrod',
                color: '#fff',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Home Decor Interiors. All rights reserved. Crafted with ❤️ in Bihar.
      </div>
    </footer>
  );
}

export default Footer;
