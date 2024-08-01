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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Rating } from "@mui/material";
import RectangleIcon from "@mui/icons-material/Rectangle";

const SellerReviews = () => {
  const statuses = ["All", "Pending", "Approved", "Rejected"];
  const [filterDays, setFilterDays] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("");

  const handleFilterDaysChange = (event) => {
    setFilterDays(event.target.value);
  };

  const handleFilterStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };

  return (
    <Container className="review">
      <Box className="heading">
        <img
          src="https://www.pngkey.com/png/full/386-3865658_rectangle-square-shape-download-rectangle.png"
          alt="icon"
          className="heading-icon"
        />
        <Typography variant="h3" component="h1" gutterBottom>
          Reviews and Feedbacks
        </Typography>
      </Box>
      <Typography variant="h6" component="p" gutterBottom>
        Feedbacks you gave on the products that you bought.
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
          <Typography variant="h3" component="h2">
            Reviews
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

      <TableContainer component={Paper} sx={{ height: "600px", width: "100%" }}>
        <Table className="item">
          <TableHead className="product">
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                productName:
                  "Summer thin loose cartoon printed short-sleeved shirt",
                rating: 4,
                date: "2023-07-21",
                status: "Approved",
              },
              {
                productName:
                  "Product Summer New Fashion Geometry Pattern Printed Elegant High-Grade Loose Plus Size Women's Dress",
                rating: 5,
                date: "2023-07-20",
                status: "Pending",
              },
              {
                productName:
                  "Red T-Shirt Print Men and Women Short-sleeved Sport Fashion Clothing",
                rating: 3,
                date: "2023-07-20",
                status: "Pending",
              },
              {
                productName:
                  "Cotton Newborn Baby Long Sleeve Romper Jumpsuits Outfits Boy Toddler Handsome",
                rating: 2,
                date: "2023-07-20",
                status: "Pending",
              },
              {
                productName:
                  "Velvet Jewelry Organizer Gift Small Bag Touching Plush Drawstring Packaging Storage",
                rating: 1,
                date: "2023-07-20",
                status: "Pending",
              },
            ].map((row) => (
              <TableRow key={row.productName}>
                <TableCell>{row.productName}</TableCell>
                <TableCell>
                  <Rating value={row.rating} readOnly />
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SellerReviews;