import React from "react";
import "../../src/App.css";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import SmallCards from "../../components/SmallCards";
import SalesSection from "../../components/SalesSection";
import ProductDetails from "../../components/ProductDetails";


export default function SellerPanelHome() {
  return (
    <div className="pageContainer">
      <PermanentDrawerLeft />
      <div style={{ flex: 1 }}>
        <SmallCards />
        <SalesSection />
        <ProductDetails />
      </div>
    </div>
  );
}
