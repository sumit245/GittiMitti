import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="foot-panel1">Back to Top</div>

      <div className="foot-panel2">
        <ul>
          <p>Get to Know Us</p>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Press Releases</a>
          </li>
          <li>
            <a href="#">Builder Science</a>
          </li>
        </ul>

        <ul>
          <p>Connect with Us</p>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>

        <ul>
          <p>Make Money with Us</p>
          <li>
            <a href="#">Sell on Builder</a>
          </li>
          <li>
            <a href="#">Sell under Builder Accelerator</a>
          </li>
          <li>
            <a href="#">Become an Affiliate</a>
          </li>
          <li>
            <a href="#">Advertise Your Products</a>
          </li>
        </ul>

        <ul>
          <p>Let Us Help You</p>
          <li>
            <a href="#">Builder and COVID-19</a>
          </li>
          <li>
            <a href="#">Your Account</a>
          </li>
          <li>
            <a href="#">Your Orders</a>
          </li>
          <li>
            <a href="#">Shipping Rates & Policies</a>
          </li>
        </ul>
      </div>

      <div className="foot-panel3">
        <div className="logo1"></div>
      </div>

      <div className="foot-panel4">
        <div className="pages">
          <a href="#">Condition of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div className="copyright">
          © 1996-2024, Builder.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
