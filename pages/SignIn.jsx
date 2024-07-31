import React, { useState } from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/actions";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // To handle errors

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSellerSignin = () => {
    navigate("/sellerSignin");
  }

  const verify = async () => {
    if (email) {
      try {
        // Pass email as state to the VerificationRequired component
        // navigate("/signinpass", { state: { email } });
        await dispatch(loginUser("sumit", "1234"))
        navigate('/')
      } catch (error) {
        // Log the full error object
        console.error('Error during OTP verification:', error);

        // Handle error (e.g., show a message to the user)
        setError(error.message || "An error occurred. Please try again.");
      }
    } else {
      alert("Please enter your email address.");
    }
  };

  const handleCreateAccount = () => {
    navigate("/createaccount");
  };
  const checkPassword = () => {
    navigate("/signinpass");
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
        <div className="box">
          <p style={{ fontWeight: "500", fontSize: "28px" }}>SignIn</p>
          <p className="text" style={{ fontWeight: "500" }}>
            Email or mobile phone number
          </p>
          <input
            className="textInput"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <button className="continue_button" onClick={verify}>Continue </button>
          {error && <p className="error">{error}</p>}
          <p className="textSmall">
            By continuing, you agree to <span>Builer's Conditions of Use</span>{" "}
            and <span>Privacy Notice</span>.
          </p>
          <p
            className="textSmall"
            style={{
              color: "#3383FF",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Need help?
          </p>
          <hr />
          <p className="text" style={{ fontWeight: "500" }}>
            Are you a seller?
          </p>
          <button
            className="textSmall"
            style={{
              color: "#3383FF",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
            onClick={handleSellerSignin}
          >
            Sign In to  Builder Business
          </button>
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
