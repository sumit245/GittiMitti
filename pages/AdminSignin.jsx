import React, { useState } from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";

export default function AdminSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State to handle password input
  const [error, setError] = useState(""); // To handle errors

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const verify = async () => {
    if (email === "admin@gmail.com" && password === "1234") {
      // Success logic, e.g., redirect or show a success message
      navigate("/");
      setError("");
      alert("Sign in successful!");
    } else {
      // Error logic
      setError("Invalid email or password.");
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
        <div className="box">
          <p style={{ fontWeight: "500", fontSize: "28px" }}>Sign In</p>
          <p className="text" style={{ fontWeight: "500" }}>Email or mobile phone number</p>
          <input
            className="textInput"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <p className="text" style={{ fontWeight: "500" }}>Password</p>
          <input
            className="textInput"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <button className="continue_button" onClick={verify}>
            Continue
          </button>
          {error && <p className="error">{error}</p>}
          <p className="textSmall">
            By continuing, you agree to <span>Builer's Conditions of Use</span> and <span>Privacy Notice</span>.
          </p>
          <p
            className="textSmall"
            style={{ color: "#3383FF", fontWeight: "bold", marginBottom: "8px" }}
            // onClick={handleSellerSignin}
          >
            Need help?
          </p>
          <hr />
          <p className="text" style={{ fontWeight: "500" }}>Are you a seller?</p>
          <a
            className="textSmall"
            style={{ color: "#3383FF", fontWeight: "bold", marginBottom: "8px" }}
            // onClick={handleSellerSignin}
          >
            Sign In to Builder Business
          </a>
        </div>
        <p className="textSmall" style={{ color: "#A2A6A8", marginTop: "13px" }}>
          New to Builder?
        </p>
        <button
          className="continue_button"
        //   onClick={handleCreateAccount}
          style={{ width: "25vw" }}
        >
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
