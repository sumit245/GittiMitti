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

function createData(
  reference,
  player,
  currency,
  method,
  amount,
  fees,
  discount,
  total,
  type,
  status,
  date
) {
  return {
    reference,
    player,
    currency,
    method,
    amount,
    fees,
    discount,
    total,
    type,
    status,
    date,
  };
}

const rows = [
  createData("REF123", "John Doe", "USD", "Bank Transfer", "100", "5", "0", "95", "Withdrawal", "Pending", "2023-07-20"),
  createData("REF124", "Jane Smith", "EUR", "PayPal", "50", "2", "5", "43", "Deposit", "Accepted", "2023-07-19"),
  createData("REF125", "Alice Johnson", "GBP", "Credit Card", "70", "3", "0", "67", "Withdrawal", "Pending", "2023-07-18"),
  createData("REF126", "Robert Brown", "USD", "Bank Transfer", "200", "10", "20", "170", "Deposit", "Accepted", "2023-07-17"),
  createData("REF127", "Emily Davis", "EUR", "PayPal", "30", "1", "0", "29", "Withdrawal", "Pending", "2023-07-16"),
  createData("REF128", "Michael Wilson", "USD", "Bank Transfer", "150", "7", "10", "133", "Deposit", "Accepted", "2023-07-15"),
  createData("REF129", "Sarah Taylor", "GBP", "Credit Card", "90", "4", "0", "86", "Withdrawal", "Pending", "2023-07-14"),
  createData("REF130", "David Miller", "USD", "Bank Transfer", "120", "6", "5", "109", "Deposit", "Accepted", "2023-07-13"),
  createData("REF131", "Laura Wilson", "EUR", "PayPal", "80", "2", "0", "78", "Withdrawal", "Pending", "2023-07-12"),
  createData("REF132", "James Anderson", "USD", "Bank Transfer", "170", "8", "10", "152", "Deposit", "Accepted", "2023-07-11"),
  createData("REF133", "Patricia Moore", "GBP", "Credit Card", "60", "3", "0", "57", "Withdrawal", "Pending", "2023-07-10"),
  createData("REF134", "Christopher White", "USD", "Bank Transfer", "110", "5", "5", "100", "Deposit", "Accepted", "2023-07-09"),
  createData("REF135", "Jessica Lee", "EUR", "PayPal", "40", "1", "0", "39", "Withdrawal", "Pending", "2023-07-08"),
  createData("REF136", "Brian Harris", "USD", "Bank Transfer", "130", "6", "10", "114", "Deposit", "Accepted", "2023-07-07"),
  createData("REF137", "Nancy Clark", "GBP", "Credit Card", "75", "3", "0", "72", "Withdrawal", "Pending", "2023-07-06"),
];

export default function Transactions() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox" style={{ height: "120vh" }}>
        <div
            className="row"
            style={{ justifyContent: "space-between", margin: "0" }}
          >
            <p className="mediumtext" style={{ fontWeight: "bold" }}>
             Transactions
            </p>
            <div className="row">
             
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                className="buttons"
              >
                Filter
              </Button>
            </div>
          </div>

          <div
            className="row"
            style={{ justifyContent: "space-between", marginTop: "-2vh" }}
          >
            <div
              className="row"
              style={{ marginRight: "10px", marginTop: "-1vh" }}
            >
              <p style={{ marginRight: "5px" }}>All(2) | </p>
              <p style={{ marginRight: "5px", color: "blue" }}>Pending(1) |</p>
              <p style={{ marginRight: "5px", color: "blue" }}>Accepted(1)</p>
            </div>
          </div>
          <div
            className="row"
            style={{ justifyContent: "space-between", marginTop: "-2vh" }}
          >
           
          </div>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Reference",
                    "Player",
                    "Currency",
                    "Method",
                    "Amount",
                    "Fees",
                    "Discount",
                    "Total",
                    "Type",
                    "Status",
                    "Date",
                  ].map((header) => (
                    <TableCell
                      key={header}
                      style={{
                        fontWeight: "bold",
                        backgroundColor: "#f0f0f0",
                        color: "#424242",
                        padding: "10px",
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.reference} style={{ height: "40px" }}>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.reference}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.player}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.currency}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.method}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.amount}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.fees}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.discount}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.total}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.type}
                    </TableCell>
                    <TableCell
                      className={row.status === "Pending" ? "status-pending" : "status-accepted"}
                      style={{ color: "#424242", padding: "10px" }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="row" style={{ justifyContent: "space-between", marginTop: "10px" }}>
            <div>
              <p>Showing 1 to 15 of 15 entries</p>
            </div>
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
