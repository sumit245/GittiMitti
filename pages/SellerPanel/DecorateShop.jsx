import React from "react";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import { Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // Import the copy icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import MetaInformationButtons from "./MetaInformationButtons";
import { useNavigate } from "react-router-dom";

export default function DecorateShop() {
  const navigate = useNavigate();

  const handleAddPage = () =>{
    navigate("/createPages");
  }
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox" style={{ height: "55vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              className="mediumtext"
              style={{ fontWeight: "bold", color: "grey" }}
            >
              HomePages
            </p>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddPage}
              sx={{
                backgroundColor: "#ffff", // Initial white background
                color: "#000", // Initial black text color
                border: "1px solid #000", // Border color
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#0000FF", // Blue background on hover
                  color: "#FFFFFF", // White text color on hover
                },
              }}
            >
              Add Homepage
            </Button>
          </div>
          <Divider />
          <div
            className="sellerBox"
            style={{ width: "26vw", marginTop: "3vh", height: "36vh" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="mediumtext">StoreTest</p>
              <ContentCopyIcon style={{ cursor: "pointer" }} />
            </div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00ACC1", // Teal color
                color: "white", // White text
                borderRadius: "20px", // Rounded corners
                padding: "1px 10px", // Padding
                textTransform: "none", // Keep the text as is
                marginTop: "-3vh",
                minWidth: "50px", // Minimum width
                "&:hover": {
                  backgroundColor: "#008394", // Darker teal on hover
                },
              }}
            >
              Active
            </Button>
            <div>
                <p style={{marginBottom:"0", fontSize:"14px"}}>Meta Informations:</p>
                <p style={{marginBottom:"0" , fontSize:"14px"}}>Title</p>
                <p style={{ fontSize:"14px"}}>Description</p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <MetaInformationButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
