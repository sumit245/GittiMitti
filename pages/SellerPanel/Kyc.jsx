import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import { Button, Divider, TextField } from "@mui/material";
import { FileCopy } from "@mui/icons-material"; // Import the FileCopy icon
import "../../src/App.css";

export default function Kyc() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div
        className="greyBackground"
        style={{ justifyContent: "space-around" }}
      >
        <div
          className="sellerBox"
          style={{
            width: "58%",
          }}
        >
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <p className="mediumtext" style={{ fontWeight: "bold" }}>
              KYC Submission
            </p>
            <FileCopy style={{ cursor: "pointer", color: "#424242" }} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey", fontWeight:"bold" }}>Full Name:</p>
              <p style={{ color: "grey", textAlign: "right" }}>Mansi</p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>Email:</p>
              <p style={{ color: "grey", textAlign: "right" }}>
                example@example.com
              </p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>NID Number:</p>
              <p style={{ color: "grey", textAlign: "right" }}>123456789</p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>NID Image:</p>
              <p style={{ color: "grey", textAlign: "right" }}>Uploaded</p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>Tax ID:</p>
              <p style={{ color: "grey", textAlign: "right" }}>987654321</p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>Trade License No.:</p>
              <p style={{ color: "grey", textAlign: "right" }}>TL123456</p>
            </div>
          </div>
        </div>

        {/* Second box */}
        <div className="sellerBox" style={{ width: "37%" }}>
          <p className="mediumtext" style={{ fontWeight: "bold" }}>
            Details
          </p>
          <div style={{ marginTop: "20px" }}>
            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey", fontWeight:"bold"  }}>Form :</p>
              <p style={{ color: "grey", textAlign: "right" }}>KYC Form</p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>Submitted By :</p>
              <p style={{ color: "grey", textAlign: "right" }}>Mansi</p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>Updated On :</p>
              <p style={{ color: "grey", textAlign: "right" }}>
                12-09-2022 06:31 PM
              </p>
            </div>

            <Divider style={{ marginBottom: "10px", width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "grey" , fontWeight:"bold" }}>Submitted On :</p>
              <p style={{ color: "grey", textAlign: "right" }}>
                12-09-2022 06:31 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
