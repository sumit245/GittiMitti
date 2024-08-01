const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");
const Vendor = require("../models/vendorModel"); // Adjust the path as needed
const { createSecretToken } = require("../utils/tokenGenerator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports.SSendOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.status(400).json({ message: "Vendor not found" });
    }

    const secret = speakeasy.generateSecret().base32;
    const token = speakeasy.totp({
      secret,
      encoding: "base32",
      step: 60, // OTP is valid for 60 seconds
    });
    console.log("Generated OTP:", token);

    // Save secret in the vendor's document
    vendor.otpSecret = secret;
    vendor.otpCreatedAt = Date.now();
    await vendor.save();

    console.log("Vendor after saving OTP secret:", vendor);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${token}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SVerifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.status(400).json({ message: "Vendor not found" });
    }

    console.log("Vendor document before OTP verification:", vendor);

    if (!vendor.otpSecret) {
      return res
        .status(400)
        .json({ message: "OTP secret not found for vendor" });
    }

    const now = Date.now();
    const timeElapsed = (now - vendor.otpCreatedAt) / 1000; // Time elapsed in seconds

    if (timeElapsed > 60) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    const isVerified = speakeasy.totp.verify({
      secret: vendor.otpSecret,
      encoding: "base32",
      token: otp,
      step: 60,
      window: 0,
    });

    if (!isVerified) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Update the vendor's verification status
    vendor.verified = true;
    vendor.otpSecret = undefined; // Optionally remove otpSecret for security
    vendor.otpCreatedAt = undefined;
    await vendor.save();

    const token = createSecretToken(vendor._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(200).json({
      message: "OTP verified, login successful",
      success: true,
      vendor,
      token, // Include token in response
    });
  } catch (error) {
    console.error("Error in OTP verification:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SCreateAccount = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password, mobile, fname } = req.body;

    if (!email || !password || !mobile || !fname) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.json({ message: "Vendor already exists" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create vendor with hashed password
    const vendor = await Vendor.create({
      email,
      password: hashedPassword,
      mobile,
      fname, // Changed from companyName to fname
    });

    const token = createSecretToken(vendor._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "Vendor created successfully", success: true, vendor });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.status(400).json({ message: "Vendor not found!" });
    }

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = createSecretToken(vendor._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(200)
      .json({ message: "Login successful", success: true, vendor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SResetPassword = async (req, res) => {
  try {
    console.log("req body :", req.body);

    const { password, email } = req.body;

    if (!password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find vendor by email
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res.status(400).json({ message: "Vendor not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update vendor's password
    vendor.password = hashedPassword;

    // Save vendor
    await vendor.save();

    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SCheckPassword = async (req, res) => {
  console.log("Request body:", req.body);
  const { email, password } = req.body;

  try {
    // Find vendor by email
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    console.log("Stored hashed password:", vendor.password.trim());
    console.log("Input password:", password.trim());

    // Compare password with hashed password in database
    const isMatch = await bcrypt.compare(
      password.trim(),
      vendor.password.trim()
    );

    console.log("Password Match Result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Password verified successfully" });
  } catch (error) {
    console.error("Error checking password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
