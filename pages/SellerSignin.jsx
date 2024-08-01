import React, { useState } from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";
import { signIn } from "../src/vendorApi"; // Adjust the path as needed
import Link from "@mui/material/Link";

export default function SellerSignin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await signIn({ email, password });
      // Handle successful sign-in, e.g., redirect to another page or show a success message
      navigate("/sellerHome"); // Adjust the route as needed
    } catch (error) {
      // Handle errors, e.g., show error message
      setError(error.message || "An error occurred during sign-in");
    } finally {
      setLoading(false);
    }
  };

  const passwordAssistance = () => {
    navigate("/sellerpasswordassistance");
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
        <div className="box" style={{ height: "78vh" }}>
          <p style={{ fontWeight: "500", fontSize: "28px" }}>
            Sign in with business credentials
          </p>
          <p className="text" style={{ fontWeight: "500" }}>
            Email or mobile phone number
          </p>
          <input
            className="textInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text" style={{ fontWeight: "500" }}>
            Password
          </p>
          <Link underline="none" onClick={passwordAssistance}>
              Forgot Password?
            </Link>
          <input
            className="textInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="errorText">{error}</p>}
          <button
            className="continue_button"
            style={{ color: "white" }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Continue"}
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
        <button
          className="transparentButton"
          onClick={() => navigate("/sellerAccountDetails")}
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
