import React from "react";
import '../../src/dashboard.css'
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Button,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Orders = () => {
  const statuses = ["All", "Pending", "Shipped", "Delivered", "Cancelled"];
  const [filterDays, setFilterDays] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("");

  const handleFilterDaysChange = (event) => {
    setFilterDays(event.target.value);
  };

  const handleFilterStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Shipped":
        return "info";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const orders = [
    {
      orderId: "123456",
      date: "2023-07-21",
      status: "Delivered",
      amount: "$120.00",
    },
    {
      orderId: "789012",
      date: "2023-07-20",
      status: "Shipped",
      amount: "$85.50",
    },
    {
      orderId: "345678",
      date: "2023-07-20",
      status: "Pending",
      amount: "$45.00",
    },
    {
      orderId: "901234",
      date: "2023-07-20",
      status: "Cancelled",
      amount: "$32.00",
    },
    {
      orderId: "674456",
      date: "2023-08-21",
      status: "Delivered",
      amount: "$130.00",
    },
    {
      orderId: "674456",
      date: "2023-08-21",
      status: "Delivered",
      amount: "$130.00",
    },
    {
      orderId: "674456",
      date: "2023-08-21",
      status: "Delivered",
      amount: "$130.00",
    },
  ];

  return (
    <Container className="orders">
      <Box className="heading">
        <img
          src="https://www.pngkey.com/png/full/386-3865658_rectangle-square-shape-download-rectangle.png"
          alt="icon"
          className="heading-icon"
        />
        <Typography variant="h3" gutterBottom>
          Your Orders
        </Typography>
      </Box>
      <Typography variant="h6" component="p" gutterBottom>
        Take a look at all the orders you made, their status and much more..
      </Typography>
      <Grid container spacing={3} alignItems="center" sx={{ marginBottom: 3 }}>
        <Grid
          item
          xs={2}
          sx={{
            height: "250px", // Set the height
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h3">
            ORDER LIST
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            height: "100px", // Set the height
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            className="filter"
            select
            label="Filter By"
            value={filterDays}
            onChange={handleFilterDaysChange}
            fullWidth
          >
            {[7, 30, 90].map((option) => (
              <MenuItem key={option} value={option}>
                {`${option} Days`}
              </MenuItem>
            ))}
            <MenuItem key="all" value="all">
              All
            </MenuItem>
          </TextField>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            height: "100px", // Set the height
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            select
            label="All Status"
            value={filterStatus}
            onChange={handleFilterStatusChange}
            fullWidth
          >
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ height: "700px", width: "110%" }}>
        <Table className="item">
          <TableHead className="product">
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
              {/* <TableCell>View</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row.orderId}>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={getColor(row.status)} />
                </TableCell>
                <TableCell>{row.amount}</TableCell>

                <TableCell>
                  <Button variant="contained" color="primary">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;