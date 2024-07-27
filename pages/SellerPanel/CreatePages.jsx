import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import { Button, Divider, TextField } from "@mui/material";

export default function CreatePages() {
  return (
   

<div className="pageContainer">
<PermanentDrawerLeft />
<div className="greyBackground">
  <div className="sellerBox">
    <p className="mediumtext" style={{ fontWeight: "bold" }}>Products</p>
    <Divider />
    
    {/* Add FullWidthTabs below the Divider */}
    {/* <FullWidthTabs /> */}
  </div>
</div>
</div>
  );
}
