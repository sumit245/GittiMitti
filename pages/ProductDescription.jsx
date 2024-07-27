import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductDescription = ({ productName, productImage, rating, boughtCount, price, seller, about }) => {
  return (
    <>
      <Header />
      <div className="row-wise">
        <div className="column">
          {/* Product Image */}
          <img src={productImage} className="leftImg" alt={productName} />
        </div>

        <div className="column">
          {/* Product Details */}
          <p className="bigHeading">{productName}</p>
          <p className="smallHeading" style={{ color: "green", fontWeight: "bold", marginBottom: "10px" }}>
            <FontAwesomeIcon icon={faStar} />
            {rating} RATING
          </p>
          <p className="smallHeading" style={{ marginBottom: "10px" }}>
            {boughtCount} bought in past month
          </p>
          <hr></hr>
          <p className="bigHeading">Rs. {price}/Tonne</p>
          <p className="smallHeading">Inclusive of all taxes</p>
          <p className="text">Sold By - {seller}</p>
          <p style={{ fontWeight: "bold", color: "blue", marginBottom: "10px" }}>
            Verified Plus Supplier
          </p>
          <hr />
          <p className="mediumtext" style={{ marginBottom: "10px" }}>
            About this item
          </p>
          <p className="smalltext">
            {about}
          </p>
        </div>
        <div
          className="column"
          style={{
            borderColor: "grey",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "4px",
            padding: "8px",
            height: "77vh",
            marginTop: "-142px",
          }}
        >
          {/* Purchase Options */}
          <p className="smalltext">One-time purchase:</p>
          <p className="bigHeading">Rs. {price}/Tonne</p>
          <p className="smalltext">
            FREE delivery Saturday, 13 July on your first order.
          </p>
          <p className="smalltext">
            Or fastest delivery Tomorrow 8 AM - 12 PM. Order within 13 hrs 38
            mins.
          </p>
          <p className="smalltext" style={{ marginTop: "12px" }}>
            Delivering to 110055-
          </p>
          <p className="mediumtext" style={{ color: "green" }}>
            In stock
          </p>
          <p className="smalltext">Dispatched in 24 hours</p>
          <p className="smalltext">Ships from : Amazon</p>
          <p className="smalltext">Sold by : {seller}</p>
          <p style={{ marginTop: "12px", fontWeight: "bold" }}>Quantity: </p>
          <button className="continue_button">Add To cart</button>
          <button className="continue_button" style={{ backgroundColor: "green" }}>
            Buy Now
          </button>
          <p className="smalltext" style={{ marginTop: "12px" }}>
            Secure transaction
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
