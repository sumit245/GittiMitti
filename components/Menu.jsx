import React from "react";
import "../src/App.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Menu = () => {
  const categories = [
    {
      name: "Aggregate",
      subcategories: [
        { name: "Crushed Stone", details: ["Used for concrete and road construction", "Various sizes available"] },
        { name: "Gravel", details: ["Loose aggregation of rock fragments", "Used for driveways and landscaping"] },
        { name: "Sand", details: ["Used for concrete and plastering", "Available in various grades"] },
        { name: "Recycled Aggregate", details: ["Made from crushed concrete", "Eco-friendly option"] },
      ],
    },
    {
      name: "Bricks",
      subcategories: [
        { name: "Clay Bricks", details: ["Commonly used in masonry walls", "Durable and versatile"] },
        { name: "Concrete Bricks", details: ["High strength", "Used in construction of load-bearing walls"] },
        { name: "Fly Ash Bricks", details: ["Made from fly ash", "Lightweight and eco-friendly"] },
        { name: "Sand Lime Bricks", details: ["Composed of sand and lime", "Used in high-strength applications"] },
      ],
    },
    {
      name: "Cement",
      subcategories: [
        { name: "Portland Cement", details: ["Most common type of cement", "Used for general construction"] },
        { name: "White Cement", details: ["Used for decorative purposes", "High-quality finish"] },
        { name: "Quick Setting Cement", details: ["Sets rapidly", "Used for urgent repairs"] },
        { name: "Hydraulic Cement", details: ["Sets under water", "Used for waterproofing applications"] },
      ],
    },
    {
      name: "Dust",
      subcategories: [
        { name: "Construction Dust", details: ["Generated during construction activities", "Can affect air quality"] },
        { name: "Sand Dust", details: ["Fine particles from sand", "Common in sandy areas"] },
        { name: "Silica Dust", details: ["Fine particles from quartz", "Used in various industrial processes"] },
        { name: "Metal Dust", details: ["Generated from cutting or grinding metals", "Can be hazardous if inhaled"] },
      ],
    },
    {
      name: "Steel",
      subcategories: [
        { name: "Reinforcing Steel", details: ["Used in concrete reinforcement", "High tensile strength"] },
        { name: "Structural Steel", details: ["Used for beams and columns", "Provides support to structures"] },
        { name: "Stainless Steel", details: ["Corrosion-resistant", "Used in various applications"] },
        { name: "Alloy Steel", details: ["Steel alloyed with other elements", "Used for high-strength applications"] },
      ],
    },
    {
      name: "Interlocking Tiles",
      subcategories: [
        { name: "Concrete Tiles", details: ["Durable and weather-resistant", "Used for pavements and driveways"] },
        { name: "Porcelain Tiles", details: ["High-quality finish", "Used for flooring and walls"] },
        { name: "Rubber Tiles", details: ["Shock-absorbing", "Used for playgrounds and sports areas"] },
        { name: "Stone Tiles", details: ["Natural stone", "Used for high-end flooring and wall cladding"] },
      ],
    },
    {
      name: "False Ceiling (POP)",
      subcategories: [
        { name: "Plaster of Paris (POP)", details: ["Used for decorative ceilings", "Can be molded into various shapes"] },
        { name: "Gypsum Ceiling", details: ["Lightweight and easy to install", "Provides good acoustic performance"] },
        { name: "Mineral Fiber Ceiling", details: ["Good acoustic properties", "Used in commercial spaces"] },
        { name: "Metal Ceiling", details: ["Durable and easy to clean", "Used in industrial and commercial spaces"] },
      ],
    },
    {
      name: "AAC Blocks",
      subcategories: [
        { name: "Autoclaved Aerated Concrete (AAC) Blocks", details: ["Lightweight and insulating", "Used for walls and partitions"] },
        { name: "High-Density AAC Blocks", details: ["High strength", "Suitable for load-bearing walls"] },
        { name: "AAC Panels", details: ["Pre-cast panels", "Used for quick construction of walls"] },
        { name: "AAC Blocks with Reinforced Mesh", details: ["Enhanced strength", "Used in areas requiring additional support"] },
      ],
    },
  ];

  return (
    <div className="menu-bar">
      <div className="categories">
        <div className="top-cell">
          <MenuIcon className="hamburger-icon" />
          Categories
        </div>
        {categories.map((category, index) => (
          <div className="category" key={index}>
            {category.name}
            <ArrowForwardIosIcon className="forward-icon"sx={{ fontSize: 12 }}  />
            <div className="subcategories">
              {category.subcategories.map((subcategory, subIndex) => (
                <div className="subcategory" key={subIndex}>
                  {subcategory.name}
                  <ArrowForwardIosIcon className="forward-icon"sx={{ fontSize: 12 }}   />
                  <div className="details">
                    <ul>
                      {subcategory.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
