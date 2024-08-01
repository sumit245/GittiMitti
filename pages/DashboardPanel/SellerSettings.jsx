import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import '../../src/dashboard.css'

const SellerSettings = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <img
          src="https://www.pngkey.com/png/full/386-3865658_rectangle-square-shape-download-rectangle.png"
          alt="Rectangle"
          className="settings-image"
        />
        <h1 className="settings-heading">Your Settings</h1>
      </div>
      <p className="settings-paragraph">
        Configure your account settings and be secured
      </p>

      <div className="security-settings">
        <h2 className="security-heading">Security Settings</h2>
        <div
          className="change-password-header"
          onClick={togglePasswordVisibility}
        >
          <h3 className="change-password-title">Change Password</h3>
          <ArrowDropDownIcon
            className={`change-password-icon ${
              isPasswordVisible ? "open" : "closed"
            }`}
          />
        </div>
        <Collapse in={isPasswordVisible}>
          <Box className={`password-box ${isPasswordVisible ? "open" : ""}`}>
            <p className="security-paragraph">Change your password</p>
            <form className="security-form">
              <div className="form-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  id="oldPassword"
                  className="form-input"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-input"
                />
              </div>
              <div className="form-actions">
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "800",
                    "&:hover": {
                      backgroundColor: "#fcca19",
                      color: "black",
                    },
                    marginTop: 2,
                  }}
                  className="cancel-button"
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "800",
                    "&:hover": {
                      backgroundColor: "#fcca19",
                      color: "black",
                    },
                    marginTop: 2,
                  }}
                >
                  Save
                </Button>
              </div>
            </form>
          </Box>
        </Collapse>
      </div>
    </div>
  );
};

export default SellerSettings;
