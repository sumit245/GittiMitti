import React, { useState } from "react";
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
  TextField
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GetAppIcon from "@mui/icons-material/GetApp";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useNavigate } from "react-router-dom";

function createData(
  currency,
  method,
  fees,
  total,
  type,
  date,
  updatedAt,
  status
) {
  return { currency, method, fees, total, type, date, updatedAt, status };
}

const rows = [
  createData(
    "USD",
    "Bank Transfer",
    "5",
    "100",
    "Withdrawal",
    "2023-07-20",
    "2023-07-20",
    "Pending"
  ),
  createData(
    "EUR",
    "PayPal",
    "2",
    "50",
    "Withdrawal",
    "2023-07-19",
    "2023-07-19",
    "Accepted"
  ),
  createData(
    "GBP",
    "Credit Card",
    "3",
    "70",
    "Withdrawal",
    "2023-07-18",
    "2023-07-18",
    "Pending"
  ),
];

export default function WithdrawalPage() {

  const navigate = useNavigate();

  const goToSettings=()=>{
    navigate("/settings");
  }
  const gotToWithdraw=()=>{
    navigate("/withdraw");
  }

   const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <div
            className="row"
            style={{ justifyContent: "space-between", margin: "0" }}
          >
            <p className="mediumtext" style={{ fontWeight: "bold" }}>
              Withdrawal History
            </p>
            <div className="row">
              <Button
                variant="outlined"
                startIcon={<SettingsIcon />}
                className="buttons"
                onClick={goToSettings}
              >
                Settings
              </Button>
              <Button
                variant="outlined"
                startIcon={<AttachMoneyIcon />}
                className="buttons"
                onClick={gotToWithdraw}
              >
                Withdraw
              </Button>
              <Button
                variant="outlined"
                startIcon={<GetAppIcon />}
                className="buttons"
              >
                Export
              </Button>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                className="buttons"
                onClick={toggleFilter}
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
          <Divider />
          {filterOpen && (
            <div style={{ marginTop: "20px",   borderRadius: "4px" }}>
              <TextField
                label="Search Keywords..."
                variant="outlined"
                fullWidth
                
              />
            </div>
             )}
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
                    Currency
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Method
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Fees
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Updated At
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
                  <TableRow key={row.currency} style={{ height: "40px" }}>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.currency}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.method}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.fees}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.total}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.type}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.date}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.updatedAt}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      <span
                        style={{
                          backgroundColor:
                            row.status === "Pending"
                              ? "lightyellow"
                              : row.status === "Accepted"
                              ? "#d4edda"
                              : "transparent",
                          padding: "4px",
                          borderRadius: "4px",
                        }}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div
            className="row"
            style={{ marginTop: "20px", justifyContent: "space-between" }}
          >
            <p>Showing 1 to 2 of 2 entries</p>
            <div>
              <Button variant="outlined">Previous</Button>
              <Button variant="outlined">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
