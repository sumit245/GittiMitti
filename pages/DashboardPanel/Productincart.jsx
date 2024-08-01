import React from "react";
import '../../src/dashboard.css'
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const steps = ["My Cart", "Checkout", "Payment", "Order Complete"];

const Productincart = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [coupon, setCoupon] = React.useState("");
  const [subtotal, setSubtotal] = React.useState(100); // Example value
  const [total, setTotal] = React.useState(100); // Example value
  const [shipping, setShipping] = React.useState("localPickup"); // Shipping selection
  const [tax, setTax] = React.useState(10); // Example tax value
  const [paymentGateway, setPaymentGateway] = React.useState(""); // Payment gateway selection
  const [quantity, setQuantity] = React.useState(1); // Product quantity
  const [tabValue, setTabValue] = React.useState(0); // Tab selection for Shipping Information

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };

  const applyCoupon = () => {
    // Logic to apply coupon and update total
    console.log("Coupon applied:", coupon);
    // Update total based on coupon logic
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
    // Update total based on shipping selection
    const shippingCost = event.target.value === "localPickup" ? 0 : 15; // Example values
    setTotal(subtotal + shippingCost + tax);
  };

  const handlePaymentGatewayChange = (event) => {
    setPaymentGateway(event.target.value);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotal((prevTotal) => prevTotal + subtotal / quantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal((prevTotal) => prevTotal - subtotal / quantity);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="checkoutContainer">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="stepContent">
        {activeStep === steps.length ? (
          <Typography>All steps completed</Typography>
        ) : (
          <div>
            {activeStep === 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Card className="cartCard">
                    <CardContent>
                      <div className="cartItem">
                        <div className="featureLabel">
                          <Typography variant="body2">71.2% OFF</Typography>
                        </div>

                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkSjKA5gew0qkiA8VoRGhd3EfKFRNdTGx1A&s"
                          alt="Pillow Chair with Arm"
                          className="productImage"
                        />
                        <div className="productDetails">
                          <Typography variant="h4">Stone</Typography>
                          <Typography variant="body2" className="category">
                            Category: Home Appliances
                          </Typography>
                          <Typography variant="body2" className="brand">
                            Brand: Smartex
                          </Typography>
                          <Typography variant="body2" className="sku">
                            SKU: MV006
                          </Typography>
                          <div className="star-rating">
                            <StarRateIcon className="yellow-star" />
                            <StarRateIcon className="yellow-star" />
                            <StarRateIcon className="yellow-star" />
                            <StarRateIcon className="yellow-star" />
                            <StarRateIcon className="black-star" />
                            <Typography variant="body2" className="reviewCount">
                              4/5 Reviews
                            </Typography>
                          </div>
                          <div className="icons">
                            <Tooltip title="Add to Wishlist">
                              <IconButton>
                                <FavoriteBorderIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Share">
                              <IconButton>
                                <ShareIcon />
                              </IconButton>
                            </Tooltip>
                          </div>
                          <div className="offerEnd">
                            <Typography variant="h5">
                              Offer ends in: 2d 5h
                            </Typography>
                          </div>
                          <div className="quantityControl">
                            <IconButton onClick={decreaseQuantity}>
                              <RemoveCircleOutlineIcon />
                            </IconButton>
                            <Typography variant="body1" className="quantity">
                              {quantity}
                            </Typography>
                            <IconButton onClick={increaseQuantity}>
                              <AddCircleOutlineIcon />
                            </IconButton>
                          </div>
                          <div className="cartAmount">
                            <Typography variant="h5">
                              Amount: ${subtotal * quantity}
                            </Typography>
                          </div>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#fcca19",
                              color: "black",
                              fontWeight: "800",
                              borderRadius: "8px",
                              "&:hover": {
                                backgroundColor: "#fcca19",
                                color: "black",
                              },
                              marginTop: 6,
                            }}
                            className="custom-add-to-cart-button"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className="summaryCard">
                    <CardContent>
                      <Typography variant="h4">Order Summary</Typography>
                      <hr />
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Subtotal:</Typography>

                        <Typography variant="body1" className="labelRight">
                          ${subtotal}
                        </Typography>
                      </div>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Shipping</FormLabel>

                        <RadioGroup
                          value={shipping}
                          onChange={handleShippingChange}
                        >
                          <FormControlLabel
                            value="localPickup"
                            control={<Radio />}
                            label="Local Pickup: Free"
                          />
                          <FormControlLabel
                            value="flatRate"
                            control={<Radio />}
                            label="Flat Rate: $15"
                          />
                        </RadioGroup>
                        <hr />
                      </FormControl>
                      <div className="orderSummaryDetails">
                        <Typography variant="h6">Tax:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${tax}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="h5">Total Amount:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${total}
                        </Typography>
                      </div>
                      <TextField
                        label="Have a coupon?"
                        value={coupon}
                        onChange={handleCouponChange}
                        fullWidth
                        margin="normal"
                      />
                      <Button
                        variant="contained"
                        onClick={applyCoupon}
                        fullWidth
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "800",
                          "&:hover": {
                            backgroundColor: "#fcca19",
                            color: "black",
                          },
                          marginTop: 2,
                        }}
                        onClick={handleNext}
                        fullWidth
                        className="checkoutButton"
                      >
                        Process to checkout
                      </Button>
                      <div className="paymentMethods">
                        <Typography variant="h6" className="paymentHeader">
                          Accepted Payment Methods
                        </Typography>
                        <div className="paymentImages">
                          <img
                            src="https://pbs.twimg.com/profile_images/1417834595899232256/YzltM_gk_400x400.png"
                            alt="Visa"
                          />
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
                            alt="MasterCard"
                          />
                          <img
                            src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom.png"
                            alt="PayPal"
                          />
                          {/* Add more payment method images as needed */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
            {activeStep === 1 && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Card className="shippingInfoCard">
                    <CardContent>
                      <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="shipping information tabs"
                      >
                        <Tab label="Your Address" />
                        <Tab label="New Address" />
                      </Tabs>
                      <Box sx={{ paddingTop: 2 }}>
                        {tabValue === 0 && (
                          <div className="yourAddress">
                            <Typography variant="h6">Your Address</Typography>
                            <TextField
                              label="Full Name"
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Address"
                              fullWidth
                              margin="normal"
                            />
                            <TextField label="City" fullWidth margin="normal" />
                            <TextField
                              label="Postal Code"
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Country"
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Phone Number"
                              fullWidth
                              margin="normal"
                            />
                          </div>
                        )}
                        {tabValue === 1 && (
                          <div className="newAddress">
                            <Typography variant="h6">New Address</Typography>
                            <TextField
                              label="Full Name"
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Address"
                              fullWidth
                              margin="normal"
                            />
                            <TextField label="City" fullWidth margin="normal" />
                            <TextField
                              label="Postal Code"
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Country"
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Phone Number"
                              fullWidth
                              margin="normal"
                            />
                          </div>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className="summaryCard">
                    <CardContent>
                      <Typography variant="h4">Order Summary</Typography>
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Subtotal:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${subtotal}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Shipping:</Typography>
                        <Typography variant="body1" className="labelRight">
                          {shipping === "localPickup" ? "Free" : "$15"}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Tax:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${tax}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="h5">Total Amount:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${total}
                        </Typography>
                      </div>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "800",
                          "&:hover": {
                            backgroundColor: "#fcca19",
                            color: "black",
                          },
                          marginTop: 2,
                        }}
                        onClick={() => handleNext()}
                        fullWidth
                        className="paymentButton"
                      >
                        Make A Payment
                      </Button>
                      <div className="paymentMethods">
                        <Typography variant="h6" className="paymentHeader">
                          Accepted Payment Methods
                        </Typography>
                        <div className="paymentImages">
                          <img
                            src="https://pbs.twimg.com/profile_images/1417834595899232256/YzltM_gk_400x400.png"
                            alt="Visa"
                          />
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
                            alt="MasterCard"
                          />
                          <img
                            src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom.png"
                            alt="PayPal"
                          />
                          {/* Add more payment method images as needed */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
            {activeStep === 2 && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Card className="paymentCard">
                    <CardContent>
                      <Typography variant="h6">
                        Select Payment Gateway
                      </Typography>
                      <FormControl component="fieldset">
                        <RadioGroup
                          value={paymentGateway}
                          onChange={handlePaymentGatewayChange}
                        >
                          <FormControlLabel
                            value="visa"
                            control={<Radio />}
                            label="Visa"
                          />
                          <FormControlLabel
                            value="mastercard"
                            control={<Radio />}
                            label="MasterCard"
                          />
                          <FormControlLabel
                            value="paypal"
                            control={<Radio />}
                            label="PayPal"
                          />
                        </RadioGroup>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className="summaryCard">
                    <CardContent>
                      <Typography variant="h4">Order Summary</Typography>
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Subtotal:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${subtotal}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Shipping:</Typography>
                        <Typography variant="body1" className="labelRight">
                          {shipping === "localPickup" ? "Free" : "$15"}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="body1">Tax:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${tax}
                        </Typography>
                      </div>
                      <div className="orderSummaryDetails">
                        <Typography variant="h5">Total Amount:</Typography>
                        <Typography variant="body1" className="labelRight">
                          ${total}
                        </Typography>
                      </div>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "800",
                          "&:hover": {
                            backgroundColor: "#fcca19",
                            color: "black",
                          },
                          marginTop: 2,
                        }}
                        onClick={() => handleNext()}
                        fullWidth
                        className="confirmPaymentButton"
                      >
                        Confirm Payment
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
            {activeStep === 3 && (
              <div className="orderConfirmation">
                <CheckCircleIcon className="successIcon" />
                <Typography variant="h4">Your Order is Confirmed!</Typography>
              </div>
            )}
            <div className="navigationButtons">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="backButton"
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#fcca19",
                    color: "black",
                  },
                  marginTop: 2,
                }}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productincart;