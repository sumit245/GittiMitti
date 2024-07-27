import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updatePassword } from "../src/api"; // Adjust import path

export default function CreateNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  console.log(email);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    if (newPassword === confirmPassword) {
      try {
        await updatePassword(newPassword, email); // Call the API with newPassword only
        setSuccess("Password updated successfully!");
        setError("");
        navigate("/passwordResetDone");
      } catch (err) {
        setError(
          err.message || "An error occurred while updating the password."
        );
        setSuccess("");
      }
    } else {
      setError("Passwords do not match.");
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
          <p className="textSmall" style={{ fontWeight: "bold" }}>
            New password
          </p>
          <form onSubmit={handleSave}>
            <input
              className="textInput"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
              autoComplete="new-password" // Add autocomplete attribute
            />
            <p className="textSmall" style={{ fontWeight: "bold" }}>
              Confirm password
            </p>
            <input
              className="textInput"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              autoComplete="new-password" // Add autocomplete attribute
            />
            <button className="continue_button" type="submit">
              Save changes and sign in
            </button>
            {error && (
              <p className="error" style={{ color: "red" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="success" style={{ color: "green" }}>
                {success}
              </p>
            )}
          </form>
        </div>
        <div style={{ width: "25vw", marginTop: "25px" }}>
          <p className="mediumtext">Secure password tips:</p>
          <ul className="textSmall">
            <li>
              Use at least 8 characters, a combination of numbers and letters is
              best.
            </li>
            <li>
              Do not use the same password you have used with us previously.
            </li>
            <li>
              Do not use dictionary words, your name, e-mail address, mobile
              phone number, or other personal information that can be easily
              obtained.
            </li>
            <li>Do not use the same password for multiple online accounts.</li>
          </ul>
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
