import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../src/api"; // Adjust import path as needed

export default function PasswordAssistance() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);

  const verify = async () => {
    if (!email) return alert("Please enter your email address.");
    
    try {
      await sendOTP(email);
      navigate("/verificationrequired", { state: { email } });
    } catch (err) {
      console.error('Error during OTP verification:', err);
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="container" style={{ width: "100vw", paddingBottom: "30px" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
          alt="logo"
          className="logo"
        />
        <div className="box" style={{ height: "45vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>Password Assistance</p>
          <p className="text">Enter the email address or mobile phone number associated with your Amazon account.</p>
          <p className="text" style={{ fontWeight: "bold" }}>Email or mobile phone number</p>
          <input
            className="textInput"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <button className="continue_button" onClick={verify}>Continue</button>
          {error && <p className="error">{error}</p>}
        </div>
        <div style={{ width: "25vw", marginTop: "25px" }}>
          <p className="mediumtext">Has your email address or mobile phone number changed?</p>
          <p className="textSmall">If you no longer use the e-mail address associated with your Builder account, you may contact Customer Service for help restoring access to your account.</p>
        </div>
      </div>
      <div className="SignIn_footer">
        <div className="spaceEven" style={{ color: "#3383FF", fontWeight: "bold", marginBottom: "8px" }}>
          <p>Conditions of use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <p className="textSmall">© 1996-2024, Builder.com, Inc. or its affiliates</p>
      </div>
    </>
  );
}
