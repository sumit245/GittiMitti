import React from "react";
import "../src/App.css";
import { Divider } from "@mui/material";
import products from "../components/products";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Menu from "../components/Menu";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Horizontal from "../components/Horizontal";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{width:"100%", justifyContent:"center", display:"flex"}}>
        </div>
        <Horizontal/>
      <div style={{display:"flex", flexDirection:"row", width:"100%",height:"60vh", justifyContent:"center"}}>
      <Menu/>    
      <ImageSlider/>
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default HomePage;
