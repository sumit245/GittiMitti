import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { productsData } from './Aggregate'
import Button from '../components/Button';

export default function ProductDescriptiontemp() {
  // const product = useSelector((state) => state.products.selectedProduct);

  // if (!product) return <div>Loading...</div>;

  // const location = useLocation();
  // const product = location.state.product;

  return (
    <>
      <Navbar />
      {productsData.map((product, index) => (
        <div className="row-wise" style={{ marginTop: "5vh" }} key={index}>
          <div className="column">
            <img src={product.img} className="leftImg" alt={product.title} />
          </div>

          <div className="column">
            <p className="bigHeading">{product.title}</p>
            <p
              className="smallHeading"
              style={{ color: "green", fontWeight: "bold", marginBottom: "10px" }}
            >
              <FontAwesomeIcon icon={faStar} />
              4 RATING
            </p>
            <p className="smallHeading" style={{ marginBottom: "10px" }}>
              3k+ bought in past month
            </p>
            <hr></hr>
            <p className="bigHeading">Rs. 560/Tonne</p>
            <p className="smallHeading">Inclusive of all taxes</p>
            <p className="text">Sold By - Royal Trading Company, Hisar, Haryana</p>
            <p
              style={{ fontWeight: "bold", color: "blue", marginBottom: "10px" }}
            >
              Verified Plus Supplier
            </p>
            <hr />
            <p className="mediumtext" style={{ marginBottom: "10px" }}>
              About this item
            </p>
            <p className="smalltext">
              Thickness: <span>10 mm</span>
            </p>
            <p className="smalltext">
              Grade Standard: <span>Class 1</span>
            </p>
            <p className="smalltext">
              Form: <span>Solid</span>
            </p>
          </div>
          <div
            className="column"
            style={{
              borderColor: "lightGrey",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "4px",
              padding: "8px",
              height: "100vh",
            }}
          >
            <p className="smalltext">One-time purchase:</p>
            <p className="bigHeading">Rs. 560/Tonne</p>
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
            <p className="smalltext">
              Sold by : Royal Trading Company, Hisar, Haryana
            </p>
            <p style={{ marginTop: "12px", fontWeight: "bold" }}>Quantity: </p>
            <Button title="Add to Cart" action={() => setCartCount(val => val + 1)} />
            <Button style={{ backgroundColor: "green" }} title="Buy now" />

            <p className="smalltext" style={{ marginTop: "12px" }}>
              Secure transaction
            </p>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}
