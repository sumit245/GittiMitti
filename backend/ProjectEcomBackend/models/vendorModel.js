// models/vendor.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const vendorSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxLength: 10,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verified: {
    type: Boolean,
    default: false,
  },
  otpSecret: {
    type: String,
  },
  otpCreatedAt: {
    type: Date,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
