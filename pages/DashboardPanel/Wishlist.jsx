import React from "react";
import '../../src/dashboard.css'

const Wishlist = () => {
  return (
    <div className="your-component">
      <div className="wishlist-header">
        <img
          src="https://www.pngkey.com/png/full/386-3865658_rectangle-square-shape-download-rectangle.png"
          alt="Rectangle"
          className="wishlist-image"
        />
        <h1 className="wishlist-heading">Your Wishlist</h1>
      </div>
      <p className="wishlist-paragraph">
        Saved for later, products you may love to buy now..
      </p>
    </div>
  );
};

export default Wishlist;