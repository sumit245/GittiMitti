// src/api.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth"; // Replace with your backend URL

export const sendOTP = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/sendOTP`, { email });
    return response.data;
  } catch (error) {
    // Log full error details
    console.error("Error details:", {
      message: error.message,
      response: error.response,
      request: error.request,
      config: error.config,
    });

    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "An error occurred");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const verifyOTP = async (email, otp) => {
  try {
    const response = await axios.post(`${API_URL}/verifyOTP`, { email, otp });
    return response.data;
  } catch (error) {
    console.error("Error details:", error); // Detailed error logging
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "An error occurred");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signIn`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createAccount = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/createAccount`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updatePassword = async (password , email) => {
  const response = await fetch(`${API_URL}/reset-password`, {
    // Replace with your API URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password , email}),
  });

  if (!response.ok) {
    throw new Error("Failed to update password");
  }

  return response.json();
};

export const checkPassword = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/checkPassword`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while checking password"
    );
  }
};
