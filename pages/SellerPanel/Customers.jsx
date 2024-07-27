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
  TextField,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

function createData(customer, email, totalOrders) {
  return { customer, email, totalOrders };
}

const rows = [
  createData("John Doe", "john.doe@example.com", 5),
  createData("Jane Smith", "jane.smith@example.com", 3),
  createData("Alice Johnson", "alice.johnson@example.com", 10),
  createData("Robert Brown", "robert.brown@example.com", 7),
  createData("Emily Davis", "emily.davis@example.com", 2),
];

export default function Customers() {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <p className="mediumtext" style={{ fontWeight: "bold" }}>
              Customers
            </p>
            <Button variant="outlined" startIcon={<FilterListIcon />} onClick={toggleFilter}>
              Filter
            </Button>
          </div>
          <Divider />
          {filterOpen && (
            <div style={{ marginTop: "10px",   borderRadius: "4px" }}>
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
                    Customer
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Total Orders
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.email} style={{ height: "40px" }}>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.customer}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.email}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.totalOrders}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="row" style={{ justifyContent: "space-between", marginTop: "10px" }}>
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
