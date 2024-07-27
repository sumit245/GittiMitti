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

export default function SUB001() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div className="greyBackground3">
        <div
          style={{
            width: "95%",
            backgroundColor: "#fff",
            height: "10vh",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            boxSizing: "border-box",
            marginBottom: "20px", // Spacing between boxes
            marginTop: "5vh",
          }}
        >
          <p className="mediumtext">Invoice</p>
        </div>
        <div className="sellerBox" style={{ marginTop: "0" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "10px" }} // Space between buttons
              >
                Pending
              </Button>
              <Button variant="outlined" color="secondary">
                Unpaid
              </Button>
            </div>
            <div>
              <Button variant="outlined" color="primary">
                PDF
              </Button>
            </div>
          </div>
          <Divider style={{ margin: "4vh" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="greyText"
          >
            {/* row1 */}
            <div>
              <p>Martvill</p>
              <p>City Hall Park Path, Azimpur</p>
              <p>Web: https://demo.martvill.techvill.net</p>
            </div>
            {/* row1 */}
            <div>
              <p>Bill To</p>
              <p>Mrss</p>
              <p>No</p>
            </div>
            {/* row1 */}
            <div>
              <p>Code: FUNHAA8VK3</p>
              <p>Billing Date: 19-07-2024</p>
              <p>Next Billing Date: 18-08-2024</p>
            </div>
          </div>

          {/* Material-UI Table */}
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ backgroundColor: "lightblue", fontWeight: "bold" }}
                  >
                    Plan
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "lightblue", fontWeight: "bold" }}
                  >
                    Billing Cycle
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "lightblue", fontWeight: "bold" }}
                  >
                    Renewable
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "lightblue", fontWeight: "bold" }}
                  >
                    Tax (%)
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "lightblue", fontWeight: "bold" }}
                  >
                    Total ($)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ color: "grey" }}>Unknown</TableCell>
                  <TableCell style={{ color: "grey" }}>Monthly</TableCell>
                  <TableCell style={{ color: "grey" }}>Yes</TableCell>
                  <TableCell style={{ color: "grey" }}>0</TableCell>
                  <TableCell style={{ color: "grey" }}>250,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "grey" }}>Sub Total</TableCell>
                  <TableCell style={{ color: "grey" }}>250,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "grey" }}>
                    Other Discount
                  </TableCell>
                  <TableCell style={{ color: "grey" }}>0.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "grey" }}>Grand Total</TableCell>
                  <TableCell style={{ color: "grey" }}>250,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "grey" }}>Paid</TableCell>
                  <TableCell style={{ color: "grey" }}>0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "grey" }}>Due</TableCell>
                  <TableCell style={{ color: "grey" }}>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
