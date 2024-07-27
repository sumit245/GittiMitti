import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import {
  Button,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Withdraw() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <p className="mediumtext" style={{ fontWeight: "bold" }}>
            Withdrawal &gt;&gt; money
          </p>
          <Divider />
          <p className="mediumtext" style={{ color: "grey" }}>
            Send Withdrawal Request
          </p>
          <div style={{ width: "50vw" }}>
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <p className="paymentLabel" style={{ marginRight: "10px" }}>
                Payment method
              </p>
              <FormControl style={{ flex: 1 ,  marginLeft:"6vh"}}>
                <InputLabel>Select One</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="selectOne">Select One</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="bank">Bank</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
               
              }}
            >
              <p style={{ marginRight: "10px" }}>Enter amount</p>
              <TextField
                style={{ flex: 1 ,  marginLeft:"10vh"}}
                variant="outlined"
                placeholder="Enter amount"
                label="Amount"
                
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent:"space-around",
                width:"15vw"
              }}
            >
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
