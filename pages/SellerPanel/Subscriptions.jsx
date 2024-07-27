import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
} from "@mui/material";

function createData(code, price, renewable, payment, startedOn, productCreated) {
  return { code, price, renewable, payment, startedOn, productCreated };
}

const row = createData("SUB001", "$20", "Yes", "Credit Card", "2024-01-15", "2024-01-01");

export default function Subscriptions() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox" style={{ padding: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
            <div style={{ padding: "2vh", width: "70%" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <Typography variant="h6" style={{ fontWeight: "bold", marginRight: "1vh" }}>
                  Subscriptions
                </Typography>
                <Chip
                  label="Pending"
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              </div>

              <TableContainer component={Paper} style={{ marginTop: "20px", boxShadow: "none" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {["Code", "Price", "Renewable", "Payment", "Started on", "Product created"].map((header) => (
                        <TableCell
                          key={header}
                          style={{
                            fontWeight: "bold",
                            padding: "10px",
                            borderBottom: "none", // Remove horizontal lines
                          }}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {Object.values(row).map((value, index) => (
                        <TableCell
                          key={index}
                          style={{
                            padding: "10px",
                            borderBottom: "none", // Remove horizontal lines
                          }}
                        >
                          {value}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div
              style={{
                backgroundColor: "lightgrey",
                width: "30%",
                padding: "2vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "30vh",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  padding: "3vh",
                  fontWeight: "bold",
                }}
              >
                Next billing date: 18-08-2024
              </Typography>
              <a
                href="/history"
                style={{
                  textDecoration: "underline",
                  marginTop: "10px",
                  color: "blue",
                }}
              >
                History
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
