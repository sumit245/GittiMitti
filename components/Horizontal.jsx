import React from "react";
import "../src/App.css";
import { Divider } from "@mui/material";
import products from "../components/products";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function Horizontal() {
  return (
    <div>
       <div className="horizontal">
          <p>Home</p>
          <Divider orientation="vertical" flexItem className="divider" />
          <p>Shop</p>
          <Divider orientation="vertical" flexItem className="divider" />
          <p>Coupon</p>
          <Divider orientation="vertical" flexItem className="divider" />
          <p>Blogs</p>
          <Divider orientation="vertical" flexItem className="divider" />
          <p>Pages</p>
          <Divider/>
          </div>
    </div>
  )
}
