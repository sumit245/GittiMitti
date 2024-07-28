import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faWhatsapp,
  faInstagram,
  faTelegram,
  faTwitter,
  faQuora,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
              alt="All-in-one solution"
              className="footer-image"
            />

            <p>
              Welcome to our company! We are committed to providing the best
              services to our customers. Our team is dedicated to ensuring your
              satisfaction with every interaction. Thank you for choosing us.
            </p>
            <img
              src="https://demo.martvill.techvill.net/public/uploads/20220803/54a9717eb0ee5dd2df9501d2d2788aa2.webp"
              alt="All-in-one solution"
              className="footer-image"
            />
          </div>
          <div className="footer-section">
            <h2>Useful Links</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Digital Payment</li>
              <li>Track Order</li>
              <li>All Products</li>
              <li>Be A Seller</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Home Pages</h2>
            <ul>
              <li>Homepage - Mixed</li>
              <li>Homepage - Aggregate</li>
              <li>Homepage - Stone Dust</li>
              <li>Homepage - Jamuna Sand</li>
              <li>Homepage - Bricks & Blocks</li>
              <li>Homepage - RCM</li>
              <li>Homepage - Cement</li>
              <li>Homepage - Steel/TMT Bars</li>
              <li>Homepage - Interlocking Floor Tiles</li>
              <li>Homepage - Vedic Plaster</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Categories</h2>
            <ul>
              <li>Natural Building Materials</li>
              <li>Man-Made Building Materials</li>
              <li>Binding Materials</li>
              <li>Insulation Materials</li>
              <li>Finishing Materials</li>
              <li>Roofing Materials</li>
              <li>Plumbing Materials</li>
              <li>Electrical Materials</li>
              <li>Structural Materials</li>
              <li>Flooring Materials</li>
              <li>Interior Materials</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 35A, Vipin
                Garden Extension, Dwarka- 110059
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> admin@gittimitti.net
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> Phone: +123-456-7890
              </li>
            </ul>

            <h2>Stay Connected</h2>
            <ul className="social-media-icons">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.me/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.quora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faQuora} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 Builders.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;