import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate("/signin");
  };
  return (
    <header>
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            <a href="#">
              <img
                src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
                alt="Logo"
                className="logo"
              />
            </a>
          </div>
          <div className="location-container">
            <i className="fas fa-map-marker-alt"></i>
            <div className="location-text">
              <span>Deliver to</span>
              <span>India</span>
            </div>
          </div>
          <div className="search-container">
            <div className="search-dropdown">
              <span>All</span>
              <i className="fas fa-caret-down"></i>
            </div>
            <input type="text" className="search-input" />
            <i className="fas fa-search search-icon"></i>
          </div>
          <div className="options-container">
            <div className="language-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5cTjFOlqbAq58kHDiat1Igkww5UwiPmFiQ&s"
                alt="IND Flag"
                className="flag"
              />
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="account-container" onClick={handleSignin}>
              <span>Hello, Sign in</span>
              <div className="account-dropdown">
                <span>Account & Lists</span>
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
            <div className="orders-container">
              <span>Returns</span>
              <span>& Orders</span>
            </div>
            <div className="cart-container">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-text">Cart</span>
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="all-categories">
            <i className="fas fa-bars"></i>
            <span>All</span>
          </div>
          <nav className="nav-links">
            <ul>
              <li>Aggregate</li>
              <li>Stone Dust</li>
              <li>Jamuna Sand</li>
              <li>Bricks & Blocks</li>
              <li>RCM</li>
              {}
              <li>Cement</li>
              <li>Steel/TMT Bars</li>
              <li>Interlocking Floor Tiles</li>
              <li>Vedic Plaster</li>
            </ul>
          </nav>
          <div className="special-deal">
            <span>Shop</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
