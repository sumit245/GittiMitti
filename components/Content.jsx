import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // Import the question mark icon
import { Checkbox, FormControlLabel } from "@mui/material";

export default function Content() {
  const labels = [
    "Reset Dashboard",
    "Wallet",
    "Total Sales",
    "Orders",
    "Refund Request",
    "Products",
    "Rating",
    "Sales Per Day",
    "Monthly Order Status",
    "Most Sold Product",
    "Most Sold Brand",
    "Popular Customer",
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "4px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "20px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <HelpOutlineIcon style={{ fontSize: 24, marginRight: 10 }} /> 
            <h2 style={{ margin: 0 }}>Widget</h2> 
          </div>
          <p
            style={{
              margin: 0,
              textAlign: "right",
              color: "blue",
              fontSize: "14px",
            }}
          >
            Reset dashboard
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px", // Reduced horizontal spacing
            marginTop: "20px",
          }}
        >
          {labels.map((label, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
              }
              label={label}
              className="smalltext"
              style={{ marginBottom: "-2vh", color:"grey"}} // Reduced vertical spacing between checkboxes
            />
          ))}
        </div>
      </div>
    </div>
  );
}
