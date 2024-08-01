import React, { useState } from "react";
import { verifyOTP, sendOTP } from "../src/vendorApi";
import { useNavigate, useLocation } from "react-router-dom";

export default function SellerVerificationRequired() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resendStatus, setResendStatus] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve email from location state
  const { email } = location.state || {};

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = async () => {
    try {
      await verifyOTP(email, otp);
      setSuccess("OTP verified successfully!");
      setError("");
      navigate("/sellercreatenewpassword", { state: { email } }); // Navigate to the next step after OTP verification
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError(err.message || "An error occurred while verifying the OTP.");
      setSuccess("");
    }
  };

  const handleResendOtp = async () => {
    try {
      await sendOTP(email); // Resend OTP to the same email
      setResendStatus("OTP has been resent to your email.");
      setError("");
    } catch (err) {
      console.error("Error resending OTP:", err);
      setResendStatus("");
      setError(err.message || "An error occurred while resending the OTP.");
    }
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
        <div className="box" style={{ height: "48vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>
            Verification required
          </p>
          <p className="text">
            To continue, complete this verification step. We've sent an OTP to
            the email {email}. Please enter it below to complete verification.
          </p>
          <p className="text" style={{ fontWeight: "bold" }}>
            Enter OTP
          </p>
          <input
            className="textInput"
            type="text"
            value={otp}
            onChange={handleOtpChange}
          />
          <button className="continue_button" onClick={handleVerify}>
            Continue
          </button>
          {error && (
            <p className="text" style={{ color: "red" }}>
              {error}
            </p>
          )}
          {success && (
            <p className="text" style={{ color: "green" }}>
              {success}
            </p>
          )}
          {resendStatus && (
            <p className="text" style={{ color: "green" }}>
              {resendStatus}
            </p>
          )}
          <p
            className="text"
            style={{ fontWeight: "bold", color: "blue", cursor: "pointer" }}
            onClick={handleResendOtp}
          >
            Resend OTP
          </p>
        </div>
      </div>

      <div className="SignIn_footer" style={{ marginTop: "60px" }}>
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
