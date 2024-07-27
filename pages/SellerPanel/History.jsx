import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns = [
  "Subscription Code",
  "Plan",
  "Activation Date",
  "Next Billing",
  "Price",
  "Billing Cycle",
  "Payment Status",
  "Status",
  "Action",
];

const rows = [
  { code: "sUB001", plan: "Basic", activationDate: "2024-01-15", nextBilling: "2024-02-15", price: "$20", billingCycle: "Monthly", paymentStatus: "Paid", status: "Active", link: "/details/SUB001" },
];

export default function History() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleViewClick = () => {
    navigate("/sUB001");
  };

  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <div className="row" style={{ justifyContent: "space-between", margin: "0" }}>
            <p className="mediumtext" style={{ fontWeight: "bold" }}>History</p>
            <div className="row" style={{ justifyContent: "space-between", marginTop: "10px" }}>
              <div>
                <Select
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                  style={{ marginRight: "10px" }}
                >
                  {[10, 25, 50, 100].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <IconButton onClick={() => console.log("Refresh")}>
                <RefreshIcon />
              </IconButton>
            </div>
          </div>

          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((header) => (
                    <TableCell
                      key={header}
                      style={{ fontWeight: "bold", backgroundColor: "#f0f0f0", color: "#424242", padding: "10px" }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.code} style={{ height: "40px" }}>
                    {Object.entries(row).map(([key, value], index) => (
                      <TableCell key={index} style={{ color: "#424242", padding: "10px" }}>
                        {key === "link" ? (
                          <IconButton onClick={handleViewClick}>
                            <VisibilityIcon />
                          </IconButton>
                        ) : (
                          value
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="row" style={{ justifyContent: "space-between", marginTop: "10px" }}>
            <div>
              <p>Showing 1 to {rowsPerPage} of {rows.length} entries</p>
            </div>
            <div>
              <Button variant="outlined" style={{ marginRight: "5px" }}>Previous</Button>
              <Button variant="outlined">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
