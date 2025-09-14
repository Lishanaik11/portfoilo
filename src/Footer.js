import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaPhone, FaGithub } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="social-links-footer-text">
          <a
            href="mailto:lisha.naik@email.com"
            className="footer-link"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/lisha-naik-20a761384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/lisha_naik"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://github.com/Lishanaik11"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a href="tel:7666043331" className="footer-link" aria-label="Phone">
            <FaPhone size={22} />
          </a>
        </div>

        <p className="footer-text">
          © {currentYear} Lisha Naik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;