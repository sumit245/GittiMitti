import React, { useState } from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";

export default function SellerPasswordResetDone() {
  const navigate = useNavigate();

  const handleSingin = () => {
    navigate("/sellersignIn");
  };

  return (
    <>
      <div
        className="container"
        style={{ width: "100vw", paddingBottom: "30px" }}
      >
        <img
          src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
          alt="logo"
          className="logo"
        />
        <div className="box" style={{ height: "40vh" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Password Reset Done!
          </p>
          <p
            className="textmedium"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Click to sign in
          </p>

          <button className="continue_button" onClick={handleSingin}>
            Continue{" "}
          </button>
        </div>
      </div>
      <div className="SignIn_footer" style={{ marginTop: "16.5vh" }}>
        <div
          className="spaceEven"
          style={{ color: "#3383FF", fontWeight: "bold", marginBottom: "8px" }}
        >
          <p>Conditions of use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <p className="textSmall">
          © 1996-2024, Builder.com, Inc. or its affiliates
        </p>
      </div>
    </>
  );
}
