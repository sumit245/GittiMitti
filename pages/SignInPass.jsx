import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { checkPassword } from "../src/api"; // Import checkPassword API function

export default function SignInPass() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve email from location state
  const { email } = location.state || {};

  // State variables
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      // Call checkPassword API function with email and password as separate parameters
      await checkPassword(email, password);
      setSuccess("Password verified successfully!");
      setError("");
      // Navigate to dashboard or desired page upon successful sign-in
      navigate("/"); // Replace with your desired route
    } catch (err) {
      console.error("Error signing in:", err);
      setError(err.message || "An error occurred while signing in.");
      setSuccess("");
    }
  };

  // Handle password assistance link click
  const passwordAssistance = () => {
    navigate("/passwordassistance");
  };

  // Handle create account button click
  const handleCreateAccount = () => {
    navigate("/CreateAccount");
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
        <div className="box" style={{ height: "45vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>SignIn</p>
          <p className="text" style={{ fontWeight: "bold" }}>
            Password
          </p>
          <p className="textSmall">{email}</p>
          <div
            style={{
              fontWeight: "bold",
              color: "blue",
              textAlign: "right",
              marginTop: "-30px",
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            <Link underline="none" onClick={passwordAssistance}>
              Forgot Password?
            </Link>
          </div>

          <input
            className="textInput"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="continue_button" onClick={handleSignIn}>
            SignIn
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
          <FormGroup>
            <FormControlLabel
              className="textSmall"
              control={<Checkbox defaultChecked />}
              label="Keep me signed in."
            />
          </FormGroup>
        </div>
        <p
          className="textSmall "
          style={{ color: "#A2A6A8", marginTop: "13px" }}
        >
          New to Builder?
        </p>
        <button className="transparentButton" onClick={handleCreateAccount}>
          Create your Builder account
        </button>
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
