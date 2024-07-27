import React, { useState } from "react";
import "./Form.css";

const SellerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    occupation: "",
    businessName: "",
    businessAddress: "",
    taxId: "",
    storeName: "",
    businessType: "",
    cardNumber: "",
    gstNumber: "",
    expiryMonth: "",
    expiryYear: "",
    accountHolderName: "",
    categories: [],
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    let newCategories = [...formData.categories];
    if (checked) {
      newCategories.push(value);
    } else {
      newCategories = newCategories.filter((category) => category !== value);
    }
    setFormData({
      ...formData,
      [name]: newCategories,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length === 0) {
      console.log("Form data submitted:", formData);
      setSubmitted(true);
    } else {
      setErrors(stepErrors);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of Birth is required";
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.pincode) newErrors.pincode = "Pincode is required";
      if (!formData.occupation) newErrors.occupation = "Occupation is required";
    }
    if (step === 2) {
      if (!formData.storeName) newErrors.storeName = "Store Name is required";
      if (!formData.businessType)
        newErrors.businessType = "Business Type is required";
      if (!formData.businessAddress)
        newErrors.businessAddress = "Business Address is required";
    }
    if (step === 3) {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card Number is required";
      if (!formData.expiryMonth)
        newErrors.expiryMonth = "Expiry Month is required";
      if (!formData.expiryYear)
        newErrors.expiryYear = "Expiry Year is required";
      if (!formData.accountHolderName)
        newErrors.accountHolderName = "Account Holder Name is required";
    }
    if (step === 4) {
      if (formData.categories.length === 0)
        newErrors.categories = "At least one category must be selected";
    }
    return newErrors;
  };

  if (submitted) {
    return (
      <div className="thank-you-popup">
        <h2>Thank you for your submission!</h2>
      </div>
    );
  }

  return (
    <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
      <div className="step-indicator">
        <div className={currentStep >= 1 ? "active" : ""}></div>
        <div className={currentStep >= 2 ? "active" : ""}></div>
        <div className={currentStep >= 3 ? "active" : ""}></div>
        <div className={currentStep >= 4 ? "active" : ""}></div>
      </div>

      {currentStep === 1 && (
        <div>
          <h2>Personal Information</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
            {errors.dateOfBirth && (
              <span className="error">{errors.dateOfBirth}</span>
            )}
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
          <label>
            Address Line 2:
            <input
              type="text"
              name="address2"
              placeholder="Enter your address line 2"
              value={formData.address2}
              onChange={handleChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            {errors.state && <span className="error">{errors.state}</span>}
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </label>
          <label>
            Pincode:
            <input
              type="text"
              name="pincode"
              placeholder="Enter your pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
          </label>
          <label>
            Occupation:
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            >
              <option value="">Select Occupation</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
            {errors.occupation && (
              <span className="error">{errors.occupation}</span>
            )}
          </label>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2>Business Information</h2>
          <label>
            Store Name:
            <input
              type="text"
              name="storeName"
              placeholder="Enter your store name"
              value={formData.storeName}
              onChange={handleChange}
              required
            />
            {errors.storeName && (
              <span className="error">{errors.storeName}</span>
            )}
          </label>
          <label>
            Business Type:
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              <option value="">Select Business Type</option>
              <option value="retail">Retail</option>
              <option value="wholesale">Wholesale</option>
              <option value="service">Service</option>
            </select>
            {errors.businessType && (
              <span className="error">{errors.businessType}</span>
            )}
          </label>
          <label>
            Business Address:
            <input
              type="text"
              name="businessAddress"
              placeholder="Enter your business address"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
            {errors.businessAddress && (
              <span className="error">{errors.businessAddress}</span>
            )}
          </label>
          <label>
            Business Name:
            <input
              type="text"
              name="businessName"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={handleChange}
            />
          </label>
          <label>
            Tax ID:
            <input
              type="text"
              name="taxId"
              placeholder="Enter your tax ID"
              value={formData.taxId}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2>Payment Information</h2>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter your card number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            {errors.cardNumber && (
              <span className="error">{errors.cardNumber}</span>
            )}
          </label>
          <label>
            Expiry Month:
            <input
              type="text"
              name="expiryMonth"
              placeholder="MM"
              value={formData.expiryMonth}
              onChange={handleChange}
              required
            />
            {errors.expiryMonth && (
              <span className="error">{errors.expiryMonth}</span>
            )}
          </label>
          <label>
            Expiry Year:
            <select
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() + i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            {errors.expiryYear && (
              <span className="error">{errors.expiryYear}</span>
            )}
          </label>
          <label>
            Account Holder Name:
            <input
              type="text"
              name="accountHolderName"
              placeholder="Enter the account holder name"
              value={formData.accountHolderName}
              onChange={handleChange}
              required
            />
            {errors.accountHolderName && (
              <span className="error">{errors.accountHolderName}</span>
            )}
          </label>
          <label>
            GST Number:
            <input
              type="text"
              name="gstNumber"
              placeholder="Enter your GST number"
              value={formData.gstNumber}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {currentStep === 4 && (
        <div>
          <h2>Categories</h2>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="electronics"
              checked={formData.categories.includes("electronics")}
              onChange={handleCheckboxChange}
            />
            Concrete
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="fashion"
              checked={formData.categories.includes("fashion")}
              onChange={handleCheckboxChange}
            />
            Sreel
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="home"
              checked={formData.categories.includes("home")}
              onChange={handleCheckboxChange}
            />
            Stone
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="beauty"
              checked={formData.categories.includes("beauty")}
              onChange={handleCheckboxChange}
            />
            Sand
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="sports"
              checked={formData.categories.includes("sports")}
              onChange={handleCheckboxChange}
            />
            Bricks
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="toys"
              checked={formData.categories.includes("toys")}
              onChange={handleCheckboxChange}
            />
            stone dus
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="automotive"
              checked={formData.categories.includes("automotive")}
              onChange={handleCheckboxChange}
            />
            Automotive
          </label>
          {errors.categories && (
            <span className="error">{errors.categories}</span>
          )}
        </div>
      )}

      <div className="button-container">
        {currentStep > 1 && <button onClick={handlePrevious}>Previous</button>}
        {currentStep < 4 && <button onClick={handleNext}>Next</button>}
        {currentStep === 4 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default SellerForm;