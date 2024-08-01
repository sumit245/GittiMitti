const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");
const User = require("../models/userModel");
const { createSecretToken } = require("../utils/tokenGenerator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports.SendOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const secret = speakeasy.generateSecret().base32;
    const token = speakeasy.totp({
      secret,
      encoding: "base32",
      step: 60, // OTP is valid for 60 seconds
    });
    console.log("Generated OTP:", token);

    // Save secret in the user's document
    user.otpSecret = secret;
    user.otpCreatedAt = Date.now();
    await user.save();

    console.log("User after saving OTP secret:", user);

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

module.exports.VerifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log("User document before OTP verification:", user);

    if (!user.otpSecret) {
      return res.status(400).json({ message: "OTP secret not found for user" });
    }

    const now = Date.now();
    const timeElapsed = (now - user.otpCreatedAt) / 1000; // Time elapsed in seconds

    if (timeElapsed > 60) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    const isVerified = speakeasy.totp.verify({
      secret: user.otpSecret,
      encoding: "base32",
      token: otp,
      step: 60,
      window: 0,
    });

    if (!isVerified) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Update the user's verification status
    user.verified = true;
    user.otpSecret = undefined; // Optionally remove otpSecret for security
    user.otpCreatedAt = undefined;
    await user.save();

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(200).json({
      message: "OTP verified, login successful",
      success: true,
      user,
      token, // Include token in response
    });
  } catch (error) {
    console.error("Error in OTP verification:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.CreateAccount = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password, mobile, fname } = req.body;

    if (!email || !password || !mobile || !fname) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // if (password !== cpassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user with hashed password
    const user = await User.create({
      email,
      password: hashedPassword,
      mobile,
      fname,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User created successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(200).json({ message: "Login successful", success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// module.exports.ForgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) {
//       return res.status(400).json({ message: "Email is required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const token = createSecretToken(user._id);
//     user.resetPasswordToken = token;
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

//     await user.save();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Password Reset",
//       text:
//         `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
//         `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
//         `http://${req.headers.host}/reset/${token}\n\n` +
//         `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Password reset link sent to email" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
//   try {
//     const { password, cpassword } = req.body;
//     const { token } = req.params;

//     if (!token || !password || !cpassword) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     console.log(token);

//     if (password !== cpassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);

//     // Find user by token and ensure it hasn't expired
//     const user = await User.findOne({
//       _id: decoded.id,
//       resetPasswordToken: token,
//       resetPasswordExpires: { $gt: Date.now() },
//     });

//     if (!user) {
//       return res
//         .status(400)
//         .json({ message: "Password reset token is invalid or has expired" });
//     }

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Update user's password and remove reset token details
//     user.password = hashedPassword;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;

//     await user.save();

//     res.status(200).json({ message: "Password has been reset" });
//   } catch (error) {
//     console.error("Error resetting password:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// ResetPassword.jsx

module.exports.ResetPassword = async (req, res) => {
  try {
    console.log("req body :", req.body);

    const { password, email } = req.body;

    // if (!password || !cpassword) {
    //   return res.status(400).json({ message: "All fields are required" });
    // }

    // if (password !== cpassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    // Find user by email (or any identifier)

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password
    user.password = hashedPassword;

    // Save user
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.CheckPassword = async (req, res) => {
  console.log("Request body:", req.body);
  const { email, password } = req.body; // Extract email and password from request body

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Handle case where user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Log stored and input password
    console.log("Stored hashed password:", user.password.trim());
    console.log("Input password:", password.trim());

    // Compare password with hashed password in database
    const isMatch = await bcrypt.compare(password.trim(), user.password.trim());

    console.log("Password Match Result:", isMatch); // Should be true if passwords match

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Password is correct
    res.status(200).json({ message: "Password verified successfully" });
  } catch (error) {
    console.error("Error checking password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
