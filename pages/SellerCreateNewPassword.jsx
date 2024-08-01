import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updatePassword } from "../src/vendorApi"; // Adjust import path

export default function SellerCreateNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState({ error: "", success: "" });
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const handleSave = async (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      try {
        await updatePassword(newPassword, email);
        setFeedback({ success: "Password updated successfully!", error: "" });
        navigate("/sellerpasswordResetDone");
      } catch (err) {
        setFeedback({
          error: err.message || "An error occurred.",
          success: "",
        });
      }
    } else {
      setFeedback({ error: "Passwords do not match.", success: "" });
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
        <div className="box" style={{ height: "50vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>
            Create new password
          </p>
          <p className="textSmall">
            We'll ask for this password whenever you sign in.
          </p>
          <form onSubmit={handleSave}>
            <label className="textSmall" style={{ fontWeight: "bold" }}>
              New password
            </label>
            <input
              className="textInput"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <label className="textSmall" style={{ fontWeight: "bold" }}>
              Confirm password
            </label>
            <input
              className="textInput"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <button className="continue_button" type="submit">
              Save changes and sign in
            </button>
            {feedback.error && (
              <p className="error" style={{ color: "red" }}>
                {feedback.error}
              </p>
            )}
            {feedback.success && (
              <p className="success" style={{ color: "green" }}>
                {feedback.success}
              </p>
            )}
          </form>
          <div style={{ width: "25vw", marginTop: "25px" }}>
            <p className="mediumtext">Secure password tips:</p>
            <ul className="textSmall">
              <li>
                Use at least 8 characters, a combination of numbers and letters
                is best.
              </li>
              <li>
                Do not use the same password you have used with us previously.
              </li>
              <li>
                Do not use dictionary words, your name, e-mail address, mobile
                phone number, or other personal information that can be easily
                obtained.
              </li>
              <li>
                Do not use the same password for multiple online accounts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="SignIn_footer">
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
