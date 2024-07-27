import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import { Button, Divider, TextField, Box } from "@mui/material";


export default function BarCodePage() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <p className="mediumtext" style={{ fontWeight: "bold" }}>
            Products
          </p>
          <Divider />
          <div className="row">
            <div>
              <p>Add Products</p>
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained" style={{ marginLeft: "20px" }}>
                Submit
              </Button>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Search for products by name"
                variant="outlined"
                sx={{ width: "50vw" }} // Adjust the width here
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
