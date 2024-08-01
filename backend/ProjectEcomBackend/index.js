const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const vendorAuthRoute = require("./routes/vendorAuthRoutes");
require("dotenv").config();

const { MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

const app = express();
app.use(express.json()); // Middleware to parse JSON

app.use(cors()); // Enable CORS for all routes

const PORT = 8000;

// Use routes
app.use("/api/auth", authRoute);
app.use("/api/vendor/auth", vendorAuthRoute); // Add the new route

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`));
