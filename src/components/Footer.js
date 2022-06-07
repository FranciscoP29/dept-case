import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <div className="social-logo">DEPT</div>
          </div>
          <div class="footer-links">
            <Link class="footer-links-text">WORK</Link>
            <Link class="footer-links-text">SERVICES</Link>
            <Link class="footer-links-text">STORIES</Link>
            <Link class="footer-links-text">ABOUT</Link>
            <Link class="footer-links-text">CAREERS</Link>
            <Link class="footer-links-text">CONTACT</Link>
          </div>
          <div class="social-icons">
            <a
              class="social-icon-link"
              href="https://www.facebook.com/DeptAgency/"
              target="_blank"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link"
              href="https://twitter.com/deptagency?lang=en"
              target="_blank"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              class="social-icon-link"
              href="https://www.instagram.com/deptagency/?hl=en"
              target="_blank"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
