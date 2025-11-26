import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Contact Me</h2>

        <div className="footer-main">
          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Information</h4>

            <div className="footer-contact-item">
              <FaPhone className="footer-icon" />
              <span>Phone: 413 412 0215</span>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <span>Email: soi1@williams.edu</span>
            </div>

            <div className="footer-contact-item">
              <FaWhatsapp className="footer-icon" />
              <span>WhatsApp: 413 412 0215</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Suleiman Ikwang’a</p>
        </div>
      </div>
    </footer>
  );
}
