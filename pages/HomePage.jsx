import React from "react";
import "../src/App.css";
import products from "../components/products";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Service from "../components/Service";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Service />
      <Footer />
    </>
  );
};

export default HomePage;
