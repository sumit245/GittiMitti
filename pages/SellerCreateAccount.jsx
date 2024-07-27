import React from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";

const SellerCreateAccount = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    // Define the function to handle the create account button click
    window.location.href = "/CreateAccount";
  };

  return (
    <div
      className="container"
      style={{ width: "100vw", paddingBottom: "30px" }}
    >
      <img
        src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
        alt="logo"
        className="logo"
      />

      {/* Features section */}
      <div
        className="box-img"
        style={{
          backgroundColor: "#433D8B",
          marginLeft: "1000px",
          position: "absolute",
          marginTop: "96px",
        }}
      >
        <p style={{ fontWeight: 500, fontSize: "28px", color: "white" }}>
          Reshap buying for your organisation
        </p>

        {/* Feature 1 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/256/12404/12404537.png"
            style={{ height: "70px", position: "absolute" }}
          />
          <div style={{ marginLeft: "100px" }}>
            <p style={{ color: "white", fontSize: "17px" }}>
              GST Invoice & Bulk Discount
            </p>
            <p style={{ color: "white" }}>
              Save up to 28% more with GST input credit and avail discount on
              multi-unit purchases.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <img
            src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-analytics-line-icon-vector-png-image_6703463.png"
            style={{ height: "70px", position: "absolute" }}
          />
          <div style={{ marginLeft: "100px" }}>
            <p style={{ color: "white", fontSize: "17px" }}>
              Business Analytics
            </p>
            <p style={{ color: "white" }}>
              Track and monitor spending by account organisation with dynamic
              charts and tables.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/010/159/990/small_2x/people-icon-sign-symbol-design-free-png.png"
            style={{ height: "70px", position: "absolute" }}
          />
          <div style={{ marginLeft: "100px" }}>
            <p style={{ color: "white", fontSize: "17px" }}>
              Secure Your Account
            </p>
            <p style={{ color: "white" }}>
              Add more colleagues to your account for making business purchases
              instead of sharing your login credentials.
            </p>
          </div>
        </div>
      </div>

      {/* Sign-in box */}
      <div className="box">
        <p style={{ fontWeight: 500, fontSize: "28px" }}>
          Let us create your free Amazon Business account
        </p>
        <p className="text" style={{ fontWeight: 500 }}>
          Enter the email you'd like to use for your business account
        </p>
        <input className="textInput" placeholder="Enter email address" />
        <button className="continue_button" onClick={handleCreateAccount}>
          Get started
        </button>
        <p className="textSmall">
          By continuing, you agree to <span>Builder's Conditions of Use</span>{" "}
          and <span>Privacy Notice</span>.
        </p>
        <p
          className="textSmall"
          style={{ color: "#3383FF", fontWeight: "bold", marginBottom: "8px" }}
        >
          Need help?
        </p>
        <hr />
        <p className="text" style={{ fontWeight: 500 }}>
          Buying for work?
        </p>
        <p
          className="textSmall"
          style={{ color: "#3383FF", fontWeight: "bold", marginBottom: "8px" }}
        >
          Shop on Builder Business
        </p>
      </div>

      <p className="textSmall" style={{ color: "#A2A6A8", marginTop: "13px" }}>
        New to Builder?
      </p>
      <button className="transparentButton" onClick={handleCreateAccount}>
        Create your Builder account
      </button>

      {/* Footer */}
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
    </div>
  );
};

export default SellerCreateAccount;
