import React from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";

export default function SellerSignin() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/sellerCreateAccount");
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
        <div className="box" style={{ height: "72vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>
            Sign in with business credenatils
          </p>
          <p className="text" style={{ fontWeight: "500" }}>
            Email or mobile phone number
          </p>
          <input className="textInput" />
          <p className="text" style={{ fontWeight: "500" }}>
            Password
          </p>
          <input className="textInput" />
          <button
            className="continue_button"
            style={{ color: "white" }}
            onClick={handleCreateAccount}
          >
            Continue{" "}
          </button>
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
            Buying for work?
          </p>
          <p
            className="textSmall"
            style={{
              color: "#3383FF",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Shop on Builder Business
          </p>
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
