import React from "react";
import '../../src/dashboard.css'
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

function createData(invoice, date, amount, status) {
  return { invoice, date, amount, status };
}

const rows = [
  createData("INV001", "2023-07-01", "$250", "Completed"),
  createData("INV002", "2023-07-02", "$150", "Pending"),
  createData("INV003", "2023-07-03", "$300", "Completed"),
  createData("INV004", "2023-07-04", "$200", "Cancelled"),
  createData("INV005", "2023-07-05", "$350", "Completed"),
  createData("INV006", "2023-07-09", "$250", "Completed"),
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box className="box">
      <Box className="greeting">
        <img
          src="https://www.pngkey.com/png/full/386-3865658_rectangle-square-shape-download-rectangle.png"
          alt="icon"
          className="greeting-icon"
        />
        <Typography variant="h3" component="div">
          Good Morning, Agatha Williams
        </Typography>
      </Box>
      <Typography variant="h5" component="div" className="subheading">
        Here is what's happening with your profile today.
      </Typography>
      <Grid container className="grid-container" spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid-item grid-item-sm-6 grid-item-md-3"
        >
          <Card
            className="card"
            onClick={() => navigate("/orders")}
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography variant="h5" component="div" className="typography">
                <ShoppingCartIcon className="icon icon-orders" />
                Total Orders
              </Typography>
              <Typography variant="h4" className="typography-secondary">
                120
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid-item grid-item-sm-6 grid-item-md-3 grid-item-center"
        >
          <Card
            className="card"
            onClick={() => navigate("/wishlist")}
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography variant="h5" component="div" className="typography">
                <FavoriteIcon className="icon icon-wishlist" />
                Your Wishlist
              </Typography>
              <Typography variant="h4" className="typography-secondary">
                15
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid-item grid-item-sm-6 grid-item-md-3"
        >
          <Card
            className="card"
            onClick={() => navigate("/reviews")}
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography variant="h5" component="div" className="typography">
                <RateReviewIcon className="icon icon-reviews" />
                Your Reviews
              </Typography>
              <Typography variant="h4" className="typography-secondary">
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid-item grid-item-sm-6 grid-item-md-3"
        >
          <Card
            className="card"
            onClick={() => navigate("/productincart")}
            style={{ cursor: "pointer" }}
          >
            <CardContent className="card-content">
              <Typography variant="h5" component="div" className="typography">
                <AssignmentIcon className="icon icon-cart" />
                Product in Cart
              </Typography>
              <Typography variant="h4" className="typography-secondary">
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" component="div" className="heading">
        Last Orders
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="gray-header">
                <ReceiptIcon className="icon" /> Invoice No
              </TableCell>
              <TableCell align="right" className="gray-header">
                <DateRangeIcon className="icon" /> Order Date
              </TableCell>
              <TableCell align="right" className="gray-header">
                <MonetizationOnIcon className="icon" /> Amount
              </TableCell>
              <TableCell align="right" className="gray-header">
                <EventAvailableIcon className="icon" /> Status
              </TableCell>
              <TableCell align="right" className="gray-header">
                <VisibilityIcon className="icon" /> View
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell component="thr" scope="row">
                  {row.invoice}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.status}</TableCell>

                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;