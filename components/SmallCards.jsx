import React, { useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReplayIcon from "@mui/icons-material/Replay";
import CategoryIcon from "@mui/icons-material/Category";
import StarIcon from "@mui/icons-material/Star";
import "../src/App.css";
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import Button from "@mui/material/Button"; // Added import
import Content from "./Content";

export default function SmallCards() {
  // State to manage the visibility of the new div
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function for button click
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div
        style={{
          flex: 1,
          backgroundColor: "#ededed",
          display: "flex",
          padding: "50px 0",
          boxSizing: "border-box",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "right", padding: "3vh" }}
        >
          <Button
            variant="contained"
            startIcon={<SettingsIcon />}
            style={{
              backgroundColor: "grey", // Set background color
              color: "white", // Set text color
              marginTop: "5vh", // Set top margin
              textTransform: "none", // Prevent text from being uppercase
            }}
            onClick={handleClick} // Set up the click handler
          >
            <Typography variant="button">Dashboard</Typography>
          </Button>
        </div>
        
        {/* This div is conditionally rendered based on the state */}
        {isVisible && (
          <Content/>
        )}

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "2vh",
            }}
          >
            <div
              className="dashboard-boxes"
              style={{
                flex: 1,
                margin: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AttachMoneyIcon style={{ color: "#ffb300", fontSize: 40 }} />
              <div style={{ marginLeft: "10px" }}>
                <p className="bigHeading" style={{ margin: "2px" }}>
                  USD
                </p>
                <p style={{ color: "grey" }}>48.50</p>
              </div>
            </div>
            <div
              className="dashboard-boxes"
              style={{
                flex: 1,
                margin: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MonetizationOnIcon style={{ color: "#ffb300", fontSize: 40 }} />
              <div style={{ marginLeft: "10px" }}>
                <p className="bigHeading" style={{ margin: "2px" }}>
                  $0
                </p>
                <p style={{ color: "grey" }}>TOTAL SALES (LAST 30 DAYS)</p>
              </div>
            </div>
            <div
              className="dashboard-boxes"
              style={{
                flex: 1,
                margin: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ShoppingCartIcon style={{ color: "#ffb300", fontSize: 40 }} />
              <div style={{ marginLeft: "10px" }}>
                <p className="bigHeading" style={{ margin: "2px" }}>
                  0
                </p>
                <p style={{ color: "grey" }}>ORDERS (LAST 30 DAYS)</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div
              className="dashboard-boxes"
              style={{
                flex: 1,
                margin: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ReplayIcon style={{ color: "#ffb300", fontSize: 40 }} />
              <div style={{ marginLeft: "10px" }}>
                <p className="bigHeading" style={{ margin: "2px" }}>
                  0
                </p>
                <p style={{ color: "grey" }}>REFUND REQUESTS</p>
              </div>
            </div>
            <div
              className="dashboard-boxes"
              style={{
                flex: 1,
                margin: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CategoryIcon style={{ color: "#ffb300", fontSize: 40 }} />
              <div style={{ marginLeft: "10px" }}>
                <p className="bigHeading" style={{ margin: "2px" }}>
                  1
                </p>
                <p style={{ color: "grey" }}>PRODUCTS (LAST 30 DAYS)</p>
              </div>
            </div>
            <div
              className="dashboard-boxes"
              style={{
                flex: 1,
                margin: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StarIcon style={{ color: "#ffb300", fontSize: 40 }} />
              <div style={{ marginLeft: "10px" }}>
                <p className="bigHeading" style={{ margin: "2px" }}>
                  2
                </p>
                <p style={{ color: "grey" }}>RATINGS (LAST 30 DAYS)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
