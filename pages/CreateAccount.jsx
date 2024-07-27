import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../src/api"; // Adjust import path

export default function CreateAccount() {
  const [fname, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Call the API function to create the account
      await createAccount({ fname, email, mobile, password });
      setSuccess("Account created successfully!");
      setError("");
      navigate("/signIn"); // Redirect to sign-in page or another page as needed
    } catch (err) {
      setError(err.message || "An error occurred while creating the account.");
      setSuccess("");
    }
  };

  const handleSignin = () => {
    navigate("/signIn");
  };

  return (
    <>
      <div className="container" style={{ height: "140vh" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
          alt="logo"
          className="logo"
        />
        <div className="box" style={{ height: "121vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>Create Account</p>

          <form onSubmit={handleSubmit}>
            <p className="text" style={{ fontWeight: "500" }}>
              Your name
            </p>
            <input
              placeholder="First and Last Name"
              className="textInput"
              value={fname}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name" // Add autocomplete attribute
            />

            <p className="text" style={{ fontWeight: "500" }}>
              Mobile Number
            </p>
            <input
              placeholder="Mobile Number"
              className="textInput"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              autoComplete="tel" // Add autocomplete attribute
            />

            <p className="number" style={{ fontWeight: "500" }}>
              Email
            </p>
            <input
              placeholder="Email"
              className="textInput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email" // Add autocomplete attribute
            />

            <p className="text" style={{ fontWeight: "500" }}>
              Password
            </p>
            <input
              placeholder="At least 6 characters"
              type="password"
              className="textInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password" // Add autocomplete attribute
            />

            <p className="textSmall">
              Passwords must be at least 6 characters.
            </p>

            <p className="text">
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>

            <button type="submit" className="continue_button">
              Create Account
            </button>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </form>

          <hr />

          <p className="text" style={{ fontWeight: "500" }}>
            Buying for work?
          </p>
          <p
            className="textSmall"
            style={{
              color: "#3383FF",
              fontWeight: "bold",
            }}
          >
            Create a free business account
          </p>

          <hr />

          <p className="text">Already have an account?</p>
          <button
            className="continue_button"
            style={{ marginTop: "0" }}
            onClick={handleSignin}
          >
            Sign In
          </button>

          <p className="text">
            By creating an account or logging in, you agree to Builer’s
            Conditions of Use and Privacy Policy.
          </p>
        </div>
      </div>
      <div className="SignIn_footer" style={{ width: "98.9vw" }}>
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
