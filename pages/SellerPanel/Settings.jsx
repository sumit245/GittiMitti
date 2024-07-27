import React, { useState } from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import { Button, Divider, Collapse, TextField, Switch } from "@mui/material";

const CollapsibleSection = ({ title, children, isOpen, toggle }) => (
  <div
    style={{
      width: "70%", // Increased width
      backgroundColor: "#fff",
      padding: "2vh",
      margin: "2vh",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      cursor: "pointer",
    }}
    onClick={toggle}
  >
    <p style={{ fontWeight: "bold" }}>{title}</p>
    <Collapse in={isOpen}>
      <div
        onClick={(e) => e.stopPropagation()} // Prevent collapse toggle
        style={{
          marginTop: "10px",
          padding: "2vh",
          borderRadius: "4px",
        }}
      >
        {children}
      </div>
    </Collapse>
  </div>
);

const InputField = ({ label, value, ...props }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "2vh",
    }}
  >
    <p style={{ width: "30%", color: "grey", fontSize: "0.875rem" }}>{label}</p>
    <TextField
      fullWidth
      defaultValue={value}
      variant="outlined"
      onClick={(e) => e.stopPropagation()} // Prevent collapse toggle
      {...props}
      InputProps={{ style: { fontSize: "0.875rem" } }} // Decreased font size
    />
  </div>
);

export default function Settings() {
  const [openPayPal, setOpenPayPal] = useState(false);
  const [openBank, setOpenBank] = useState(false);

  const togglePayPal = () => setOpenPayPal(!openPayPal);
  const toggleBank = () => setOpenBank(!openBank);

  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <p className="mediumtext" style={{ fontWeight: "bold" }}>
            Withdrawal &gt;&gt; Settings
          </p>
          <Divider />

          <CollapsibleSection
            title="PayPal"
            isOpen={openPayPal}
            toggle={togglePayPal}
          >
            <InputField label="Email" value="testuser@gmail.com" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "2vh",
              }}
            >
              <p style={{ width: "30%", color: "grey", fontSize: "0.875rem" }}>
                Default
              </p>
              <Switch
                defaultChecked
                onClick={(e) => e.stopPropagation()}
                style={{ marginLeft: 0 }} // Align switch to start
              />
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button variant="contained">Save</Button>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Bank"
            isOpen={openBank}
            toggle={toggleBank}
          >
            <InputField label="Bank Account Holder's name" value="Jamal" />
            <InputField label="Branch Name" value="Uttara" />
            <InputField label="Bank Account Number/IBAN" value="458796587456" />
            <InputField label="Branch City" value="Dhaka" />
            <InputField label="SWIFT Code" value="587469" />
            <InputField label="Branch Address" value="Uttara" />
            <InputField label="Bank Name" value="Dutch Bangla" />
            <InputField label="Country" value="Bangladesh" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "2vh",
              }}
            >
              <p style={{ width: "30%", color: "grey", fontSize: "0.875rem" }}>
                Default
              </p>
              <Switch
                defaultChecked
                onClick={(e) => e.stopPropagation()}
                style={{ marginLeft:0 }} // Align switch to start
              />
            </div>  
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button variant="contained">Save</Button>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
}
