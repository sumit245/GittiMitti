import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

function createData(orderId, shipping, RefundReason, Quantity, Amount, Status) {
  return { orderId, shipping, RefundReason, Quantity, Amount, Status };
}

const rows = [
  createData("ORD001", "2024-07-20", "Damaged Item", 5, 150.0, "Shipped"),
  createData("ORD002", "2024-07-22", "Wrong Size", 3, 90.0, "Pending"),
  createData("ORD003", "2024-07-19", "Defective", 10, 300.0, "Delivered"),
  createData("ORD004", "2024-07-21", "No Refund", 7, 210.0, "Returned"),
  createData("ORD005", "2024-07-23", "Other", 2, 60.0, "Shipped"),
];

export default function Refunds() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox" style={{ height: "60vh" }}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <p className="mediumtext" style={{ fontWeight: "bold" }}>
              Refunds
            </p>
            <Button variant="outlined" startIcon={<FilterListIcon />}>
              Filter
            </Button>
          </div>
          <Divider />
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Shipping Date
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Refund Reason
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.orderId} style={{ height: "40px" }}>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.orderId}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.shipping}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.RefundReason}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.Quantity}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.Amount}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.Status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div
            className="row"
            style={{ justifyContent: "space-between", marginTop: "10px" }}
          >
            <p>Showing 1 to 5 of 5 entries</p>
            <div>
              <Button variant="outlined" style={{ marginRight: "5px" }}>
                Previous
              </Button>
              <Button variant="outlined">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
