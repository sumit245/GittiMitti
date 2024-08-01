import React, { useState } from "react";
import "./Navbar.css";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaAngleDown,
  FaDollarSign,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaTruck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };
 
  const navigate = useNavigate();
  const handleSignin = () =>{
     navigate('/signin')
  }
  const handleTrack = () =>{
    navigate('/orderTracking')
  }

  return (
    <div>
        
        <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-contact">
            <FaPhone className="navbar-icon" />
            <span className="navbar-phone-number">+91-800-123-4567</span>
            <FaEnvelope className="navbar-icon" />
            <span className="navbar-email">example@example.com</span>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-language" onClick={toggleLanguageDropdown}>
            <FaGlobe className="navbar-icon" />
            <span className="navbar-language-text">India</span>
            <FaAngleDown className="navbar-dropdown-icon" />
          </div>
          {languageDropdownOpen && (
            <ul className="navbar-language-dropdown">
              <li>English</li>
              <li>Hindi</li>
              <li>Gujarati</li>
              <li>Bengali</li>
              <li>Tamil</li>
              <li>Sanskrit</li>
              <li>Oriya</li>
              <li>Punjabi</li>
              <li>Marathi</li>
              <li>Maithili</li>
            </ul>
          )}
          <div className="navbar-currency">
            <FaDollarSign className="navbar-icon" />
            <span className="navbar-currency-text">USD</span>
          </div>
        </div>
      </nav>
        
     
     <div >
     <nav className="second-navbar">
        <div className="second-navbar-left">
          <div className="company-logo">GittiMitti</div>
        </div>
        <div className="second-navbar-center">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="second-navbar-right">
          <div className="navbar-item" onClick={handleSignin}>
            <FaUser className="navbar-icon" />
            <span className="navbar-item-text">Agatha Willia</span>
          </div>
          <div className="navbar-item">
            <FaHeart className="navbar-icon" />
            <span className="navbar-item-text">Wishlist</span>
          </div>
          <div className="navbar-item">
            <FaShoppingCart className="navbar-icon" />
            <span className="navbar-item-text">Your Cart</span>
          </div>
          <div className="navbar-item" onClick={handleTrack}>
            <FaTruck className="navbar-icon" />
            <span className="navbar-item-text">Track Order</span>
          </div>
        </div>
      </nav>
     </div>
     
    </div>
  );
};

export default Navbar;