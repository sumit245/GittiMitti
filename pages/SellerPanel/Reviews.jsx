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
  IconButton,
  Checkbox
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(comments, product, customer, rating, status, created) {
  return { comments, product, customer, rating, status, created };
}

const rows = [
  createData(
    "Great product, fast delivery.",
    "Laptop",
    "John Doe",
    5,
    "Accepted",
    "2023-07-20"
  ),
  createData(
    "Not satisfied with the quality.",
    "Smartphone",
    "Jane Smith",
    2,
    "Pending",
    "2023-07-19"
  ),
  createData(
    "Excellent service and product.",
    "Tablet",
    "Alice Johnson",
    4,
    "Accepted",
    "2023-07-18"
  ),
];

export default function Reviews() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground">
        <div className="sellerBox">
          <p className="mediumtext" style={{ fontWeight: "bold" }}>
            Reviews
          </p>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="row" style={{ marginRight: "10px" }}>
              <p style={{ marginRight: "5px" }}>All(3) | </p>
              <p style={{ marginRight: "5px" }}>Pending(1) |</p>
              <p style={{ marginRight: "5px" }}>Accepted(2)</p>
            </div>
            <div className="row">
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
              >
                Filter
              </Button>
            </div>
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
                    <Checkbox
                      defaultChecked
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Comments
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Product
                  </TableCell>
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
                    Rating
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
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Created
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#f0f0f0",
                      color: "#424242",
                      padding: "10px",
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} style={{ height: "40px" }}>
                    <TableCell style={{ padding: "10px" }}>
                    <Checkbox
                      defaultChecked
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.comments}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.product}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.customer}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.rating}
                    </TableCell>
                    <TableCell
                      className={row.status === "Pending" ? "status-pending" : "status-accepted"}
                      style={{ color: "#424242", padding: "10px" }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell style={{ color: "#424242", padding: "10px" }}>
                      {row.created}
                    </TableCell>
                    <TableCell style={{ padding: "10px" }}>
                      <div className="row" >
                        <IconButton>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </div>
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
            <p>Showing 1 to 3 of 3 entries</p>
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
