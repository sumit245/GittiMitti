import React, { useState } from "react";
import  "./OrderTracking.css"

const OrderTracking = () => {
  const [trackCode, setTrackCode] = useState("");

  const handleInputChange = (e) => {
    setTrackCode(e.target.value);
  };

  const handleTrackOrder = () => {
    alert(`Tracking order for code: ${trackCode}`);
  };

  return (
    <div className="order-tracking-container">
      <div className="tracking-form">
        <h2>Have an order?</h2>
        <p>Want to know where your order is now?</p>
        <h1>TRACK YOUR ORDER</h1>
        <p>Track code</p>
        <input
          type="text"
          value={trackCode}
          onChange={handleInputChange}
          placeholder="Enter your track code"
        />
        <button onClick={handleTrackOrder}>Track</button>
        <p>
          Enter the track code of your order above and know the progress of your
          product delivery.
        </p>
      </div>
      <div className="tracking-image">
        <img
          src="https://demo.martvill.techvill.net/public/frontend/assets/img/be-seller/d-v-man.png"
          alt="Order Tracking"
        />
      </div>
    </div>
  );
};

export default OrderTracking;